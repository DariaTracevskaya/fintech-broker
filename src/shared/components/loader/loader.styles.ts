import styled from "styled-components";

export const Loader = styled("div")`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;

  &:after {
    content: "";
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .ant-spin {
    z-index: 1;

    & > span {
      color: white;
    }
  }
`;
