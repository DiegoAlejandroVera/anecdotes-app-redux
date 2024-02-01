import { createSlice } from "@reduxjs/toolkit";
import { getAnecdotes, updateAnecdote } from "../services/anecdotes-service";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    addVote(state, action) {
      const anecdote = action.payload;

      return state.map((a) => (a.id !== anecdote.id ? a : anecdote));
    },
    addAnecdote(state, action) {
      const anecdote = action.payload;

      state.push(anecdote);
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { addVote, addAnecdote, appendAnecdote, setAnecdotes } =
  anecdoteSlice.actions;

export const initializedAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await getAnecdotes();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const addAnecdoteVote = (id) => {
  return async (dispatch, getState) => {
    const anecdotes = getState().anecdotes;
    const anecdote = anecdotes.find((a) => a.id === id);
    const newData = { ...anecdote, votes: anecdote.votes + 1 };
    const updatedAnecdote = await updateAnecdote(id, newData);
    dispatch(addVote(updatedAnecdote));
  };
};

export default anecdoteSlice.reducer;
