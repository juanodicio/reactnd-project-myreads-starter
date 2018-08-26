import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookshelfGrid from './BookshelfGrid'
import PropTypes from 'prop-types'

const BooksAPI = require('../BooksAPI');

class SearchBooks extends Component {
  static propTypes = {
    moveBook: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }

  onSearch = (e) => {
    const term = e.target.value;
    if (term === "") {
      this.setState({results: []});
      return;
    }
    BooksAPI.search(term)
      .then((data) => {
        if (data.error) {
          this.setState({results: []});
        } else {
          let books = data || [];
          this.setState({results: books});
        }

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
          <BookshelfGrid
            books={ this.state.results }
            getDefaultShelf={ this.props.getDefaultShelf }
            moveBook={ this.props.moveBook } />
        </div>
      </div>
    );
  }
}


export default SearchBooks;
