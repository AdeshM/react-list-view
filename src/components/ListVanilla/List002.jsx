import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
import { useState } from 'react';
import Filters from './Filter002';
import axiosInstance from "../../api/axiosInstance";

const fetchList = async (filters) => {
//   const { data } = await axios.get('/your-api-endpoint', { params: filters });
    const response = await axiosInstance.get('/campaigns-min.json', { params: filters });
    console.log(response);
    return response.data;
};

const ListView = () => {
  const [filters, setFilters] = useState({});
//   const { data = [{id: 1, name: "ABCD 111212 "}], isLoading=false, error=null } = {};
  const { data, isLoading, error } = useQuery({
    queryKey: ['listing100', filters],
    queryFn: () => fetchList(filters)
// }, {
//     keepPreviousData: true,
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div>
      <Filters onChange={handleFilterChange} />
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.id} | {item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListView;
