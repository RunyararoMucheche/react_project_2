import Header from "./components/Header";
import Entry from "./components/Entry";
import entries from "./data.js";

export default function App() {
  // Creating Entry elements
  const entryElement = entries.map((entry) => {
    console.log(entry);
    return <Entry key={entry.id} entry={entry} />;
  });

  // Returning the react data
  return (
    <>
      <Header />
      <main className="container">{entryElement}</main>
    </>
  );
}
