import ConeImg from "../../assets/marketplace-imgs/cone.png";
import Checked from "../../assets/marketplace-imgs/checked.png";
const ActivationModel = () => {
  return (
    <div>
      <section>
        <div className="pt-7">
          <section className="mt-6 ">
            <div>
              <div className="bg-white rounded-lg pb-8">
                <span>
                  <h2 className="px-4 py-6">Activation Model</h2>
                </span>

                <div className="border-t-[2px] border-border_color">
                  <div className="py-2 sm:p-6 grid grid-cols-1 sxl:grid-cols-2 gap-6">
                    <div className="bg-gray-100 rounded-lg custom-shadow ">
                      <div className="flex justify-between p-2 md:p-5">
                        <span className="flex gap-4">
                          <img
                            className="w-8 h-8 lg:w-16 lg:h-16"
                            src={ConeImg}
                            alt="Cone"
                          />
                          <span>
                            <h1>Pro</h1>
                            <h3>04 Services</h3>
                          </span>
                        </span>
                        <span>
                          <h3>Start from</h3>
                          <h1 className="text-primary_b300 ">$400.00 USD</h1>
                        </span>
                      </div>
                      <div className="border-t-[2px] border-white p-2 sm:p-6">
                        <span>
                          <h2>Whats included:</h2>
                        </span>
                        <div className="mt-12 grid grid-cols-2 px-6 gap-6 gap-y-4">
                          <span className="flex py-3 gap-2 border-r-[2px] border-white items-center">
                            <img
                              src={Checked}
                              alt="checked"
                              width="20px"
                              height="20px"
                            />
                            <h4>Member resources</h4>
                          </span>
                          <span className="flex py-3 gap-2 items-center">
                            <img
                              src={Checked}
                              alt="checked"
                              width="20px"
                              height="20px"
                            />
                            <h4>Member resources</h4>
                          </span>
                          <span className="flex py-3 gap-2 border-r-[2px] border-white items-center">
                            <img
                              src={Checked}
                              alt="checked"
                              width="20px"
                              height="20px"
                            />
                            <h4>Member resources</h4>
                          </span>
                          <span className="flex py-3 gap-2 items-center">
                            <img
                              src={Checked}
                              alt="checked"
                              width="20px"
                              height="20px"
                            />
                            <h4>Member resources</h4>
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 p-8 mt-7">
                          <button className="activate-trail-btn w-full sm:w-auto">
                            Activate Trail
                          </button>
                          <button className="configure-pricing-btn w-full sm:w-auto">
                            Configure Pricing
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-lg custom-shadow">
                      <div className="flex justify-center text-center items-center p-6">
                        <span className="flex gap-4">
                          <h2>Activation Model</h2>
                        </span>
                      </div>
                      <div className="border-t-[2px] border-white p-6">
                        <p className="text-center text-lg leading-[3rem]">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Deleniti corporis rerum incidunt voluptas
                          assumenda impedit dolores quaerat possimus dolor
                          reprehenderit veniam tempora exercitationem quisquam
                          odio, nihil explicabo laborum cupiditate id quis
                          doloribus velit beatae mollitia vel delectus. Incidunt
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ActivationModel;
