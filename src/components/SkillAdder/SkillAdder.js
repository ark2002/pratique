import { useState } from "react";
import "./SkillAdder.css";
let count = 0;

const SkillAdder = () => {
  const [skills, setSkills] = useState([
    { id: 12132, skill: "css" },
    { id: 372732, skill: "html" }
  ]);
  const [currentSkill, setCurrentSkill] = useState("");
  const [errorClass, setErrorClass] = useState("");

  const submitSkill = (e) => {
    e.preventDefault();
    if (skills.find((item) => item.skill === currentSkill) || !currentSkill) {
      setErrorClass("error");
      setTimeout(() => setErrorClass(""), 500);
      setCurrentSkill("");
    } else {
      count = count + 1;
      setSkills([...skills, { id: count, skill: currentSkill }]);
      setCurrentSkill("");
    }
  };

  const removeSkill = (selectedSkill) => {
    setSkills(skills.filter((item) => item.skill !== selectedSkill));
  };

  return (
    <div className="skilladder">
      <h3>Add your skills</h3>
      <h6>
        Type your skill in the textbox given below and enter to submit. You can
        remove a skill by clicking on the specific skill tab{" "}
      </h6>
      <form>
        <input
          className={`skill__input ${errorClass}`}
          onChange={(e) => setCurrentSkill(e.target.value)}
          value={currentSkill}
        />
        <button
          className="skill__submit"
          onClick={(e) => submitSkill(e)}
          type="submit"
        >
          Submit
        </button>
      </form>
      <div className="skill__display">
        {skills.map((item) => (
          <span
            key={item.id}
            className="skill__chip"
            onClick={() => removeSkill(item.skill)}
          >
            {item.skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export { SkillAdder };
