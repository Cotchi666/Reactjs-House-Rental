import React, { useReducer } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import houseApi from "../../../api/houseApi";
import logger from "use-reducer-logger";
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, rooms: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
const RecentCard = () => {
  const [{ rooms, loading, error }, dispatch] = useReducer(logger(reducer), {
    rooms: [],
    loading: true,
    error: "",
  });
  // const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const response = await houseApi.getAllRoom();
        console.log("Fetch products successfully: ", response.results);
        // setRooms(response.results.slice(0, 9));
        dispatch({
          type: "FETCH_SUCCESS",
          payload: response.results.slice(0, 9),
        });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchRooms();
  }, []);
  return (
    <>
      <div className="content grid3 mtop">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          rooms.map((item) => {
            const { category } = item.parent.CategoryId.categories;
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
                      style={{
                        background:
                          category === "Popular" ? "#25b5791a" : "#ff98001a",
                        color: category === "Popular" ? "#25b579" : "#ff9800",
                      }}
                    >
                      {item.parent.CategoryId.categories}
                    </span>
                    <i className="fa fa-heart"></i>
                  </div>
                  <Link to={`/classes/Room/${item.objectId}`}>
                    <h4>{item.name}</h4>
                  </Link>
                  <p>
                    <i className="fa fa-location-dot"></i>{" "}
                    {item.parent.location}
                  </p>
                </div>
                <div className="button flex">
                  <div>
                    <Link to={`/classes/Room/${item.objectId}`}>
                      <button className="btn2">{item.parent.price}</button>
                    </Link>

                    <label htmlFor="">/sqft</label>
                  </div>
                  <span>{item.parent.CategoryId.categories}</span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default RecentCard;
