import { css } from "@emotion/css";

const photoCard = css({
  display: "flex",
  flexDirection: "column",
});
const photoCardImage = css({
  width: "100%",
  height: "200px",
  borderRadius: "10px",
  backgroundColor: "green",
  marginBottom: "16px",
});

export const styles = {
  photoCardImage,
  photoCard,
};
