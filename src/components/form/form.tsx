import { useState } from "react";

import Header from "../title/header.tsx";
import Contact from "../contactInfo/contact.tsx";
import Education from "../educationalExperience/education.tsx";
// import Profession from "../professionalExperience/profession.tsx";
import Finish from "../finish/finish.tsx";
import "../../styles/form.css";
import type { EducationData } from "../educationalExperience/education";
export default function Form() {
  const [professions, setProfessions] = useState([]);
  const [education, setEducations] = useState<EducationData[]>([
    { school: "", study: "", from: "", to: "" },
  ]);

  return (
    <>
      <form className="container-form">
        <Header />
        <Contact />
        {education.map((edu, index) => (
          <Education
            key={index}
            index={index}
            education={edu}
            setEducations={setEducations}
          />
        ))}
        {/* <Education education={education} setEducations={setEducations} /> */}
        {/* <Profession professions={professions} setProfessions={setProfessions} /> */}
        <Finish education={education} />
      </form>
    </>
  );
}
