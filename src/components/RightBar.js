import React, { useEffect, useState } from "react";
import uuid from "uuid/v4";
import CartList from "./CartList";
import { useSelector } from "react-redux";
import {
  BiBox,
  AiOutlineUser,
  BiDotsHorizontalRounded,
  FcRating,
  RiArrowDropDownLine,
  IoMdAddCircleOutline,
} from "react-icons/all";

const RightBar = () => {
  const { cartitems } = useSelector((state) => state.CartReducer);
  let totalCartVal = 0;
  const cartCards = cartitems?.map((el) => {
    totalCartVal += Number(el.dishPrice?.replace("$", ""));
    return (
      <div key={uuid()}>
        <CartList data={el} />
      </div>
    );
  });

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
        <div className='list-container'>{cartCards}</div>
        <div className='d-flex justify-content-between justify-content-center align-items-center'>
          <div
            style={{ marginLeft: "10px", marginTop: "5px", color: "#eb5757" }}
          >
            Discount
          </div>
          <div
            style={{
              marginRight: "10px",
              fontSize: "25px",
              color: "#eb5757",
            }}
          >
            <IoMdAddCircleOutline />
          </div>
        </div>
        <hr />
        <div className='d-flex justify-content-between total-bar'>
          <div>Total</div>
          <div>$ {totalCartVal}</div>
        </div>
        <div className='d-flex justify-content-between place-btn'>
          <div>Pay</div>
          <div>$ {totalCartVal}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RightBar;
