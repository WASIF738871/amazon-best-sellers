import Book from "./Book";

import bookList from "../assets/books.json";
import { useState } from "react";

const BookList = () => {
  const [books, setBooks] = useState(bookList);
  return (
    <>
      <h1>amzon best sellers</h1>
      <section className="booklist">
        {books.map((book, index) => (
          <Book key={index} number={index} book={book} />
        ))}
      </section>
    </>
  );
};

export default BookList;
