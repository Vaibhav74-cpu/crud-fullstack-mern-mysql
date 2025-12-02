import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 5000,
});

export const fetchStudents = () => API.get("/students");
export const fetchStudent = (id) => API.get(`/students/${id}`);
export const createStudent = (data) => API.post("/students", data);
export const updateStudent = (id, data) => API.put(`/students/${id}`, data);
export const deleteStudent = (id) => API.delete(`/students/${id}`);


export default API;
