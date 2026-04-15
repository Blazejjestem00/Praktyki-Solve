import "./ProfileName.css";

interface Person {
  id: number;
  name: string;
  age: number;
}

interface ProfileNameProps {
  person: Person;
}
function ProfileName({ person }: ProfileNameProps) {
  return (
    <div key={person.id}>
      <div className="profile-title">
        <span className="profile-name">{person.name}</span>
        <span>, </span>
        <span className="age">{person.age}</span>
      </div>
    </div>
  );
}

export default ProfileName;
