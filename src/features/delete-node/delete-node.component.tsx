import { AppManager } from "app/store";
import { FC, useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { ActionModal, InfoModal } from "entities";
import { DeleteNodeProps } from "./delete-node.types";

export const DeleteNode: FC<DeleteNodeProps> = ({ id, name }) => {
  const [isModalInfoOpen, setIsModalInfoOpen] = useState(false);
  const [error, setError] = useState("");
  const { deleteNode, tree } = AppManager;

  const handleDeleteNode = async () => {
    await deleteNode({ treeName: tree.name, nodeId: id }).catch(
      ({ message }: Error) => {
        setError(message);
        setIsModalInfoOpen(true);
      }
    );
  };

  return (
    <>
      <InfoModal open={isModalInfoOpen} setIsModalOpen={setIsModalInfoOpen}>
        {error}
      </InfoModal>
      <ActionModal
        icon={<DeleteOutlined />}
        iconColor="red"
        title="Are you sure?"
        onOk={handleDeleteNode}
        okText="Delete"
        okButtonProps={{ danger: true }}
      >
        Do u want to delete {name}?
      </ActionModal>
    </>
  );
};
