import { useState } from "react";
import type { AddressData } from "./AddressEditModal";
import TalentProfileSection, { ProfileField } from "./TalentProfileSection";
import { Home, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Badge } from "../../ui/badge";
import TalentAddressEditModal from "./AddressEditModal";
import {
  TalentPersonalEditModal,
  type PersonalData,
} from "./PersonalEditModal";

const TalentProfileLayout = () => {
  const [personalData, setPersonalData] = useState<PersonalData>({
    fullLegalName: "John Doe",
    firstMiddleNames: "John",
    lastNameSurnames: "Doe",
    preferredName: "John",
    pronouns: "He/Him",
    sex: "Male",
    genderIdentity: "Male",
    nationality: "India",
    birthdate: "1983-02-28",
    mobileNumber: "+12312oi3u5",
  });

  const [addressData, setAddressData] = useState<AddressData>({
    country: "India",
    address: "Street 1",
    addressLine2: "Near Casino",
    city: "Vadakara",
    state: "Kerala",
    postalCode: "03404",
  });

  const [isPersonalModalOpen, setIsPersonalModalOpen] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  const handlePersonalSave = (data: PersonalData) => {
    setPersonalData(data);
  };

  const handleAddressSave = (data: AddressData) => {
    setAddressData(data);
  };

  return (
    <div className="text-foreground">
      <div className="mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Profile sections */}
          <div className="lg:col-span-2 space-y-6">
            <TalentProfileSection
              title="Personal"
              icon={<User className="h-5 w-5" />}
              onEdit={() => setIsPersonalModalOpen(true)}
            >
              <ProfileField
                label="Full legal name"
                value={personalData.fullLegalName}
              />
              <ProfileField
                label="First and middle names"
                value={personalData.firstMiddleNames}
              />
              <ProfileField
                label="Last name or surnames"
                value={personalData.lastNameSurnames}
              />
              <ProfileField
                label="Preferred name"
                value={personalData.preferredName}
              />
              <ProfileField label="Pronouns" value={personalData.pronouns} />
              <ProfileField
                label="What is your sex?"
                value={personalData.sex}
              />
              <ProfileField
                label="Gender identity"
                value={personalData.genderIdentity}
              />
              <ProfileField
                label="Nationality"
                value={personalData.nationality}
              />
              <ProfileField label="Birthdate" value={personalData.birthdate} />
              <ProfileField
                label="Mobile number"
                value={personalData.mobileNumber}
              />
            </TalentProfileSection>

            <TalentProfileSection
              title="Home address"
              icon={<Home className="h-5 w-5" />}
              onEdit={() => setIsAddressModalOpen(true)}
            >
              <ProfileField label="Country" value={addressData.country} />
              <ProfileField label="Address" value={addressData.address} />
              <ProfileField
                label="Address line 2"
                value={addressData.addressLine2 || "-"}
              />
              <ProfileField label="City" value={addressData.city} />
              <ProfileField label="State" value={addressData.state} />
              <ProfileField
                label="Postal code"
                value={addressData.postalCode}
              />
            </TalentProfileSection>
          </div>

          {/* Right column - Profile card */}
          <div className="lg:col-span-1">
            <div className="border bg-card border-border rounded-lg p-6 sticky top-8">
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="https://github.com/rafipopz98.png" />
                  <AvatarFallback>MR</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    {personalData.preferredName}
                  </h2>
                  <p className="text-muted-foreground">Developer</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">
                    Contract
                  </h3>
                  <Badge variant="secondary" className="text-muted-foreground">
                    Contractor
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <TalentPersonalEditModal
        isOpen={isPersonalModalOpen}
        onClose={() => setIsPersonalModalOpen(false)}
        onSave={handlePersonalSave}
        initialData={personalData}
      />

      <TalentAddressEditModal
        isOpen={isAddressModalOpen}
        onClose={() => setIsAddressModalOpen(false)}
        onSave={handleAddressSave}
        initialData={addressData}
      />
    </div>
  );
};

export default TalentProfileLayout;
