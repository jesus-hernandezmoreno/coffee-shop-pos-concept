import { toast } from 'react-toastify';

// Actions
const ADD_PRODUCT = 'ADD_PRODUCT';
const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';

// Initial State
const INTIAL_STATE = {
  products: []
};

// Action Creators
export const removeProduct = payload => async (dispatch, getState) => {
  const {
    products: { products }
  } = getState();
  const newProducts = products.filter(product => product.id !== payload.id);
  toast.success('The product has been removed');
  dispatch({ type: UPDATE_PRODUCTS, products: newProducts });
};

export const removeProductSize = payload => async (dispatch, getState) => {};

export const updateProduct = payload => async (dispatch, getState) => {
  const {
    products: { products }
  } = getState();
  const newProducts = [...products];
  let sizeQuantity;
  //Check if sizes are the same
  for (let [productIndex, product] of Object.entries(newProducts)) {
    if (product.id === payload.id) {
      //Check if the product exists on the the current state
      const sizeFound = product.sizes.find(size => size.name === payload.size);
      //If size is found update it
      if (sizeFound) {
        for (let [sizeIndex, size] of Object.entries(product.sizes)) {
          if (size.name === payload.size) {
            //Check if action is ADD or SUBTRACT
            sizeQuantity = product.sizes[sizeIndex].quantity;
            if (payload.action === 'ADD') {
              product.sizes[sizeIndex].total = product.sizes[sizeIndex].total + payload.price;
              product.sizes[sizeIndex].quantity = product.sizes[sizeIndex].quantity + 1;
            } else {
              //Check if the quantity is equal to 0
              if (product.sizes[sizeIndex].quantity - 1 > 0) {
                product.sizes[sizeIndex].total = product.sizes[sizeIndex].total - payload.price;
                product.sizes[sizeIndex].quantity = product.sizes[sizeIndex].quantity - 1;
              }
            }
          }
        }
        //If the size is not found add it
      } else {
        newProducts[productIndex].sizes.push({
          name: payload.size,
          price: payload.price,
          quantity: 1,
          total: payload.price
        });
      }
      //Updating total quantity of product and total price
      if (payload.action === 'ADD') {
        newProducts[productIndex].totalQuantity = newProducts[productIndex].totalQuantity + 1;
        newProducts[productIndex].total = newProducts[productIndex].total + payload.price;
      } else {
        //Note: Check
        if (sizeQuantity - 1 > 0) {
          newProducts[productIndex].totalQuantity = newProducts[productIndex].totalQuantity - 1;
          newProducts[productIndex].total = newProducts[productIndex].total - payload.price;
        }
      }
    }
  }
  dispatch({ type: UPDATE_PRODUCTS, products: newProducts });
};

export const addProduct = payload => async (dispatch, getState) => {
  const {
    products: { products }
  } = getState();
  //Product object
  let product = {
    id: payload.id,
    name: payload.name,
    image: payload.image,
    sizes: [
      {
        name: payload.size,
        price: payload.price,
        quantity: 1,
        total: payload.price
      }
    ],
    total: payload.price,
    totalQuantity: 1
  };
  //Check if the product exists on the the current state
  const productFound = products.find(product => product.id === payload.id);
  //If the product was found update it
  if (productFound) {
    dispatch(updateProduct({ ...payload, action: 'ADD' }));
    //If the prooduct is new add it
  } else {
    dispatch({ type: ADD_PRODUCT, product });
  }
};

// Reducer
export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.product]
      };
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: action.products
      };
    default:
      return state;
  }
};
