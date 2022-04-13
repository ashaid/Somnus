import React, { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import { Box } from "@mui/system/";
import Typography from "@mui/material/Typography";
import { useParallax } from "react-scroll-parallax";

const openEye = require("../media/chars/open.png");
const closingEye = require("../media/chars/closing.png");
const squintingEye = require("../media/chars/squinting.png");
const closedEye = require("../media/chars/closed.png");
const eyeImages = { openEye, closingEye, squintingEye, closedEye };
export interface IInfoProps {
  progress?: number;
  imageSrc?: string;
}

export function Info(props: IInfoProps) {
  const [progress, setProgress] = React.useState<number>(0);
  const [imageSrc, setImageSrc] = React.useState(eyeImages.openEye);
  const { ref } = useParallax<HTMLDivElement>({
    speed: 5,
    onProgressChange: (progress) => setProgress(progress),
  });

  useEffect(() => {
    console.log(progress);
    if (progress < 0.5) {
      setImageSrc(eyeImages.openEye);
    } else if (progress > 0.5 && progress < 0.7) {
      setImageSrc(eyeImages.closingEye);
    } else if (progress > 0.7 && progress < 0.87) {
      setImageSrc(eyeImages.squintingEye);
    } else {
      setImageSrc(eyeImages.closedEye);
    }
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
            width: "50vh",
            left: "30vw",
          }}
          src={imageSrc}
          key={imageSrc}
        />
      </div>
      <Box>
        <Typography
          variant="h1"
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
          Demo Text
        </Typography>
      </Box>
    </Box>
  );
}
