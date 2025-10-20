import type { ContactData } from "../contactInfo/contact";

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
