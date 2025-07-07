import { useState } from "react";
import Dropdown from "../basic/Dropdown";
import { JOB_OFFER_STATUS_TYPE } from "../../lib/constants";
import { objectFind } from "../../lib/utils";

type FilterSidebarProps = {
  onSubmit?: any;
  defaultData?: any;
  onClose?: any;
  type?: any;
};

const JobOffersFilter = ({
  onSubmit,
  defaultData,
  onClose,
}: FilterSidebarProps) => {
  const [reset, setReset] = useState(Date.now());
  const [formData, setFormData] = useState(defaultData);
  const handleChange = (val: any, name: string) => {
    const newObj = { ...formData };
    newObj[name] = val;
    setFormData(newObj);
  };

  const applied_status_type_find = objectFind(
    JOB_OFFER_STATUS_TYPE,
    "value",
    formData?.["job_offer_status"]
  );

  const handleSearch = () => {
    onSubmit(formData);
    onClose?.();
  };

  const handleClear = () => {
    setFormData({});
    setReset(Date.now());
    onSubmit({});
  };
  return (
    <div key={reset} className="w-full md:w-full lg:w-[20rem] p-4">
      <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5">
        <div className="flex flex-col gap-4">
          <Dropdown
            selectedOption={applied_status_type_find?.value}
            placeholder="Select Status"
            label="Status"
            options={JOB_OFFER_STATUS_TYPE}
            onChange={(val) => handleChange(val, "job_offer_status")}
          />
        </div>
      </div>
      <div className="flex justify-between gap-x-5 items-center mt-8 px-1">
        <button
          onClick={handleClear}
          className="font-normal text-sm text-vs-blue px-6 py-2 cursor-pointer rounded-full border border-border hover:bg-muted transition-all duration-300"
        >
          Reset
        </button>
        <button
          onClick={handleSearch}
          className="font-normal cursor-pointer text-sm text-foreground px-6 py-2 rounded-full border border-vs-blue hover:bg-muted transition-all duration-300"
        >
          Apply filters
        </button>
      </div>
    </div>
  );
};

export default JobOffersFilter;
