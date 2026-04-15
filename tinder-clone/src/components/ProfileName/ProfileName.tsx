import "./ProfileName.css";

function profileName({ person }: any) {
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

export default profileName;
