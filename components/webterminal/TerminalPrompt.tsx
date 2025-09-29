"use client";
import React, { useState, useEffect, RefObject } from "react";
import { Input } from "@nextui-org/input";
import "./styles/TerminalPrompt.css";

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

interface TerminalPromptProps {
  onEnterPress: (command: string) => void;
  inputRef: RefObject<HTMLInputElement>;
  commandHistory: CommandHistoryItem[];
}

const TerminalPrompt: React.FC<TerminalPromptProps> = ({
  onEnterPress,
  inputRef,
  commandHistory,
}) => {
  const [inputText, setInputText] = useState("");
  const [caretPosition, setCaretPosition] = useState(0);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [beforeCaretText, setBeforeCaretText] = useState("");
  const [afterCaretText, setAfterCaretText] = useState("");

  const handleTerminalKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    //if (!inputRef.current?.matches(":focus")) return;

    event.preventDefault();

    inputRef?.current?.focus();

    if (event.key === "Enter") {
      onEnterPress(inputText);
      setInputText("");
      setHistoryIndex(null);
      setCaretPosition(0);

      return;
    }

    let nextInput = inputText;

    switch (event.key) {
      case "Backspace":
        if (caretPosition > 0) {
          nextInput =
            inputText.slice(0, caretPosition - 1) +
            inputText.slice(caretPosition);
          setCaretPosition(caretPosition - 1);
        }
        break;

      case "ArrowLeft":
        if (caretPosition > 0) {
          setCaretPosition(caretPosition - 1);
        }
        break;

      case "ArrowRight":
        if (caretPosition < inputText.length) {
          setCaretPosition(caretPosition + 1);
        }
        break;

      case "ArrowUp":
        if (commandHistory.length > 0) {
          const newIndex =
            historyIndex === null
              ? commandHistory.length - 1
              : Math.max(0, historyIndex - 1);

          setHistoryIndex(newIndex);
          nextInput = commandHistory[newIndex].command;
          setCaretPosition(commandHistory[newIndex].command.length);
        }
        break;

      case "ArrowDown":
        if (historyIndex !== null) {
          const newIndex = Math.min(commandHistory.length, historyIndex + 1);

          setHistoryIndex(newIndex);
          if (newIndex === commandHistory.length) {
            nextInput = "";
            setCaretPosition(0);
          } else {
            nextInput = commandHistory[newIndex].command;
            setCaretPosition(commandHistory[newIndex].command.length);
          }
        }
        break;

      default:
        if (event.key.length === 1 && !event.metaKey && !event.ctrlKey) {
          nextInput =
            inputText.slice(0, caretPosition) +
            event.key +
            inputText.slice(caretPosition);
          setCaretPosition(caretPosition + 1);
        }
    }

    setInputText(nextInput);
  };

  useEffect(() => {
    const [before, after] = [
      inputText.slice(0, caretPosition),
      inputText.slice(caretPosition),
    ];

    setBeforeCaretText(before);
    setAfterCaretText(after);
  }, [inputText, caretPosition]);

  return (
    <div
      className="flex align-baseline z-50"
      role="textbox"
      tabIndex={0}
      onKeyDown={handleTerminalKeyDown}
    >
      <span className="prompt text-wrap">
        (web) visitor@terminal.demidaniel.dev ~ %{" "}
        <span className="command">
          <span>{beforeCaretText}</span>
          <span className="caret">
            <span
              className="caretAfter"
              style={{ backgroundColor: "#fc8a68" }}
            />
          </span>
          <span>{afterCaretText}</span>
        </span>
      </span>
      <Input
        ref={inputRef}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        readOnly
        autoCapitalize="off"
        autoComplete="off"
        className="hidden"
        spellCheck="false"
        value={inputText}
        onKeyDown={handleTerminalKeyDown}
      />
    </div>
  );
};

export default TerminalPrompt;
