import "./finish.css";

// Component to build a button render that will take the data from all the sections on the form.
export default function Finish({
  setFormVisability,
}: {
  setFormVisability: React.Dispatch<React.SetStateAction<boolean>>;
}) {


  function handleClick() {
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
