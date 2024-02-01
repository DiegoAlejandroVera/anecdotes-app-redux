import { useSelector } from "react-redux";
import Anecdote from "./Anecdote";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const filter = useSelector((state) => state.filter);
  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes);
  const style = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const anecdotesToShow =
    filter !== ""
      ? sortedAnecdotes.filter((a) => a.content.includes(filter))
      : sortedAnecdotes;

  return (
    <div style={style}>
      {anecdotesToShow.map((anecdote) => (
        <Anecdote key={anecdote.id} anecdote={anecdote} />
      ))}
    </div>
  );
};

export default AnecdoteList;
