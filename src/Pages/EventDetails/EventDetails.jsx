import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";


const EventDetails = () => {
  const { id } = useParams();
  const events = useLoaderData();
  const isExist = events.find((event) => event.id === parseInt(id));
  const { description, image, name, price } = isExist || {};
    const navigate = useNavigate()
    const handleGo = () => {
        navigate(-1)
    }
    
  return (
    <div className="bg-base-100 shadow-xl mt-12">
      <figure className="text-center">
        <img className="inline " src={image} alt="technology" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
              <p>{description}</p>
              <p className="text-red-500">Price Pool : {price} million$</p>
        <div className="card-actions justify-end">
                  <button onClick={handleGo} className="btn btn-wide">
                  <BsArrowLeftShort className="text-3xl " />
                      Go BAck</button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
