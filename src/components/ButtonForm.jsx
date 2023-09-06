import React from "react";

const EmailButton = ({ styles }) => {
  const sendEmail = () => {
    window.location.href = "mailto:felipevelascoaguirre@gmail.com";
  };

  return (
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      onClick={sendEmail}
    >
      Send Email
    </button>
  );
};

export default EmailButton;
