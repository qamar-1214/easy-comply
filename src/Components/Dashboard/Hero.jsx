const Hero = () => {
  return (
    <>
      <div className="relative px-1 sm:px-6 pt-7 z-[100]">
        <h1 className="m-0 text-2xl text-white">Dashboard</h1>
        <div
          id="intro-container"
          style={{ backgroundColor: "white" }}
          className="w-full h-auto sm:h-[275px] mt-12 rounded-xl shadow-xl sm:px-12 px-2 sm:py-12 py-4 flex flex-col gap-8"
        >
          <h1 className="text-3xl text-dark_b500 font-[700]">
            Hello,
            <span className="text-3xl text-primary_b300 font-[700]">JOHN!</span>
          </h1>
          <span>
            <p className="text-sm text-dark_b500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys
              <br />
              standard dummy text ever since the 1500s.
            </p>
          </span>
          <div className="bg-dark_b50 w-auto sm:w-[300px] rounded-full p-4">
            <select className="outline-none border-none w-full bg-transparent">
              <option value="Product">Product</option>
              <option value="Product">Product</option>
              <option value="Product">Product</option>
            </select>
          </div>
        </div>

        <svg
          className="absolute -top-[40%] w-[106%] -left-[6%] -z-10"
          height="542"
          viewBox="0 0 1871 542"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1876.95"
            y="-327"
            width="547.199"
            height="1961.03"
            rx="273.6"
            transform="rotate(78.8404 1876.95 -327)"
            fill="url(#paint0_linear_1792_5331)"
            fillOpacity="0.5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1792_5331"
              x1="2150.55"
              y1="-327"
              x2="2150.55"
              y2="1634.03"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8E0000" />
              <stop offset="1" stopColor="#FF5000" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default Hero;
