import React, {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import API_BASE_URL from './global';
import { useNavigate } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';

function BookCard({ book }) {

  const [available, setAvailable] = useState(true);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    window.location.reload(refresh)
  }, [refresh]);

  const deleteBook = async() => {
    try{
       const response = await axios.delete(`${API_BASE_URL}/${book._id}`);
       if(response.status===204){
        setRefresh(!refresh)
       }
    }catch(err){
        console.log(err)
    }
  
};

const navigate = useNavigate();

  return (
    <Card style={{width : '350px', minHeight : '450px', height : 'fit-content', margin : '2%', padding : '5px'}} className="library-item" elevation={3}>
      <CardContent>
        <Typography style = {{fontWeight : 'bold', margin : '10px auto'}} variant="h5" component="div">
          {book.name}
        </Typography>
        <img style={{width : '200px', height : '300px', margin : '10px auto'}} src = {book.poster} alt = {book.title} />
        <Typography style={{margin : '10px auto'}} variant="body2" color="text.secondary">
          <strong>Rating:</strong> {book.rating}
        </Typography>
        <Typography style={{margin : '10px auto'}} variant="body2" color="text.secondary">
          <strong>Summary:</strong> {book.summary}
        </Typography>
        <Button variant='contained' onClick={()=> setAvailable(!available)} >
         Status : {available===true? 'Available' : 'Unavailable'}
        </Button>
      </CardContent>
      <CardActions>
      <Button onClick={()=>navigate(`/edit/${book._id}`)} variant="outlined" startIcon={<EditIcon />}>
        Edit
      </Button>
      <Button onClick={deleteBook} variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      </CardActions>
    </Card>
  );
}

export default BookCard;