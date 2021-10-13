import { takeEvery, call, put } from "redux-saga/effects";
import { LOAD_PRODUCTS, SET_PRODUCTS } from "./constants";

async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products?limit=7");
  const data = await res.json();
  return data;
}

// worker
function* handleLoadProducts() {
  const data = yield call(fetchProducts);
  yield put({ type: SET_PRODUCTS, data });
}

// watcher
export function* loadProductsSaga() {
  yield takeEvery(LOAD_PRODUCTS, handleLoadProducts);
}
