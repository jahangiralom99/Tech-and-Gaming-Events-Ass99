import tech from "../../assets/tech.png";

const AboutTech = () => {
  return (
    <div data-aos="slide-up" className="md:flex flex-row mt-12 items-center justify-center gap-10">
      <div className="md:w-[50%] space-y-3">
              <h1 className="text-4xl font-bold text-pink-300 ">What is great about technology?</h1>
              <p>Technology also ensures improved accuracy. Further, the use of technology in certain areas can also help save significant costs. For instance, transitioning to digital communication from paper-based communication and engaging machines in tasks that might take a lot more time to complete can help save costs.</p>
              <div>
              <button className="btn btn-wide mt-6">DisCover More</button>
              </div>
      </div>
      <div className="mt-6 md:mt-0">
        <img className="md:w-full" src={tech} alt="tech.png" />
      </div>
    </div>
  );
};

export default AboutTech;


