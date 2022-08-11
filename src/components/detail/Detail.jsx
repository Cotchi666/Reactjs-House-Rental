import React from "react";
import { useParams } from "react-router-dom";
const Detail = () => {
  const params = useParams();
  const { objectId } = params;
  return (
    <>
      <div>
        <h1>{objectId}</h1>
      </div>
    </>
  );
};

export default Detail;
