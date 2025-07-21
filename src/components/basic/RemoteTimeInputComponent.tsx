import { useRef, useState } from "react";

type SmartTimeInputProps = {
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
};

const isValidTime = (val: string) => {
  const [h, m] = val.split(":");
  const hours = parseInt(h, 10);
  const mins = parseInt(m, 10);
  return (
    /^\d{2}:\d{2}$/.test(val) &&
    hours >= 0 &&
    hours <= 23 &&
    mins >= 0 &&
    mins <= 59
  );
};

const editableIndices = [0, 1, 3, 4, 5];

const getNextEditableIndex = (i: number) =>
  editableIndices.find((idx) => idx > i) ?? i;

const getPrevEditableIndex = (i: number) =>
  [...editableIndices].reverse().find((idx) => idx < i) ?? i;

const SmartTimeInput = ({
  value,
  onChange,
  placeholder,
}: SmartTimeInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [display, setDisplay] = useState(value || "00:00");
  const [touched, setTouched] = useState(false);

  const setCursor = (pos: number) => {
    setTimeout(() => {
      inputRef.current?.setSelectionRange(pos, pos);
    }, 0);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = inputRef.current;
    if (!input) return;

    const cursorPos = input.selectionStart ?? 0;
    const key = e.key;

    if (key === "ArrowLeft") {
      e.preventDefault();
      setCursor(getPrevEditableIndex(cursorPos));
      return;
    }

    if (key === "ArrowRight") {
      e.preventDefault();
      setCursor(getNextEditableIndex(cursorPos));
      return;
    }

    if (key === "Backspace") {
      e.preventDefault();
      const prev = getPrevEditableIndex(cursorPos);
      const chars = display.split("");
      chars[prev] = "0";
      const newVal = chars.join("");

      if (!isValidTime(newVal)) return;

      setDisplay(newVal);
      onChange(newVal);
      setCursor(prev);
      return;
    }

    if (!/^\d$/.test(key)) {
      e.preventDefault();
      return;
    }

    if (!editableIndices.includes(cursorPos)) {
      e.preventDefault();
      return;
    }

    const chars = display.split("");
    chars[cursorPos] = key;
    const newVal = chars.join("");

    if (!isValidTime(newVal)) {
      e.preventDefault();
      return;
    }

    setDisplay(newVal);
    onChange(newVal);
    setCursor(getNextEditableIndex(cursorPos));
    e.preventDefault();
  };

  const handleFocus = () => {
    if (!touched) {
      setTouched(true);
      setDisplay("00:00");
      onChange("00:00");
    }
    setCursor(editableIndices[0]);
  };

  return (
    <input
      ref={inputRef}
      type="text"
      value={!touched && display === "00:00" ? "" : display}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      placeholder={placeholder}
      className="w-24 p-1 border border-border rounded-xl text-md text-center font-light"
    />
  );
};

export default SmartTimeInput;
