import Book from './Book';
import PropTypes from 'prop-types';

const BookShelf = ({ title, books, shelfName, updateBook }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => {
            return (
              book.shelf === shelfName && <Book book={book} key={book.id} updateBook={updateBook} />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired,
  shelfName: PropTypes.string.isRequired,
};

export default BookShelf;