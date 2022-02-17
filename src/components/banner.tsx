import * as React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import Typography from "@mui/material/Typography";

export interface IBannerProps {}

export default class Banner extends React.Component<IBannerProps> {
  public render() {
    return (
      <div
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
              image: require("../media/banner/default-bg.png"),
              speed: 0,
            },
            {
              image: require("../media/banner/sky.png"),
              speed: -20,
            },
            {
              image: require("../media/banner/edge-background.png"),
              speed: -10,
            },
            {
              image: require("../media/banner/kid.png"),
              speed: -5,
            },
            {
              image: require("../media/banner/moon.png"),
              speed: -15,
            },
            {
              speed: -30,
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
                    fontWeight="regular"
                    component="div"
                    sx={{
                      textAlign: "center",
                      display: "flex",
                      color: "white",
                    }}
                  >
                    SOMNOLENCE
                  </Typography>
                </div>
              ),
            },
          ]}
          style={{
            aspectRatio: "2 / 1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></ParallaxBanner>
      </div>
    );
  }
}
