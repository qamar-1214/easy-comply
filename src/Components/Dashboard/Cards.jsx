import card from "../../assets/dashboard-card-bg.png";
import card1Img from "../../assets/dashboard-imgs/card1.png";
import card2Img from "../../assets/dashboard-imgs/card2.png";
import card3Img from "../../assets/dashboard-imgs/card3.png";
import card4Img from "../../assets/dashboard-imgs/card4.png";
const cardsData = [
  {
    cardImg: card1Img,
    cardbgImg: card,
    heading2: "Total Onboard",
    heading1: "50923",
    heading3: "Sessions",
    gradiendBg: "bg-onboard",
  },
  {
    cardImg: card2Img,
    cardbgImg: card,
    heading2: "Approved",
    heading1: "50923",
    heading3: "Sessions",
    gradiendBg: "bg-approved",
  },
  {
    cardImg: card3Img,
    cardbgImg: card,
    heading2: "Pending",
    heading1: "50923",
    heading3: "Sessions",
    gradiendBg: "pending-bg",
  },
  {
    cardImg: card4Img,
    cardbgImg: card,
    heading2: "Rejected",
    heading1: "50923",
    heading3: "Sessions",
    gradiendBg: "bg-rejected",
  },
];
const Cards = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {cardsData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col relative ${item.gradiendBg} text-white px-8 py-8 gap-4 rounded-xl shadow-xl`}
          >
            <span className="flex gap-1 gap-x-2 items-center">
              <img src={item.cardImg} />
              <h2 className="text-white">{item.heading2}</h2>
            </span>
            <h1 className="font-bold text-4xl">{item.heading1}</h1>
            <h3>{item.heading3}</h3>

            <img
              src={item.cardbgImg}
              className="absolute bottom-0 right-0"
              alt="card"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
