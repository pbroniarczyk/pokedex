import Link from "next/link";

export default function App() {
  return (
    <div className="app-page">
      <h1 className="w-full text-center text-2xl">Gotta Catch `Em All!</h1>
      <Link className="block w-fit mx-auto text-center" href="/pokemon-list">
        See Pokemon List
      </Link>
    </div>
  );
}
