import React, { useState } from "react";
import { useDispatch } from "react-redux";
import data from "../assets/dummy-data.json";
import { TiArrowBack } from "react-icons/all";
import uuid from "uuid/v4";

const CentreLayout = ({ store }) => {
  // a state for detail view to render on clicks for food cards.
  const [detaiView, setDetaiView] = useState(false);

  // state for categories types to display
  const [catType, setCatType] = useState("");

  // extracting to dispatch later
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    setCatType(String(e.target.parentElement.childNodes[5].innerText));
    // toggles components on click
    setDetaiView(true);
    // menu title on top bar updating dynamically with redux store
    dispatch({
      type: "MENU",
      payload: String(e.target.parentElement.childNodes[5].innerText),
    });
  };

  // loading all categories to list on menu
  const categories = data[0].categories.map((el) => {
    // empty divs to construct the cards design
    return (
      <div key={uuid()} className='d-flex'>
        <div className='stackCard1'></div>
        <div className='stackCard2'></div>
        <div className='stackCard3'></div>
        <div className='click-card' onClick={clickHandler}></div>
        <div className='stackCard5'>
          <div className='badge-count'>{el.subCategories.length}</div>
        </div>
        <div className='stackCard4'>
          <div>{el.name}</div>
        </div>
      </div>
    );
  });

  // handling details of cards to be rendered and dispatching them to Redux store
  const detailClickHandler = (e) => {
    const catNam = e.target.parentNode.childNodes[0].innerHTML;
    const dishNam = e.target.parentNode.childNodes[1].innerHTML;
    const dishPric = e.target.parentNode.childNodes[2].innerHTML;
    // if item is already present inc its quantity
    store.reduce((acc, cur, ind) => {
      if (cur.dishName === dishNam) {
        store[ind].qty += 1;
        dispatch({ type: "CARTITEMS", payload: store });
      }
      return null;
    }, 0);
    // check is item is present
    const check = store.find((el) => el.dishName === dishNam);
    // if item is presnet dont add same item again and return else append new item to list
    if (check) {
      return;
    } else {
      store.push({
        catName: catNam,
        dishName: dishNam,
        dishPrice: dishPric,
        qty: 1,
      });
    }
    dispatch({ type: "CARTITEMS", payload: store });
  };
  // displaying the details of food cards
  let details = data[0].categories.map((el) => {
    if (el.name === catType.toLowerCase()) {
      return el.subCategories.map((eachEl) => {
        return (
          <div key={uuid()} className='single-details'>
            <div className='dish-cat'>{el.name}</div>
            <div className='dish-name'>{eachEl.name}</div>
            <div className='dish-price'>${eachEl.price}</div>
            <div className='click-mask' onClick={detailClickHandler}></div>
          </div>
        );
      });
    }
    return null;
  });
  // an extra yerm to handle if the details is undefined remove it and render valid data only
  const filterDetails = details.filter((element) => {
    return element !== undefined;
  });

  return (
    <React.Fragment>
      <div className='container-center'>
        <div className='d-flex flex-column h-100'>
          {detaiView ? (
            <div className='d-flex flex-wrap'>
              <div
                className='single-details'
                onClick={(e) => {
                  setDetaiView(false);
                  dispatch({
                    type: "MENU",
                    payload: "Menu",
                  });
                }}
              >
                <div className='back-icon'>
                  <TiArrowBack />
                </div>
              </div>
              {filterDetails}
            </div>
          ) : (
            <div className='d-flex flex-wrap'>{categories}</div>
          )}
          <div className='flex-grow-1 d-flex flex-column justify-content-end'>
            <div className='d-flex' style={{ backgroundColor: "#FFFFF0" }}>
              <div className='bottom-menu'>All categories</div>
              <div
                className='bottom-menu'
                style={{ borderTop: "3px solid #EB5757" }}
              >
                Italian food
              </div>
              <div className='bottom-menu'>Coffee</div>
              <div className='bottom-menu'>Breakfast</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CentreLayout;
