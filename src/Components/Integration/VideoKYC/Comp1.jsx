import { useState } from "react";
import RadialChart from "./RadialChart";

// src/RangeSlider.js

const Comp1 = ({ onNext }) => {
  const [value, setValue] = useState({
    minutes: 20,
    storage: 1000,
  });

  const handleChange = (e) => {
    setValue(() => ({
      ...value,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 w-full">
        <div className="w-full">
          <div className="flex flex-col  p-4  w-full">
            <h2 className="text-xl mb-4">Minutes: {value.minutes}</h2>
            <input
              name="minutes"
              type="range"
              min="0"
              max="100"
              value={value.minutes}
              onChange={handleChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none"
              style={{ backgroundSize: `${value.minutes}% 100%` }}
            />
            <style>
              {`
          input[type="range"]::-webkit-slider-thumb {
            width: 20px;
            height: 20px;
            background: black;
            border-radius: 50%;
            cursor: pointer;
            -webkit-appearance: none;
            appearance: none;
          }
          input[type="range"]::-moz-range-thumb {
            width: 20px;
            height: 20px;
            background: black;
            border-radius: 50%;
            cursor: pointer;
          }
          input[type="range"]::-ms-thumb {
            width: 20px;
            height: 20px;
            background: black;
            border-radius: 50%;
            cursor: pointer;
          }
        `}
            </style>
          </div>
          <div className="flex flex-col  p-4  w-full">
            <h2 className="text-xl mb-4">Storage MB: {value.storage}</h2>
            <input
              name="storage"
              type="range"
              min="0"
              max="1050"
              value={value.storage}
              onChange={handleChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none"
              style={{ backgroundSize: `${value.storage}% 100%` }}
            />
            <style>
              {`
          input[type="range"]::-webkit-slider-thumb {
            width: 20px;
            height: 20px;
            background: black;
            border-radius: 50%;
            cursor: pointer;
            -webkit-appearance: black;
            appearance: none;
          }
          input[type="range"]::-moz-range-thumb {
            width: 20px;
            height: 20px;
            background: black;
            border-radius: 50%;
            cursor: pointer;
          }
          input[type="range"]::-ms-thumb {
            width: 20px;
            height: 20px;
            background: black;
            border-radius: 50%;
            cursor: pointer;
          }
        `}
            </style>
          </div>
        </div>

        <div className="w-full">
          <RadialChart />
        </div>
      </div>
      <div className="flex justify-center items-center mt-28 xs:mt-1">
        <button onClick={onNext} className="next-btn">
          Next
        </button>
      </div>
    </section>
  );
};

export default Comp1;
