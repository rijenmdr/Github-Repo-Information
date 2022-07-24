import { Box, Typography } from "@mui/material";
import { repoType } from "../../model";
import { ForkRight, Star, Visibility } from "@mui/icons-material";

import moment from "moment";
import { Link } from "react-router-dom";
import { Card, Chip } from "../style";

interface Props {
  data: repoType;
}

const RepoCard = ({ data }: Props) => {
  return (
    <Link to={`/repository/${data?.owner?.login}/${data?.name}`}>
      <Card>
        <Box display="flex" alignItems={"center"}>
          <img
            src={data?.owner?.avatar_url}
            alt=""
            style={{
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              background: "#fff",
            }}
          />

          <Typography
            className="multiLineEllipsis"
            style={{ textDecoration: "underline" }}
            variant="h6"
            ml={4}
          >
            {data?.full_name}
          </Typography>
        </Box>

        <Typography className="multiLineEllipsis" my={2} variant="body1">
          {data?.description}
        </Typography>

        <Box display="flex" flexWrap="wrap" justifyContent="space-between">
          <Chip>
            <Star style={{ fontSize: 16 }} />
            <Typography ml={1} variant="body1">
              {data?.stargazers_count}
            </Typography>
          </Chip>

          <Chip>
            <Visibility style={{ fontSize: 16 }} />
            <Typography ml={1} variant="body1">
              {data?.watchers_count}
            </Typography>
          </Chip>

          <Chip>
            <ForkRight style={{ fontSize: 16 }} />
            <Typography ml={1} variant="body1">
              {data?.forks_count}
            </Typography>
          </Chip>
        </Box>

        <Typography variant="body2" color="secondary.light" mt={2}>
          <b> Last updated at: </b>
          {moment(data?.updated_at).format("ll")}
        </Typography>
      </Card>
    </Link>
  );
};

export default RepoCard;
