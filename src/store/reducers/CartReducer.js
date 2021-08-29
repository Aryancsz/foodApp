const initialState = {
  cartitems: [],
  price: 0,
  cartTotalPrice: 0,
  noOfItems: 0,
};
const CartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "CARTITEMS":
      return { ...state, cartitems: payload };
    default:
      return state;
  }
};

export default CartReducer;
