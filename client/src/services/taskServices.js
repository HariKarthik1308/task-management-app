import axios from "axios";

const API_URL = "/api/tasks";

export const getTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTask = async (taskData, token) => {
  const response = await axios.post(API_URL, taskData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};