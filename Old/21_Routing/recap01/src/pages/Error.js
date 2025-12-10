import MainNavigation from "../components/MainNavigation.js";

export default function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An Error Occured!</h1>
        <p>Could not find this page.</p>
      </main>
    </>
  );
}
