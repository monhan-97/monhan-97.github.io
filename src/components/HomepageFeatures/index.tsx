import clsx from "clsx";
import rocket from "@site/static/img/rocket.svg";
import satellite from "@site/static/img/satellite.svg";
import star from "@site/static/img/star.svg";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: any;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Focus",
    Svg: rocket,
    description: (
      <>The content focus on Web such as React, JavaScript, Vue...</>
    ),
  },
  {
    title: "Grace",
    Svg: satellite,
    description: <>All content has been carefully typeset.</>,
  },
  {
    title: "Original",
    Svg: star,
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
