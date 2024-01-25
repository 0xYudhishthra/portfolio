//AboutMeCard.tsx

const placeholderFramesContainerStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "flex-start", // Align at the bottom
  justifyContent: "space-between",
  width: "100%", // Take up full width to allow space between frames
  paddingBottom: "1.0rem", // Add some space below the frames
};

const placeholderFrameStyle: React.CSSProperties = {
  width: "300px", // Set the desired width for your placeholder
  marginRight: "10px", // Space between the frames
  display: "inline-block", // To line them up in a row
  maxWidth: "100%", // Ensure the width doesn't exceed the container
  height: "auto", // Maintain aspect ratio
};

const whoAmITitleStyle: React.CSSProperties = {
  fontSize: "2.5rem", // Adjust the font size as needed
  fontWeight: "bold",
  color: "#003366", // Adjust the color to match the image
  alignSelf: "flex-start", // Align to the top of the flex container
  paddingBottom: "1.0rem",
  paddingTop: "1.0rem",
};

const whoAmITextStyle: React.CSSProperties = {
  color: "#333",
  fontSize: "1.1rem",
  lineHeight: "1.5",
  marginBottom: "5rem", // Adjust space between text and picture placeholders
};

const whoAmIStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start", // Align to the top of the flex container
  justifyContent: "center",
  height: "100%", // Adjust height as needed
  color: "#333", // Dark text color
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', // Font similar to the image
  padding: "20px", // Padding around the content
  position: "relative", // For positioning the download button
};

const HeroCard: React.FC = () => {
  const getRandomAngle = () => Math.random() * 20 - 10; // Random angle between -10 and 10 degrees

  return (
    <div style={whoAmIStyle}>
      <h2 className="text-2xl md:text-3xl font-bold text-primary">whoami</h2>
      <p className="text-base md:text-lg text-secondary mb-20">
        Yudhishthra Sugumaran is a software engineering student, hackathon
        hacker, and cybersecurity enthusiast with a strong drive to positively
        impact people&apos;s lives. When not coding or hacking, he likes to
        binge-watch shows on Netflix, do activities that soothes the soul and
        mind, and values spending quality time with family and friends.{" "}
        <a href="url-to-full-story" className="underline italic text-right">
          Read his full story here
        </a>
      </p>
      <div style={placeholderFramesContainerStyle}>
        {[1, 2, 3, 4].map((_, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/4 p-2" // Adjust width per breakpoint
            style={{
              ...placeholderFrameStyle,
              transform: `rotate(${getRandomAngle()}deg)`,
              backgroundImage: `url('/image-${index + 1}.jpg')`, // Assume images are named image-1.jpg, image-2.jpg, etc.
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCard;
