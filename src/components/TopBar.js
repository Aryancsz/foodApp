import React from "react";
import { useSelector } from "react-redux";
import { BiSearchAlt, RiQrScanLine, FiMenu } from "react-icons/all";

const TopBar = ({ toggle, setToggle }) => {
  // loading from redux store to update top bar title
  // handling click to toggle sidebbar only on mobile devices
  const { menu } = useSelector((state) => state.CartReducer);
  return (
    <React.Fragment>
      <div className='container-top d-flex'>
        <div className={`w-25 ${toggle ? "d-none" : ""}`}></div>
        <div
          className={` ${
            !toggle ? "w-50" : "w-100"
          } d-flex justify-content-between`}
        >
          <div
            className='d-md-none px-2'
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
          <div style={{ fontSize: "20px" }}>
            <BiSearchAlt />
          </div>
          <div className='mt-1'>{menu}</div>
          <div className='px-2'>
            <RiQrScanLine />
          </div>
        </div>
        <div className={`w-25 ${toggle ? "d-none" : ""}`}></div>
      </div>
    </React.Fragment>
  );
};

export default TopBar;
