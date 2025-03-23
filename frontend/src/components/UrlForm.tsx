import { useState } from "react";
import { Input } from "./ui/input";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";

export default function UrlForm() {
  const navigate = useNavigate();
  const [url, setUrl] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    navigate({
      to: "/report",
      search: {
        url: url,
      },
    });
    toast(`Running scrape on ${url}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        className="w-1/2 mx-auto"
        placeholder="Enter a URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
    </form>
  );
}
