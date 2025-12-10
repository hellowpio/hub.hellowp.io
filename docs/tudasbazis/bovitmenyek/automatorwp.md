---
title: "AutomatorWP"
description: "No‑code automatizáló bővítmény WordPresshez: pluginek és külső szolgáltatások összekötése triggerek és akciók alapján."
sidebar_label: "AutomatorWP"
---

## Mi ez és milyen problémát old meg?

Az **AutomatorWP** egy no‑code “automator” bővítmény WordPresshez. Segítségével összekötheted a webhelyed különböző bővítményeit és külső szolgáltatásait, majd **automatikus folyamatokat (workﬂow‑okat)** építhetsz: amikor valami történik (**trigger**), hajts végre egy vagy több műveletet (**action**). Így megszűnnek a “plugin‑szigetek”, nem kell kódot írnod, és rengeteg kézi, ismétlődő feladatot automatizálhatsz.

Példa: ha valaki vásárol egy terméket WooCommerce-ben, kapjon CRM‑taget, menjen neki egy késleltetett e‑mail, és irányítsd át egy köszönőoldalra.

## Hogyan működik röviden?

- **Automations (automatizmusok):** egy vagy több trigger + tetszőleges számú akció logikai feltételekkel.
- **Trigger → Action logika:** a kiváltó események teljesülésekor az akciók futnak. Triggerekhez rendelhetsz sorrendkényszert, ismétlésszámot és teljesítési limiteket.
- **Automatizmus‑típusok:**
  - **Logged‑in:** bejelentkezett felhasználók eseményeire reagál.
  - **Anonymous:** nem bejelentkezett látogatókhoz; beépített **user selector** dönt arról, hogy meglévő vagy új felhasználóra fussanak az akciók. (Egy automatizmusban itt 1 trigger használható.)
  - **All users:** műveletek lefuttatása minden vagy szűrt felhasználón.
  - **All posts:** műveletek lefuttatása minden vagy szűrt bejegyzésen.
  - **Import file:** CSV/Google Sheets alapján tömeges vagy ütemezett futtatás.

## Fő funkciók, érthetően

### Triggerek és akciók, vizuális szerkesztő
- Több száz **trigger/akció** több mint kétszáz integrációból (pl. WooCommerce, LearnDash, MemberPress, ACF, Gravity Forms, WPForms, BuddyPress/BuddyBoss, Popup Maker).
- Egy automatizmusban tetszőleges számú trigger és akció; beállítható **sorrend**, **hányszor** kell teljesülnie, és **limit**, hányszor futhat le.

### Feltételek és dinamikus adatok (tagek)
- **Filterek** bármely triggeren/akción, **AND/OR** logikával.
- **Flat condition** összehasonlító feltételekhez (érték, meta, szám, szöveg).
- **Tag‑rendszer:** dinamikus adatok átadása (felhasználó, oldal, dátum, meta, trigger/akció‑eredmények, függvény‑tagek). Így ugyanaz az automatizmus rugalmasan működik sok különböző helyzetben.

### Naplózás és átláthatóság
- Részletes **logok** triggerekhez, akciókhoz és teljes automatizmusokhoz.
- Láthatod a taghelyettesítés utáni konkrét értékeket, így könnyű a **hibakeresés**.

### Ütemezés és időzítés
- A Schedule Actions kiegészítővel akciónként külön **késleltetést** vagy **konkrét dátum/időpontot** állíthatsz be. Akár egy automatizmuson belül is eltérő ütemezést adhatsz az akcióknak.

### Speciális akciók fejlesztőknek
- **Redirect user to URL** (azonnali átirányítás).
- **Call a function** (saját PHP függvény hívása).
- **Run a WordPress hook** (tetszőleges hook futtatása paraméterekkel).

### Import/Export, megosztás
- Automatizmusok megosztása és költöztetése **URL‑alapú import/exporttal** – fájl nélkül.

### Integrációk és külső rendszerek
- 200+ WordPress‑integráció és számos külső platform (pl. Google Sheets/Calendar, Mailchimp, HubSpot, ActiveCampaign, Twilio, Zoom, X/Twitter, Instagram, Bluesky).
- Kétirányú **webhook** kommunikáció: adatküldés‑fogadás akár WordPress‑oldalak között is.

## Gyakorlati példák

- **E‑kereskedelem:** vásárlás után CRM‑tag hozzáadása, kupon kiosztása, késleltetett upsell e‑mail, dinamikus átirányítás.
- **Oktatás/LMS:** kurzus befejezésekor automatikus beiratás a következő kurzusra, rang/jutalom kiosztása, tagsági szint frissítése.
- **Közösség és tagság:** csoportcsatlakozásnál jogosultság módosítása, üdvözlő üzenet, profilmezők frissítése.
- **Adminisztráció:** régi posztok archiválása/törlése, szerzők értesítése, tömeges műveletek All posts/All users módokkal.
- **Marketing és adatkapcsolatok:** űrlapbeadásból felhasználó létrehozása/frissítése, CRM‑szinkron, táblázatokkal való adatcsere webhookkal.

Példa‑recept (logika szemléltetésére):

```
Automatizmus: "Kurzus után upsell"
Triggerek (sorrendben):
  1) Felhasználó befejez egy LearnDash kurzust
  2) Ugyanaz a felhasználó 5 csillagra értékel
Akciók:
  - Várj 2 napot
  - Küldj e-mailt kuponkóddal (tagek: {user_email}, {course_title})
  - Add hozzá a "VIP" CRM taget
  - Irányítsd át a "Következő kurzus" oldalra
```

## Előnyök és érték

- **Idő- és költségmegtakarítás:** a kézi, ismétlődő feladatok automatizálódnak.
- **No‑code rugalmasság:** összekötöd, amid van – külön fejlesztés nélkül.
- **Átláthatóság:** részletes logok, egyszerű hibakeresés.
- **Skálázhatóság:** tömeges műveletek felhasználókra, bejegyzésekre vagy importált adatokra.
- **Bővíthetőség:** fejlesztői hook‑ és függvényhívás akcióként; további add‑onok speciális igényekre.

## Kinek ajánlott?

- **Webáruház‑üzemeltetőknek:** vásárlói utak, címkézés, upsell/retenció.
- **E‑learning oldalaknak:** automatikus beiratások, jutalmazás, tanulói életciklus.
- **Közösségi/tagsági oldalaknak:** szerepkör‑ és hozzáféréskezelés eseményekhez kötve.
- **Marketingeseknek/ügynökségeknek:** CRM‑szinkron, űrlapos leadkezelés, integrációk gyorsan.
- **Webhely‑adminoknak:** tartalomkarbantartás, ütemezett háttérműveletek.
- **Fejlesztőknek:** saját hookok/funkciók futtatása az automator ökoszisztémában.

## Technikai és licencelési megjegyzések

- **Core ingyenes és nyílt forráskódú**, a WordPress bővítménykönyvtárból telepíthető.
- **PRO / Add‑on rendszer:** külön kiegészítőkkel bővíthető (például Webhooks, Schedule Actions, Calculator, Formatter, Generator, QR Code). A haladó funkciók és integrációk többsége add‑onokkal érhető el.
- **Anonymous automatizmusok:** automatizmusonként 1 trigger; a beépített **user selector** határozza meg, mely felhasználóra fussanak az akciók.
- **Haladó vezérlés:** AND/OR filterek, sequential triggers, required number of times, completion limits; naplók és tag‑rendszer a dinamikus adatokhoz.

Szeretnél konkrét, lépésről lépésre recepteket a saját bővítménykészletedhez (pl. WooCommerce + CRM vagy LearnDash + tagság)? Írj, és összeállítom a pontos automatizmust!