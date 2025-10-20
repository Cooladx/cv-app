import "./education.css";
import Separator from "../line/separator.tsx";

export type EducationData = {
  school: string;
  study: string;
  from: string;
  to: string;
};


// Component to build the education section on the form. 
// Will also allow user to create more education sections and remove if needed.

export default function Education({
  education,
  setEducations,
  index,
}: {
  education: EducationData;
  setEducations: React.Dispatch<React.SetStateAction<EducationData[]>>;
  index: number;
}) {
  function addEducation() {
    setEducations((prev) => {
      console.log(prev);
      return [...prev, { school: "", study: "", from: "", to: "" }];
    });
  }

  function removeEducation() {
    // Set education array to remove element and make it a new array.
    setEducations((prev) => {
      console.log(prev);
      return prev.filter((item, i) => i !== index); // Keep everyother item except index that is deleted in array
    });
  }

  return (
    <>
      <section className="education-info">
        <label htmlFor="name">Enter your school:</label>
        <input
          onChange={(e) =>
            setEducations((prev) =>
              prev.map((item, i) => {
                if (i === index) {
                  // Only to CHANGE 1 property: school
                  // If this is the index in the array of education, take changed value in the object and change.
                  return { ...item, school: e.target.value };
                } else {
                  // If not returned, just leave as is for map has to return something
                  return item;
                }
              }),
            )
          }
          value={education.school}
          type="text"
          className="education-input"
          placeholder="[placeholder] College"
        />

        <label htmlFor="email">Enter your title of study:</label>
        <input
          onChange={(e) =>
            setEducations((prev) =>
              prev.map((item, i) => {
                if (i === index) {
                  // Only to CHANGE 1 property: study
                  // If this is the index in the array of education, take changed value in the object and change.
                  return { ...item, study: e.target.value };
                } else {
                  // If not returned, just leave as is for map has to return something
                  return item;
                }
              }),
            )
          }
          value={education.study}
          type="text"
          className="education-input"
          placeholder="Degree concentration"
        />

        <label>
          Enter the date from and until when you attended this school:
          <br />
          <label>From</label>
          <input
            onChange={(e) =>
              setEducations((prev) =>
                prev.map((item, i) => {
                  if (i === index) {
                    // Only to CHANGE 1 property: from
                    // If this is the index in the array of education, take changed value in the object and change.
                    return { ...item, from: e.target.value };
                  } else {
                    // If not returned, just leave as is for map has to return something
                    return item;
                  }
                }),
              )
            }
            value={education.from}
            type="date"
            className="profession-input"
          />
          <br />
          <label>To</label>
          <input
            onChange={(e) =>
              setEducations((prev) =>
                prev.map((item, i) => {
                  if (i === index) {
                    // Only to CHANGE 1 property: to
                    // If this is the index in the array of education, take changed value in the object and change.
                    return { ...item, to: e.target.value };
                  } else {
                    // If not returned, just leave as is for map has to return something
                    return item;
                  }
                }),
              )
            }
            value={education.to}
            type="date"
            className="profession-input"
          />
        </label>

        {/* Conditional to render add button for education component */}
        {index === 0 && (
          <button type="button" onClick={addEducation}>
            Add
          </button>
        )}

        {/* Conditional to render remove button for education component */}
        {index > 0 && (
          <button type="button" onClick={removeEducation}>
            Remove
          </button>
        )}

        <Separator width={300}/>
      </section>
    </>
  );
}
