import Settings from "./Settings";
import NavLinks from "../NavLinks/NavLinks";
import type { User } from "../../services/api";
import ExtentSettings from "../ExtentendSettings/ExtentSettings";
import { useState } from "react";
interface SettingsViewProps {
  person: User;
}
function SettingsView({ person }: SettingsViewProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <Settings person={person} />

      <div>
        <NavLinks />
        <ExtentSettings
          person={person}
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
        />
      </div>
    </div>
  );
}

export default SettingsView;
