const achievementCircleStyle: React.CSSProperties = {
  fontSize: "2rem",
  fontWeight: "bold",
  border: "2px solid #000",
  borderRadius: "50%",
  width: "64px",
  height: "64px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 0 1rem",
};

const achievementTextStyle: React.CSSProperties = {
  fontSize: "1rem",
  textAlign: "center",
};

const achievementTitleStyle: React.CSSProperties = {
  fontSize: "3rem",
  fontWeight: "bold",
  color: "#003366",
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 2,
};

const achievementContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center", // Center items vertically
  margin: "2rem 1rem",
  paddingTop: "6rem", // Make sure this is enough to prevent overlap with the title
};

const AchievementCard: React.FC = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <h2 style={achievementTitleStyle}>achievements</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row", // Changed to column for vertical alignment
          alignItems: "center", // Center align the items
          justifyContent: "center", // Center items vertically
          height: "100%", // Use full height of the card
        }}
      >
        {[
          { number: "8", text: "hackathons joined" },
          { number: "11", text: "CTFs joined" },
          { number: "6", text: "awards received" },
          { number: "6", text: "leadership roles" },
          { number: "6", text: "community engagements" },
        ].map((achievement, index) => (
          <div key={index} style={achievementContainerStyle}>
            <div style={achievementCircleStyle}>{achievement.number}</div>
            <div style={achievementTextStyle}>{achievement.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementCard;
