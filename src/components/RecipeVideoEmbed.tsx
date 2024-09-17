import React from "react";
import { Box, Typography } from "@mui/joy";

const RecipeVideoEmbed: React.FC<{ strYoutube: string }> = ({ strYoutube }) => {
  // Extract the YouTube video ID
  const videoId = strYoutube.split("v=")[1]?.split("&")[0];

  return (
    <Box>
      <Typography level="h3" sx={{ color: "#FFF" }}>
        Watch the making process:
      </Typography>
      {videoId ? (
        <Box
          sx={{
            position: "relative",
            paddingBottom: "56.25%", // Aspect ratio for 16:9 video
            height: 0,
            overflow: "hidden",
            maxWidth: "100%",
            marginBottom: "1rem",
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </Box>
      ) : (
        <Typography>No video available</Typography>
      )}
    </Box>
  );
};

export default RecipeVideoEmbed;
