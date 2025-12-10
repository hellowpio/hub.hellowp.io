---
title: "WooCommerce Deposits"
description: "Hivatalos WooCommerce bővítmény előleg- és részletfizetéshez; rugalmas szabályokkal és tiszta vevői kommunikációval."
sidebar_label: "WooCommerce Deposits"
---

## Mi ez és milyen problémát old meg?

A WooCommerce Deposits a WooCommerce hivatalos bővítménye, amellyel a vásárlóid teljes ár helyett **előleget** fizethetnek, vagy előre ütemezett **részletekben** rendezhetik a vételárat. Segít csökkenteni a belépési küszöböt (jobb konverzió), gyorsítja a **cash flow**-t, és mérsékli a no‑show/lemondás kockázatát. A termékoldaltól a pénztárig végig egyértelműen jelzi, mennyit kell most és később fizetni.

Tipikus felhasználás: magas értékű termékek, egyedi/gyártásra készülő rendelések, szolgáltatások, rendezvények, tanfolyamok, bérlések, illetve “layaway”/BNPL jellegű konstrukciók előfizetéses rendszer nélkül.

## Fő funkciók és hogyan működnek

- **Előleg és részletfizetés bolt- vagy termékszinten**
  - Meghatározhatod, hogy az előleg **opcionális** (vevő választhat “Pay deposit” vs “Pay in full”) vagy **kötelező** legyen.
  - A szabályokat beállíthatod globálisan, majd tetszés szerint **felülírhatod termékenként**.

- **Előleg típusai**
  - **Százalékos**: pl. 20% azonnal, a többi később.
  - **Fix összegű**: pl. 5 000 Ft letét.
  - **Fizetési terv**: ütemezett részletek százalékban, meghatározott időközökkel.

- **Fizetési tervek kezelése**
  - Külön menüpontban hozhatsz létre terveket tetszőleges számú résszel.
  - Minden részlethez megadsz egy **százalékot** és egy **időközt** (nap/hét/hónap).
  - A terv automatikusan létrehozza a jövőbeli **ütemezett alrendeléseket**.

- **Vevői felület és kommunikáció**
  - A termékoldalon megjelenik a választó (ha nem kötelező az előleg).
  - A kosár és a pénztár részletesen mutatja a **most fizetendő** és a **későbbi** összegeket.
  - A Saját fiókban a vevő látja az ütemezést és a fizetendő részleteket.

- **Rendeléskezelés**
  - Az első befizetés után a fő rendelés részben fizetett státuszba kerül.
  - A jövőbeli részletekhez külön, **Scheduled** státuszú alrendelések jönnek létre.
  - A vevő a Saját fiókból a “Pay” linkkel tudja kiegyenlíteni a részleteket.

- **Adók és kuponok**
  - Az adó a **befizetett részre** kerül felszámításra.
  - Fizetési tervek esetén a **fix összegű kuponok** automatikusan, arányosan oszlanak meg a részletek között.

- **Kompatibilitás**
  - Működik a **Cart & Checkout Blocks** alapú pénztárral.
  - Támogatja a **HPOS** (High Performance Order Storage) rendeléstárolást.

## Gyakorlati példák

1. Magas értékű bútor
   - Beállítasz egy 20% **százalékos előleget**, majd két további részletet 40–40%-kal havi ütemezésben.
   - A vevő látja: 20% most, 40% 30 napon belül, 40% 60 napon belül.
   - Admin oldal: az első fizetés után a rendszer létrehozza a két **Scheduled** alrendelést.

2. Tanfolyam/konferencia
   - **Fix letét**: 10 000 Ft most, a fennmaradó összeg az esemény előtti héten.
   - A rendelésnél egy jövőbeli alrendelés keletkezik, a vevő e-mailben és a fiókjában is látja a határidőt.

3. Bérlés/layaway
   - **Fizetési terv**: 4 x 25% heti bontásban.
   - A kosárban és pénztárnál világos, hogy a teljes ár négy egyenlő részletre oszlik.

## Beállítási vázlat

- Bolt szinten:
  - Engedélyezd a Deposits funkciót.
  - Válaszd ki, legyen-e kötelező az előleg, és mi az **alapértelmezett típus** (None/Percentage/Fixed/Payment plan).

- Termékszinten:
  - Szükség esetén **felülírod** a globális szabályt.
  - Megadod a konkrét előleg mértékét és az alapértelmezett vevői választást.

- Fizetési tervek:
  - Hozz létre egy tervet a kívánt részletekkel és időközökkel.

Példa terv definíció:
```
Név: "3x részlet"
- 30% fizetendő a pénztárnál
- 40% esedékes 30 nap múlva
- 30% esedékes 60 nap múlva
```

## Előnyök és értékajánlat

- **Magasabb konverzió**: kisebb belépési költség, könnyebb elköteleződés.
- **Gyorsabb cash flow** és **kockázatcsökkentés**: letéttel komolyabban veszik a rendelést.
- **Rugalmasság**: százalékos, fix, vagy ütemezett terv; bolt- és termékszintű szabályok.
- **Tiszta kommunikáció**: végig egyértelmű, mennyi a most és a később fizetendő.
- **Korrekt adó- és kuponkezelés** részletfizetés mellett is.
- **Modern kompatibilitás**: működik Blocks pénztárral és HPOS-szal.

## Kinek ajánlott?

- Olyan boltoknak, amelyek **magas értékű** termékeket árulnak.
- **Egyedi/gyártásra készülő** termékek értékesítőinek (kötelező előleggel).
- **Szolgáltatóknak, eseményszervezőknek, oktatóknak**, ahol a helyfoglalás letétet igényel.
- **Bérléssel** foglalkozóknak, illetve akik **BNPL-szerű** opciót kínálnának előfizetéses rendszer nélkül.

## Fontos korlátozások és tippek

- **Nincs automatikus terhelés**: a rendszer nem tárol kártyaadatot és nem indít ismétlődő fizetést. A vevőnek a későbbi részleteket **manuálisan** kell kiegyenlítenie (Saját fiók > Pay).
- Összetett kuponfeltételek (pl. csak “Pay in full”-ra) extra testreszabást igényelhetnek.
- Gyakorlat:
  - Egyedi/gyártásra kész termékeknél használd a **kötelező előleget**.
  - Írj egyértelmű **magyarázó szöveget** a termékoldalra az előleg/részletek feltételeiről.
  - Állíts be **e-mail emlékeztetőket** a közelgő részletekhez (Woo értesítésekkel vagy automatizációval).
  - Teszteld a folyamatot **Blocks** pénztárral és **HPOS** mellett is, élesítés előtt.

Ezzel a bővítménnyel pontosan azt kapod, amire szükséged van: professzionális, rugalmas előleg- és részletfizetési megoldást, ami érthetően kommunikál a vevő felé, rendben tartja a rendeléseket, és nem bonyolítja túl a folyamataidat.