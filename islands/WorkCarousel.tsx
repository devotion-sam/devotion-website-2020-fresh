/** @jsx h */
import { h } from "preact";
import { useEffect } from "preact/hooks";
import { tw } from "@twind";
import Swiper from "swiper";
export default function WorkCarousel(
  props: {
    works: any;
  },
) {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      loop: false,
      freeMode: false,
      freeModeSticky: true,
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
      mousewheel: true,
    });
  }, []);
  return (
    <div class={tw`py-16 px-5`}>
      <div className="work">
        <div class={tw`swiper-container overflow-hidden`}>
          <div class="swiper-wrapper">
            {props.works.items.map((item) => {
              return (
                <div class={tw`swiper-slide !w-96`}>
                  <img
                    src={`${item.thumbnail}?w={width}&auto=format`}
                    sizes="auto"
                    class={tw`w-full lazyload`}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div class="swiper-scrollbar"></div>
      </div>
    </div>
  );
}
