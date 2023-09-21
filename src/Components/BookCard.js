import React, {useState} from 'react';
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

  const deleteBook = async(id) => {
    try{
        await axios.delete(`${API_BASE_URL}/id`);
    }catch(err){
        console.log(err)
    }
  
};

const navigate = useNavigate();

  return (
    <Card style={{width : '350px', minHeight : '450px', height : 'fit-content', margin : '15px auto', padding : '5px'}} className="library-item" elevation={3}>
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
        <Button onClick={navigate(`/edit/${book.id}`)} color='warning' size="small"><EditIcon/></Button>
        <Button color='danger' onClick={() => deleteBook(book.id)} size="small"><DeleteIcon/></Button>
      </CardActions>
    </Card>
  );
}

export default BookCard;