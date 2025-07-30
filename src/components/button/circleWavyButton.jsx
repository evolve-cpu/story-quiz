export const CircleWavyButton = ({
  buttonType = "button",
  handleClick = () => {},
  text = "",
  textSizeClass = "text-32px",
  textWeightClass = "font-extrabold",
  buttonSizeClass = "",
}) => {
  return (
    <button
      type={buttonType}
      onClick={(e) => handleClick(e)}
      className={`p-6 transition-all bg-no-repeat hover:drop-shadow-button bg-full bg-button ${
        buttonSizeClass ? buttonSizeClass : "min-w-32 min-h-32"
      } true_option`}
    >
      <p
        className={`leading-0.7 text-black ${textSizeClass} ${textWeightClass}`}
      >
        {text}
      </p>
    </button>
  );
};
