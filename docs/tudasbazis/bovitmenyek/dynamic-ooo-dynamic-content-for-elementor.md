---
title: "Dynamic.ooo - Dynamic Content for Elementor"
description: "Prémium Elementor-kiegészítő 150+ funkcióval: dinamikus adatok, űrlap-kiterjesztések (Stripe/PayPal, PDF), API/Web Scraper, listák, feltételes megjelenítés és teljesítményvezérlés – kódolás nélkül."
sidebar_label: "Dynamic.ooo - Dynamic Content for Elementor"
---

## Mi ez és milyen problémát old meg?

A Dynamic.ooo – Dynamic Content for Elementor egy prémium bővítmény, amely több mint **150 funkcióval** bővíti az Elementor lehetőségeit. Akkor hasznos, ha az Elementor alapból nem tud valamit: **egyedi mezők** (ACF/Pods/Meta Box) rugalmas megjelenítése, **relációk és repeater** kezelése, **űrlap-logika és fizetés**, **PDF-generálás**, **külső adatok betöltése**, illetve **feltételes megjelenítés** – mindez kódolás nélkül.

A plugin az Elementor saját dinamikus rendszerét terjeszti ki: több adatforrást, több szabályt és több widgetet ad, hogy összetett, adatvezérelt felületeket tudj építeni.

## Fő funkciók, és mit csinálnak

- **Dinamikus tartalom (ACF/Pods/Meta Box)**
  - Egyedi mezők, galériák, relációk és repeater mezők vizuális megjelenítése. Például kapcsolt bejegyzések listázása, ACF Gallery képeinek rácsa, Meta Box Relationship kiírása. WPML- és RTL-kompatibilitás.

- **Listák, archívumok, sablonozás**
  - **Dynamic Posts/Products/Archives**: rugalmas lekérdezések (taxonómia, meta, reláció), többféle skin és sablongenerálás. A **Dynamic Template** segítségével Elementor-sablonokat illeszthetsz be dinamikusan, így ugyanazzal a sablonnal tudsz különböző tartalomtípusokat kiszolgálni.

- **Űrlap-kiterjesztések (Elementor Pro Form)**
  - **Stripe/PayPal fizetés** WooCommerce nélkül; **feltételes e-mail/átirányítás**, **számolómező**, **tükrözött mező**, **aláírás mező**, **PDF csatolás** beküldés után. Összetett űrlapfolyamatok egyetlen űrlapból.

- **PDF és dokumentumkezelés**
  - **PDF Button**: oldalak/részek PDF-be nyomtatása több motorral.
  - **PDF Generator (Form)**: beküldéskor PDF készítése egy Elementor-sablonból, amelyet e-mailhez mellékelhetsz. A modern **HTML konverter** az ajánlott.

- **Külső adatok (API és Web Scraper)**
  - **Dynamic API**: REST/JSON-források beolvasása és megjelenítése Elementorban, mintha helyi tartalom lenne.
  - **Web Scraper**: ha nincs API, weboldalak tartalmát tudod kinyerni és formázni.

- **Személyre szabás és UX**
  - **Add to Favorites/Wishlist**: kedvencek/kívánságlista bejelentkezett felhasználóhoz vagy cookie-hoz kötve.
  - **Add to Calendar**, **digitális aláírás**, **másolás vágólapra** és egyéb hasznos interakciók.

- **Dinamikus tagek és shortcode-ok**
  - A régi Tokens helyett **Dynamic Shortcodes** működik, varázslóval. Így bonyolult lekérdezéseket és műveleteket is beépíthetsz rövidkóddal – kódolás nélkül.

- **Feltételes megjelenítés**
  - Külön (ingyenes) kiegészítővel szabályozhatod, mi látszódjon: **szerepkör**, **dátum**, **mezőérték** vagy **dinamikus tag** alapján, és a rejtett tartalom a **DOM-ból is eltűnik**.

- **Teljesítmény és vezérlés**
  - A **Features** képernyőn modulonként kapcsolhatod ki/be a komponenseket; csak az aktivált funkciók kódja töltődik be a frontendben.

## Gyakorlati példák

1. **Portfólió relációkkal (ACF)**
   - Hozz létre „Projekt” és „Csapat” típusokat; ACF relációval kösd össze őket. A Dynamic Posts-szal jelenítsd meg a projekthez tartozó csapattagokat, a repeater mezőket rugalmas elrendezésben.

2. **Fizető űrlap + PDF számla (Elementor Pro Form)**
   - Tedd be a Stripe vagy PayPal actiont, számold ki dinamikusan az összeget egy kalkulátor mezővel, majd beküldéskor generálj **PDF számlát** sablonból és csatold az e-mailhez. Ágazz el: sikeres fizetésnél más köszönőoldalra irányíts, mint sikertelen esetben.

3. **Külső API-ból terméklista**
   - Olvasd be a JSON-t a Dynamic API-vel, térképezd fel a mezőket, és állíts össze egy kártyarácsot. Ha nincs API, a Web Scraperrel ki tudod emelni a szükséges HTML-részeket.

   Példa JSON-struktúra:
   ```
   [
     {"title":"Termék A","price":9900,"url":"/termek-a"},
     {"title":"Termék B","price":14900,"url":"/termek-b"}
   ]
   ```

4. **Személyre szabott tartalom**
   - Csak belépett felhasználóknak mutass kedvezményt; időzíts megjelenítést kampányhoz; bizonyos metaértéknél rejts el szekciót. A rejtett rész nem lesz jelen a forráskódban.

5. **Kedvencek/Wishlist**
   - Adj „Kedvencekhez” gombot a kártyákra, és építs külön „Kedvenceim” nézetet. Vendégeknek cookie-alapú, tagoknak felhasználóhoz kötött.

## Telepítés, követelmények, licenc

- **Követelmények**: WordPress 6.3 vagy újabb (ajánlott: 6.8), PHP 7.4+ (ajánlott: 8.0), Elementor Free 3.24+. Elementor Pro csak a Pro űrlapos funkciókhoz szükséges. Nagyobb projektekhez emeld a WP memóriát (min. 256 MB, ajánlott 1024 MB).
- **Telepítés**: a megvásárolt ZIP-et töltsd fel a Bővítmények > Új hozzáadása > Bővítmény feltöltése menüben. Nagy ZIP esetén növeld a PHP feltöltési limitet.
- **Licenc**: éves előfizetés; időszakosan elérhető „lifetime” opciók is előfordulhatnak.

## Biztonság és best practice

- Biztonsági okokból néhány funkció (pl. **PDF Button**, **PHP Raw**, **Do Shortcode**, **fizetési mezők**) csak adminoknak elérhető.
- A régebbi PDF-konverterek deprecáltak; használd a **HTML konvertert**.
- Teljesítményhez kapcsold csak azt, amire szükséged van a **Features** képernyőn.

## Előnyök és értékajánlat

- **Fejlesztés kód nélkül**: összetett adatkapcsolatok, űrlapfolyamatok, fizetés és dokumentumok – programozó bevonása nélkül.
- **Idő- és költségmegtakarítás**: kevesebb egyedi fejlesztés, gyorsabb kivitelezés.
- **Rugalmasság**: ugyanazt a sablont több tartalomra is alkalmazhatod; bármikor bővíthető modulárisan.
- **Teljesítménykontroll**: csak az aktív komponensek töltődnek.

## Kinek ajánlott?

- **Ügynökségek és szabadúszók**: gyors prototípusok, komplex ügyféligények teljesítése kódolás nélkül.
- **No‑code webmesterek**: adatvezérelt oldalak ACF/Pods/Meta Box alapokon.
- **Űrlap‑ és folyamatépítők**: fizetés, PDF, feltételes logika Elementor Pro űrlapokkal.
- **Tartalom‑ és e‑kereskedelmi oldalak**: dinamikus listázás, kedvencek/wishlist, személyre szabott élmények.
- **Integrációt igénylők**: külső API-k és (ha kell) scraping bekötése Elementorba.

Ha összetett, dinamikus, integrált Elementor-oldalakat szeretnél építeni, a Dynamic.ooo a hiányzó „svájci bicska”, amivel mindezt gyorsan és biztonságosan meg tudod oldani.