import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import API_BASE_URL from './global';
import { useNavigate } from 'react-router-dom';

function AddBook() {

  const [name, setName] = useState('')
  const [poster, setPoster] = useState('')
  const [author, setAuthor] = useState('')
  const [summary, setSummary] = useState('')

  const navigate = useNavigate();

 async function addBook(e) {
  e.preventDefault();
    try{
      const response =  await axios.post(`${API_BASE_URL}/add`, {name : name, poster : poster, author : author, summary : summary});
    
      if(response.status === 201){
        alert(`${name} added to our library!`);
        setAuthor(''); setName(''); setPoster(''); setSummary('')
      }
    }catch(err){
      if(err.message === "Request failed with status code 400"){
        alert("Book already exists!");
      }
        console.log(err.message)
    }
  
};

  return (
    <Container maxWidth="sm" style = {{margin : '2% auto', textAlign : 'center', justifyContent : 'center'}}>

        <h1 >Add a book</h1>

          <form method = 'POST'>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="name"
                  label="Title"
                  variant="outlined"
                  text = 'text'
                  autoComplete='on'
                  required = {true}
                  value = {name}
                  onChange = {(e)=>setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="poster"
                  label="Poster Link"
                  variant="outlined"
                  required = {true}
                  text = 'text'
                  autoComplete='on'
                  value = {poster}
                  onChange = {(e)=>setPoster(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="author"
                  label="Author"
                  variant="outlined"
                  text = 'text'
                  autoComplete='on'
                  required = {true}
                  value = {author}
                  onChange = {(e)=>setAuthor(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="summary"
                  label="Summary"
                  variant="outlined"
                  text = 'text'
                  autoComplete='on'
                  required = {true}
                  value = {summary}
                  onChange = {(e)=>setSummary(e.target.value)}
                />
              </Grid>
              <Grid style={{margin : '10px'}} item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  onClick={addBook}
                  style={{marginLeft : '5%', marginRight : '15%', fontWeight : 'bold'}}
                > Add Book
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={()=>{navigate('/')}}
                  style={{marginLeft : '15%', marginRight : '5%', fontWeight : 'bold'}}
                > Home
                </Button>
              </Grid>
            </Grid>
          </form>
    </Container>
  );
}

export default AddBook;
