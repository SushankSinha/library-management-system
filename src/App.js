import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AllBooksData from './Components/AllBooksData';
import AddBook from './Components/AddBook';
import Navbar from './Components/Navbar';

function App() {

  return (
    <div className='App'>
    <Navbar/>
    <Routes>
        <Route path="/" element={<AllBooksData />} />
        <Route path="/add" element={<AddBook/>} />
    </Routes>
    </div>
  );
}

export default App;

