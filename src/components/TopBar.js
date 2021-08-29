import React from "react";
import { BiSearchAlt, RiQrScanLine, FiMenu } from "react-icons/all";

const TopBar = ({ toggle, setToggle }) => {
  return (
    <React.Fragment>
      <div className='container-top d-flex'>
        <div className='w-25'></div>
        <div className='w-50 d-flex justify-content-between'>
          <div
            className='d-md-none'
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
            style={{ fontSize: "20px" }}
          >
            <FiMenu />
          </div>
          <div style={{ fontSize: "20px" }} className='mx-2'>
            <BiSearchAlt />
          </div>
          <div>Menu</div>
          <div className='px-3'>
            <RiQrScanLine />
          </div>
        </div>
        <div className='w-25'></div>
      </div>
    </React.Fragment>
  );
};

export default TopBar;
