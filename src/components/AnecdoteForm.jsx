import { useDispatch } from "react-redux";
import { addAnecdote } from "../reducers/anecdoteReducer";
import { callNotification } from "../reducers/notificationReducer";
import { createAnecdote } from "../services/anecdotes-service";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleCreate = async (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    e.target.content.value = "";
    const newAnecdote = await createAnecdote(content);
    dispatch(addAnecdote(newAnecdote));
    dispatch(callNotification(content));
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleCreate}>
        <div>
          <input name="content" />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
