import { Link, useNavigate } from "react-router-dom";
import useAxiosCommon from "../Hooks/useAxiosCommon";


const Registration = () => {
    const axiosCommon = useAxiosCommon();
    const navigate = useNavigate()
      const handleUserRegistration=async(e)=>{
         e.preventDefault();
        const form = e.target;
         const email = form.email.value;
         const phone = form.phone.value;
         const pin = form.password.value;
         const info = { email, phone, pin}
         console.log(info);
         
        try{
          const {data}=await axiosCommon.post('/users/register',info)
          if(data.insertedId){
          alert('You have successfully registered')
          navigate("/login")
          }
        }catch(error){
        alert('Already registered')
        }
         
      }
  return (
    <div className="mx-8 flex h-screen justify-center items-center">
    <div className="w-full max-w-sm mt-10 mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="px-6 py-4">
        <div className="flex justify-center mx-auto">
         <h3 className=" text-3xl text-[#782167] font-bold">QcickCash</h3>
        </div>

        <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

        <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

        <form onSubmit={handleUserRegistration}>
          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              name="email"
              placeholder="Email address"
              aria-label="Email Address"
            />
          </div>
          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="number"
              name="phone"
              placeholder="Phone Number"
              aria-label="Phone Number"
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

          <div className="flex items-center justify-center mt-4">

            <button
              className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              type="submit"
            >
             Registration
            </button>
          </div>
        </form>
      </div>

      <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-200">You already have an account? </span>

        <Link to={'/login'} href="#" className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">
          Login
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Registration;