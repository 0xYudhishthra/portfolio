export default function ProfileHeader() {
  return (
    <header className="relative flex flex-col h-screen">
      <div className="flex justify-between items-start">
        {/* Assuming "DOWNLOAD CV" is a button or link */}
        <a
          href="/cv"
          className="bg-orange-500 text-white py-2 px-4 uppercase font-semibold rounded hover:bg-orange-600 transition duration-300 ease-in-out"
        >
          Download CV
        </a>
      </div>
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-6xl font-bold">YUDHISHTHRA SUGUMARAN</h1>
        <p className="text-2xl text-gray-600 mt-2">developer + pentester</p>
        <div className="mt-4">
          <h2 className="text-3xl font-bold">Who am I</h2>
          <p className="mt-2 text-base text-gray-500">
            Yudhishthra Sugumaran is a software engineering student, hackathon
            hacker, and cybersecurity enthusiast with a strong drive to
            positively impact people's lives.
            <a href="#" className="text-blue-600 hover:underline">
              {" "}
              Read his full story here.
            </a>
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 p-6">
        {/* Arrow or icon indicating to scroll down */}
        <a href="#next-section" className="text-gray-600 hover:text-gray-800">
          {/* Here you'd insert an icon or image representing the arrow */}
          ⬇️
        </a>
      </div>
    </header>
  );
}
