import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system/";
import NewWaves from "../components/new-waves";

export interface IDisplayProps {}

export default class Display extends React.Component<IDisplayProps> {
  public render() {
    return (
      <Box
        flex={1}
        sx={{
          height: "100vh",
          // width: "300vh",
          margin: 0,
          padding: 0,
          // backgroundImage: `url(${Image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <NewWaves></NewWaves>
      </Box>
    );
  }
}
