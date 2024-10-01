import React from "react";
import { Box, Typography } from "@mui/joy";

const RecipeVideoEmbed: React.FC<{ strYoutube: string }> = ({ strYoutube }) => {
  // Extract the YouTube video ID from the strYoutube string
  const videoId = strYoutube.includes("v=")
    ? strYoutube.split("v=")[1]?.split("&")[0]
    : null;

  return (
    <Box>
      <Typography level="h3" sx={{ color: "#FFF" }}>
        Watch the making process:
      </Typography>
      {videoId ? (
        <Box
          sx={{
            position: "relative",
            paddingBottom: "50%",
            height: 0,
            overflow: "hidden",
            maxWidth: "100%",
            mb: "1rem",
            "@media screen and (max-width: 436px)": {
              mb: "unset",
              pb: "56.25%",
            },
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="recipeVideo"
          ></iframe>
        </Box>
      ) : (
        <Typography>No video available</Typography>
      )}
    </Box>
  );
};

export default RecipeVideoEmbed;
