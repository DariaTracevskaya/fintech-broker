import { AppManager } from "app/store";
import { ChangeEvent, FC, useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { ActionModal } from "entities";
import { AddNodeProps } from "./add-node.types";

import * as S from "./add-node.styles";

export const AddNode: FC<AddNodeProps> = ({ id }) => {
  const [name, setName] = useState("");
  const { addNode, tree } = AppManager;

  const handleCancel = () => {
    setName("");
  };

  const addName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleAddNode = async () => {
    if (name) {
      await addNode({
        treeName: tree.name,
        parentNodeId: id,
        nodeName: name,
      });
      handleCancel();
    }
  };

  return (
    <ActionModal
      icon={<PlusCircleOutlined />}
      title="Add new node"
      onOk={handleAddNode}
      okText="Add"
      okButtonProps={{ disabled: !name }}
      onCancel={handleCancel}
    >
      <S.StyledInput value={name} onChange={addName} allowClear />
    </ActionModal>
  );
};
