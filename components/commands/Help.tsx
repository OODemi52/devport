"use client";

import React from "react";
import "../styles/Help.css";

const Help: React.FC = () => {
  const command = {
    whoami: "Who you are",
    whois: "All about me",
    education: "View my education",
    projects: "View my coding projects",
    resume: "View my resume (pdf in new tab)",
    socials: "Display my social media accounts",
    contact: "Feel free to shoot me an email!",
    history: "View command history",
    help: "List all commands",
    clear: "Clear the terminal",
    banner: "Display the welcome message and banner",
  };

  return (
    <div>
      {Object.entries(command).map(([name, description]) => (
        <p key={name}>
          <span className="command">{name}</span> - <span>{description}</span>
          <br />
        </p>
      ))}
      <p>
        <span className="message">Keyboard shortcuts:</span>
        <br />
        <span className="message">Up Arrow (↑):</span> Go to the previous
        command.
        <br />
        <span className="message">Down Arrow (↓):</span> Go to the next command.
      </p>
    </div>
  );
};

export default Help;
