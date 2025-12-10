---
title: "WooCommerce Product Bundles"
description: "Csomagtermékek létrehozása és értékesítése rugalmas árazással, készlet- és szállítási szabályokkal WooCommerce-ben."
sidebar_label: "WooCommerce Product Bundles"
---

## Mi ez és milyen problémát old meg?

A WooCommerce Product Bundles egy prémium kiterjesztés, ami új, **Product Bundle** terméktípust ad az áruházadhoz. Ezzel több meglévő terméket (simple, variable, előfizetéses) egyetlen, jól kommunikálható csomagként adhatsz el. A bővítmény megoldja a több SKU összehangolt értékesítését: rugalmasan árazhatsz, pontos marad a készlet, testreszabhatod a szállítást, és profi megjelenést kapsz kosárban és rendelésben. Támogatja a **blokk-alapú kosár/pénztár** megoldásokat és a **HPOS** adatkezelést is.

## Hogyan működik?

Új termék létrehozásakor válaszd a **Product Bundle** típust, majd add hozzá a csomag tételeit meglévő katalóguscikkekből. Minden tételhez részletes szabályokat állíthatsz be, a teljes csomagra pedig önálló árképzést, készlet- és szállítási logikát alkalmazhatsz.

### Fő funkciók, érthetően

- **Csomag-összeállítás**
  - Helyezz a csomagba tetszőleges számú simple, variable vagy subscription terméket.
  - Engedélyezd ugyanazon termék/variáció többszörözését.
  - Adj meg **min/max mennyiségeket** tételenként és a teljes csomagra (**Bundle Size**).
  - Tegyél tételeket **opcionálissá**, állíts be **alapértelmezett variációkat** és szűrd a választható variációkat.

- **Árazás**
  - Használhatsz **csomagszintű alapárat**, vagy megtarthatod a tételenkénti árakat (**Priced Individually**) – akár **%-os kedvezménnyel**.
  - A tételárak **láthatóságát** külön kapcsolhatod (pl. csak csomagár jelenjen meg).
  - Ingyenes kiegészítővel elérhető **lépcsőzetes mennyiségi kedvezmény** (Bulk Discounts).

- **Megjelenítés és kosárélmény**
  - Többféle **layout** és űrlap-elhelyezés a termékoldalon.
  - A kosárban és rendelésben a csomag **szülő/gyerek sorokra** bomlik, átlátható csoportosítással.
  - A konfigurálható csomagok a kosárból **utólag szerkeszthetők** (**Edit in Cart**).

- **Ajánlások**
  - **Bundle‑Sells**: mutass „gyakran együtt vásárolt” kiegészítőket közvetlenül a csomag termékoldalán, akár kedvezménnyel.

- **Készletkezelés**
  - Vásárláskor az összetevők **valódi készlete** csökken.
  - Ha kevés az egyik komponens, a csomag **készlethiányos** lesz – nincs túlrendelés.

- **Szállítás és súlykezelés**
  - **Assembled/unassembled** logika: a csomagot egyben vagy elemeire bontva kezeled.
  - Tételek külön szállítása (**Shipped Individually**) szükség esetén.
  - A csomag lehet **virtuális**, és a súlyok/terjedelmek **aggregálhatók** vagy tételekre oszthatók.

- **Integrációk és fejlesztői eszközök**
  - Hivatalos támogatás a blokkos kosár/pénztárhoz és a HPOS-hoz.
  - Ingyenes mini-bővítmények: **Bulk Discounts**, **Variation Bundles**.
  - Ajánlott kiegészítők: **Product Add‑Ons** (egyedi mezők), **All Products for Woo Subscriptions** (előfizetéses értékesítés csomagokkal).
  - REST API, dedikált objektumok (pl. WC_Product_Bundle, WC_Bundled_Item) és optimalizált adatstruktúrák nagy katalógusokhoz.

## Gyakorlati példák

- **Ajándékdoboz – „válassz 3 terméket 10-ből”**
  - Állíts be **Bundle Size** min/max = 3.
  - Tételek **opcionálisak**, min=0, max=1, variációk szűkítve.
  - Árazás: tételenkénti ár + **%-kedvezmény**, vagy fix csomagár.

- **Összeszerelt termék (pl. gördeszka)**
  - Kötelező komponensek: lap, tengelyek, kerekek.
  - Szállítás: **assembled** és/vagy tételek **Shipped Individually** a reális díjszámításhoz.
  - Készlet: a részegységek készlete pontosan csökken.

- **Volumen csomag (6‑pack, 12‑pack)**
  - Tételenkénti ár + **lépcsőzetes kedvezmény** (Bulk Discounts).
  - Cél: kosárérték növelése anélkül, hogy kézzel kombinálnál kuponokat.

- **„Frequently bought together” kiegészítők**
  - **Bundle‑Sells** a fő termék mellett: tok, kábel, biztosítás – egy kattintással hozzáadható.

- **Előfizetéses doboz**
  - Csomag + előfizetéses logika kombinálása a visszatérő bevételért.

### Példa konfiguráció (vázlat)

```
Csomag:
  Tételek:
    - Termék: "Bögre"
      Priced Individually: igen (-10%)
      Min/Max: 1/2
      Opcionális: igen
    - Termék: "Kávé 250g"
      Variáció: "Pörkölés: közepes"
  Bundle Size: min 3, max 3
  Szállítás: unassembled, shipped individually
  Kosár-szerkesztés: engedélyezve
```

## Előnyök és értékajánlat

- **Egyszerű merchandising**: több SKU egyetlen, jól kommunikálható termékoldalon, saját képekkel és leírással.
- **Rugalmas árképzés**: csomagár, tételár-megőrzés, %-kedvezmények, volumenkedvezmény – kuponozás nélkül.
- **Készletpontosság**: automatikus levonás komponensszinten; nincs túlrendelés.
- **Jobb vásárlói élmény**: csomag-szerkesztés a kosárban, kiegészítő ajánlások.
- **Skálázhatóság**: HPOS, blokkos kosár/pénztár, dedikált adatmodellek.
- **Fejlesztőbarát**: REST/objektum API-k, testreszabható megjelenítés és logika.

## Kinek ajánlott?

- **Ajándék- és élelmiszerboltok**, borászatok, kávépörkölők: válogatásdobozok, pick‑and‑mix.
- **Elektronika/DIY**: több komponensből álló, készletszinten kezelt termékek.
- **Digitális tartalomszolgáltatók**: letölthető csomagok, pack-ek.
- **Előfizetéses boxok**: rendszeres csomagküldés kombinált árazással.
- **B2B és promóciók**: volumen csomagok, akciók, upsell csomagok.

## Mikor ezt, mikor mást?

- Válaszd a **Product Bundles** bővítményt, ha a tartalom többnyire statikus, és „könnyű” konfiguráció kell (opcionális tételek, mennyiségi korlátok).
- Ha lépésről lépésre, sok opcióval vezetett konfigurátort szeretnél (pl. komplex PC‑építő), akkor a **Composite Products** lehet a jobb választás.

## Követelmények és kompatibilitás

Friss WordPress, WooCommerce és PHP környezet ajánlott. A bővítmény támogatja a **HPOS** rendelés-tárolást és a **Cart & Checkout Blocks** használatát, így modern, nagy terhelésű áruházakban is megbízhatóan működik.

--- 

Szükséged van részletes beállítási lépésről lépésre útmutatóra, vagy összehasonlításra a Composite Products és Mix and Match megoldásokkal? Szívesen segítek a konkrét use case-ed alapján.