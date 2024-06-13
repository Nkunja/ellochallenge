import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Container, Typography, CircularProgress, Button, TextField, Grid } from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import DisplayCard from './DisplayCard';
import DisplayList from './DisplayList';

const GET_BOOKS = gql`
  query Books {
    books {
      author
      coverPhotoURL
      title
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  paginationContainer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)',
  },
}));

const PaginationContainer = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(10),
}));

const Books = ({ readingList, addBook, removeBook }) => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleItemsPerPageChange = (event) => {
    const { value } = event.target;
    setItemsPerPage(parseInt(value, 10));
    setCurrentPage(1);
  };

  const getPaginatedData = (books) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, books.length);
    return books.slice(startIndex, endIndex);
  };

  if (loading) return <CircularProgress />;
  if (error) return <p>Error :(</p>;

  const filteredBooks = data.books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedBooks = getPaginatedData(filteredBooks);
  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);

  return (
    <div style={{ position: 'relative' }}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={2}>
            <TextField
              type="number"
              label="Items per Page"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Search Books"
              value={searchQuery}
              onChange={handleSearchChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" color="primary" onClick={() => navigate('/reading-list')}>
              View Reading List
            </Button>
          </Grid>
          <Grid container spacing={3} justifyContent="center">
            {searchQuery.trim() === '' ? (
              <Grid item xs={12}>
                <DisplayCard books={paginatedBooks} addBook={addBook} removeBook={removeBook} readingList={readingList} />
              </Grid>
            ) : (
              <Grid item xs={5}>
                <DisplayList books={paginatedBooks} addBook={addBook} removeBook={removeBook} readingList={readingList} />
              </Grid>
            )}
          </Grid>

        </Grid>
      </Container>
      <PaginationContainer>
        <div className={classes.paginationContainer}>
          <Button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(null, currentPage - 1)}
            style={{ marginRight: 10 }}
          >
            Previous
          </Button>
          <Typography variant="body1">
            Page {currentPage} of {totalPages}
          </Typography>
          <Button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(null, currentPage + 1)}
            style={{ marginLeft: 10 }}
          >
            Next
          </Button>
        </div>
      </PaginationContainer>
    </div>
  );
};

export default Books;

