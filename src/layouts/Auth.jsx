import { Route, Routes } from "react-router-dom";
import Registration from "../Components/Authentication/Registration/Registration";
import Home from "../Components/Authentication/Home";

const AuthLayout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Registration />} />
      </Routes>
    </>
  );
};

export default AuthLayout;
