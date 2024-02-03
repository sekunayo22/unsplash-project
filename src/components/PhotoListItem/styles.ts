import { css } from "@emotion/css";
import { colors } from "../../styles/colors";

const photoListItem = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 16,
  cursor: "pointer",
  borderRadius: "8px",

  "&:hover": {
    backgroundColor: colors.neutral03,
  },
});

const photoListItemImage = css({
  width: 70,
  height: 70,
  backgroundColor: "purple",
  borderRadius: 4,
});
export const styles = {
  photoListItem,
  photoListItemImage,
};
