import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, ListItemAvatar, Avatar, Button } from '@material-ui/core';

const ListDisplay = ({ books, addBook, removeBook, readingList }) => {
  return (
    <List>
      {books.map((book) => (
        <ListItem key={`${book.title}-${book.author}`}>
          <ListItemAvatar>
            <Avatar src={book.coverPhotoURL} alt={`${book.title} cover`} />
          </ListItemAvatar>
          <ListItemText primary={book.title} secondary={book.author} />
          <ListItemSecondaryAction>
            {readingList.some((b) => b.title === book.title) ? (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => removeBook(book)}
              >
                Remove
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={() => addBook(book)}
              >
                Add
              </Button>
            )}
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default ListDisplay;
