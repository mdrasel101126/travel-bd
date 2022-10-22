import React from "react";

const SingleBooking = ({ booking }) => {
  console.log(booking);
  const { category, details, rating, picture } = booking;
  console.log(picture);
  return (
    <div className="w-100 my-5 mx-3 d-flex">
      <div>
        <img style={{ width: "200px", height: "150px" }} src={picture} alt="" />
      </div>
      <div className="ms-3">
        <h4>{category}</h4>
        <p>
          <small>{details}</small>
        </p>
        <p>Rating: {rating}</p>
      </div>
    </div>
  );
};

export default SingleBooking;
