---
title: "WooCommerce Name Your Price"
description: "Hivatalos WooCommerce kiegészítő, amellyel a vásárló adhatja meg az árat – javasolt, minimum és maximum összeghatárokkal."
sidebar_label: "WooCommerce Name Your Price"
---

## Mi ez és milyen problémát old meg?

A WooCommerce Name Your Price egy hivatalos, fizetős bővítmény, amellyel a vásárló **megadhatja a saját árát** egy termékre vagy szolgáltatásra. Olyan helyzetekre készült, amikor rugalmas összeget szeretnél elfogadni: **adomány**, **borravaló**, **ajándékkártya változó értékkel**, **számlarendezés** vagy **csúszó skálás árazás**. Te szabod meg a játékszabályokat: lehet teljesen szabad ár, vagy beállíthatsz **javasolt**, **minimum** és **maximum** összeget.

## Hogyan működik röviden

Termékszinten bekapcsolod a Name Your Price mezőt, ami a Kosárba gomb felett jelenik meg. A vásárló itt beírja az összeget, a bővítmény pedig valós időben ellenőrzi, hogy megfelel-e az általad beállított korlátoknak. Működik egyszerű és variálható termékekkel, előfizetésekkel, továbbá együttműködik népszerű kiegészítőkkel (pl. összetett termékek, kiegészítők, ajándékkártyák). A felület hozzáférhető: billentyűzettel és képernyőolvasóval is jól kezelhető, a mezőalapú hibajelzések azonnal láthatók.

## Fő funkciók részletesen

- **Vásárlói ármegadás**: A terméklapon egy ármező jelenik meg, ahol a vevő beírhatja a fizetni kívánt összeget. Azonnali validáció gondoskodik róla, hogy a megadott ár érvényes legyen.
- **Javasolt, minimum és maximum ár**: 
  - A **javasolt ár** segít irányt mutatni (pl. “Ajánlott: 3 000 Ft”).
  - A **minimum ár** megakadályozza a túl alacsony összegeket.
  - A **maximum ár** felső plafont ad, ha szükséges (pl. ajándékkártya keretek).
- **Variációk és összetett termékek**: Variálható termékeknél variációnként engedélyezheted a Name Your Price-t és külön szabályokat állíthatsz. Támogatott az integráció Product Bundles-szel, Composite Products-szal és Mix and Match-csel (bizonyos kombinációkban korlátozások lehetnek).
- **Előfizetések**: Elérhető egyszerű és variálható előfizetés-típusoknál is. Engedélyezheted, hogy a vevő a saját fiókjából később módosítsa az előfizetés összegét.
- **Kiegészítők és ajándékkártyák**: A Product Add-ons kiegészítők ára hozzáadódik a vevő által megadott összeghez. Ajándékkártyáknál a megadott ár lesz a kártya értéke.
- **Globális beállítások**: Testreszabhatod a feliratokat (**Suggested**, **Minimum**, **Name Your Price**), letilthatod a beépített stíluslapot, és elrejtheted a mennyiségi mezőt, ha nem kell.
- **URL-paraméterek**: 
  - Előre kitöltheted vagy közvetlenül kosárba teheted a terméket adott árral kampányokhoz és e-mail CTA-khoz:
    ```
    /?add-to-cart=123&nyp=4990
    ```
- **Hozzáférhetőség és UX**: Korszerű front-end validáció, jobb billentyűzetes navigáció és képernyőolvasó-kompatibilitás.
- **Fejlesztői testreszabás**: Sablonrészek, saját CSS, akciók/filtrék egységes wc_nyp_ előtaggal.

### Ismert kompatibilitások és korlátozások

- Jól együttműködik például előfizetésekkel, kiegészítőkkel, ajándékkártyákkal, egyoldalas pénztárakkal és többvalutás/fordítási bővítményekkel. Headless környezetben API-alapú kosármegoldásokkal is használható.
- Nem támogatott a Bookings terméktípus. Bundles/Composites esetén egyes “priced individually” vagy előfizetéses variációs kombinációknál lehetnek korlátozások. A Bundle Sells részfunkció nem támogatott.

## Bekapcsolás és beállítás

1. Termék szerkesztése > Product Data > General: pipáld be a **Name Your Price** opciót.
2. Add meg a **javasolt**, **minimum** és **maximum** árat (amelyikre szükség van).
3. Variálható termékeknél ezt variációnként ismételd meg.
4. Előfizetéseknél engedélyezheted a későbbi ár módosítását a vevői fiókban.
5. Globálisan: WooCommerce > Settings > Name Your Price – feliratok, megjelenítés, mennyiség mező.

## Gyakorlati példák

- **Adománygyűjtés**: Állíts be minimum 1 000 Ft-ot, javasolt 3 000 Ft-ot. Kampányban használhatsz előre kitöltött árakat:
  ```
  /?add-to-cart=123&nyp=5000
  ```
- **Borravaló (tip)**: Hozz létre egy “Borravaló” terméket szabad árazással, és tedd láthatóvá a kosár/pénztár oldalon.
- **Ajándékkártya**: A vevő beírja a kívánt összeget; ez lesz a kártya értéke.
- **Számlarendezés**: “Befizetés” termék, ahol az ügyfél beírja a fizetendő összeget, és megjegyzésben feltünteti a számla számát.
- **Csúszó skálás digitális termék**: Minimum 2 990 Ft, maximum 9 990 Ft – így kipróbálhatod a fizetési hajlandóságot.

## Előnyök és értékajánlat

- **Maximális rugalmasság**: Úgy fogadsz pénzt, ahogy az ügyfeled szeretne fizetni.
- **Bevételnövelés**: Javasolt árakkal és UX-támogatással nőhet az átlagos kosárérték.
- **Gyors kísérletezés**: Könnyű A/B teszt és piaci validáció csúszó skálás modellekkel.
- **Kevesebb fejlesztés**: Hivatalos, széleskörű kompatibilitás – nem kell egyedi kódot íratnod.
- **Hozzáférhetőség**: Jobb élmény billentyűzetről és képernyőolvasóval.

## Kinek ajánlott?

- **Nonprofitok és közösségi projektek**: adományok, támogatások.
- **Kreatívok és szolgáltatók**: borravaló, rugalmas díjazás.
- **Előfizetéses tartalmak**: tagság, rendszeres támogatás, dinamikus díjak.
- **E-kereskedők**: ajándékkártyák, voucherek, összetett termékcsomagok.
- **Ügynökségek/fejlesztők**: gyors bevezetés, stabil alap integrációkhoz.

## Telepítés és licencelés röviden

- A bővítmény éves licencként érhető el hivatalos piactéren, frissítésekkel és támogatással, 30 napos pénzvisszafizetési garanciával.
- Telepítés: a megvásárolt ZIP-et töltsd fel a WordPress > Plugins > Add New > Upload menüben, majd aktiváld.
- Követelmények: WooCommerce és a PHP/WordPress támogatott verziói. A gyakorlatban mindig a legfrissebb stabil verziókat érdemes használni.

## Tippek és hibaelhárítás

- Nem látod az ármezőt? Ellenőrizd, hogy a terméken be van kapcsolva a Name Your Price, és nincs téma-sablon felülírás, ami elrejti.
- Minimum/maximum hibák: nézd meg a beállított valutát és a formátumot, kerekítést.
- Összetett termékek: ha “priced individually” módban furcsa eredményt kapsz, próbáld egyszerűsíteni a kombinációt vagy ellenőrizd a kompatibilitási jegyzeteket.
- Bookings termékekhez nem adható Name Your Price mező.
- Kampánylinkeknél mindig teszteld az URL-paramétereket több eszközön és pénznemben.