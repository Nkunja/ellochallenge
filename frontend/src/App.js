import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Home from './components/Home';
import Books from './components/Books';
import ReadingList from './components/ReadingList';
import theme from './theme'; 

const App = () => {
  const [readingList, setReadingList] = useState([]);

  useEffect(() => {
    const savedReadingList = JSON.parse(localStorage.getItem('readingList')) || [];
    setReadingList(savedReadingList);
  }, []);

  const addBook = (book) => {
    const updatedList = [...readingList, book];
    setReadingList(updatedList);
    localStorage.setItem('readingList', JSON.stringify(updatedList));
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
            element={<Books readingList={readingList} addBook={addBook} removeBook={removeBook} />}
          />
          <Route
            path="/reading-list"
            element={<ReadingList readingList={readingList} onRemove={removeBook} />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
