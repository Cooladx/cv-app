import "./contact.css";
import Separator from "../line/separator.tsx";

export type ContactData = {
  name: string;
  email: string;
  phone: string;
};

export default function Contact({
  contact,
  setContact,
}: {
  contact: ContactData;
  setContact: React.Dispatch<React.SetStateAction<ContactData>>;
}) {
  return (
    <>
      <section className="contact-info">
        <label htmlFor="name">Enter your name:</label>
        <input
          type="text"
          className="contact-input"
          placeholder="John Smith"
          onChange={(e) => {
            setContact((prev) => {
              const copiedObj = Object.assign({}, prev);
              copiedObj.name = e.target.value;
              return copiedObj;
            });
          }}
          value={contact.name}
        />
        <label htmlFor="email">Enter your email:</label>
        <input
          type="text"
          className="contact-input"
          placeholder="email@gmail.com"
          onChange={(e) => {
            setContact((prev) => {
              const copiedObj = Object.assign({}, prev);
              copiedObj.email = e.target.value;
              return copiedObj;
            });
          }}
          value={contact.email}
        />
        <label htmlFor="phone">Enter your phone number:</label>
        <input
          type="text"
          className="contact-input"
          placeholder="xxx-xx-xxxx"
          onChange={(e) => {
            setContact((prev) => {
              const copiedObj = Object.assign({}, prev);
              copiedObj.phone = e.target.value;
              return copiedObj;
            });
            console.log(contact);
          }}
          value={contact.phone}
        />
        <Separator width={400}/>
      </section>
    </>
  );
}
