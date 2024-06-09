import React from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import BookCard from './BookCard';

const ReadingListView = ({ readingList, onRemove }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Reading List
      </Typography>
      {readingList.length === 0 ? (
        <Typography variant="body1">No books in the reading list.</Typography>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          {readingList.map((book) => (
            <BookCard key={book.title} book={book} onRemove={onRemove} readingList={readingList} />
          ))}
        </div>
      )}
      <Button variant="contained" color="primary" onClick={() => navigate('/books')}>
        Back to Book Assignment
      </Button>
    </Container>
  );
};

export default ReadingListView;
