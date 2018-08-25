import { Component } from 'react';
import React from "react";
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

class ListBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookshelves: [
        {
          key: "currentlyReading",
          title: "Currently Reading",
          books: []
        },
        {
          key: "wantToRead",
          title: "Want to Read",
          books: []
        },
        {
          key: "read",
          title: "Read",
          books: []
        },
      ]
    }
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.state.bookshelves.map(bs => (
              <Bookshelf key={bs.key} title={bs.title} books={bs.books} />
            ))}
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
