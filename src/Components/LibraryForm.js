import React from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Formik, Form, Field } from 'formik'; // Import Formik components

function LibraryForm({ match, history }) {
  const isEditMode = !!match.params.id;

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        {isEditMode ? 'Edit Book' : 'Add Book'}
      </Typography>
      <Formik
        initialValues={{ title: '', author: '', year: '' }}
        onSubmit={(values, { setSubmitting }) => {
          // Handle form submission here
          // You can access isSubmitting inside this function
          console.log('Submitting...', values);
          setSubmitting(false); // Don't forget to set isSubmitting to false when done
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  name="title"
                  label="Title"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  name="author"
                  label="Author"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  name="year"
                  label="Year"
                  variant="outlined"
                />
              </Grid>
              {/* Add more form fields as needed */}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                >
                  {isEditMode ? 'Update Book' : 'Add Book'}
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default LibraryForm;
