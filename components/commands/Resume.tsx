"use client";

import { useEffect } from "react";

const Resume: React.FC = () => {
  const openResumeInNewTab = () => {
    window.open("/Demi Daniel - Resume.pdf", "_blank");
  };

  useEffect(() => {
    openResumeInNewTab();
  }, []);

  return <>Opening "Demi Daniel - Resume" in a new tab...</>;
};

export default Resume;
