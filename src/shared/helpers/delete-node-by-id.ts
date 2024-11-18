import { TreeNode } from "../types";

export const deleteNodeById = (node: TreeNode, id: number) => {
  if (node.children) {
    const index = node.children.findIndex((child) => child.id === id);

    if (index !== -1) {
      node.children.splice(index, 1);
      return true;
    }

    for (let child of node.children) {
      const result = deleteNodeById(child, id);
      if (result) {
        return true;
      }
    }
  }

  return false;
};
