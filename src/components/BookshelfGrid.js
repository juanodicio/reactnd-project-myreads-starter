import React from 'react';
import BookshelfItem from './BookshelfItem';

class BookshelfGrid extends React.Component {
  render() {
    return (
      <ol className="books-grid">
        <BookshelfItem />
        <BookshelfItem />
        <BookshelfItem />
      </ol>
    );
  }
}

export default BookshelfGrid;
