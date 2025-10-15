import "../../styles/finish.css";
import type { EducationData } from "../educationalExperience/education";

export default function Finish({ education }: { education: EducationData[] }) {
  function handleClick() {
    console.log(education);
    document.body.textContent = ""
    document.body.textContent = education[0].study
  }

  return (
    <>
      <section className="finish-container">
        <button type="button" onClick={handleClick}>
          Submit
        </button>
        <button type="button">Edit</button>
      </section>
    </>
  );
}
