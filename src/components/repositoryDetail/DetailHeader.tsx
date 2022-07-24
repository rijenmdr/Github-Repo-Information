import { ForkRight, OpenInNew, Star, Visibility } from "@mui/icons-material";
import { Box, Skeleton, Typography } from "@mui/material";
import { repoType } from "../../model";
import { Chip } from "../style";

interface Props {
  detail: repoType;
  isLoading: boolean;
}

const DetailHeader = ({ detail, isLoading }: Props) => {
  return (
    <Box className={`section`} bgcolor="primary.main" color="secondary">
      <Box
        display="flex"
        justifyContent="center"
        flexDirection={"column"}
        alignItems="center"
      >
        {isLoading ? (
          <Skeleton
            animation="wave"
            variant="circular"
            width={100}
            height={100}
          />
        ) : (
          <img
            src={detail?.owner?.avatar_url}
            alt=""
            width={100}
            height={100}
            style={{ borderRadius: "50%", background: "#fff" }}
          />
        )}

        <a href={detail?.html_url} target="_blank" rel="noreferrer">
          {isLoading ? (
            <Skeleton animation="wave" height={30} width={100} />
          ) : (
            <Typography
              sx={{ textDecoration: "underline", wordBreak: "break-all" }}
              mt={2}
              color="secondary"
              variant="h6"
              align="center"
            >
              {detail?.full_name}
              <OpenInNew style={{ color: "#fff", fontSize: 12 }} />
            </Typography>
          )}
        </a>

        {!isLoading && (
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
            mt={2}
          >
            <Chip>
              <Star style={{ fontSize: 16 }} />
              <Typography color="secondary" ml={1} variant="body1">
                {detail?.stargazers_count}
              </Typography>
            </Chip>

            <Chip>
              <Visibility style={{ fontSize: 16 }} />
              <Typography color="secondary" ml={1} variant="body1">
                {detail?.watchers_count}
              </Typography>
            </Chip>

            <Chip>
              <ForkRight style={{ fontSize: 16 }} />
              <Typography color="secondary" ml={1} variant="body1">
                {detail?.forks_count}
              </Typography>
            </Chip>
          </Box>
        )}

        {isLoading ? (
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={"40%"}
            height={50}
          />
        ) : (
          <Typography
            mt={2}
            maxWidth="500px"
            align="center"
            color="secondary"
            variant="body1"
          >
            {detail?.description}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default DetailHeader;
