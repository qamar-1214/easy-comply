import { useEffect } from "react";

const colorsData = [
  { name: "Outer Background Color", value: "#ffffff" },
  { name: " Frame Color", value: "#ffffff" },
  { name: "Frame Border Color", value: "#85492D" },
  { name: "  Oval Color", value: "#513838" },
  { name: "Oval Spinner Color", value: "#E08E69" },
  { name: " Headers & Subtext (Primary Text)", value: "#513838" },
  { name: " Button & Feedback Bar Color", value: "#FFBD3E" },
  { name: " Button & Feedback Bar Text Color", value: "#2D0F0F" },
  { name: "Button Color (Pressed)", value: "#FFBD3E" },
];
const Confugration = () => {
  return (
    <section>
      <div className="mt-6 bg-white py-6 px-6 mb-8 rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <span>
            <h2>User Interface(UI)</h2>
          </span>
          <button className="save-btn">Save</button>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 py-6 gap-x-4 gap-y-12">
            {colorsData.map((item, index) => (
              <div
                key={index}
                className="relative border-[1.9px] border-gray-600 sm:px-4 py-1 sm:py-2 rounded"
              >
                <label className="absolute top-[-15px] left-2 bg-white px-2 text-dark_b75 text-[14px] font-[400]">
                  {item.name}
                </label>
                <input className="w-full" type="color" value={item.value} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 gap-x-20 py-6">
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <span>
                <h3>Frame Corner Radius:</h3>
              </span>
              <form className="flex flex-col sm:flex-row  gap-6 text-md font-medium">
                <input
                  className="bg-gray-200  accent-primary_b300"
                  type="radio"
                  name="rad"
                  checked
                />
                00
                <input className="bg-gray-200" type="radio" name="rad" />
                05
                <input className="bg-gray-200" type="radio" name="rad" />
                10
                <input className="bg-gray-200" type="radio" name="rad" />
                20
              </form>
            </div>
            <div className="flex  flex-col sm:flex-row gap-4 items-center">
              <span>
                <h3>Cancel X Location:</h3>
              </span>
              <form className="flex flex-col sm:flex-row gap-6 text-md font-medium items-center">
                <input
                  className="bg-gray-200 accent-primary_b300"
                  type="radio"
                  name="rad"
                  checked
                />
                Top Left
                <input className="bg-gray-200" type="radio" name="rad" />
                Top Right
                <input className="bg-gray-200" type="radio" name="rad" />
                None
              </form>
            </div>
            <div className="w-full h-full py-4 flex items-center justify-center border-dotted-2 border-dashed border-2 border-sky-500 rounded-lg">
              <span className="flex flex-col gap-4 justify-center items-center">
                <h2 className="text-2xl">Upload Your Logo</h2>
                <p className="text-lg">Drag & Drop the file here</p>
                <span className="select-wrapper">
                  <input type="file" name="image_src" id="image_src" />
                </span>
              </span>
            </div>
          </div>
          <div className=" flex flex-col gap-6 mt-12 w-[100%] lg:w-[50%]">
            <span>
              <h3>Preview:</h3>
            </span>
            <div className=" bg-gray-200 max-w-full rounded-lg h-[50vh]"></div>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <button className="revert-btn">Revert</button>
          <button className="save-btn">save</button>
        </div>
      </div>
    </section>
  );
};

export default Confugration;
