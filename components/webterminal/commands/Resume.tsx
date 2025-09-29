import React, { useEffect } from "react";

const Resume: React.FC = () => {
  const openResumeInNewTab = () => {
    window.open("/assets/Demi Daniel - Resume.pdf", "_blank");
  };

  useEffect(() => {
    openResumeInNewTab();
  }, []);

  return <>Opening &apos;Demi Daniel - Resume&apos; in new tab...</>;
};

export default Resume;
