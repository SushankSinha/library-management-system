import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import API_BASE_URL from './global'

function LibraryForm() {

  const [name, setName] = useState('')
  const [poster, setPoster] = useState('')
  const [rating, setRating] = useState('')
  const [summary, setSummary] = useState('')

 const addBook = async() => {
    try{
        await axios.post(`${API_BASE_URL}/add`, {name : name, poster : poster, rating : rating, summary : summary});
    }catch(err){
        console.log(err)
    }
  
};

  return (
    <Container maxWidth="sm">
      <Formik>
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  name="name"
                  label="Title"
                  variant="outlined"
                  required = {true}
                  value = {name}
                  onChange = {(e)=>{setName(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  name="poster"
                  label="Poster Link"
                  variant="outlined"
                  required = {true}
                  value = {poster}
                  onChange = {(e)=>{setPoster(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  name="rating"
                  label="Rating"
                  variant="outlined"
                  required = {true}
                  value = {rating}
                  onChange = {(e)=>{setRating(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  name="summary"
                  label="Summary"
                  variant="outlined"
                  required = {true}
                  value = {summary}
                  onChange = {(e)=>{setSummary(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={addBook}
                >
                </Button>
              </Grid>
            </Grid>
          </Form>
      </Formik>
    </Container>
  );
}

export default LibraryForm;
