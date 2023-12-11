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
  fontSize: "1.8rem",
  fontWeight: "bold",
  color: "#003366",
  textAlign: "left", // Align text to the left
  paddingTop: "0.5rem", // Adjust this as needed to control space below the title
};

const contactFormSubtitleStyle: React.CSSProperties = {
  fontSize: "1.45rem",
  color: "#333",
  textAlign: "left", // Align text to the left
  marginTop: "1.5rem", // Add margin to the top of the subtitle
};

const formStyle: React.CSSProperties = {
  width: "100%",
  paddingTop: "3rem",
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
  const [loading, setLoading] = useState(false);
  const [messageInfo, setMessageInfo] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setMessageInfo("Message Sending...");

    // Simulate sending message
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
    setMessageInfo(
      "Message sent to 0x8dC75164dab325Dda81022cE7ee7a2B23a207C04, powered by Blockscan Chat"
    );
  };

  return (
    <>
      <div style={contactFormContainerStyle}>
        <h2 style={contactFormTitleStyle}>Let's talk!</h2>
        <p style={contactFormSubtitleStyle}>
          I’m interested in freelance opportunities - especially projects that
          create real-world impact. However, if you’d like to just say hello,
          don’t hesitate to drop your message!
        </p>{" "}
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
              placeholder=""
            />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="email">
              How I can reach out to you?
            </label>
            <input
              style={inputStyle}
              type="email"
              id="email"
              name="email"
              placeholder=""
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
              placeholder=""
              rows={4}
            ></textarea>
          </div>
          <div style={buttonContainerStyle}>
            <button style={buttonStyle} type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send message"}
            </button>
            {loading && (
              <div
                style={{
                  width: "100%",
                  backgroundColor: "#ddd",
                  height: "5px",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "5px",
                    backgroundColor: "#e76e54",
                    animation: "loading 2s infinite",
                  }}
                />
              </div>
            )}
          </div>
        </form>
        {messageInfo && (
          <div
            style={{
              position: "absolute",
              right: "10px",
              bottom: "10px",
              fontSize: "0.8rem",
            }}
          >
            {messageInfo}
          </div>
        )}
      </div>
    </>
  );
};

export default ContactFormCard;
