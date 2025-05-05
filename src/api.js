// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://server-production-646c.up.railway.app/api', // Backend root
});

export const getTasks = (query) => API.get('/tasks', { params: query });
export const createTask = (data) => API.post('/tasks', data);
export const updateTask = (id, data) => API.put(`/tasks/${id}`, data);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);
export const toggleTask = (id) => API.patch(`/tasks/${id}/toggle-completed`);
