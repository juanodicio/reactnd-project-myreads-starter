import React from 'react';
import BookshelfItem from './BookshelfItem';
import PropTypes from 'prop-types';

class BookshelfGrid extends React.Component {

  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    return (
      <ol className="books-grid">
        {this.props.books && this.props.books.map && (this.props.books.map((book, i) => (
          <BookshelfItem book={book} key={i} />
        )))}
      </ol>
    );
  }
}

export default BookshelfGrid;
