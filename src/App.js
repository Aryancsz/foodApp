import React from "react";
import "./App.scss";
import MainLayout from "./components/MainLayout";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <MainLayout />
      </React.Fragment>
    </Provider>
  );
}

export default App;
