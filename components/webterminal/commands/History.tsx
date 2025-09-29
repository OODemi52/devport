import React from "react";
import "../styles/History.css";

const History: React.FC<{ historyArray: string[] }> = ({ historyArray }) => {
  return (
    <>
      <div>
        <ul>
          {historyArray.map((historyItem, index) => (
            <li key={index} className="command">
              {historyItem.toLowerCase()}
            </li>
          ))}
        </ul>
        <br />
      </div>
    </>
  );
};

export default History;
