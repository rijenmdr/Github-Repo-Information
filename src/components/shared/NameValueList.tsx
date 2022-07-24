import { OpenInNew } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

interface Props {
  label: string;
  value: string | number;
  link?: string;
}

const NameValueList = ({ label, value, link }: Props) => {
  return (
    <Grid container spacing={2} mb={2} justifyContent="center">
      <Grid item lg={6}>
        <Typography align="right" color="secondary">
          <b>{label}: </b>
        </Typography>
      </Grid>

      <Grid item lg={6}>
        {link ? (
          <a href={link} target="_blank" rel="noreferrer">
            <Typography
              style={{ textDecoration: "underline" }}
              align="left"
              color="secondary"
            >
              {value}
              <OpenInNew style={{ color: "#fff", fontSize: 12 }} />
            </Typography>
          </a>
        ) : (
          <Typography align="left" color="secondary">
            {value}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default NameValueList;
