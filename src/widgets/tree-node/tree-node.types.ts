import { TreeNode } from "shared/types/tree.types";

export interface TreeNodeProps {
  children: TreeNode[];
  id: number;
  name: string;
  isRoot?: boolean;
}
