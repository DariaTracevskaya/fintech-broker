import { IconButton, Loader } from "shared/components";
import { FC, useState, MouseEvent } from "react";
import { ActionModalProps } from "./action-modal.types";

import * as S from "./action-modal.styles";

export const ActionModal: FC<ActionModalProps> = ({
  iconColor = "#2563eb",
  icon,
  onOk,
  children,
  onCancel,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleModalClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    onCancel && onCancel();
  };

  const handleOk = async () => {
    setIsLoading(true);
    onOk &&
      onOk().finally(() => {
        setIsModalOpen(false);
        setIsLoading(false);
      });
  };

  return (
    <div onClick={handleModalClick}>
      <IconButton onClick={openModal} color={iconColor} icon={icon} />
      <S.StyledModal
        open={isModalOpen}
        centered
        onOk={handleOk}
        onCancel={handleCancel}
        {...props}
      >
        {children}
      </S.StyledModal>
      {isLoading && <Loader />}
    </div>
  );
};
