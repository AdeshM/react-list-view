import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Container, Box } from "@mui/material";
import Listing from "../../components/Listing";
import DataGridListing from "../../components/ListView";
import { getCampaigns } from "./functions";
import { columns } from "../../components/ListView/columns";

export default function Demo() {
  const [ rows, setRows ] = useState([]);
  
  const { data: campaignList = [], isLoading = true } /* query */ = useQuery({
    queryFn: () => getCampaigns(),
    queryKey: ["listview"],
    staleTime: Infinity,
  });

  const transformedRows = campaignList?.map((v) => {
	const { id, name } = v;
	return {
		id: id,
		col1: id,
		col2: name,
	}
  }) || [];

  useEffect(() => {
	setRows([...transformedRows]);
  }, [campaignList])

  // if (isLoading) {
  //   return <>Loading...</>;
  // }
  // console.log(`query => `, campaignList);

  console.log(`rows => `, rows);

  return (
    <>
      <Container fixed maxWidth="xxl" sx={{ height: "90vh" }}>
        <DataGridListing
          rows={rows}
          columns={columns}
          disableRowSelectionOnClick
          hideFooterPagination
          rowCount={rows.length}
          loading={isLoading && !rows.length}
        />
      </Container>																																																																																																	

      {/* <CampaignList rows={campaignList} /> */}
    </>
  );
}
