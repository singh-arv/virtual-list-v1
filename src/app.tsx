import * as React from "react";
import VirtualList from "./virtualList.tsx";
import { useTodosData } from "./hooks/use-todos-data.tsx";
import "./styles.css";

function App() {
  const [offset, setOffset] = React.useState(0);
  const { loading, items, updating } = useTodosData(offset);

  const updateOffset = React.useCallback(() => {
    setOffset((offset) => offset + 25);
  }, [offset]);

  return (
    <div id="main">
      {loading && <div>Loading...</div>}
      {items && items.length > 0 && (
        <VirtualList
          items={items}
          updateOffset={updateOffset}
          updating={updating}
        ></VirtualList>
      )}
    </div>
  );
}

export default App;
