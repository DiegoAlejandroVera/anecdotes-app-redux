import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../reducers/filterReducer";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const style = { marginBottom: "15px" };

  const handleChange = (e) => {
    const filterText = e.target.value;
    dispatch(setFilter(filterText));
  };

  return (
    <div style={style}>
      filter <input value={filter} onChange={handleChange} />
    </div>
  );
};

export default Filter;
