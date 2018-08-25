import React from 'react';
import BookshelfItem from './BookshelfItem';
import PropTypes from 'prop-types';

class BookshelfGrid extends React.Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func
  }

  render() {
    return (
      <ol className="books-grid">
        {this.props.books && this.props.books.map && (this.props.books.map((book, i) => (
          <BookshelfItem
            moveBook={ this.props.moveBook }
            book={book} key={i} />
        )))}
      </ol>
    );
  }
}

export default BookshelfGrid;
