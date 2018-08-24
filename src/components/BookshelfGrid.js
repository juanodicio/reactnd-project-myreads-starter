import React from 'react';
import BookshelfItem from './BookshelfItem';

class BookshelfGrid extends React.Component {

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
