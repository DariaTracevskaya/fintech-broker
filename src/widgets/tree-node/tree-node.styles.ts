import styled from "styled-components";

export const Node = styled("div")<{ $isRoot: boolean }>`
  margin: ${({ $isRoot }) => !$isRoot && "10px 0"};
  padding-left: ${({ $isRoot }) => !$isRoot && "30px"};
  user-select: none;

  @media screen and (max-width: 768px) {
    padding-left: ${({ $isRoot }) => !$isRoot && "10px"};
  }
`;

export const Arrow = styled("div")<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  flex-shrink: 0;
  transform: ${({ $active }) => $active && "rotate(90deg)"};

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const FlexWrapper = styled("div")<{ $selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 15px;
  background-color: ${({ $selected }) => $selected && "aliceblue"};
  cursor: pointer;

  @media screen and (max-width: 768px) {
    padding: 5px;
  }
`;

export const ActionsWrapper = styled("div")<{ $hidden: boolean }>`
  display: ${({ $hidden }) => ($hidden ? "none" : "flex")};
  align-items: center;
  gap: 10px;
`;

export const NodeName = styled("p")`
  text-overflow: ellipsis;
  overflow: hidden;
`;
