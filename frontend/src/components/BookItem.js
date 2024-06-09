import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@material-ui/core';

const BookItem = ({ book, onAdd, onRemove, isAdded }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={book.title}
        height="140"
        image={book.coverPhotoURL}
        title={book.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {book.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {book.author}
        </Typography>
        <Button
          variant="contained"
          color={isAdded ? "secondary" : "primary"}
          onClick={() => (isAdded ? onRemove(book) : onAdd(book))}
        >
          {isAdded ? "Remove" : "Add"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookItem;
