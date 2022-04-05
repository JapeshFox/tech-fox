import React from "react";

import Layout from "@theme/Layout";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import HomepageFeatures from "../components/HomepageFeatures";
import HomePageSlider from "../components/HomePageSlider/HomePageSlider";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomePageSlider />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
