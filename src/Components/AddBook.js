import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import axios from "axios";
import API_BASE_URL from "./global";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";

function AddBook() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [author, setAuthor] = useState("");
  const [summary, setSummary] = useState("");
  const [allowed, setAllowed] = useState(true);

  const navigate = useNavigate();

  async function addBook(e) {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_BASE_URL}/add`, {
        name: name,
        poster: poster,
        author: author,
        summary: summary,
      });

      if (response.status === 201) {
        alert(`${name} added to our library!`);
        setAuthor("");
        setName("");
        setPoster("");
        setSummary("");
        setAllowed(false)
      }
    } catch (err) {
      if (err.message === "Request failed with status code 400") {
        alert("Book already exists!");
      }
      console.log(err.message);
    }
  }

  return (

    <Container
      maxWidth="sm"
      style={{
        margin: "2% auto",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Add a Book
      </Typography>
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
                text="text"
                autoComplete="on"
                required={true}
                value={name}
                onChange={(e) => {setName(e.target.value); setAllowed(false)}}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                as={TextField}
                fullWidth
                name="poster"
                label="Poster"
                variant="outlined"
                required={true}
                text="text"
                autoComplete="on"
                value={poster}
                onChange={(e) => {setPoster(e.target.value); setAllowed(false)}}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                as={TextField}
                fullWidth
                name="author"
                label="Author"
                variant="outlined"
                required={true}
                text="text"
                autoComplete="on"
                value={author}
                onChange={(e) => {setAuthor(e.target.value); setAllowed(false)}}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                as={TextField}
                fullWidth
                name="summary"
                label="Summary"
                variant="outlined"
                required={true}
                text="text"
                autoComplete="on"
                value={summary}
                onChange={(e) => {setSummary(e.target.value); setAllowed(false)}}
              />
            </Grid>
            <Grid style={{ margin: "10px" }} item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="success"
                onClick={addBook}
                style={{
                  marginLeft: "5%",
                  marginRight: "15%",
                  fontWeight: "bold",
                }}
                disabled = {allowed}
              >
                {" "}
                Add Book
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={() => {
                  navigate("/");
                }}
                style={{
                  marginLeft: "15%",
                  marginRight: "5%",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Home
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
}

export default AddBook;
