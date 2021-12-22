import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks";
import { addItems } from "./redux/actions/demo.actions";
import BoardPage from "./pages/BoardPage/BoardPage";

function App() {
  const dispatch = useAppDispatch();
  const [item, setItem] = useState("");

  const listData = useAppSelector((state) => state.demo.list);

  console.log(listData, "listData");

  const addHandler = () => {
    dispatch(addItems(["a", "b", "c"]));
  };

  return (
    <div>
      <BoardPage />
      {/* <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={addHandler}>Add</button> */}
    </div>
  );
}

export default App;
