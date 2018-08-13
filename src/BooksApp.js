import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Home from './Home'
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

    AddBook(book) {
        BooksAPI.update(book).then(book => {
            this.setState(state => ({
                books: state.books.concat([book])
            }))
        })
    }

    render() {
        return (
            <div className="app">
                <Home
                    books={this.state.books}
                />
            </div>
        )
    }
}

export default BooksApp
