import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { Sort } from "@mui/icons-material";
import { useState } from "react";
import { sortOptions } from "../../utils/constant";
import { sortOptionType } from "../../model";

interface Props {
  setSortBy: React.Dispatch<React.SetStateAction<sortOptionType>>;
  total: number;
  searchTerm: string;
}

const RepositoryBodyTop = ({ setSortBy, total, searchTerm }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    option: sortOptionType
  ) => {
    setSortBy(option);
    setSelectedIndex(option?.id);

    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography color="secondary" variant="h5">
        Found {total} results for '{searchTerm}'
      </Typography>

      <IconButton color="secondary" onClick={handleClick}>
        <Sort
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          color="secondary"
          style={{ cursor: "pointer" }}
        />
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {sortOptions.map((option, index) => (
          <MenuItem
            key={option?.id}
            selected={option?.id === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, option)}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default RepositoryBodyTop;
