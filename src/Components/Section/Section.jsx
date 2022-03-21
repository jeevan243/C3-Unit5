import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";

export const Section = () => {
  const { section } = useParams();
  const [section1, setSection] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/books`).then(({ data }) => {
      const books = data.filter((el) => {
        return el.section == section;
      });
      setSection(books);
      console.log(books);
    });
  }, [section1]);
  // you will receive section name from URL here.
  // Get books for only this section and show
  //   Everything else is same as Home page

  const Main = styled.div`
    /* Same as Homepage */
  `;

  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        {
          //   Show section name here
        }
        {section}
      </h2>
      <SortAndFilterButtons handleSort={"give sorting function to component"} />

      <Main className="sectionContainer">
        {/* SHow same BookCard component here, just like homepage but with books only belong to this Section */}
        {section1.map((e) => {
          return (
            <BookCard
              key={e.id}
              id={e.id}
              imageUrl={e.imageUrl}
              title={e.title}
              price={e.price}
            />
          );
        })}
      </Main>
    </>
  );
};
