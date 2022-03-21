import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, getBook] = useState([]);
  // Get book details based on ID whenever user lands on the page
  // ID will come from route

  console.log(id);
  console.log("here");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(`http://localhost:8080/books/${id}`).then(({ data }) => {
      getBook(...book, data);
      // console.log(data);
    });
  };

  // console.log(book);

  let review = book.reviews;
  console.log(review);

  return (
    <>
      <div className="bookContainer">
        <h2 className="title">{book.title}</h2>
        <img className="image" src={book.imageUrl} alt="#" />
        <div className="author">{book.author}</div>
        <div className="description">{book.description}</div>
        <div className="price">{book.price}</div>
        <div className="section">{book.section}</div>
        <div className="isbnNumber">{book.isbnNumber}</div>
        <ul className="reviews">
          {/* {review.map((e) => {
            return <li>{e}</li>;
          })} */}
          {/* Reviews will be an array, iterate over them and create a new <li> for every review */}
        </ul>
      </div>
    </>
  );
};
