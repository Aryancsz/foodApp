import React, { useState } from "react";
import LeftBar from "./LeftBar";
import TopBar from "./TopBar";
import CentreLayout from "./CentreLayout";
import RightBar from "./RightBar";

const MainLayout = () => {
  const [toggle, setToggle] = useState(false);
  const [btnBtom, setBtnBtom] = useState(false);

  let store = [];
  return (
    <React.Fragment>
      <div className='h-25'>
        <TopBar toggle={toggle} setToggle={setToggle} />
      </div>
      <div className='d-flex flex-column flex-md-row'>
        <div className={`layout-left ${toggle ? "d-none" : ""}`}>
          <LeftBar toggle={toggle} setToggle={setToggle} />
        </div>
        <div className={`layout-center ${btnBtom ? "d-none" : ""}`}>
          <CentreLayout
            store={store}
            btnBtom={btnBtom}
            setBtnBtom={setBtnBtom}
          />
        </div>
        <div className='layout-right'>
          <RightBar btnBtom={btnBtom} setBtnBtom={setBtnBtom} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainLayout;
