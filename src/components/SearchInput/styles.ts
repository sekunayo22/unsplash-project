import { css, cx } from "@emotion/css";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";

const searchInput = cx(
  typography.small02,
  css({
    padding: 16,
    border: `1px solid ${colors.neutral01}`,
    borderRadius: 10,
    marginTop: 16,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    backgroundColor: colors.white,

    "& input": {
      border: "0px",
      outline: "none",
      backgroundColor: "transparent",
    },

    "& input::placeholder": {
      color: colors.neutral03,
    },
  }),
);

export const styles = {
  searchInput,
};
