import { ModalProps } from "antd";
import { ReactNode } from "react";

export interface ActionModalProps extends ModalProps {
  iconColor?: string;
  icon: ReactNode;
  onOk?: () => Promise<void>;
  onCancel?: () => void;
}
