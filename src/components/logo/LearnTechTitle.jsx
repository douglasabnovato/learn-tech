import React from "react";
import PropTypes from "prop-types";
import LogoIcon from "./assets/logo192.svg"; // importar como imagem

const LearnTechTitle = ({
  size = "text-2xl",
  className = "",
  showIcon = true,
  iconSize = "w-8 h-8",
  gradient = true, // alterna entre cor sólida e gradiente
}) => {
  const gradientClasses =
    "text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-600 to-purple-700";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {showIcon && <img src={LogoIcon} className={`${iconSize}`} alt="Logo" />}
      <h1
        className={`${size} font-bold tracking-tight ${
          gradient ? gradientClasses : "text-indigo-600"
        }`}
      >
        Learn
        <span className="text-sky-600"> TECH</span>
      </h1>
    </div>
  );
};

LearnTechTitle.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  showIcon: PropTypes.bool,
  iconSize: PropTypes.string,
  gradient: PropTypes.bool,
};

export default LearnTechTitle;
