---
title: "Ninja Forms - Excel Export"
description: "Űrlapbeküldések exportálása natív Excel (.xlsx/.xls) formátumba, célzott szűréssel és oszlopsorrendezéssel."
sidebar_label: "Ninja Forms - Excel Export"
---

## Bevezetés: mire való és milyen problémát old meg?

A Ninja Forms – Excel Export egy hivatalos, prémium kiegészítő, amellyel a Ninja Forms űrlapbeküldéseit közvetlenül **Excel-fájlba** exportálhatod. Ahelyett, hogy CSV-vel és utólagos formázással bajlódnál, egy kattintással kapsz **.xlsx** vagy **.xls** fájlt, a szükséges mezőkkel és sorrendben. Így kevesebb az adatkonverzió, gyorsabbak a riportok, és az adatátadás is gördülékenyebb azok felé, akik Excelben dolgoznak.

## Követelmények és előfeltételek

- **Ninja Forms telepítve és aktív**
- Az érintett űrlapokon a **Store Submission** (Beküldés mentése) akció legyen bekapcsolva, hogy a beküldések a WordPress adatbázisban legyenek.
- A szerveren elérhető **PHP ZipArchive** modul (különben az export nem fut).
- Adminisztrátori hozzáférés a WordPress vezérlőpulthoz.

## Telepítés és aktiválás

1. Telepítsd és aktiváld a kiegészítőt a WordPress bővítménykezelőn vagy a licenckezelő felületeden keresztül.
2. Aktiváld a licencet (ha szükséges), hogy megkapd a frissítéseket és a támogatást.
3. Ellenőrizd, hogy az űrlapjaidon aktív a **Store Submission** akció.

## Fő funkciók, érthetően

- **Natív Excel-export (.xlsx és .xls)**  
  Válaszd ki, melyik formátum a kompatibilisebb a csapatod számára. Az .xlsx modern, az .xls régebbi környezetekhez lehet hasznos.

- **Mezők kiválasztása és oszlopok sorrendezése**  
  Pipáld ki, mely mezőket exportáld, majd **drag-and-drop** módszerrel állítsd be az oszlopok sorrendjét. Így az exportált táblázat már a neked megfelelő struktúrával készül el.

- **Dátum- és értékalapú szűrés**  
  Szűrj egy adott időszakra, és pontosíts mezőfeltételekkel (például **CONTAINS**, **IS EMPTY**, **GREATER THAN**, **LESS THAN**). Ezzel kizárólag a releváns adatok kerülnek az Excelbe.

- **Egy felületen vezérelhető export**  
  A WordPressben a **Ninja Forms > Excel Export** menüben végzed az egész folyamatot: űrlap választása, szűrés, mező- és formátumbeállítás, letöltés.

- **Nincs beépített mennyiségi limit**  
  A korlátot a szerver erőforrásai határozzák meg. Nagy adathalmaznál érdemes időszakra vagy feltételekre szűrni.

## Hogyan működik? – Lépésről lépésre

1. Nyisd meg: WordPress > Ninja Forms > **Excel Export**.  
2. Válaszd ki az űrlapot a listából.  
3. Állíts be szűréseket: dátumtartomány és/vagy mezőfeltételek.  
4. Jelöld ki az exportálandó mezőket, rendezd az oszlopokat.  
5. Válaszd ki a formátumot (**.xlsx** vagy **.xls**).  
6. Kattints a **Download Excel file** gombra.

## Haladó szűrési példák

- Csak a hónap beküldései: kezdő dátum a hónap első napja, záró dátum a hónap utolsó napja.  
- VIP leadek: “Megjegyzés” CONTAINS “VIP”.  
- Minimum rendelésérték: “Összeg” GREATER THAN 100000.  
- Hiányos bejegyzések felkutatása: “Telefonszám” IS EMPTY.

```text
Példa szűrés:
- Dátum: 2025-01-01 – 2025-03-31
- Feltétel 1: Mező = "Értékesítési státusz", Operátor = CONTAINS, Érték = "nyertes"
- Feltétel 2: Mező = "Összeg", Operátor = GREATER THAN, Érték = 250000
```

## Gyakorlati használati esetek

- **Gyors riportkészítés**: Havi marketing lead riport csak a szükséges mezőkkel és sorrenddel, azonnal Excelben.  
- **Pénzügyi egyeztetés**: Megrendelési űrlapok exportja .xlsx-be, összegmezővel és dátummal, előkészítve a könyvelésnek.  
- **Ügyfélszolgálati átadás**: Releváns jegyek kiszűrése (pl. “Sürgős” CONTAINS “igen”), a csapat számára érthető oszlopsorrenddel.  
- **Kutatás/elemzés**: Adattisztítás Excelben, pivot kimutatások készítése közvetlenül a kiexportált fájlból.

## Kapcsolódó automatizálás

Az Excel Export manuális letöltésre optimalizált. Ha **ütemezett, e-mailben érkező jelentésekre** van szükséged, használd a Scheduled Submissions Export kiegészítőt. Az ütemezett jelentések CSV formátumban érkeznek, és a WordPress időzített feladatait (WP-Cron) használják.

## Előnyök és értékajánlat

- **Időmegtakarítás**: nincs külön CSV–Excel konverzió és utóformázás.  
- **Pontosság**: célzott szűrések és mezőválasztás – csak a számodra fontos adatok kerülnek a fájlba.  
- **Rugalmasság**: oszlopsorrend és formátumválasztás, kompatibilitás régi és új Excel-verziókkal.  
- **Egyszerűség**: minden lépés egyetlen WordPress felületen.

## Kinek ajánlott?

- **Marketingeseknek**: gyors lead- és kampányriportok.  
- **Értékesítésnek és pénzügynek**: megrendelések, ajánlatkérések struktúrált exportja.  
- **Ügyfélszolgálatnak**: eszkalációra és SLA-követésre célzott listák.  
- **Kutatóknak és elemzőknek**: Excel-alapú kimutatásokhoz tiszta bemeneti adatok.  
- **Kis- és középvállalkozásoknak**: adminisztráció és döntéstámogatás Excelben.

## Hibaelhárítás

- **Nem indul az export**: ellenőrizd, hogy a szerveren elérhető a **PHP ZipArchive** modul.  
- **Üres Excel fájl**: győződj meg róla, hogy az űrlapon aktív a **Store Submission**, és valóban vannak beküldések a megadott szűrési feltételekre.  
- **Hiányzó mezők**: a mezőlista pipálásánál jelöld be a kért mezőket, és állítsd be a kívánt sorrendet.  
- **Nagy adathalmaz miatti időtúllépés**: szűkítsd a dátumtartományt, egyszerre kevesebb mezőt exportálj, vagy növeld a szerver erőforrásait.

## Adatvédelem és megfelelőség

Az Excel-fájlok gyakran **személyes adatokat** tartalmaznak.  
- Tárold a fájlokat biztonságos helyen, korlátozott hozzáféréssel.  
- Kövesd a szervezeti adatkezelési szabályokat és jogszabályi előírásokat.  
- Oszd meg csak azokkal, akiknek valóban szükségük van rá.

## Összegzés

A Ninja Forms – Excel Export gyors, pontos és rugalmas megoldás arra, hogy a WordPress űrlapadataidat **natív Excel** formátumban töltsd le. Célzott szűrés, egyéni oszlopsorrend és kétféle formátum segít abban, hogy azonnal használható táblázatot kapj – kevesebb utómunka, több értékteremtés. Automatizált, e-mailes jelentésekhez külön kiegészítő szükséges, CSV formátummal. A működéshez elengedhetetlen a Ninja Forms, a Store Submission akció és a ZipArchive modul.