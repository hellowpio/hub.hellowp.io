import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import FontAwesomeIcon from "@site/src/components/FontAwesomeIcon";
import ArrowRight from "@site/static/icons/arrow_right.svg";

import VersionedLink from "@site/src/components/VersionedLink";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"> {siteConfig.title} </h1>{" "}
        <p className="hero__subtitle"> {siteConfig.tagline} </p>{" "}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/hogyan-hasznald-a-hub-oldalt"
          >
            Hogyan használd a HUB oldalt ?{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </header>
  );
}

function Gyakoriak() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="gallery-home">
      <div className="container">
        <div className="row">
          <div className="gallery">
            <div className="sub-heading">
              <h2>Gyakran feltett kérdések</h2>
            </div>

            <div className="card">
              <div className="card-header">
                <FontAwesomeIcon icon="fa-duotone fa-file-invoice fa-2xl text-success" />
                <h4>Hol találom a számlát?</h4>
              </div>
              <p>
                A számlákat könnyedén (és bármikor) elérheted a Console oldalon
                keresztül.
              </p>
              <VersionedLink to="/docs/sugo/szamlazas-es-elofizetesek/hol-talalom-a-szamlat">
                Hol találom a számlát? <ArrowRight className="arrow" />
              </VersionedLink>
            </div>

            <div className="card">
              <div className="card-header">
                <FontAwesomeIcon icon="fa-duotone fa-credit-card fa-2xl text-success" />
                <h4>Hogyan adhatok meg új bankkártya adatokat?</h4>
              </div>
              <p>
                Console -> Fizetési módok menüpontot. Itt kattints a kék Új
                bankkártya hozzáadása gombra.
              </p>
              <VersionedLink to="/docs/sugo/szamlazas-es-elofizetesek/elofizeteshet-kapcsolodo-kartya-csereje">
                Új bankkártya hozzáadása <ArrowRight className="arrow" />
              </VersionedLink>
            </div>

            <div className="card">
              <div className="card-header">
                <FontAwesomeIcon icon="fa-duotone fa-repeat fa-2xl text-success" />
                <h4>Csomagváltás</h4>
              </div>
              <p>
                Az előfizetésed csomagját (amennyiben van több csomag) bármikor
                megváltoztathatod.
              </p>
              <VersionedLink to="/docs/sugo/szamlazas-es-elofizetesek/elofizetes-csomagvaltas">
                Előfizetés csomagváltása <ArrowRight className="arrow" />
              </VersionedLink>
            </div>

            <div className="card">
              <div className="card-header">
                <FontAwesomeIcon icon="fa-duotone fa-link-simple-slash fa-2xl text-success" />
                <h4>A követett hivatkozás érvényessége lejárt</h4>
              </div>
              <p>
                Ezt a hibaüzenetet kapod? Gond van a weboldal
                tárhelybeállításával.
              </p>
              <VersionedLink to="/docs/tudasbazis/hibaelharitas/wordpress/a-kovetett-hivatkozas-ervenyessege-lejart">
                Probléma megoldása <ArrowRight className="arrow" />
              </VersionedLink>
            </div>

            <div className="card">
              <div className="card-header">
                <FontAwesomeIcon icon="fa-duotone fa-paintbrush-pencil fa-2xl text-success" />
                <h4>A sablon nem tartalmazza a style.css fájlt</h4>
              </div>
              <p>Valószínűleg nem WordPress sablont próbálsz telepíteni.</p>
              <VersionedLink to="/docs/tudasbazis/hibaelharitas/wordpress/sablon-telepitesi-hiba">
                Probléma megoldása <ArrowRight className="arrow" />
              </VersionedLink>
            </div>

            <div className="card">
              <div className="card-header">
                <FontAwesomeIcon icon="fa-duotone fa-boxes-stacked fa-2xl text-success" />
                <h4>Bővítmény telepítési hiba</h4>
              </div>
              <p>
                Hiba: "A csomag nem telepíthető. Érvénytelen bővítményeket
                találtunk."
              </p>
              <VersionedLink to="/docs/tudasbazis/hibaelharitas/wordpress/bovitmeny-telepitesi-hiba">
                Probléma megoldása <ArrowRight className="arrow" />
              </VersionedLink>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="HelloWP Hub"
      description=" HelloWP Dokumentáció és Tudásbázis "
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>{" "}
      <Gyakoriak />
    </Layout>
  );
}
