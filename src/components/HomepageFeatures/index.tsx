import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Focus",
    Svg: require("@site/static/img/rocket.svg").default,
    description: (
      <>The content focus on Web such as React, JavaScript, Vue...</>
    ),
  },
  {
    title: "Grace",
    Svg: require("@site/static/img/satellite.svg").default,
    description: <>All content has been carefully typeset.</>,
  },
  {
    title: "Original",
    Svg: require("@site/static/img/star.svg").default,
    description: (
      <>The content is original or translated from official documents.</>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
