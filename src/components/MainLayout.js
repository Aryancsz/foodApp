import React, { useState } from "react";
import LeftBar from "./LeftBar";
import TopBar from "./TopBar";
import CentreLayout from "./CentreLayout";
import RightBar from "./RightBar";

const MainLayout = () => {
  // toggle state on parent child and passing as props to not reset data when component loads
  const [toggle, setToggle] = useState(false);
  // store object for redux store to be dispatched by child after each interaction
  let store = [];
  // all main page components
  return (
    <React.Fragment>
      <div className='h-25'>
        <TopBar toggle={toggle} setToggle={setToggle} />
      </div>
      <div className='d-flex flex-column flex-md-row'>
        <div className={`layout-left ${toggle ? "d-none" : ""}`}>
          <LeftBar toggle={toggle} setToggle={setToggle} />
        </div>
        <div className='layout-center'>
          <CentreLayout store={store} />
        </div>
        <div className='layout-right'>
          <RightBar />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainLayout;
