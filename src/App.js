import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LibraryList from './Components/LibraryList';
import LibraryForm from './Components/LibraryForm';

function App() {
  return (
    <div className='App'>
    <Routes>
        <Route path="/" element={<LibraryList/>} />
        <Route path="/add" element={<LibraryForm/>} />
        <Route path="/edit/:id" element={<LibraryForm/>} />
    </Routes>
    </div>
  );
}

export default App;

