---
title: "WooCommerce Checkout Field Editor"
description: "Bővítmény(ek) a WooCommerce pénztármezők egyszerű hozzáadásához, eltávolításához, szerkesztéséhez és átrendezéséhez – kódolás nélkül."
sidebar_label: "WooCommerce Checkout Field Editor"
---

## Mi ez és milyen problémát old meg?

A WooCommerce alapértelmezett pénztár űrlapja nem minden üzlethez passzol. A “WooCommerce Checkout Field Editor” név alatt több, egymástól független bővítmény is fut, amelyek közös célja: rugalmasan testreszabni a checkout mezőit – felesleges elemek kidobása, új adatok bekérése, sorrend állítása, validáció és megjelenítés szabályozása. Ezzel gyorsítod a pénztárt, csökkented a kosárelhagyást, és pontosabb adatokat gyűjtesz.

## Két fő változat röviden

- **Hivatalos (by Woo)**: Prémium kiegészítő a klasszikus (shortcode-os) pénztárhoz. Erős a stabil, no‑code mezőkezelésben (Billing/Shipping/Additional), tiszta admin felülettel.
- **ThemeHigh (ingyenes + Pro)**: Széles körben használt alternatíva. Drag & drop szerkesztés, sok mezőtípus, feltételes logika, opcionális felárak, és fokozatos támogatás a blokkos Checkouthoz.

Megjegyzés: a “Checkout Field Editor” elnevezést más fejlesztők is használják; mindig pontosíts, melyik megoldásról van szó.

## Fő funkciók, érthetően

- **Mezők hozzáadása/eltávolítása/átrendezése**  
  Pár kattintással alakítod a Billing, Shipping és Additional szekciókat. Így csak a valóban szükséges mezők maradnak, a fontosak pedig előrébb kerülnek.

- **Sokféle mezőtípus**  
  Text, number, textarea, select, multi‑select, radio, checkbox, dátum/idő választó, sőt ThemeHigh-nál label/heading/paragraph és Pro-ban fájlfeltöltés is. A megfelelő típus csökkenti a hibázást és gyorsítja a kitöltést.

- **Validáció és kötelezőség**  
  E-mail, szám, minimális/maximum hossz, required jelölés. Így már a pénztárban kiszűröd a hibás adatokat, és nem kell utólag egyeztetni.

- **Megjelenítés szabályozása**  
  Beállíthatod, mi jelenjen meg a rendelés részleteiben, a visszaigazoló e-mailben és a fiókoldalon. A csapatod és az ügyfél is azt látja, ami releváns.

- **Feltételes logika (ThemeHigh)**  
  Mezők csak bizonyos termékeknél, kategóriáknál, szerepköröknél, fizetési/szállítási módnál vagy kosárértéknél jelennek meg. Nem terheled a vásárlót felesleges kérdésekkel.

- **Opcionális felárak (ThemeHigh Pro)**  
  Mezők értéke alapján extra díjat számíthatsz (pl. ajándékcsomagolás). Átlátható a vásárlónak, egyszerű a működtetés.

- **Reset alapértelmezettre**  
  Egy kattintással visszaállíthatod a WooCommerce gyári mezőkiosztását, ha kísérletezés után “tiszta lappal” folytatnád.

- **Checkout kompatibilitás**  
  A hivatalos kiegészítő jelenleg a klasszikus checkoutot támogatja. A ThemeHigh megoldása fokozatosan támogatja a blokkos checkoutot (egyes mezőtípusokkal, Pro-ban bővebben).

## Gyakorlati példák

- **Gyorsítás**: Kiveszed a cégnevet és a másodlagos címsort B2C boltban; a legfontosabb mezők felülre kerülnek.
- **VAT/Adószám**: B2B vásárlóknál kötelező “Adószám” mező, csak akkor látszik, ha a vásárló cégként jelöl.
- **Szállítási instrukciók**: “Kapucsengő kód” vagy “Futárnak üzenet” mező a kézbesítési hibák csökkentésére.
- **Átadás időpontja**: Dátum/idő mező átvételi pontokhoz, a nyitvatartás alapján korlátozva.
- **Fizetési mód függő mező**: “Számlázási kapcsolattartó” csak banki átutalás esetén jelenik meg.
- **Ajándékcsomagolás díja**: Checkbox + fix felár a ThemeHigh Pro-val.

## Előnyök és értékajánlat

- **Kevesebb súrlódás, jobb konverzió**: Rövidebb űrlap = kevesebb kosárelhagyás.
- **Pontosabb adatok, kevesebb support**: Validált, célzott mezők = kevesebb utómunka.
- **Üzleti rugalmasság**: B2B/B2C eltérések, kampányok, speciális termékek igényei könnyen lekövethetők.
- **Gyors bevezetés, kód nélkül**: Admin felületről, percek alatt.

## Telepítés és alapbeállítás

### Hivatalos (by Woo)
1. Telepítés és aktiválás után keresd:  
   ```
   WooCommerce > Checkout Fields
   ```
2. Szerkeszd a Billing/Shipping/Additional szekciókat: mezők típusa, címke, placeholder, validáció, megjelenítés e-mailben/rendelésnél.
3. Mentsd, majd teszteld. Szükség esetén használhatod a Reset funkciót.

### ThemeHigh
1. Aktiválás után nyisd meg:  
   ```
   WooCommerce > Checkout Form
   ```
2. Drag & drop rendezés, új mezők hozzáadása. Ingyenesben az alap típusok és megjelenítési kapcsolók elérhetők.
3. Pro-ban állíts feltételes logikát és extra díjakat. Blokkos checkout esetén ellenőrizd, mely mezőtípusok támogatottak.

## Kompatibilitás és korlátok

- **Checkout Blocks**: A hivatalos bővítmény jelenleg a klasszikus pénztárat kezeli. A ThemeHigh támogatása a blokkos pénztárhoz fokozatos, nem minden mezőtípusra terjed ki.
- **Core mezők**: Bizonyos alappillér mezők (pl. ország/állam) módosítása korlátozott, a lokalizációs logika miatt.
- **Adatexport**: Az egyedi mezők rendelés metaadatként elérhetők; teljes körű riportáláshoz külön export megoldás javasolt.

## Kinek ajánlott?

- **Webáruház tulajdonosoknak**, akik gyorsabb, egyszerűbb pénztárat akarnak.
- **B2B boltoknak**, ahol extra adatok (adószám, kapcsolattartó) kellenek.
- **Speciális szolgáltatóknak**, átadásidőponttal, instrukciókkal.
- **Marketing/operációs csapatoknak**, ahol e-mail- és rendelésnézetben is kell látszódni bizonyos adatoknak.
- **Fejlesztés nélkül dolgozóknak**, akik admin felületen oldanák meg.

## Melyiket válaszd?

- **Stabil, egyszerű igények** és klasszikus checkout: válaszd a hivatalos kiegészítőt.
- **Összetettebb igények**, feltételes logika, extra díjak, és/vagy blokkos checkout: válaszd a ThemeHigh megoldását (ingyenes + Pro bővítéssel).

## Névütközés

A “Checkout Field Editor” több fejlesztő termékét is jelölheti. Beszerzés előtt mindig pontosítsd, melyik bővítményről van szó (hivatalos vagy ThemeHigh), hogy a megfelelő funkciókhoz juss.