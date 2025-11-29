---
title: "JetTabs For Elementor"
description: "Prémium tartalomszervező bővítmény Elementorhoz: fülek, akkordionok és váltó blokkok dinamikus, újrahasznosítható elrendezésekhez."
sidebar_label: "JetTabs For Elementor"
---

## Mi ez és milyen problémát old meg?

A JetTabs egy, kifejezetten Elementorhoz készült tartalomszervező bővítmény. Segítségével hosszú, összetett oldalakat **fülekbe**, **akkordionokba** és egy kétállapotú **Switcher** blokkba rendezhetsz. Így kevesebb görgetéssel, logikus blokkokba szervezve adhatod át az információt, miközben a tartalom lehet akár egész Elementor-sablon is, ami egyszerre **újrahasznosítható** és **könnyen karbantartható**. Támogatja a WooCommerce termékfüleket, a JetEngine-alapú dinamikus tartalmat, az **ankor linkeket**, valamint az **AJAX-os halasztott betöltést** a gyorsabb első renderhez.

## Fő funkciók

### Tabs (fülek)
- Hozz létre **vízszintes vagy függőleges** füleket.
- Minden fül tartalma lehet egyszerű szöveg, vagy **komplett Elementor-sablon**, így összetett komponenseket is beilleszthetsz és újrahasznosíthatsz.
- Dinamikus adatforrásokkal (pl. JetEngine lekérdezések) a tabcímek és a paneltartalom **automatikusan frissülhet**.
- Hosszú fülsoroknál használhatsz **görgetősávot** vagy **slider** nézetet.
- **Tab-ankorokkal** közvetlenül egy adott fület nyithatsz meg menüből vagy gombból.
- Támogatottak a **beágyazott (nested)** tab-struktúrák is.
- Finomhangolható **animációk**, **ikonok/badge-ek**, **reszponzív viselkedés** és **mobil érintés-optimalizáció**.

### Classic Accordion (klasszikus akkordion)
- Hosszú szövegeket **kinyitható/csukható szekciókba** rendezhetsz.
- A panelek tartalma lehet **sablonból betöltött** összetett tartalom is.
- Testreszabható **ikonok**, **animációk**, engedélyezhető több szekció egyidejű nyitása.

### Image Accordion (képes akkordion)
- Képekből álló, **hoverre vagy kattintásra nyíló** látványos panelek.
- Elem-szinten állítható **cím**, **leírás**, **gomb** és **hivatkozás**.
- Részletes **tipográfia**, arányok és méretezés, ideális **portfóliók** és kiemelések megjelenítésére.

### Switcher (váltó)
- Két tartalomblokk (pl. **Havi vs. Éves** árak) közti **egy-kattintásos váltás**.
- Mindkét oldal lehet külön **Elementor-sablon**, saját animációkkal és elrendezéssel.
- Tiszta, gyors összehasonlítást ad csomagok vagy nézetek között.

### Kiegészítő képességek
- **AJAX-os betöltés**: a tabtartalmat kattintás után tölti be, gyorsítva az első oldalrenderelést.
- **WooCommerce integráció**: egyedi termékfülek (leírás, specifikáció, vélemények, videó, extra információk).
- **WPML kompatibilitás**: dokumentált folyamat a JetTabs-elemek fordítására.
- **Tab-ankor linkek**: menüből vagy gombból közvetlenül a kívánt fülre ugorhatsz.

## Gyakorlati példák

1. Termékoldal sablon tabokkal  
   - Fülek: Leírás, Specifikációk, Videó, Szállítás/Garancia.  
   - A paneltartalom sablonból jön, ahol dinamikus mezőkkel dolgozol. Menüből egy kattintással nyithatod a „Specifikációk” fület.

2. GYIK oldal  
   - Kategóriánként csoportosított kérdések **Classic Accordion**-nal.  
   - Engedélyezheted, hogy több kérdés egyszerre legyen nyitva.

3. Árváltó  
   - **Switcher**: Havi vs. Éves díjcsomagok külön sablonokkal, CTA gombokkal.  
   - Animált váltás, tiszta összehasonlítás.

4. Portfólió/feature-galéria  
   - **Image Accordion** képekkel, rövid leírással és „Tovább” gombbal.  
   - Attraktív, mozgásra reagáló bemutató.

## Integrációk és rendszerkövetelmények

- **Elementor szükséges**: a JetTabs Elementor widgeteket ad.  
- **JetEngine (opcionális)**: dinamikus tartalom, Query Builder, relációk.  
- **WooCommerce (opcionális)**: termékfülek testreszabása.  
- **WPML (opcionális)**: többnyelvű tartalom.  
- Ajánlott környezet: naprakész WordPress, PHP 8.x, elegendő memória (pl. 256–512 MB).

## Előnyök és értékajánlat

- **Átláthatóság**: blokkos, könnyen bejárható struktúra; kevesebb görgetés.  
- **Újrahasznosíthatóság**: sablonszintű tartalom, központi frissítés több oldalon.  
- **Teljesítmény**: halasztott, interakció utáni tartalombetöltés.  
- **Konverzió**: gyors nézetváltás (Switcher), célzott navigáció (ankorok).  
- **Rugalmasság**: dinamikus adatok, WooCommerce és többnyelvűség támogatása.

## Kinek ajánlott?

- **Ügynökségek és site builderek**: skálázható komponenskönyvtár, gyors kivitelezés.  
- **Webshopok**: gazdagított termékfülek, jobb információátadás.  
- **Tartalom-intenzív oldalak**: dokumentációk, feltételek, szolgáltatásleírások.  
- **SaaS/termék landingek**: ár- és csomagváltó, összehasonlítások.  
- **Portfóliók**: látványos, mobilbarát kiemelések.

## Gyors használati útmutató

1. Húzd be a kívánt widgetet (Tabs/Accordion/Image Accordion/Switcher) az Elementor vászonra.  
2. Válaszd ki, hogy a panel tartalma **szöveg** vagy **Template** legyen.  
3. Dinamikus tartalomhoz állíts be JetEngine lekérdezést vagy mezőket.  
4. Teljesítményhez kapcsold be az **AJAX-os** betöltést.  
5. Navigációhoz add meg a widget **ID-ját**, és készíts ankor linket.

Példa menü- vagy gombhivatkozásra:
```
/szolgaltatasok/#arvalto
```
Az oldalon add ezt az ID-t a widget szekciójának:
```
<section id="arvalto"></section>
```

## Teljesítmény, hozzáférhetőség és biztonság

- **Teljesítmény**: használd a halasztott betöltést, és csak az elsődleges tartalmat töltsd be az oldal betöltésekor.  
- **Animációk**: finoman, célzottan alkalmazd (fade/zoom/move), mobilon mérsékelten.  
- **Hozzáférhetőség**: ügyelj a kontrasztra, fókuszállapotokra és a billentyűzetes bejárhatóságra.  
- **Biztonság**: a bővítmény aktívan karbantartott; időnként érkezhetnek sebezhetőségi közlemények. Mindig a **legfrissebb stabil verziót** használd, és tartsd naprakészen a WordPress, Elementor, JetEngine, WooCommerce és fordítási környezeted is. Élesítés előtt tesztelj először stagingen.

---

Röviden: a JetTabs egy profi, mégis könnyen használható eszköz arra, hogy az Elementorban készített oldalakat **logikus, dinamikus és gyors** tartalmi blokkokká szervezd, amelyek jobb felhasználói élményt és könnyebb karbantartást biztosítanak. Ha áttekinthetőbb oldalakat, gyorsabb betöltést és hatékonyabb konverziós útvonalat szeretnél, jó eséllyel pont erre van szükséged.