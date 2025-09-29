import React, { useEffect } from "react";

const Contact: React.FC = () => {
  useEffect(() => {
    const email = "demidaniel98@gmail.com";
    const mailtoURL = `mailto:${email}`;
    window.location.href = mailtoURL;
  }, []);

  return <>Opening mail app...</>;
};

export default Contact;
