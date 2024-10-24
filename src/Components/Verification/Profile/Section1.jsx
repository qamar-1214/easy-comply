const Section1 = () => {
  return (
    <div className="mt-6 mb-8 bg-white rounded-lg shadow-lg">
      <div className="px-6 py-4">
        <span>
          <h2>Exposures</h2>
        </span>
      </div>
      <div className="border-t-[2px] border-border_color p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-8">
          <span>
            <h3>Risk Type</h3>
            <p>Low</p>
          </span>
          <span>
            <h3>Last Update</h3>
            <p>26/12/2023</p>
          </span>
          <span>
            <h3>Updated By</h3>
            <p>Muhammad Tayyab</p>
          </span>
          <span className="flex lg:justify-end">
            <button className="success-btn">Low Risk Type</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Section1;
