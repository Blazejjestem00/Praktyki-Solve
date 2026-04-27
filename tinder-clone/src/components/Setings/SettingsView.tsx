import Settings from "./Settings";
import NavLinks from "../NavLinks/NavLinks";
import type { User } from "../../services/api";

interface SettingsViewProps {
  person: User;
}
function SettingsView({ person }: SettingsViewProps) {
  return (
    <div>
      <Settings person={person} />

      <div>
        <NavLinks />
      </div>
    </div>
  );
}

export default SettingsView;
