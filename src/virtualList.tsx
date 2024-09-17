import * as React from "react";
import useIntersectionObserver from "./hooks/use-intersection-observer.ts";
import "./styles.css";

function VirtualList({ items, updateOffset, updating }) {
  const last = React.useRef(null);

  console.log("last.current ", last);

  const isOnScreen = useIntersectionObserver(last);

  console.log({ isOnScreen });

  React.useEffect(() => {
    if (isOnScreen) {
      console.log("updateOffset called");
      updateOffset();
    }
  }, [isOnScreen]);

  React.useEffect(() => {
    if (items.length > 0 && last.current) {
      // update ref here
    }
  }, [items]);

  console.log("items is ", items);

  return (
    <>
      <ul id="list">
        {items &&
          items.map((item, index) => {
            return (
              <ItemRenderer
                item={item}
                ind={index}
                len={items.length}
                last={last}
                key={item.id}
              />
            );
          })}
        {updating && items && items.length > 0 && (
          <li key="last" id="last">
            Loading More...
          </li>
        )}
      </ul>
    </>
  );
}

const ItemRenderer = ({ item, len, ind, last, key }) => {
  console.log(last);
  console.log(last.current);
  return (
    <li className="item" ref={ind === len - 1 ? last : null}>
      {ind === len - 1 ? "@@@@@@@@@@" : ""}
      {item.todo}
    </li>
  );
};

export default VirtualList;
