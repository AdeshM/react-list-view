// This can be adapter > axios
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../api/axiosInstance";

const fetchListingData = async (args) => {  // fetchURL || 
    console.log(`arguments >>>`, args)
    const response = await axiosInstance.get('/campaigns-min.json');
    console.log(`response => `, response);
    return response.data;
}

export const useListingData = (queryParams) => {
    const { queryFn, queryKey, fetchURL, ...restQueryParams } = queryParams || {};
    const queryFnWrapper = fetchListingData.bind(fetchURL);
    return useQuery({
        queryFn: (queryFn || !fetchURL ? fetchListingData : queryFnWrapper),
        queryKey: queryKey || ['listing100'],
        staleTime: 1000 * 60 * 1    // 1 minute
    })
}