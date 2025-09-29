import React, { useState, useEffect, useRef } from "react";
import TerminalPrompt from "./TerminalPrompt";
import CommandRouter from "./CommandRouter";
import { Banner } from "./commands";

const Terminal: React.FC = () => {
  const [promptHistory, setPromptHistory] = useState<
    { command: string; output: React.ReactNode }[]
  >([]);
  const [initialBannerRender, setInitialBannerRender] =
    useState<React.ReactNode>([<Banner />]);
  const inputRef = useRef<HTMLInputElement>(null);

  const [globalHistory, setGlobalHistory] = useState<string[]>([]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        inputRef.current.focus();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [promptHistory]);

  const handleEnterPress = (command: string) => {
    if (!command) {
      return;
    }

    setGlobalHistory((prev) => [...prev, command]);

    if (command.toLowerCase() === "clear") {
      setPromptHistory([]);
      setInitialBannerRender([]);
    } else {
      const output = (
        <CommandRouter command={command} historyArray={globalHistory} />
      );

      setPromptHistory((prevPromptHistory) => [
        ...prevPromptHistory,
        { command, output },
      ]);
    }
  };

  return (
    <div className="terminal-container">
      {initialBannerRender}
      {promptHistory.map((prompt, index) => (
        <div key={index}>
          <span className="prompt">
            {`(web) visitor@oodemi.com ~ % `}
            <span>{prompt.command}</span>
          </span>
          <br />
          {prompt.output}
        </div>
      ))}
      <TerminalPrompt
        onEnterPress={handleEnterPress}
        inputRef={inputRef}
        commandHistory={promptHistory}
        globalHistory={globalHistory}
      />
    </div>
  );
};

export default Terminal;
