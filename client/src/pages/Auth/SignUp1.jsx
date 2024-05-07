import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const SignUp = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const collectData = async () => {
    console.log(email,number,password);
    const errors = {};
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if(!/\S+@gmail\.com/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!number.trim()) {
      errors.number = "Contact number is required";
    } else if (!/^\d{10}$/.test(number)) {
      errors.number = "Contact number must be 10 digits";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (Object.keys(errors).length === 0) {
      console.warn( email, number, password);
      let result = await fetch('http://localhost:8000/api/auth/csignup', {
        method: 'post',
        body: JSON.stringify({ email, number, password }),
        headers: {
          'Content-Type': 'application/json'
        },
      });
      result = await result.json();
      console.warn(result);
      localStorage.setItem("user", JSON.stringify(result));
      if (result.email) {
        toast.success("Registered successfully!", {
          onClose: () => navigate('/products')
        });
      }
    } else {
      setErrors(errors);
    }
  };

  return (
    <section>
      <ToastContainer />
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 h-full">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md overflow-auto">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Sign up to create account
          </h2>
          <p className="mt-2 text-center text-base text-gray-600">
            Already have an account?{' '}
            <a
              href="/signin"
              title=""
              className="font-medium text-black transition-all duration-200 hover:underline"
            >
              Sign In
            </a>
          </p>
          <form action="#" method="POST" className="mt-8">
            <div className="space-y-5">
              <div>
              <div className="flex items-center justify-between">
                <label htmlFor="email" className="text-base font-medium text-gray-900">
                  {' '}
                  Email address{' '}
                </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                  {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>
              </div>
              <div>
              <div className="flex items-center justify-between">
                <label htmlFor="contact" className="text-base font-medium text-gray-900">
                  {' '}
                  Contact Number{' '}
                </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="tel"
                    placeholder="Contact Number"
                    id="contact"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  ></input>
                  {errors.number && <p className="text-red-500">{errors.number}</p>}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-base font-medium text-gray-900">
                    {' '}
                    Password{' '}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                  {errors.password && <p className="text-red-500">{errors.password}</p>}
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  onClick={collectData}
                >
                  Create Account <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default SignUp;