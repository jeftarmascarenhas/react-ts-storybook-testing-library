import React, { MouseEvent } from "react";

// const defaultProps = {
//   color: "primary" as "primary" | "secondary"
// };

type ButtonProps = {
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
  label?: string;
  color?: string;
  size?: string;
  title?: string;
};

// type DefaultProps = Readonly<typeof defaultProps>;

// const colors = ["primary", "secondary", "tertiary"];

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  label,
  color,
  title
}) => {
  return (
    <button title={title} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
