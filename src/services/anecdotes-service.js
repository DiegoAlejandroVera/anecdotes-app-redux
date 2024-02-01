import axios from "axios";

const url = "http://localhost:3001/anecdotes";

export const getAnecdotes = async () => {
  const response = await axios.get(url);
  return response.data;
};

export const createAnecdote = async (content) => {
  const newAnecdote = { content, votes: 0 };
  const response = await axios.post(url, newAnecdote);
  return response.data;
};

export const updateAnecdote = async (id, newData) => {
  const response = await axios.put(`${url}/${id}`, newData);
  return response.data;
};
