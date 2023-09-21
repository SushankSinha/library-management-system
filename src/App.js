import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AllBooksData from './Components/AllBooksData';
import AddBook from './Components/AddBook';
import EditBook from './Components/EditBook';

function App() {
  return (
    <div className='App'>
    <Routes>
        <Route path="/" element={<AllBooksData/>} />
        <Route path="/add" element={<AddBook/>} />
        <Route path="/edit/:id" element={<EditBook/>} />
    </Routes>
    </div>
  );
}

export default App;

