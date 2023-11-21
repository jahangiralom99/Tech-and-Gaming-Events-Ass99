import coder from "../../assets/coding.jpg";
import gamer from "../../assets/gaming.jpg";
import airplane from "../../assets/airplan.jpg";
const Banner = () => {
  return (
    <div className="mt-12">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${airplane})`,
            }}
          >
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md space-y-4">
                <h1 className="mb-5 text-4xl font-bold text-pink-100">
                  Airplane Primary Flight Display !!
                </h1>
                <p className="mb-5 ">
                  The Primary Flight Display (PFD) is a digital screen in the
                  cockpit of modern aircraft that replaces traditional analog
                  instruments. It presents crucial flight information such as
                  attitude, altitude, airspeed, and heading in a clear and
                  concise format. Integrated with navigation systems,
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${gamer})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md space-y-4">
                <h1 className="mb-5 text-4xl font-bold text-pink-100">
                  The Ultimate Gamer Gathering !!
                </h1>
                <p className="mb-5">
                  Get ready to level up your gaming experience and forge
                  unforgettable memories at Epic Quest: The Ultimate Gamer
                  Gathering. The adventure awaits!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${coder})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md space-y-4">
                <h1 className="mb-5 text-4xl font-bold text-pink-100">
                  Coding !!
                </h1>
                <p className="mb-5">
                  Coding is the process of writing a series of instructions that
                  can be understood by a computer. Think of coders as
                  translators; they work to translate instructions from their
                  language to the computer s language of 1s and 0s.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default Banner;
