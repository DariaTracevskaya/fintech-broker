export interface AddNodeParams {
  treeName: string;
  parentNodeId: number;
  nodeName: string;
}

export interface EditNodeParams {
  treeName: string;
  nodeId: number;
  newNodeName: string;
}

export interface DeleteNodeParams {
  treeName: string;
  nodeId: number;
}

export interface TreeNode {
  id: number;
  name: string;
  children?: TreeNode[];
}
