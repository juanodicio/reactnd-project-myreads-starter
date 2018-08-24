import React from 'react';
import BookshelfItem from './BookshelfItem';

class Bookshelf extends React.Component {
  render(){
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <BookshelfItem />
            <BookshelfItem />
            <BookshelfItem />
          </ol>
        </div>
      </div>
    );
  }
}


export default Bookshelf;
