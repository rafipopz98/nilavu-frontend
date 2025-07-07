import { ChevronDownIcon, SearchCodeIcon } from "lucide-react";
import { useState } from "react";

type DropdownProps = {
  label: string;
  options: { label: string; value: string; icon?: string }[];
  selectedOption: string;
  onChange: (value: string) => void;
  placeholder?: string;
  showOptionIcons?: boolean;
  optionIconPosition?: "left" | "right";
  customStyles?: any;
  disabled?: boolean;
  showSearch?: boolean;
};

const Dropdown = ({
  label,
  options,
  selectedOption,
  onChange,
  placeholder = "Select an option",
  showOptionIcons = false,
  optionIconPosition = "left",
  customStyles = {},
  disabled = false,
  showSearch = false,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const displayOptions =
    searchTerm.length > 0
      ? options.filter((option) =>
          option.label.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : options;

  return (
    <div className="relative w-full">
      <div
        className={`w-full px-4 py-2.5 text-sm flex items-center justify-between rounded-xl cursor-pointer 
          ${
            disabled
              ? "text-muted-foreground border-border opacity-60 cursor-not-allowed"
              : "text-foreground border-border"
          } 
          ${customStyles?.container || "border"}
        `}
        style={{
          borderStyle: customStyles.borderStyle || "solid",
          ...customStyles.additionalStyles,
        }}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <div className="flex flex-col w-full">
          {label && (
            <label
              className={`block text-xs font-light mb-1 ${
                disabled ? "text-muted-foreground" : "text-foreground"
              }`}
            >
              {label}
            </label>
          )}
          <div
            className={`flex items-center ${
              optionIconPosition === "right" ? "justify-between gap-2" : "gap-2"
            }`}
          >
            {showOptionIcons &&
              optionIconPosition === "left" &&
              selectedOption && (
                <img
                  src={
                    options.find((option) => option.value === selectedOption)
                      ?.icon
                  }
                  alt="icon"
                  className="h-3.5 rounded-sm"
                />
              )}
            <span className="truncate">
              {selectedOption
                ? options.find((option) => option.value === selectedOption)
                    ?.label
                : placeholder}
            </span>
            {showOptionIcons &&
              optionIconPosition === "right" &&
              selectedOption && (
                <img
                  src={
                    options.find((option) => option.value === selectedOption)
                      ?.icon
                  }
                  alt="icon"
                  className="h-3.5 rounded-sm"
                />
              )}
          </div>
        </div>
        <ChevronDownIcon
          className={`w-5 h-5 transform transition ${
            isOpen ? "rotate-180" : ""
          } ${disabled ? "text-muted-foreground" : "text-muted-foreground"}`}
        />
      </div>

      {isOpen && !disabled && (
        <div className="absolute z-10 mt-1.5 w-full bg-muted border border-border rounded-xl shadow-lg max-h-60 overflow-y-auto">
          {showSearch && (
            <div className="py-1 px-3 m-3 border border-border rounded-lg flex items-center">
              <SearchCodeIcon className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-2.5 py-2 text-sm focus:outline-none text-foreground"
              />
            </div>
          )}
          <ul>
            {displayOptions.length > 0 ? (
              displayOptions.map((option, index) => (
                <li
                  key={index}
                  className={`p-3 flex items-center gap-2 text-sm cursor-pointer hover:bg-muted transition
                    ${
                      selectedOption === option.value
                        ? "bg-muted font-medium"
                        : ""
                    }`}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                    setSearchTerm("");
                  }}
                >
                  {showOptionIcons && optionIconPosition === "left" && (
                    <img
                      src={option.icon}
                      alt="icon"
                      className="h-3.5 rounded-sm"
                    />
                  )}
                  <span>{option.label}</span>
                  {showOptionIcons && optionIconPosition === "right" && (
                    <img
                      src={option.icon}
                      alt="icon"
                      className="h-3.5 rounded-sm"
                    />
                  )}
                </li>
              ))
            ) : (
              <li className="p-3 text-sm text-muted-foreground text-center py-5">
                No options found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
