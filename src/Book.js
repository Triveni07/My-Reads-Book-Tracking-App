import React, { Component } from 'react';

/**
 * This component is used to hold all the book details content and render it by hooking up into ListBooks component
 */
class Book extends Component {
    render() {
        //ES6 object destructuring
        const { book } = this.props
        const { moveShelf } = this.props

        let displayThumbnail = book.imageLinks ?
            book.imageLinks.thumbnail : '';

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"
                        style={{ width: 128, height: 193, backgroundImage: `url("${displayThumbnail}")` }}>
                    </div>
                    <div className="book-shelf-changer">
                        <select
                            onChange={(event) => moveShelf(
                                book, event.target.value
                            )}
                            value={book.shelf}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        );
    }
}

export default Book
