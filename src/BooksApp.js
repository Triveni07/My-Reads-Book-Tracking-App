import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Home from './Home'
import SearchPage from './SearchPage'
import './App.css'

/**
 * This is the main component of Book app and holds Home page as an component with all the details of rendering books.
 */
class BooksApp extends Component {
    state = {
        books: [],
        showSearchPage: false
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books: books })
        })
    }

    //To move books on the shelves: using update method form API
    moveShelf = (book, shelf) => {
        BooksAPI.update(book, shelf);

        BooksAPI.getAll().then((books) => {
            this.setState({ books: books })
        })
    }

    render() {
        return (
            <div className="app">
                <Home
                    books={this.state.books}
                    moveShelf={this.moveShelf}
                />
                <SearchPage />
            </div>
        )
    }
}

export default BooksApp
