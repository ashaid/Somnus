import * as React from "react";
import { Box } from "@mui/system/";
import { CardMedia } from "@mui/material";
import Card from "@mui/material/Card";

export interface IVideoProps {}

export default class Video extends React.Component<IVideoProps> {
  public render() {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* <iframe src="https://www.youtube.com/embed/6ML9ceuSBrY"></iframe> */}
        <Card sx={{}}>
          <CardMedia
            sx={{ height: "50vh", width: "95vh" }}
            component="iframe"
            src="https://www.youtube.com/embed/6ML9ceuSBrY"
          />
        </Card>
      </Box>
    );
  }
}
