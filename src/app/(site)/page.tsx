"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import move from "lodash-move";
import { Icon } from "@iconify/react";

const getRandomAngle = () => Math.random() * 20 - 10; // Random angle between -10 and 10 degrees

const generateRandomArrows = (count: Number) => {
  return Array.from({ length: count }, () => ({
    x: Math.random() * 100, // Random percentage position on x-axis
    y: Math.random() * 100, // Random percentage position on y-axis
    angle: Math.random() * 360, // Random angle in degrees
  }));
};

// Define the arrow data with positions, angles, and text labels
const arrowData = [
  { angle: 130, length: "100px", text: "hackathons joined", number: 8 },
  { angle: 200, length: "120px", text: "CTFs joined", number: 11 },
  // Add more arrows as needed
];

/**
 * OVERALL STYLES
 */
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

/**
 * FIRST CARD STYLE
 */
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

/**
 * SECOND CARD STYLE
 */
const placeholderFramesContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "flex-start", // Align at the bottom
  justifyContent: "space-between",
  width: "100%", // Take up full width to allow space between frames
  paddingBottom: "1.0rem", // Add some space below the frames
};

const placeholderFrameStyle = {
  width: "300px", // Set the desired width for your placeholder
  height: "300px", // Set the desired height for your placeholder
  marginRight: "10px", // Space between the frames
  display: "inline-block", // To line them up in a row
};

const whoAmITitleStyle = {
  fontSize: "2.5rem", // Adjust the font size as needed
  fontWeight: "bold",
  color: "#003366", // Adjust the color to match the image
  alignSelf: "flex-start", // Align to the top of the flex container
  paddingBottom: "1.0rem",
  paddingTop: "1.0rem",
};

const whoAmITextStyle = {
  color: "#333",
  fontSize: "1.15rem",
  lineHeight: "1.5",
  marginBottom: "5rem", // Adjust space between text and picture placeholders
};

const whoAmIStyle = {
  ...mainIntroStyle,
  alignItems: "flex-start", // Align to the top of the flex container
};

/**
 * THIRD CARD STYLE
 */
const getAchievementCircleStyle = () => ({
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
});

const getAchievementTextStyle = () => ({
  fontSize: "1rem",
  textAlign: "center",
});

const getAchievementContainerStyle = () => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "0 1rem",
});

const achievementTitleStyle = {
  fontSize: "2rem",
  fontWeight: "bold",
  color: "#003366",
  alignSelf: "right",
  paddingBottom: "1.0rem",
  paddingTop: "1.0rem",
};

// Function to generate styles for arrows
const getArrowStyle = (angle, length) => ({
  position: "absolute",
  transform: `rotate(${angle}deg)`,
  transformOrigin: "0 0",
  width: length,
  height: "2px",
  backgroundColor: "black", // Change as needed
  // Position the arrows around the center of the section
  left: "50%",
  top: "50%",
});

// Function to generate styles for text at the end of arrows
const getArrowTextStyle = (angle, length) => ({
  position: "absolute",
  transform: `translateX(${length})`,
  // Adjust the positioning as necessary
});

/**
 * FOURTH CARD STYLE
 */

const sectionsData = [
  {
    id: "main-intro",
    color: "#ffffff", // Assuming a light grey background similar to the image
    content: (
      <div style={mainIntroStyle}>
        <h1 style={nameStyle}>YUDHISHTHRA SUGUMARAN</h1>
        <h2 style={roleStyle}>developer + pentester</h2>
        <div style={downloadButtonStyle}>DOWNLOAD CV</div>{" "}
      </div>
    ),
  },
  {
    id: "who-am-i",
    color: "#ffffff",
    leftTab: true,
    content: (
      <div style={whoAmIStyle}>
        <h2 style={whoAmITitleStyle}>whoami</h2>
        <p style={whoAmITextStyle}>
          Yudhishthra Sugumaran is a software engineering student, hackathon
          hacker, and cybersecurity enthusiast with a strong drive to positively
          impact people's lives. When not coding or hacking, he likes to
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
    ),
  },
  {
    id: "achievements",
    color: "#ffffff",
    content: (
      <>
        <div style={{ position: "relative", height: "200px", width: "200px" }}>
          {" "}
          {/* Adjust size as needed */}
          {arrowData.map((arrow, index) => (
            <React.Fragment key={index}>
              <div style={getArrowStyle(arrow.angle, arrow.length)} />
              <div style={getArrowTextStyle(arrow.angle, arrow.length)}>
                {arrow.text}
              </div>
            </React.Fragment>
          ))}
          <h2 style={achievementTitleStyle}>achievements</h2>{" "}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              padding: "2rem 0",
            }}
          >
            {[
              { number: "8", text: "hackathons joined" },
              { number: "11", text: "CTFs joined" },
              { number: "6", text: "awards received" },
              { number: "6", text: "leadership roles" },
              { number: "6", text: "community engagements" },
            ].map((achievement, index) => (
              <div key={index} style={getAchievementContainerStyle()}>
                <div style={getAchievementCircleStyle()}>
                  {achievement.number}
                </div>
                <div style={getAchievementTextStyle()}>{achievement.text}</div>
              </div>
            ))}
          </div>
        </div>
      </>
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
  const [currentSection, setCurrentSection] = useState(sections[0].id);
  const controls = useAnimation();

  const updateSections = (direction) => {
    setSections((currentSections) => {
      let newSections = [...currentSections];
      if (direction === "down") {
        newSections = move(currentSections, 0, currentSections.length - 1);
      } else if (direction === "up") {
        newSections = move(currentSections, currentSections.length - 1, 0);
      }
      setCurrentSection(newSections[0].id); // Update the current section
      return newSections;
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
  }, [controls, sections, currentSection]);

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
