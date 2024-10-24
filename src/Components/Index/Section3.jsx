const sectionData1 = [
  {
    heading: "Document Type",
    text: "Pakistan - National ID Card - 2020_UC - Horizontal",
  },
  { heading: "Document Issuing Country", text: "Pakistan" },
  { heading: "Reference", text: "Pakistan" },
  { heading: "Reference", text: "Pakistan" },
  { heading: "Reference", text: "Pakistan" },
];
const sectionData2 = [
  {
    heading: "Document Type",
    text: "Pakistan ",
  },
  { heading: "Document Issuing Country", text: "Pakistan" },
  { heading: "Reference", text: "Pakistan" },
  { heading: "Reference", text: "Pakistan" },
  { heading: "Reference", text: "Pakistan" },
];
const Section3 = () => {
  return (
    <div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg custom-shadow">
          <h2 className="px-4 py-3 font-[500] text-[20px]">Details</h2>
          <div className="border-t-[2px] border-border_color flex items-center px-4 md:justify-start md:px-2 justify-center">
            <div className="py-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-20 md:gap-x-2 md:px-3 gap-y-8 lg:gap-x-20 lg:gap-y-8">
              {sectionData1.map((item, index) => (
                <span
                  key={index}
                  className={`flex flex-col gap-2 ${
                    index === 0 && "sm:col-span-2"
                  } `}
                >
                  <h3>{item.heading}</h3>
                  <p>{item.text}</p>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg custom-shadow">
          <h2 className="px-4 py-3 font-[500] text-[20px]">Browser Data</h2>
          <div className="border-t-[2px] border-border_color flex items-center md:px-8 px-4 lg:px-1 md:justify-start sm:items-start sm:justify-start">
            <div className="py-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-20 md:gap-x-2 md:px-3 gap-y-8 lg:gap-x-20 lg:px-8 lg:gap-y-8">
              {sectionData2.map((item, index) => (
                <span key={index} className="flex flex-col gap-2">
                  <h3>{item.heading}</h3>
                  <p>{item.text}</p>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
