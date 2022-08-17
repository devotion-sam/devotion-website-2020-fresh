/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useEffect } from "preact/hooks";
import Typed from "typedjs";

export default function HomepageHero() {
  useEffect(() => {
    const typed = new Typed(document.getElementById("typed"), {
      strings: [
        "Hello, we're Devotion.<br>^800  We're an independent digital agency that ^250 <span>GROWS YOUR BUSINESS.</span> <br>^500 through strategy, development, and marketing. ^1000 <h1>Devotion is what we create.</h1>",
      ],
      typeSpeed: 25,
      contentType: "html",
      showCursor: false,
      loop: false,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div class={tw`h-screen flex items-center justify-center`}>
      <div id="typed"></div>
    </div>
  );
}
