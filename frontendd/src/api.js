import axios from "axios";
import dotenv from 'dotenv';
dotenv.config()

const API = axios.create({
  baseURL: process.env.baseURL,
  timeout: process.env,tim
});

export const fetchStudents = () => API.get("/students");
export const fetchStudent = (id) => API.get(`/students/${id}`);
export const createStudent = (data) => API.post("/students", data);
export const updateStudent = (id, data) => API.put(`/students/${id}`, data);
export const deleteStudent = (id) => API.delete(`/students/${id}`);


export default API;
