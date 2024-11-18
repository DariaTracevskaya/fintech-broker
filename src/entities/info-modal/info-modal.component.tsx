import { FC, MouseEvent } from "react";
import { Button } from "antd";
import { InfoModalProps } from "./info-modal.types";

import * as S from "./info-modal.styles";

export const InfoModal: FC<InfoModalProps> = ({
  title = "Error",
  children,
  setIsModalOpen,
  ...rest
}) => {
  const handleModalClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div onClick={handleModalClick}>
      <S.StyledModal
        title={title}
        onCancel={handleClose}
        centered
        footer={
          <Button type="primary" onClick={handleClose}>
            OK
          </Button>
        }
        {...rest}
      >
        {children}
      </S.StyledModal>
    </div>
  );
};
