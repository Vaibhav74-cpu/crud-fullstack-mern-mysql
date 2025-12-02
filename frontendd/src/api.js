import axios from "axios";


const API = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: Number(import.meta.env.VITE_TIMEOUT)
});

export const fetchStudents = () => API.get("/students");
export const fetchStudent = (id) => API.get(`/students/${id}`);
export const createStudent = (data) => API.post("/students", data);
export const updateStudent = (id, data) => API.put(`/students/${id}`, data);
export const deleteStudent = (id) => API.delete(`/students/${id}`);


export default API;
