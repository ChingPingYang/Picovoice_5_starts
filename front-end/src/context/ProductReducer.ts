import axios from "axios";
import { ProductActionType, Types, ProductStateType } from "../utils/type";

export const initialState = [];

export const ProductReducer = (
  state: ProductStateType,
  action: ProductActionType
): ProductStateType => {
  const { type, payload } = action;
  switch (type) {
    case Types.Set:
      //   @ts-ignore
      return [...payload];

    case Types.Update:
      const newState = state.map((product) => {
        // @ts-ignore
        if (product.id === payload.id) {
          // @ts-ignore
          return { ...product, rate: payload.newRate };
        }
        return product;
      });
      return newState;

    default:
      return state;
  }
};
