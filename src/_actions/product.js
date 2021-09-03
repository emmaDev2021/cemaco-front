import * as types from '../_types/product';

export const getPublicProducts = () => ({
  type: types.GET_PUBLIC_PRODUCTS
});

export const getPublicProductsConfirm = ({
  publicProducts
}) => ({
  type: types.GET_PUBLIC_PRODUCTS_SUCCEEDED,
  payload: {
    publicProducts
  }
});

export const getPublicProductsFailed = () => ({
  type: types.GET_PUBLIC_PRODUCTS_FAILED
});


/**admin produc */

export const getProducts = () => ({
  type: types.GET_PRODUCTS
});

export const getProductsConfirm = ({
  products
}) => ({
  type: types.GET_PRODUCTS_SUCCEEDED,
  payload: {
    products
  }
});

export const getProductsFailed = () => ({
  type: types.GET_PRODUCTS_FAILED
});


export const getProduct = ({
  id,
}) => ({
  type: types.GET_PRODUCT,
  payload: {
    id,
  }
});

export const getProductConfirm = ({
  product
}) => ({
  type: types.GET_PRODUCT_SUCCEEDED,
  payload: {
    product
  }
});

export const getProductFailed = () => ({
  type: types.GET_PRODUCT_FAILED
});


export const postProduct = ({
  nombre,
  description,
  precio,
  SKU,
  inventario,
  imagen,
}) => ({
  type: types.POST_PRODUCT,
  payload: {
    nombre,
    description,
    precio,
    SKU,
    inventario,
    imagen,
  }
});

export const postProductConfirm = () => ({
  type: types.POST_PRODUCT_SUCCEEDED,
});

export const postProductFailed = () => ({
  type: types.POST_PRODUCT_FAILED
});

export const patchProduct = ({
  id,
  nombre,
  description,
  precio,
  SKU,
  inventario,
  imagen,
}) => ({
  type: types.PATCH_PRODUCT,
  payload: {
    id,
    nombre,
    description,
    precio,
    SKU,
    inventario,
    imagen,
  }
});

export const patchProductConfirm = () => ({
  type: types.PATCH_PRODUCT_SUCCEEDED,
});

export const patchProductFailed = () => ({
  type: types.PATCH_PRODUCT_FAILED
});

export const deleteProduct = ({
  id
}) => ({
  type: types.DELETE_PRODUCT,
  payload: {
    id
  }
});

export const deleteProductConfirm = () => ({
  type: types.DELETE_PRODUCT_SUCCEEDED,
});

export const deleteProductFailed = () => ({
  type: types.DELETE_PRODUCT_FAILED,
});