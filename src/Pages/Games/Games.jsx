import { BsArrowLeftShort } from "react-icons/bs";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const Games = () => {
  const games = useLoaderData();
    const { id } = useParams();
    const navi =useNavigate()

  const isExist = games.find((game) => game.id === parseInt(id));
    const {name, image, description, location, price } = isExist || {};


    const handleGoBack = () => {
        navi(-1)
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={image}
          className="rounded-lg shadow-2xl"
        />
        <div>
                  <h1 className="text-5xl font-bold">{name}</h1>
          <p className="py-6">
           {description}
                  </p>
                  <p><span className="font-bold">Location :</span> {location}</p>
                  <p className="font-bold text-red-600"><span className="font-bold">Price Pool : </span>{price} million $</p>
                  <button onClick={handleGoBack} className="btn btn-wide">
                  <BsArrowLeftShort className="text-3xl " />
                      Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default Games;
