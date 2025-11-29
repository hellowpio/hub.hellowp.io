---
title: "Advanced Custom Fields Multilingual"
description: "Hivatalos WPML-kiegészítő az ACF-mezők, mezőcsoportok és azok tartalmainak többnyelvű fordításához, mezőcsoport-szintű vezérléssel."
sidebar_label: "Advanced Custom Fields Multilingual"
---

## Mi ez és milyen problémát old meg?

Az Advanced Custom Fields Multilingual (ACFML) egy „glue” bővítmény: összekapcsolja az ACF/ACF PRO mezőidet a WPML fordítási folyamataival. Arra való, hogy a mezőcsoportok, a mezők értékei, címkéi és választási lehetőségei (Choices) nyelvek között konzisztensen, hibamentesen fordíthatók legyenek. Megoldja azokat a tipikus gondokat, mint a hiányzó ACF-értékek az ATE-ben, tévesen másolt repeater-struktúrák, nem fordított címkék vagy rossz nyelvi linkek.

## Követelmények

- Szükséges: ACF (vagy ACF PRO), WPML alapmodul, WPML String Translation és az ACFML.
- Fejlesztő: a WPML csapata (OnTheGoSystems).
- Elérhetőség: a WPML többnyelvű csomagjaiban.

## Hogyan működik röviden?

Az ACFML aktiválása után az ACF → Field Groups képernyőn megjelenik a Multilingual Setup. Itt mezőcsoportonként kiválasztod a fordítási módot:

- Same fields across languages: azonos mezőstruktúra minden nyelven, a tartalom az Advanced Translation Editorban (ATE) fordulhat, akár automatikusan.
- Different fields across languages: nyelvenként eltérő értékek/struktúra; szerkesztés a WordPress editorban vagy a page builderben.
- Expert mód: mezőnként beállítható a Translate, Copy, Copy once vagy Don’t translate.

A tartalmat a WPML felületéről küldöd fordításra, majd az ATE-ben vagy natív szerkesztőben véglegesíted.

## Fő funkciók, érthetően

- Mezőértékek, címkék, Choices fordítása: nem csak a tartalom, hanem a mezőcímkék és választási listák is többnyelvűek, így a szerkesztők és a frontend feliratok minden nyelven rendben lesznek.
- Két előre beállított mód: gyors döntés, hogy egyezzen-e a mezőstruktúra (ATE-alapú fordítás) vagy nyelvenként szabadon eltérhessen (natív szerkesztés).
- Expert preferenciák: tűpontos kontroll. Példa: Text = Translate, Number/Image = Copy, URL = Copy once, admin-only technikai mező = Don’t translate.
- ACF Blocks támogatás: a blokkok tartalma ugyanígy fordítható mindkét módszerrel.
- Page builder integráció: Elementor PRO dinamikus ACF-mezői fordításbarát módon jelennek meg.
- Taxonómia-mezők: a fogalmak neve/slugja és az ACF-hez kötött term meta helyesen fordul.
- Média nyelvenként: ACF Image/File mezőkhöz nyelvspecifikus fájlokat használhatsz; „Same fields” módban a Media Translation a javasolt út.
- Biztonság és kényelem: az ACF belső objektumai nem fordíthatók (hibák megelőzése), WYSIWYG-mezőkben a linkek nyelvi konverziója automatikus, gyorsabb opciós oldalak és jobb UX sok mezőcsoportnál.
- Repeater/Flexible vezérlés: a sorok szinkronja kikapcsolható; a Nested Repeater blokkoknál is támogatott.
- JSON/PHP-regisztrált csoportok: a fordítási preferenciák szinkronizálása kapcsolható, teljesítmény és forráskezelés szerint hangolható.
- Fejlesztői API: konstansok és horgok a finomhangoláshoz.

Példa konstansokra:
```
/* Alapértelmezett repeater-szinkron kikapcsolása és jelölések elrejtése az ATE-ben */
define('ACFML_REPEATER_SYNC_DEFAULT', false);
define('ACFML_HIDE_FIELD_ANNOTATIONS', true);
```

## Gyakorlati példák

- Marketing landing: Hero cím, alcím, CTA (Text, Link). Állítsd a csoportot „Same fields” módba, a szövegek az ATE-ben fordulnak, a linkek automatikusan a célnyelvi oldalakra mutatnak.
- Portfólió galéria: Projektenként más képek nyelvenként. Az Image mezőkhöz használd a Media Translationt, így a szerkezet egységes marad, a képek viszont nyelvspecifikusak.
- Magazin – GYIK Repeater: Ha azonos sorrendet és sorstruktúrát akarsz, hagyd bekapcsolva a szinkront. Ha piaconként eltérő kérdéssor kell, kapcsold ki a szinkront és használd a „Different fields” módot.
- Gutenberg + ACF Blocks: A tartalom „Same fields” módban ATE-vel fordul; összetettebb, nyelvenként eltérő blokkelrendezéshez válts „Different fields”-re.
- Elementor lista: Dinamikus ACF-mezőkből épített „Csapat” szekció. A címek és leírások az ATE-ben fordulnak, a képek nyelvenként cserélhetők.

## Legjobb gyakorlatok

- Mezőnevek legyenek egyediek, és ne kezdődjenek aláhúzással, hogy az ATE minden értéket megjelenítsen.
- Repeater/Flexible: előre döntsd el, egyezzen-e a struktúra (Copy/Sync) vagy térjen el nyelvek között (Copy once + kézi szerkesztés).
- Média: „Same fields” módban a médiacserét a Media Translationon végezd, ne közvetlenül a szerkesztőben.
- JSON/PHP csoportok: csak ott szinkronizálj preferenciát, ahol valóban szükséges – gyorsabb lesz az admin.

## Előnyök és értékajánlat

- Kevesebb hibakör: nincs eltűnő érték, rosszul klónozott repeater vagy téves címke.
- Gyorsabb fordítás: ATE, memóriával és automatizált fordítással.
- Skálázhatóság: nagy, adatintenzív ACF-architektúrák is kezelhetők, blokkokkal és builderrel.

## Kinek ajánlott?

- Ügynökségek és fejlesztők, akik ACF-re építik a struktúrát több nyelven.
- Tartalomgazdag portálok, magazinok, marketing oldalak, portfóliók.
- Gutenberg (ACF Blocks) és Elementor/Divi felhasználók, akik dinamikus ACF-tartalmat fordítanak.

## Rövid technikai jegyzet

A 2.0-s főverzió hozta a mezőcsoport-szintű fordítási módokat és az egyszerűsített beállítást. A 2.1.x kiadások tovább javították a teljesítményt, bővítették a CPT/taxonómia címke-fordítást és bevezették a WYSIWYG link-konverziót.

## Gyors induló ellenőrzőlista

1. Telepítsd: ACF/ACF PRO, WPML, String Translation, ACFML.
2. Válaszd ki csoportonként a fordítási módot.
3. Állítsd be az Expert preferenciákat a speciális mezőkhöz.
4. Teszteld egy bejegyzés fordítását (ATE vagy natív szerkesztő).
5. Ellenőrizd a média- és repeater-viselkedést.
6. Fordítsd a taxonómiákat és a hozzájuk kötött ACF-mezőket.
7. Kapcsold be a WYSIWYG link-konverziót és finomhangold a konstansokat/horgokat.