import React, { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import { Box } from "@mui/system/";
import Typography from "@mui/material/Typography";
import { useParallax } from "react-scroll-parallax";

export interface IInfoProps {
  progress?: number;
}

export function Info(props: IInfoProps) {
  const [progress, setProgress] = React.useState<number>(0);
  const { ref } = useParallax<HTMLDivElement>({
    speed: 25,
    onProgressChange: (progress) => setProgress(progress),
  });

  useEffect(() => {
    console.log(progress);
  });

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
      <div ref={ref}>
        <Box
          component="img"
          sx={{
            position: "absolute",
            width: "25vh",
          }}
          src={require("../media/chars/open.png")}
        />
      </div>
    </Box>
  );
}
