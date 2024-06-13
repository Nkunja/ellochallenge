import React from 'react';
import { Grid } from '@material-ui/core';
import BookCard from './BookCard';

const DisplayCard = ({ books, addBook, removeBook, readingList }) => {
  return (
    <Grid container spacing={3}>
      {books.map((book, index) => (
        <Grid item key={`${book.title}-${book.author}`} xs={12} sm={6} md={4} lg={3}>
          <BookCard 
            book={book} 
            index={index} 
            onAdd={addBook} 
            onRemove={removeBook} 
            readingList={readingList} 
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default DisplayCard;
