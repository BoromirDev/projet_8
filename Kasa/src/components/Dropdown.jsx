import { useState } from "react";
import iconArrow from "../assets/Vector.svg";
import "./Dropdown.css";

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <div className="dropdown-header">
        <h2>{title}</h2>
        <img
          src={iconArrow}
          alt="flèche"
          className={`dropdown-arrow ${isOpen ? "rotated" : ""}`}
          onClick={toggleDropdown}
        />
      </div>

      <div
        className={`dropdown-content ${isOpen ? "open" : "closed"}`}
        aria-hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  );
}

export default Dropdown;