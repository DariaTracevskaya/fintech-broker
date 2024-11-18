import { makeAutoObservable } from "mobx";
import { CONFIG } from "app/configs/global-config.ts";
import { AddNodeParams, DeleteNodeParams, EditNodeParams } from "shared/types";
import { findNodeById } from "shared/helpers/find-node-by-id";
import { deleteNodeById } from "shared/helpers/delete-node-by-id";
import { Tree } from "./app.types";

class AppState {
  private readonly baseURL: string;
  public tree: Tree;
  public activeNodeId: number | null;

  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
    this.baseURL = CONFIG.baseURL;
    this.tree = {} as Tree;
    this.activeNodeId = null;
  }

  async getTree(name: string) {
    const result = await this.getTreeRequest(name);
    this.tree = result;
  }

  setActiveNodeId(id: number) {
    this.activeNodeId = id;
  }

  async addNode(params: AddNodeParams) {
    await this.addNodeRequest(params);
    const result = await this.getTreeRequest(params.treeName);
    this.tree = result;
  }

  async editNode(params: EditNodeParams) {
    const result = await this.editNodeRequest(params);
    const node = findNodeById(this.tree, params.nodeId);

    if (result.ok && node) {
      node.name = params.newNodeName;
    }
  }

  async deleteNode(params: DeleteNodeParams) {
    const result = await this.deleteNodeRequest(params);
    if (result.ok) {
      deleteNodeById(this.tree, params.nodeId);
    } else {
      const {
        data: { message },
      } = await result.json();

      throw new Error(message);
    }
  }

  private async addNodeRequest({
    treeName,
    parentNodeId,
    nodeName,
  }: AddNodeParams) {
    const url =
      this.baseURL +
      `/api.user.tree.node.create?treeName=${treeName}&parentNodeId=${parentNodeId}&nodeName=${nodeName}`;

    const response = await fetch(url, {
      method: "POST",
    });

    return response;
  }

  private async editNodeRequest({
    treeName,
    nodeId,
    newNodeName,
  }: EditNodeParams) {
    const url =
      this.baseURL +
      `/api.user.tree.node.rename?treeName=${treeName}&nodeId=${nodeId}&newNodeName=${newNodeName}`;

    const response = await fetch(url, {
      method: "POST",
    });

    return response;
  }

  private async deleteNodeRequest({ treeName, nodeId }: DeleteNodeParams) {
    const url =
      this.baseURL +
      `/api.user.tree.node.delete?treeName=${treeName}&nodeId=${nodeId}`;

    const response = await fetch(url, {
      method: "POST",
    });

    return response;
  }

  private async getTreeRequest(name: string) {
    const url = this.baseURL + `/api.user.tree.get?treeName=${name}`;

    const response = await fetch(url, {
      method: "POST",
    });

    return await response.json();
  }
}

export const AppManager = new AppState();
