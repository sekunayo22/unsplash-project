import { css } from "@emotion/css";
import { colors } from "../../styles/colors";

const header = css({
  display: "flex",
  justifyContent: "space-between",
  borderBottom: `1px solid ${colors.neutral01}`,
  alignItems: "center",
  padding: "16px 32px",
});

const headerButtonGroup = css({
  display: "flex",
  gap: 20,
  alignItems: "center",
});

export const styles = {
  header,
  headerButtonGroup,
};
