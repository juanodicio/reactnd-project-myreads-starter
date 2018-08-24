import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookshelfGrid from './BookshelfGrid'

const BooksAPI = require('../BooksAPI');

class SearchBooks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }

  onSearch = (e) => {
    const term = e.target.value;
    BooksAPI.search(term)
      .then((data) => {
        this.setState({results: data});
      });
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>

          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input type="text" onChange={ this.onSearch }
                   placeholder="Search by title or author"/>

          </div>
        </div>
        <div className="search-books-results">
          <BookshelfGrid books={ this.state.results } />
        </div>
      </div>
    );
  }
}


export default SearchBooks;
