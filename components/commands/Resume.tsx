import React, { useEffect } from "react";
import resume from "../../assets/Demi Daniel - Resume.pdf";

const Resume: React.FC = () => {
  const openResumeInNewTab = () => {
    window.open(resume, "_blank");
  };

  useEffect(() => {
    openResumeInNewTab();
  }, []);

  return <>Opening 'Demi Daniel - Resume' is new tab...</>;
};

export default Resume;
