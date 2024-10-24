// src/RadialChart.js

import Chart from "react-apexcharts";

const RadialChart = () => {
  const options = {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        startAngle: 0,
        endAngle: 360,
        hollow: {
          size: "60%",
          background: "transparent",
        },
        track: {
          background: "transparent",
          strokeWidth: "0%",
        },
        dataLabels: {
          name: {
            show: false,
            offsetY: -10,
            color: "#000000",
            fontSize: "13px",
          },
          value: {
            show: false,
            offsetY: 5,
            fontSize: "20px",
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    },
    labels: ["Total Price", "Minutes", "Storage MB"],
    colors: ["#000000", "#FFFF00", "#00FF00"],
    stroke: {
      lineCap: "round",
      colors: ["#00FF00"], // Green border color
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const series = [13, 10, 8];

  return (
    <div className="flex flex-col items-center relative py-4">
      <Chart options={options} series={series} type="radialBar" height={400} />
      <div className="absolute top-12 xs:top-32 flex gap-8 flex-col">
        <div className=" flex flex-col text-center items-center justify-center  p-5">
          <span>
            <h6>
              $491.00 <br /> Total Price
            </h6>
          </span>
          <span>
            <h6>
              $0.05 <br /> Price Per Request
            </h6>
          </span>
        </div>
        <div className="mt-4 border-t-2  border-t-gray-200">
          <ul className="flex gap-8 text-center space-y-2">
            <li className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 bg-black rounded-full"></div>
              <span>Total Price</span>
            </li>
            <li className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <span>Minutes</span>
            </li>
            <li className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span>Storage MB</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RadialChart;
