"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import move from "lodash-move";
import { Icon } from "@iconify/react";

const arrowStyle = {
  position: "fixed",
  right: "50px",
  fontSize: "24px",
  cursor: "pointer",
  zIndex: 1000,
  // Ensure transform origin is consistent
  transformOrigin: "center",
};

const moveCardsTextStyle = {
  position: "fixed",
  right: "20px",
  top: "50%",
  transform: "translateY(-50%) rotate(90deg)",
  color: "#FF8C00",
  fontSize: "18px",
  zIndex: 1000,
};

const wrapperStyle = {
  position: "relative",
  width: "95%", // Adjust to the width of your sections
  height: "80vh", // Adjust to the height of your container
  overflow: "hidden", // Prevent scrolling to see the dragged section
  display: "flex",
  flexDirection: "column-reverse", // Stack sections bottom to top
  alignItems: "center",
  justifyContent: "center",
  //border color orange
};

// Modify the styles for the cards
const sectionStyle = {
  position: "absolute",
  width: "90%", // Adjust to the width of your sections
  height: "85%", // Adjust to the height of your sections
  borderRadius: "18px",
  transformOrigin: "right center", // Set origin for rotation effect
  listStyle: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "50px",
  boxSizing: "border-box",
  perspective: "1000px", // Add perspective for 3D effect
  border: "5px solid #FF8C00",
};

const mainIntroStyle = {
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

// Update the styles for the download button
const downloadButtonStyle = {
  backgroundColor: "#e76e54", // Button color similar to the image
  color: "white",
  padding: "10px 20px",
  textTransform: "uppercase",
  fontWeight: "bold",
  fontSize: "14px",
  cursor: "pointer",
  marginTop: "15px", // Add some space above the button
  // Remove positioning styles that were previously used to place the button on the side
};

const nameStyle = {
  margin: "0",
  fontSize: "3rem", // Large font size for the name
  fontWeight: "bold",
  letterSpacing: "1px", // Spacing between letters
};

const roleStyle = {
  margin: "0",
  fontSize: "1.5rem", // Smaller font size for the role
  color: "#555", // Slightly lighter text color for the role
  fontWeight: "normal",
};

// // The tab styles for left and right positioning
// const leftTabStyle = {
//   left: "5px", // Position on the left edge
//   transform: "translateY(-100%)", // Move it up 100% of its height
// };

// const rightTabStyle = {
//   right: "5px", // Position on the right edge
//   transform: "translateY(-100%)", // Move it up 100% of its height
// };

// // Existing tabStyle modified for common properties
// const tabStyle = {
//   position: "absolute",
//   top: 0,
//   padding: "5px 10px",
//   backgroundColor: "#FF8C00",
//   borderTopRightRadius: "5px",
//   borderTopLeftRadius: "5px",
//   color: "white",
//   fontWeight: "bold",
//   textAlign: "center",
//   zIndex: 10, // Ensure it's above the card content
// };

// Tab component now accepts a 'left' prop to determine its position
// const Tab = ({ title, left }) => (
//   <div style={{ ...tabStyle, ...(left ? leftTabStyle : rightTabStyle) }}>
//     {title}
//   </div>
// );

const sectionsData = [
  {
    id: "main-intro",
    color: "#ffffff", // Assuming a light grey background similar to the image
    content: (
      <div style={mainIntroStyle}>
        <h1 style={nameStyle}>YUDHISHTHRA SUGUMARAN</h1>
        <h2 style={roleStyle}>developer + pentester</h2>
        <div style={downloadButtonStyle}>DOWNLOAD CV</div>{" "}
        {/* Moved this line */}
      </div>
    ),
  },
  {
    id: "who-am-i",
    color: "#f0f0f0",
    leftTab: true,
    content: (
      // <div>
      //   <h2>Who Am I?</h2>
      //   <p>
      //     I am a passionate developer with a love for creating seamless user
      //     experiences.
      //   </p>
      // </div>
      <div style={mainIntroStyle}>
        <p>
          I am a passionate developer with a love for creating seamless user
          experiences.
        </p>
      </div>
    ),
  },
  {
    id: "achievements",
    color: "#f0f0f0",
    content: (
      <div>
        <h2>My Achievements</h2>
        <ul>
          <li>
            Lead Developer at XYZ Corp, where I increased performance by 20%.
          </li>
          <li>Speaker at the Annual Tech Conference 2022.</li>
          <li>Published 10+ articles on modern web development practices.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "contact-form",
    color: "#f0f0f0",
    content: (
      <div>
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    ),
  },
];

const SECTION_OFFSET = 30; // The visual offset for each section stack
const SCALE_FACTOR = 0.05; // The scale difference between each section stack

const SectionStack = () => {
  const [sections, setSections] = useState(sectionsData);
  const controls = useAnimation();

  const updateSections = (direction) => {
    setSections((currentSections) => {
      if (direction === "down") {
        const newSections = move(
          currentSections,
          0,
          currentSections.length - 1
        );
        return newSections;
      } else if (direction === "up") {
        const newSections = move(
          currentSections,
          currentSections.length - 1,
          0
        );
        return newSections;
      }
      return currentSections;
    });
  };

  useEffect(() => {
    controls.start((i) => ({
      y: i * -SECTION_OFFSET,
      scale: 1 - i * SCALE_FACTOR,
      transition: {
        delay: i * 0.01,
        type: "spring",
        stiffness: 60,
        damping: 30,
        duration: 1,
      },
    }));
  }, [controls, sections]);

  return (
    <div style={wrapperStyle}>
      <Arrow direction="up" onClick={() => updateSections("up")} />
      <div style={moveCardsTextStyle}>move cards</div>
      {sections.map((section, index) => (
        <motion.div
          custom={index}
          animate={controls}
          key={section.id}
          style={{
            ...sectionStyle,
            backgroundColor: section.color,
            zIndex: sections.length - index, // Ensures proper stacking
          }}
        >
          {/* Pass the left prop based on the index */}
          {/* <Tab title={section.id.replace(/-/g, " ")} left={index % 2 === 0} /> */}
          {section.content}
        </motion.div>
      ))}
      <Arrow direction="down" onClick={() => updateSections("down")} />
    </div>
  );
};

const Arrow = ({ direction, onClick }) => (
  <div
    onClick={onClick}
    style={{
      ...arrowStyle,
      top: "50%",
      transform: direction === "up" ? "translateY(-250%)" : "translateY(150%)",
    }}
    className="blink"
  >
    <Icon
      icon={
        direction === "up"
          ? "material-symbols-light:arrow-circle-up-outline"
          : "material-symbols-light:arrow-circle-down-outline"
      }
      width="40"
      height="40"
      style={{ color: "#FF8C00" }}
    />
  </div>
);

export default SectionStack;
