import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "../BooksAPI";

class Search extends Component {
    state = {
        bookToShow: [],
    };
    searchBooks = async (query) => {
        const books = await BooksAPI.search(query);

        let shelfBooks =
            !books.error && books
                ? books.map((book) => {
                      if (this.props.books.some((b) => b.id === book.id)) {
                          book.shelf = this.props.books.find((x) => x.id === book.id).shelf;
                      }
                      return book;
                  })
                : [];
        this.setState({
            bookToShow: shelfBooks,
        });
    };
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">
                        Close
                    </Link>
                    {/* <button className="close-search">Close</button> */}
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={(event) => this.searchBooks(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.bookToShow.map((book) => (
                            <Book moveBook={this.props.moveBook} key={book.id} book={book} />
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Search;