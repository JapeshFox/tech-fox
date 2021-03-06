import React from "react";

import Layout from "@theme/Layout";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import JoinFox from "../components/JoinFox";
import TechStack from "../components/TechStack";
import MediumBlogs from "../components/MediumBlogs";
import HomePageSlider from "../components/HomePageSlider/HomePageSlider";
import Benefits from "../components/Benefits";
import Quotes from "../components/Quotes";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomePageSlider />
      <main>
        <JoinFox />
        <TechStack />
        <MediumBlogs />
        <Benefits />
        <Quotes />
      </main>
    </Layout>
  );
}
