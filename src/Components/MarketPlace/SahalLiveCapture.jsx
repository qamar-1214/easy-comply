import { useState } from "react";
import RadialBar from "./RadialBar";
import { useStateContext } from "../../context/ContextProvider";

const SahalLiveCapture = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const { theme } = useStateContext();

  const sliderStyle = {
    "--slider-bg": `linear-gradient(90deg, ${theme.dark_secondary} ${sliderValue}%, #d3d3d3 ${sliderValue}%)`,
  };

  return (
    <div>
      <section>
        <div className=" pt-7">
          <section className="mt-6 ">
            <div className="mt-6 bg-white mb-8 rounded-lg shadow-lg">
              <div className="flex justify-between items-center px-6 py-4">
                <span>
                  <h2>Sahal Live Capture</h2>
                </span>
              </div>
              <div className="border-t-[2px] border-bottom_border p-4">
                <div className="flex flex-col gap-y-12 md:flex-row justify-between">
                  <div className="flex flex-col gap-y-8 justify-between">
                    <div className="flex flex-col gap-4">
                      <div className="slidecontainer">
                        <input
                          type="range"
                          min="1"
                          max="100"
                          onInput={(e) => setSliderValue(e.target.value)}
                          value={sliderValue}
                          style={sliderStyle}
                          className="slider"
                          id="myRange"
                        />
                      </div>
                      <label htmlFor="myrange">
                        <span>
                          <h3>Verifications number: 1000</h3>
                        </span>
                      </label>
                    </div>
                    <div className="flex flex-col gap-4 sm:items-center">
                      <span className="flex gap-4">
                        <div className="w-[20px] h-[20px] bg-primary rounded"></div>
                        <h3>Verifications number</h3>
                      </span>
                      <span className="flex gap-4 items-center">
                        <div className="w-[20px] h-[20px] bg-secondary2 rounded"></div>
                        <h3>Verifications number</h3>
                      </span>
                    </div>
                  </div>

                  <div>
                    <RadialBar />
                  </div>
                  <div className="flex items-end pr-2">
                    <span>
                      <h3>Verifications Summary</h3>
                      <h2>Total Price: $700.00</h2>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-end p-6 gap-4">
                <button className="back-btn">Back</button>
                <button className="next-btn">Next</button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default SahalLiveCapture;
