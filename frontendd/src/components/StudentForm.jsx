import React, { useState, useEffect } from "react";
import { createStudent, updateStudent } from "../api";
import './StudentForm.css'

export default function StudentForm({ editing, onSaved, clearEdit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (editing) {
      setName(editing.name);
      setEmail(editing.email);
    } else {
      setName("");
      setEmail("");
    }
  }, [editing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { name, email };
    if (editing) {
      updateStudent(editing.id, payload)
        .then(() => { onSaved(); clearEdit(); })
        .catch(err => console.error(err));
    } else {
      createStudent(payload)
        .then(() => { onSaved(); })
        .catch(err => console.error(err));
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="input" value={name} onChange={e=>setName(e.target.value)} placeholder="Name" />
      <input className="input" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
      <button className="button" type="submit">{editing ? "Update" : "Add"}</button>
    </form>
  );
}
