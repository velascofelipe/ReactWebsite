import React, { useState } from "react";
import "./ScrollToTopBubble.css"; // Asegúrate de tener el archivo CSS correspondiente

const ScrollToTopBubble = () => {
  const [showBubble, setShowBubble] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowBubble(true);
    } else {
      setShowBubble(false);
    }
  };

  // Agregar un listener de scroll al montar el componente
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-to-top-bubble ${showBubble ? "visible" : ""}`}>
      <button className="bubble-button" onClick={scrollToTop}>
        ↑
      </button>
    </div>
  );
};

export default ScrollToTopBubble;
