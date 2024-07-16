import { useInfiniteQuery } from "@tanstack/react-query";
// import axios from 'axios';
import { useState } from "react";
import Filters from "./Filter002";
import axiosInstance from "../../api/axiosInstance";

const fetchList = async ({ pageParam = 1, filters }) => {
  const response = await axiosInstance.get("campaigns-min.json", {
    params: { ...filters, page: pageParam },
  });
  console.log(response);
  return response.data;
};

const ListView = () => {
  const [filters, setFilters] = useState({});
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["list", filters],
      queryFn: ({ pageParam = 1 }) => fetchList({ pageParam, filters }),
      initialPageParam: 1,
      // {
      getNextPageParam: (lastPage, pages) => lastPage.nextPage ?? false,
    });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  return (
    <div>
      <Filters onChange={setFilters} />
      {data.pages.map((page, i) => (
        <ul key={i}>
          {page.data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ))}
      <button onClick={() => fetchNextPage()} disabled={!hasNextPage}>
        Load More
      </button>
    </div>
  );
};

export default ListView;
