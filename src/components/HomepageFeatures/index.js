import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Dokumentáció",
    link: "/docs/dokumentacio/",

    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Itt találod a HelloWP-s termékek és szolgáltatások leírásait. {" "}
      </>
    ),
  },
  {
    title: "Súgó",
    link: "/docs/sugo/",

    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Itt találod a HelloWP.io weboldal kezelését részletesebben. {" "}
      </>
    ),
  },
  {
    title: "Tudásbázis",
    link: "/docs/tudasbazis/",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        WordPress-hez, bővítményekhez és webfefejlesztéshez kapcsolodó oktató anyagok.{" "}
      </>
    ),
  },
];

function Feature({ Svg, title, description, link}) {
  return (
    <div className={clsx("col col--4")}>
      <a className="home-link" href={link}> 
      <div className="text--center">
      <Svg className={styles.featureSvg} role="img" /> 
      </div>{" "}
      <div className="text--center padding-horiz--md">
       <h3> {title} </h3> <p> {description} </p>{" "}
      </div>{" "}</a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container main-theme">
        <div className="row">
          {" "}
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
