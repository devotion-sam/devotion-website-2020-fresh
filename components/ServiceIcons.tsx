/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function ServiceIcons(
  props: {
    heading: string | null | undefined;
    copy: string | null | undefined;
    services: Record<string, unknown> | null | undefined;
  },
) {
  return (
    <div class={tw`py-16 px-5 bg-gray-100`}>
      <div class={tw`w-full max-w-6xl ml-auto mr-auto`}>
        <div class="copy" v-if="heading || copy">
          <h2 v-if="heading">{props.heading}</h2>
          <div class="intro fs-intro-small" v-if="copy">{props.copy}</div>
        </div>
        <div class={tw`icons flex flex-row align-center justify-center`}>
          {props.services.items.map((service) => {
            return (
              <div class={tw`p-3 text-center`}>
                <a
                  class="item"
                  href={`/services${service.elements.summary_cta_url.value}`}
                >
                  <div class={tw`w-20 h-20 ml-auto mr-auto`}>
                    <img
                      src={`${service.elements.icon.value[0].url}?auto=format`}
                    />
                  </div>
                  <div class="content">
                    <h3 class={tw`font-semibold text-2xl`}>
                      {service.elements.name.value}
                    </h3>
                    <div class={tw`mt-4`}>
                      {service.elements.summary___short.value}
                    </div>
                  </div>
                  <div
                    class={tw`flex flex-row justify-center mt-4`}
                  >
                    <div
                      class={tw`bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded
                      `}
                    >
                      {service.elements.summary_cta_label.value}
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
