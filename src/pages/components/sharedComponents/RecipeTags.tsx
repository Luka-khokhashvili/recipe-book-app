// import React from "react";
import { Chip } from "@mui/joy";
import { recipe } from "../../../interfaces/interfaces";

/**
 * A component that displays the tags of a recipe in a
 * horizontal list of chips.
 *
 * @param {recipe} recipe The recipe object to display tags for.
 * @returns {JSX.Element} The rendered component.
 */
export default function RecipeTags({ recipe }: { recipe: recipe }) {
  return (
    <>
      {/* Split the tags string into an array of tag strings */}
      {recipe.strTags.split(",").map((tag, index) => (
        <Chip
          key={index}
          component="span"
          size="sm"
          variant="soft"
          color="success"
          sx={{ margin: "2px", color: "#000" }}
        >
          {/* Trim the tag string to remove whitespace */}
          {tag.trim()}
        </Chip>
      ))}
    </>
  );
}
