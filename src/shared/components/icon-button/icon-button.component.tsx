import { FC } from "react";
import { IconButtonProps } from "./icon-button.types";

import * as S from "./icon-button.styles";

export const IconButton: FC<IconButtonProps> = ({ icon, color, ...rest }) => (
  <S.IconButton $color={color} {...rest}>
    {icon}
  </S.IconButton>
);
