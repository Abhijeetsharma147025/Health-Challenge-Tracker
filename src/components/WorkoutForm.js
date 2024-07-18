// src/components/WorkoutForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WorkoutForm.css';

function WorkoutForm() {
  const [userName, setUserName] = useState('');
  const [workoutType, setWorkoutType] = useState('');
  const [workoutMinutes, setWorkoutMinutes] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const workouts = JSON.parse(localStorage.getItem('workouts')) || [];
    workouts.push({ userName, workoutType, workoutMinutes });
    localStorage.setItem('workouts', JSON.stringify(workouts));
    navigate('/workouts');
  };

  return (
    <div className="form-container">
      <h1>Workout Tracker</h1>
      <form onSubmit={handleSubmit}>
        <label>
          User Name:
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required />
        </label>
        <label>
          Workout Type:
          <input type="text" value={workoutType} onChange={(e) => setWorkoutType(e.target.value)} required />
        </label>
        <label>
          Workout Minutes:
          <input type="number" value={workoutMinutes} onChange={(e) => setWorkoutMinutes(e.target.value)} required />
        </label>
        <button type="submit">Add Workout</button>
      </form>
    </div>
  );
}

export default WorkoutForm;
