import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import API_BASE_URL from './global';
import { Link } from 'react-router-dom';

function LibraryItem({ book }) {

 const deleteBook = async() => {
    try{
        await axios.delete(`${API_BASE_URL}/${book.id}`);
    }catch(err){
        console.log(err)
    }
  
};

  const [available, setAvailable] = useState(true)
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
        <Link to = {`/edit/${book.id}`} style={{color : 'white', textDecoration : 'none'}}>
        <button className='btn btn-warning' style={{display : 'flex', flexDirection : 'row', margin : '5px 25px'}}>
         <EditIcon/>
        </button>
        </Link>
        <button className='btn btn-danger' onClick = {deleteBook} style={{display : 'flex', flexDirection : 'row', margin : '5px 25px'}}>
         <DeleteIcon/>
        </button>
      </CardContent>
    </Card>
  );
}

export default LibraryItem;