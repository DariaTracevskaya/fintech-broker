import { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import { TreeNodeProps } from "./tree-node.types";
import { AppManager } from "app/store";
import { AddNode, EditNode, DeleteNode } from "features";
import { RightOutlined } from "@ant-design/icons";

import * as S from "./tree-node.styles";

export const TreeNode: FC<TreeNodeProps> = observer(
  ({ children, id, name, isRoot = false }) => {
    const { activeNodeId, setActiveNodeId } = AppManager;
    const [isOpened, setIsOpened] = useState(false);

    const changeState = () => {
      setActiveNodeId(id);
      setIsOpened((prevState) => !prevState);
    };

    return (
      <S.Node $isRoot={isRoot}>
        <S.FlexWrapper $selected={activeNodeId === id} onClick={changeState}>
          {children?.length > 0 && (
            <S.Arrow $active={isOpened}>
              <RightOutlined />
            </S.Arrow>
          )}
          <S.NodeName>{name}</S.NodeName>
          <S.ActionsWrapper $hidden={activeNodeId !== id}>
            <AddNode id={id} />
            {!isRoot && (
              <>
                <EditNode value={name} id={id} />
                <DeleteNode id={id} name={name} />
              </>
            )}
          </S.ActionsWrapper>
        </S.FlexWrapper>
        {isOpened &&
          children?.map((data) => <TreeNode key={data.id} {...data} />)}
      </S.Node>
    );
  }
);
