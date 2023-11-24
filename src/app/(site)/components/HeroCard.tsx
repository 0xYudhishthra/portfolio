export default function ProfileHeader() {
  return (
    <header className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center h-full">
        <h1
          className="text-6xl font-bold text-center"
          style={{ color: "#2f5597" }}
        >
          YUDHISHTHRA SUGUMARAN
        </h1>
        <p className="text-2xl text-gray-600 mt-2 text-center">
          developer + pentester
        </p>
      </div>
      <div className="absolute bottom-0 w-full pb-10 text-center">
        <a href="#next-section" className="text-gray-600 hover:text-gray-800">
          <span className="text-4xl cursor-pointer">⬇️</span>
        </a>
      </div>
    </header>
  );
}
