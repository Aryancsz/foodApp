const initialState = {
  cartitems: [],
  menu: "Menu",
  res: false,
};
const CartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "CARTITEMS":
      return { ...state, cartitems: payload };
    case "MENU":
      return { ...state, menu: payload };
    case "RES":
      return { ...state, menu: payload };
    default:
      return state;
  }
};

export default CartReducer;
