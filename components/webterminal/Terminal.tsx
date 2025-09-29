"use client";
import React, { useState, useEffect, useRef } from "react";
import { Card } from "@nextui-org/card";
import { Button } from "@nextui-org/button";

import TerminalPrompt from "./TerminalPrompt";
import CommandRouter from "./CommandRouter";
import { Banner } from "./commands";

interface PromptHistory {
  command: string;
  output: React.ReactNode;
}

interface TerminalProps {
  onClose: () => void;
}

const Terminal: React.FC<TerminalProps> = ({ onClose }) => {
  const [promptHistory, setPromptHistory] = useState<PromptHistory[]>([]);
  const [initialBannerRender, setInitialBannerRender] =
    useState<React.ReactNode>([<Banner key="banner" />]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEnterPress = (command: string) => {
    if (!command) {
      return;
    }

    if (command.toLowerCase() === "clear") {
      setPromptHistory([]);
      setInitialBannerRender([]);
    } else {
      const output = (
        <CommandRouter
          command={command}
          historyArray={promptHistory.map((p) => p.command)}
        />
      );

      setPromptHistory((prevPromptHistory) => [
        ...prevPromptHistory,
        { command, output },
      ]);
    }
  };

  return (
    <Card
      aria-label="Terminal"
      className="terminal-container bg-[#2b2031] text-[#ab4eda] font-[menlo] w-[90%] h-[1000px] shadow-2xl"
      tabIndex={0}
      onClick={() => inputRef.current?.focus()}
      onFocus={() => inputRef.current?.focus()}
    >
      <div aria-label="Terminal Toolbar" className="bg-[#393938]">
        <Button
          isIconOnly
          aria-label="Close Terminal"
          className="my-2 ml-4 bg-danger size-"
          radius="full"
          size="sm"
          onClick={onClose}
        >
          x
        </Button>
        <Button
          isIconOnly
          aria-label="Minimize Terminal"
          className="my-2 ml-1 bg-warning"
          radius="full"
          size="sm"
        >
          -
        </Button>
        <Button
          isIconOnly
          aria-label="Fullscreen Terminal"
          className="my-2 ml-1 bg-success"
          radius="full"
          size="sm"
        >
          &lt;&gt;
        </Button>
      </div>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div
        aria-label="Terminal Editor"
        className="p-4 overflow-y-scroll overflow-x-hidden"
      >
        {initialBannerRender}
        {promptHistory.map((prompt, index) => (
          <div key={index}>
            <span className="prompt">
              {`(web) visitor@terminal.demidaniel.dev ~ % `}
              <span>{prompt.command}</span>
            </span>
            <br />
            {prompt.output}
          </div>
        ))}
        <TerminalPrompt
          commandHistory={promptHistory}
          inputRef={inputRef}
          onEnterPress={handleEnterPress}
        />
      </div>
    </Card>
  );
};

export default Terminal;
