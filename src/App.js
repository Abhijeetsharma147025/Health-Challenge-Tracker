// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WorkoutForm from './components/WorkoutForm';
import WorkoutList from './components/WorkoutList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WorkoutForm />} />
          <Route path="/workouts" element={<WorkoutList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
