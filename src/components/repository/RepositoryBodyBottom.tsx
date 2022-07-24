import { Box, TablePagination } from "@mui/material";

interface Props {
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  total: number;
}

const RepositoryBodyBottom = ({
  limit,
  setLimit,
  page,
  setPage,
  total,
}: Props) => {
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage + 1);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLimit(parseInt(event.target.value, 10));
    setPage(1);
  };

  return (
    <Box display="flex" justifyContent="flex-end" mt={5}>
      <TablePagination
        component="div"
        rowsPerPageOptions={[10, 25, 50]}
        sx={{
          ".MuiTablePagination-displayedRows": {
            color: "#fff",
          },
          ".MuiTablePagination-selectLabel": {
            color: "#fff",
          },
          ".MuiTablePagination-select": {
            color: "#fff",
          },
          "	.MuiTablePagination-selectIcon": {
            color: "#fff",
          },
          ".MuiTablePagination-actions": {
            color: "#fff",
          },
        }}
        count={total}
        page={page - 1}
        onPageChange={handleChangePage}
        rowsPerPage={limit}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default RepositoryBodyBottom;
