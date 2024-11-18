import { AppManager } from "app/store";
import { ChangeEvent, FC, useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { ActionModal } from "entities";
import { EditNodeProps } from "./edit-node.types";

import * as S from "./edit-node.styles";

export const EditNode: FC<EditNodeProps> = ({ id, value }) => {
  const [name, setName] = useState(value);
  const { editNode, tree } = AppManager;

  const handleCancel = () => {
    setName(value);
  };

  const addName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEditNode = async () => {
    if (name) {
      await editNode({
        treeName: tree.name,
        nodeId: id,
        newNodeName: name,
      });
    }
  };

  return (
    <ActionModal
      icon={<EditOutlined />}
      title="Rename node"
      onOk={handleEditNode}
      iconColor="orange"
      okText="Rename"
      okButtonProps={{ disabled: !name }}
      onCancel={handleCancel}
    >
      <S.StyledInput value={name} onChange={addName} allowClear />
    </ActionModal>
  );
};
