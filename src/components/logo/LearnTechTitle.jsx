import React from "react";
import PropTypes from "prop-types";

const LearnTechTitle = ({ size = "text-2xl", color = "text-indigo-600", className = "" }) => {
  return (
    <h1
      className={`${size} ${color} font-bold tracking-tight ${className}`}
    >
      Learn<span className="text-sky-600">Tech</span>
    </h1>
  );
};

// 🔍 Validação das props (boa prática)
LearnTechTitle.propTypes = {
  size: PropTypes.string,      // Exemplo: "text-4xl"
  color: PropTypes.string,     // Exemplo: "text-neutral-900"
  className: PropTypes.string, // Para customizações extras
};

export default LearnTechTitle;
