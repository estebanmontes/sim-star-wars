import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "~/components/organisms/Header";
import { ComparePlanetsProvider } from "~/context/comparePlanetsContext";
import stylesheet from "~/tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-zinc-900 mx-16 text-white">
        <Header />
        <QueryClientProvider client={queryClient}>
          <ComparePlanetsProvider>
            {children}
            <ScrollRestoration />
            <Scripts />
          </ComparePlanetsProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
