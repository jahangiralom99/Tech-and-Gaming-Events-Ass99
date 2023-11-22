import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useState } from "react";

const Events = ({ event }) => {
    const [less, setLess] = useState(false)
  const { id, name, description, image, price } = event || {};

  return (
      <div>
          <Link to={`/event/${id}`} data-aos="zoom-in" className="card bg-base-100 shadow-xl image-full ">
      <figure>
        <img src={image} alt="event" />
      </figure>
      <div className="card-body flex h-screen items-center justify-center ">
        <div className="space-y-5">
          <h2 className="card-title font-bold text-pink-100 ">{name}!</h2>
          <p onClick={()=>setLess(!less)} className="font-bold text-pink-100">
            {!less ? description.slice(0, 100) : description}
                      <Link className="text-red-500 ml-5">{!less ? "See More": "See Less"}</Link>{" "}
                  </p>
                  <p className="font-bold text-pink-100">Price Pool : { price}$ Million</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </Link>
    </div>
  );
};

Events.propTypes = {
    event: PropTypes.object.isRequired,
}

export default Events;
