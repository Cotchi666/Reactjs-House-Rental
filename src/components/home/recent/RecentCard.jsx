import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import houseApi from "../../../api/houseApi";
const RecentCard = () => {
  const [data, setHouseList] = useState([]);
  //form raw 3 properties
  useEffect(() => {
    const fetchHouseList = async () => {
      try {
        const response = await houseApi.getAllRoom();
        console.log("Fetch products successfully: ", response.results);
        // 3 out of 8 obj in an array
        const apidata = response.results.slice(0, 9);
        console.log("check from list property ", apidata);
        setHouseList(apidata);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchHouseList();
  }, []);
  return (
    <>
      <div className="content grid3 mtop">
        {data.map((item) => {
          const category = item.parent.CategoryId.categories;
          return (
            <div className="box shadow" key={item.objectId}>
              <Link to href={`/classes/Room/${item.objectId}`}>
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
                <Link to href={`/classes/Room/${item.objectId}`}>
                  <h4>{item.name}</h4>
                </Link>
                <p>
                  <i className="fa fa-location-dot"></i> {item.parent.location}
                </p>
              </div>
              <div className="button flex">
                <div>
                  <Link to href={`/classes/Room/${item.objectId}`}>
                    <button className="btn2">{item.parent.price}</button>
                  </Link>

                  <label htmlFor="">/sqft</label>
                </div>
                <span>{item.parent.CategoryId.categories}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;
