import React, { Component } from "react";

class Book extends Component {
    onChange = (event) => {
        this.props.moveBook(this.props.book, event.target.value);
    };
    render() {
        let authors = "";
        let url = "";
        try {
            authors = this.props.book.authors.join(",");
        } catch {
            authors = "";
        }
        try {
            url = this.props.book.imageLinks.thumbnail ? this.props.book.imageLinks.thumbnail : this.props.book.imageLinks.smallthumbnail;
        } catch (err) {
            console.log("No books to show");
        }

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div
                            className="book-cover"
                            style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url("${url}")`,
                            }}
                        />
                        <div className="book-shelf-changer">
                            <select defaultValue={this.props.book.shelf ? this.props.book.shelf : "none"} onChange={this.onChange}>
                                <option value="move" disabled>
                                    Move to...
                                </option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{authors}</div>
                </div>
            </li>
        );
    }
}

export default Book;
