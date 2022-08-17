/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

const toggleMenu = () => {
  document.body.classList.toggle("show-menu");
};

export default function MenuButton() {
  return (
    <button
      type="button"
      class={tw`text-black w-10 h-10 flex flex-row items-center justify-center outline-none focus:outline-none`}
      onClick={toggleMenu}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        class={tw`w-8 h-8`}
      >
        <path
          class={tw`fill-current`}
          d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
        />
      </svg>
    </button>
  );
}
