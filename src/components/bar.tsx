import * as React from "react";
import { Box } from "@mui/system/";
import Divider from "@mui/material/Divider";
import { Parallax } from "react-scroll-parallax";

export interface IBarProps {}

export default class Bar extends React.Component<IBarProps> {
  public render() {
    return (
      <Box
        flex={1}
        sx={{
          height: "5vh",
          width: "100%",
          margin: 0,
          padding: 0,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#272727",
        }}
      >
        <Parallax speed={-1} style={{ background: "blue" }}>
          <Box
            sx={{
              height: "5vh",
              display: "flex",
              width: "100vmax",
              flexGrow: "1",
            }}
          ></Box>
        </Parallax>
      </Box>
    );
  }
}
