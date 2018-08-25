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
  }

  _reloadBooks(){
    BooksAPI.getAll().then(books => {
      console.log(books);
      this.setState({books: books});
    });
  }

  componentDidMount() {
    this._reloadBooks();
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((data) => {
      console.log(data);
      this._reloadBooks();
    });
  };

  render() {
    return (
      <div className="app">
        <Route path="/search" render={(history) => (
          <SearchBooks moveBook={ this.moveBook } />
          )} />
        <Route exact path="/" render={(history) => (
          <ListBooks moveBook={ this.moveBook } books={ this.state.books } />)} />
      </div>
    )
  }
}

export default BooksApp
