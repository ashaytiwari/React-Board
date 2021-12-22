import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { RootState } from "../reducers";
import { AppDispatch } from "../store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
