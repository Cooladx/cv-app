import { useState } from "react";
import "./App.css";

import type { EducationData } from "./components/educationalExperience/education.tsx";
import type { ContactData } from "./components/contactInfo/contact.tsx";
import type { professionData } from "./components/professionalExperience/profession.tsx";
// Component imports
import Form from "./components/form/form.tsx";
import Editbutton from "./components/finish/edit.tsx";
import Submission from "./components/form/submission.tsx";

function App() {

    const [contact, setContact] = useState<ContactData>({
    name: "",
    email: "",
    phone: "",
  });
  
  const [education, setEducations] = useState<EducationData[]>([
    { school: "", study: "", from: "", to: "" },
  ]);

  const [profession, setProfessions] = useState<professionData[]>([
    { company: "", title: "", responsiblities: "", from: "", to: "" },
  ]);



  // Can only be true or false. True is by default and shows form component.
  // False will show the output of whatever the user entered in the form with an edit button.
  const [formVisability, setFormVisability] = useState<boolean>(true);

  return (
    <>
      {/* Conditional render to show the form. Starting true by default. */}
      {formVisability && (
        /* A form to structure 3 sections for a user. 
          One for general info, educational experience, and practical experience.  
      */
        <Form
          contact={contact}
          setContact={setContact}
          education={education}
          setEducations={setEducations}
          profession={profession}
          setProfessions={setProfessions}
          setFormVisability={setFormVisability}
        />
      )}
      {/* Conditional render to show form again when clicking on edit button to edit form. */}
      {!formVisability && (
        <>
          <Submission contact={contact} education={education} />
          <Editbutton setFormVisability={setFormVisability} contact={contact} />
        </>
      )}
    </>
  );
}

export default App;
