import axios from 'axios';

const API_BASE_URL = 'https://library-server-yn8f.onrender.com';

export const getAllBooks = async() => {
    try{
        await axios.get(`${API_BASE_URL}/books`);
    }catch(err){
        console.log(err)
    }
};

export const addBook = async(book) => {
    try{
        await axios.post(`${API_BASE_URL}/add`, book);;
    }catch(err){
        console.log(err)
    }
  
};

export const updateBook = async(id, book) => {
    try{
        await axios.put(`${API_BASE_URL}/edit/${id}`, book);
    }catch(err){
        console.log(err)
    }
};

export const deleteBook = async(id) => {
    try{
        await axios.delete(`${API_BASE_URL}/${id}`);
    }catch(err){
        console.log(err)
    }
};
