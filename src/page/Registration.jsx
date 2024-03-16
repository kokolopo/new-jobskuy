import React, { useState } from "react";
import { Label, Radio, TextInput } from "flowbite-react";
import image1 from "../assets/image-1.png";
import { Link } from "react-router-dom";

const Registration = () => {
  const [role, setRole] = useState("user");

  const handleChangeRole = (e) => {
    setRole(e.target.value);
  };

  return (
    <>
      <div className="w-screen flex h-screen fixed">
        <div className="w-[50%] bg-secondary flex items-center justify-center">
          <img src={image1} alt="asd" className="w-[550px]" />
        </div>
        <div className="w-[50%] bg-primary flex pt-[15%] justify-center">
          <div className="w-[20vw] flex flex-col space-y-7">
            <div className="logo italic font-semibold text-6xl text-secondary text-center">
              Registrasi
            </div>
            <div className="w-full">
              <form className="flex flex-col space-y-3">
                <input
                  type="text"
                  id="default-input"
                  placeholder="Nama Lengkap"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />

                <input
                  type="text"
                  id="default-input"
                  placeholder="Email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />

                <div className="max-w-md">
                  <TextInput
                    id="phone"
                    placeholder="Telepon"
                    addon="+62"
                    required
                  />
                </div>

                <input
                  type="password"
                  id="default-input"
                  placeholder="Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />

                <fieldset className="flex max-w-md flex-col gap-4">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <Radio
                        id="pencari"
                        name="role"
                        value={"user"}
                        onChange={handleChangeRole}
                        defaultChecked
                      />
                      <Label htmlFor="pencari" className="text-secondary">
                        Pencari Jasa
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio
                        id="penyedia"
                        name="role"
                        value={"freelance"}
                        onChange={handleChangeRole}
                      />
                      <Label htmlFor="penyedia" className="text-secondary">
                        Penyedia Jasa
                      </Label>
                    </div>
                  </div>
                </fieldset>

                {role === "3" ? (
                  <div className="">
                    <select
                      id="countries"
                      class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option>Design</option>
                      <option>Programming</option>
                      <option>Copywriting</option>
                    </select>
                  </div>
                ) : (
                  <div></div>
                )}

                <button
                  type="button"
                  class="focus:outline-none text-white bg-secondary focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 w-full"
                >
                  Daftar
                </button>
              </form>

              <div className="flex space-x-2 mt-3 justify-end">
                <div className="text-white text-sm">sudah memiliki akun,</div>
                <Link
                  to={"/login"}
                  className="text-sm text-secondary font-semibold"
                >
                  login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
