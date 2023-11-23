import { Link } from "react-router-dom";
import logo from "../../assets/register.svg"
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const Register = () => {
  const [error, setError] = useState(null)
  const [isShow, setIsShow] = useState(false);
    const { createUser ,updateName} = useContext(AuthContext)
    
    const handleCreateUser = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        setError('');

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
          return;
        }
        else if (!/(?=.*?[A-Z])/.test(password)) {
           setError("Password must be at least one Upper Case character");
          return;
        }
        else if (!/(?=.*?[#?!@$%^&*-])/.test(password)){
          setError("Password at least one special character");
          return;
        }

        createUser(email, password)
            .then(result => {
              const users = result.user;
              toast.success('User create successfully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              updateName(name)
                .then()
                .catch()
                console.log(users);
            })
          .catch(err => {
            const errMassage = err.message;
            toast.error(errMassage, {
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
      <h1 className="text-center mt-6 text-4xl font-bold  bg-base-100"> Please Register!!!</h1>
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <div>
            <img className="max-w-lg w-full" src={logo} alt="" />
          </div>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-sm  bg-base-100">
          <form onSubmit={handleCreateUser} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                  placeholder="Yourn name"
                  name="name"
                className="input input-bordered"
                required
              />
            </div>
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
              <div className="flex items-center justify-center">
                  <input
                    type={isShow ? "text" : "password"}
                    placeholder="Your password"
                    name="password"
                    className="input input-bordered w-full"
                    required
                  />
                  <div onClick={() => setIsShow(!isShow)} className="-ml-8">
                    {isShow ? (
                      <BsEyeFill className="text-xl" />
                    ) : (
                      <BsEyeSlashFill className="text-xl" />
                    )}
                  </div>
                </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
                        </form>
                        {
                            error && <p className="text-red-500 font-bold mb-6">{error}</p>
                        }
            <p>All Ready have an account ? Please <Link className="text-red-500" to="/login">Login</Link></p>
        </div>
      </div>
        </div>
        <ToastContainer />
    </div>
    );
};

export default Register;