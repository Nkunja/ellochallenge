import React from 'react';
import { List, ListItem, ListItemText, Button } from '@material-ui/core';

const BookList = ({ books, onAdd, onRemove, readingList }) => {
  return (
    <List>
      {books.map((book) => (
        <ListItem key={book.title}>
          <ListItemText primary={book.title} secondary={book.author} />
          {!readingList.some(b => b.title === book.title) ? (
            <Button variant="contained" color="primary" onClick={() => onAdd(book)}>
              Add
            </Button>
          ) : (
            <Button variant="contained" color="secondary" onClick={() => onRemove(book)}>
              Remove
            </Button>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default BookList;
