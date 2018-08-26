import { Component } from 'react';
import React from "react";
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';
import PropTypes from 'prop-types';

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              shelfKey="currentlyReading"
              title="Currently Reading"
              moveBook={ this.props.moveBook }
              getDefaultShelf={ this.props.getDefaultShelf }
              books={this.props.books} />
            <Bookshelf
              shelfKey="wantToRead"
              title="Want to Read"
              moveBook={ this.props.moveBook }
              getDefaultShelf={ this.props.getDefaultShelf }
              books={this.props.books} />
            <Bookshelf
              shelfKey="read"
              title="Read"
              moveBook={ this.props.moveBook }
              getDefaultShelf={ this.props.getDefaultShelf }
              books={this.props.books} />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}


export default ListBooks;
