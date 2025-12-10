---
title: "Gravity Forms Multilingual"
description: "Hivatalos WPML-integráció a Gravity Forms űrlapok többnyelvű kezeléséhez: egy forrásűrlap, fordítások az ATE-ben, helyes megjelenítés nyelvváltáskor."
sidebar_label: "Gravity Forms Multilingual"
---

## Mi ez és milyen problémát old meg?

A **Gravity Forms Multilingual (GFML)** a **WPML** hivatalos integrációs bővítménye, amellyel a **Gravity Forms** űrlapjaid többnyelvűen, egységesen kezelhetők. Ahelyett, hogy minden nyelvre külön űrlappéldányt készítenél és tartanál karban, egyetlen „forrásűrlapot” hozol létre, a fordításokat pedig a **WPML Fordítási műszerfalán** és az **Advanced Translation Editorban (ATE)** végzed. Az oldal nyelvének váltásakor a látogatók automatikusan a megfelelő fordítású űrlapot, megerősítéseket és értesítéseket látják/kapják.

## Fő funkciók, érthetően

- **Űrlapelemek fordítása egy helyen**: Fordíthatod az űrlap címét, mezőcímkéket és al-címkéket, választási lehetőségeket (rádió/checkbox/lista/lenyíló), valamint a **megerősítéseket** és **értesítéseket**. A fordítási egységek az ATE-ben ember-olvasható címkékkel, logikusan csoportosítva jelennek meg.
- **Speciális kiegészítők támogatása**: A **Survey Add-On** és a **Conversational Forms** elemei is fordíthatók, beleértve a speciális UI-címkéket. Többoldalas űrlapnál az „utolsó oldal gomb” képe is regisztrálható fordításra.
- **Kötelező mezők jelölői**: A „required” jelölések szövegei is lokalizálhatók, így az űrlap minden részlete a megfelelő nyelven jelenik meg.
- **Használhatósági finomítások**: A hibaüzenetek a fordított mezőcímkékre hivatkoznak; a jelölőnégyzetek fordított értékei helyesen jelennek meg az admin bejegyzéslistában és exportokban; az értesítések nyelvfüggő logikája és a feltételes termékek/beállítások kezelése többnyelvű környezetben stabil.
- **WPML-ökoszisztémába illesztés**: A teljes folyamat a WPML fordítási munkafolyamatába illeszkedik, kézi, automatikus vagy professzionális fordítással.

## Hogyan működik a gyakorlatban?

1. **Egy forrásűrlap**: A Gravity Formsban elkészíted az űrlapot a végleges logikával (mezők, feltételek, értékek).
2. **Fordítás indítása**: A WPML **Translation Dashboard** felületén kijelölöd az űrlapot, és elküldöd fordításra. Az ATE-ben kapsz minden űrlapelemet fordítható egységként.
3. **Megjelenítés**: Az oldaladon ugyanazt az űrlapot ágyazod be. Nyelvváltáskor a GFML a megfelelő fordításokat tölti be, beleértve a **megerősítéseket** és az e-mail **értesítéseket** is.

Beágyazási példa (ugyanazt használod minden nyelven):
```
[gravityform id="1" title="false" description="false" ajax="true"]
```

### Konkrét példák

- **Kapcsolati űrlap több nyelven**: Egy forrásűrlap, fordított címkék és hibák; a német oldalon német mezők és visszaigazoló üzenet jelenik meg.
- **Ajánlatkérés feltételes logikával**: A választási lehetőségek **value** mezőit változatlanul hagyod (pl. product_basic, product_pro), csak a feliratokat fordítod. A logika minden nyelven ugyanúgy működik.
- **Kérdőív (Survey)**: Egy kérdéssor, több nyelv; a skálák és opciók fordíthatók, az adminban és exportban a beérkező adatok következetesek.

## Telepítés és alap workflow

- Telepítsd és aktiváld: **WPML**, **WPML String Translation**, **Gravity Forms**, **Gravity Forms Multilingual**.
- WPML → **Translation Dashboard**: válaszd ki az űrlapot, küldd fordításra.
- WPML → **Translations**: nyisd meg az **ATE**-t, rögzítsd a fordításokat, majd zárd le.
- Fontos: az űrlapot tartalmazó oldal/bejegyzés fordítását is frissítsd, hogy a nyelvváltó a megfelelő űrlapot mutassa.

## Előnyök és értékajánlat

- **Kevesebb karbantartás**: nincs több külön űrlap nyelvenként; egy helyen frissítesz.
- **Kisebb hibakockázat**: azonos logika, azonos **value** értékek; stabil feltételes működés.
- **Gyors fordítási kör**: az ATE-ben célzottan csak az űrlapelemeket fordítod.
- **Professzionális lokalizáció**: megerősítések és értesítések is a megfelelő nyelven mennek ki.

## Kinek ajánlott?

- **Tartalomkezelőknek és ügynökségeknek**, akik többnyelvű oldalakon egységes űrlapélményt szeretnének.
- **E-kereskedelmi és B2B oldalaknak**, ahol feltételes űrlapok, termékválasztók és komplex értesítések futnak több nyelven.
- **Kutatóknak/HR-nek/marketingnek**, akik kérdőíveket vagy jelentkezési űrlapokat kezelnek több piacra.

## Tippek és bevált módszerek

- **Tartsd stabilan a choice „value” mezőket** (nyelvfüggetlen azonosítók), és csak a feliratokat fordítsd. Így a feltételes logika minden nyelven megbízható marad.
- **Előbb fordítsd az űrlapot, aztán az oldalt**: a helyes megjelenéshez mindkettőnek késznek kell lennie.
- **Entries nyelve**: ha fontos a beküldés nyelve, adj az űrlaphoz rejtett mezőt, és rögzítsd automatikusan a nyelvkódot.

Példa a beküldés nyelvének mentésére (rejtett mező ID-ját állítsd be):
```php
add_action('gform_pre_submission', function () {
  if (defined('ICL_LANGUAGE_CODE')) {
    $_POST['input_5'] = ICL_LANGUAGE_CODE; // pl. 'en', 'de', 'hu'
  }
});
```

## Ismert korlátok és hibakeresés

- **Bejegyzések (entries) nem „fordulnak”**: a beküldött tartalmat a bővítmény nem fordítja le; szűréshez használd a rögzített nyelvkódot.
- **HTML és speciális mezők**: egyes egyedi HTML-szegmensek és speciális mezőtípusok külön odafigyelést igényelhetnek; ha egy címke nem jelenik meg fordítva, ellenőrizd, hogy regisztrált fordítható egységként.
- **Kiegészítők és stílusok**: ha egy add-on elem vagy képes opció nem fordul, frissítsd a bővítményeket és nézd át, hogy az adott elem szerepel-e fordíthatóként.

---

Röviden: a Gravity Forms Multilingual abban segít, hogy egyetlen forrásűrlapból, a WPML fordítási folyamatában készíts professzionális, többnyelvű űrlapélményt – stabil feltételes logikával, lokalizált megerősítésekkel és értesítésekkel. Ha több piacot szolgálsz ki, ez a legegyszerűbb és legbiztosabb út a következetes űrlapkezeléshez.