import React from "react";
import {
  FiX,
  AiOutlineShoppingCart,
  AiOutlineClockCircle,
  IoMdGrid,
  RiSettings3Fill,
  BiLock,
} from "react-icons/all";

// static UI for left bar
// click handles to display side bar only on mobile view to toggle (hide or visible)

const LeftBar = ({ toggle, setToggle }) => {
  return (
    <div className='container-left text-light'>
      <div className='d-flex justify-content-end text-light px-2'>
        <span
          className='d-md-none mt-2'
          style={{ fontSize: "20px" }}
          onClick={() => {
            if (toggle) {
              document
                .getElementsByClassName("container-left")[0]
                .classList.remove("hide");
              setToggle(false);
            } else {
              document
                .getElementsByClassName("container-left")[0]
                .classList.add("hide");
              setToggle(true);
            }
          }}
        >
          <FiX />
        </span>
        <span
          className='d-none d-sm-block d-sm-none d-md-block'
          style={{ fontSize: "20px" }}
        >
          <FiX />
        </span>
      </div>
      <div className='d-flex'>
        <div
          className='user-icon mx-3 rounded-circle text-center pt-1'
          style={{ width: "50px", height: "50px", fontSize: "22px" }}
        >
          MI
        </div>
        <div>
          <div>
            Ivan Mask
            <div style={{ fontSize: "14px", color: "#aaa" }} className=''>
              Sum: 1 280$
            </div>
          </div>
        </div>
      </div>
      <div className='mt-5 d-flex flex-column' style={{ height: "82%" }}>
        <div className='gradient p-3'>
          <span className='px-4'>
            <AiOutlineShoppingCart />
          </span>
          Checkout
        </div>
        <div className='tile p-3'>
          <span className='px-4'>
            <IoMdGrid />
          </span>
          Tables
        </div>
        <div className='tile p-3'>
          <span className='px-4'>
            <AiOutlineClockCircle />
          </span>
          Orders
        </div>
        <div className='tile p-3'>
          <span className='px-4'>
            <RiSettings3Fill />
          </span>
          Tools
        </div>
        <div className='flex-grow-1 d-flex flex-column justify-content-end'>
          <hr style={{ color: "#aaa" }} />
          <div className='tile'>
            <span className='px-4'>
              <BiLock />
            </span>
            Lock
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
