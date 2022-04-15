import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system/";
import NewWaves from "../components/new-waves";
import { Info } from "../components/info";

export interface IDisplayProps {}

export default class Display extends React.Component<IDisplayProps> {
  public render() {
    return <Info></Info>;
  }
}
