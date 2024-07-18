// src/components/WorkoutList.js
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import './WorkoutList.css';

function WorkoutList() {
  const [workouts, setWorkouts] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const workoutsPerPage = 5;

  useEffect(() => {
    const storedWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];
    setWorkouts(storedWorkouts);
  }, []);

  const filteredWorkouts = workouts.filter(workout =>
    workout.userName.toLowerCase().includes(search.toLowerCase()) &&
    workout.workoutType.toLowerCase().includes(filter.toLowerCase())
  );

  const pageCount = Math.ceil(filteredWorkouts.length / workoutsPerPage);
  const offset = currentPage * workoutsPerPage;
  const currentWorkouts = filteredWorkouts.slice(offset, offset + workoutsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="list-container">
      <h1>Workout List</h1>
      <label>
        Search by name:
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      </label>
      <label>
        Filter by workout type:
        <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
      </label>
      <ul>
        {currentWorkouts.map((workout, index) => (
          <li key={index}>
            {workout.userName} - {workout.workoutType} - {workout.workoutMinutes} minutes
          </li>
        ))}
      </ul>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  );
}

export default WorkoutList;
