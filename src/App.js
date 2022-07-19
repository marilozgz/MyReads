import React from 'react'
import { Link, Route } from "wouter";
import { useEffect, useState } from 'react';
import * as BooksAPI from './BooksAPI';
import ListBooks from './pages/ListBooksPage'
import SearchPage from './pages/SearchPage';

import './App.css'
function App() {

  const [books, setBooks] = useState([]);
  const [update, SetUpdate] = useState(true);

  useEffect(() => {
    BooksAPI.getAll()
      .then((response) => setBooks(response))
      .catch((e) => console.log(e));
  }, [update]);

  const updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => SetUpdate(!update))
      .catch((e) => console.log(e));
  };

  return (
    <div className="app">
     <Route path='/'>     <ListBooks books={books} updateBook={updateBook} /></Route>
    <Route path='/search'><SearchPage books={books} updateBook={updateBook} ></SearchPage></Route>
    </div>
  );
}

export default App;