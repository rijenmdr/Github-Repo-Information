import { Box, Skeleton } from "@mui/material";
import { Card } from "../style";

const RepoCardLoader = () => {
  return (
    <Card>
      <Box display="flex" alignItems={"center"} mb={2}>
        <Skeleton variant="circular" width={50} height={50} />

        <Skeleton variant="rectangular" width="100%" height={20} />
      </Box>

      <Skeleton variant="rectangular" width="100%" height={50} />

      <Skeleton variant="text" />
    </Card>
  );
};

export default RepoCardLoader;
