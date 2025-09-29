import React, { useEffect } from "react";

const Contact: React.FC = () => {
  // Open mail app when component is mounted.
  useEffect(() => {
    const email = "demidaniel98@gmail.com";
    const mailtoURL = `mailto:${email}`;

    window.location.href = mailtoURL;
  }, []);

  return <>Opening mail app...</>;
};

export default Contact;
