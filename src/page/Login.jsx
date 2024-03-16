import React from "react";
import image1 from "../assets/image-1.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="w-screen flex h-screen fixed">
        <div className="w-[50%] bg-secondary flex items-center justify-center">
          <img src={image1} alt="asd" className="w-[550px]" />
        </div>
        <div className="w-[50%] bg-primary flex pt-[15%] justify-center">
          <div className="w-[20vw] flex flex-col space-y-7">
            <div className="logo italic font-semibold text-6xl text-secondary text-center">
              Jobskuy
            </div>
            <div className="w-full">
              <form className="flex flex-col space-y-3">
                <input
                  type="text"
                  id="default-input"
                  placeholder="Email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />

                <input
                  type="password"
                  id="default-input"
                  placeholder="Password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />

                <div className="flex justify-between text-gray-400 text-sm">
                  <div className="hover:cursor-pointer hover:text-secondary">
                    Lupa password
                  </div>
                  <div className="hover:cursor-pointer hover:text-secondary">
                    <Link to={"/registration"}>Daftar</Link>
                  </div>
                </div>

                <button
                  type="button"
                  class="focus:outline-none text-white bg-secondary focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 w-full"
                >
                  Masuk
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
