import { Box, Theme } from "@mui/material";
import { InputUnstyled } from "@mui/base";
import styled from "@emotion/styled";

const logo = require("../../assets/logo.png");

interface ThemeType {
  theme: Theme;
}

const StyledInputElement = styled("input")(
  ({ theme }: ThemeType) => `
    width: 60vw;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    border-radius: 20px;
    padding: 1rem 1.2rem;
    border: 1px solid #fff;   
    background-color: #34363c;
    color: #fff;
    
    &:focus {
        outline: none;
      }
  `
);

interface Props {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const RepositoryHeader = ({ searchTerm, setSearchTerm }: Props) => {
  return (
    <Box className={`section`} bgcolor="primary.main">
      <Box display="flex" justifyContent="center">
        <img src={logo} alt="" width={140} height={60} />
      </Box>

      <Box display="flex" justifyContent="center" mt={4}>
        <InputUnstyled
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          components={{ Input: StyledInputElement }}
        />
      </Box>
    </Box>
  );
};

export default RepositoryHeader;
