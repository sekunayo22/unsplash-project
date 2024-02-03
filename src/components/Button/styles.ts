import { css, cx } from "@emotion/css";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";
import { ButtonVariant } from "../../types";

const button = (type: ButtonVariant) =>
  cx(
    typography.description,
    css({
      display: "flex",
      gap: "8px",
      alignItems: "center",
      width: "fit-content",
      padding: "8px 16px",
      borderRadius: 4,
      backgroundColor: type === "primary" ? colors.neutral01 : "transparent",
      color: type === "primary" ? colors.primary : colors.secondary,
      cursor: "pointer",
    }),
  );

export const styles = {
  button,
};
