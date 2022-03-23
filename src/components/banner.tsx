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
              image: require("../media/banner/sky.png"),
              speed: -5,
            },

            {
              image: require("../media/banner/clouds.png"),
              speed: -10,
            },
            {
              speed: -15,
              expanded: false,
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
                    fontFamily="roboto"
                    component="div"
                    color="white"
                    sx={{
                      textAlign: "center",
                      display: "flex",
                      // color: "",
                    }}
                  >
                    SOMNUS
                  </Typography>
                </div>
              ),
            },
            {
              image: require("../media/banner/moon.png"),
              speed: -20,
            },
            {
              image: require("../media/banner/char.png"),
              speed: -25,
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
