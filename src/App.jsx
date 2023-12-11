import { useEffect, useState } from "react";
import "grapesjs/dist/css/grapes.min.css";
import grapesjs from "grapesjs";
import plugin from "grapesjs-preset-newsletter";

const App = () => {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const e = grapesjs.init({
      container: "#editor",
      plugins: [plugin],
      pluginsOpts: {
        [plugin]: {
          /* options */
        },
      },
    });

    setEditor(e);
  }, []);

  return (
    <div>
      <div id="editor"></div>
    </div>
  );
};

export default App;
