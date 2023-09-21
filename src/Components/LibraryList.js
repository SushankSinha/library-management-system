import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LibraryItem from './LibraryItem';
import axios from 'axios';
import API_BASE_URL from './global'
import { Link } from "react-router-dom";

function LibraryList() {
  const [books, setBooks] = useState([]);

  const getAllBooks = async() => {
    try{
       const response = await axios.get(`${API_BASE_URL}/books`);
       setBooks(response.data)
       console.log(response.data)
    }catch(err){
        console.log(err)
    }
};

  useEffect(() => {
    getAllBooks()
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Library List
      </Typography>
      <Link to='/add'>
      <Button variant="contained" color="primary">
        Add Book
      </Button>
      </Link>
      <Grid container spacing={2}>
        {books.map((book, index) => {return(
          <Grid item xs={12} sm={6} md={4} key={book.id}>
            <LibraryItem key={index} book={book} />
          </Grid>
        )})}
      </Grid>
    </Container>
  );
}

export default LibraryList;
