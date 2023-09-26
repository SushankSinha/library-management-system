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
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

function AddBook() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [author, setAuthor] = useState("");
  const [summary, setSummary] = useState("");
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(null);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const navigate = useNavigate();

  async function addBook() {

    if(name === "" || poster === "" || author === "" || summary === ""){
      setAlert(false);
    }else {

    try {
      const response = await axios.post(`${API_BASE_URL}/add`, {
        name: name,
        poster: poster,
        author: author,
        summary: summary,
      });

      if (response.status === 201) {
        setAlert(true)
        setAuthor("");
        setName("");
        setPoster("");
        setSummary("");
      }
    } catch (err) {
      console.log(err.message);
    }
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
                onChange={(e) => {
                  setName(e.target.value);
                }}
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
                onChange={(e) => {
                  setPoster(e.target.value);
                }}
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
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
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
                onChange={(e) => {
                  setSummary(e.target.value);
                }}
              />
            </Grid>
            <Grid style={{ margin: "10px" }} item xs={12}>
                <Button color="success" variant="contained" onClick={()=>{handleClick();addBook()}} style={{ marginLeft: "5%", marginRight: "15%", fontWeight: "bold"}}>
                  Add Book
                </Button>
                {alert === true ? (<Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                  >
                    Book Added Successfully!
                  </Alert>
                </Snackbar>) :
                (<Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="info"
                    sx={{ width: "100%" }}
                  >
                    All fields are required!
                  </Alert>
                </Snackbar>)}
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
