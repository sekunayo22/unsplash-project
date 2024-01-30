import { css } from "@emotion/css";

const searchResultPhotos = css({
  display: "grid",
  gridColumnGap: "20px",
  alignItems: "start",
  gridTemplateColumns: "repeat(4,minmax(0,1fr))",
});

const searchResultPhotosColumn = css({
  display: "grid",
  gridTemplateColumns: "minmax(0,1fr)",
  rowGap: "20px",
});

const searchResultImage = css({
  height: "100%",
  "& img": {
    objectFit: "cover",
    height: "100%",
    width: "100%",
    verticalAlign: "middle",
    borderRadius: "4px",
  },
});

export const styles = {
  searchResultImage,
  searchResultPhotos,
  searchResultPhotosColumn,
};
