import { css } from "@emotion/css";

const imageDetails = css({
  height: "calc(100vh - 200px)",
  overflowY: "hidden",
});

const imageDetailsContainer = css({
  margin: "50px auto",
  width: "95vw",
  height: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "100px",
});

const imageDetailsBackground = css({
  backgroundColor: "red",
  width: "100%",
  height: "100%",
});

const imageDetailsProfile = css({
  display: "flex",
  alignItems: "center",
  marginBottom: "16px",
});

const imageDetailsProfileImage = css({
  height: 45,
  width: 45,
  borderRadius: "50%",
  backgroundColor: "green",
  marginRight: "8px",
});

const imageDetailsList = css({
  display: "flex",
  flexDirection: "column",
  marginTop: 16,
});

export const styles = {
  imageDetails,
  imageDetailsContainer,
  imageDetailsBackground,
  imageDetailsProfileImage,
  imageDetailsProfile,
  imageDetailsList,
};
