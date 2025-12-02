import React, { useEffect, useState } from "react";
import { fetchStudents, deleteStudent } from "../api";
import './StudentList.css'

export default function StudentList({ onEdit }) {
  const [students, setStudents] = useState([]);

  const load = () => {
    fetchStudents()
      .then(res => setStudents(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => { load(); }, []);

  const handleDelete = (id) => {
    if (!confirm("Delete student?")) return;
    deleteStudent(id)
      .then(() => load())
      .catch(err => console.error(err));
  };

  return (
    <div className="container">
      <h2 className="title">Students</h2>
      {students.map(s => (
        <div className="studentCard" key={s.id}>
          <span className="info">{s.name} - {s.email}</span>
          <button className="editBtn" onClick={() => onEdit(s)}>Edit</button>
          <button className="deleteBtn" onClick={() => handleDelete(s.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
