import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

const GamesEvent = () => {
  // const allGames = useLoaderData();
  const [allGames, setAllGames] = useState([]);
  useEffect(() => {
    fetch("games.json")
      .then((res) => res.json())
      .then((data) => setAllGames(data));
  }, []);

  return (
    <div className="mt-12 p-3">
      <h1 className="text-4xl font-bold ">Games Events </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-8 ">
        {allGames.map((games) => (
          <div data-aos="slide-up" key={games.id}>
            <div className="card card-compact bg-base-100 shadow-md">
              <figure>
                <img className="w-full h-72" src={games?.image} alt="Shoes" />
              </figure>
              <div className="card-body space-y-3">
                <h2 className="card-title font-bold">{games?.name}</h2>
                <p>
                  {games?.description
                    ? games.description.slice(0, 100)
                    : games.description}
                </p>
                <p>
                  <span className="font-bold">Location</span>: {games.location}
                </p>
                <div className="card-actions justify-end">
                  <Link to={`/games/${games.id}`} className="btn w-full">See Details <Navigate to={-1}></Navigate></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesEvent;
