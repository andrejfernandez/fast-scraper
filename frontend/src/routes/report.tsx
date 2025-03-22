import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import type { ScrapeResponse, UrlSearchParam } from "@/lib/types";

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

  const convertToImage = (base64String: string) => {
    try {
      if (!base64String.includes("data:image")) {
        return `data:image/png;base64,${base64String}`;
      } else {
        return base64String;
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (isPending)
    return (
      <div className="[view-transition-name:main-content] mt-50 flex flex-col text-center justify-center">
        <Loader />
      </div>
    );

  if (error)
    return (
      <div className="[view-transition-name:main-content] h-screen flex flex-col text-center justify-center">
        <div>{`An error has occurred: + ${error.message}`}</div>
      </div>
    );

  return (
    <div className="[view-transition-name:main-content]">
      <h1 className="font-semibold text-2xl mt-8">{data.title}</h1>
      {data.screenshot && (
        <img
          src={convertToImage(data.screenshot)}
          alt="Converted from base64"
          className="w-1/3 h-auto mt-8"
        />
      )}
      <LinksTable title={data.title} links={data.relative_links} />
    </div>
  );
}
