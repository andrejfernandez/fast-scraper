import { createFileRoute } from "@tanstack/react-router";
import UrlForm from "@/components/UrlForm";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="flex flex-col text-center justify-center">
      <h1 className="font-bold text-4xl mt-64 mb-10">Generate a Site Report</h1>
      <UrlForm />
    </div>
  );
}
