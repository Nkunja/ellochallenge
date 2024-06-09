import React, { useState, useRef } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Container, Typography, Button, TextField, Paper, List, ListItem, ListItemText, CircularProgress } from '@material-ui/core';
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

  const addBook = (book) => {
    setReadingList([...readingList, book]);
  };

  const removeBook = (book) => {
    setReadingList(readingList.filter((b) => b.title !== book.title));
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const scrollToBook = (title) => {
    if (bookRefs.current[title]) {
      bookRefs.current[title].scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) return <CircularProgress />;
  if (error) return <p>Error :(</p>;

  const filteredBooks = data.books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Book Assignment View
      </Typography>
      <TextField
        label="Search Books"
        value={searchQuery}
        onChange={handleSearchChange}
        fullWidth
        margin="normal"
      />
      {searchQuery && (
        <Paper style={{ maxHeight: 200, overflow: 'auto' }}>
          <List>
            {filteredBooks.map((book) => (
              <ListItem button key={book.title} onClick={() => scrollToBook(book.title)}>
                <ListItemText primary={book.title} secondary={book.author} />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
      <Button variant="contained" color="primary" onClick={() => navigate('/reading-list')}>
        View Reading List
      </Button>
      <Typography variant="h6" gutterBottom>
        All Books
      </Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {data.books.map((book) => (
          <div key={book.title} ref={(el) => (bookRefs.current[book.title] = el)}>
            <BookCard book={book} onAdd={addBook} readingList={readingList} onRemove={removeBook} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default BookAssignment;
