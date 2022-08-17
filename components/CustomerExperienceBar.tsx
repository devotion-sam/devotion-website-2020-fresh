/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function CustomerExperienceBar(
  props: {
    heading: string | null | undefined;
    copy: string | null | undefined;
  },
) {
  return (
    <div class={tw`py-16 px-5 bg-gray-800 text-white`}>
      <div class={tw`w-full max-w-6xl ml-auto mr-auto`}>
        {props.heading && (
          <h2
            dangerouslySetInnerHTML={{ __html: props.heading }}
            class={tw`text-3xl`}
          >
          </h2>
        )}
        {props.copy && (
          <div
            dangerouslySetInnerHTML={{ __html: props.copy }}
            class={tw`text-xl mt-3`}
          >
          </div>
        )}
      </div>
    </div>
  );
}
