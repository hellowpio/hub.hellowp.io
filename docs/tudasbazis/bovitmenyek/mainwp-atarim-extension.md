---
title: "MainWP Atarim Extension"
description: "Kétirányú integráció a MainWP és az Atarim között vizuális ügyfél‑visszajelzéshez, feladatkezeléshez és riportoláshoz."
sidebar_label: "MainWP Atarim Extension"
---

## Mi ez és milyen problémát old meg?

A MainWP Atarim Extension egy hivatalos kiegészítő, amely összeköti a **MainWP** központi WordPress‑kezelő irányítópultot az **Atarim** vizuális együttműködési platformjával. Célja, hogy felszámolja az e‑mail/chat káoszt, és minden ügyfélkérést egy helyre tereljen: az élő weboldalra rögzített, pontos kontextussal ellátott vizuális feladatként. Közben a MainWP‑ben központi áttekintést kapsz a teljes portfóliódról, és a riportokba is be tudod húzni a ténylegesen végzett munkát.

Röviden: az Atarimban létrejövő vizuális feladatok láthatók a MainWP‑ben, a MainWP „site vitals” adatai (frissítések, sérülékenységek, uptime) pedig megjelennek az Atarim ügynökségi irányítópultján. Egy kattintással oda‑vissza navigálhatsz a kontextushoz.

## Fő funkciók részletesen

- **Egykattintásos vizuális együttműködés**  
  A MainWP „Manage Sites” nézetében egy „Collaborate” jellegű hivatkozással az adott webhely azonnal megnyílik az Atarim felületén. Itt közvetlenül az élő oldalon jelölhetsz ki elemeket, hagyhatsz kommentet, és feladatot hozhatsz létre automatikus kontextusadatokkal (képernyőkép, böngésző, felbontás).

- **Atarim feladatlista a MainWP-ben**  
  A webhelyeiden keletkező Atarim feladatok egy összesített listában jelennek meg a MainWP‑ben. Rálátsz site‑onként és globálisan is, státuszokkal és alapvető metaadatokkal. Egy kattintással a megfelelő feladat nézetére ugrasz vissza az Atarimban – pont arra az oldalrészre, ahol a kérés keletkezett.

- **Webhely‑állapot (site vitals) megjelenítés az Atarimban**  
  A MainWP által gyűjtött állapotadatok – például hány frissítés vár, vannak‑e biztonsági jelzések, és mi az uptime státusz – megjelennek az Atarim ügynökségi irányítópultján. Így az Atarim felületén dolgozva is látod, hol van sürgős teendő.

- **Jelentésintegráció a Pro Reports‑szal**  
  Ha használsz Pro Reports‑ot, az Atarim feladatok és a hozzájuk rögzített időráfordítások automatikusan bekerülhetnek az ügyféljelentésekbe. Ez átláthatóvá teszi, mire ment el az idő, és mit oldottál meg.

- **Kétirányú összekapcsolás és API‑kulcsok**  
  A kapcsolat mindkét irányban működik: a MainWP REST API adja az Atarimnak a site vitals információkat, az Atarim pedig a feladatokat szinkronizálja vissza a MainWP‑be. Ehhez API‑kulcsokat állítasz be mindkét oldalon, és engedélyezed a MainWP REST API‑t.

- **Nézet testreszabása**  
  A MainWP „Manage Sites” táblázatában megjelenő Atarim oszlopot a felületen elrejtheted, és fejlesztői szinten szűrővel végleg eltávolíthatod, ha minimalista nézetet szeretnél.

## Telepítés és beállítás (rövid)

1. Telepítsd és aktiváld a kiegészítőt a MainWP Dashboardon.  
2. A MainWP‑ben add meg az **Atarim API‑kulcsot** az Atarim beállításoknál.  
3. Engedélyezd a **MainWP REST API‑t**, és generálj kulcsokat.  
4. Az Atarim irányítópulton kapcsold be a **MainWP integrációt**, és add meg a MainWP REST API kulcsokat és a Dashboard URL‑jét.  
5. Igazítsd a nézetet: döntsd el, szeretnéd‑e látni az Atarim oszlopot a Manage Sites táblázatban.

Tipp a stabil működéshez: állítsd a MainWP Dashboard permalink‑struktúráját „Post name” formára. WP‑CLI‑val például:

```
wp option update permalink_structure '/%postname%/'
```

Előfeltételek: működő **MainWP Dashboard**, aktív **Atarim fiók** (fizetős csomag szükséges), érvényes API‑kulcsok.

## Gyakorlati példák

- **Ügyfélkérés pontosítása**  
  Az ügyfél rámutat egy gombra az oldalon, megjegyzést hagy: „módosítsuk a feliratot”. Te a MainWP‑ben látod az új Atarim feladatot, rákattintasz, és az Atarim azonnal megnyitja a kérdéses oldalt, a gombra fókuszálva. Nincs találgatás, nincs képernyőfotó‑cserebere.

- **Karbantartási nap több webhelyen**  
  Az Atarim irányítópultján azonnal kiugrik, mely site‑okon sok a függő frissítés vagy van biztonsági jelzés – ezeket a MainWP szolgáltatja. Prioritás szerint végigmész rajtuk, miközben a MainWP‑ben egy helyen követed a kapcsolódó Atarim feladatokat.

- **Transzparens havi riport**  
  A Pro Reports a hónap végén automatikusan összeszedi az Atarim feladatokat és a rögzített időket. Az ügyfél egyetlen, márkázott riportban látja, milyen kéréseket oldottál meg és mennyi idő alatt.

## Előnyök és kinek ajánlott

- **Kevesebb félreértés**: a vizuális jelölések és automatikus kontextusadatok egyértelművé teszik a kéréseket.  
- **Kisebb kontextusváltás**: a MainWP‑ből egy kattintás a feladat pontos helyszínére.  
- **Valós idejű rálátás**: az Atarimban is látod a flotta‑állapotot, a MainWP‑ben pedig a feladatokat.  
- **Professzionális riportolás**: az elvégzett munka és időráfordítás hitelesen kommunikálható.  
- **Skálázhatóság**: több webhely és több ügyfél kezelése összehangolt folyamatban.

Kifejezetten ajánlott **webügynökségeknek**, **karbantartást végző csapatoknak** és **freelancer webmestereknek**, akik sok WordPress oldalt kezelnek, és egységes, vizuális ügyfélkommunikációt, központi feladatkezelést, valamint átlátható riportolást szeretnének.

## Megjegyzések

- A kiegészítőt csak a **MainWP Dashboardra** telepíted; a child site‑okon nincs szükség külön komponensre.  
- Ritkán előfordulhat kompatibilitási incidens más MainWP kiegészítőkkel; tartsd naprakészen az összetevőket, és ütközésnél ideiglenesen kapcsold ki a gyanús bővítményeket a hiba behatárolásához.

## Összegzés

A MainWP Atarim Extension egyesíti a vizuális ügyfél‑visszajelzést és a többwebhelyes karbantartás központi menedzselését. Az Atarimban precíz, kontextusos feladatok születnek, a MainWP‑ben pedig portfólió‑szintű áttekintés, gyors ugrás és profi riportolás segít. Ha csökkenteni szeretnéd a félreértéseket, gyorsítani a kivitelezést és jobb ügyfélélményt adni, ez az integráció neked szól.