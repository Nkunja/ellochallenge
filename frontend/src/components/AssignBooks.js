import React, { useState, useEffect, useRef } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Container, Typography, CircularProgress, Button, TextField, Grid } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import BookCard from './BookCard';

const GET_BOOKS = gql`
  query Books {
    books {
      author
      coverPhotoURL
      title
    }
  }
`;

const BookAssignment = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [searchQuery, setSearchQuery] = useState('');
  const [readingList, setReadingList] = useState([]);
  const navigate = useNavigate();
  const bookRefs = useRef({});

  useEffect(() => {
    const savedReadingList = JSON.parse(localStorage.getItem('readingList')) || [];
    setReadingList(savedReadingList);
  }, []);

  useEffect(() => {
    localStorage.setItem('readingList', JSON.stringify(readingList));
  }, [readingList]);

  const addBook = (book) => {
    setReadingList((prevReadingList) => {
      const updatedList = [...prevReadingList, book];
      localStorage.setItem('readingList', JSON.stringify(updatedList));
      return updatedList;
    });
  };

  const removeBook = (book) => {
    setReadingList((prevReadingList) => {
      const updatedList = prevReadingList.filter((b) => b.title !== book.title);
      localStorage.setItem('readingList', JSON.stringify(updatedList));
      return updatedList;
    });
  };

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };
  

  if (loading) return <CircularProgress />;
  if (error) return <p>Error :(</p>;

  const filteredBooks = data.books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={8}> 
          <TextField
            label="Search Books"
            value={searchQuery}
            onChange={handleSearchChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={4}> 
          <Button variant="contained" color="primary" onClick={() => navigate('/reading-list')}>
            View Reading List
          </Button>
        </Grid>
        {searchQuery && (
          <Grid item xs={12}>
            <div style={{ maxHeight: 350, overflowY: 'auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3rem' }}>
              {filteredBooks.map((book) => (
                <div key={book.title} ref={(el) => (bookRefs.current[book.title] = el)}>
                  <BookCard book={book} onAdd={addBook} readingList={readingList} onRemove={removeBook} />
                </div>
              ))}
            </div>
          </Grid>
        )}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            All Books
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div style={{ overflowY: 'auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3rem' }}>
            {data.books.map((book) => (
              <div key={book.title} ref={(el) => (bookRefs.current[book.title] = el)}>
                <BookCard book={book} onAdd={addBook} readingList={readingList} onRemove={removeBook} />
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </Container>

  );
};

export default BookAssignment;
