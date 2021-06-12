import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Book from "./Book";
class BookList extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
    };

   
    render() {
        const { books } = this.props;
        return (
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Currently Reading</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {books
                                            .filter((b) => b.shelf === "currentlyReading")
                                            .map((b) => (
                                                <Book book={b} key={b.id} moveBook ={this.props.moveBook}/>
                                            ))}
                                    </ol>
                                </div>
                            </div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Want to Read</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {books
                                            .filter((b) => b.shelf === "wantToRead")
                                            .map((b) => (
                                                <Book book={b} key={b.id} moveBook ={this.props.moveBook}/>
                                            ))}
                                    </ol>
                                </div>
                            </div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Read</h2>
                                <div className="bookshelf-books">
                                <ol className="books-grid">
                                        {books
                                            .filter((b) => b.shelf === "read")
                                            .map((b) => (
                                                <Book book={b} key={b.id} moveBook={this.props.moveBook}/>
                                            ))}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/store" className="open-search">
                        <button>Add a book</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default BookList;
