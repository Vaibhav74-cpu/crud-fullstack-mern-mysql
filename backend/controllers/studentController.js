import { db } from "../db.js";

// READ all
export const getStudents = (req, res) => {
  db.query("SELECT * FROM students", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.json(results);
  });
};

// READ one
export const getStudent = (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM students WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!results.length) return res.status(404).json({ message: "Not found" });
    return res.json(results[0]);
  });
};

// CREATE
export const addStudent = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email)
    return res.status(400).json({ message: "Missing fields" });

  const q = "INSERT INTO students (name, email) VALUES (?, ?)";
  db.query(q, [name, email], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    // result.insertId -> new student id
    return res.status(201).json({ id: result.insertId, name, email });
  });
};

// UPDATE
export const updateStudent = (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;
  const q = "UPDATE students SET name = ?, email = ? WHERE id = ?";
  db.query(q, [name, email, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Not found" });
    return res.json({ message: "Updated successfully" });
  });
};

// DELETE
export const deleteStudent = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM students WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Not found" });
    return res.json({ message: "Deleted successfully" });
  });
};
