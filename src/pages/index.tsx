import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <div className="hero__title_content">Mohan Blog</div>
        </h1>
        <p className="hero__subtitle">
          Who has seen the wind? Neither I nor you.
        </p>
        <p className="hero__subtitle">
          But when the leaves hang trembling, The wind is passing through.
        </p>
        <p className="hero__subtitle">
          Who has seen the wind? Neither you nor I.
        </p>
        <p className="hero__subtitle">
          But when the trees bow down their heads, The wind is passing by.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--info" to="/docs">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="这是来自 Mohan 的技术文档专栏！"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
