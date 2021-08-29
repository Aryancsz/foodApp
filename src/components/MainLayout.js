import React, { useState } from "react";
import LeftBar from "./LeftBar";
import TopBar from "./TopBar";
import CentreLayout from "./CentreLayout";
import RightBar from "./RightBar";

const MainLayout = () => {
  const [toggle, setToggle] = useState(false);
  let store = [];
  return (
    <React.Fragment>
      <div className='h-25'>
        <TopBar toggle={toggle} setToggle={setToggle} />
      </div>
      <div className='d-flex flex-column flex-md-row'>
        <div className='layout-left'>
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
