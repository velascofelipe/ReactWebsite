import React from "react";
import ScrollToSectionButton from "./ScrollToSectionButton"; // Replace with correct path
import CardDeal from "./CardDeal"; // Replace with correct path to your CardDeal component

const App = () => {
  return (
    <div>
      {/* ... Other content ... */}

      <ScrollToSectionButton
        styles="py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none"
        sectionId="CardDeal"
      />

      {/* ... Other content ... */}

      <CardDeal />

      {/* ... Other content ... */}
    </div>
  );
};

export default App;
