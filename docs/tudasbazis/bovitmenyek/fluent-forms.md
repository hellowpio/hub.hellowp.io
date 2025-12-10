---
title: "Fluent Forms"
description: "Modern, gyors WordPress űrlapkészítő: drag-and-drop, feltételes logika, fizetések, riportok és 60+ integráció – kódolás nélkül."
sidebar_label: "Fluent Forms"
---

## Mi ez és milyen problémát old meg?

A Fluent Forms egy könnyű, mégis vállalati szintű WordPress űrlapkészítő. Drag-and-drop felületen, kódolás nélkül állíthatsz össze mindent a legegyszerűbb kapcsolatfelvételi űrlaptól a fizetési, kérdőív-, kvíz- vagy kalkulátor-űrlapokig. Kiemelten gyors: egy alap űrlap tipikusan kevesebb mint ~30 KB CSS/JS-t tölt be, így nem lassítja az oldalad.

Mit old meg? Lerövidíti a fejlesztési időt, csökkenti a karbantartási terhet, javítja a konverziót (conversational és több-lépéses űrlapok), biztosítja az adatminőséget (validációk, spamvédelem), és közvetlenül csatlakozik a marketing/üzleti rendszereidhez.

## Hogyan működik röviden

- Hozz létre űrlapot a vizuális szerkesztőben vagy az AI Form Builderrel.
- Állíts be feltételes logikát, érvényesítéseket, értesítéseket/megerősítéseket.
- Kapcsold be a fizetést (Stripe a free kiadásban is), és válassz gateway-t.
- Embedeld Gutenberg blokkal, rövidkóddal vagy page builderrel.
- Kövesd a beküldéseket, exportálj és készíts riportokat; csatlakoztasd integrációkhoz.

```
// Rövidkód beágyazás
[fluentform id="123"]
```

```php
<?php echo do_shortcode('[fluentform id="123"]'); ?>
```

## Fő funkciók, érthetően

- **Drag‑and‑drop és sablonok**: Mezőket húzással rendezel, előre gyártott sablonokkal pillanatok alatt indíthatsz új űrlapot.
- **Feltételes logika**: Mezők, értesítések és megerősítések megjelenítése/elrejtése szabályok alapján. AND/OR csoportokkal összetett „ha–akkor” folyamatokat építhetsz (pl. eltérő útvonal fizetési mód szerint).
- **Conversational Forms**: Kérdésenkénti, beszélgetésszerű élmény, ami csökkenti a lemorzsolódást. Megosztható közvetlen linkkel vagy beágyazva.
- **AI Form Builder**: Leírod, mire kell az űrlap, és a rendszer felépíti a mezőket, logikát és validációkat – alapfunkcióként elérhető.
- **Fizetések**: A free kiadásban is kapsz Stripe mezőket (1,9% platformdíj). A Pro több fizetési szolgáltatót ad (pl. PayPal, Square, Razorpay, Paddle) és platformdíj nélkül dolgozik. Támogatott egyszeri/ismétlődő díjak.
- **Haladó mezők és modulok (Pro)**: Fájl- és képfeltöltés, több-lépéses űrlapok, telefonszám maszkolás, ismétlődő csoportok, láncolt/dinamikus listák, számítási mezők (kalkulátorok), kvíz/survey pontozással, készlet (inventory) és globális készlet, admin jóváhagyás, dupla opt‑in, geolokáció, SMS, egyedi validációk.
- **Biztonság és megfelelőség**: Honeypot, reCAPTCHA v2/v3, hCaptcha, Cloudflare Turnstile, Akismet; dedikált GDPR‑hozzájárulás mező.
- **Adatkezelés és riportok**: Vizuális grafikonok, export CSV/Excel/ODS/JSON formátumba, import, részleges mentések (partial entries), szerkesztési előzmények.
- **WordPress‑integrációk**: Felhasználó-regisztráció és -frissítés, bejegyzés/CPT létrehozás beküldésből, Gutenberg blokk, kompatibilitás népszerű page builderekkel.
- **Migráció és üzemeltetés**: Egy kattintásos migrátor vezető form pluginekről, WP‑CLI parancsok tömegműveletekre.
- **60+ integráció**: CRM-ek, email marketing, táblázatok, automatizáció és együttműködési eszközök (pl. FluentCRM, Mailchimp, HubSpot, Google Sheets, Slack, Notion, Trello, Discord, WPML), valamint webhookok és fejlesztői API-k.

## Gyakorlati példák

- **Eseményregisztráció jegyértékesítéssel**: Több-lépéses űrlap, készletkorlát (helyek száma), Stripe/PayPal fizetés, automatikus visszaigazolás és részvételi e-mail, adatküldés táblázatba.
- **Lead‑generálás és hírlevél**: Feltételes mezők és routing alapján külön listákba, címkékbe kerülnek a leadek; dupla opt‑in és GDPR mező gondoskodik a megfelelőségről.
- **Kvíz és felmérés**: Kérdések pontozása, azonnali eredmény, vizuális riport az adminban.
- **Kalkulátor**: Hitel- vagy árkalkulátor számítási mezőkkel; a végösszeg mehet fizetési mezőbe.
- **Álláspályázat/portál**: Önéletrajz feltöltés, admin jóváhagyás, automatikus bejegyzés/CPT létrehozás, opcionális felhasználó-regisztráció.

## Ingyenes vs. Pro röviden

- **Ingyenes**: Alap mezők, drag‑and‑drop, mezőszintű feltételes logika, sablonok, Stripe fizetés 1,9% platformdíjjal, analitika és export, ütemezés/korlátozás, role manager, AI Form Builder.
- **Pro**: 55+ haladó mező és modul, kvíz/survey, készletkezelés, admin jóváhagyás, feltételes megerősítések és útvonalak, felhasználó‑regisztráció, bejegyzés/CPT, geolokáció, SMS, 60+ integráció, több fizetési szolgáltató platformdíj nélkül.

## Előnyök és értékajánlat

- **Sebesség**: Minimalista asset‑terhelés, jobb betöltési idők és Core Web Vitals.
- **No‑code produktivitás**: Percek alatt összeraksz összetett folyamatokat is.
- **Magasabb konverzió**: Conversational, több-lépéses és feltételes útvonalak.
- **Kevesebb kézi munka**: Mély integrációk és webhookok automatizálnak.
- **Tiszta, biztonságos adatok**: Többrétegű spamvédelem és GDPR eszközkészlet.
- **Skálázhatóság**: Ugyanazzal a bővítménnyel lefedsz űrlapokat, fizetést, UGC-t és riportot.

## Kinek ajánlott?

- **Marketingesek és growth csapatok**: Gyors tesztelés, A/B logikák, integrációk.
- **Ügynökségek**: Sablonok, migrátor és CLI a hatékony üzemeltetéshez.
- **E‑kereskedők és szolgáltatók**: Fizetés, készletkorlát, foglalási jellegű űrlapok.
- **Nonprofit/oktatás**: Adománygyűjtés, pályázati űrlapok, felmérések.
- **Közösségi/portál projektek**: UGC, felhasználó‑regisztráció, szerkesztői jóváhagyás.
- **Fejlesztők/adminok**: Hookok, API-k, CLI, stabil ökoszisztéma.

## Gyors kezdés

1. Telepítsd és aktiváld a bővítményt a hivatalos könyvtárból.
2. Hozz létre új űrlapot sablonból vagy az AI Form Builderrel.
3. Add hozzá a mezőket, állíts be validációkat és feltételes logikát.
4. Konfiguráld az értesítéseket (email/SMS) és a megerősítési üzenetet.
5. Ha kell fizetés, kapcsold be a gateway-t és add meg a kulcsokat.
6. Kösd össze integrációkkal (CRM, táblázat, automatizáció).
7. Ágyazd be az űrlapot blokkal vagy rövidkóddal.
8. Tesztelj valós adatokkal, kapcsold be a spamvédelmet, publikáld.
9. Kövesd a riportokat, exportálj, és finomhangolj a konverzióért.

A Fluent Forms-t a WPManageNinja csapata fejleszti. Egyetlen bővítménnyel kapsz no‑code űrlapkészítést, nagy teljesítményt, fizetést, riportot és integrációkat – mindezt úgy, hogy közben könnyen skálázható marad a folyamatod.