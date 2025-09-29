"use client";

import React from "react";
import {
  Whoami,
  Whois,
  Education,
  Projects,
  Resume,
  Socials,
  Contact,
  History,
  Help,
  Banner,
  NotFound,
} from "./commands";
const CommandRouter: React.FC<{ command: string; historyArray: string[] }> = ({
  command,
  historyArray,
}) => {
  switch (command.toLowerCase()) {
    case "whoami":
      return <Whoami />;
    case "whois":
      return <Whois />;
    case "education":
      return <Education />;
    case "projects":
      return <Projects />;
    case "resume":
      return <Resume />;
    case "socials":
      return <Socials />;
    case "contact":
      return <Contact />;
    case "history":
      return <History historyArray={historyArray} />;
    case "help":
      return <Help />;
    case "clear":
      return [];
    case "banner":
      return <Banner />;
    default:
      return <NotFound command={command} />;
  }
};

export default CommandRouter;
