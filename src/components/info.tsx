import React, { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import { Box } from "@mui/system/";
import Typography from "@mui/material/Typography";
import { useParallax } from "react-scroll-parallax";
import Screenshot from "../media/images/screenshot.png";
import Screenshot2 from "../media/images/screenshot2.png";

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
    speed: 20,
    onProgressChange: (progress) => setProgress(progress),
    easing: "easeOutQuint",
    opacity: [0.01, 1],
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
      sx={{
        margin: "5%",
        height: "100vh",
      }}
      ref={ref}
    >
      <Box className="row " sx={{ flexDirection: "row-reverse" }}>
        <Box className="column" sx={{ flex: 2 }}>
          <Typography
            variant="h1"
            fontWeight="bold"
            fontFamily="roboto"
            component="div"
            color="white"
          >
            What is Somnus?
            <Typography
              variant="body1"
              fontFamily="roboto"
              component="div"
              color="white"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque interdum sem metus, sit amet dictum nibh vestibulum
              ac. Fusce non tellus blandit, iaculis enim sed, porttitor tellus.
              In pellentesque diam ac turpis maximus, id semper massa euismod.
              Nulla mollis mi vitae consectetur accumsan. Aenean hendrerit lacus
              in est ultricies efficitur. Donec id odio ut elit auctor tincidunt
              at at tellus. Nulla venenatis nulla in lorem euismod, ut ultrices
              dui gravida. Aliquam maximus, velit nec ultrices efficitur, arcu
              nulla viverra erat, in laoreet est magna id leo.
            </Typography>
          </Typography>
        </Box>

        <Box className="column center">
          <Box
            component="img"
            sx={{
              width: "40vh",
              position: "absolute",
            }}
            src={imageSrc}
            key={imageSrc}
          />
        </Box>
      </Box>
      <Box className="row 2 " sx={{ height: "20%" }} />
      <Box className="row 3">
        <Box className="column" sx={{ flex: 2 }}>
          <Typography
            variant="h1"
            fontWeight="bold"
            fontFamily="roboto"
            component="div"
            color="white"
          >
            Dream Exploration
            <Typography
              variant="body1"
              fontFamily="roboto"
              component="div"
              color="white"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque interdum sem metus, sit amet dictum nibh vestibulum
              ac. Fusce non tellus blandit, iaculis enim sed, porttitor tellus.
              In pellentesque diam ac turpis maximus, id semper massa euismod.
              Nulla mollis mi vitae consectetur accumsan. Aenean hendrerit lacus
              in est ultricies efficitur. Donec id odio ut elit auctor tincidunt
              at at tellus. Nulla venenatis nulla in lorem euismod, ut ultrices
              dui gravida. Aliquam maximus, velit nec ultrices efficitur, arcu
              nulla viverra erat, in laoreet est magna id leo.
            </Typography>
          </Typography>
        </Box>
        <Box className="column center">
          <Box
            component="img"
            sx={{
              width: "40vh",
              position: "absolute",
            }}
            src={Screenshot}
            // key={imageSrc}
          />
        </Box>
      </Box>
      <Box className="row 4" sx={{ height: "20%" }} />
      <Box className="row 5">
        <Box className="column center">
          <Typography
            variant="h1"
            fontWeight="bold"
            fontFamily="roboto"
            component="div"
            color="white"
          >
            About NITE TIME Studios
          </Typography>
          <Box component="img" className="center " src={Screenshot2} />
        </Box>
      </Box>
    </Box>
  );
}
