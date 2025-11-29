---
title: "WooCommerce One Page Checkout"
description: "Prémium WooCommerce kiegészítő, amellyel bármely oldalból vagy bejegyzésből egyoldalas pénztárt készíthetsz: termékválasztás és fizetés ugyanazon az oldalon."
sidebar_label: "WooCommerce One Page Checkout"
---

## Mi ez és milyen problémát old meg?

A WooCommerce One Page Checkout hivatalos, prémium bővítmény, amellyel a termékválasztást és a pénztári űrlapot egyetlen, gyors oldalra tudod összehozni. Ezzel lerövidíted a vásárlási folyamatot, csökkented a felesleges oldalváltásokat, és mérsékeled a kosárelhagyást. A vevő egy helyen nézi meg a kínálatot, választ, mennyiséget állít, majd azonnal fizet – kontextusváltás nélkül.

## Hogyan működik röviden?

- Ugyanazon az oldalon jelennek meg a **termékválasztó elemek** és a **pénztári űrlap**.
- A kosár frissítése és a mezők változása **oldalfrissítés nélkül** történik.
- Mindezt egy **rövidkóddal** helyezed el bármely oldalra vagy bejegyzésre, testreszabható sablonokkal.

## Fő funkciók részletesen

- **Rövidkód-alapú működés:** A `[woocommerce_one_page_checkout]` rövidkóddal egy oldalt egyoldalas pénztárrá alakíthatsz. Attribútumokkal finomhangolsz, például:
  - `product_ids` – konkrét termékek előkészítése a kiválasztáshoz
  - `template` – megjelenítési sablon kiválasztása

- **Beépített sablonok:** Választhatsz listás, táblázatos, egytermékes vagy “pricing table” jellegű sablont (pl. product-list, product-table, product-single, pricing-table), attól függően, hogyan szeretnéd prezentálni a kínálatot.

- **Egyedi sablonok:** Fejlesztőként saját kiválasztó-sablonokat készíthetsz a témádban. A sablonokat a megfelelő szűrővel regisztrálod, a termékválasztó elemekhez pedig `data-add_to_cart` attribútum szükséges. Támogatott elemtípusok: gomb, rádió, checkbox, hivatkozás és számmező.

- **Per-termék beállítás:** A termék adatlapján egy kapcsolóval elérheted, hogy maga a termékoldal is teljes értékű egyoldalas pénztárként működjön.

- **Szerkesztői támogatás:** A Klasszikus szerkesztőben van grafikus felület a rövidkód beszúrásához; a Gutenbergben manuálisan illeszted be a rövidkódot.

- **Tartalom kombinálása:** A rövidkód köré tetszőleges tartalmat tehetsz (szöveg, kép, videó), így a sales-üzenetek és a vásárlás egy helyen vannak.

- **Integrációk:** Működik számos WooCommerce-kiegészítővel (pl. előfizetések, foglalások, csomagok), így komplex ajánlatokat is eladhatsz egy oldalon.

- **Fizetési kompatibilitás:** Azokkal a gatewayekkel működik, amelyek a WooCommerce standard fizetési szakaszát használják.

## Gyakorlati példák

- **Termékoldali azonnali vásárlás:** Egy fizikai termék oldalán a leírás alatt pénztár jelenik meg; a vevő mennyiséget állít és fizet.
- **Kampány-landing:** Egy promóciós oldalon a videó és ajánlat alatt rögtön ott a vásárlás – nincs lépegetés a kosár/pénztár között.
- **Kis katalógus:** 5–8 termékes boltban egy táblázatból kiválasztja a vevő, amit kér, és azonnal fizet.
- **Csomagok/pricing:** Rádiógombos csomagválasztóval egyetlen csomag marad a kosárban – tiszta, fókuszált döntési folyamat.
- **Előfizetés/foglalás:** Előfizetéses termék vagy időpontfoglalás egyoldalas űrlapon, kevesebb súrlódással.

## Telepítés és első lépések

1. Telepítsd és aktiváld a bővítményt.
2. Hozz létre egy új oldalt, és illeszd be a rövidkódot:
   ```
   [woocommerce_one_page_checkout template="product-table" product_ids="12,34,56"]
   ```
3. Opcionálisan kapcsold be egy terméknél, hogy a saját oldala is pénztár legyen.
4. Tedd a rövidkód köré a marketingtartalmat (cím, leírás, videó).

## Működés és technikai részletek

- **Attribútumok:** legalább `template` és/vagy `product_ids`. Oldalanként **csak egy** ilyen rövidkód támogatott.
- **Auto-scroll:** Alapból aktív; a beállításoknál kikapcsolhatod.
- **Szállítási mezők:** Ha minden megjelenített termék virtuális, a szállítási címmezők rejtve maradnak; ha bármelyik fizikai, megjelennek.
- **Kötelező normál pénztár oldal:** Ne töröld a klasszikus WooCommerce pénztárad – szükséges visszaigazoláshoz és egyes fizetési módokhoz.
- **Szerkesztők:** Klasszikus szerkesztőben vizuális beszúrás, Gutenbergben kézi rövidkód.
- **Programozói jegyzetek:** Egyedi sablonok a témában, sablon-regisztráció szűrőn keresztül, a választó elemek `data-add_to_cart` attribútummal működnek. Ha nem a tartalomban futtatod a rövidkódot (pl. `do_shortcode`), jelezd szűrővel, hogy az oldal OPC, különben az assetek nem töltődnek be.
- **Speciális viselkedés:** Rádiógombos választásnál a kosár ürülhet új választás előtt – ez tervezetten így működik (pricing-szerű használatnál hasznos).
- **Kompatibilitás:** A saját sablonrendszer miatt nem minden kiegészítő működik automatikusan; például fájlfeltöltős opciótípusok nem támogatottak.
- **Fizetés:** Olyan gatewayekkel működik, amelyek a standard WooCommerce fizetési szakaszt követik.

## Előnyök és értékajánlat

- **Kevesebb lépés, több konverzió:** Azonnali vásárlás egy oldalon, kevesebb lemorzsolódás.
- **Gyorsabb döntés:** A tartalom és a vásárlás együtt van, nincs kontextusváltás.
- **Rugalmasság:** Sablonokkal és rövidkódokkal pontosan azt az élményt építed, amire szükséged van.
- **Időmegtakarítás:** Kevesebb oldal, kevesebb karbantartás, egyszerűbb analitika a funnelben.

## Kinek ajánlott?

- **Kis és közepes katalógusú boltoknak,** ahol a kosár + pénztár külön oldalak feleslegesek.
- **Kampány- és landing-oldal készítőknek,** akiknek kritikus a konverzió és a sebesség.
- **Digitális termékek, előfizetések, foglalások** értékesítőinek, ahol a gyors űrlapélmény kulcs.
- **Mobil-first webáruházaknak,** mert egy oldalon minden elfér és gyors.
- **Ügynökségeknek/fejlesztőknek,** akik testreszabható sablonrendszert keresnek.

Összességében: ezzel a bővítménnyel egy fókuszált, gördülékeny vásárlói élményt kapsz, amely csökkenti a súrlódást és növeli a bevételt – mindezt a WooCommerce bevált folyamataira építve.