import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import houseApi from "../../api/houseApi";

const Modal = ({ isShowing, hide, objectId }) => {
  // const [password, setPassword] = useState("");
  // const [username, setUserName] = useState("");
  // const { state, dispatch: ctxDispatch } = useContext(Store);
  // const {
  //   cart: { cartItems },
  // } = state;
 
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  
  const room_id = objectId;
  console.log(room_id)
  // const submitHandler = async () => {
  //   try {
  //     // const response = await houseApi.login(username, password);
  //     const response = await houseApi.login(name, phone);
  //     console.log("Fetch products successfully: ", response.results);
  //   } catch (error) {
  //     console.log("Failed to fetch product list: ", error);
  //   }
  // };
  // const submitHandler = async () => {
  //   try {
  //     const response = await houseApi.create(username, password);
  //     console.log("Fetch products successfully: ", response.results);
  //   } catch (error) {
  //     console.log("Failed to fetch product list: ", error);
  //   }
  // };
  const submitHandler = async () => {
    try {
      // const response = await houseApi.login(username, password);
      const response = await houseApi.test(name, phone,room_id);
      console.log("Fetch products successfully: ", response.results);
    } catch (error) {
      console.log("Failed to fetch product list: ", error);
    }
  };
  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div class="container">
            <h2>Freetuts.net hướng dẫn tạo Modal Box</h2>
            <button>Đăng Nhập</button>
            <div id="myModal" class="modal">
              <div class="modal-content">
                <form onSubmit={submitHandler}>
                  <span class="close" onClick={hide}>
                    &times;
                  </span>

                  <div class="fomrgroup">
                    <b>Name</b>
                    <input
                      type="text"
                      name="name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div class="fomrgroup">
                    <b>Phone</b>
                    <input
                      type="text"
                      name="phone"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </div>
                  <div class="fomrgroup">
                    <button>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};

export default Modal;
