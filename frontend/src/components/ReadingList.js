import React from 'react';
import { List, ListItem, ListItemText, Button } from '@material-ui/core';

const ReadingList = ({ readingList, onRemove }) => {
  return (
    <List>
      {readingList.map((book) => (
        <ListItem key={book.title}>
          <ListItemText primary={book.title} secondary={book.author} />
          <Button variant="contained" color="secondary" onClick={() => onRemove(book)}>
            Remove
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ReadingList;
