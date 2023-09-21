import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

function LibraryItem({ book }) {
  const [available, setAvailable] = useState(true)
  return (
    <Card style={{width : '250px', minHeight : '450px', height : 'fit-content', margin : '15px', padding : '5px'}} className="library-item" elevation={3}>
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
        <Button onClick={()=> setAvailable(!available)} >
          {available===true? 'Available' : 'Issued'}
        </Button>
      </CardContent>
    </Card>
  );
}

export default LibraryItem;
