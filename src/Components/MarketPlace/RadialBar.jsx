import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useStateContext } from "../../context/ContextProvider";

const RadialBar = () => {
  const { theme } = useStateContext();
  const [data, setData] = useState({
    series: [44, 55],

    options: {
      colors: [theme.primary, theme.secondary2],
      chart: {
        height: 450,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function () {
                return 249;
              },
            },
          },
        },
      },
      labels: ["Verifications1", "Verifications2"],
    },
  });

  return (
    <>
      <ReactApexChart
        options={data.options}
        series={data.series}
        type="radialBar"
        width={"450px"}
        height={450}
      />
    </>
  );
};

export default RadialBar;
