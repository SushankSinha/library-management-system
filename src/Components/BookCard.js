import React, { useState} from 'react';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import API_BASE_URL from './global';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function BookCard({ book }) {

  const [openEdit, setEditOpen] = useState(false);
  const [name, setName] = useState(book.name)
  const [poster, setPoster] = useState(book.poster)
  const [author, setAuthor] = useState(book.author)
  const [summary, setSummary] = useState(book.summary);
  const [open, setOpen] = useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

  
  const toggleEdit = () => {
    setEditOpen(!openEdit); 
  };

  async function updateBook(e){
    e.preventDefault();
    try{
      const response = await axios.put(`${API_BASE_URL}/edit/${book._id}`, {name, poster, author, summary});
      if(response.status===201){
        setTimeout(()=>{
          window.location.reload()
        }, 5000)
      }
    }catch(err){
        console.log(err)
    }
};

  const deleteBook = async() => {
    try{
       const response = await axios.delete(`${API_BASE_URL}/${book._id}`);
       if(response.status===204){
        setTimeout(()=>{
          window.location.reload()
        }, 5000)
        
       }
    }catch(err){
        console.log(err)
    }
  
};

  return (
    <Card style={{minWidth : '300px', height : 'fit-content', margin : '2%', padding : '5px', textAlign : 'center'}} className="library-item" elevation={3}>
      <CardContent>
        <Typography style = {{fontWeight : 'bold', margin : '10px auto'}} variant="h5" component="div">
          {book.name}
        </Typography>
        <img style={{width : '250px', height : '250px', margin : '10px auto'}} src = {book.poster} alt = {book.title} />
        <Typography style={{margin : '10px auto', fontSize : '20px'}} variant="body2" color="text.secondary">
          <strong>Author:</strong> {book.author}
        </Typography>
        <Typography style={{margin : '10px auto', height : '75px', overflow : 'scroll'}} variant="body2" color="text.secondary">
          <strong>Summary:</strong> {book.summary}
        </Typography>
      </CardContent>
      <CardActions style={{textAlign : 'center', justifyContent : 'center'}}>
      <Button style={{fontWeight : 'bold'}} color='warning' onClick={() => {toggleEdit()}} variant="contained" startIcon={<EditIcon />}>
        Edit
      </Button>
      <Button style={{fontWeight : 'bold'}} color='error' variant="contained" startIcon={<DeleteIcon />} onClick={()=>{handleClick();deleteBook()}}>
        Delete
      </Button>
      <Snackbar open={open} autoHideDuration={4500} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {book.name} Deleted!
        </Alert>
      </Snackbar>
      </CardActions>
      {openEdit && (    <Container maxWidth="sm" style = {{margin : '5% auto'}}>

          <form method='PUT'>
            <Grid container spacing={2}>
        <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="name"
                  label="Title"
                  variant="outlined"
                  type = 'text'
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
                  value = {poster}
                  type = 'text'
                  onChange = {(e)=>setPoster(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="author"
                  label="Author"
                  variant="outlined"
                  type = 'text'
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
                  type = 'text'
                  value = {summary}
                  onChange = {(e)=>setSummary(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                 <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={()=>{updateBook(); handleClick()}}
                  style={{fontWeight : 'bold'}}
                > Update Book
                </Button>
                <Snackbar open={open} autoHideDuration={4500} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
          {book.name} Updated!
        </Alert>
      </Snackbar>
              </Grid>
            </Grid>
          </form>
    </Container>)}
    </Card>
  );
}

export default BookCard;