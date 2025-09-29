"use client";

import { useState, useEffect, RefObject } from "react";

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

interface TerminalPromptProps {
  onEnterPress: (command: string) => void;
  inputRef: RefObject<HTMLInputElement>;
  commandHistory: CommandHistoryItem[];
  globalHistory: string[];
}

const TerminalPrompt: React.FC<TerminalPromptProps> = ({
  onEnterPress,
  inputRef,
  commandHistory,
  globalHistory,
}) => {
  const [inputText, setInputText] = useState("");
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [scratchText, setScratchText] = useState<string>("");
  const [caretPos, setCaretPos] = useState(0);

  useEffect(() => {
    setHistoryIndex(null);
  }, [commandHistory]);

  const updateCaret = () => {
    if (inputRef.current) {
      setCaretPos(inputRef.current.selectionStart ?? 0);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
    setCaretPos(event.target.selectionStart ?? event.target.value.length);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const key = event.key;

    if (key === "Enter") {
      onEnterPress(inputText);
      setInputText("");
      setScratchText("");
      setCaretPos(0);
      setHistoryIndex(null);
      return;
    }

    if (key === "ArrowUp" && globalHistory.length > 0) {
      if (historyIndex === null) setScratchText(inputText);

      const newIndex =
        historyIndex === null
          ? globalHistory.length - 1
          : Math.max(0, historyIndex - 1);

      setHistoryIndex(newIndex);
      const newCommand = globalHistory[newIndex];
      setInputText(newCommand);
      setCaretPos(newCommand.length);
      event.preventDefault();
      return;
    }

    if (
      key === "ArrowDown" &&
      globalHistory.length > 0 &&
      historyIndex !== null
    ) {
      const newIndex = historyIndex + 1;

      if (newIndex >= globalHistory.length) {
        setHistoryIndex(null);
        setInputText(scratchText);
        setCaretPos(scratchText.length);
      } else {
        setHistoryIndex(newIndex);
        const newCommand = globalHistory[newIndex];
        setInputText(newCommand);
        setCaretPos(newCommand.length);
      }

      event.preventDefault();
      return;
    }

    if (key === "ArrowLeft") {
      setCaretPos((pos) => Math.max(0, pos - 1));
      return;
    }
    if (key === "ArrowRight") {
      setCaretPos((pos) => Math.min(inputText.length, pos + 1));
      return;
    }
  };

  return (
    <div className="terminal-prompt">
      <span className="prompt" style={{ flexShrink: 0 }}>
        (web) visitor@oodemi.com ~ %&nbsp;
      </span>
      <span
        className="command"
        style={{ flexGrow: 1, wordBreak: "break-word" }}
      >
        {inputText.split("").map((char, i) =>
          i === caretPos ? (
            <span key={i} className="blinking-caret">
              {char || " "}
            </span>
          ) : (
            <span key={i} className="char">
              {char}
            </span>
          ),
        )}
        {caretPos === inputText.length && (
          <span className="blinking-caret">&nbsp;</span>
        )}
      </span>
      <input
        autoComplete="off"
        aria-hidden
        spellCheck="false"
        autoFocus
        autoCapitalize="off"
        ref={inputRef}
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        onClick={updateCaret}
        onKeyUp={updateCaret}
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          opacity: 0,
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default TerminalPrompt;
