import { css } from "@emotion/css";

const searchPage = css({
  height: "100vh",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
});

const searchPageMainContent = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 16,
  width: "100%",
  height: "100%",
});

export const styles = {
  searchPage,
  searchPageMainContent,
};
