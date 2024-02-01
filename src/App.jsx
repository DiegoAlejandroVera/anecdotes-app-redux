import AnecdoteList from "./components/AnecdoteList";
import AnecdoteForm from "./components/AnecdoteForm";
import Filter from "./components/Filter";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/Notification";
import { useEffect } from "react";
import { initializedAnecdotes } from "./reducers/anecdoteReducer";

const App = () => {
  const notification = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializedAnecdotes());
  });

  return (
    <div>
      <h2>Anecdotes</h2>
      {notification && <Notification />}
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
