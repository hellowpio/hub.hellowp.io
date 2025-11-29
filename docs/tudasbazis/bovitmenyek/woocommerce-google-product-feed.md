---
title: "WooCommerce Google Product Feed"
description: "Prémium WooCommerce bővítmény valós idejű, mezőtérképezhető termék-, értékelés-, promóció- és helyi készlet feedekhez a Google Merchant Centerhez."
sidebar_label: "WooCommerce Google Product Feed"
---

## Mi ez és milyen problémát old meg?

A WooCommerce Google Product Feed egy prémium bővítmény, amellyel valós idejű termékfeedet készíthetsz a Google Merchant Center számára. A WooCommerce-termékeid adatait a Google által elvárt struktúrában adja át, így a katalógusod megjelenhet a Google felületein (free listings) és Shopping hirdetésekben. A bővítmény megoldja a tipikus elutasításokat (hiányzó GTIN/Brand, hibás kategória, rossz készlet/ár), és részletes kontrollt ad a beküldött mezők felett.

## Fő funkciók, érthetően

### Valós idejű feed és Scheduled fetch
- A feed on‑demand épül fel, a Merchant Center ütemezett letöltéssel használja. Így mindig friss ár és készlet kerül be, csökkentve a „price mismatch” típusú hibákat.
- Nagy katalógusnál bekapcsolhatod a **feed item caching** funkciót: a bővítmény háttérben előrendereli a feed-elemeket (WordPress cron), így gyors és stabil kiszolgálást kapsz.

Példa feed lekérdezésre:
```
?woocommerce_gpf=google
```
Részfeed generálás (paginálás nagy katalógusnál):
```
?woocommerce_gpf=google&gpf_start=0&gpf_limit=1000
```

### Mezőtérkép és adatforrások
- Több mint 50 Google-attribútum támogatott (kötelező és ajánlott mezők). A forrásokat rugalmasan állíthatod:
  - bolt‑szintű alapérték,
  - kategória‑szintű beállítás,
  - termék- és variációszintű érték,
  - meglévő WooCommerce mezők/attribútumok előtöltése.
- Extra Google mezőkhöz a bővítmény saját admin mezőket ad (pl. GTIN, MPN, brand, condition, age_group, gender, material, pattern, energy label, product_highlights), CSV‑importtal és REST API‑val tömegesen tölthetők.

### Feedtípusok
- **Google Product feed**: a teljes termékadat bázisod Shoppinghez és free listingshez.
- **Local Inventory feed**: bolt‑szintű készlet és ár megjelenítés helyi keresésekhez és Local Inventory Ads-hez.
- **Product Reviews feed**: csillagos értékelések társítása a termékekhez.
- **Promotions feed**: kuponok és akciók megjelenítése Shopping felületeken.
- **Bing Product feed**: katalógus továbbítása Microsoft csatornákra.

### Variációk kezelése
- Minden variáció önálló feed‑elem, saját árral, készlettel, attribútumokkal (pl. méret, szín). Variáció‑szinten is adhatsz meg feed‑specifikus értékeket (pl. GTIN per variáció).

### Szegmentálás és teljesítmény
- **Kategória‑szűrés**: készíthetsz tematikus feedeket (pl. csak cipők).
- **Részfeedek**: gpf_start/gpf_limit paraméterekkel paginálhatsz nagy katalógusokat.
- **Több pénznem és ország**: többpénznem‑bővítménnyel pénznem‑specifikus feedek készíthetők, így országonként releváns ár kerül a Merchant Centerbe.
- **Stabilitás**: a cache csökkenti a szerverterhelést és a letöltési időt.

### Integrációk és kompatibilitás
- Integrációk: Brands, Product Bundles, Composite Products, Cost of Goods, Min/Max Quantities, Multi‑Currency, Price By Country, Product Vendors, WooPayments többpénznem.
- Kompatibilis a **HPOS** adattárolással és a blokk‑alapú kosár/pénztár megoldásokkal.
- Nem a cél: előfizetéses és foglalás alapú terméktípusok (Google-szabályok miatt).

## Gyakorlati példák

- Divatwebshop: kategória‑szinten beállítod a **Google Product Category** mezőt („Apparel & Accessories”), bolt‑szinten a **brand** alapértéket, variációnként a **size** és **color** attribútumokat. Az **age_group** és **gender** mezőket kategória‑szinten adod meg. Eredmény: magasabb adatsűrűség, jobb Shopping minősítés.
- Elektronika: termékszinten töltöd a **GTIN/MPN** értékeket. Két fizikai bolt készletét a **Local Inventory** feedben küldöd, így a közeli felhasználók látják a helyi elérhetőséget és árat.
- Akciók és értékelések: hétvégi kuponok a **Promotions** feeden át jelennek meg a termékek alatt; a **Product Reviews** feedből származó csillagok növelik az átkattintást.
- Nemzetközi értékesítés: többpénznem‑bővítménnyel külön feedet készítesz EUR és GBP pénznemben, országonként érvényes árképzéssel.

## Beállítás röviden

1. Hozz létre Merchant Center fiókot, állítsd be az adó‑ és szállítási szabályokat.
2. A WooCommerce adminban (Settings > Product Feeds) másold ki a feed végpontot, és vedd fel a Merchant Centerben **Scheduled fetch** módban.
3. Válaszd ki és engedélyezd a szükséges mezőket, állíts be bolt‑ vagy kategória‑szintű alapértékeket.
4. Töltsd ki a hiányzó értékeket termék/variáció szinten; nagy mennyiségnél használj CSV‑importot.
5. Szükség esetén készíts szűkített vagy pénznem‑specifikus feedet; nagy katalógusnál kapcsold be a **feed item caching** opciót (WordPress cron szükséges).

## Előnyök, értékajánlat

- **Kevesebb elutasítás**: a Google‑elvárások komplett lefedése (GTIN, brand, kategória, állapot, elérhetőség).
- **Magasabb adatsűrűség**: extra mezők a jobb megjelenésekért és relevanciáért.
- **Mindig friss ár/készlet**: on‑demand feed + cache minimalizálja a mismatch hibákat.
- **Skálázhatóság**: részfeedek, kategória‑szűrés, gyors kiszolgálás nagy katalógusnál.
- **Ökoszisztéma‑előny**: integrációk a kulcs WooCommerce kiegészítőkkel.
- **Teljes kontroll**: több feed, finom mezőtérképezés, ország/pénznem szerinti publikálás.

## Kinek ajánlott?

- Közepes és nagy WooCommerce‑boltoknak, ahol kritikus a feed minősége és a skálázhatóság.
- Teljesítményorientált PPC‑csapatoknak, akik részletes attribútum‑szintű kontrollt akarnak.
- Nemzetközi értékesítőknek, több pénznemmel/országgal.
- Ügynökségeknek, több ügyfél katalógusát kezelve egységes, stabil folyamattal.
- Ha az ingyenes alapintegráció kevés finomhangolást ad, és szükséged van promóciós/értékelés/local inventory feedekre.

## Korlátok, megjegyzések

- A Google szabályai miatt nem listázhatsz előfizetéses vagy foglalás‑jellegű termékeket; ezekhez nincs támogatás.
- Nagy feedek generálása erőforrás‑igényes lehet; ezt a feed‑cache és a részfeedek megoldják, de WordPress cron beállítás szükséges.
- A többpénznemű feedek paraméterezése a használt pénznem‑bővítményed szabályait követi; érdemes országonként külön feedet fenntartani.