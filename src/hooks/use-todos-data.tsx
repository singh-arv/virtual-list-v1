import * as React from "react";

export const useTodosData = (offset) => {
  console.log("useTodoData called with offset ", offset);
  const [items, setItems] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/todos?limit=25&skip=${offset}`
      );
      const data = await res.json();
      setItems((items) => {
        return [...items, ...data.todos];
      });
    } catch (error) {
      setError("error");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    console.log("fetchItems called");
    fetchItems();
  }, [offset]);

  return {
    loading: loading && items.length === 0,
    items,
    error,
    updating: loading && items.length > 0,
  };
};
