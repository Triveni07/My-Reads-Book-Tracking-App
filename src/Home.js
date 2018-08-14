import React, { Component } from 'react'
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
                    <ListBooks
                        books={this.props.books}
                        moveShelf={this.props.moveShelf}
                    />

                </div>
                <div className="open-search">
                    <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>

            </div>
        );
    }
}

export default Home
