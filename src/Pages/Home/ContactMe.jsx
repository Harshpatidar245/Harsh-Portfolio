import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"
export default function ContactMe() {

  const[firstname, SetFirstname] = useState();
  const[lastname, SetLastname] = useState();
  const[email, SetEmail] = useState();
  const[number, SetNumber] = useState();
  const[option, SetOption] = useState();
  const[message, SetMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', {
        firstname,
        lastname,
        email,
        number,
        option,
        message
      })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }
  
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit. */}
        </p>
      </div>
      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              onChange={(e) => SetFirstname(e.target.value)}
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              onChange={(e) => SetLastname(e.target.value)}

              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              onChange={(e) => SetEmail(e.target.value)}

              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              onChange={(e) => SetNumber(e.target.value)}
              required
            />
          </label>
        </div>
        <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select id="choose-topic" className="contact--input text-md" onChange={(e) => SetOption(e.target.value)}>
            <option>Select One...</option>
            <option>Project related</option>
            <option>Job related</option>
            <option>Interview</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
            onChange={(e) => SetMessage(e.target.value)}

          />
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn" type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}
