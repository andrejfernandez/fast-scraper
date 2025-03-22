import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/report")({
  component: Report,
});

function Report() {
  return (
    <div className="[view-transition-name:main-content] h-screen flex flex-col text-center justify-center">
      <h1>Hello "/report"!</h1>
    </div>
  );
}
