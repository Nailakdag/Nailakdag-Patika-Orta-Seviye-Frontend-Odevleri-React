import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/NoteappSlice";

const Filter = () => {
  const filterNote = useSelector((state) => state.noteapp.filterNote);
  const dispatch = useDispatch();
  const handleFilter = (e) => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <div>
      <input
        type="text"
        className="search"
        value={filterNote}
        onChange={(e) => handleFilter(e)}
        placeholder="Search..."
      />
    </div>
  );
};

export default Filter;
