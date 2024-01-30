import { css } from "@emotion/css";
import { ButtonType, ButtonVariant } from "../../types";
import { styles } from "./styles";

interface ButtonProps {
  type: ButtonType;
  variant: ButtonVariant;
  label?: string;
  leadingContent?: JSX.Element;
  trailingContent?: JSX.Element;
  loading?: boolean;
  disabled?: boolean;
  children?: JSX.Element;
  handleClick?: () => void;
}

const Button = ({
  type,
  variant,
  label,
  children,
  leadingContent,
  trailingContent,
  loading,
  disabled,
  handleClick,
}: ButtonProps) => {
  return (
    <button
      className={css(styles.button(variant))}
      disabled={disabled}
      type={type}
      onClick={handleClick}
    >
      {loading ? (
        <p>loading.....</p>
      ) : (
        <>
          {leadingContent && leadingContent}
          {label || children}
          {trailingContent && trailingContent}
        </>
      )}
    </button>
  );
};

export default Button;
