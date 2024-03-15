import React from "react";
import { Avatar, Dropdown, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-evenly w-screen bg-secondary text-white py-4 px-7">
      {/* logo */}
      <div className="logo font-semibold text-4xl text-white">Jobskuy</div>

      {/* menu */}
      <div className="flex items-center space-x-4 text-xl font-medium text-white">
        <div className="hover:text-primary hover:font-semibold hover:cursor-pointer">
          Home
        </div>
        <div className="hover:text-primary hover:font-semibold hover:cursor-pointer">
          About
        </div>
        <Dropdown
          label="Category"
          dismissOnClick={false}
          renderTrigger={() => (
            <div className="hover:text-primary hover:font-semibold hover:cursor-pointer">
              Category
            </div>
          )}
        >
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>

        <TextInput
          id="email1"
          type="email"
          placeholder="search...."
          sizing="sm"
          className=""
        />
      </div>

      {/* avatar */}
      <Dropdown
        label="Category"
        dismissOnClick={false}
        renderTrigger={() => (
          <div className="flex flex-wrap gap-2">
            <Avatar
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="avatar of Jese"
              rounded
              bordered
            />
          </div>
        )}
      >
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>
          <Link to={"/login"}>Sign out</Link>
        </Dropdown.Item>
      </Dropdown>
    </nav>
  );
};

export default Navbar;
