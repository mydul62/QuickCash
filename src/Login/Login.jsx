import { Link, useNavigate } from "react-router-dom";
import useAxiosCommon from "../Hooks/useAxiosCommon";
import axios from "axios";


const Login = () => {
  const axiosCommon = useAxiosCommon();
  const navigate = useNavigate(); 

  const handleUserLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value || null;
    const phone = form.phone.value || null;
    const pin = form.password.value;
    const info = { email, phone, pin };
    console.log(info);

    try {
      const { data } = await axiosCommon.post('/users/login', info);
      console.log(data);

      if (data.user) {
        // Save user details in local storage or state management
        localStorage.setItem('user', JSON.stringify(data.user));
        alert('Login successful');
        navigate('/');
      }
    } catch (error) {
      alert('Invalid credentials');
    }
  };
  return (
    <div className="mx-8 flex h-screen justify-center items-center">
    <div className="w-full max-w-sm mt-10 mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="px-6 py-4">
        <div className="flex justify-center mx-auto">
         <h3 className=" text-3xl text-[#782167] font-bold">QcickCash</h3>
        </div>

        <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

        <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

        <form onSubmit={handleUserLogin}>
          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              name="email"
              placeholder="Email address"
              aria-label="Email Address"
            />
          </div>
          <div className=" flex justify-center items-center">
          <div>or</div>
          </div>
          <div className="w-full ">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="number"
              name="phone"
              placeholder="Phone Number"
              aria-label="Email Address"
            />
          </div>

          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              name="password"
              placeholder="Password"
              aria-label="Password"
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <a href="#" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">
              Forget Password?
            </a>

            <button
              className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>

      <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>

        <Link to={'/register'} className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">
          Register
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Login;