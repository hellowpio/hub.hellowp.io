import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import FontAwesomeIcon from "@site/src/components/FontAwesomeIcon";

import styles from "./index.module.css";

function HeroSection() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleAccent}>HelloWP</span> Hub
            </h1>
            <p className={styles.heroSubtitle}>
              Dokumentáció, tudásbázis és oktatóanyagok WordPress fejlesztőknek és felhasználóknak
            </p>
            <div className={styles.heroButtons}>
              <Link
                className={clsx("button button--lg", styles.primaryButton)}
                to="/docs/dokumentacio/"
              >
                <FontAwesomeIcon icon="fa-duotone fa-book" />
                Dokumentáció
              </Link>
              <Link
                className={clsx("button button--lg", styles.secondaryButton)}
                to="/docs/tudasbazis/"
              >
                <FontAwesomeIcon icon="fa-duotone fa-graduation-cap" />
                Tudásbázis
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <Link to="/docs/dokumentacio/hellotools/helloimg" className={styles.heroHighlight}>
              <div className={styles.heroHighlightBadge}>
                <FontAwesomeIcon icon="fa-solid fa-sparkles" /> Újdonság
              </div>
              <div className={styles.heroHighlightIcon}>
                <FontAwesomeIcon icon="fa-regular fa-bee" />
              </div>
              <h3 className={styles.heroHighlightTitle}>
                Hello<span style={{ color: "#ffd43b" }}>IMG</span>
              </h3>
              <p className={styles.heroHighlightDesc}>
                Képoptimalizálás korlátlanul
              </p>
              <span className={styles.heroHighlightAction}>
                Tudj meg többet <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

const features = [
  {
    title: "HelloPack",
    icon: "fa-duotone fa-parachute-box",
    description: "Prémium WordPress bővítmények és témák kezelése egyszerűen, egy helyről.",
    link: "/docs/dokumentacio/hellopack",
    color: "#23d160",
  },
  {
    title: "HelloTools",
    icon: "fa-sharp-duotone fa-solid fa-screwdriver-wrench",
    description: "Átfogó eszközkészlet WordPress fejlesztőknek. Képoptimalizálás, cron és még sok más.",
    link: "/docs/dokumentacio/hellotools",
    color: "#3273dc",
  },
  {
    title: "Üzemeltetés",
    icon: "fa-duotone fa-server",
    description: "WordPress karbantartás és üzemeltetés szolgáltatásaink dokumentációja.",
    link: "/docs/dokumentacio/uzemeltetes-karbantartas",
    color: "#ff6600",
  },
  {
    title: "HelloIMG",
    icon: "fa-regular fa-bee",
    description: "Képoptimalizáló API. Akár 90%-os méretcsökkentés, WebP és AVIF támogatás.",
    link: "/docs/dokumentacio/hellotools/helloimg",
    color: "#ffd43b",
  },
];

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Szolgáltatásaink</h2>
          <p className={styles.sectionSubtitle}>
            Fedezd fel a HelloWP termékeit és szolgáltatásait
          </p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <Link key={idx} to={feature.link} className={styles.featureCard}>
              <div
                className={styles.featureIcon}
                style={{ background: `${feature.color}15`, color: feature.color }}
              >
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
              <span className={styles.featureLink}>
                Részletek <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const resources = [
  {
    title: "Fejlesztői eszközök",
    icon: "fa-duotone fa-code",
    description: "Modern WordPress fejlesztői eszközök és workflow-k.",
    link: "/docs/tudasbazis/fejlesztoi-eszkozok",
  },
  {
    title: "Oktatóanyagok",
    icon: "fa-duotone fa-video",
    description: "Lépésről lépésre útmutatók WordPress fejlesztéshez.",
    link: "/docs/tudasbazis/oktatoanyagok",
  },
  {
    title: "Hibaelhárítás",
    icon: "fa-duotone fa-wrench",
    description: "Gyakori WordPress hibák megoldása és javítása.",
    link: "/docs/tudasbazis/hibaelharitas",
  },
  {
    title: "Hasznos eszközök",
    icon: "fa-duotone fa-toolbox",
    description: "Ajánlott szoftverek és eszközök webfejlesztéshez.",
    link: "/docs/tudasbazis/hasznos-eszkozok",
  },
];

function ResourcesSection() {
  return (
    <section className={styles.resources}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Tudásbázis</h2>
          <p className={styles.sectionSubtitle}>
            Tanulj és fejlődj a WordPress ökoszisztémában
          </p>
        </div>
        <div className={styles.resourcesGrid}>
          {resources.map((resource, idx) => (
            <Link key={idx} to={resource.link} className={styles.resourceCard}>
              <div className={styles.resourceIcon}>
                <FontAwesomeIcon icon={resource.icon} />
              </div>
              <div className={styles.resourceContent}>
                <h3 className={styles.resourceTitle}>{resource.title}</h3>
                <p className={styles.resourceDescription}>{resource.description}</p>
              </div>
              <FontAwesomeIcon icon="fa-solid fa-chevron-right" className={styles.resourceArrow} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqItems = [
  {
    icon: "fa-duotone fa-file-invoice",
    title: "Hol találom a számlát?",
    description: "A számlákat a HelloConsole oldalon érheted el bármikor.",
    link: "/docs/sugo/szamlazas-es-elofizetesek/hol-talalom-a-szamlat",
  },
  {
    icon: "fa-duotone fa-credit-card",
    title: "Bankkártya módosítása",
    description: "Console → Fizetési módok → Új bankkártya hozzáadása.",
    link: "/docs/sugo/szamlazas-es-elofizetesek/elofizeteshez-kapcsolodo-kartya-csereje",
  },
  {
    icon: "fa-duotone fa-repeat",
    title: "Csomagváltás",
    description: "Az előfizetésed csomagját bármikor módosíthatod.",
    link: "/docs/sugo/szamlazas-es-elofizetesek/elofizetes-csomagvaltas",
  },
  {
    icon: "fa-duotone fa-link-simple-slash",
    title: "Lejárt hivatkozás hiba",
    description: "A tárhelybeállítások problémáját orvosolja.",
    link: "/docs/tudasbazis/hibaelharitas/wordpress/a-kovetett-hivatkozas-ervenyessege-lejart",
  },
  {
    icon: "fa-duotone fa-paintbrush-pencil",
    title: "Hiányzó style.css",
    description: "Nem WordPress sablont próbálsz telepíteni.",
    link: "/docs/tudasbazis/hibaelharitas/wordpress/sablon-telepitesi-hiba",
  },
  {
    icon: "fa-duotone fa-boxes-stacked",
    title: "Bővítmény telepítési hiba",
    description: "Érvénytelen bővítmények hibaüzenet megoldása.",
    link: "/docs/tudasbazis/hibaelharitas/wordpress/bovitmeny-telepitesi-hiba",
  },
];

function FAQSection() {
  return (
    <section className={styles.faq}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Gyakran feltett kérdések</h2>
          <p className={styles.sectionSubtitle}>
            Gyors válaszok a leggyakoribb kérdésekre
          </p>
        </div>
        <div className={styles.faqGrid}>
          {faqItems.map((item, idx) => (
            <Link key={idx} to={item.link} className={styles.faqCard}>
              <div className={styles.faqIcon}>
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <h4 className={styles.faqTitle}>{item.title}</h4>
              <p className={styles.faqDescription}>{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Csatlakozz a közösséghez</h2>
          <p className={styles.ctaDescription}>
            Kérdésed van? Segítségre van szükséged? Csatlakozz a Discord szerverünkhöz!
          </p>
          <div className={styles.ctaButtons}>
            <Link
              to="/docs/kozosseg/discord"
              className={clsx("button button--lg", styles.ctaButton)}
            >
              <FontAwesomeIcon icon="fa-brands fa-discord" />
              Discord szerver
            </Link>
            <Link
              to="/docs/kozosseg/facebook"
              className={clsx("button button--lg", styles.ctaButtonSecondary)}
            >
              <FontAwesomeIcon icon="fa-brands fa-facebook" />
              Facebook csoport
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="HelloWP Hub"
      description="HelloWP Dokumentáció és Tudásbázis - WordPress fejlesztőknek és felhasználóknak"
    >
      <HeroSection />
      <main>
        <FeaturesSection />
        <ResourcesSection />
        <FAQSection />
        <CTASection />
      </main>
    </Layout>
  );
}
