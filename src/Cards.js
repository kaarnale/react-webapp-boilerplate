import React from "react";
import PhotoCard from "./PhotoCard.js";
import MediaCard from "./MediaCard.js";

const styles = {
  maxWidth: 500,
  margin: "auto"
};

export default props => {
  return (
    <div style={styles}>
      <PhotoCard />
      <MediaCard />
      <PhotoCard />
      <MediaCard />
    </div>
  );
};
