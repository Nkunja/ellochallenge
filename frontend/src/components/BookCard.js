import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@material-ui/core';
import images from './imageData';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    height: 200,
    width: 220,
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    height: 100,
    width: 220,
  },
  cardContent: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));

const BookCard = ({ book, index, onAdd, onRemove, readingList }) => {
  const classes = useStyles();
  const isAdded = readingList.some((b) => b.title === book.title);

  const getRandomImage = (index) => {
    return images[index % images.length];
  };

  const imageSrc = book.coverPhotoURL || getRandomImage(index);

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        component="img"

        alt={book.title}
        image={imageSrc}
        title={book.title}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="body1" style={{ fontSize: '1rem' }}>{book.title}</Typography>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="body2" color="textSecondary">{book.author}</Typography>
          {!isAdded ? (
            <Button size="small" color="primary" style={{ backgroundColor: '#28B8B8' }} onClick={() => onAdd(book)}>
              Add
            </Button>
          ) : (
            <Button size="small" color="primary" style={{ backgroundColor: 'red', color: 'white' }} onClick={() => onRemove(book)}>
              Remove
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;