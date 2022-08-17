/** @jsx h */
import { h } from "preact";
import Header from "../components/Header.tsx";
import HomepageHero from "../islands/HomepageHero.tsx";

export default function Home() {
  return (
    <div>
      <Header />
      <HomepageHero />
    </div>
  );
}
