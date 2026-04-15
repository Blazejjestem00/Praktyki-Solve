function Bio({ person }: any) {
  return (
    <div className="bio">
      <p>Bio:</p>
      <p>{person.caption}</p>
    </div>
  );
}

export default Bio;
