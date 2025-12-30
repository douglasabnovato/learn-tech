import PropTypes from "prop-types";

const ReviewsCard = ({ testimonial }) => {
  const { fullName, image, testimonialText } = testimonial;
  return (
    <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 hover:shadow transition-shadow duration-300">
      <div className="flex items-center mb-2">
        {image ? (
          <img
            src={image}
            alt={fullName}
            className="w-12 h-12 object-cover object-center rounded-full"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-sky-500/5 border border-sky-500/20 flex items-center justify-center text-sky-600 text-4xl font-bold">
            {fullName[0]}
          </div>
        )}
        <h3 className="ml-4 text-xl font-semibold">{fullName}</h3>
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
    testimonialText: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewsCard;
