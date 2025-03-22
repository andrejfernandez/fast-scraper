import { createFileRoute } from "@tanstack/react-router";
import UrlForm from "@/components/UrlForm";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="[view-transition-name:main-content] h-screen flex flex-col text-center justify-center">
      <h1 className="font-bold text-4xl mb-10">Generate an Site Report</h1>
      <UrlForm />
    </div>
  );
}
