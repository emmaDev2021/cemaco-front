import * as types from '../_types/product';

const defaultProduct = {
  loading: false,
  publicProducts: [],
  publicProduct: null,
  products: [],
  product: null,
}

const product = (state = defaultProduct,action) => {
  switch(action.type){
    case types.GET_PUBLIC_PRODUCTS: {
      return {
        ...state,
        loading: true,
      }
    }
    case types.GET_PUBLIC_PRODUCTS_SUCCEEDED: {
      const {
        publicProducts
      } = action.payload;
      return {
        ...state,
        publicProducts,
        loading: false,
      }
    }
    case types.GET_PUBLIC_PRODUCTS_FAILED: {
      return {
        ...state,
        loading: false,
        publicProducts: []
      }
    }
    /**get productos */
    case types.GET_PRODUCTS: {
      return {
        ...state,
        loading: true,
      }
    }
    case types.GET_PRODUCTS_SUCCEEDED: {
      const {
        products
      } = action.payload
      return {
        ...state,
        products,
        loading: false,
      }
    }
    case types.GET_PRODUCTS_FAILED: {
      return {
        ...state,
        loading: false,
      }
    }
    /**get producto */
    case types.GET_PRODUCT: {
      return {
        ...state,
        loading: true,
      }
    }
    case types.GET_PRODUCT_SUCCEEDED: {
      const {
        product
      } = action.payload
      return {
        ...state,
        loading: false,
        product,
      }
    }
    case types.GET_PRODUCT_FAILED: {
      return {
        ...state,
        loading: false,
      }
    }
    /**post producto */
    case types.POST_PRODUCT: {
      return {
        ...state,
        loading: true,
      }
    }
    case types.POST_PRODUCT_SUCCEEDED: {
      return {
        ...state,
        loading: false,
      }
    }
    case types.POST_PRODUCT_FAILED: {
      return {
        ...state,
        loading: false,
      }
    }
    /**patch producto */
    case types.PATCH_PRODUCT: {
      return {
        ...state,
        loading: true,
      }
    }
    case types.PATCH_PRODUCT_SUCCEEDED: {
      return {
        ...state,
        loading: false,
      }
    }
    case types.PATCH_PRODUCT_FAILED: {
      return {
        ...state,
        loading: false,
      }
    }
    /**patch producto */
    case types.DELETE_PRODUCT: {
      return {
        ...state,
        loading: true,
      }
    }
    case types.DELETE_PRODUCT_SUCCEEDED: {
      return {
        ...state,
        loading: false,
      }
    }
    case types.DELETE_PRODUCT_FAILED: {
      return {
        ...state,
        loading: false,
      }
    }
    default: {
      return {
        ...state
      };
    }
  }
}
  
export default product;

export const getPublicProducts = (state) => state.publicProducts;
export const getLoading = (state) => state.loading;
export const getProducts = (state) => state.products;
export const getProduct = (state) => state.product;