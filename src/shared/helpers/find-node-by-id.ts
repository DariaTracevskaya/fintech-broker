import { TreeNode } from "../types";

export const findNodeById = (node: TreeNode, id: number): TreeNode | null => {
  if (node.id === id) {
    return node;
  }

  if (node.children) {
    for (let child of node.children) {
      const result = findNodeById(child, id);
      if (result) {
        return result;
      }
    }
  }

  return null;
};
