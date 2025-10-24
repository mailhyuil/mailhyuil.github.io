import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageMain from "@site/src/components/HomepageMain";
import Layout from "@theme/Layout";
import type { ReactNode } from "react";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <HomepageMain />
    </Layout>
  );
}
