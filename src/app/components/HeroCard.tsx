const downloadButtonStyle: React.CSSProperties = {
  backgroundColor: "#e76e54", // Button color similar to the image
  color: "white",
  padding: "10px 20px",
  textTransform: "uppercase",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
  marginTop: "15px", // Add some space above the button
  // Remove positioning styles that were previously used to place the button on the side
};

const nameStyle: React.CSSProperties = {
  margin: "0",
  fontSize: "3rem", // Large font size for the name
  fontWeight: "bold",
  letterSpacing: "1px", // Spacing between letters
};

const roleStyle: React.CSSProperties = {
  margin: "0",
  fontSize: "1.5rem", // Smaller font size for the role
  color: "#555", // Slightly lighter text color for the role
  fontWeight: "normal",
};

const mainIntroStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%", // Adjust height as needed
  color: "#333", // Dark text color
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', // Font similar to the image
  padding: "20px", // Padding around the content
  position: "relative", // For positioning the download button
};

const HeroCard: React.FC = () => {
  return (
    <div style={mainIntroStyle}>
      <h1 style={nameStyle}>YUDHISHTHRA SUGUMARAN</h1>
      <h2 style={roleStyle}>developer + pentester</h2>
      <p style={downloadButtonStyle}>DOWNLOAD CV</p>{" "}
    </div>
  );
};

export default HeroCard;
