---
title: "OxyExtras"
description: "Moduláris komponenskönyvtár a Classic Oxygen Builderhez: haladó navigáció, tartalom- és e‑kereskedelmi UI‑elemek, no‑code interakciók, teljesítmény‑tudatos működéssel."
sidebar_label: "OxyExtras"
---

## Mi ez és milyen problémát old meg?

Az OxyExtras egy prémium, könnyű komponenskönyvtár a Classic Oxygen Builderhez. Több mint negyven, egymással jól együttműködő vizuális elemet ad az Oxygen szerkesztőjéhez, hogy kevesebb egyedi kódot kelljen írnod. Azokat a „hiányzó” haladó UI‑elemeket kapod meg (mega menü, off‑canvas, lightbox, mini kosár stb.), amelyekhez korábban CSS/JS kellett. Az erőforrások csak akkor töltődnek, ha egy komponenst ténylegesen használsz, így a webhely nem hízik feleslegesen.

Fontos: az OxyExtras a Classic Oxygen ökoszisztémára készült, az új, különálló Oxygen v6 buildert nem célozza.

## Hogyan működik röviden?

- Teljesen az Oxygen megszokott felületébe illeszkedik: ott találsz új elemeket, beállításokat, stílusvezérlőket.
- Moduláris és feltételes betöltésű: csak a használt komponensekhez tartozó stílus/JS kerül az oldalra.
- Dinamikus adatokkal, repeaterben is működik, így valódi, adatvezérelt felületeket építhetsz.
- Preseteket menthetsz és exportálhatsz, így mintákat vihetsz projekteid között.
- Előfeltétel: Classic Oxygen egy aktív WordPress oldalon.
- Licenc: egyszeri díjas, korlátlan webhelyes használat, élethosszig tartó frissítésekkel és támogatással.

## Fő funkciók, érthetően

### Navigáció és menük
- **Mega Menu**: teljesen vizuálisan építhető, egyedi oszlopszélességek, fejlett animációk, mobil burger trigger. Ideális nagy információ‑architektúrához.
- **Slide/Horizontal Slide Menu**: csúszó menük desktopon és mobilon, részletes nyitási‑zárási viselkedéssel.
- **Burger Trigger, Header Search**: gyors mobil navigáció és azonnali kereső az Oxygen fejléceiben.

### Tartalom és interakció
- **Lightbox**: képek, videók, iFrame tartalmak, akár AJAX‑betöltéssel. Repeaterből dinamikusan is meghajtható, így galériák, videólisták egy kattintásra nyílnak, és csak ekkor töltődnek.
- **Dynamic Tabs, Pro Accordion**: összetett tartalmak tagolása, billentyűzetes navigációval.
- **Table of Contents, Read More/Less**: hosszú oldalak tördelése, automatikus tartalomjegyzék címsorokból.
- **Copy to Clipboard, Toggle Switch, Lottie Animation**: mikro‑interakciók kód nélkül.
- **Pro Media Player**: késleltetett betöltésű videó/audió, jobb teljesítménnyel és testreszabással.

### E‑kereskedelem (WooCommerce)
- **Mini Cart + Cart Counter**: valós idejű, AJAX‑os mini kosár. Több elrendezés (dropdown, off‑canvas), részletes tipográfia és elem‑szintű styling. Jól kombinálható egyéb elemekkel (pl. Off Canvas, Modal).

### Blog és cikkfunkciók
- **Reading Progress Bar, Reading Time**: vizuális visszajelzés az olvasónak.
- **Adjacent Posts, Post Modified Date**: jobb bejárhatóság és frissesség jelzése.
- **Social Share + Print**: külső JS nélkül működő megosztások, nyomtatás gomb opcióval.

### Workflow és segéd‑elemek
- **Off Canvas**: hozzáférhető panelek fókuszcsapdával és ARIA‑beállításokkal.
- **Carousel Builder**: repeaterrel vagy terméklistával működő csúszka.
- **Infinite Scroller**: végtelen görgetés listákhoz.
- **Hotspots & Popovers, Preloader, Interactive Cursor, Copyright Year**
- **Fluent Forms styler, Gutenberg újrahasznosítható blokkok**: egységes vizuális megjelenítés kód nélkül.

## Gyakorlati példák

- **Mega menü nagy tartalomhoz**: Állíts be egy többoszlopos megamenüt a fejlécedben; oszloponként külön komponenseket helyezhetsz el (kép, lista, CTA), mobilon pedig burger menüre válthatsz.
- **Lightbox dinamikus galériához**: Repeaterrel listázd a bejegyzések képeit vagy videóit, és minden kártyán a Lightbox trigger jelenjen meg. A tartalom csak kattintáskor töltődik, javítva a sebességet.
- **WooCommerce minikosár élmény**: A kosár ikon mellett valós idejű számláló, a kattintásra off‑canvas kosár nyílik, kuponmezővel, tételek törlésével, csekkolás gombbal.
- **Blog UX**: A cikk tetején olvasási idő, oldalsávban automatikus tartalomjegyzék, a bevezető alatt „Tovább olvasom” tördelés, alul megosztás és nyomtatás.

Példa lépések egy kombinált minikosárhoz:

```
1) Helyezz el egy Cart Counter elemet a fejléchez.
2) Adj hozzá egy Mini Cart elemet, az elrendezést állítsd Off Canvas-ra.
3) Kösd össze a Counter-t a Mini Cart triggerével (azonosító alapján).
4) Finomhangold a fókuszcsapdát és az ESC bezárást az A11y beállításoknál.
5) Styling: tipográfia, gombok, árak – mind komponensszinten állítható.
```

## Előnyök és értékajánlat

- **Kevesebb kód, gyorsabb kivitelezés**: gyakori JS/CSS feladatokra kész komponensek.
- **Teljesítmény‑tudatos**: feltételes asset‑betöltés, lazy‑load média.
- **Hozzáférhető alapok**: fókuszkezelés, ARIA‑attribútumok, billentyűzetes navigáció több elemben.
- **Konzisztens szerkesztés**: minden az Oxygen UI‑jában, presetek menthetők/exportálhatók.
- **Költséghatékony**: egyszeri díj, korlátlan webhely, folyamatos frissítések és támogatás.

## Célközönség

- **Oxygen‑használó ügynökségek és fejlesztők**: gyors, skálázható komponens‑alapú építés kevesebb egyedi kóddal.
- **WooCommerce‑üzemeltetők**: jobb kosárélmény és konverziós eszközök kódolás nélkül.
- **Tartalom‑gazdag oldalak**: blogok, magazinok, tudásbázisok, ahol a navigáció és a cikk‑UX kritikus.
- **No‑code site builderek**: vizuális megoldások haladó interakciókra.

## Biztonság és karbantartás

A bővítmény folyamatosan karbantartott, biztonsági és kompatibilitási javítások rendszeresen érkeznek. Mindig frissíts a legújabb stabil kiadásra, különösen ha biztonsági frissítés jelenik meg.

## Megkülönböztetés és kompatibilitás

- **Nem design set és nem UI‑tuning**: funkcionális komponensek gyűjteménye, amelyek kibővítik az Oxygen alapjait.
- **Classic Oxygen fókusz**: az új, különálló Oxygen v6 builderhez nem ajánlott.
- **OxyExtras vs. Oxy Toolbox**: míg az Oxy Toolbox inkább eszközkészlet (class‑kezelés, feltételek, UI‑finomítások), az OxyExtras vizuális, kész komponenseket ad. Van némi átfedés, de a cél más.

## Összegzés

Az OxyExtras akkor kell neked, ha Classic Oxygen alatt haladó menüket, off‑canvas paneleket, lightboxokat, minikosarat, interaktív tartalmi blokkokat és blog‑UX elemeket szeretnél felépíteni kód helyett vizuális komponensekkel. Moduláris, gyors és hozzáférhető megoldás, amellyel időt, pénzt és energiát spórolsz, miközben a fejlesztői workflow is átláthatóbbá válik.