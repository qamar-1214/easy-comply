const Comp2 = ({ onBack, onOrder }) => {
  return (
    <section>
      <div className="p-6">
        <span>
          <h1 className="border-b-2 border-b-border_color text-xl py-3">
            ORDER SUMMARY
          </h1>
        </span>
        <div className="grid grid-cols-1 gap-8 sm:gap-1  sm:grid-cols-2">
          <div>
            <span>
              <h2 className="p-2 font-bold">1.Video KYC</h2>
            </span>
            <div className="px-6 text-xl font-medium ">
              <span>
                <h3>Pricing model: Prepaid</h3>
              </span>
              <span>
                <h3>
                  Api transaction estimate:
                  <ul className="list-disc px-5">
                    <li>Minutes:200</li>
                    <li>Storage MB:10000</li>
                  </ul>
                </h3>
              </span>
            </div>
          </div>
          <div className="flex sm:justify-end flex-col sm:items-end">
            <h2 className="text-xl font-bold">
              Subtotal
              <span className="text-lg font-medium">(ex vat)</span>: $3,006.00
            </h2>
            <h1>
              Order total<span className="text-lg font-medium">(ex vat)</span>:
              $3,006.00
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 mt-12">
          <button onClick={onBack} className="back-configuration-btn">
            Back to configuration
          </button>
          <button onClick={onOrder} className="order-btn">
            Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default Comp2;
