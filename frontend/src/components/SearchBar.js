import React from 'react';
import { TextField } from '@material-ui/core';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <TextField
      label="Search by book name"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      fullWidth
    />
  );
};

export default SearchBar;
