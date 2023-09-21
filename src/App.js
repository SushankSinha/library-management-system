import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LibraryList from './Components/LibraryList';
import LibraryForm from './Components/LibraryForm';

function App() {
  return (
    <Routes>
        <Route path="/" exact component={LibraryList} />
        <Route path="/add" component={LibraryForm} />
        <Route path="/edit/:id" component={LibraryForm} />
    </Routes>
  );
}

export default App;

