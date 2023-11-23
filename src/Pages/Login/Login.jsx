/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/login.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsGoogle } from "react-icons/bs";

const Login = () => {
  const [error, setError] = useState(null);
  const { logInUser, googleLogIn, } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handelLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logInUser(email, password)
      .then((result) => {
        toast.success("User login successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log(result);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        if (err.code === "auth/invalid-login-credentials") {
          setError("incorrect password");
        } else {
          setError(err.massage);
          console.log(err.massage);
        }
      });
    // console.log(email, password);
  };


  const handleGoogleBtn = () => {
    googleLogIn()
      .then(result => {
        const users = result.user;
        toast.success("User google login successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate(location?.state ? location.state : "/");
        console.log(users);
      })
      .catch(err => {
        const errorMessage = err.message;
        toast.error(errorMessage, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      })
  }

  return (
    <div className="">
      <h1 className="text-center mt-6 text-4xl font-bold  bg-base-100">
        Login Please !!!
      </h1>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <div>
              <img className="max-w-lg w-full" src={logo} alt="" />
            </div>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-sm  bg-base-100">
            <form onSubmit={handelLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Yourn email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="Your password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            <div onClick={handleGoogleBtn} className="text-center">
              <button className="btn btn-outline btn-primary">
                <BsGoogle className="text-red-500" />
                Log in with
                <div>
                  <span className="text-[#008744]">G</span>
                  <span className="text-red-500">o</span>
                  <span className="text-[#ffa700]">o</span>
                  <span className="text-[#008744]">g</span>
                  <span className="text-[#009955]">l</span>
                  <span className="text-white">e</span>
                </div>
              </button>
            </div>
            {error && (
              <p className="text-bold text-red-500 mb-8 px-4">{error}</p>
            )}
            <p className="mt-6">
              You don't have an account ? Please{" "}
              <Link className="text-red-500" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
