import { getProfile } from "../../../sanity/sanity.query";
import type { ProfileType } from "../../../types";
import { HeroCard, AchievementCounter, ContactForm } from "./components";

export default function HomePage() {
  return (
    <div className="relative bg-white">
      {/* "Download CV" button */}
      <a
        href="/cv"
        className="absolute top-0 left-0 m-6 bg-orange-500 text-white py-2 px-4 uppercase font-semibold rounded hover:bg-orange-600 transition duration-300 ease-in-out"
        style={{ zIndex: 10 }} // Ensure it sits above other elements
      >
        Download CV
      </a>

      {/* Main content */}
      <main className="flex flex-col min-h-screen justify-center items-center px-6">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl font-bold">YUDHISHTHRA SUGUMARAN</h1>
          <p className="text-2xl mt-4 mb-8">developer + pentester</p>
          <div>
            <h2 className="text-3xl font-bold mb-4">Who am I</h2>
            <p className="text-base mx-auto leading-relaxed max-w-2xl">
              Yudhishthra Sugumaran is a software engineering student, hackathon
              hacker, and cybersecurity enthusiast with a strong drive to
              positively impact people's lives. When not coding or hacking, he
              likes to binge-watch shows on Netflix, do activities that soothe
              the soul and mind, and values spending quality time with family
              and friends.
              <a href="#" className="text-blue-600 hover:underline">
                {" "}
                Read his full story here.
              </a>
            </p>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="bg-gray-100 py-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Top achievements
          </h2>
          <div className="flex justify-center space-x-20">
            <div className="text-center">
              <span className="text-4xl font-bold">8</span>
              <p className="mt-2">hackathons joined</p>
            </div>
            <div className="text-center">
              <span className="text-4xl font-bold">11</span>
              <p className="mt-2">CTFs joined</p>
            </div>
            <div className="text-center">
              <span className="text-4xl font-bold">6</span>
              <p className="mt-2">awards received</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-200 py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Let's talk!</h2>
          <div className="flex flex-col items-center">
            <p className="mb-4 max-w-lg text-center">
              I'm interested in freelance opportunities - especially projects
              that create real-world impact. However, if you'd like to just say
              hello, don't hesitate to drop your message!
            </p>
            <form className="w-full max-w-lg">
              <textarea
                className="w-full p-4 border-2 border-gray-300 mb-4"
                placeholder="Your message"
                rows="4"
              ></textarea>
              <button type="submit" className="w-full bg-black text-white p-2">
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
