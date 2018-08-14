import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'


/** 
 * Component Home is defined to hook up ListBooks component to hold all the books in the main page of Book app
*/
class Home extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Route path="/" render={() => (<ListBooks
                        books={this.props.books}
                        moveShelf={this.props.moveShelf}
                    />
                    )} />


                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>

            </div>
        );
    }
}

export default Home
