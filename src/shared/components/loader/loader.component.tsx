import { FC } from "react";
import { Spin, SpinProps } from "antd";

import * as S from "./loader.styles";

export const Loader: FC<SpinProps> = ({
  className,
  size = "large",
  ...props
}) => {
  return (
    <S.Loader className={className}>
      <Spin size={size} {...props} />
    </S.Loader>
  );
};
