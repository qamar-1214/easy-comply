const Alerts = () => {
  return (
    <section id="verification-page">
      <div className="mt-6 mb-8 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center px-6 py-4">
          <span>
            <h2>Document Submission</h2>
          </span>
          <button className="primary-btn">Export</button>
        </div>
        <div className="border-t-[2px] border-border_color p-6">
          <div className="chat-box-container flex gap-2 justify-center">
            <div className="left-chat-box flex flex-col">
              <div className="flex flex-col justify-end">
                <span className="text-blue_b300 flex justify-end">
                  20.03.2022 11:35:20
                </span>
                <div className="main-1 p-5 flex items-center">
                  <h2>Account opening requested</h2>

                  <div className="shape-1"></div>
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <span className="text-blue_b300 flex justify-end">
                  20.03.2022 11:35:20
                </span>
                <div className="main-1 p-5 flex items-center">
                  <h2>Biometric verification starte</h2>

                  <div className="shape-1"></div>
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <span className="text-blue_b300 flex justify-end">
                  20.03.2022 11:35:20
                </span>
                <div className="main-1 p-5 flex items-center">
                  <h2>ID Document verification passed</h2>

                  <div className="shape-1"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="element">
                <div className="vline first-line"></div>
                <div className="circle circle-black"></div>
              </div>
              <div className="element">
                <div className="vline"></div>
                <div className="circle circle-black"></div>
              </div>
              <div className="element">
                <div className="vline"></div>
                <div className="circle circle-black"></div>
              </div>
              <div className="element">
                <div className="vline"></div>
                <div className="circle circle-black"></div>
              </div>
              <div className="element">
                <div className="vline"></div>
                <div className="circle circle-black"></div>
              </div>
            </div>
            <div className="right-chat-box">
              <div className="flex flex-col">
                <span className="text-blue_b300">20.03.2022 11:35:20</span>
                <div className="main-2 p-5 flex items-center">
                  <h2>Onboarding process started</h2>

                  <div className="shape-2"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-blue_b300">20.03.2022 11:35:20</span>
                <div className="main-2 p-5 flex items-center">
                  <h2>ID Document verification passed</h2>

                  <div className="shape-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alerts;
