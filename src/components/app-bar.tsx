import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="bed"
            sx={{ mr: 2 }}
          >
            <LocalHotelIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            textAlign="left"
            sx={{ flexGrow: 1 }}
          >
            Super Awesome Game Name
          </Typography>

          <Button color="inherit">Blog</Button>
          <Button color="inherit">About</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
