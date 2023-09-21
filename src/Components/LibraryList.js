import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { getAllBooks } from './api';
import LibraryItem from './LibraryItem';

function LibraryList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks().then((response) => {
      setBooks(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Library List
      </Typography>
      <Button variant="contained" color="primary">
        Add Book
      </Button>
      <Grid container spacing={2}>
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.id}>
            <LibraryItem book={book} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default LibraryList;
