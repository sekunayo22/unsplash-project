import { css } from "@emotion/css";

const collections = css({
  height: "100vh",
  overflowY: "hidden",
});

const collectionsHeader = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "50px",
});

const collectionsPhotosMain = css({
  display: "grid",
  gridGap: "20px",
  gridTemplateColumns: "repeat(3,minmax(0,1fr))",
  width: "95vw",
  margin: "50px auto",
});

export const styles = {
  collectionsHeader,
  collectionsPhotosMain,
  collections,
};
