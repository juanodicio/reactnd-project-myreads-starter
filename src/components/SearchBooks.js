import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookshelfGrid from './BookshelfGrid'
import PropTypes from 'prop-types'
import debounce from 'lodash/debounce';

const BooksAPI = require('../BooksAPI');

class SearchBooks extends Component {
  static propTypes = {
    moveBook: PropTypes.func.isRequired
  }

  state = {
    results: []
  }

  search = debounce((term) => {
    console.log("Search:", term);
    if (term === "") {
      this.setState({results: []});
      return;
    }
    BooksAPI.search(term)
      .then((data) => {
        if (data.error) {
          this.setState({results: []});
        } else {
          let books = (data || []).map((book) => {
            book.shelf = this.props.getDefaultShelf(book);
            return book;
          });
          this.setState({results: books});
        }

      });
  }, 500);

  onSearch = (e) => {
    console.log("onSearch");
    const term = e.target.value;
    this.search(term);
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>

          <div className="search-books-input-wrapper">
            <input type="text" onKeyUp={ this.onSearch }
                   placeholder="Search by title or author"/>

          </div>
        </div>
        <div className="search-books-results">
          <BookshelfGrid
            books={ this.state.results }
            moveBook={ this.props.moveBook } />
        </div>
      </div>
    );
  }
}


export default SearchBooks;
