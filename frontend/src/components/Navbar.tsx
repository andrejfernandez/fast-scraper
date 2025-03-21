import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between border-b px-6 py-3">
      <Link to="/">
        <h1 className="text-3xl font-bold">Fast-Scraper</h1>
      </Link>
      <ThemeToggle />
    </nav>
  );
}
