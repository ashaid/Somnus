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
      <AppBar position="static" sx={{ background: "#1F2033" }}>
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
            fontWeight="medium"
            sx={{ flexGrow: 1 }}
          >
            NITE TIME STUDIOS
          </Typography>

          <Button color="inherit">BLOG</Button>
          <Button color="inherit">ABOUT</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
