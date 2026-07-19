import React from "react";

export const StatsCard = ({
  icon: Icon,
  bgColor,
  borderColor,
  count,
  iconColor,
  description,
  category,
}) => {
  return (
    <div
      className={`w-full md:px-6 md:py-6 px-3 py-4 border rounded-xl ${bgColor} ${borderColor}`}
    >
      <div className="flex items-start justify-between gap-2">
        {/* Bloco esquerdo: ícone + count + description */}
        <div className="flex items-center md:justify-start justify-center gap-4 md:flex-nowrap flex-wrap">
          <div
            className={`w-14 h-14 ${bgColor} border ${borderColor} rounded-xl flex items-center justify-center`}
          >
            <span className={`text-3xl font-bold ${iconColor}`}>
              <Icon />
            </span>
          </div>
          <div className="flex items-center flex-col md:items-start space-y-0.5 md:text-start text-center">
            <h3 className="text-2xl font-bold text-neutral-800 md:text-start text-center">
              {count}
            </h3>
            <p className="text-base text-neutral-500">{description}</p>
          </div>
        </div>

        {/* Canto direito: categoria */}
        {category && (
          <span
            className={`text-xs font-medium capitalize px-2 py-0.5 rounded-full border ${borderColor} ${iconColor} bg-white/50 whitespace-nowrap`}
          >
            {category}
          </span>
        )}
      </div>
    </div>
  );
};