import React from 'react'
import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'


class BooksApp extends React.Component {
  state = {
    books: []
  }

  constructor(props) {
    super(props);
    this.moveBook = this.moveBook.bind(this);
    this.getDefaultShelf = this.getDefaultShelf.bind(this);
  }

  _reloadBooks(){
    BooksAPI.getAll().then(books => {
      this.setState({books: books});
    });
  }

  componentDidMount() {
    this._reloadBooks();
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((data) => {
      this._reloadBooks();
    });
  };

  getDefaultShelf = (book) => {
    if (book.shelf) {
      return book.shelf;
    }

    let found = this.state.books.find((b) => b.id === book.id);
    if (found) {
      return found.shelf;
    }

    return 'none';
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={(history) => (
          <SearchBooks
            moveBook={ this.moveBook }
            getDefaultShelf={ this.getDefaultShelf } />
          )}
        />
        <Route exact path="/" render={(history) => (
          <ListBooks
            moveBook={ this.moveBook }
            books={ this.state.books }
            getDefaultShelf={ this.getDefaultShelf }
          />)}
        />
      </div>
    )
  }
}

export default BooksApp
