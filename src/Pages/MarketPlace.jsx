import ActivationModel from "../Components/MarketPlace/ActivationModel";
import MarketPlaceCards from "../Components/MarketPlace/MarketPlaceCards";
import OrderSummaryTable from "../Components/MarketPlace/OrderSummaryTable";
import SahalLiveCapture from "../Components/MarketPlace/SahalLiveCapture";

const MarketPlace = () => {
  return (
    <div
      className="px-3 md:px-5 pt-7 w-full overflow-hidden"
      id="market-place-page"
    >
      <div className="flex items-center justify-between">
        <h1 className="m-0  text-[30px] font-[400]">Market Place</h1>
      </div>
      <MarketPlaceCards />
      <ActivationModel />
      <SahalLiveCapture />
      <OrderSummaryTable />
    </div>
  );
};

export default MarketPlace;
