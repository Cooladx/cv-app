import "../../styles/profession.css";
import Separator from "../line/separator.tsx";

export type professionData = {
  company: string;
  title: string;
  responsiblities: string;
  from: string;
  to: string;
};

export default function Profession({
  
  profession,
  setProfessions,
  index,
}: {
  profession: professionData;
  setProfessions: React.Dispatch<React.SetStateAction<professionData[]>>;
  index: number;
}) {
  function addProfession() {
    setProfessions((prev) => {
      console.log(prev);
      return [
        ...prev,
        { company: "", title: "", responsiblities: "", from: "", to: "" },
      ];
    });
  }

  function removeProfession() {
    // Set education array to remove element and make it a new array.
    setProfessions((prev) => {
      console.log(prev);
      return prev.filter((item, i) => i !== index); // Keep everyother item except index that is deleted in array
    });
  }

  return (
    <>
      <section className="profession-info">
        <label htmlFor="name">
          Enter your company name:
          <input
            onChange={(e) =>
              setProfessions((prev) =>
                prev.map((item, i) => {
                  if (i === index) {
                    // Only to CHANGE 1 property: school
                    // If this is the index in the array of education, take changed value in the object and change.
                    return { ...item, company: e.target.value };
                  } else {
                    // If not returned, just leave as is for map has to return something
                    return item;
                  }
                }),
              )
            }
            value={profession.company}
            type="text"
            className="profession-input"
            placeholder="Company"
          />
        </label>

        <label htmlFor="email">
          Enter your position title:
          <input
            onChange={(e) =>
              setProfessions((prev) =>
                prev.map((item, i) => {
                  if (i === index) {
                    // Only to CHANGE 1 property: school
                    // If this is the index in the array of education, take changed value in the object and change.
                    return { ...item, title: e.target.value };
                  } else {
                    // If not returned, just leave as is for map has to return something
                    return item;
                  }
                }),
              )
            }
            value={profession.title}
            type="text"
            className="profession-input"
            placeholder="Your position"
          />
        </label>

        <label htmlFor="email">Enter your responsibilities:</label>
        <textarea
          onChange={(e) =>
            setProfessions((prev) =>
              prev.map((item, i) => {
                if (i === index) {
                  // Only to CHANGE 1 property: school
                  // If this is the index in the array of profession, take changed value in the object and change.
                  return { ...item, responsiblities: e.target.value };
                } else {
                  // If not returned, just leave as is for map has to return something
                  return item;
                }
              }),
            )
          }
          value={profession.responsiblities}
          name="postContent"
          rows={4}
          cols={40}
          placeholder="your responsiblities"
        />
        <label htmlFor="email">
          Enter the date from and until when you worked at that company:
          <br />
          <label>From</label>
          <input
            onChange={(e) =>
              setProfessions((prev) =>
                prev.map((item, i) => {
                  if (i === index) {
                    // Only to CHANGE 1 property: school
                    // If this is the index in the array of profession, take changed value in the object and change.
                    return { ...item, from: e.target.value };
                  } else {
                    // If not returned, just leave as is for map has to return something
                    return item;
                  }
                }),
              )
            }
            value={profession.from}
            type="date"
            className="profession-input"
          />
          <br />
          <label>To</label>
          <input
            onChange={(e) =>
              setProfessions((prev) =>
                prev.map((item, i) => {
                  if (i === index) {
                    // Only to CHANGE 1 property: school
                    // If this is the index in the array of profession, take changed value in the object and change.
                    return { ...item, to: e.target.value };
                  } else {
                    // If not returned, just leave as is for map has to return something
                    return item;
                  }
                }),
              )
            }
            value={profession.to}
            type="date"
            className="profession-input"
          />
        </label>

        {/* Conditional to render add button for Profession component */}
        {index === 0 && (
          <button type="button" onClick={addProfession}>
            Add
          </button>
        )}

        {/* Conditional to render remove button for Profession component */}
        {index > 0 && (
          <button type="button" onClick={removeProfession}>
            Remove
          </button>
        )}
        <Separator />
      </section>
    </>
  );
}
