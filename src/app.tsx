import { AppManager } from "app/store/app";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { TreeNode } from "widgets";
import { CONFIG } from "app/configs/global-config";

const App = observer(() => {
  const { tree, getTree } = AppManager;
  const { treeName } = CONFIG;

  useEffect(() => {
    getTree(treeName);
  }, []);

  return (
    <>
      <h1>Tratsevskaya Daria</h1>
      {tree && <TreeNode isRoot {...tree} />}
    </>
  );
});

export default App;
