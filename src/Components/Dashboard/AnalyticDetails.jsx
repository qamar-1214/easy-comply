import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const AnalyticDetails = () => {
  const [data, setData] = useState({
    series: [
      {
        name: "Total onboarded sessions",
        data: [44, 55, 57],
      },
      {
        name: "Approved sessions",
        data: [76, 85, 100],
      },
      {
        name: "Pending sessions",
        data: [35, 41, 36],
      },
      {
        name: "Rejected sessions",
        data: [35, 41, 36],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Onboarding overview",
          "Risk cateogry overview",
          "Onboarding task overview",
        ],
        labels: {
          style: {
            fontSize: "14px",
            fontFamily: "inherit",
          },
        },
      },
      yaxis: {
        min: 0,
        max: 100,
        stepSize: 20,
        labels: {
          style: {
            fontWeight: "bold",
            fontSize: "14px",
            fontFamily: "inherit",
          },
          formatter: (value) => value + "%",
        },
        title: {
          text: "Percentage %",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "%";
          },
        },
      },
    },
  });
  return (
    <>
      <div
        id="dashboard-page"
        className="bg-white py-8 rounded-lg shadow-lg my-12"
      >
        <div className="flex border-b-[2px] pb-5 border-bottom_border justify-between items-center pr-5 w-full">
          <h2 className="px-1 md:px-3 lg:px-6  text-dark text-lg font-semibold">
            Heres your analytic details
          </h2>
          <div className="flex items-center">
            <p className="font-bold text-primary_b300 border border-primary_b300 py-1 px-3 rounded">
              Today
            </p>
            <p className="py-1 px-4 rounded">This week</p>
            <p className="py-1 px-4 rounded">Last 30 days</p>
            <p className="py-1 px-4 rounded">Customer dates</p>
          </div>
        </div>
        <div className=" lg:px-4 ">
          <div className="container mx-auto  px-4  rounded-2xl">
            <div className="overflow-hidden overflow-x-auto lg:overflow-visible ">
              <div className="overflow-hidden hidden lg:block">
                <div className="lg:overflow-x-auto xl:overflow-x-hidden mt-3 ">
                  <ReactApexChart
                    options={data.options}
                    series={data.series}
                    type="bar"
                    height={350}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticDetails;
