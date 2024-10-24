import Edit from "../../assets/Index-page-img/edit.png";
const sectionData = [
  { heading: " Full Name", text: "Muhammad Tayab" },
  { heading: "Date of birth", text: "03/05/2004" },
  { heading: "ID Number", text: "3810102726259" },
  { heading: "Date of birth", text: "03/05/2004" },
  { heading: "ID Number", text: "3810102726259" },
  { heading: "Date of birth", text: "03/05/2004" },
];
const Section2 = () => {
  return (
    <div>
      <div className="mt-6">
        <div className="bg-white rounded-lg custom-shadow">
          <div className="px-4 py-3 flex justify-between items-center">
            <h2 className="font-[500] text-[20px]">Document details</h2>
            <button className="edit">
              <img src={Edit} alt="edit" />
            </button>
          </div>
          <div className="border-t-[2px] border-border_color">
            <div className="py-6 ps-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-8 items-center">
              {sectionData.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h3 className="text-dark_b100 font-[600] text-[16px] uppercase ">
                    {item.heading}
                  </h3>
                  <p className="font-[400] text-[16px] text-dark_b300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
