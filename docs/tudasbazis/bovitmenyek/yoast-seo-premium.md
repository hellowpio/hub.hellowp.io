---
title: "Yoast SEO Premium"
description: "A Yoast SEO fizetős kiadása WordPresshez, amely automatizálja a technikai SEO-t, AI‑val segíti a tartalom-optimalizálást, és munkafolyamatokat ad a jobb láthatóságért."
sidebar_label: "Yoast SEO Premium"
---

## Mi ez és milyen problémát old meg?

A **Yoast SEO Premium** a népszerű ingyenes Yoast SEO fejlettebb, előfizetéses változata WordPresshez. Úgy segít, hogy:
- automatizálja a **technikai SEO** döntő részét (sémák, oldaltérképek, IndexNow, mászás-optimalizálás),
- a szerkesztőben végigvezet a **tartalom-optimalizáláson** (kulcskifejezések, AI‑javaslatok, social snippetek),
- rendet tesz a **belső linkekben** és az **átirányításokban**, hogy ne veszíts rangsor- és forgalompontokat.

2025-ben a Premium előfizetés része a **Local SEO**, **Video SEO** és **News SEO** bővítmény is. A licenc jellemzően éves, egy webhelyre szól.

## Fő funkciók, érthetően

### Tartalom-optimalizálás és AI
- Akár **5 kulcskifejezést** adhatsz oldalanként. A Premium felismeri a **szinonimákat** és a **ragozott szóalakokat**, így természetesen írhatsz.
- Egy kattintással hozhatsz be **kapcsolódó kulcskifejezéseket** (Semrush integráció).
- Beépített **generatív AI** készít SEO címeket és meta leírásokat, és javaslatokat ad a tartalom finomítására. Az elemzések élőben mutatják, mit tegyél jobb olvashatóságért és relevanciáért.

### Belső hivatkozások és tartalomszerkezet
- **Intelligens belső link javaslatok** írás közben: a bejegyzés tartalma alapján ajánl releváns oldalakat.
- Gutenberg **Internal linking blokkok** (Aloldalak, Testvéroldalak, Kapcsolódó hivatkozások, Tartalomjegyzék) gyors beillesztéshez.
- **SEO Workouts**: vezetett „gyakorlatok” a **sarokkő‑tartalom** megerősítésére és az **árva tartalmak** feltárására/javítására. A bejegyzéslistában szűrőkkel dolgozhatsz.

### Átirányítás-kezelés
- A **Redirect Manager** automatikusan létrehozza az átirányítást, ha megváltoztatod a slugot vagy törölsz egy oldalt.
- Tömeges kezelés, **REGEX**, import/export, és több státuszkód: **301/302/307/410/451**.

### Közösségi megjelenés
- **Facebook** és **X (Twitter)** előnézet a szerkesztőben.
- Automatikus **Open Graph** címkék és testreszabható sablonok tartalomtípusonként – így egységes és kontrollált a social snippet.

### Technikai SEO és gyorsabb felfedezés
- **IndexNow**: azonnal jelzed a résztvevő keresőknek (pl. Bing), ha új vagy frissített URL születik.
- **Crawl optimization**: kikapcsolhatod a felesleges feedeket/linkeket, tisztíthatod a belső keresési spameket és URL‑paramétereket (akár 301‑gyel), kímélve a robotokat és a szervert.
- **Bot Blocker**: egy kapcsolóval tiltod az AI‑botokat (pl. GPTBot, CCBot, Google‑Extended) a robots.txt-ben.
- **llms.txt**: automatikus útmutató fájl nagy nyelvi modelleknek, hogy az asszisztensek a fontos tartalmaidat értsék és pontosan hivatkozzák.
- **Front‑end SEO Inspector**: az élő oldalon mutatja a meta címkéket, séma‑kimenetet, SEO/olvashatósági pontokat – kattintás nélkül átnézheted a kimenetet.

### Local/Video/News SEO – a Premiumban
- **Local SEO**: cégadatok, nyitvatartás, több telephely, Store Locator, térképek és LocalBusiness schema.
- **Video SEO**: automatikus VideoObject schema és videó‑oldaltérkép.
- **News SEO**: Google News kompatibilis hír‑oldaltérkép, Top Stories optimalizálás, kategória‑kizárások.

### Integrációk és kiegészítők
- **Semrush** (kulcskifejezés‑ötletek), **Wincher** (pozíciókövetés), **Elementor** (UI integráció), **Google Docs kiegészítő** (valós idejű SEO‑elemzés; a Premiumhoz 1 felhasználói ülés jár).
- **Mastodon‑ellenőrzés**: rel="me" és sameAs beállítás a pontos márka‑összekapcsoláshoz.

### Támogatás és oktatás
- **24/7 prémium támogatás** és teljes hozzáférés a **Yoast SEO Academy** összes kurzusához.

## Gyakorlati példák

### 1) Tartalomkészítés menete
1. Add meg a fő és kapcsolódó **kulcskifejezéseket**.
2. Kérj **AI meta címet/leírást**, finomítsd az ajánlások alapján.
3. Illeszd be a javasolt **belső linkeket**, és rakj **Tartalomjegyzék** blokkot.
4. Ellenőrizd a **Facebook/X előnézetet**.
5. A **Front‑end SEO Inspectorral** nézd át a meta és schema kimenetet.
6. Publikáláskor az **IndexNow** ping gondoskodik a gyors jelzésről.

### 2) Site-karbantartás
- Futtasd az **Orphaned content** workoutot → linkelj, irányíts át vagy noindexeld a cikkeket.
- Finomhangold a **Crawl settings** beállításait és kapcsold a **Bot Blockert**.
- Kövesd a fő kulcskifejezéseket **Wincherrel**.

### 3) Helyi vállalkozás
- Add meg a telephelyeket, **nyitvatartást**, ágyazd be a térképet, és engedélyezd a **LocalBusiness schemát**. A Store Locator segít a felhasználóknak megtalálni a legközelebbi egységet.

## Példák kimenetekre

Robots.txt AI‑bot tiltás:
```
User-agent: GPTBot
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Google-Extended
Disallow: /
```

Egyszerű llms.txt példa:
```
# Fontos tartalmak LLM-eknek
priority:
  - /rolunk/
  - /szolgaltatasok/
  - /araink/
guidelines:
  summarize: prefer canonical pages, avoid tag archives
```

## Előnyök és értékajánlat

- **Időmegtakarítás**: AI meta‑generálás, automatizált redirectek és IndexNow csökkenti a kézi munkát.
- **Kisebb hibakockázat**: a Workouts és a Redirect Manager megfogja a tipikus SEO‑bakikat (404, árva tartalom).
- **Gyorsabb felfedezés**: az IndexNow és a crawl‑optimalizálás felgyorsítja az indexelést, csökkenti a felesleges robotforgalmat.
- **Egységes megjelenés**: social snippet sablonokkal és schema‑kimenettel konzisztens a márkaprezentáció.
- **AI‑korszak kompatibilitás**: llms.txt és Bot Blocker feletti kontroll a tartalomhasználat és márkareprezentáció érdekében.

## Kinek ajánlott?

- **Tartalomkészítők és szerkesztőségek**: gyors, vezetett optimalizálás és belső linkelés.
- **KKV-k, több telephellyel**: Local SEO kész csomagban.
- **Videós és híroldalak**: Video/News SEO automatizmusokkal.
- **Ügynökségek**: skálázható munkafolyamatok, import/export, REGEX átirányítások.
- **Technikai SEO‑felelősök**: crawl‑takarítás, Bot Blocker, front‑end inspector.

## Rendszerkövetelmények, telepítés, licenc

- WordPress: a legutóbbi két főverzió támogatott; PHP 7.4+; MySQL 5.6+/MariaDB 10.0+; javasolt 256 MB memória.
- A nyelvi elemzések több nyelven működnek, **magyarul** is.
- Telepítés: vásárlás után letöltöd, aktiválod; az ingyenes Yoast SEO beállításai **automatikusan migrálódnak** a Premiumba. A licenc **1 domainre** érvényes; stagingen használhatod.
- Ár: jellemzően éves díj, egy webhelyre. A licenc tartalmazza a Yoast SEO **Google Docs kiegészítő** 1 felhasználói ülését.

## Megjegyzés WooCommerce-hez

A **Yoast WooCommerce SEO** külön bővítmény, a Premiumra épül és külön licencet igényel.

---

Megjegyzés: A bővítményt a holland **Yoast BV** fejleszti; a vállalat a **Newfold Digital** csoport tagja.