import React from "react";

const CartList = ({ data }) => {
  return (
    <div>
      <div className='d-flex relative'>
        <div className='qty-count'>{data.qty}</div>
        <div className='cart-item-title'>
          {data.dishName}
          <div className='cat-type'>{data.catName}</div>
          <div>{data.dishPrice}</div>
        </div>
        <div className='flex-xl-grow-1 d-flex justify-content-end'>
          <div className='sub-total'>
            ${data.dishPrice?.replace("$", "") * data.qty}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
