import React from 'react';
import PropTypes from 'prop-types';

class BookshelfItem extends React.Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    moveBook: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.onChangeShelf = this.onChangeShelf.bind(this);
  }

  onChangeShelf(book, shelf) {
    console.log(book, shelf);
    console.log(this.props);
    this.props.moveBook(book, shelf);
  }

  render() {
    const book = this.props.book;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + book.imageLinks.smallThumbnail + ')' }}></div>
            <div className="book-shelf-changer">
              <select value={book.shelf} defaultValue="none"
                  onChange={ (e) => { this.onChangeShelf(book, e.target.value) } }>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{ book.title }</div>
          <div className="book-authors">{ book.authors } " {book.shelf} "</div>
        </div>
      </li>
    );
  }
}

export default BookshelfItem;
