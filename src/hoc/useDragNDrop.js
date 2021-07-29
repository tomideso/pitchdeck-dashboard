import { useEffect, useRef } from "react";

const useDragNDrop = () => {
  const parentRef = useRef();
  const inputRef = useRef();

  const dragover = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add("uk-box-shadow-medium");
  };
  const drop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove("uk-box-shadow-medium");
    inputRef.current.files = e.dataTransfer.files;
    inputRef.current.dispatchEvent(new Event("change", { bubbles: true }));
  };
  const dragleave = (e) => {
    e.currentTarget.classList.remove("uk-box-shadow-medium");
  };
  const func = {
    drop: drop,
    dragleave: dragleave,
    dragover: dragover,
  };
  useEffect(() => {
    parentRef.current.addEventListener("dragover", func.dragover);
    parentRef.current.addEventListener("dragleave", func.dragleave);
    parentRef.current.addEventListener("drop", func.drop);

    return () => {
      ["drop", "dragleave", "dragover"].map((val) =>
        parentRef.current?.removeEventListener(val, func[val])
      );
    };
  }, []);

  return { parentRef, inputRef };
};

export default useDragNDrop;
