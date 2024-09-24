// import React from "react";
import { Chip } from "@mui/joy";
import { recipe } from "../../../interfaces";

export default function RecipeTags(props: { recipe: recipe }) {
  const { recipe } = props;

  return (
    <>
      {recipe.strTags.split(",").map((tag: string, index: number) => (
        <Chip
          key={index}
          component="span"
          size="sm"
          variant="soft"
          color="success"
          sx={{ margin: "2px", color: "#000" }}
        >
          {tag.trim()}
        </Chip>
      ))}
    </>
  );
}
