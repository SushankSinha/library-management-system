import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import BookCard from './BookCard';
import axios from 'axios';
import API_BASE_URL from './global'
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function AllBooksData() {
  const [books, setBooks] = useState([]);
  const [searchBook, setSearchBook] = useState(books);

  const handleSearch = (event) => {
    if(event.target.value === null){;
    setSearchBook(books);
    return 
  }
  const searchedBook = books.filter((item)=> item.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1 )
  setSearchBook(searchedBook)
};

  const getAllBooks = async() => {
    try{
       const response = await axios.get(`${API_BASE_URL}/books`);
       setBooks(response.data)
       setSearchBook(response.data)
    }catch(err){
        console.log(err)
    }
};

  useEffect(() => {
    getAllBooks()
  }, []);

  function CircularIndeterminate() {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container style = {{ width : '95%', margin : "10px auto", display : 'block'}}>
      <Container style = {{ width : '50%', margin : "20px auto", display : 'block'}}>
      <TextField
        type="text"
        placeholder="Search Books"
        onChange={handleSearch}
        variant='outlined'
        fullWidth
      />
    </Container>
      <div style={{display : 'flex', flexDirection : 'row', flexWrap : 'wrap', justifyContent : 'center'}}>
        {books.length===0 ? {CircularIndeterminate} : (searchBook.map((book, index) => {return(<BookCard key={index} id = {book._id} book={book} />)
        }))}
      </div>
    </Container>
  );
}

export default AllBooksData;
