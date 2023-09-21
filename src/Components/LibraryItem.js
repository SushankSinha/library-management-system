import React from 'react';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

function LibraryItem({ book }) {
  return (
    <Card className="library-item" elevation={3}>
      <CardContent>
        <Typography variant="h5" component="div">
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Author:</strong> {book.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Year:</strong> {book.year}
        </Typography>
        {/* Add more book details as needed */}
      </CardContent>
    </Card>
  );
}

export default LibraryItem;
