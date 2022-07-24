import { Box, Grid, Typography } from "@mui/material";
import { repoType } from "../../model";
// import { repos } from "../../data/dummyData";
import RepoCard from "../shared/RepoCard";
import RepoCardLoader from "../shared/RepoCardLoader";

interface Props {
  repos: repoType[];
  isLoading: boolean;
}

const RepositoryHeader = ({ repos, isLoading }: Props) => {
  return (
    <Box className={`section`} bgcolor="primary.light" minHeight="80vh">
      <Box mt={6}>
        <Grid container spacing={4}>
          {isLoading ? (
            <>
              <Grid item xl={3} lg={4} sm={6} xs={12}>
                <RepoCardLoader />
              </Grid>
              <Grid item xl={3} lg={4} sm={6} xs={12}>
                <RepoCardLoader />
              </Grid>
              <Grid item xl={3} lg={4} sm={6} xs={12}>
                <RepoCardLoader />
              </Grid>
            </>
          ) : (
            <>
              {repos.length !== 0 ? (
                repos.map((repo) => (
                  <Grid item xl={3} lg={4} sm={6} xs={12}>
                    <RepoCard data={repo} />
                  </Grid>
                ))
              ) : (
                <Typography variant="h4" color="secondary">
                  Search by using different keywords
                </Typography>
              )}
            </>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default RepositoryHeader;
