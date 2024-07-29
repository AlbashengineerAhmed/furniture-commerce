import React, { useEffect } from "react";
import "../../assets/css/custom.css";
import { Link } from "react-router-dom";

const furnitureData = [
  { category: "Living Room", items: ["Sofa", "Beds", "Tv Units"] },
  { category: "Bedroom", items: ["Bed", "Dresser", "Nightstands"] },
  { category: "Dining Room", items: ["Dining Table", "Chairs", "Sideboard"] },
  { category: "Office", items: ["Desk", "Office Chair", "Bookshelves"] },
  {
    category: "Outdoor",
    items: ["Patio Set", "Sun Lounger", "Outdoor Dining Table"],
  },
  { category: "Kids Room", items: ["Bunk Bed", "Study Desk", "Toy Storage"] },
  {
    category: "Entertainment",
    items: ["TV Stand", "Media Console", "Entertainment Center"],
  },
  { category: "Storage", items: ["Cabinets", "Shelving Units", "Wardrobe"] },
  { category: "Home Decor", items: ["Rugs", "Lamps", "Wall Art"] },
  {
    category: "Kitchen",
    items: ["Kitchen Table", "Bar Stools", "Cookware Set"],
  },
  { category: "Bathroom", items: ["Vanity", "Shower Curtain", "Storage Rack"] },
  // { category: 'Home Office', items: ['Computer Desk', 'Task Chair', 'Filing Cabinet'] },
];

const SideBarMenu = () => {
  useEffect(() => {
    const handleClick = (event) => {
      const button = event.currentTarget;
      const panel = button.nextElementSibling;

      const accordions = document.querySelectorAll(".accordion");
      accordions.forEach((accordion) => {
        if (accordion !== button) {
          accordion.classList.remove("active");
          accordion.nextElementSibling.style.maxHeight = null;
        }
      });

      button.classList.toggle("active");
      panel.style.maxHeight = button.classList.contains("active")
        ? `${panel.scrollHeight}px`
        : null;
    };

    const accordions = document.querySelectorAll(".accordion");
    accordions.forEach((accordion) => {
      accordion.addEventListener("click", handleClick);
    });

    return () => {
      accordions.forEach((accordion) => {
        accordion.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <div className="accordionMenuDiv">
      <div className="accordionMenuDivInside">
        {furnitureData.map((categoryData, index) => (
          <div key={index}>
            <button className="accordion">{categoryData.category}</button>
            <div className="panel">
              <ul>
                {categoryData.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link to="/subcategory" className="accordionItem">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBarMenu;
