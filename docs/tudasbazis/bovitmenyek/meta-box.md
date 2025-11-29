---
title: "Meta Box"
description: "Fejlesztői eszköztár WordPresshez egyedi mezők, meta boxok, tartalommodellek, kapcsolatok és sablonozás létrehozásához – kóddal és vizuális felülettel."
sidebar_label: "Meta Box"
---

## Mi ez és milyen problémát old meg?

A Meta Box egy fejlesztői eszközkészlet, amellyel **egyedi meta boxokat és mezőket** hozhatsz létre WordPressben. Bejegyzésekhez, oldalakhoz, egyedi bejegyzéstípusokhoz, taxonómiákhoz, felhasználókhoz, kommentekhez és **saját beállítási oldalakhoz** is adhatsz strukturált adatokat. A cél, hogy a WordPress-t valódi, dinamikus CMS-sé alakítsd, ahol az adatok nem szövegblokkokba rejtve élnek, hanem jól szervezetten, lekérdezhetően és megjeleníthetően.

## Változatok röviden

- **Meta Box (alap)**: könnyű keretrendszer, elsősorban kódos használathoz.
- **Meta Box Lite (ingyenes)**: tartalmazza az alapot, a vizuális **MB Builder**-t és az összes ingyenes kiegészítőt (CPT/Tax UI, kapcsolatok, REST, integrációk stb.). Ideális „no/low-code” induláshoz.
- **Meta Box AIO (prémium)**: minden ingyenes és prémium modul egyetlen bővítményben, külön telepítés nélkül.

## Fő funkciók és hogyan működnek

### Mezők és csoportok
- **40+ mezőtípus**: szöveg, szám, WYSIWYG, dátum/idő, szín, kép/fájl, média, oEmbed, felhasználó, bejegyzés, taxonómia, térkép, slider stb.
- **Klónozhatóság**: ismételhető mezők és **csoportok**, akár többszintű (nested) szerkezet.
- **Feltételes logika és validáció**: csak akkor jelenjen meg/legyen kötelező, ha értelme van. Így stabil, hibamentes űrlapokat adsz az adminnak.

### MB Builder (vizuális szerkesztő)
Drag‑and‑drop felületen állítod össze a mezőket és csoportokat. A beállításokat **exportálhatod PHP‑kódba** verziókezeléshez vagy telepítő scripthez.

### Egyedi bejegyzéstípusok és taxonómiák (CPT/Tax UI)
Teljes körű UI egyedi bejegyzéstípusokhoz és taxonómiákhoz, szintén exportálható PHP‑ba. Gyorsan kialakíthatsz jól strukturált adatmodellt.

### Kapcsolatok (MB Relationships)
Kétirányú **egy‑sok** és **sok‑sokhoz** kapcsolatok bejegyzések, taxonómiák és felhasználók között. Külön kapcsolat‑táblát használ a gyors lekérdezésekhez, és egyszerű API-t ad a lekérdezésre.

### MB Views (sablonozás)
Sablon‑ és nézetkészítő, amellyel a mezőket kódkímélően teheted ki a frontendre. Beállíthatod, hogy hol jelenjen meg (egyedi bejegyzés, archív), és twig‑szerű szerkesztőt kapsz.

### MB Blocks (Gutenberg)
**Egyedi blokkok** készítése főként PHP‑vel, React/webpack nélkül. Támogatja a teljes oldalszerkesztést (FSE) és együttműködik a Builderrel.

### MB Frontend Submission
Űrlapok a **frontenden**: a felhasználók adatot és bejegyzést küldhetnek be. Van blokk/shortcode, jogosultság, állapotkezelés (piszkozat/ellenőrzés/publikálás) és „saját beküldéseim” felület.

### Beállítási oldalak (MB Settings Page)
Korlátlan admin beállítási oldalt hozhatsz létre tabokkal, kétoszlopos elrendezéssel, Customizer- és hálózati (multisite) támogatással.

### Egyedi táblák (MB Custom Table)
A mezőértékeket **saját adatbázis‑táblákba** mentheted (egy sor/bejegyzés, mezőnként oszlop). Ez nagy adatállománynál drámai teljesítménynyereség és egyszerűbb export/import.

### REST API kiterjesztés
A mezőértékek megjelennek a WordPress REST válaszokban egy gyűjtőkulcs alatt, és **közvetlenül frissíthetők**. Headless projektekhez ideális.

### Integrációk és kompatibilitás
- Oldalépítők: dinamikus adatbekötés (pl. templatékban).
- Keresés/szűrés: egyedi mezők alapján.
- SEO bővítmények: a mezőtartalom bevonása az analitikába.
- Import: dedikált kiegészítő a mezők feltérképezésére.
- Multisite, teljesítménybarát működés; a bővítmény **nem küld adatot külső szerverre**.

## Gyakorlati példák

- **Ingatlanlista**: mezők (ár, alapterület, cím, geolokáció, fotók) csoportokban; beküldés frontenden; listázás MB Views‑szal; szűrés külső szűrőbővítménnyel; tárolás egyedi táblában a gyors lekérdezésért.
- **Eseménykezelés**: dátum/idő, helyszín; fellépők és események között sok‑sokhoz kapcsolat; megjelenítés sablonnal és dinamikus blokkokkal.
- **Apróhirdetés**: regisztrált felhasználók a frontenden küldenek be hirdetést képekkel; státuszkontrollal és saját beküldések oldalával.

## Gyors fejlesztői példa (PHP)

```php
add_filter('rwmb_meta_boxes', function ($meta_boxes) {
    $meta_boxes[] = [
        'title'      => 'Ingatlan adatok',
        'post_types' => ['ingatlan'],
        'fields'     => [
            ['id' => 'ar',       'name' => 'Ár',        'type' => 'number', 'step' => 1000],
            ['id' => 'cim',      'name' => 'Cím',       'type' => 'text'],
            ['id' => 'terulet',  'name' => 'Alapterület (m²)', 'type' => 'number'],
            [
                'id'      => 'galeria',
                'name'    => 'Képgaléria',
                'type'    => 'image_advanced',
                'max_file_uploads' => 10,
            ],
        ],
    ];
    return $meta_boxes;
});
```

A fenti kód egy bejegyzéstípushoz rendel mezőcsoportot. Ugyanezt UI‑val is létrehozhatod a Builderben, majd kiexportálhatod PHP‑ba.

## Előnyök és értékajánlat

- **Gyorsabb fejlesztés**: vizuális építés + kódexport = kevesebb hibázási lehetőség, gyors onboarding a csapatnak.
- **Strukturált adatok**: jól szervezett modellek, amik könnyen lekérdezhetők, megjeleníthetők és migrálhatók.
- **Teljesítmény nagy adatmennyiségnél**: egyedi táblák és kapcsolat‑táblák gyorsítják a lekérdezéseket.
- **Rugalmas megjelenítés**: Views, blokkok és oldalépítők natív integrációi.
- **Headless‑kész**: REST‑en át az adatok olvashatók/írhatók.
- **Adatbiztonság és megfelelés**: nem küld adatot külső szerverre, multisite‑kompatibilis.

## Kinek ajánlott?

- **WordPress fejlesztőknek**: tiszta API, Composer‑barát felépítés, rengeteg hook.
- **Ügynökségeknek és site buildereknek**: gyors prototípus és gyártás, exportálható beállítások, skálázható struktúrák.
- **Tartalomintenzív oldalaknak**: ingatlan, autó, esemény, recept, portfólió, csapatprofil, termékkonfigurátor.
- **Headless/app csapatoknak**: REST integráció, testreszabható adatmodell.
- **Nagy adatállományokhoz**: egyedi táblák, hatékony indexelés és könnyebb adatcsere.

## Telepítés és követelmények

Telepítheted az alap bővítményt, választhatod az ingyenes Lite csomagot (Builderrel és ingyenes kiegészítőkkel), vagy a mindent egyben AIO-t. Ajánlott modern PHP‑verzió és naprakész WordPress. A modulok egymással zökkenőmentesen működnek, így a projekt igényeihez mérten bővíthetsz.

## Összegzés

A Meta Box egy **komplett, moduláris eszközkészlet** a WordPress dinamikus, strukturált tartalomkezeléséhez. Széles mezőválasztékkal, vizuális szerkesztéssel, gyors adat‑tárolással, sablonozással és kiterjedt integrációkkal lefedi a legtöbb üzleti igényt — a prototípustól a nagy forgalmú, adatgazdag rendszerekig. Ha szeretnél, készíthetsz vele percek alatt működő űrlapot, vagy komoly, több entitást és kapcsolatot kezelő rendszert: a keretrendszer mindkettőt támogatja, felesleges bonyodalom nélkül.