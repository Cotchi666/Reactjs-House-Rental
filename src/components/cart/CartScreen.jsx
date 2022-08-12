import { Store } from "../../Store";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import React, { useContext, useReducer } from "react";
import Modal from "./Modal";
import UseModal from "./UseModal";

export default function CartScreen() {
  const { isShowing, toggle } = UseModal(true);
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
 
  return (
    <div>
      <Modal isShowing={isShowing} hide={false} />
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>
      <div className="content grid3 mtop">
        {cartItems.map((item) => {
          const category = item.parent.CategoryId.categories;
          return (
            <div className="box shadow" key={item.objectId}>
              <Link to={`/classes/Room/${item.objectId}`}>
                <div className="img">
                  <img src={item.parent.image} alt="" />
                </div>
              </Link>

              <div className="text">
                <div className="category flex">
                  <span
                    className="category"
                    style={{
                      background:
                        category === "Featured" ? "#25b5791a" : "#ff98001a",
                      color: category === "Featured" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {category}
                  </span>
                  <i className="fa fa-heart"></i>
                </div>
                <Link to={`/classes/Room/${item.objectId}`}>
                  <h4>{item.name}</h4>
                </Link>
                <p>
                  <i className="fa fa-location-dot"></i>{" "}
                  <span>${item.parent.price}</span>
                </p>
              </div>
              <div className="button flex">
                <div>
                  <Link to="confirmForm">
                    <button className="btn2">buy</button>
                  </Link>
                </div>
                <div>or</div>

                <button className="btn2" onClick={toggle}>
                  delete
                </button>
                <Modal isShowing={isShowing} hide={toggle} objectId={item.objectId}  />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
