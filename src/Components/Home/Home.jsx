import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";

import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
export const Home = () => {
  const [books, getBooks] = useState([]);
  // get all books when user lands on the page
  // populate them as mentioned below

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:8080/books").then((res) => {
      getBooks(...books, res.data);
    });
  };

  const Main = styled.div`
    /* Apply some responsive styling to children */
  `;

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      />

      <Main className="mainContainer">
        {/* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
        */}

        {books.map((e)=>{
          return <BookCard/>
        })}
      </Main>
    </div>
  );
};
