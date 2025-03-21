import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/report")({
  component: Report,
});

function Report() {
  return <div>Hello "/report"!</div>;
}
