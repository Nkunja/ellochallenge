import React from 'react';
import { Container, CardMedia, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import images from './imageData';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    textAlign: 'center', 
  },
  media: {
    height: 140,
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
    color: '#5ACCC', 
  },
  links: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    textAlign: 'left', 
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Book Viewer App
      </Typography>
      <CardMedia
        className={classes.media}
        component="img"
        alt="welcome"
        image={images[2]}
      />
      <Typography variant="body1" gutterBottom>
        This is is my take-home-challenge Solution. : 
      
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>Name: Nkunja Denis</p>

        Github Link: 
        <a href="https://github.com/Nkunja" target="_blank" rel="noopener noreferrer" className={classes.links}>
          Nkunja
        </a>
        <br />

        <p>Repository Link:  
        <a href="https://github.com/Nkunja/ellochallenge.git" target="_blank" rel="noopener noreferrer" className={classes.links}>
          Ello Challenge
        </a>
        </p>
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
