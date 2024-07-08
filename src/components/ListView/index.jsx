import { DataGrid } from "@mui/x-data-grid";
// import { rows } from "./rows";
// import { columns } from "./columns";

function ListingView(props) {
  const { rows, columns, ...otherProps } = props;
  return (
      <DataGrid
        rows={rows}
        columns={columns}
        {...otherProps}
      />
  );
}

export default ListingView;
