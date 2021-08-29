import React, { useState } from "react";
import uuid from "uuid/v4";
import { useSelector } from "react-redux";
import {
  BiBox,
  AiOutlineUser,
  BiDotsHorizontalRounded,
  FcRating,
  RiArrowDropDownLine,
} from "react-icons/all";

const RightBar = () => {
  const [update, setUpdate] = useState([{}]);
  let arr = [];
  let qty = 1;
  let cartVal = 0;
  const { cartitems } = useSelector((state) => state.CartReducer);
  let store = {};
  // const cartCards = cartitems.map((el) => {
  //   cartVal += Number(el.dishPrice?.replace("$", ""));
  // if (el.dishName !== store.dishName) {
  //   store = {
  //     dishName: el.dishName,
  //     dishPrice: el.dishPrice,
  //     [el.dishName]: 1,
  //   };
  // } else {
  //   // store = { ...store, dishQty: store.dishQty + 1 };
  //   store[el.dishName] += 1;
  // }
  // return (
  //   <div key={uuid()}>
  //     <div className='d-flex relative'>
  //       <div className='qty-count'>{store[el.dishName]}</div>
  //       <div className='cart-item-title'>
  //         {el.dishName}
  //         <div>{el.dishPrice}</div>
  //       </div>
  //     </div>
  //   </div>
  //   );
  // });
  // console.log(arr);

  return (
    <React.Fragment>
      <div className='container-right'>
        <div className='d-flex'>
          <div className='mx-2 mt-1' style={{ paddingLeft: "15px" }}>
            <BiBox />
          </div>
          <div className='mt-1'>A12</div>
          <div className='mx-2 mt-1'>
            <AiOutlineUser />
          </div>
          <div className='mt-1'>1</div>
          <div className='flex-grow-1 d-flex justify-content-end'>
            <div className='px-3' style={{ fontSize: "25px" }}>
              <BiDotsHorizontalRounded />
            </div>
          </div>
        </div>
        <div>
          <div className='px-5 py-2 d-flex'>
            <div>
              <FcRating
                style={{
                  fontSize: "50px",
                  marginRight: "15px",
                  borderRadius: "50px",
                  border: "4px solid #eee",
                }}
              />
            </div>
            <div>
              <div style={{ fontWeight: "bold" }}>Ivan Dragunov</div>
              <div>Balance: $500</div>
            </div>
            <div className='flex-lg-grow-1 d-flex justify-content-end'>
              <div style={{ fontSize: "24px" }}>
                <RiArrowDropDownLine />
              </div>
            </div>
          </div>
          <hr />
        </div>
        {/* <div>{cartCards}</div> */}
        {/* <div>{cartVal}</div> */}
      </div>
    </React.Fragment>
  );
};

export default RightBar;
