---
title: "MB Group"
description: "A Meta Box keretrendszer prémium kiegészítője, amellyel ismételhető, egymásba ágyazható és összecsukható mezőcsoportokat hozhatsz létre, optimalizált adattárolással."
sidebar_label: "MB Group"
---

## Mi ez és milyen problémát old meg?

Az MB Group a Meta Box keretrendszerhez készült kiegészítő, amely egy új, **group** mezőtípust ad a repertoárhoz. Ezzel logikailag összetartozó egyedi mezőket csoportokba rendezhetsz, a csoportokat ismételhetővé teheted, egymásba ágyazhatod, és összecsukható panelként jelenítheted meg. A végeredmény: tiszta, áttekinthető admin felület még nagyon összetett adatstruktúrák esetén is, kevesebb adatbázis‑bloattal.

Tipikus helyzet: több, azonos szerkezetű adategységet kezelsz (pl. több szerző egy könyvhöz, több dal egy albumhoz, több telephely egy céghez). Ahelyett, hogy rengeteg külön mezőt hoznál létre, egyetlen csoportot definiálsz, és azt klónozod – így a szerkesztőknek természetes, blokkos szerkesztési élményt adsz.

## Fő funkciók, érthetően

- **Ismételhető (clone) csoportok**: Egy teljes mezőblokk (és al‑blokkjai) egy kattintással hozzáadható újra és újra. A klónok sorrendjét **drag‑and‑drop** módszerrel állíthatod. Ideális listákhoz, ismétlődő elemekhez.
- **Többszintű nesting**: Csoporton belül újabb **group** mezőket helyezhetsz el, tetszőleges mélységig. Így modellezhetsz hierarchiákat (pl. fejezet → alfejezet → elemek).
- **Összecsukható csoportok**: A csoportokat **collapsible** módban jelenítheted meg. Menthető az állapot (**save_state**), beállítható az alapértelmezett nyitottság (**default_state**), és adható **dinamikus címsor** (**group_title**), amely például almező értékéből vagy sorszámból épül fel.
- **Rendezett admin UI**: A csoportosítás önmagában csökkenti a vizuális zajt. Más kiegészítőkkel – például oszlopos elrendezéssel – még strukturáltabb űrlapokat kapsz.
- **Adatbázis‑optimalizáció**: A csoport almezői egyetlen meta kulcs alatt, szerializált tömbként tárolódnak. Ez drasztikusan csökkenti a meta tábla sorainak számát, és nagy mezőszám mellett gyorsabb admin élményt adhat.
- **Integrációk és logika**: Jól működik feltételes megjelenítéssel; csoporton belül az almezők azonosítója a csoport ID‑jével egészül ki (pl. `groupID_fieldID`), így precíz szabályokat írhatsz.

## Gyakorlati példák

- **Könyv adatlap**: Több szerző (név, szerep, weboldal), kiadó adatai, kiadási év. A „Szerzők” egy klónozható csoport.
- **Zenei album**: Dalszámok listája (cím, hossz, közreműködők – ez utóbbi akár al‑csoport). Drag‑and‑drop sorrend.
- **Csapatoldal**: Tagok (név, pozíció, portré, közösségi linkek). A csoport címe lehet „`{name}`".
- **Telephelyek**: Cím, nyitvatartás, kapcsolattartó. Több telephely? Új klón.
- **Gyakori kérdések (FAQ)**: Kérdés–válasz párok, összecsukható csoportokkal, mentett nyitottsággal.

## Használat röviden

A **group** mezőt úgy definiálod, mint bármely más Meta Box mezőtípust, saját almezőlistával és opciókkal (pl. **clone**, **sort_clone**, **collapsible**, **group_title**).

```php
add_filter( 'rwmb_meta_boxes', function( $meta_boxes ) {
    $meta_boxes[] = [
        'title'  => 'Példa csoport',
        'fields' => [
            [
                'name'         => 'Személyek',
                'id'           => 'people',
                'type'         => 'group',
                'clone'        => true,
                'sort_clone'   => true,
                'collapsible'  => true,
                'save_state'   => true,
                'group_title'  => 'Személy #{#}: {name}',
                'fields'       => [
                    [ 'name' => 'Név',   'id' => 'name',  'type' => 'text' ],
                    [ 'name' => 'Email', 'id' => 'email', 'type' => 'email' ],
                ],
            ],
        ],
    ];
    return $meta_boxes;
});
```

Értékkiolvasásnál a teljes csoport tömbként érkezik:

```php
$people = rwmb_meta( 'people' ); // klónok tömbje, mindegyikben az almezők értékei
```

## Adattárolás és lekérdezés

- A csoport és al‑csoportok értékei egyetlen meta kulcs alatt, szerializált tömbként tárolódnak. Előny: kevesebb sor a meta táblában, jobb skálázhatóság sok mező esetén.
- Fontos kompromisszum: a szerializált struktúrára a natív meta szűrés nem hatékony. Ha a csoporton belüli mezőkre később szűrnöd/keresned kell, tartsd a kritikus értékeket külön, nem csoportos mezőben (vegyes tárolási stratégia).
- Saját táblás tárolás esetén is a csoport tömbként, egy oszlopban marad; SQL szintű szűrésre továbbra sem ideális.
- Képek/fájlok a nyers azonosítóikkal/URL‑jeikkel érkezhetnek; szükség esetén helper függvényekkel formázd.

Gyakorlati tanács: ami „megjelenítési” vagy „blokk” logikát szolgál (ismétlődő űrlapblokkok), mehet csoportba; ami „lekérdezési” vagy „szűrési” igény (pl. év, címke), inkább külön mező legyen.

## Előnyök és értékajánlat

- Jelentősen **csökkenti az admin felület zsúfoltságát**, jobb szerkesztési élményt ad.
- **Gyorsabban építesz** összetett adatbeviteli űrlapokat; nem kell kézzel „számozni” az ismétlődő mezőket.
- **Skálázható adattárolás** sok mező mellett is; kevesebb meta sor, kisebb bloat.
- **Rugalmas**: klónozható, rendezhető, összecsukható, hierarchikus – egy eszköz, sok mintára.

## Kinek ajánlott?

- **Fejlesztőknek és ügynökségeknek**, akik rendszeresen építenek egyedi tartalomtípusokhoz összetett mezőstruktúrákat.
- **Tartalomgazdag oldalaknak** (kiadók, zenei katalógusok, adatbázis‑szerű site‑ok), ahol sok az ismétlődő elem.
- **Site builder‑eknek**, akik a szerkesztőknek tiszta, intuitív űrlapokat akarnak adni, minimális karbantartási költséggel.

Ha sok és változó elemszámú adategységed van, kell a klónozás és a jó admin UX – ez a te eszközöd. Ha viszont elsődleges igény a mezőszintű lekérdezés/szűrés, tervezz vegyes tárolással.

## Követelmények, licenc, elérhetőség

- Szükség van a Meta Box alapbővítményre.
- A kiegészítő önálló prémiumként és csomagban is elérhető.
- GPL v2+ licenc; korlátlan webhelyen használhatod; a vásárlás frissítést és támogatást biztosít meghatározott időre.

## Tippek integrációhoz

- Oszlopos elrendezéssel a csoport almezői még átláthatóbbak.
- Feltételes logikánál számolj azzal, hogy az almezők ID‑je a csoport ID‑jével egészül ki (pl. `groupID_fieldID`), így a szabályokat pontos céllal írd meg.

## Összegzés

Az MB Group a WordPress‑ben kezelt, összetett és ismétlődő adatszerkezetekhez tervezett professzionális eszköz. Erőssége a klónozható, többszintű, összecsukható csoportok és az adatbázis‑barát tárolás; cserébe a csoporton belüli almezők közvetlen meta szűrése nem ajánlott. Ha jól tervezed a mezőstratégiát, gyorsabban építesz, kevesebbet hibázol, és a szerkesztőid imádni fogják az űrlapokat.