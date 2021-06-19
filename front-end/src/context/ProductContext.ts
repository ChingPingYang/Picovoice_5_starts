import { createContext, Dispatch } from "react";
import { initialState } from "./ProductReducer";
import { ProductStateType, ProductActionType } from "../utils/type";

export const ProductContext = createContext<{
  state: ProductStateType;
  dispatch: Dispatch<ProductActionType>;
}>({
  state: initialState,
  dispatch: () => null,
});
