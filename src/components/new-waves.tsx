import * as React from "react";
import { Parallax } from "react-scroll-parallax";
import { Box } from "@mui/system/";
import Typography from "@mui/material/Typography";

export interface INewWavesProps {}

export interface INewWavesState {
  count: number;
  clicked: boolean;
  progress: number;
}

export default class NewWaves extends React.Component<
  INewWavesProps,
  INewWavesState
> {
  state: INewWavesState = {
    count: 0,
    clicked: false,
    progress: 0,
  };

  public render() {
    return (
      <Box
        flex={1}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <Parallax speed={-20}>
          <Box
            component="img"
            sx={{
              position: "absolute",
              maxWidth: "25vh",
            }}
            src={require("../media/chars/open.png")}
          />
        </Parallax>
      </Box>
    );
  }
}
