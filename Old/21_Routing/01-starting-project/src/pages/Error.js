import MainNavigation from "../components/MainNaviation";

export default function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occured!</h1>
        <p>could not find this page!</p>
      </main>
    </>
  );
}
