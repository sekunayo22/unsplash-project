import { css, cx } from "@emotion/css";
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
  className?: any;
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
  className,
}: ButtonProps) => {
  return (
    <button
      className={cx(css(styles.button(variant), className))}
      disabled={disabled}
      type={type}
      onClick={handleClick}
    >
      {loading ? (
        <p>loading.....</p>
      ) : (
        <>
          {leadingContent && leadingContent}
          <span>{label || children}</span>
          {trailingContent && trailingContent}
        </>
      )}
    </button>
  );
};

export default Button;
