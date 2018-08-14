import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Home from './Home'
import SearchPage from './SearchPage'
import { Route } from 'react-router-dom'
import './App.css'

/**
 * This is the main component of Book app and holds Home page as an component with all the details of rendering books.
 */
class BooksApp extends Component {
    state = {
        books: [],

    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books: books })
        })
    }

    //To move books on the shelves: using update method from API
    moveShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => {
            book.shelf = shelf
            this.setState(state => ({
                books: state.books.filter(b => b.id !== book.id).concat(book)
            }))
        })
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <Home
                        books={this.state.books}
                        moveShelf={this.moveShelf}
                    />
                )} />
                <Route path="/search" render={() => (
                    <SearchPage
                        books={this.state.books}
                        moveShelf={this.moveShelf}
                    />
                )} />
            </div>
        )
    }
}

export default BooksApp
