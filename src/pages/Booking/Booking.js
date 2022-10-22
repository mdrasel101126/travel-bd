import React from "react";
import { useLoaderData } from "react-router-dom";
import SimpleMap from "../SimpleMap/SimpleMap";
import SingleBooking from "../SingleBooking/SingleBooking";

const Booking = () => {
  const bookings = useLoaderData();
  console.log(bookings);
  return (
    <div className="row row-cols-2 w-100">
      <div>
        {bookings.map((booking) => (
          <SingleBooking key={booking.id} booking={booking}></SingleBooking>
        ))}
      </div>
      <div>
        <SimpleMap></SimpleMap>
      </div>
    </div>
  );
};

export default Booking;
