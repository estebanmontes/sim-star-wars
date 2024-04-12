import { Link } from "@remix-run/react";
export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 bg-zinc-900 text-white border-teal-700 border-b-2">
      <h1 className="text-3xl font-bold">Star Wars World!</h1>
      <nav className="mr-16">
        <ul className="flex space-x-6 text-xl">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/planets" className="hover:underline">
              Planets
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
