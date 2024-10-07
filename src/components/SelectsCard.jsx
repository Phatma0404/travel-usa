import React from "react";
import { useNavigate } from "react-router-dom";

const SelectsCard = ({ text, bg }) => {
  const navigate = useNavigate();
  return (
    <div className="relative containers">
      <img className="w-full h-full object-cover" src={bg} alt="/" />
      <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
        <p className="left-4 bottom-4 text-2xl font-bold text-white absolute title-text">
          {text}
        </p>
        <div className="overlay"></div>
        <div className="button">
          <a
            onClick={() => window.open("/city-details/" + text, "_self")}
            className="btn-more cursor-pointer"
          >
            More
          </a>
        </div>
      </div>
    </div>
  );
};

export default SelectsCard;
