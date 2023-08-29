import "./App.css";
import { nanoid } from "nanoid";
import Form from "./components/form/Form";
import Card from "./components/card/Card";
import { Fragment, useEffect, useState } from "react";
import Divider from "./components/utility/divider/Divider";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [entries, setEntries] = useLocalStorageState("myJournalEntries", {
    defaultValue: [
      {
        id: nanoid(),
        isFavourite: false,
        date: "Feb 5, 2025",
        motto: "We are in a state of chaos",
        notes:
          "Today I learned about React State. It was fun! I can't wait to learn more.",
      },
      {
        id: nanoid(),
        isFavourite: false,
        date: "Feb 4, 2025",
        motto: "Props, Props, Props",
        notes:
          "Today I learned about React Props. Mad props to everyone who understands this!",
      },
      {
        id: nanoid(),
        isFavourite: false,
        date: "Feb 3, 2025",
        motto: "How to nest components online fast",
        notes:
          "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
      },
      {
        id: nanoid(),
        isFavourite: false,
        date: "Feb 2, 2025",
        motto: "I'm a React Developer",
        notes: "My React-ion when I learned about React: 😍",
      },
    ],
  });
  const [favouriteEntries, setFavouriteEntries] = useState([]);
  const [showFavourites, setShowFavourites] = useState(false);

  // once after the first render and also whenever entries changes, use effect runs and recalculates the favourite entries
  useEffect(() => {
    const favouriteEntriesArray = entries.filter(
      (entry) => entry.isFavourite === true
    );
    setFavouriteEntries(favouriteEntriesArray);
  }, [entries]);

  // Add new entry from form
  function handleEntry(formEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    setEntries([{ ...formEntry, date, id: nanoid() }, ...entries]);
  }
  // Toggle Favourite Star Icon
  function handleFavourite(id) {
    const updatedEntriesArray = entries.map((entry) => {
      if (entry.id === id) {
        return { ...entry, isFavourite: !entry.isFavourite };
      } else {
        return entry;
      }
    });
    setEntries(updatedEntriesArray);
  }
  // Show All Entries
  function handleClickAll() {
    setShowFavourites(false);
  }

  // Show filtered Entries
  function handleClickFavourites() {
    setShowFavourites(true);
  }

  return (
    <>
      <header>
        <p className="header__title">Journal App</p>
      </header>
      <main>
        <Form onAddEntry={handleEntry} />
        <section>
          <nav className="navigation__list">
            <button
              onClick={handleClickAll}
              type="button"
              className={showFavourites ? `list__item` : `list__item active`}
            >
              All Entries
              <span className="list__item--number">{entries.length}</span>
            </button>
            <button
              onClick={handleClickFavourites}
              type="button"
              className={showFavourites ? `list__item active` : `list__item`}
            >
              Favourites
              <span className="list__item--number">
                {favouriteEntries.length}
              </span>
            </button>
          </nav>
          <ul className="cards__list">
            {showFavourites
              ? favouriteEntries.map((card, index) => {
                  return (
                    <Fragment key={card.id}>
                      <Card {...card} onToggleFavourite={handleFavourite} />
                      {index !== favouriteEntries.length - 1 && <Divider />}
                    </Fragment>
                  );
                })
              : entries.map((card, index) => {
                  return (
                    <Fragment key={card.id}>
                      <Card {...card} onToggleFavourite={handleFavourite} />
                      {index !== entries.length - 1 && <Divider />}
                    </Fragment>
                  );
                })}
          </ul>
        </section>
      </main>
      <footer> © 2023 gregorsart </footer>
    </>
  );
}

export default App;
