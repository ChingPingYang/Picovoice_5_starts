export type ProductStateType = Array<ProductType>;

export type ProductType = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  rate: number;
};

export enum Types {
  Set = "SET_PRODUCT",
  Update = "UPDATE_PRODUCT",
}

type UpdatePayloadType = { id: number; newRate: number };

type GetProduct = {
  type: Types.Set;
  payload: Array<ProductType>;
};
type UpdateRate = {
  type: Types.Update;
  payload: UpdatePayloadType;
};
export type ProductActionType = GetProduct | UpdateRate;
