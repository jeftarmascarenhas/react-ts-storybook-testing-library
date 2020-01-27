import styled from "styled-components";

import { colorSelect } from "styles/utils";

type ButtonElementProps = {
  color: string;
};

export const Button = styled.button<ButtonElementProps>`
  border: ${({ color }) => colorSelect.borderNormal[color]};
  color: ${({ color }) => colorSelect.borderNormal[color]};
  background-color: ${({ color }) => colorSelect.borderNormal[color]};
  &:disabled {
    border: ${({ color }) => colorSelect.borderDisabled[color]};
  }
`;

export const Text = styled.div``;
