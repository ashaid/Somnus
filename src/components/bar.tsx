import * as React from "react";
import { Box } from "@mui/system/";
import Divider from "@mui/material/Divider";
import { Parallax } from "react-scroll-parallax";

export interface IBarProps {}

export default class Bar extends React.Component<IBarProps> {
  public render() {
    return (
      <Parallax speed={-3} style={{ background: "blue" }}>
        <Box
          flex={1}
          sx={{
            height: "5vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "#272727",
            // backgroundColor: "red",
          }}
        ></Box>
      </Parallax>
    );
  }
}
