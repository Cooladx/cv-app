import type { ContactData } from "../contactInfo/contact";

// Button component to be able to take you back to the form to let you edit your input boxes.
export default function Editbutton({
  contact,
  setFormVisability,
}: {
  contact: ContactData;
  setFormVisability: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  function handleClick() {
    setFormVisability(true);
    console.log(contact);
  }

  return (
    <>
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </>
  );
}
