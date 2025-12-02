import React, { useState } from "react";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import './App.css'
import Title from "./components/Title";
function App() {
  const [editing, setEditing] = useState(null);

  const onSaved = () => {
    // you can trigger reload by passing callback or using global state
    // simplest: use a stateful key to force list reload (not shown)
    window.location.reload(); // simple but not ideal for production
  };

  return (
    <div className="container">
      <Title/>
      <StudentForm editing={editing} onSaved={onSaved} clearEdit={() => setEditing(null)} />
      <StudentList onEdit={(s) => setEditing(s)} />
    </div>
  );
}

export default App;
