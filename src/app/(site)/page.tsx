"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import throttle from "lodash.throttle";
import move from "lodash-move";

const sectionsData = [
  {
    id: "main-intro",
    color: "#266678",
    content: (
      <div>
        <h1>Welcome to My Portfolio</h1>
        <p>
          This is the main introduction section where I tell you a bit about
          myself and what I do.
        </p>
      </div>
    ),
  },
  {
    id: "who-am-i",
    color: "#cb7c7a",
    content: (
      <div>
        <h2>Who Am I?</h2>
        <p>
          I am a passionate developer with a love for creating seamless user
          experiences.
        </p>
      </div>
    ),
  },
  {
    id: "achievements",
    color: "#36a18b",
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
    color: "#cda35f",
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
  const scrollY = useRef(0);
  const isAtStart = useRef(true); // Track if at the start of the sequence
  const isAtEnd = useRef(false); // Track if at the end of the sequence

  useEffect(() => {
    const updateSections = (direction) => {
      setSections((currentSections) => {
        if (direction === "down") {
          if (!isAtEnd.current && currentSections.length > 1) {
            isAtStart.current = false;
            const newSections = move(
              currentSections,
              0,
              currentSections.length - 1
            );
            isAtEnd.current = newSections[0].id === sectionsData[0].id;
            return newSections;
          }
        } else if (direction === "up") {
          if (!isAtStart.current && currentSections.length > 1) {
            isAtEnd.current = false;
            const newSections = move(
              currentSections,
              currentSections.length - 1,
              0
            );
            isAtStart.current =
              newSections[0].id === sectionsData[sectionsData.length - 1].id;
            return newSections;
          }
        }
        return currentSections;
      });
    };

    const handleScroll = () => {
      const direction = window.scrollY > scrollY.current ? "down" : "up";
      updateSections(direction);
      scrollY.current = window.scrollY;
    };

    const throttledHandleScroll = throttle(handleScroll, 400);
    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start((i) => ({
      y: i * -SECTION_OFFSET,
      scale: 1 - i * SCALE_FACTOR,
      transition: {
        delay: i * 0.01,
        type: "spring",
        stiffness: 60,
        damping: 30,
        duration: 1, // Duration should be a value in seconds, not milliseconds
      },
    }));
  }, [controls, sections]);

  return (
    <div style={wrapperStyle}>
      {sections.map((section, index) => (
        <motion.div
          custom={index}
          animate={controls}
          key={section.id}
          style={{
            ...sectionStyle,
            backgroundColor: section.color,
            zIndex: sections.length - index,
          }}
        >
          {section.content}
        </motion.div>
      ))}
    </div>
  );
};

const wrapperStyle = {
  position: "relative",
  width: "100%", // Adjust to the width of your sections
  height: "100vh", // Adjust to the height of your container
  overflow: "hidden", // Prevent scrolling to see the dragged section
  display: "flex",
  flexDirection: "column-reverse", // Stack sections bottom to top
  alignItems: "center",
  justifyContent: "center",
};

// Modify the styles for the cards
const sectionStyle = {
  position: "absolute",
  width: "90%", // Adjust to the width of your sections
  height: "90%", // Adjust to the height of your sections
  borderRadius: "50px",
  transformOrigin: "right center", // Set origin for rotation effect
  listStyle: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "50px",
  boxSizing: "border-box",
  perspective: "1000px", // Add perspective for 3D effect
};

export default SectionStack;
