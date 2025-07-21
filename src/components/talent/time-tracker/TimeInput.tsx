import moment from "moment";
import { useEffect, useState } from "react";

export const TimeInput = (props: any) => {
  let { defaultData, name, onChange } = props;
  const [value, setValue] = useState("");

  useEffect(() => {
    if (defaultData?.[name]) {
      setValue(moment(defaultData[name]).format("HH:mm"));
    }
  }, [defaultData]);

  const handleChange = ({ target }: any) => {
    let { value: val = "" } = target;
    if (props?.type === "text") {
      // Regex to allow only letters (both uppercase and lowercase)
      if (/^[a-zA-Z ]*$/.test(val)) {
        setValue(val);
        onChange?.({ name, value: val });
      }
    } else {
      setValue(val);
      onChange?.({
        name,
        value: val,
        timeValue: moment(val, "HH:mm").toISOString(),
      });
    }
  };
  return (
    <div className={`flex flex-col gap-y-1 ${props?.containerClassName}`}>
      {props?.label && (
        <label className="text-sm font-semibold text-foreground">
          {props?.label}
        </label>
      )}
      <input
        name={props?.name}
        type={props?.type ?? "text"}
        disabled={props.disabled}
        min="1940-01-01"
        onChange={handleChange}
        defaultValue={props?.defaultValue}
        value={value}
        placeholder={props?.placeholder ?? props?.label}
        className={`
        min-w-[200px]
        rounded-md
        border border-border
        bg-background
        px-2 py-2 pl-4
        text-sm
        text-foreground
        outline-none
        ring-ring
        focus:ring-1
        disabled:cursor-not-allowed
        disabled:opacity-70
        placeholder:bg-muted
        ${props?.className}
      `}
      />
    </div>
  );
};
