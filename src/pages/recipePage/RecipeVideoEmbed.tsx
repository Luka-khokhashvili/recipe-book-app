import React, { useRef, useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/joy";
import { Close } from "@mui/icons-material";

/**
 * A React component to embed a YouTube video from a strYoutube string.
 *
 * @param {string} strYoutube The YouTube link to embed.
 * @returns {React.ReactElement} The embedded YouTube video.
 */
const RecipeVideoEmbed: React.FC<{ strYoutube: string }> = ({ strYoutube }) => {
  // Extract the YouTube video ID from the strYoutube string
  const videoId = strYoutube.includes("v=")
    ? strYoutube.split("v=")[1]?.split("&")[0]
    : null;

  const videoRef = useRef<HTMLIFrameElement>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [movable, setMovable] = useState(true);

  /**
   * Handle the scroll event to determine if the video is in view.
   */
  useEffect(() => {
    const handleScroll = () => {
      const videoTop = videoRef.current?.offsetTop || 0;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (movable) {
        if (scrollTop > videoTop) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [movable]);

  return (
    <Box>
      <Typography level="h3" sx={{ color: "#FFF" }}>
        Watch the making process:
      </Typography>
      {videoId ? (
        <Box
          ref={videoRef}
          sx={{
            /* Set the aspect ratio of the video by setting the padding-bottom */
            position: "relative",
            paddingBottom: "50%",
            height: "100%",
            overflow: "hidden",
            maxWidth: "100%",
            mb: "1rem",
            "@media screen and (max-width: 436px)": {
              mb: "unset",
              pb: "56.25%",
            },
          }}
        >
          {/* Add the iframe element with the YouTube video embed code */}
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?playsinline=1&autoplay=1&mute=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={
              "recipeVideo " +
              (isFixed && window.innerWidth <= 436 // On mobile devices, if the screen scrolls over the video
                ? "fixedPosition"
                : "absolutePosition")
            }
          ></iframe>
          {/* Add a button to close floating video */}
          {isFixed && window.innerWidth <= 436 && (
            <Button
              onClick={setMovable.bind(null, false)}
              sx={{
                position: "fixed",
                top: "2%",
                right: "4%",
                zIndex: 999,
                background: "transparent",
              }}
              endDecorator={<Close sx={{ color: "#FFF" }} />}
            ></Button>
          )}
        </Box>
      ) : (
        <Typography>No video available</Typography>
      )}
    </Box>
  );
};

export default RecipeVideoEmbed;
