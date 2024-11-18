import { ModalProps } from "antd";
import { Dispatch, SetStateAction } from "react";

export interface InfoModalProps extends ModalProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}
