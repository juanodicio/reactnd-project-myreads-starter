import React from 'react';
import PropTypes from 'prop-types';

class BookshelfItem extends React.PureComponent {

  static propTypes = {
    book: PropTypes.object.isRequired,
    moveBook: PropTypes.func
  }

  state = {
    currentShelf: this.props.book.shelf
  }

  onChangeShelf = (book, shelf) => {
    this.setState({currentShelf: shelf});
    this.props.moveBook(book, shelf);
  }

  render() {
    const book = this.props.book;
    const thumb = book.imageLinks && book.imageLinks.smallThumbnail;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{width: 128, height: 193, backgroundImage: 'url(' + thumb + ')'}} />
            <div className="book-shelf-changer">
              <select value={this.state.currentShelf}
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
          <div className="book-authors">{ book.authors && book.authors.join(', ') }</div>
        </div>
      </li>
    );
  }
}

export default BookshelfItem;
