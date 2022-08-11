import React, { useReducer } from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/about.jpg";
import "./detail.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import houseApi from "../../api/houseApi";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, room: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
const Detail = () => {
  const params = useParams();
  const { objectId } = params;
  const [{ room, loading, error }, dispatch] = useReducer(reducer, {
    room: [],
    loading: true,
    error: "",
  });
  console.log("check room", room);
  useEffect(() => {
    const fetchRooms = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const response = await houseApi.getRoomById(objectId);
        console.log("Fetch rooms successfully: ", response);
        dispatch({
          type: "FETCH_SUCCESS",
          payload: response,
        });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
        console.log("Failed to fetch rooms list: ", error);
      }
    };
    fetchRooms();
  }, [objectId]);


  
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <section className="about">
      <Back
        name="About Us"
        title="About Us - Who We Are?"
        cover={room.parent.image}
      />
      <div className="container flex mtop">
        <div className="left row">
          <Heading
            title="Our Agency Story"
            subtitle="Check out our company story and work process"
          />
          <h4>{room.name}</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
          <button className="btn2">More About Us</button>
        </div>
        <div className="right row">
          {objectId}
          <img src={room.parent.image} alt="test" />
        </div>
      </div>
    </section>
  );
};
export default Detail;
