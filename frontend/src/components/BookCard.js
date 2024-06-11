import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@material-ui/core';
import images from './imageData';

const BookCard = ({ book, index, onAdd, onRemove, readingList }) => {
  const isAdded = readingList.some((b) => b.title === book.title);

  const getRandomImage = (index) => {
    return images[index % images.length]; 
  };

  const imageSrc = book.coverPhotoURL || getRandomImage(index);

  return (
    <Card style={{ maxHeight: 230 }}>
      <CardMedia
        component="img"
        alt={book.title}
        height="130"
        image={imageSrc}
        title={book.title}
      />
      <CardContent>
        <Typography variant="body1" style={{ fontSize: '1rem' }}>{book.title}</Typography>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="body2" color="textSecondary">{book.author}</Typography>
          {!isAdded ? (
            <Button size="small" color="primary" style={{ backgroundColor: '#28B8B8' }} onClick={() => onAdd(book)} >
              Add
            </Button>
          ) : (
            <Button size="small" color="primary" style={{ backgroundColor: 'red', color: 'white'}} onClick={() => onRemove(book)}>
              Remove
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;
