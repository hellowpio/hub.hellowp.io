---
title: "MailChimp for WordPress Multilingual"
description: "A WPML és a Mailchimp for WordPress közötti hivatalos összekötő, amellyel az MC4WP feliratkozó űrlapok és üzenetek teljes körűen fordíthatók és egységesen kezelhetők."
sidebar_label: "MailChimp for WordPress Multilingual"
---

## Mi ez és mit old meg?

A **MailChimp for WordPress Multilingual (MC4WP Multilingual)** egy „glue” bővítmény, amely összeköti a WPML-t és a Mailchimp for WordPress-t (MC4WP). Ennek köszönhetően a MC4WP-ben létrehozott feliratkozó űrlapokat és az ezekhez tartozó üzeneteket (siker-, hiba-, visszaigazoló üzenetek) **ugyanabban a WPML fordítási folyamatban** tudod kezelni, mint a többi webhelytartalmat. Megoldja azt a tipikus problémát, hogy az űrlapok „nem fordíthatók”, és biztosítja, hogy a látogatók mindig a **saját nyelvükön** lássák az űrlapokat.

## Fő funkciók részletesen

### Fordítható MC4WP űrlapok és üzenetek
- A bővítmény beemeli a MC4WP űrlapokat a WPML látóterébe, így a mezőcímkék, gombfeliratok, siker- és hibaüzenetek **nyelv szerint fordíthatók**.
- A fordításokat a szokásos WPML eszközökkel végzed, így minden változtatás **központilag, következetesen** kezelhető.

### Fordítási munkafolyamat a WPML-ben
- A „Mailchimp Sign‑up Forms” tartalomtípus megjelenik a WPML fordítási felületén, ahonnan az űrlapokat kijelölheted és fordításra küldheted.
- Támogatja a **manuális** és az **automatikus fordítást** is, fordítási memóriával és jóváhagyási folyamattal.

### Nyelvváltó és megjelenítés
- A WPML nyelvváltójával a felhasználó **a megfelelő nyelvi változatot** kapja az oldalon elhelyezett űrlapból.
- Nem kell több külön űrlapot beágyaznod oldalanként – a bővítmény **nyelvfüggően** rendereli ugyanazt az űrlapot.

### Kiegészítő: nyelvenkénti audience és nyelvmező
- A külön telepíthető „MC4WP: WPML Integration” addon lehetővé teszi, hogy:
  - **nyelvenként másik Mailchimp audience**-et rendelj a webhelyhez, és
  - a feliratkozó **nyelvét automatikusan** elküldd Mailchimpbe (pl. szegmentáláshoz).
- Ezzel a kampányokban könnyen célozhatsz **nyelvi szegmensekre** anélkül, hogy bonyolult manuális címkézést végeznél.

## Telepítés és első lépések

1. Telepítsd és aktiváld az előfeltételeket: **WPML**, **WPML String Translation**, **Mailchimp for WordPress**.
2. Telepítsd és aktiváld a **MailChimp for WordPress Multilingual** bővítményt (WPML-fiókodból).
3. Az MC4WP-ben csatlakoztasd a Mailchimp-fiókodat és hozd létre az **űrlapokat** (MC4WP → Forms).
4. Nyisd meg a WPML fordítási felületét, keresd a **Mailchimp Sign‑up Forms** elemet, jelöld ki az űrlapokat és **fordítsd le**.
5. Opcionális: telepítsd az **MC4WP: WPML Integration** addont, és állíts be nyelvenkénti **audience**-t, illetve kapcsold be a **nyelvküldést** Mailchimp felé.

```text
Telepítési checklista
- WPML + String Translation aktív
- MC4WP beállítva (API-kulcs, űrlapok)
- MC4WP Multilingual aktiválva
- Fordítások elkészítve WPML-ben
- (Opcionális) MC4WP: WPML Integration beállítva: audience per language + nyelv mező
```

## Gyakorlati példák

- Kétnyelvű marketing oldal: ugyanazt az űrlapot illeszted be több oldalra. A MC4WP Multilingual gondoskodik róla, hogy a gombfelirat („Feliratkozás/Subscribe”), a hibák és köszönetüzenetek **mindig a látogató nyelvén** jelenjenek meg.
- WooCommerce checkout: a „Hírlevélre feliratkozom” jelölő fordított, az MC4WP integráció továbbítja a hozzájárulást. Az addon automatikusan elmenti a **vásárló nyelvét** a Mailchimpben, így a rendelés utáni sorozat e-mailjei **nyelvhelyesek** lesznek.
- Nyelvenként eltérő audience: magyar látogatók a HU-audience-be kerülnek, angolok az EN-audience-be. A kampányoknál elég **audience**-re vagy **nyelv mezőre** szűrnöd.

## Előnyök és értékajánlat

- **Időmegtakarítás**: az űrlapok fordítása ugyanabban a rendszerben történik, mint a többi tartalom – nincs kézi duplikálás vagy „nyelvi klónozás”.
- **Következetesség**: minden nyelven azonos űrlaplogika és UX, kevesebb hibalehetőség.
- **Pontos szegmentálás**: a feliratkozó **nyelve** elérhető a Mailchimpben, így nő a relevancia és a konverzió.
- **Skálázhatóság**: új nyelvek hozzáadása gyors – csak lefordítod az űrlapokat, és kész.
- **Kompatibilitás**: MC4WP-integrációkkal (pl. űrlapbővítmények, WooCommerce) együtt megőrzi a **nyelvi kontextust** a teljes feliratkozási folyamatban.

## Kinek ajánlott?

- **Többnyelvű weboldalak** tulajdonosainak, akik egységes, fordítható feliratkozási élményt akarnak.
- **E-kereskedőknek**, akik nyelv szerinti sorozatokat, promókat, kosárelhagyó kampányokat futtatnak.
- **Marketingcsapatoknak és ügynökségeknek**, akik skálázva kezelik a fordításokat és a szegmentálást.
- **Nonprofitoknak és kiadóknak**, ahol a nyelvi elérés kritikus a közönségépítéshez.

## Tippek és bevált gyakorlatok

- Tervezd meg előre, hogy a nyelvi szegmentálást **audience**, **címkék** vagy **mezőértékek** alapján végzed. Kevés nyelvhez elegendő lehet egy audience + „language” mező.
- Tartsd egységesen az űrlapmezőket minden nyelven, és csak a **szövegeket** fordítsd – ez egyszerűsíti a karbantartást.
- Ha prémium MC4WP-funkciókat (pl. e‑commerce szinkron) használsz, ellenőrizd, hogy a nyelv **végig jelen van** a folyamatban (pl. checkout, user sync).

### Megjegyzés

A többnyelvű űrlapkezeléshez a MC4WP + MC4WP Multilingual kombináció javasolt. Egyes, Mailchimphez készült más bővítmények nem tárolják az űrlapokat a WordPressben, ezért a fordításuk nehézkes vagy nem támogatott.

---

A MC4WP Multilingual a legegyszerűbb módja annak, hogy a feliratkozó űrlapjaid és üzeneteid minden nyelven professzionálisan, ugyanabban a fordítási folyamatban éljenek – és ha kell, a feliratkozók nyelvét is magabiztosan vidd tovább a hírlevél-szegmentálásba.