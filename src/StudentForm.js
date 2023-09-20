// src/StudentForm.js
import React, { useState } from 'react';

const StudentForm = ({ addStudent }) => {
  const [name, setName] = useState('');
  const [usn, setUsn] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && usn && age && grade && email) {
      addStudent({ name, usn, age, grade, email });
      setName('');
      setUsn('');
      setAge('');
      setGrade('');
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>USN:</label>
        <input type="text" value={usn} onChange={(e) => setUsn(e.target.value)} />
      </div>
      <div>
        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div>
        <label>SEM:</label>
        <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;
