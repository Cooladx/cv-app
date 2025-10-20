
// import components
import Header from "../title/header.tsx";
import Contact from "../contactInfo/contact.tsx";
import Education from "../educationalExperience/education.tsx";
import Profession from "../professionalExperience/profession.tsx";
import Finish from "../finish/finish.tsx";

import "./form.css";

// import types
import type { EducationData } from "../educationalExperience/education";
import type { ContactData } from "../contactInfo/contact.tsx";
import type { professionData } from "../professionalExperience/profession.tsx";

// Component to build out the form to render the Education, Contact, and profession section.
//  As well as the finish button.
export default function Form({
  education,
  setEducations,
  profession,
  setProfessions,
  contact,
  setContact,
  setFormVisability,
}: {
  education: EducationData[];
  setEducations: React.Dispatch<React.SetStateAction<EducationData[]>>;
  profession: professionData[];
  setProfessions: React.Dispatch<React.SetStateAction<professionData[]>>;
  contact: ContactData;
  setContact: React.Dispatch<React.SetStateAction<ContactData>>;
  setFormVisability: React.Dispatch<React.SetStateAction<boolean>>;
}) {

  return (
    <>
      <form className="container-form">
        <Header />
        <Contact contact={contact} setContact={setContact} />
        {education.map((edu, index) => (
          <Education
            key={index}
            index={index}
            education={edu}
            setEducations={setEducations}
          />
        ))}

        {profession.map((edu, index) => (
          <Profession
            key={index}
            index={index}
            profession={edu}
            setProfessions={setProfessions}
          />
        ))}

        <Finish
          setFormVisability={setFormVisability}
        />
      </form>
    </>
  );
}
