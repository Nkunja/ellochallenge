import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@material-ui/core';
import images from './imageData';

const BookCard = ({ book, index, onAdd, onRemove, readingList }) => {
  const isAdded = readingList.some((b) => b.title === book.title);

  const getRandomImage = (index) => {
    return images[index % images.length]; // Use modulo to ensure index is within bounds
  };

  const imageSrc = book.coverPhotoURL || getRandomImage(index);

  return (
    <Card style={{ maxHeight: 250 }}>
      <CardMedia
        component="img"
        alt={book.title}
        height="140"
        image={imageSrc}
        title={book.title}
      />
      <CardContent>
        <Typography variant="body1">{book.title}</Typography>
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

