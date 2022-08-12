import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import houseApi from "../../api/houseApi";
import { ModalBody } from "react-bootstrap";
const Modal = ({ isShowing, hide }) => {
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");

  const submitHandler = async () => {
    try {
      const response = await houseApi.login(username, password);
      console.log("Fetch products successfully: ", response.results);
    } catch (error) {
      console.log("Failed to fetch product list: ", error);
    }
  };
  // const submitHandler = async () => {
  //   try {
  //     const response = await houseApi.create(username, password);
  //     console.log("Fetch products successfully: ", response.results);
  //   } catch (error) {
  //     console.log("Failed to fetch product list: ", error);
  //   }
  // };
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
                      name="username"
                      onChange={(e) => {
                        setUserName(e.target.value);
                      }}
                    />
                  </div>
                  <div class="fomrgroup">
                    <b>Phone</b>
                    <input
                      type="passWord"
                      name="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
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
// <button
//               type="button"
//               className="modal-close-button"
//               data-dismiss="modal"
//               aria-label="Close"
//               onClick={hide}
//             ></button>
// isShowing
//   ? ReactDOM.createPortal(
//       <React.Fragment>
//         <div class="container">
//           <h2>Freetuts.net hướng dẫn tạo Modal Box</h2>
//           <button>Đăng Nhập</button>
//           <div id="myModal" class="modal">
//             <div class="modal-content">
//               <form onSubmit={submitHandler}>
//                 <span class="close" onClick={hide}>
//                   &times;
//                 </span>

//                 <div class="fomrgroup">
//                   <b>Name</b>
//                   <input type="text" name="username" onChange={(e)=>{
//                      setUserName(e.target.value);
//                   }}/>
//                 </div>
//                 <div class="fomrgroup">
//                   <b>Phone</b>
//                   <input type="passWord" name="password" onChange={(e)=>{
//                      setPassword(e.target.value);
//                   }}  />
//                 </div>
//                 <div class="fomrgroup">
//                   <button >Submit</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </React.Fragment>,
//       document.body
//     )
//   : null
