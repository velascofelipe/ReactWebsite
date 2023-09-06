import React from "react";

const ScrollToSectionButton = ({ styles }) => {
  const scrollToMiddle = () => {
    const windowHeight = window.innerHeight;
    const middleOfPage = windowHeight * 2.7;

    window.scrollTo({
      top: middleOfPage,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      onClick={scrollToMiddle}
    >
      More about me
    </button>
  );
};

export default ScrollToSectionButton;
