import PropTypes from "prop-types";

const getInitials = (fullName = "") => {
  const parts = fullName.trim().split(" ").filter(Boolean);
  const first = parts[0]?.[0] || "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
};

const ReviewsCard = ({ testimonial }) => {
  const { fullName, image, role, testimonialText } = testimonial;
  return (
    <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 hover:shadow transition-shadow duration-300">
      <div className="flex items-center mb-2">
        {image ? (
          <img
            src={image}
            alt={fullName}
            className="w-12 h-12 object-cover object-center rounded-full shrink-0"
          />
        ) : (
          <div className="w-12 h-12 shrink-0 rounded-full bg-sky-500/5 border border-sky-500/20 flex items-center justify-center text-sky-600 text-base font-bold">
            {getInitials(fullName)}
          </div>
        )}
        <div className="ml-4">
          <h3 className="text-xl font-semibold leading-tight">{fullName}</h3>
          {role && (
            <p className="text-xs text-neutral-500 font-medium">{role}</p>
          )}
        </div>
      </div>
      <p className="text-sm text-neutral-600 font-normal">
        {testimonialText || "No review available."}
      </p>
    </div>
  );
};

ReviewsCard.propTypes = {
  testimonial: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    image: PropTypes.string,
    role: PropTypes.string,
    testimonialText: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewsCard;