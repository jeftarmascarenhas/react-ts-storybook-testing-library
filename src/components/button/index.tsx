import React from "react";

import * as S from "./styled";

type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  label?: string;
  color?: string;
  size?: string;
  title?: string;
};

const colors = ["primary", "secondary", "tertiary"];

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  label,
  color,
  title
}: ButtonProps) => {
  return (
    <S.Button
      color={color && colors.includes(color) ? color : "primary"}
      title={title}
      onClick={onClick}
      disabled={disabled}
    >
      <S.Text>{label}</S.Text>
    </S.Button>
  );
};

Button.defaultProps = {
  disabled: false,
  label: "",
  color: "primary",
  title: "button",
  size: "sm"
};
export default Button;
