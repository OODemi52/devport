import React from "react";

const NotFound: React.FC<{ command: string }> = ({ command }) => {
  return (
    <>
      <br />
      <div>
        wsh: command not found: {command}. For a list of commands, type{" "}
        <span className="command">'help'</span>.
      </div>
      <br />
    </>
  );
};

export default NotFound;
