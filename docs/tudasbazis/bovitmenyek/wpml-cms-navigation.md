---
title: "WPML CMS Navigation"
description: "A WPML kiegészítője, amely kész breadcrumbs, legördülő menü és hierarchikus oldalsáv elemeket ad többnyelvű WordPress-oldalakhoz, egyszerű sablonhívásokkal és widgetekkel."
sidebar_label: "WPML CMS Navigation"
---

## Mi ez és milyen problémát old meg?

A **WPML CMS Navigation** a WPML többnyelvű környezetéhez készült kiegészítő. Kész, beépíthető navigációs elemeket ad: **kenyérmorzsa (breadcrumbs)**, **legördülő menük** és **hierarchikus oldalsáv**. Ezek a megoldások segítenek abban, hogy a látogatók könnyebben tájékozódjanak összetett, több szintű tartalmak között, miközben a linkek és útvonalak automatikusan az **aktuális nyelvi kontextust** követik. A cél: gyors bevezetés, egységes élmény, minimális egyedi kód.

Fejlesztője az OnTheGoSystems, és a bővítmény a WPML ökoszisztémájának része. A telepítés WPML fiókból vagy az OTGS Installerrel történik; jellemzően nem a nyilvános bővítménytárból.

## Fő funkciók és működés

### Kenyérmorzsa (breadcrumbs)
- Mit csinál: a jelenlegi oldal pontos helyét mutatja a tartalomhierarchiában, kattintható útvonal-elemekkel.
- Hogyan illeszd be: egyetlen sablonhívással.
```php
do_action('icl_navigation_breadcrumb');
```
- Hol használd: tipikusan a headerben vagy közvetlenül a fő tartalom fölött.
- Testreszabás: a morzsasáv elválasztója és alapbeállításai a WPML → Navigation felületen állíthatók, megjelenését CSS-sel szabhatod.

### Legördülő menü
- Mit csinál: gyors hozzáférést ad a szekciókhoz vagy oldalszintekhez, ahol a látogató egy listából választhat céloldalt.
- Hogyan illeszd be:
```php
do_action('icl_navigation_menu');
```
- Hol használd: a fejlécben vagy egy szekció-fejlécben, ahol helytakarékos navigáció kell.

### Hierarchikus oldalsáv (oldalfa)
- Mit csinál: automatikusan generált „tartalomjegyzék” jellegű navigáció, amely a szülő–gyermek oldalszerkezetet mutatja.
- Hogyan illeszd be:
```php
do_action('icl_navigation_sidebar');
```
- Alternatíva: beépített **CMS Navigation** widget a Megjelenés → Widgetek felületen, húzd be a kívánt oldalsáv-területre.

### Oldalszintű finomhangolás
- A szerkesztőben egy **CMS Navigation** metabox segítségével megadhatod:
  - mutassa-e a gyermekoldalakat,
  - kizárja-e az aktuális oldalt,
  - melyik „szekció” alatt jelenjen meg az oldal az oldalfa nézetben.

### Globális beállítások
- A WPML → Navigation menüben állíthatod a fő opciókat (pl. elválasztó, viselkedés).

### Megjelenés és CSS
- A bővítmény két CSS-fájllal érkezik. A funkciók alapstílusait adó fájlhoz ne nyúlj; a tényleges kinézetért felelős **cms-navigation.css** fájlt másold a témádba és írd felül saját szabályokkal. Így frissítésbiztosan tudsz design-t módosítani.

### Fejlesztői kiterjeszthetőség
- Szűrők és akciók állnak rendelkezésre a listák és szekciók finom kontrolljához. Például a megjelenített szekciók bővíthetők/szűkíthetők egy szűrővel:
```php
add_filter('wpml_navbar_sections', function ($sections) {
    // módosítsd vagy egészítsd ki a $sections tömböt
    return $sections;
});
```

## Gyakorlati példák

- **Dokumentáció vagy tudásbázis**: többszintű oldalfával rendelkező kézikönyvben az oldalsáv mutatja a fejezeteket és alfejezeteket, a kenyérmorzsa pedig mindig jelzi, hol jár a felhasználó.
- **Vállalati oldal**: „Rólunk → Csapat → Vezetőség” jellegű mély oldalfák esetén a morzsasáv növeli a helyzetérzéket, a legördülő menüvel pedig gyorsan lehet szintet váltani.
- **Oktatási portál**: tananyag-modulok és leckék között a hierarchikus oldalsáv „tartalomjegyzék” szerepet tölt be, nyelvenként helyes URL-ekkel.
- **Blokk-alapú (FSE) témák**: a klasszikus sablonfájlok helyett sablonrészekbe illeszd a hívásokat, vagy használd a widgetet az admin felületen. A működési logika változatlan.

## Telepítés és első lépések

1. Telepítsd és aktiváld a bővítményt a WPML ökoszisztémáján belül (WPML fiók vagy OTGS Installer).
2. Illeszd be a kívánt hívásokat a sablonba:
   - Morzsasáv: a header vagy a tartalom fölé
   - Oldalfa: a sidebar sablonba
   - Legördülő menü: a fejlécbe vagy navigációs sávba
3. Állítsd be az alap opciókat a WPML → Navigation menüben.
4. Oldalszintű finomhangolás: használd a szerkesztőben a CMS Navigation metaboxot.
5. Stílus: másold a cms-navigation.css fájlt a témádba, és írj saját CSS-t.

## Előnyök és értékajánlat

- **Idő- és költségmegtakarítás**: kész elemek, minimális egyedi kód.
- **Többnyelvű pontosság**: a WPML nyelv- és URL-kezelésével együttműködve minden link és útvonal a megfelelő nyelvre mutat.
- **Következetes UX**: egységes navigáció mintázatok az egész webhelyen, nyelvtől függetlenül.
- **Karbantarthatóság**: központi beállítások + oldalszintű finomhangolás, frissítésbiztos CSS felülírással.
- **Rugalmasság**: sablonhívás, widget, hookok – azt a módszert választod, ami a projektedhez illik.

## Kinek ajánlott?

- **Nagy, hierarchikus tartalmakat** kezelő webhelyeknek (dokumentációk, tudásbázisok, oktatási oldalak).
- **Ügynökségeknek és fejlesztőknek**, akik gyorsan akarnak stabil, többnyelvű navigációt adni minimális kóddal.
- **Tartalomgazdáknak és szerkesztőknek**, akik oldalanként szeretnék kézben tartani, mi jelenjen meg az oldalsávban.

Mikor nem kell? Ha a témád vagy egy SEO-bővítmény már biztosít jól működő breadcrumbsot és oldalfa-navigációt, külön bővítmény nélkül is eléred a kívánt eredményt.

## Tippek és bevált gyakorlatok

- Kezdd a morzsasávval: gyors eredmény, azonnali UX-nyereség.
- Oldalfa esetén tisztítsd a hierarchiát: jól struktúrált szülő–gyermek viszonyok mellett lesz igazán hasznos.
- Témastílus: mindig a saját témádban felüldefiniált css-sel dolgozz, ne a bővítmény alapfájljait módosítsd.
- Blokk-témáknál a hívásokat sablonrészekbe tedd, vagy használd a widgetet.

## Összegzés

A WPML CMS Navigation kész, többnyelvű navigációs építőkockákat ad a kezedbe: kenyérmorzsa, legördülő menü és hierarchikus oldalsáv. Egyszerű hívásokkal és widgetekkel azonnal bevezetheted a navigációt, amely a WPML nyelvi logikáját követi. Ha komplex, többszintű tartalommal dolgozol és fontos a felhasználók tájékozódása, ez a bővítmény gyors, karbantartható és profi megoldást ad – felesleges extra kódolás nélkül.