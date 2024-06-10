import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@material-ui/core';
import images from './imageData';

const BookCard = ({ book, index, onAdd, onRemove, readingList }) => {
  const isAdded = readingList.some((b) => b.title === book.title);

  const getRandomImage = (index) => {
    if (index >= images.length) {
      index = Math.floor(Math.random() * images.length);
    }
    return images[index];
  }

  return (
    <Card style={{ maxHeight: 250 }}>
      <CardMedia
        component="img"
        alt={book.title}
        height="140"
        image={getRandomImage(index)}
        title={book.title}
      />
      <CardContent>
        <Typography variant="p">{book.title}</Typography>
        <Typography variant="body2" color="textSecondary">{book.author}</Typography>
        <div style={{ justifyItems: 'end', width: '100%', display: 'flex' }}>
        {!isAdded ? (
          <Button size="small" color="primary" onClick={() => onAdd(book)}>
            Add
          </Button>
        ) : (
          <Button size="small" color="secondary" onClick={() => onRemove(book)}>
            Remove
          </Button>
        )}
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;
