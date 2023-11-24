export default async function AchievementCounter() {
  return (
    <section className="my-10 text-center">
      <h2 className="text-3xl font-bold mb-4">Top achievements</h2>
      <div className="flex justify-around">
        <div>
          <span className="text-3xl font-bold">8</span>
          <p>hackathons joined</p>
        </div>
        <div>
          <span className="text-3xl font-bold">11</span>
          <p>CTFs joined</p>
        </div>
        <div>
          <span className="text-3xl font-bold">6</span>
          <p>awards received</p>
        </div>
      </div>
    </section>
  );
}
