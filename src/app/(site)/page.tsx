"use client";

import React, { useEffect, useRef } from "react";
import { ContactForm } from "./components";
import "../globals.css";

export default function Home() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, 4); // Assuming 4 sections including ContactForm
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add 'cd-selected' class to the intersecting section
            entry.target.classList.add("cd-selected");
          } else {
            // Remove 'cd-selected' class from non-intersecting sections
            entry.target.classList.remove("cd-selected");
          }
        });
      },
      { threshold: 0.5 } // Trigger when half of the section is visible
    );

    sectionRefs.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <main className="cd-fixed-bg cd-auto-hide-header">
      {/* Main Intro Section */}
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        className="cd-section"
      >
        <h1 className="text-5xl font-bold" style={{ color: "#2f5597" }}>
          YUDHISHTHRA SUGUMARAN
        </h1>
        <p className="text-3xl text-gray-600 mt-4">developer + pentester</p>{" "}
      </section>

      {/* Who Am I Section */}
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className="cd-section"
      >
        <h2 className="text-4xl font-bold mb-4">Who am I</h2>
        <p className="text-gray-700 text-base mb-4">
          Yudhishthra Sugumaran is a software engineering student, hackathon
          hacker, and cybersecurity enthusiast with a strong drive to positively
          impact people's lives.
        </p>
        <p className="text-gray-700 text-base">
          When not coding or hacking, he likes to binge-watch shows on Netflix,
          do activities that soothe the soul and mind, and values spending
          quality time with family and friends.
        </p>
        <a
          href="#full-story"
          className="text-indigo-600 hover:text-indigo-800 transition duration-300"
        >
          Read his full story here.
        </a>
      </section>

      {/* Achievements Section */}
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className="cd-section"
      >
        <h2 className="text-4xl font-bold mb-4">Top achievements</h2>
        <div className="flex justify-around">
          <div>
            <span className="text-5xl font-bold">8</span>
            <p className="text-base text-gray-600">hackathons joined</p>
          </div>
          <div>
            <span className="text-5xl font-bold">11</span>
            <p className="text-base text-gray-600">CTFs joined</p>
          </div>
          <div>
            <span className="text-5xl font-bold">6</span>
            <p className="text-base text-gray-600">awards received</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        className="cd-section"
      >
        {/* <ContactForm /> */}
      </section>
    </main>
  );
}
