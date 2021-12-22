import { combineReducers } from "redux";
import demoReducer from "./demo.reducer";
import boardReducer from "./board.reducer";

const reducers = combineReducers({
  demo: demoReducer,
  board: boardReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
