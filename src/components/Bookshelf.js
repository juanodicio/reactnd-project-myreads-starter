import React from 'react';
import BookshelfGrid from './BookshelfGrid';

class Bookshelf extends React.Component {
  render(){
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <BookshelfGrid />
        </div>
      </div>
    );
  }
}


export default Bookshelf;
