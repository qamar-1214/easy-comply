import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import Dashboard from "../Pages/Dashboard";
import Verification from "../Pages/Verification";
import MarketPlace from "../Pages/MarketPlace";
import Usage from "../Pages/Usage";
import Integration from "../Pages/Integration";
import Error404 from "../Components/Error404";
import { useEffect } from "react";
import VerificationsList from "../Pages/VerificationsList";

const UserLayout = () => {

  useEffect(()=> {
    console.log("yes")
  }, [])
  return (
    <>
      <div>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="verification" element={<VerificationsList />} />
            <Route path="verification/:id" element={<Verification />} />
            <Route path="marketplace" element={<MarketPlace />} />
            <Route path="usage" element={<Usage />} />
            <Route path="integration" element={<Integration />} />
            <Route path="*" element={<Error404/>}/>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default UserLayout;
