"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
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

const arrowContainerStyle: React.CSSProperties = {
  position: "fixed",
  top: "50%",
  right: "2%", // Anchor to the right side of the screen
  transform: "translateY(-50%)", // Only translate vertically
  display: "flex",
  alignItems: "center",
  zIndex: 1000,
  flexDirection: "column",
};

const moveCardsTextStyle: React.CSSProperties = {
  right: "20px",
  top: "50%",
  color: "#FF8C00",
  fontSize: "18px",
  zIndex: 1000,
  paddingTop: "20px",
  paddingBottom: "20px",
};

const wrapperStyle: React.CSSProperties = {
  position: "relative",
  width: "95%", // Adjust to the width of your sections
  height: "80vh", // Adjust to the height of your container
  overflow: "hidden", // Prevent scrolling to see the dragged section
  display: "flex",
  flexDirection: "column", // Stack sections bottom to top
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check the window width
    const checkDeviceSize = () => {
      const match = window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(match);
    };

    // Check once and also add event listener for resizing
    checkDeviceSize();
    window.addEventListener("resize", checkDeviceSize);

    // Clean up event listener
    return () => window.removeEventListener("resize", checkDeviceSize);
  }, []);

  type ArrowProps = {
    direction: "up" | "down";
    onClick: () => void;
  };

  const Arrow: React.FC<ArrowProps> = ({ direction, onClick }) => (
    <Icon
      onClick={onClick}
      className="blink"
      icon={
        direction === "up"
          ? "material-symbols-light:arrow-circle-up-outline"
          : "material-symbols-light:arrow-circle-down-outline"
      }
      width="40"
      height="40"
      style={{ color: "#FF8C00", cursor: "pointer", zIndex: 1000 }}
    />
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

  const updateSections = (direction: "up" | "down") => {
    setSections((currentSections) => {
      let newSections = [...currentSections];
      if (direction === "down" && newSections.length > 0) {
        const firstElement = newSections.shift();
        if (firstElement) {
          newSections.push(firstElement);
        }
      } else if (direction === "up" && newSections.length > 0) {
        const lastElement = newSections.pop();
        if (lastElement) {
          newSections.unshift(lastElement);
        }
      }
      setCurrentSection(newSections[0].id); // Update the current section
      return newSections;
    });
  };

  // Function to handle end of drag event
  const handleDragEnd = (event: any, info: any) => {
    const offset = info.offset.y;
    const velocity = info.velocity.y;

    if (offset < 0 || velocity < -10) {
      updateSections("up");
    } else if (offset > 0 || velocity > 10) {
      updateSections("down");
    }
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
      {/* Arrow container */}
      {!isMobile && (
        <div style={arrowContainerStyle}>
          <Arrow direction="up" onClick={() => updateSections("up")} />
          <div style={moveCardsTextStyle}>move cards</div>
          <Arrow direction="down" onClick={() => updateSections("down")} />
        </div>
      )}
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
          drag="y" // Enable dragging on y-axis
          dragConstraints={{ top: 0, bottom: 0 }} // Constrain drag to vertical axis
          dragElastic={1} // Elasticity of drag
          onDragEnd={handleDragEnd} // Handle the drag end event
        >
          {section.content}
        </motion.div>
      ))}
    </div>
  );
};

export default Home;
