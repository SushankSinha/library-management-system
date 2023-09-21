import React from 'react';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

function LibraryItem({ book }) {
  return (
    <Card style={{width : '250px', height : '450px', margin : '15px', padding : '5px'}} className="library-item" elevation={3}>
      <CardContent>
        <Typography style = {{fontWeight : 'bold', margin : '10px auto'}} variant="h5" component="div">
          {book.title}
        </Typography>
        <Typography style={{width : '200px', height : '300px', margin : '10px auto'}} variant="body2" color="text.secondary">
           {book.poster}
        </Typography>
        <Typography style={{margin : '10px auto'}} variant="body2" color="text.secondary">
          <strong>Rating:</strong> {book.rating}
        </Typography>
        <Typography style={{margin : '10px auto'}} variant="body2" color="text.secondary">
          <strong>Summary:</strong> {book.summary}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default LibraryItem;
