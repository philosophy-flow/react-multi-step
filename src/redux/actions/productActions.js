import { LOAD_PRODUCTS, SET_PRODUCTS } from "../constants";

export function loadProducts() {
  return {
    type: LOAD_PRODUCTS,
  };
}

export function setProducts(data) {
  return {
    type: SET_PRODUCTS,
    data,
  };
}
