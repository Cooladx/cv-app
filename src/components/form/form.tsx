
import Header from "../title/header.tsx";
import Contact from "../contactInfo/contact.tsx";
import Education from "../educationalExperience/education.tsx";
// import Profession from "../professionalExperience/profession.tsx";
import Finish from "../finish/finish.tsx";
import "../../styles/form.css";
import type { EducationData } from "../educationalExperience/education";
import type { ContactData } from "../contactInfo/contact.tsx";

export default function Form({
  education,
  setEducations,
  contact,
  setContact,
  setFormVisability,
}: {
  education: EducationData[];
  setEducations: React.Dispatch<React.SetStateAction<EducationData[]>>;
  contact: ContactData;
  setContact: React.Dispatch<React.SetStateAction<ContactData>>;
  setFormVisability: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  // const [professions, setProfessions] = useState([]);


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
        {/* <Education education={education} setEducations={setEducations} /> */}
        {/* <Profession professions={professions} setProfessions={setProfessions} /> */}
        <Finish
          education={education}
          contact={contact}
          setFormVisability={setFormVisability}
        />
      </form>
    </>
  );
}
