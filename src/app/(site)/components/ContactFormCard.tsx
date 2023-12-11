import React, { useState } from "react";

const contactFormContainerStyle: React.CSSProperties = {
  backgroundColor: "#ffffff",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%", // Using the full width
  maxWidth: "none", // Removing max-width restriction
  boxSizing: "border-box",
};

const contactFormTitleStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "#003366",
  textAlign: "left", // Align text to the left
  marginBottom: "0.5rem", // Adjust this as needed to control space below the title
};

const contactFormSubtitleStyle: React.CSSProperties = {
  fontSize: "1.4rem",
  color: "#333",
  textAlign: "left", // Align text to the left
  marginBottom: "1.6rem", // Adjust this as needed to control space below the title
};

const formStyle: React.CSSProperties = {
  width: "100%",
};

const formGroupStyle: React.CSSProperties = {
  marginBottom: "2rem",
  width: "100%",
  position: "relative",
};

const inputStyle: React.CSSProperties = {
  padding: "1rem",
  width: "100%",
  fontSize: "1rem",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1)",
};

const labelStyle: React.CSSProperties = {
  fontSize: "1rem",
  position: "absolute",
  top: "-0.8rem",
  left: "1rem",
  backgroundColor: "#ffffff",
  padding: "0 0.4rem",
  color: "#003366",
  fontWeight: "bold",
};

const buttonStyle: React.CSSProperties = {
  padding: "1rem 2rem",
  fontSize: "1rem",
  color: "white",
  backgroundColor: "#e76e54",
  borderRadius: "10px",
  cursor: "pointer",
  border: "none",
  marginBottom: "1rem",
};

const buttonContainerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between", // Adjust as needed for your design
};

const ContactFormCard: React.FC = () => {
  const [formStage, setFormStage] = useState(0); // 0 - default, 1 - sending, 2 - awaiting response, 3 - sent
  const targetAddress = "0x07c513df12a4cf8470be5a032c380db6c1c4ae74";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formElements = event.currentTarget
      .elements as typeof event.currentTarget.elements & {
      name: HTMLInputElement;
      contactInfo: HTMLInputElement;
      message: HTMLTextAreaElement;
    };

    const name = formElements.name.value;
    const contactInfo = formElements.contactInfo.value;
    const message = formElements.message.value;

    // Make sure the form is not empty
    if (name === "" || contactInfo === "" || message === "") {
      alert("Please fill in all the fields");
      return;
    }

    setFormStage(1); // Start sending process

    // Simulate the sending process
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Call the backend API to send the message
    const res = await fetch("/api/contactForm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        targetAddress: targetAddress,
        name: name,
        contactInfo: contactInfo,
        message: message,
      }),
    });

    setFormStage(2); // Awaiting response

    // Simulate awaiting response
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setFormStage(3); // Message sent

    // Reset form after a delay
    setTimeout(() => setFormStage(0), 5000);
  };

  const getButtonText = () => {
    switch (formStage) {
      case 1:
        return `Sending message to ${targetAddress}...`;
      case 2:
        return "Awaiting response";
      case 3:
        return `Message sent to ${targetAddress}, I'll reply to you as soon as I can!`;
      default:
        return "Send message";
    }
  };

  return (
    <div style={contactFormContainerStyle}>
      <h2 style={contactFormTitleStyle}>Let's talk!</h2>
      <p style={contactFormSubtitleStyle}>
        I’m interested in freelance opportunities - especially projects that
        create real-world impact. However, if you’d like to just say hello,
        don’t hesitate to drop your message!
      </p>

      <form style={formStyle} onSubmit={handleSubmit}>
        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="name">
            What can I call you?
          </label>
          <input
            style={inputStyle}
            type="text"
            id="name"
            name="name"
            placeholder="Anon"
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="contactInfo">
            How I can reach out to you?
          </label>
          <input
            style={inputStyle}
            type="email"
            id="contactInfo"
            name="contactInfo"
            placeholder="anon@hashmail.dev"
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="message">
            What are you reaching out for?
          </label>
          <textarea
            style={inputStyle}
            id="message"
            name="message"
            placeholder="Work on the next big thing"
            rows={4}
          ></textarea>
        </div>
        <div style={buttonContainerStyle}>
          <button style={buttonStyle} type="submit" disabled={formStage !== 0}>
            {getButtonText()}
          </button>
        </div>
      </form>

      <div
        style={{
          position: "absolute",
          right: "15px",
          bottom: "15px",
          fontSize: "1rem",
        }}
      >
        This feature is powered by{" "}
        <a href="https://chat.blockscan.com/" target="_blank">
          <u>Blockscan Chat.</u>
        </a>
      </div>
    </div>
  );
};

export default ContactFormCard;
