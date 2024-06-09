import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@material-ui/core';

const BookCard = ({ book, onAdd, onRemove, readingList }) => {
  const isAdded = readingList.some((b) => b.title === book.title);

  return (
    <Card style={{ width: 200 }}>
      <CardMedia
        component="img"
        alt={book.title}
        height="80"
        image={book.coverPhotoURL}
        title={book.title}
      />
      <CardContent>
        <Typography variant="h6">{book.title}</Typography>
        <Typography variant="body2" color="textSecondary">{book.author}</Typography>
        {!isAdded ? (
          <Button size="small" color="primary" onClick={() => onAdd(book)}>
            Add
          </Button>
        ) : (
          <Button size="small" color="secondary" onClick={() => onRemove(book)}>
            Remove
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default BookCard;
