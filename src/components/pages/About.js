import PersonCard from "../PersonCard";

const About = () => {
  const persons = [
    {
      id: 1,
      name: "Vasya",
      photo: "https://picsum.photos/id/237/200",
      altName: "Photo Here",
      descr:
        "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    },
    {
      id: 2,
      name: "Masya",
      photo: "https://picsum.photos/id/236/200",
      altName: "Photo Here",
      descr:
        "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    },
    {
      id: 3,
      name: "Kusya",
      photo: "https://picsum.photos/id/235/200",
      altName: "Photo Here",
      descr:
        "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    },
  ];

  const personsRender = () => {
    return persons.map((item) => <PersonCard person={item} key={item.id} />);
  };

  return (
    <div className="container">
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, illum
        esse quas, ut optio hic cum atque facilis vitae est molestiae
        accusantium tempore natus dolorem officiis molestias iusto minima error
        aperiam! Eaque ducimus illo eos. Voluptates magni quae quidem maiores id
        sapiente ab, impedit modi et! Dolore mollitia quaerat quo.
      </p>
      <h3>Our Persons</h3>
      <div className="row">{personsRender()}</div>
    </div>
  );
};

export default About;
