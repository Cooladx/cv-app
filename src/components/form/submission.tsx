import "./submission.css";

// import types.
import type { ContactData } from "../contactInfo/contact";
import type { EducationData } from "../educationalExperience/education";
import type { professionData } from "../professionalExperience/profession";

import Separator from "../line/separator";


// Component to render the submission page. Will contain everything the user has entered on the form.
export default function Submission({
  contact,
  education,
  profession
}: {
  contact: ContactData;
  education: EducationData[];
  profession: professionData[];
}) {
  return (
    <>
      <div className="general-info">
        <h2 className="summary">Preview & Summary</h2>
        <ContactInfo contact={contact} />
        <Separator height={5} width={1600}/>
        <EducationInfo education={education} />
          <Separator height={5} width={1600}/>
        <ProfessionInfo profession={profession}/>
          <Separator height={5} width={1600}/>
       
      </div>
    </>
  );
}

// Component to build the contact box from the form page.
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
          <span className="CV-identifer-item">Phone Number: </span>
          {contact.phone}
        </div>
      </div>
    </>
  );
}
// Component to build the Education box from the form page.
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
              <span className="CV-identifer-item">Study: </span>
              {edu.study}
            </div>
            <div className="dates">
              <span className="CV-identifer-item">Date: </span>
              {edu.from} — {edu.to || "—"}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// Component to build the Profession box from the form page.
function ProfessionInfo({ profession }: { profession: professionData[] }) {
  return (
    <>
      <div className="education-box">
        <h2>Profession Info</h2>
        {profession.map((edu, i) => (
          <div key={i} className="education-item">
            <div className="company">
              <span className="CV-identifer-item">Company: </span> {edu.company}
            </div>
            <div className="title">
              <span className="CV-identifer-item">Title: </span>
              {edu.title}
            </div>
             <div className="responsiblities">
              <span className="CV-identifer-item">Responsiblities: </span>
              {edu.responsiblities}
            </div>
            <div className="dates">
              <span className="CV-identifer-item">Date: </span>
              {edu.from} — {edu.to || "—"}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

