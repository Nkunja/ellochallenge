import React from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BookCard from './BookCard';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  noBooksMessage: {
    marginBottom: theme.spacing(2),
  },
  bookList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const ReadingList = ({ readingList, onRemove }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Container className={classes.container}>
      <Typography variant="h4" className={classes.title} gutterBottom>
        Reading List
      </Typography>
      {readingList.length === 0 ? (
        <Typography variant="body1" className={classes.noBooksMessage}>No books in the reading list.</Typography>
      ) : (
        <div className={classes.bookList}>
          {readingList.map((book) => (
            <BookCard key={book.title} book={book} onRemove={onRemove} readingList={readingList} />
          ))}
        </div>
      )}
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => navigate('/books')}
      >
        Back to Books
      </Button>
    </Container>
  );
};

export default ReadingList;
