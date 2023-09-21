import './App.css';
import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import AllBooksData from './Components/AllBooksData';
import AddBook from './Components/AddBook';
import EditBook from './Components/EditBook';

function App() {

  const [editData, setEditData] = useState([])

  return (
    <div className='App'>
    <Routes>
        <Route path="/" element={<AllBooksData setEditData = {setEditData} />} />
        <Route path="/add" element={<AddBook/>} />
        <Route path="/edit/:id" element={<EditBook editData = {editData} />} />
    </Routes>
    </div>
  );
}

export default App;

