// import React from 'react';
// import { Container, CardMedia, Typography, Button } from '@material-ui/core';
// import { Link } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
// import images from './imageData';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     padding: theme.spacing(3),
//   },
//   media: {
//     height: 140,
//     marginBottom: theme.spacing(2),
//   },
//   button: {
//     marginTop: theme.spacing(2),
//     color: '#5ACCC',
//   },
// }));

// const Home = () => {
//   const classes = useStyles();

//   return (
//     <Container className={classes.container}>
//       <Typography variant="h4" gutterBottom>
//         Book Viewer
//       </Typography>
//       <CardMedia
//         className={classes.media}
//         component="img"
//         alt="welcome"
//         image={images[2]}
//       />
//       <Typography variant="body1" gutterBottom>
//         This is my take-home-challenge Solution. I have deploted the backend on render at: https://ellochallenge.onrender.com/ and the frontend at: https://ellochallenge.onrender.com.

//         <p>Name:</p>
//         <p>Github:</p>
//         <p>Github Repo:</p>
//       </Typography>
//       <Button
//         variant="contained"
//         color="primary"
//         className={classes.button}
//         component={Link}
//         to="/books"
//       >
//         View Books
//       </Button>
//     </Container>
//   );
// };

// export default Home;
import React from 'react';
import { Container, CardMedia, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import images from './imageData';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    textAlign: 'center', // Center align content inside the container
  },
  media: {
    height: 140,
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
    color: '#5ACCC', // Adjust color as needed
  },
  links: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    textAlign: 'left', // Align links to the left
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
        This is my take-home-challenge Solution. I have deployed the backend on render at: 
        <a href="https://ellochallenge.onrender.com/" target="_blank" rel="noopener noreferrer" className={classes.links}>
          Backend
        </a>
        <br />
        and the frontend at: 
        <a href="https://ellochallenge.onrender.com/" target="_blank" rel="noopener noreferrer" className={classes.links}>
          Frontend
        </a>
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
