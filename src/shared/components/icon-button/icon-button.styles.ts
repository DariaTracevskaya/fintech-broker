import styled from "styled-components";

export const IconButton = styled("button")<{ $color?: string }>`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: transparent;
  line-height: 1;
  border: none;
  cursor: pointer;

  &:focus-visible {
    outline: none;
  }

  .anticon {
    width: 100%;
    height: 100%;
    color: ${({ $color }) => $color};

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;
