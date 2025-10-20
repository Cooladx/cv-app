import "./finish.css";
import type { ContactData } from "../contactInfo/contact";
import type { EducationData } from "../educationalExperience/education";
import type { professionData } from "../professionalExperience/profession";
// import Editbutton from "./edit";
export default function Finish({
  education,
  profession,
  contact,
  setFormVisability,
}: {
  education: EducationData[];
  profession: professionData[];
  contact: ContactData;
  setFormVisability: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  function handleClick() {
    // console.log(contact);
    // console.log(education);
    console.log(profession);
    setFormVisability(false);
  }

  return (
    <>
      <section className="finish-container">
        <button type="button" onClick={handleClick}>
          Submit
        </button>
      </section>
    </>
  );
}
