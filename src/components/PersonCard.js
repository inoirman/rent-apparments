const PersonCard = ({ person }) => {
  return (
    <div className="col s4">
      <div className="card">
        <div className="card-image">
          <img src={person.photo} alt={person.altName} />
          <span className="card-title">{person.name}</span>
        </div>
        <div className="card-content">
          <p>{person.descr}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
