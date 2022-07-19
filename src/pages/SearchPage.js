import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from "wouter";
import { search } from '../BooksAPI';
import Book from '../components/Book';

const SearchPage = ({ updateBook, books }) => {
  const [query, setQuery] = useState('');
  const [searchBooks, setSearchBooks] = useState([]);

  const updateQuery = (query) => {
    setQuery(query);
    search(query, 20)
      .then((foundBooks) => {
        if (!foundBooks) {
          setSearchBooks([]);
        }
        if (foundBooks) {
          const foundBooksWithShelves = foundBooks.map((foundBook) => {
            for (const book of books) {
              if (foundBook.id === book.id) {
                foundBook.shelf = book.shelf;
                break;
              }
            }
            return foundBook;
          });
          setSearchBooks(foundBooksWithShelves);
        }
      })
      .catch((e) => console.log(e));
  };


  return (
    <div className="search-books">
      <div className="search-books-bar">
       <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => updateQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchBooks.length ? (
            searchBooks.map((book) => {
              return <Book book={book} updateBook={updateBook} key={book.id} />;
            })
          ) : (
            <h3>Nothing Found</h3>
          )}
        </ol>
      </div>
    </div>
  );
};

SearchPage.propTypes = {
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired,
};

export default SearchPage;