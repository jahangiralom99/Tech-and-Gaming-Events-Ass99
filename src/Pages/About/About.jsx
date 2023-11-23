import milon from "../../assets/jahangir.jpg";
const About = () => {
  return (
    <div>
      <div className="w-full h-96 bg-[#171b20]">
        <div className="">
          <h1 className="text-5xl font-bold flex items-center justify-center h-96 text-pink-200">
            About Us
          </h1>
        </div>
      </div>
      <div className="mx-auto -mt-24">
        <div data-aos="slide-up" className="text-center">
          <img
            className="w-[300px] md:w-[500px] inline tex"
            src={milon}
            alt="jahangir.jpg"
          />
        </div>
        <div data-aos="slide-up" className="w-[300px] md:w-[500px] mx-auto mt-6 space-y-6 ">
          <h1 className="text-2xl font-bold ">About Us</h1>
          <p className="font-bold ml-6">
            Welcome to Tech and Gaming Events Where Innovation Meets Excellence!
            At Tech and Gaming Events, we are driven by a passion for technology
            and a commitment to delivering cutting-edge solutions that redefine
            the digital landscape. As a trailblazer in the tech industry, we
            leverage our expertise to empower businesses and individuals,
            providing them with the tools they need to thrive in the digital
            era.
                  </p>
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                  <p className="font-bold ml-6">Our mission is clear: To bridge the gap between ambition and achievement by harnessing the power of technology. We strive to be at the forefront of innovation, developing solutions that not only meet the needs of today but also anticipate the challenges of tomorrow.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
