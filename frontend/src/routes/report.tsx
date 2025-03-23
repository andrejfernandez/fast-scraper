import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import type { ScrapeResponse, UrlSearchParam } from "@/lib/types";

import WebsitePreview from "@/components/WebsitePreview";
import LinksTable from "@/components/LinksTable";
import Loader from "@/components/Loader";

export const Route = createFileRoute("/report")({
  validateSearch: (search: Record<string, unknown>): UrlSearchParam => {
    return {
      url: typeof search.url === "string" ? search.url : undefined,
    };
  },
  component: Report,
});

function Report() {
  const search = useSearch({ from: "/report" });

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["scrapeData"],
    queryFn: async () => {
      const response = await axios.post("http://localhost:9000/scrape", {
        url: search.url,
      });
      return (await response.data) as ScrapeResponse;
    },
  });

  if (isPending)
    return (
      <div className="mt-50 flex flex-col text-center justify-center">
        <Loader />
      </div>
    );

  if (error)
    return (
      <div className="h-screen flex flex-col text-center justify-center">
        <div>{`An error has occurred: + ${error.message}`}</div>
      </div>
    );

  return (
    <div className="mx-20 mt-8 p-10 rounded-lg grid grid-cols-5 ">
      {/* Title */}
      <div className="col-span-5 border rounded-t-lg px-4 py-8 text-center">
        <p className="text-center font-semibold">Report for</p>
        <h1 className=" text-3xl font-bold ">
          <a href={search.url} target="_blank" className="hover:underline">
            {search.url}
          </a>
        </h1>
      </div>
      {/* Row 1 */}
      <p className="col-span-1 font-semibold text-end border p-4">Title</p>
      <p className=" col-span-4 border p-4">{data.title}</p>
      {/* Row 2 */}
      <p className="col-span-1 font-semibold text-end border p-4">Screenshot</p>
      <div className="col-span-4 p-4 border">
        <WebsitePreview screenshotBase64={data.screenshot} />
      </div>
      {/* Row 3 */}
      <p className="col-span-1 font-semibold text-end border p-4">
        Relative Links
      </p>
      <div className="col-span-4 p-4 border">
        <LinksTable links={data.relative_links} />
      </div>
    </div>
  );
}
