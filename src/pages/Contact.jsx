import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    setSuccess("Message Sent Successfully!");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-page">
      <section className="page-header">
        <h1>Contact Us</h1>
        <p>Have a question? Send us a message.</p>
      </section>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <label>Message</label>
          <textarea
            placeholder="Enter your message"
            rows="5"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>

          <button type="submit" className="submit-btn">
            Send Message
          </button>

          {success && <p className="success-message">{success}</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact;