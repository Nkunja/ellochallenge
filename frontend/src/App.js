import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Home from './components/Home';
import BookAssignment from './components/AssignBooks';
import ReadingListView from './components/ReadingListView';
import theme from './theme'; 

const App = () => {
  const [readingList, setReadingList] = useState([]);

  useEffect(() => {
    const savedReadingList = JSON.parse(localStorage.getItem('readingList')) || [];
    setReadingList(savedReadingList);
  }, []);

  const addBook = (book) => {
    setReadingList([...readingList, book]);
    localStorage.setItem('readingList', JSON.stringify([...readingList, book]));
  };

  const removeBook = (book) => {
    const updatedList = readingList.filter((b) => b.title !== book.title);
    setReadingList(updatedList);
    localStorage.setItem('readingList', JSON.stringify(updatedList));
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/books"
            element={<BookAssignment readingList={readingList} addBook={addBook} removeBook={removeBook} />}
          />
          <Route path="/reading-list" element={<ReadingListView readingList={readingList} onRemove={removeBook} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
