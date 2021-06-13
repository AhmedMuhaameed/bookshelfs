import React, { Component } from "react";
import { Route } from "react-router-dom";
import BookList from "./component/BookList";
import Search from "./component/SearchBook";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

class App extends Component {
    state = {
        books: [],
    };
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState(() => ({
                books,
            }));
        });
    }
    changeBook = async (book, shelf) => {
        await BooksAPI.update(book, shelf).then((res) => {
            var found = false;
            for (let i = 0; i < this.state.books.length; i++) {
                if (this.state.books[i].id === book.id) {
                    found = true;
                    break;
                }
            }
            if (found) {
                this.setState({
                    books: this.state.books.map((Book) => {
                        if (Book.id === book.id) {
                            Book.shelf = shelf;
                        }
                        return Book;
                    }),
                });
            } else {
                book.shelf = shelf;
                this.setState({
                    books: [...this.state.books, book],
                });
            }
        });
    };
    render() {
        return (
            <div>
                <Route exact path="/" render={() => <BookList books={this.state.books} moveBook={this.changeBook} />}/>
                
                
                <Route path="/store" render={() => <Search  books={this.state.books} moveBook={this.changeBook} />} />
            </div>
        );
    }
}

export default App;
