import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQantity: 0,
  totalPrice: 0,
  createOrder: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      const newProduct = {
        _id: action.payload.product._id,
        title: action.payload.product.title,
        description: action.payload.product.description,
        image: action.payload.product.image,
        price: action.payload.product.price,
        quantity: action.payload.quantity,
        size: action.payload.size,
      };
      let added = false;

      for (let oldProduct of state.products) {
        // Check if the product already added before
        if (oldProduct._id === newProduct._id) {
          // If added before check if the same size
          if (oldProduct.size === newProduct.size) {
            // If the same size increase the quantity
            oldProduct.quantity += newProduct.quantity;
            added = true;
            break;
          }
        }
      }
      // If not added before or not the same size push it as a new product
      if (!added) {
        state.products.push(newProduct);
      }
      state.totalQantity += newProduct.quantity;
      state.totalPrice += newProduct.price * newProduct.quantity;
      state.createOrder = true;
    },
    // removeProduct(state, action) {},
    // resetCart(state, action) {},
    removeProduct(state, action) {
      const { productId, size } = action.payload;
      const removedProductIndex = state.products.findIndex(
        (product) => product._id === productId && product.size === size
      );
      if (removedProductIndex !== -1) {
        const removedProduct = state.products[removedProductIndex];
        state.totalQantity -= removedProduct.quantity;
        state.totalPrice -= removedProduct.price * removedProduct.quantity;
        state.products.splice(removedProductIndex, 1);
      }
      if (!state.totalQantity) state.createOrder = false;
    },
    incrementQuantity(state, action) {
      const { productId, size } = action.payload;
      const product = state.products.find(
        (product) => product._id === productId && product.size === size
      );
      if (product) {
        product.quantity++;
        state.totalQantity++;
        state.totalPrice += product.price;
      }
    },
    decrementQuantity(state, action) {
      const { productId, size } = action.payload;
      const product = state.products.find(
        (product) => product._id === productId && product.size === size
      );
      if (product && product.quantity > 1) {
        product.quantity--;
        state.totalQantity--;
        state.totalPrice -= product.price;
      }
    },
    resetCart(state, action) {
      state.products = [];
      state.totalQantity = 0;
      state.totalPrice = 0;
      state.createOrder = false;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  incrementQuantity,
  decrementQuantity,
  resetCart,
} = cartSlice.actions;

export default cartSlice;
