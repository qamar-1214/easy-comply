const sectionData = [
  { heading: "Front Side" },
  { heading: "Back Side" },
  { heading: "Front Side" },
];
const Section4 = () => {
  return (
    <div>
      <div className="my-6">
        <div className="bg-white rounded-lg custom-shadow w-full">
          <h2 className="px-4 py-3 font-[500] text-[20px]">Documents Upload</h2>
          <div className="border-t-[2px] border-border_color flex items-center justify-center sm:justify-start w-full">
            <div className="py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center px-8 ">
              {sectionData.map((item, index) => (
                <span key={index}>
                  <h3>{item.heading}</h3>
                  <div className="w-56 bg-gray-200 h-40 rounded-lg mt-1"></div>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
