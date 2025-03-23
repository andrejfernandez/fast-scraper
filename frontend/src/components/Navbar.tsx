import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 border-b  w-full">
      <Link to="/">
        <h1 className="text-3xl font-bold">Fast-Scraper</h1>
      </Link>
      <div className="flex">
        <Link to="/report" className="mr-4 self-center">
          <h3 className="font-semibold">Report</h3>
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
