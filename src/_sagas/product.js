import {
  put,
  takeLatest,
  call,
  select,
  delay,
} from 'redux-saga/effects';
import {createNotification} from 'react-redux-notify';
import * as types from '../_types/product';
import * as actions from '../_actions/product';
import * as api from '../_apis/product';
import * as reducers from '../_reducers';
import {  
  successAlert,
  errorAlert,
} from '../_actions/alerts';

function* getPublicProducts(){
  try{
    const response = yield call(
      api.getPublicProducts
    )
    yield put(actions.getPublicProductsConfirm({
      publicProducts: response
    }));
  }catch(error){
    const errorMsg = error.response ? error.response.data.msg : error.message;
    yield put(createNotification(errorAlert(errorMsg)));
    yield put(actions.getPublicProductsFailed({
      error: error.message,
    }));
  }
}

function* getProducts(){
  try{
    const token = yield select(reducers.getToken);
    const response = yield call(
      api.getProducts,
      token
    )
    yield put(actions.getProductsConfirm({
      products: response
    }));
  }catch(error){
    const errorMsg = error.response ? error.response.data.msg : error.message;
    yield put(createNotification(errorAlert(errorMsg)));
    yield put(actions.getProductsFailed());
  }
}

function* getProduct(action){
  try{
    const {
      id
    } = action.payload;
    const token = yield select(reducers.getToken);
    const response = yield call(
      api.getProduct,
      token,
      id,
    )
    yield put(actions.getProductConfirm({
      product: response
    }));
  }catch(error){
    const errorMsg = error.response ? 
      error.response.data.msg : 
      error.message;
    yield put(createNotification(errorAlert(errorMsg)));
    yield put(actions.getProductFailed());
  }
}

function* postProduct(action){
  try{
    const {
      nombre,
      description,
      precio,
      SKU,
      inventario,
      imagen,
    } = action.payload;
    const token = yield select(reducers.getToken);
    const response = yield call(
      api.postProduct,
      token,
      nombre,
      description,
      precio,
      SKU,
      inventario,
      imagen,
    )
    yield put(actions.postProductConfirm());
    yield put(createNotification(successAlert(response.msg)));
    yield delay(500);
    window.location.href=`/manage-inventory/`;
  }catch(error){
    const errorMsg = error.response ? 
      error.response.data.msg : 
      error.message;
    yield put(createNotification(errorAlert(errorMsg)));
    yield put(actions.postProductFailed());
  }
}

function* patchProduct(action){
  try{
    const {
      nombre,
      description,
      precio,
      SKU,
      inventario,
      imagen,
    } = action.payload;
    const token = yield select(reducers.getToken);
    const response = yield call(
      api.patchProduct,
      token,
      nombre,
      description,
      precio,
      SKU,
      inventario,
      imagen,
    )
    yield put(actions.patchProductConfirm());
    yield put(createNotification(successAlert(response.msg)));
    yield delay(500);
    window.location.href=`/manage-inventory/`;
  }catch(error){
    const errorMsg = error.response ? 
      error.response.data.msg : 
      error.message;
    yield put(createNotification(errorAlert(errorMsg)));
    yield put(actions.patchProductFailed());
  }
}

function* deleteProduct(action){
  try{
    const {
      id
    } = action.payload;
    const token = yield select(reducers.getToken);
    const response = yield call(
      api.deleteProduct,
      token,
      id
    )
    yield put(actions.deleteProductConfirm());
    yield put(createNotification(successAlert(response.msg)));
    yield delay(500);
    window.location.href=`/manage-inventory/`;
  }catch(error){
    const errorMsg = error.response ? 
      error.response.data.msg : 
      error.message;
    yield put(createNotification(errorAlert(errorMsg)));
    yield put(actions.deleteProductFailed());
  }
}

function* productSaga() {
  yield takeLatest(
    types.GET_PUBLIC_PRODUCTS,
    getPublicProducts
  );
  yield takeLatest(
    types.GET_PRODUCTS,
    getProducts
  );
  yield takeLatest(
    types.GET_PRODUCT,
    getProduct
  );
  yield takeLatest(
    types.POST_PRODUCT,
    postProduct
  );
  yield takeLatest(
    types.PATCH_PRODUCT,
    patchProduct
  );
  yield takeLatest(
    types.DELETE_PRODUCT,
    deleteProduct
  );
}

export default productSaga;