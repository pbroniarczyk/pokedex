import Navigation from "@/components/Navigation";

export default function App() {
  return (
    <div className="app-page h-screen flex flex-col justify-center items-center bg-[url(/pokeball-bg.svg)] bg-no-repeat bg-center">
      <h1 className="w-full text-center text-2xl text-primary font-bold">Gotta Catch `Em All!</h1>
      <Navigation
        className="block w-fit mx-auto text-center text-secondary-300"
        label="See Pokemon List"
        link="/pokemon-list"
      />
    </div>
  );
}
