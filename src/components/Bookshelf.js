import React from 'react';
import BookshelfGrid from './BookshelfGrid';
import PropTypes from 'prop-types';

class Bookshelf extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    shelfKey: PropTypes.string.isRequired,
    moveBook: PropTypes.func.isRequired
  }

  render(){
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ this.props.title }</h2>
        <div className="bookshelf-books">
          <BookshelfGrid
            moveBook={ this.props.moveBook }
            books={this.props.books.filter(b => (b.shelf === this.props.shelfKey))} />
        </div>
      </div>
    );
  }
}

export default Bookshelf;
