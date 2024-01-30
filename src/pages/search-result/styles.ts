import { css } from "@emotion/css";

const searchResultBackground = css({
  width: "100%",
  height: "80px",
  background: "linear-gradient(90deg, #ffafbd 0%, #ffc3a0 100%)",
  position: "relative",
});

const searchResultBackgroundContainer = css({
  position: "absolute",
  left: "0px",
  bottom: "-30px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

const searchResultPhotoContainer = css({
  margin: "50px auto",
  width: "95vw",
});

export const styles = {
  searchResultBackground,
  searchResultBackgroundContainer,
  searchResultPhotoContainer,
};
