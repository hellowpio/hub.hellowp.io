---
title: "WP Booking System - Search Add-on"
description: "Kereső widget több naptár egyidejű elérhetőség-kereséséhez a WP Booking Systemhez, lista/grid találatokkal és automatikus dátumkijelöléssel."
sidebar_label: "WP Booking System - Search Add-on"
---

## Mi ez és milyen problémát old meg?

A Search Add-on a WP Booking System prémium kiegészítője, amellyel egy **elérhetőség-keresőt** adhatsz a webhelyedhez. Ha több erőforrást (szobák, apartmanok, hajók, autók, ruhák stb.) kezelsz külön naptárakban, a látogatók egyetlen kereséssel megtalálják, mi szabad a megadott időpontban. Nem kell naptáranként böngészniük – a találatok azonnal listázódnak, és egy kattintással megnyithatják a megfelelő naptár-oldalt. A bővítmény minden licenchez elérhető.

## Hogyan működik röviden?

- Beágyazol egy **Search Widgetet** shortcode-dal vagy oldalépítővel.
- Megadod, hogy **mely naptárakban** keressen (összes vagy kijelölt ID-k).
- A felhasználó kiválaszt egy **dátumtartományt** (vagy egynapos keresést), a kereső pedig listázza a szabad erőforrásokat.
- A találatra kattintva megnyílik a naptár-oldal; az **Automatikus kijelölés** funkció a keresett dátumokat már be is jelöli.

## Fő funkciók és mit jelentenek

- **Egyszerű beágyazás**: használhatod shortcode-dal, Gutenberg-blokkal, Elementor/Divi modullal vagy widgetként. A kereső szövegei a plugin fordítási felületén testreszabhatók.
- **Keresési kör meghatározása**: állítsd „All Calendars”-ra, ha az összes naptárban szeretnél keresni, vagy add meg **konkrét naptár-ID-k** listáját, ha csak egy részhalmazt szeretnél.
- **Nyelv és hét kezdete**: a kereső átveheti az oldal nyelvét, vagy megadhatsz kifejezett **nyelvkódot**; a hét első napja is beállítható (pl. hétfő).
- **Kiválasztás típusa**: két mód közül választhatsz:
  - **Dátumtartomány** – klasszikus többéjszakás foglalásokhoz.
  - **Single Day** – ha egynapos bérlést kínálsz (pl. autó, eszköz).
- **Minimum tartózkodás**: megszűri a találatokat, és csak azokat listázza, amelyeknél a megadott **minimális éjszakaszám** teljesül. Így a felhasználó rögtön a foglalható opciókat látja.
- **Találati lista megjelenítése**: választhatsz **lista** vagy **grid** nézetet, beállíthatod az **oldalankénti elemszámot**, és megjelenítheted az **árat** és a **kiemelt képet**. Igény esetén betöltéskor már az összes találatot is kirakhatod (keresés nélkül).
- **Automatikus kijelölés**: ha a naptár oldalhoz van linkelve, a kattintás után a widget **automatikusan kijelöli** a keresett dátumokat a naptáron – kevesebb tévedés, gyorsabb foglalás.
- **Eredmények helye**: a találatok megjelenhetnek a kereső alatt, vagy **átirányíthatod** a felhasználót egy külön eredményoldalra. Átirányításnál a céloldalon is legyen jelen a Search Widget a konzisztens élményhez.
- **Bővíthetőség fejlesztőknek**: hozzáadhatsz **egyedi keresőmezőket** (pl. Város, Típus), leírást a találati kártyákhoz, vagy akár a teljes találati **HTML-markupot** lecserélheted hookokkal. Támogatott a **FacetWP** és a **Search & Filter Pro** integráció; ezek posztokat szűrnek, ezért a naptárakat posztokhoz/linkekhez kell kötni.

## Gyakorlati példák

- **Apartmanház 8 egységgel**: a látogató beírja a dátumtartományt és a min. 3 éjszakát; a grid nézet képekkel és kezdőárral listázza a szabad apartmanokat. Kattintás után a dátumok a naptárban már ki vannak jelölve.
- **Autókölcsönző egynapos díjjal**: a kereső Single Day módra állítva csak az adott napra elérhető autókat mutatja, felesleges találatok nélkül.
- **Vitorlásflotta több marinával**: egyedi „Város/Marina” mezőt adsz a keresőhöz; így a dátum + helyszín szerint is szűrhetsz. Az eredménykártyákon rövid leírás is megjelenik.

## Előnyök és értékajánlat

- **Kevesebb kattintás**: a látogató egy kereséssel megtalálja a szabad erőforrásokat.
- **Kevesebb hiba és súrlódás**: az automatikus kijelölés és a min. tartózkodás szerinti szűrés megszünteti a „nem foglalható” próbálkozásokat.
- **Gyorsabb döntés, jobb konverzió**: kép, ár és tiszta listázás egy helyen.
- **Rugalmas illesztés**: shortcode/oldalépítő, lista vagy grid, külön eredményoldal – a folyamat a meglévő tartalomstruktúrádhoz igazítható.
- **Fejleszthető**: extra mezők, egyedi markup, integráció haladó szűrőkkel.

## Kinek ajánlott?

- **Szállásadóknak és property managereknek** (több szoba/apartman).
- **Jármű- és eszközbérlést** kínálóknak (autó, hajó, kerékpár, gép).
- **Rendezvényhelyszíneknek, ruhaszalónoknak**, ahol időalapú foglalási naptárak vannak.
- Mindenkinek, aki **több naptárat** kezel, és gyors, tiszta **elérhetőség-keresést** szeretne.

## Gyors beállítás (áttekintés)

1. Hozz létre és linkelj minden naptárhoz egy megfelelő **oldalt/bejegyzést**.
2. Add hozzá az oldalon a **Search Widgetet** (shortcode vagy oldalépítő).
3. Állítsd be a **keresési kört** (összes vagy kijelölt naptárak).
4. Válaszd ki a **kiválasztás típusát** (tartomány vagy egynapos) és a **minimum tartózkodást**.
5. Konfiguráld a **találati nézetet** (lista/grid, ár, kép, elemszám).
6. Döntsd el, hogy **helyben** jelenjenek meg az eredmények, vagy **átirányítasz** egy külön oldalra.
7. Szükség esetén testreszabhatod a feliratokat a **fordítások** felületén.

```
// Rövidkód példa (helyezd el egy oldalba vagy bejegyzésbe)
[wpbs-search]
```

## Fejlesztőknek – bővíthetőség

- **Egyedi mezők**: adj hozzá plusz szűrőket (pl. Város, Típus), és szűrj poszt meta vagy naptárcsoport alapján.
- **Leírások a találatokhoz**: egészítsd ki a kártyákat excerpttel vagy egyedi mezővel.
- **Markup csere**: a találatok HTML-je filterrel teljesen újrarajzolható.

```php
// Találati HTML testreszabása (példa)
add_filter('wpbs_search_results_html', function($html, $results, $args) {
    // Itt alakíthatod a markupot a saját sablonodhoz
    return $html;
}, 10, 3);
```

### Fontos megjegyzések

- Az **automatikus dátumkijelölés** és a haladó szűrők akkor működnek jól, ha a naptárak **oldalakhoz/bejegyzésekhez** vannak linkelve.
- Átirányítás esetén a **céloldalon is** szerepeltess Search Widgetet a konzisztens működéshez.

Összefoglalva: a Search Add-on egy több erőforrást kezelő webhely „hiányzó láncszeme”, amely egységes, gyors és testreszabható elérhetőség-keresést ad – felhasználóbarát felülettel és erős fejlesztői opciókkal.