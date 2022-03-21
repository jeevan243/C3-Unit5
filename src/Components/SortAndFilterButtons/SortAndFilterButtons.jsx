import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const SortAndFilterButtons = ({ handleSort }) => {
  const [books, setgetBooks] = useState([]);
  // get all books when user lands on the page
  // populate them as mentioned below

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:8080/books").then((res) => {
      setgetBooks(...books, res.data);
    });
  };

  const sortByTitleAsc = () => {
    books.sort((a, b) => {
      return a.title - b.title;
    });
    console.log(books);
    setgetBooks([...books]);
  };

  const sortByTitleDesc = () => {
    books.sort((b, a) => {
      return b.title - a.title;
    });
    console.log(books);
    setgetBooks([...books]);
  };

  const sortByPriceAsc = () => {};
  const sortByPriceDesc = () => {};
  return (
    <div className="sortButtons">
      {/*
        Create 4 sorting buttons here to sort by following criteria:

        sort title in Ascending order  class: sortByTitleAsc
        sort title in Descending order class: sortByTitleDesc
        sort price asending order      class: sortByPriceAsc
        sort price descending order    class: sortByPriceDesc

        on every button click, call the reusable sorting function
        you received from Parent component, 
        and sort the data.

      */}

      <button className="sortByTitleAsc" onClick={sortByTitleAsc}>
        {" "}
        sortByTitleAsc{" "}
      </button>
      <button className="sortByTitleDesc" onClick={sortByTitleDesc}>
        sortByTitleDesc{" "}
      </button>
      <button className="sortByPriceAsc" onClick={sortByPriceAsc}>
        {" "}
        sortByPriceAsc{" "}
      </button>
      <button className="sortByPriceDesc" onClick={sortByPriceDesc}>
        {" "}
        sortByPriceDesc{" "}
      </button>
    </div>
  );
};
