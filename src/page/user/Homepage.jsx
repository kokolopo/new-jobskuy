import React from "react";
import Navbar from "../../components/Navbar";
import Carousels from "../../components/Carousel";
import Card from "../../components/Card";
import { Footer } from "flowbite-react";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="py-7 px-7 flex flex-col space-y-4">
        <Carousels />

        {/* favorite */}
        <div className="">
          <p className="font-medium text-xl">Favorite</p>
          <div className="flex flex-nowrap space-x-3">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        {/* terbaru */}
        <div className="">
          <p className="font-medium text-xl">Terbaru</p>
          <div className="flex flex-nowrap space-x-3">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer container>
        <div className="w-full text-center">
          <Footer.Divider />
          <Footer.Copyright href="#" by="Jobskuy" year={2024} />
        </div>
      </Footer>
    </div>
  );
};

export default Homepage;
