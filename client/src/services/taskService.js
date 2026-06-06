import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
};

export const getTasks = async () => {
  const response = await axios.get(API_URL, getAuthHeader());
  return response.data;
};

export const addTask = async (taskData) => {
  const response = await axios.post(
    API_URL,
    taskData,
    getAuthHeader()
  );
  return response.data;
};

export const updateTask = async (id, taskData) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    taskData,
    getAuthHeader()
  );
  return response.data;
};

export const deleteTask = async (id) => {
  const response = await axios.delete(
    `${API_URL}/${id}`,
    getAuthHeader()
  );
  return response.data;
};