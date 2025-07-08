import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import { Button } from "../../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Alert, AlertDescription } from "../../ui/alert";
import { Info } from "lucide-react";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

export interface AddressData {
  country: string;
  address: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
}

interface AddressEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: AddressData) => void;
  initialData: AddressData;
}

const TalentAddressEditModal = ({
  isOpen,
  onClose,
  onSave,
  initialData,
}: AddressEditModalProps) => {
  const [formData, setFormData] = useState<AddressData>(initialData);

  const handleChange = (field: keyof AddressData, value: string) => {
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
      <DialogContent className="border border-border text-foreground max-w-2xl">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <DialogTitle className="text-xl font-semibold">
            Home address
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Alert className="bg-background/20 border-border">
            <Info className="h-4 w-4 text-muted-foreground" />
            <AlertDescription className="text-muted-foreground">
              Your country of residence is expected to be India. If you're
              planning to relocate, please reach out to{" "}
              <a
                href="mailto:help@nilavu.com"
                className="text-muted-foreground"
              >
                help@nilavu.com ↗
              </a>
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <div>
              <Label
                htmlFor="address"
                className="text-sm text-muted-foreground"
              >
                Address
              </Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleChange("address", e.target.value)}
                className="border-border text-foreground mt-1"
                placeholder="Enter your address"
              />
            </div>

            <div>
              <Label
                htmlFor="addressLine2"
                className="text-sm text-muted-foreground"
              >
                Address line 2
              </Label>
              <Input
                id="addressLine2"
                value={formData.addressLine2 || ""}
                onChange={(e) => handleChange("addressLine2", e.target.value)}
                className="border-border text-foreground mt-1"
                placeholder="Enter address line 2"
              />
              <p className="text-muted-foreground text-sm mt-1">
                (Optional) For example, apartment, block, or building number.
              </p>
            </div>

            <div>
              <Label htmlFor="city" className="text-sm text-muted-foreground">
                City
              </Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => handleChange("city", e.target.value)}
                className="border-border text-foreground mt-1"
                placeholder="Enter your city"
              />
            </div>

            <div>
              <Label htmlFor="state" className="text-sm text-muted-foreground">
                State
              </Label>
              <Select
                value={formData.state}
                onValueChange={(value) => handleChange("state", value)}
              >
                <SelectTrigger className="border-border text-foreground mt-1">
                  <SelectValue placeholder="Select address state" />
                </SelectTrigger>
                <SelectContent className="border-border">
                  <SelectItem value="Andhra Pradesh">Andhra Pradesh</SelectItem>
                  <SelectItem value="Arunachal Pradesh">
                    Arunachal Pradesh
                  </SelectItem>
                  <SelectItem value="Assam">Assam</SelectItem>
                  <SelectItem value="Bihar">Bihar</SelectItem>
                  <SelectItem value="Chhattisgarh">Chhattisgarh</SelectItem>
                  <SelectItem value="Goa">Goa</SelectItem>
                  <SelectItem value="Gujarat">Gujarat</SelectItem>
                  <SelectItem value="Haryana">Haryana</SelectItem>
                  <SelectItem value="Himachal Pradesh">
                    Himachal Pradesh
                  </SelectItem>
                  <SelectItem value="Jharkhand">Jharkhand</SelectItem>
                  <SelectItem value="Karnataka">Karnataka</SelectItem>
                  <SelectItem value="Kerala">Kerala</SelectItem>
                  <SelectItem value="Madhya Pradesh">Madhya Pradesh</SelectItem>
                  <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                  <SelectItem value="Manipur">Manipur</SelectItem>
                  <SelectItem value="Meghalaya">Meghalaya</SelectItem>
                  <SelectItem value="Mizoram">Mizoram</SelectItem>
                  <SelectItem value="Nagaland">Nagaland</SelectItem>
                  <SelectItem value="Odisha">Odisha</SelectItem>
                  <SelectItem value="Punjab">Punjab</SelectItem>
                  <SelectItem value="Rajasthan">Rajasthan</SelectItem>
                  <SelectItem value="Sikkim">Sikkim</SelectItem>
                  <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                  <SelectItem value="Telangana">Telangana</SelectItem>
                  <SelectItem value="Tripura">Tripura</SelectItem>
                  <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
                  <SelectItem value="Uttarakhand">Uttarakhand</SelectItem>
                  <SelectItem value="West Bengal">West Bengal</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-muted-foreground text-sm mt-1">
                Select address state
              </p>
            </div>

            <div>
              <Label
                htmlFor="postalCode"
                className="text-sm text-muted-foreground"
              >
                Postal code
              </Label>
              <Input
                id="postalCode"
                value={formData.postalCode}
                onChange={(e) => handleChange("postalCode", e.target.value)}
                className="border-border text-foreground mt-1"
                placeholder="Enter postal code"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="bg-transparent border-gray-600 text-muted-foreground hover:bg-gray-800 hover:text-foreground"
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
};

export default TalentAddressEditModal;
