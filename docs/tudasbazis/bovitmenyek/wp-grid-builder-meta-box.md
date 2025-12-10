---
title: "WP Grid Builder - Meta Box"
description: "Hivatalos kiegészítő, amely natív Meta Box mezőtámogatást ad a WP Grid Builder rácsaihoz, kártyáihoz és facet-alapú szűrőihez."
sidebar_label: "WP Grid Builder - Meta Box"
---

## Mi ez és milyen problémát old meg?

A WP Grid Builder – Meta Box egy hivatalos add-on, amely összeköti a **Meta Box** egyedi mezőit a **WP Grid Builder** rácsaival, kártyáival és facetes szűrőivel. Ha Meta Boxszal tárolsz adatokat (egyszerű, csoportosított, klónozható vagy többszörös mezőkben), ez a kiegészítő gondoskodik róla, hogy:
- pontosan meg tudd jeleníteni a mezőértékeket a kártyákon,
- gyorsan és relevánsan tudd szűrni ezeket facetekkel,
- mindezt külön kódolás nélkül, natívan, a kezelőfelületről.

A legnagyobb gond, amit megold: a Meta Box gyakran **összetett vagy sorozatosított** struktúrákban tárol adatokat. Az add-on ezeket “lefordítja” a WP Grid Builder indexelőjének, így a szűrés villámgyors és pontos marad.

## Hogyan működik?

- A kiegészítő felismeri a Meta Boxban definiált **összes mezőtípust**, beleértve a csoportokat, klónozható mezőket és többszörös értékeket.
- A WP Grid Builder saját **index-táblájába** rendezi ezeket az értékeket, és az **Ajax** alapú motorján keresztül szolgálja ki a facetes szűrést.
- A felületen ott, ahol **mezőt választasz** (facethez vagy kártyához), egyszerűen rákereshetsz a Meta Box mezőkre, és kiválaszthatod őket – nincs kézi kulcs‑írogatás.
- Speciális esetekre is kész: támogatottak a **Map facet marker** egyedi mezői, valamint kompatibilis a **Meta Box AIO** és **Meta Box Lite** kiadásokkal is.

## Fő funkciók, érthetően

- **Teljes mezőtípus-támogatás**
  - A legegyszerűbb texttől a bonyolult csoportokig minden működik. Példa: ha egy csoporton belül van egy klónozható, többértékes select, azt külön erőfeszítés nélkül tudod facettel szűrni.
- **Közvetlen mezőválasztás a felületen**
  - Facet létrehozásakor és a kártyaépítőben a “custom field” blokknál közvetlenül kereshetsz a Meta Box mezőid között. Gyors és hibamentes beállítás.
- **Nagy teljesítményű, indexelt szűrés**
  - A WP Grid Builder saját indexe és Ajax végpontjai valós idejű, facetes élményt adnak. Több mint 20 facet típust használhatsz (checkbox, radio, select, slider, dátum, rating, kereső, sorrendezés, reset, load more stb.).
- **Rugalmas kártya-megjelenítés**
  - A **drag‑and‑drop kártyaépítőben** bárhova elhelyezheted a Meta Box mezőid értékeit: címkék, ikonok, ár, státusz, cím, koordináták – bármi, amit a Meta Boxban tárolsz.
- **Speciális kompatibilitások**
  - Támogatja a Map facet marker mezőit; együttműködik a Meta Box AIO és Lite változatokkal is.

## Gyakorlati példák

- **Ingatlan lista**: Város, kerület, ár intervallum, alapterület, szobaszám, felszereltség – mind Meta Box mezők. Facetekkel pillanatok alatt leszűrheted a releváns találatokat, a kártyákon pedig az ár, lokáció és jellemzők jól láthatók.
- **Autókereső**: Márka, modell, évjárat, futásteljesítmény, üzemanyag, extrák. A többértékes, klónozható mezők sem okoznak gondot; a felhasználó valós időben látja a szűkített kínálatot.
- **Állásportál**: Pozíció, tapasztalat, foglalkoztatás típusa, lokáció, bérsáv. A kártyák a legfontosabb adatokat emelik ki, a facetes panel pedig dinamikusan kínál releváns opciókat.
- **Térképes katalógus**: Helyek listája markerrel, cím és koordináták Meta Boxból. A Map facet marker mezői alapján szűrsz, a kártyákon pedig minden lényeges információ megjelenik.

## Gyors indulás

1. Telepítsd és aktiváld a WP Grid Buildert és a Meta Boxot (AIO vagy Lite is jó).
2. Aktiváld a “Meta Box” add-ont a WP Grid Builder kiegészítők között.
3. Hozz létre egy **Facetet**, és a mezőválasztónál keresd meg a kívánt Meta Box mezőt.
4. Építs kártyát: a kártyaépítőben a “custom field” blokkal válaszd ki ugyanazt a mezőt a megjelenítéshez.
5. Indexelés után teszteld a frontenden a szűrést és a kártyaadatok megjelenését.

Példa beállítási jegyzet:
```
Facet: "Ár"
Típus: Range slider
Forrásmező: meta_box -> property_price

Kártya:
Cím: post_title
Alcím: meta_box -> property_city
Badge: meta_box -> property_status
```

## Előnyök és értékajánlat

- **Kódmentes integráció**: Nem kell egyedi lekérdezésekkel vagy sorozatosított értékek kézi bontásával bajlódnod.
- **Sebesség és skálázhatóság**: Indexelt, Ajaxos szűrés nagy adatbázison is gyors.
- **Következetes szerkesztői élmény**: Kereshető mezőlista, vizuális kártyaépítő, kevesebb hibalehetőség.
- **Rugalmasság**: Minden Meta Box mezőtípus támogatott; a speciális esetek (csoport, klón, többérték) is kezeltek.
- **Egységes ökoszisztéma**: A rácsok, kártyák és facetek egy rendszerben dolgoznak, hivatalos és karbantartott integrációval.

## Kinek ajánlott?

- **Ügynökségeknek és fejlesztőknek**: Ha összetett adatstruktúrából kell facetes keresőt készítened, ez a legrövidebb út a stabil megoldáshoz.
- **Katalógus- és piactér-üzemeltetőknek**: Termékek, szolgáltatások, erőforrások gyors, releváns szűrése egyedi jellemzők szerint.
- **Tartalomkészítőknek és szerkesztőknek**: Kód nélkül, a felületről állíthatsz be új szűrőket és kártyaelemeket.
- **Bárkinek, aki Meta Boxot használ**: Ha már Meta Boxban tárolod a mezőidet, ezzel az add-onnal azonnal “szűrhetővé és láthatóvá” teszed őket.

## Rendszerkövetelmények és licenc

- Modern WordPress környezet ajánlott; minimum WordPress 6.0 és PHP 7.0, PHP 8.x javasolt.
- A kiegészítő a WP Grid Builder licenc részét képezi; a hivatalos add-onokkal együtt érhető el, támogatással és frissítésekkel.

## Összegzés

A WP Grid Builder – Meta Box add-on a Meta Box mezőidet teljes értékűen integrálja a WP Grid Builder facetes ökoszisztémájába. Így bonyolult adatstruktúrákból is gyors, pontos szűrőket és letisztult kártyanézeteket építhetsz, fejlesztés nélkül. Ha Meta Boxot használsz, és szeretnél profi, valós idejű keresési élményt adni a felhasználóknak, ez az add-on a hiányzó láncszem.