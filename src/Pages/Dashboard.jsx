import Cards from "../Components/Dashboard/Cards";

import Hero from "../Components/Dashboard/Hero";
import AnalyticDetails from "../Components/Dashboard/AnalyticDetails";
import Table1 from "../Components/Dashboard/Table1";
import Table2 from "../Components/Dashboard/Table2";

const Dashboard = () => {
  return (
    <section id="main-content" className="bg-grey w-full overflow-hidden">
      <Hero />

      <div className="px-1 sm:px-5 pt-7">
        <Cards />
        <AnalyticDetails />
        <Table1 />
        <Table2 />
      </div>
    </section>
  );
};

export default Dashboard;
