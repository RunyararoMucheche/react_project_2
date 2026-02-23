import Header from "./components/Header";
import Entry from "./components/Entry";
import entries from "./data.js";

export default function App() {
  // Creating Entry elements
  const entryElement = entries.map((entry) => {
    return (
      <Entry
        key={entry.id}
        img={entry.img}
        title={entry.title}
        country={entry.country}
        googleMapsLink={entry.googleMapsLink}
        dates={entry.dates}
        text={entry.text}
      />
    );
  });

  // Returning the react data
  return (
    <>
      <Header />
      <main className="container">{entryElement}</main>
    </>
  );
}
