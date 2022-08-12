import "./App.css";
import Pages from "./components/pages/Pages";
import React from "react";

import Modal from "./components/cart/Modal";
import UseModal from "./components/cart/UseModal";
function App() {
  // const { isShowing, toggle } = UseModal(true);
  return <Pages />
  // return (
  //   <div>
  //     <button className="button-default" onClick={toggle}>
  //       delete
  //     </button>
  //     <Modal isShowing={isShowing} hide={false} />
  //   </div>
  // );
}

export default App;
