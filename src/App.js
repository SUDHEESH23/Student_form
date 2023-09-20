// src/App.js
import React, { useState } from 'react';
import './App.css';
import Student from './Student';
import StudentForm from './StudentForm';

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Student Details</h1>
        <StudentForm addStudent={addStudent} />
        <div className="student-list">
          {students.map((student, index) => (
            <Student key={index} {...student} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
