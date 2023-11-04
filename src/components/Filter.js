import { useDispatch } from 'react-redux';
import { filterByname } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(filterByname(e.target.value));
  };
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input type="text" onChange={handleChange} />
    </div>
  );
};
