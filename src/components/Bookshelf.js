import React from 'react';
import BookshelfGrid from './BookshelfGrid';
import PropTypes from 'prop-types';

class Bookshelf extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
  }

  render(){
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ this.props.title }</h2>
        <div className="bookshelf-books">
          <BookshelfGrid books={this.props.books} />
        </div>
      </div>
    );
  }
}

export default Bookshelf;
