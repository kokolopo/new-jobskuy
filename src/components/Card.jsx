import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FormatRupiah } from "@arismun/format-rupiah";
import { Button } from "flowbite-react";

const Card = () => {
  return (
    <div className="shadow-lg rounded-md p-2 w-fit">
      <div className="">
        <img src="https://picsum.photos/300/200" alt="asdas" />
      </div>

      <div className="flex justify-between mt-2">
        {/* title */}
        <div className="font-semibold">Mie Coding</div>
        <div className="flex space-x-3 items-center">
          <FontAwesomeIcon icon={faStar} style={{ color: "#ffd43b" }} />
          3.5
        </div>
      </div>
      <FormatRupiah value={100000} />

      <div className="flex justify-end space-x-2">
        <Button className="bg-[#378CE7]">Detail</Button>
        <Button className="bg-secondary">Order</Button>
      </div>
    </div>
  );
};

export default Card;
