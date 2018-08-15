import React, { Component } from 'react';
import Book from './Book.js'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI.js'

class SearchPage extends Component {
    state = {
        query: '',
        searchedBooks: []
    }

    clearQuery = () => {
        this.setState({ query: '' })
    }

    updateQuery = (query) => {
        this.setState({ query })
        this.updateSearchedBooks(query);
    }

    updateSearchedBooks = (query) => {
        if (query) {
            BooksAPI.search(query, 30).then((searchedBooks) => {
                if (searchedBooks.error) {
                    this.setState({ searchedBooks: [] });
                } else {
                    if (searchedBooks.count !== 0) {
                        const result = searchedBooks.map((book) => {
                            const defaultBookShelf = 'none';
                            const existingBook = this.state.searchedBooks.find((b) => b.id === book.id);
                            book.shelf = !!existingBook ? existingBook.shelf : defaultBookShelf
                            return book;
                        });
                        this.setState({ searchedBooks: result })
                    }
                }
            })
        }
    }

    render() {
        const { books } = this.props
        const { moveShelf } = this.props
        return (
            <div className="search-books" >
                <div className="search-books-bar">
                    <Link to="/" className="close-search"> Close </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.searchedBooks.map((searchedBook) => (
                                <li key={searchedBook.id}>
                                    <Book
                                        book={searchedBook}
                                        books={books}
                                        moveShelf={moveShelf}
                                    />
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        );
    }
}

export default SearchPage
