import { useState } from 'react';

const Filters = ({ onChange }) => {
    const [filterState, setFilterState] = useState({});
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFilterState({
        ...filterState,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onChange(filterState);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input name="filter1" onChange={handleInputChange} placeholder="Filter 1" size={10} /> &nbsp;
        <input name="filter2" onChange={handleInputChange} placeholder="Filter 2" size={10} /> &nbsp;
        <button type="submit">Apply Filters</button>
      </form>
    );
  };
  
  export default Filters;
