import { getProfile } from "../../../sanity/sanity.query";
import type { ProfileType } from "../../../types";
import HeroSvg from "./icons/HeroSvg";
import { HeroCard, AchievementCounter, ContactForm } from "./components";

export default function Home() {
  return (
    <main>
      <HeroCard />
      <AchievementCounter />
      <ContactForm />
    </main>
  );
}
