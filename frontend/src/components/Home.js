import React from 'react';
import { Container, CardMedia, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import images from './imageData';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
  media: {
    height: 140,
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
    color: '#5ACCC',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Book Viewer
      </Typography>
      <CardMedia
        className={classes.media}
        component="img"
        alt="welcome"
        image={images[2]}
      />
      <Typography variant="body1" gutterBottom>
        This is the home page. You can navigate to the book assignment view to start assigning books to your reading list.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        component={Link}
        to="/books"
      >
        View Books
      </Button>
    </Container>
  );
};

export default Home;
