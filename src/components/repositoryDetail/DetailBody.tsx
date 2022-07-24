import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import { repoType } from "../../model";
import NameValueList from "../shared/NameValueList";

interface Props {
  detail: repoType;
  isLoading: boolean;
}

const DetailBody = ({ detail, isLoading }: Props) => {
  return (
    <Box className={`section`} bgcolor="primary.light" minHeight="80vh">
      <Box
        display="flex"
        justifyContent="center"
        className="container"
        flexDirection="column"
      >
        {isLoading ? (
          <Skeleton
            variant="rectangular"
            animation="wave"
            width="100%"
            height={200}
          />
        ) : (
          <>
            <NameValueList
              label="Owner's Name"
              value={detail?.owner?.login}
              link={detail?.owner?.html_url}
            />

            <NameValueList
              label="Number of issues open"
              value={detail?.open_issues_count}
            />

            <NameValueList
              label="Default Branch"
              value={detail?.default_branch}
            />
          </>
        )}
      </Box>
    </Box>
  );
};

export default DetailBody;
