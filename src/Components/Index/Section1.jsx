import Status from "../../assets/Index-page-img/status.png";
import icon1 from "../../assets/Index-page-img/icon-1.png";
import icon2 from "../../assets/Index-page-img/icon-2.png";
import icon3 from "../../assets/Index-page-img/icon-3.png";
import icon4 from "../../assets/Index-page-img/icon-4.png";
import Success from "../../assets/Index-page-img/success.png";

const sectionData1 = [
  {
    icon: icon1,
    alt: "icon1",
    heading: "Products",
    text: "Facial biometric KYC simplified",
  },
  {
    icon: icon2,
    alt: "icon2",
    heading: "Document verification",
    text: "9ac86c38-955f-4746-b7a8-dc63855f67d4",
  },
  {
    icon: icon3,
    alt: "icon3",
    heading: "Created at",
    text: "06/12/2023 14:46:37",
  },
  {
    icon: icon4,
    alt: "icon4",
    heading: "Updated at",
    text: "06/12/2023 14:46:42",
  },
];
const sectionData2 = [
  {
    icon: Success,
    alt: "success",
    heading: "Face register",
    heading1: "Success",
    text: "9ac86bac-52ec-47a2-61d407c8f1c1",
  },
  {
    icon: Success,
    alt: "success",
    heading: "Face register",
    heading1: "Success",
    text: "9ac86bac-52ec-47a2-61d407c8f1c1",
  },
  {
    icon: Success,
    alt: "success",
    heading: "Face register",
    heading1: "Success",
    text: "9ac86bac-52ec-47a2-61d407c8f1c1",
  },
];
const Section1 = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-7 gap-4 mt-6">
        <div className="bg-white rounded-lg custom-shadow col-span-2 sm:col-span-1 xl:col-span-2 order-1">
          <h2 className="px-4 py-3 font-[500] text-[20px]">Status</h2>
          <div className="border-t-[2px] border-border_color flex items-center justify-center">
            <div className="py-6 flex flex-col gap-1 items-center">
              <img src={Status} alt="status ok" />
              <span>
                <h1>Success</h1>
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg col-span-2 xl:col-span-3 custom-shadow order-3 xl:order-2">
          <h2 className="px-4 py-3 font-[500] text-[20px]">General Details</h2>
          <div className="border-t-[2px] border-border_color flex items-center justify-center">
            <div className="py-3 grid grid-cols-1 sm:grid-cols-2 space-y-4 px-8 md:px-2 sm:gap-8 xl:gap-6 xl:px-8 mt-2 items-center">
              {sectionData1.map((item, index) => (
                <span key={index} className="space-y-1">
                  <img src={item.icon} alt={item.alt} />
                  <h3>{item.heading}</h3>
                  <p>{item.text}</p>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg custom-shadow col-span-2 order-2 xl:order-3 sm:col-span-1 xl:col-span-2">
          <h2 className="px-4 py-3 font-[500] text-[20px]">
            Related Verifications
          </h2>
          <div className="border-t-[2px] border-bottom_border flex items-center justify-center md:px-4">
            <div className="py-4 flex flex-col gap-y-6 items-start">
              {sectionData2.map((data, index) => (
                <div key={index}>
                  <span className="flex gap-2">
                    <h3>{data.heading}</h3>
                    <h4 className="flex text-sm sm:text-lg items-center text-[var(--success-color)] font-medium">
                      <img
                        src={data.icon}
                        className="w-4 h-4 mx-1"
                        alt={data.alt}
                      />
                      {data.heading1}
                    </h4>
                  </span>
                  <span>
                    <p>{data.text}</p>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
