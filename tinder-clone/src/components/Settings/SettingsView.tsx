import Settings from "./Settings";
import NavLinks from "../NavLinks/NavLinks";
import type { User } from "../../services/api";
import ExtentSettings from "../ExtentendSettings/ExtentSettings";

interface SettingsViewProps {
  person: User;
}
function SettingsView({ person }: SettingsViewProps) {
  return (
    <div>
      <Settings person={person} />

      <div>
        <NavLinks />
        <ExtentSettings person={person} />
      </div>
    </div>
  );
}

export default SettingsView;
