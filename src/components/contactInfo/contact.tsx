import "../../styles/contact.css";
import Separator from "../line/separator.tsx";

export default function Contact() {
  return (
    <>
      <section className="contact-info">
        <label htmlFor="name">Enter your name:</label>
        <input type="text" className="contact-input" placeholder="John Smith" />
        <label htmlFor="email">Enter your email:</label>
        <input
          type="text"
          className="contact-input"
          placeholder="email@gmail.com"
        />
        <label htmlFor="email">Enter your phone number:</label>
        <input
          type="text"
          className="contact-input"
          placeholder="xxx-xx-xxxx"
        />

        <Separator />
      </section>
    </>
  );
}
