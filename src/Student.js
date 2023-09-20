// src/Student.js
import React from 'react';

const Student = ({ name, usn, age, grade, email }) => {
  return (
    <div className="student">
      <h3>Name: {name}</h3>
      <p>USN: {usn}</p>
      <p>Age: {age}</p>
      <p>SEM: {grade}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default Student;
