import React, { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import { Box } from "@mui/system/";
import Typography from "@mui/material/Typography";
import { useParallax } from "react-scroll-parallax";
import Screenshot from "../media/images/screenshot.png";
import Screenshot2 from "../media/images/screenshot2.png";
import tony from "../media/headshots/tony-hs.jpg";
import hs from "../media/headshots/hs.jpg";
import hs2 from "../media/headshots/hs2.jpg";
import hs3 from "../media/headshots/hs3.jpeg";
import qMark from "../media/headshots/800px-Question_mark_(black).png";

//@ts-ignore
import CrossfadeImage from "react-crossfade-image";

const openEye = require("../media/chars/open.png");
const closingEye = require("../media/chars/closing.png");
const squintingEye = require("../media/chars/squinting.png");
const closedEye = require("../media/chars/closed.png");
const eyeImages = { openEye, closingEye, squintingEye, closedEye };

const greenForest = require("../media/images/greenForest.png");
const DreamForest = require("../media/images/DreamForest.png");
const forestImages = [greenForest, DreamForest];
export interface IInfoProps {
  progress?: number;
  imageSrc?: string;
  blurAmount?: number;
  imageIndex?: number;
}

export function Info(props: IInfoProps) {
  const [progress, setProgress] = React.useState<number>(0);
  const [imageSrc, setImageSrc] = React.useState(eyeImages.openEye);
  const [blurAmount, setBlurAmount] = React.useState<number>(0);
  const [imageIndex, setImageIndex] = React.useState<number>(0);

  const { ref } = useParallax<HTMLDivElement>({
    speed: 20,
    onProgressChange: (progress) => setProgress(progress),
    easing: "easeOutQuint",
    opacity: [0.01, 1],
  });

  useEffect(() => {
    console.log(progress);
    console.log(blurAmount);
    console.log(imageIndex);

    if (progress < 0.5) {
      setImageSrc(eyeImages.openEye);
      setBlurAmount(10);
    } else if (progress > 0.5 && progress < 0.7) {
      setImageSrc(eyeImages.closingEye);
    } else if (progress > 0.7 && progress < 0.87) {
      setImageIndex(0);
      setImageSrc(eyeImages.squintingEye);
    } else if (progress > 0.87) {
      setImageSrc(eyeImages.closedEye);
    }
    if (progress > 0.92 && progress < 0.94) {
      setBlurAmount(4);
      setImageIndex(1);
    } else if (progress > 0.94 && progress < 0.96) {
      setBlurAmount(3);
    } else if (progress > 0.96) {
      setBlurAmount(0);
    }
  });

  return (
    <Box
      sx={{
        margin: "15%",
      }}
      ref={ref}>
      <Box className="row " sx={{ flexDirection: "row-reverse" }}>
        <Box className="column" sx={{ flex: 2 }}>
          <Typography
            variant="h1"
            fontWeight="bold"
            fontFamily="roboto"
            component="div"
            color="white">
            What is Somnus?
            <Typography
              variant="body1"
              fontFamily="roboto"
              component="div"
              color="white">
              Somnus consists of three seperate parts: Game Demo, Promotional
              Website, and Game Trailer. Somus is the latin word for the state
              of strong desire for sleep or dowsiness.
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
            color="white">
            Dream Exploration
            <Typography
              variant="body1"
              fontFamily="roboto"
              component="div"
              color="white">
              The gameplay of Somnus is that of a 2D side scroller made in the
              Unity Game Engine. The game features reality and dream state that
              can be activated by using the eye charm.
            </Typography>
          </Typography>
        </Box>
        <Box className="column center">
          <CrossfadeImage
            src={forestImages[imageIndex]}
            style={{
              height: "150px",
              borderRadius: "20%",
              position: "absoltue",
            }}
            duration={1000}
          />
        </Box>
      </Box>
      {/* <Box className="row 4" sx={{ height: "20%" }} /> */}

      <Box className="row 5" sx={{ marginTop: "15%" }}>
        <Box className="column">
          <Typography
            variant="h1"
            fontWeight="bold"
            fontFamily="roboto"
            component="div"
            color="white">
            NITE TIME Studio
          </Typography>
        </Box>

        <Box
          className="row 6"
          sx={{ alignItems: "flex-start", filter: `blur(${blurAmount}px)` }}>
          <Box className="column">
            <Box
              component="img"
              sx={{ padding: 5, maxWidth: "100%" }}
              src={hs2}
            />
            <Typography
              variant="h3"
              fontFamily="roboto"
              component="div"
              color="white"
              sx={{}}>
              Krystiana Edora
            </Typography>
          </Box>
          <Box className="column">
            <Box
              component="img"
              sx={{ padding: 5, maxWidth: "100%" }}
              src={hs}
            />
            <Typography
              variant="h3"
              fontFamily="roboto"
              component="div"
              color="white"
              sx={{}}>
              Madison Lewis
            </Typography>
          </Box>
          <Box className="column">
            <Box
              component="img"
              sx={{ padding: 5, maxWidth: "100%" }}
              src={tony}
            />
            <Typography
              variant="h3"
              fontFamily="roboto"
              component="div"
              color="white"
              sx={{}}>
              Anthony Shaidaee
            </Typography>
          </Box>
          <Box className="column">
            <Box
              component="img"
              sx={{ padding: 5, maxWidth: "100%" }}
              src={hs3}
            />
            <Typography
              variant="h3"
              fontFamily="roboto"
              component="div"
              color="white"
              sx={{}}>
              Jeremy Webb
            </Typography>
          </Box>
          <Box className="column">
            <Box
              component="img"
              sx={{ padding: 5, maxWidth: "100%" }}
              src={qMark}
            />
            <Typography
              variant="h3"
              fontFamily="roboto"
              component="div"
              color="white"
              sx={{}}>
              Kirk McBrayer
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
