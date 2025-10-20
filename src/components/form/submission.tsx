import "./style.css";

import type { ContactData } from "../contactInfo/contact";
import type { EducationData } from "../educationalExperience/education";

export default function Submission({
  contact,
  education,
}: {
  contact: ContactData;
  education: EducationData[];
}) {
  return (
    <>
      <div className="general-info">
        <h2 className="summary">Preview & Summary</h2>
        <ContactInfo contact={contact} />
        <EducationInfo education={education} />
        <Downloadbtn />
      </div>
    </>
  );
}

function ContactInfo({ contact }: { contact: ContactData }) {
  return (
    <>
      <div className="contact-box">
        <h2> Contact Info</h2>
        <div className="contact-item">
          <span className="CV-identifer-item">Name: </span>
          {contact.name}
        </div>
        <div className="contact-item">
          <span className="CV-identifer-item">Email:</span> {contact.email}
        </div>
        <div className="contact-item">
          <span className="CV-identifer-item">Phone Number:</span>
          {contact.phone}
        </div>
      </div>
    </>
  );
}

function EducationInfo({ education }: { education: EducationData[] }) {
  return (
    <>
      <div className="education-box">
        <h2>Education Info</h2>
        {education.map((edu, i) => (
          <div key={i} className="education-item">
            <div className="school">
              <span className="CV-identifer-item">School: </span> {edu.school}
            </div>
            <div className="study">
              {" "}
              <span className="CV-identifer-item">Study: </span>
              {edu.study}
            </div>
            <div className="dates">
              {" "}
              <span className="CV-identifer-item">Date: </span>
              {edu.from} — {edu.to || "—"}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function Downloadbtn() {
  return (
    <button
      type="button"
      className="download-btn"
      onClick={() => window.print()}
    >
      Download as PDF
    </button>
  );
}

// function Downloadbtn () {
//     const downloadBtn = document.querySelector(".download-btn")
//     if(downloadBtn)
//     downloadBtn.addEventListener("click", () => {
//         print()
//     })

//     return (
//         <>
//         <button type="button" className=".download-btn">Download as PDF</button>
//         </>
//     )
// }
