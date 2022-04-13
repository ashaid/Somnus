import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system/";
import NewWaves from "../components/new-waves";
import { Info } from "../components/info";

export interface IDisplayProps {}

export default class Display extends React.Component<IDisplayProps> {
  public render() {
    return (
      // <Box
      //   flex={1}
      //   sx={{
      //     display: "flex",
      //     alignItems: "stretch",
      //     position: "absolute",
      //     height: "100vh",
      //     width: "100%",
      //     backgroundSize: "cover",
      //   }}
      // >
      <Info></Info>
      // </Box>
    );
  }
}
