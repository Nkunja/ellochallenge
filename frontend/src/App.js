import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BookAssignment from './components/AssignBooks';
import ReadingListView from './components/ReadingListView';

const App = () => {
  const [readingList, setReadingList] = useState([]);

  const addBook = (book) => {
    setReadingList([...readingList, book]);
  };

  const removeBook = (book) => {
    setReadingList(readingList.filter((b) => b.title !== book.title));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookAssignment readingList={readingList} addBook={addBook} removeBook={removeBook} />} />
        <Route path="/reading-list" element={<ReadingListView readingList={readingList} onRemove={removeBook} />} />
      </Routes>
    </Router>
  );
};

export default App;
