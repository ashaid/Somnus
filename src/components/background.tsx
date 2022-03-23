import * as React from "react";
import { Box } from "@mui/system/";
import Image from "../media/backgrounds/layered-waves-haikei.svg";
import Typography from "@mui/material/Typography";
import GameButtons from "../components/game-buttons";
import Video from "../components/video";
import Waves from "../components/waves";

export interface IBackgroundProps {}

export default class Background extends React.Component<IBackgroundProps> {
  public render() {
    return (
      <Box
        flex={1}
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: 0,
          padding: 0,

          display: "flex",
        }}
      >
        <Waves />
        <Box>
          <Video />
          <Typography
            variant="overline"
            fontWeight="bold"
            fontFamily="roboto"
            component="div"
            color="white"
            sx={{
              textAlign: "center",
              justifyContent: "center",
              display: "flex",
              position: "relative",
            }}
          >
            available now for $14.99
          </Typography>

          <GameButtons />
        </Box>
      </Box>
    );
  }
}
