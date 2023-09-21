import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import BookCard from './BookCard';
import axios from 'axios';
import API_BASE_URL from './global'
import { Link } from "react-router-dom";

function AllBooksData({setEditData}) {
  const [books, setBooks] = useState([]);

  const getAllBooks = async() => {
    try{
       const response = await axios.get(`${API_BASE_URL}/books`);
       setBooks(response.data)
    }catch(err){
        console.log(err)
    }
};

  useEffect(() => {
    getAllBooks()
  }, []);

  return (
    <Container maxWidth="md">
      <h1 style={{textAlign : 'center', margin : '10px auto', alignContent : 'center'}} variant="h4" gutterBottom>
        Library's List of Books
      </h1>
      <Link to='/add'>
      <Button style={{display : 'block', margin : 'auto', width : '10%'}} variant="contained" color="primary">
        Add Book
      </Button>
      </Link>
      <Grid >
        {books.map((book, index) => {return(<BookCard key={index} id = {book._id} book={book} setEditData={book} />)
        })}
      </Grid>
    </Container>
  );
}

export default AllBooksData;
