"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import move from "lodash-move";
import { Icon } from "@iconify/react";
import {
  HeroCard,
  AboutMeCard,
  AchievementCard,
  ContactFormCard,
} from "./components";

/**
 * OVERALL STYLES
 */
const arrowStyle: React.CSSProperties = {
  position: "fixed",
  right: "50px",
  fontSize: "24px",
  cursor: "pointer",
  zIndex: 1000,
  // Ensure transform origin is consistent
  transformOrigin: "center",
};

const moveCardsTextStyle: React.CSSProperties = {
  position: "fixed",
  right: "20px",
  top: "50%",
  transform: "translateY(-50%) rotate(90deg)",
  color: "#FF8C00",
  fontSize: "18px",
  zIndex: 1000,
};

const wrapperStyle: React.CSSProperties = {
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

const sectionStyle: React.CSSProperties = {
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

const Home = () => {
  const SECTION_OFFSET = 30; // The visual offset for each section stack
  const SCALE_FACTOR = 0.05; // The scale difference between each section stack

  const controls = useAnimation();
  const [loading, setLoading] = useState(false);
  const [messageInfo, setMessageInfo] = useState("");

  const Arrow = ({ direction, onClick }) => (
    <div
      onClick={onClick}
      style={{
        ...arrowStyle,
        top: "50%",
        transform:
          direction === "up" ? "translateY(-250%)" : "translateY(150%)",
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

  const sectionsData = [
    {
      id: "main-intro",
      color: "#ffffff", // Assuming a light grey background similar to the image
      content: <HeroCard />,
    },
    {
      id: "who-am-i",
      color: "#ffffff",
      leftTab: true,
      content: <AboutMeCard />,
    },
    {
      id: "achievements",
      color: "#ffffff",
      content: <AchievementCard />,
    },

    {
      id: "contact-form",
      color: "#ffffff",
      content: <ContactFormCard />,
    },
  ];

  const [sections, setSections] = useState(sectionsData);
  const [currentSection, setCurrentSection] = useState(sections[0].id);

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

export default Home;
