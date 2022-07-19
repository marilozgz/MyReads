import PropTypes from 'prop-types';
import * as c from '../constants/constants'

const Book = ({ book, updateBook }) => {
  const imgUrl = book.imageLinks ? book.imageLinks.thumbnail : '';

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: c.WIDTH,
              height: c.HEIGHT,
              backgroundImage: `url(${imgUrl})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              defaultValue={book.shelf ? book.shelf : 'none'}
              onChange={(e) => updateBook(book, e.target.value)}
            >
              <option value="xxx" disabled>
                Move to...
              </option>
              <option value={c.CURRENTLY_READING}>Currently Reading</option>
              <option value={c.WANT_TO_READ}>Want to Read</option>
              <option value={c.READ_DONE}>Read</option>
              <option value={c.NONE}>None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors ? book.authors.map((author) => author) : ''}
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateBook: PropTypes.func.isRequired,
};

export default Book;