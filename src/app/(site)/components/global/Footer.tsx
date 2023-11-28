//import icons
import { Icon } from "@iconify/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="mx-auto px-8 py-10 flex justify-between text-zinc-400">
        {/* Left Section */}
        <div className="justify-left pl-10">
          {" "}
          <p>Designed in Figma. Developed using MERN. Hosted on Heroku.</p>
          <p>
            {"\n"}© {currentYear}. All rights reserved. Yudhishthra Sugumaran.
          </p>
        </div>

        {/* Right Section */}
        <div
          className="flex items-center space-x-10 pr-18"
          // include a right border
        >
          <a
            href="https://linkedin.com/in/yudhishthra"
            target="_blank"
            className="hover:text-white transition duration-200 flex items-center border-r-2 border-zinc-300 pr-10"
          >
            {/* the icon and word should appear i the same line */}
            <p>LINKEDIN</p>
            <Icon
              icon="iconamoon:arrow-top-right-1-thin"
              width="24"
              height="24"
              style={{ color: "#2f5597" }}
              className="inline mb-5"
            />
          </a>
          <a
            href="https://ctftime.org/team/177670"
            target="_blank"
            className="hover:text-white transition duration-200 flex items-center border-r-2 border-zinc-300 pr-10"
          >
            <p>CTFTIME</p>
            <Icon
              icon="iconamoon:arrow-top-right-1-thin"
              width="24"
              height="24"
              style={{ color: "#2f5597" }}
              className="inline mb-5"
            />
          </a>
          <a
            href="https://github.com/0xYudhishthra"
            // open in new tab
            target="_blank"
            className="hover:text-white transition duration-200 flex items-center"
          >
            <p>GITHUB</p>
            <Icon
              icon="iconamoon:arrow-top-right-1-thin"
              width="24"
              height="24"
              style={{ color: "#2f5597" }}
              className="inline mb-5"
            />
          </a>
          <a
            href="#"
            className="hover:text-white transition duration-200 flex items-center pl-5"
          >
            <Icon
              icon="material-symbols-light:arrow-circle-up-outline"
              width="40"
              height="40"
              style={{ color: "#FF8C00" }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
