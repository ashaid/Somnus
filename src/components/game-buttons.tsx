import * as React from "react";
import { Box } from "@mui/system/";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import { ReactComponent as Playstation } from "../media/icons/icons8-playstation.svg";
import { ReactComponent as Xbox } from "../media/icons/icons8-xbox.svg";
import { ReactComponent as Nintendo } from "../media/icons/nintendo-switch-svgrepo-com.svg";

export interface IGameButtonsProps {}

interface StyleSheet {
  [key: string]: React.CSSProperties;
}

export default class GameButtons extends React.Component<IGameButtonsProps> {
  public render() {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          // style={styles.color}
          sx={{ width: "18em" }}
          size="large"
          // disableElevation
          color="secondary"
        >
          <Button
            sx={{ margin: "1vh", height: "3em" }}
            // sx={styles.button}
            // @ts-ignore

            startIcon={<DesktopWindowsIcon />}
          >
            WINDOWS
          </Button>
          <Button
            sx={{
              margin: "1vh",
              height: "3em",
            }}
            startIcon={<Playstation />}
          >
            PLAYSTATION 5
          </Button>
        </ButtonGroup>
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          sx={{ width: "18em" }}
          size="large"
          disableElevation
          color="secondary"
        >
          <Button
            sx={{ margin: "1vh", height: "3em" }}
            startIcon={<Nintendo />}
          >
            NINTENDO SWITCH
          </Button>
          <Button sx={{ margin: "1vh", height: "3em" }} startIcon={<Xbox />}>
            XBOX S
          </Button>
        </ButtonGroup>
      </Box>
    );
  }
}

const styles: StyleSheet = {};
