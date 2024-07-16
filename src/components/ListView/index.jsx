import { DataGrid } from "@mui/x-data-grid";
// import { rows } from "./rows";
// import { columns } from "./columns";
export { useListingData } from './hooks/useListing';

function ListingView(props) {
  const { rows, columns, ...otherProps } = props;
  // const { rows } = useListingData();
  return (
      <DataGrid
        rows={rows}
        columns={columns}
        {...otherProps}
      />
  );
}

export default ListingView;
