/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";
import HomepageHero from "../islands/HomepageHero.tsx";
import CustomerExperienceBar from "../components/CustomerExperienceBar.tsx";
import ServiceIcons from "../components/ServiceIcons.tsx";
import WorkCarousel from "../islands/WorkCarousel.tsx";

export const handler: Handlers = {
  async GET(_, ctx) {
    const pageReq = await fetch(
      `https://deliver.kontent.ai/fbb47826-c8ea-0217-55d4-9e4d47596d5a/items/?system.type=homepage&depth=5`,
    );
    const page = await pageReq.json();

    const servicesReq = await fetch(
      `https://deliver.kontent.ai/fbb47826-c8ea-0217-55d4-9e4d47596d5a/items/?system.type=list_services&depth=5`,
    );
    const servicesList = await servicesReq.json();

    const serviceItems = servicesList.items[0].elements.items.value;
    const serviceContent = [];

    for (let i = 0; i < serviceItems.length; i++) {
      const item = serviceItems[i];
      serviceContent.push(servicesList.modular_content[item]);
    }

    const services = {
      items: serviceContent,
      modular_content: servicesList.modular_content,
    };

    const worksReq = await fetch(
      `https://deliver.kontent.ai/fbb47826-c8ea-0217-55d4-9e4d47596d5a/items/?system.type=list_work&depth=5&limit=4`,
    );

    const worksList = await worksReq.json();

    const workItems = worksList.items[0].elements.items.value;
    const workContent = [];

    for (let i = 0; i < workItems.length; i++) {
      const item = workItems[i];
      workContent.push({
        thumbnail:
          worksList.modular_content[item].elements.thumbnail.value[0].url,
        slug: worksList.modular_content[item].elements.url_slug.value,
        brandColour: worksList
          .modular_content[
            worksList.modular_content[item].elements.client.value
          ].elements.brand_colour.value,
        heroResult: worksList.modular_content[item].elements.hero_result.value,
      });
    }

    const works = {
      items: workContent,
    };

    // console.log(works);

    return ctx.render({ page, services, works });
  },
};

export default function Home({ data }) {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
      />
      <Header />
      <HomepageHero />
      <CustomerExperienceBar
        heading={data.page.items[0].elements.devotion_delivers____heading.value}
        copy={data.page.items[0].elements.devotion_delivers____body.value}
      />
      <ServiceIcons services={data.services} />
      <WorkCarousel works={data.works} />
    </div>
  );
}
