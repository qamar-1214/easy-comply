import { useState } from "react";
import cardImg1 from "../../assets/marketplace-imgs/card1.png";
import cardImg2 from "../../assets/marketplace-imgs/card2.png";
import cardImg3 from "../../assets/marketplace-imgs/card3.png";
import cardImg4 from "../../assets/marketplace-imgs/card4.png";
import cardImg5 from "../../assets/marketplace-imgs/card5.png";
import cardImg6 from "../../assets/marketplace-imgs/card6.png";
import cardImg7 from "../../assets/marketplace-imgs/card7.png";
import cardImg8 from "../../assets/marketplace-imgs/card8.png";
import cardImg9 from "../../assets/marketplace-imgs/card9.png";

const CardsData = [
  {
    icon: cardImg1,
    alt: "Img1",
    heading: "Facial Biometric KYC",
    text: "Lorem ipsum is simply dumy text",
  },
  {
    icon: cardImg2,
    alt: "Img2",
    heading: "Facial Biometric KYC",
    text: "Lorem ipsum is simply dumy text",
  },
  {
    icon: cardImg3,
    alt: "Img3",
    heading: "Facial Biometric KYC",
    text: "Lorem ipsum is simply dumy text",
  },
  {
    icon: cardImg4,
    alt: "Img4",
    heading: "Facial Biometric KYC",
    text: "Lorem ipsum is simply dumy text",
  },
  {
    icon: cardImg5,
    alt: "Img5",
    heading: "Facial Biometric KYC",
    text: "Lorem ipsum is simply dumy text",
  },
  {
    icon: cardImg6,
    alt: "Img6",
    heading: "Facial Biometric KYC",
    text: "Lorem ipsum is simply dumy text",
  },
  {
    icon: cardImg7,
    alt: "Img7",
    heading: "Facial Biometric KYC",
    text: "Lorem ipsum is simply dumy text",
  },
  {
    icon: cardImg8,
    alt: "Img8",
    heading: "Facial Biometric KYC",
    text: "Lorem ipsum is simply dumy text",
  },
  {
    icon: cardImg9,
    alt: "Img9",
    heading: "Facial Biometric KYC",
    text: "Lorem ipsum is simply dumy text",
  },
];
const MarketPlaceCards = () => {
  const [checkboxVisibility, setCheckboxVisibility] = useState(
    CardsData.map(() => false)
  );

  const handleCardClick = (index) => {
    const newCheckboxVisibility = [...checkboxVisibility];
    newCheckboxVisibility[index] = !newCheckboxVisibility[index];
    setCheckboxVisibility(newCheckboxVisibility);
  };

  return (
    <section className="mt-5 page-1">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
        {CardsData.map((card, index) => (
          <div
            onClick={() => handleCardClick(index)}
            key={index}
            className={`card   ${
              checkboxVisibility[index]
                ? "bg-gray-300 market-place-card-shadow"
                : "bg-white"
            } hover:bg-gray-200 transition-all duration-300 ease-in-out p-2 rounded-lg cursor-pointer`}
          >
            <div className="flex items-center gap-4 relative">
              <span>
                <img src={card.icon} alt={card.alt} />
              </span>
              <span className="flex flex-col sm:gap-1">
                <h2>{card.heading}</h2>
                <p className="text-sm text-[#A6A6C8]">{card.text}</p>
              </span>
              <span className="absolute top-0 right-0 lg:top-1 lg:right-2">
                {/* Show checkbox based on checkboxVisibility[index] */}
                {checkboxVisibility[index] && (
                  <input
                    className="form-checkbox accent-success h-4 w-4 "
                    type="checkbox"
                    checked={true}
                    onChange={() => {}}
                  />
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketPlaceCards;
