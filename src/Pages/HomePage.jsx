import {BookList } from "../components/BookList/BookList";
import { useState, useEffect } from "react";

export const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/books.json')
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.books);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error loading data. Please try again.');
        setLoading(false);
        console.error('Error loading data', error);
      });
  }, []); 

  return (
    <>
  
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div>
         <h1> min oversigt</h1>
          <BookList books={books} />
        </div>
      )}
    </>
  );
};
