---
title: "JetFormBuilder HubSpot Action"
description: "JetFormBuilder Pro kiegészítő, amely HubSpot Post Submit Actiont ad az űrlapokhoz, és a beküldött adatokat automatikusan a HubSpot CRM-be szinkronizálja."
sidebar_label: "JetFormBuilder HubSpot Action"
---

## Mi ez és milyen problémát old meg?

A JetFormBuilder HubSpot Action egy Pro kiegészítő, amellyel a JetFormBuilder űrlapjaid beküldését követően automatikusan létrehozhatsz vagy frissíthetsz HubSpot kontaktokat. Megszünteti a manuális adatmásolást az űrlapok és a CRM között, csökkenti a hibázást, és azonnal a megfelelő értékesítési/marketing folyamatokba tereli a leadjeidet. A bővítmény a beküldött mezőket a HubSpot kontakt tulajdonságaihoz rendeli, társíthat cégeket, beállíthat kontakt‑tulajdonost és életciklus‑stádiumot, sőt feltételekhez is kötheted a szinkront.

## Hogyan működik? – Működési elv

A bővítmény egy új **Post Submit Action** típust ad: HubSpot. Amikor egy űrlap beküldése sikeres, a JetFormBuilder futtatja a hozzárendelt akciókat a megadott sorrendben és feltételek mellett. A HubSpot Action:

1. A globális HubSpot hitelesítésedet (ajánlott: **OAuth 2.0**) használja.
2. A **Fields Map** szerint párosítja az űrlapmezőket a HubSpot tulajdonságokhoz.
3. E‑mail alapján megpróbál meglévő kontaktot frissíteni, különben újat hoz létre.
4. Opcionálisan **céget társít** a kapcsolathoz.
5. Beállíthat **kontakt‑tulajdonost** és **életciklus‑stádiumot**.
6. Feltétel esetén csak akkor fut, ha a megadott logika igaz.

Az akciók láncolhatók és kombinálhatók, így a HubSpot‑szinkront más JetFormBuilder folyamatokkal is összehangolhatod.

## Fő funkciók, részletesen

- **HubSpot integráció mint Post Submit Action**  
  Az űrlap elküldése után fut. Egy űrlapon több akciód is lehet (pl. e‑mail értesítés + HubSpot szinkron), sorrenddel és feltételekkel.

- **Fields Map (mezőtérkép)**  
  Pontosan megadod, mely űrlapmező mely HubSpot mezőbe kerüljön. Az **e‑mail kötelező**, de felvehetsz további adatokat (keresztnév, vezetéknév, telefon, weboldal, egyedi tulajdonságok). Ez biztosítja az adatkonzisztenciát és a könnyű karbantartást.

- **Associated company (cég társítása)**  
  A kontaktot egy vagy több céghez kapcsolhatod. Használhatsz űrlapmezőt (pl. cégnév) vagy előre beállított azonosítót, a csapatod adatmodelljéhez igazítva.

- **Contact owner (kontakt‑tulajdonos)**  
  Kiválaszthatsz egy HubSpot felhasználót, akihez a kontakt hozzárendelődik. Így a lead azonnal felelőshöz kerül, rövidül a reakcióidő.

- **Lifecycle stage (életciklus‑stádium)**  
  Beállíthatod, hogy a kontakt mely tölcsérszakaszba kerüljön (pl. Subscriber, Lead, MQL, SQL, Opportunity, Customer). A HubSpot szabályai érvényesek (például bizonyos visszaléptetések korlátozottak lehetnek).

- **Use Global Settings (globális beállítások)**  
  A hitelesítést és alapparamétereket központilag megadhatod. Az űrlapok akciói ezt öröklik, így kevesebb a duplikált konfiguráció.

- **Feltételes futtatás**  
  Az akció csak akkor indul, ha a feltételek teljesülnek. Példa: csak akkor küldj adatot a HubSpotba, ha a „Hírlevél” jelölőnégyzet be van pipálva.

- **OAuth 2.0 engedélyezés**  
  Biztonságos, naprakész hitelesítés. A HubSpot régi API‑kulcsai kivezetésre kerültek, ezért új integrációkhoz OAuth vagy Private App token szükséges; a bővítmény az OAuth‑ot támogatja és javasolja.

- **Kompatibilitás**  
  JetFormBuilder (Gutenberg) szükséges. Általános rendszerkövetelmények: modern PHP és MySQL verziók; a HubSpot Action a JetFormBuilder Pro addonjai közé tartozik.

## Gyakorlati példák

- **Ajánlatkérő űrlap B2B oldalon**  
  Beküldéskor létrehozod/frissíted a kontaktot, a cégmező alapján társítod a vállalathoz, tulajdonosnak az értékesítő csapat vezetőjét állítod, életciklusnak MQL‑t adsz. Ha a „Sürgős” jelölőnégyzet igaz, külön listába sorolod egy későbbi automatizmushoz.

- **Eseményregisztráció**  
  Az e‑mail és név bekerül a HubSpotba, életciklus „Subscriber”, és egy előkészített marketing automatizmus indul. Ha a résztvevő megadja a céget, a kontakt a céghez is társul.

- **Pénztári/lead űrlap e‑kereskedelemben**  
  A sikeres lead beküldésekor a kontakt „Lead” vagy „Customer” státuszt kap. A hírlevél jelölőnégyzet határozza meg, hogy bekerül‑e a marketing listába.

## Telepítés és konfigurálás – gyors áttekintés

1. Telepítsd és aktiváld a JetFormBuildert és a Pro HubSpot addont.  
2. A JetFormBuilder beállításoknál engedélyezd a HubSpot kapcsolatot **OAuth 2.0‑val** (fejlesztői app, kötelező scope‑ok: contacts/companies ír‑olvas, owners olvas).  
3. Add meg a redirect URL‑t a HubSpot appban, majd azonosítsd a webhelyedet (Authorize/Connect).  
4. Nyisd meg az űrlapodat, add hozzá a **HubSpot** Post Submit Actiont, kapcsold be a **Use Global Settings** opciót.  
5. Állítsd be a **Fields Map**‑et, a cég társítását, a kontakt‑tulajdonost és az életciklus‑stádiumot.  
6. Opcionálisan adj meg **feltételt** az akció futásához.

Példa konfiguráció (szemléltetés):

```
Fields Map:
  email: { field: email }
  firstname: { field: first_name }
  lastname: { field: last_name }
Associated company: { field: company }
Contact owner: { static: "owner_id" }
Lifecycle stage: { static: "MQL" }
Use Global Settings: true
Condition: { when: newsletter == true }
```

## Előnyök és értékajánlat

- **Idő- és költségmegtakarítás**: megszűnik a manuális másolás, csökken a hibaarány.  
- **Gyors reakció**: tulajdonos és stádium azonnal beáll, automatizmusok indulnak.  
- **Skálázhatóság**: szabályozott, egységes adatáramlás a Fields Map révén.  
- **Rugalmasság**: feltételes futás, több akció kombinálása, globális beállítások.

## Kinek ajánlott?

- **Marketing és értékesítési csapatoknak**, akik űrlap‑leadeket dolgoznak fel HubSpotban.  
- **B2B szolgáltatóknak és ügynökségeknek**, ahol létfontosságú a cég‑kapcsolatok kezelése.  
- **E‑kereskedőknek**, akik checkout/lead űrlapjaikat CRM‑mel hangolják össze.  
- **No‑code/low‑code megoldásokat keresőknek**, akik gyorsan, fejlesztés nélkül akarnak CRM‑szinkront.

## Hibakeresés és tippek

- **OAuth hibák**: ellenőrizd a redirect URL‑t és a szükséges scope‑okat; ha hiányosak, a kapcsolat elutasítható.  
- **Hiányzó e‑mail**: az e‑mail kötelező a kontakt azonosításához; engedélyezd a mező validációját.  
- **Életciklus‑stádium**: a HubSpot korlátozhatja a visszaléptetést; ha nem alkalmazható, hagyd üresen vagy csak előreléptess.  
- **Tulajdonos hozzárendelés**: győződj meg róla, hogy a megadott owner létezik és elérhető azonosítóval.  
- **Mezőtérkép**: ha egy tulajdonság nem frissül, ellenőrizd a pontos belső mezőnevet és az adat típust (szöveg, szám, többértékű).  

## Gyors tények

- Követelmény: JetFormBuilder + Pro HubSpot addon.  
- Kulcselemek: HubSpot Post Submit Action, Fields Map, Associated company, Contact owner, Lifecycle stage, Use Global Settings, feltételes futtatás.  
- Ajánlott hitelesítés: OAuth 2.0.