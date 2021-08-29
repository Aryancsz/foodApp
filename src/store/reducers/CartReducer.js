const initialState = {
  cartitems: [],
  menu: "Menu",
};
const CartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "CARTITEMS":
      return { ...state, cartitems: payload };
    case "MENU":
      return { ...state, menu: payload };
    default:
      return state;
  }
};

export default CartReducer;
