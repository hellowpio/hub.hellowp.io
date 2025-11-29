---
title: "JetStyleManager"
description: "Ingyenes, nyílt forráskódú bővítmény, amely vizuális stíluskezelőt ad a Gutenberghez a JetPlugins blokkokhoz, reszponzív vezérlésekkel és fejlesztői API-val."
sidebar_label: "JetStyleManager"
---

## Mi ez és milyen problémát old meg?

A JetStyleManager egy ingyenes kiegészítő, ami a Gutenberg szerkesztőt bővíti ki egy külön **Block Style** panellel. Ezzel kód írása nélkül, vizuálisan állíthatod a JetPlugins-hez tartozó blokkok (pl. JetEngine, JetSmartFilters, JetFormBuilder) stílusát. Megoldja a Gutenberg alapstílusok szűkösségét: részletes **tipográfia**, **színek**, **elrendezés**, **távolságok**, **szegélyek** és **ikon**-beállítások kerülnek a blokk oldalsávjába.

## Hogyan működik a szerkesztőben?

- Telepítés és aktiválás után a támogatott blokkoknál megjelenik a **Block Style** gomb.
- Rákattintva egy panel nyílik, ahol a stílusokat valós időben állíthatod.
- A beállítások eszköznézetenként (asztali/tablet/mobil) külön értéket kaphatnak, így **reszponzív** szabályokat hozol létre CSS nélkül.
- A bővítmény a választásaidból generált stílusokat a frontendre optimalizáltan tölti be.

## Fő funkciók, érthetően

- **Elrendezés és igazítás**: blokk- és tartalomszintű igazítások, sor- és oszlopközök, elemek közötti **gap/space** kezelés.
- **Távolságok**: precíz **margin** és **padding** kontrollok, eszközönként eltérő értékekkel.
- **Színek és háttér**: **háttérszín**, **szövegszín**, átlátszóság és állapotfüggő megjelenés (pl. hover).
- **Szegély és lekerekítés**: szélesség, szín, stílus, valamint **border-radius** a modern kártya-szerű felületekhez.
- **Ikon beállítások**: méret, szín, elhelyezés; ideális gomboknál és listáknál.
- **Tipográfia**: betűcsalád, méret, súly, betűköz, sorköz; beépített **Google Fonts** támogatással, így nem kell külön betűtípus-kezelést beépítened.
- **Reszponzív vezérlés**: egy-egy stílus minden eszközre finoman hangolható, külön médiakérdések írása nélkül.
- **Teljesítmény-optimalizálás**: a generált stílusok a rendszer által szervezetten kerülnek betöltésre, így csökken a szerkesztő és a frontend terhelése.
- **Editor Load Level és „skins” koncepció**: a Crocoblock ökoszisztémában csökkenthető a látható stílusopciók száma a gyorsabb szerkesztésért; a mentett „skin” stílusokkal következetes megjelenést tarthatsz. Gutenberg alatt a Block Style panel a fő funkció.

## Gyakorlati példák

- **JetEngine Listing Grid kártyák**: állíts egységes kártya-hátteret, kártyán belüli cím- és kivonat-tipográfiát, képarányt és a kártyák közti **gap**-et. Mobilon csökkentsd a paddinget és a címméretet.
- **JetSmartFilters gombok**: add meg az aktív/hover állapot színeit, szegélyét és lekerekítését. Tablet nézetben növeld a gombok közötti távolságot, hogy könnyebb legyen érinteni.
- **JetFormBuilder űrlapok**: hangold finomra a mezők szegélyét, fókusz-színeit, címkék tipográfiáját és a küldés gomb stílusát. Külön mobilnézetben nagyobb gomb és nagyobb sorköz a jobb hozzáférhetőségért.

## Fejlesztőknek röviden

A JetStyleManager **API-t** kínál, amellyel saját Gutenberg-blokkjaidhoz egységes stílus-UI-t adhatsz:

- **Vezérlők és szekciók**: több mint tíz kontrolltípus (szín, méret, tipográfia, kapcsoló stb.), csoportosítva szekciókba.
- **Médiakérdések**: reszponzív értékek kezelése a vezérlőkben.
- **Kimenet**: a választásokból generált stílusok különálló fájlba szervezhetők a jobb teljesítményért.
- **Integrációs minta**:

```php
// Pszeudokód: JetStyleManager kontroll hozzáadása saját blokkhoz
add_action( 'jet-sm/register-style-controls', function( $manager ) {
  $manager->add_section( 'card', [ 'label' => 'Kártya' ] );
  $manager->add_control( 'card_bg', [
    'type'         => 'color',
    'label'        => 'Háttérszín',
    'css_selector' => '{{WRAPPER}} .card',
    'css_property' => 'background-color',
    'responsive'   => true,
  ] );
} );
```

Ezzel kész UI-t és CSS-generálást kapsz, saját build-rendszer nélkül.

## Előnyök és értékajánlat

- **Kódmentes stílusolás**: kevesebb egyedi CSS, gyorsabb munka.
- **Egységes dizájn**: a csapat ugyanazokat a vizuális szabályokat alkalmazza, eltérés nélkül.
- **Reszponzív kontroll**: mobilra, tabletre, asztalira külön finomhangolás.
- **Idő- és költségmegtakarítás**: fejlesztői órák helyett vizuális állításokkal készülsz el.
- **Jobb teljesítmény**: a stílusok optimalizált betöltése könnyebb szerkesztőt és gyorsabb oldalt ad.

## Kinek ajánlott?

- **Weboldal-építőknek és tartalomszerkesztőknek**, akik JetEngine, JetSmartFilters vagy JetFormBuilder blokkokat használnak a Gutenbergben, és gyorsan akarnak szép, reszponzív felületeket.
- **Ügynökségeknek és csapatoknak**, ahol több szerkesztő dolgozik és kulcs az egységes megjelenés, minimális CSS-szel.
- **Bővítményfejlesztőknek**, akik saját Gutenberg-blokkjaikhoz szeretnének kész stílus-UI-t és CSS-generálást adni, egységes API-val.

## Korlátok és megjegyzések

- A **Block Style** panel elsősorban a **JetPlugins** Gutenberg-blokkjaival működik; nem ad teljes körű stílusolást az összes alap WordPress blokkhoz.
- Az **Editor Load Level** és a **skins** funkcionalitás a Crocoblock ökoszisztémában, bizonyos szerkesztőkben érhető el teljes értékűen; Gutenbergben a fő fókusz a Block Style panel.

---

Összefoglalva: a JetStyleManagerrel vizuálisan, gyorsan és következetesen stílusolhatod a JetPlugins Gutenberg-blokkjait. Ha kódmentes, reszponzív beállításokat és fejlesztőbarát stílus-API-t keresel, ez a bővítmény pontosan erre való.