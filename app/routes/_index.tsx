import type { MetaFunction } from "@remix-run/node";
import Home from "~/components/templates/Home";

export const meta: MetaFunction = () => {
  return [
    { title: "Star Wars World!" },
    { name: "description", content: "Welcome to Star Wars World!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Home />
    </div>
  );
}
