import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner";

import Navbar from "../components/Navbar";

export const Route = createRootRoute({
  component: () => (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Navbar />
        <Toaster />
        <Outlet />
        <TanStackRouterDevtools />
      </ThemeProvider>
    </>
  ),
});
