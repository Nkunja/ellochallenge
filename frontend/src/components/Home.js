import React from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Book Viewer
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is the home page. You can navigate to the book assignment view to start assigning books to your reading list.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/books">
        View Books
      </Button>
    </Container>
  );
};

export default Home;
