import PropTypes from "prop-types";
import BookShelf from "../components/BookShelf";
import { Link } from "wouter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const MainPage = ({ books, updateBook }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {books.length && (
          <div>
            <BookShelf
              title="Currently Reading"
              shelfName="currentlyReading"
              books={books}
              updateBook={updateBook}
            />
            <BookShelf
              title="Want To Read"
              shelfName="wantToRead"
              books={books}
              updateBook={updateBook}
            />
            <BookShelf
              title="Read"
              shelfName="read"
              books={books}
              updateBook={updateBook}
            />
          </div>
        )}
      </div>
      <div className="open-search">
        <Link className="open-search-icon" to="/search"><FontAwesomeIcon icon={solid('magnifying-glass-plus')} size="4x" color='#2e7d32' beat/>

        </Link> 
      </div>
    </div>
  );
};

MainPage.propTypes = {
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired,
};

export default MainPage;
