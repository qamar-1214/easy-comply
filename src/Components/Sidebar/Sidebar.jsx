import { useEffect, useState } from "react";
import DashboardIcon from "../../assets/SVG/dashboard.svg";
import VerificationIcon from "../../assets/SVG/verification.svg";
import MarketplaceIcon from "../../assets/SVG/marketplace.svg";
import UsageIcon from "../../assets/SVG/usage.svg";
import IntegrationIcon from "../../assets/SVG/integration.svg";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
const links = [
  { name: "Dashboard", icon: DashboardIcon, link: "/" },
  { name: "Verification", icon: VerificationIcon, link: "/verification" },

  { name: "Market Place", icon: MarketplaceIcon, link: "/marketplace" },
  { name: "Usage", icon: UsageIcon, link: "/usage" },
  { name: "Integration", icon: IntegrationIcon, link: "/integration" },
];

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [isShrink, setIsShrink] = useState(false);
  const location = useLocation();
  const handleShrink = () => {
    if (isShrink) {
      setIsShrink(false);
    } else {
      setIsShrink(true);
    }
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    setActiveLink(location.pathname);
  }, []);

  return (
    <div
      className={`bg-white z-[200] px-1 pt-1 lg:px-3 sticky top-0 h-[100vh] ${
        isShrink ? "w-18" : "min-w-max lg:min-w-[15rem]"
      }  flex flex-col gap-1 lg:py-4 lg:pl-3 lg:pr-3  shadow-xl`}
    >
      <div onClick={handleShrink} className="flex justify-end lg:mb-5 mb-2">
        <svg
          className={`cursor-pointer ${
            isShrink ? "rotate-180" : "hidden lg:flex"
          }`}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.834 15.332L10.834 10.332L15.834 5.33203"
            stroke="#A5ADBA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 15.332L4 10.332L9 5.33203"
            stroke="#A5ADBA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {links.map(({ name, icon, link }, index) => (
        <NavLink
          to={link}
          onClick={() => window.scrollTo(0, 0)}
          key={link}
          className="w-full"
        >
          <button
            key={link}
            className={`flex items-center justify-start gap-3  w-full px-2 pr-0 lg:px-3 py-3 text-md font-semibold rounded transition-colors duration-300 ease-in-out ${
              activeLink === link
                ? "bg-light_primary border-l-4 lg:border-l-[6px] border-primary text-gray-900"
                : " text-gray-900 hover:bg-light_primary hover:text-gray-900"
            } ${index !== 0 ? "mt-2" : ""}`}
            onClick={() => handleLinkClick(link)}
          >
            <img src={icon} alt={name} className="w-[70%] lg:w-auto" />

            <span
              className={`ml-2  ${isShrink ? "hidden" : "hidden lg:inline"}`}
            >
              {name}
            </span>
          </button>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
