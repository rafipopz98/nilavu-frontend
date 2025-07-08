import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Label } from "../../ui/label";

export interface PersonalData {
  fullLegalName: string;
  firstMiddleNames: string;
  lastNameSurnames: string;
  preferredName: string;
  pronouns: string;
  sex: string;
  genderIdentity: string;
  nationality: string;
  birthdate: string;
  mobileNumber: string;
}

interface TalentPersonalEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: PersonalData) => void;
  initialData: PersonalData;
}

export function TalentPersonalEditModal({
  isOpen,
  onClose,
  onSave,
  initialData,
}: TalentPersonalEditModalProps) {
  const [formData, setFormData] = useState<PersonalData>(initialData);

  const handleChange = (field: keyof PersonalData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="border-border text-foreground max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <DialogTitle className="text-xl font-semibold">Personal</DialogTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-muted-foreground rounded-full p-2"
          ></Button>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-4">
            <InputBlock
              label="Full legal name"
              id="fullLegalName"
              value={formData.fullLegalName}
              onChange={(val) => handleChange("fullLegalName", val)}
            />
            <InputBlock
              label="First and middle names"
              id="firstMiddleNames"
              value={formData.firstMiddleNames}
              onChange={(val) => handleChange("firstMiddleNames", val)}
            />
            <InputBlock
              label="Last name or surnames"
              id="lastNameSurnames"
              value={formData.lastNameSurnames}
              onChange={(val) => handleChange("lastNameSurnames", val)}
            />
            <InputBlock
              label="Preferred name"
              id="preferredName"
              value={formData.preferredName}
              onChange={(val) => handleChange("preferredName", val)}
            />

            <SelectBlock
              label="Pronouns"
              value={formData.pronouns}
              options={["He/Him", "She/Her", "They/Them", "Other"]}
              onChange={(val) => handleChange("pronouns", val)}
            />
            <SelectBlock
              label="What is your sex?"
              value={formData.sex}
              options={["Male", "Female", "Other"]}
              onChange={(val) => handleChange("sex", val)}
            />
            <SelectBlock
              label="Gender identity"
              value={formData.genderIdentity}
              options={["Male", "Female", "Non-binary", "Other"]}
              onChange={(val) => handleChange("genderIdentity", val)}
            />
            <InputBlock
              label="Nationality"
              id="nationality"
              value={formData.nationality}
              onChange={(val) => handleChange("nationality", val)}
            />
            <InputBlock
              label="Birthdate"
              id="birthdate"
              type="date"
              value={formData.birthdate}
              onChange={(val) => handleChange("birthdate", val)}
            />
            <InputBlock
              label="Mobile number"
              id="mobileNumber"
              value={formData.mobileNumber}
              onChange={(val) => handleChange("mobileNumber", val)}
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="bg-transparent border-border text-muted-foreground"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-secondary"
            >
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function InputBlock({
  label,
  id,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  id: string;
  value: string;
  onChange: (val: string) => void;
  type?: string;
}) {
  return (
    <div>
      <Label htmlFor={id} className="text-sm text-muted-foreground">
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-background border-border text-foreground mt-1"
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </div>
  );
}

function SelectBlock({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (val: string) => void;
}) {
  return (
    <div>
      <Label className="text-sm text-muted-foreground">{label}</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="bg-background border-border text-foreground mt-1">
          <SelectValue placeholder={`Select ${label.toLowerCase()}`} />
        </SelectTrigger>
        <SelectContent className="bg-background border-border">
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
