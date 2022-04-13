import * as React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system/";

export interface IBannerProps {}

export default class Banner extends React.Component<IBannerProps> {
  public render() {
    return (
      <Box
        className="parallax-banner"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ParallaxBanner
          layers={[
            {
              image: require("../media/banner/skyy.png"),
              speed: -50,
              translateY: [0, 60],
              opacity: [1, 0.1],
              // expanded: false,
              // shouldAlwaysCompleteAnimation: true,
              scale: [1, 1, "easeOutCubic"],
            },
            {
              speed: -60,
              expanded: false,
              opacity: [1, 0.7],
              children: (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    top: "10%",
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="h1"
                    fontWeight="bold"
                    fontFamily="Black Grounds"
                    component="div"
                    color="white"
                    sx={{
                      textAlign: "center",
                      display: "flex",
                      // color: "",
                    }}
                  >
                    Somnus
                  </Typography>
                </div>
              ),
            },
            {
              image: require("../media/banner/bg1.png"),
              speed: -32,
              // shouldAlwaysCompleteAnimation: true,
            },

            {
              image: require("../media/banner/bg2.png"),
              speed: -6,
              // shouldAlwaysCompleteAnimation: true,
              // translateY: [-20, 0],
            },
            {
              image: require("../media/banner/person.png"),
              speed: -2,
              // translateY: [-20, 0],
              scale: [1, 1],
              // shouldAlwaysCompleteAnimation: true,
              expanded: true,
            },
          ]}
          style={{
            aspectRatio: "2 / 1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></ParallaxBanner>
      </Box>
    );
  }
}
