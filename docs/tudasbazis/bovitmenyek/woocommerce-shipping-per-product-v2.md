---
title: "WooCommerce Shipping Per Product v2"
description: "Prémium WooCommerce bővítmény, amellyel termékenként és variációnként, helyalapon szabott szállítási díjakat állíthatsz be – önálló módként vagy más díjakhoz hozzáadva."
sidebar_label: "WooCommerce Shipping Per Product v2"
---

## Mi ez és milyen problémát old meg?

A WooCommerce Shipping Per Product v2 egy olyan bővítmény, amellyel minden egyes termékhez – sőt, akár variációnként – külön szállítási díjakat adhatsz meg. Ezek a díjak a vevő helye (ország, állam/megye, irányítószám) szerint változhatnak, és kétféleképpen működhetnek: önálló szállítási módként vagy a meglévő módszerekre ráadott felárként. Akkor hasznos, ha a “Fix díj + szállítási osztályok” nem elég rugalmas (például irányítószám szintű eltérésekre vagy variációk szerinti díjakra van szükséged).

## Hogyan működik? – alapelvek

- Két üzemmód:
  - **Hozzáadó mód**: a termékhez beállított díjak ráadódnak más aktív szállítási módokra (például a Fix díjra).
  - **Önálló mód**: csak a per-termék díjakból számol végösszeget; alapból más módszer ilyenkor nem látszik.

- **Szabálytábla** termékenként:
  - Célterület: országkód (ISO-2), állam/megye kód, irányítószám (wildcardokkal, pl. PE*).
  - Költségmezők: **sor-díj (line cost)** és **tétel-díj (item cost)**. A sor-díj a termék “sorára”, a tétel-díj a kosárban szereplő darabszámra vonatkozik.
  - A **szabályok sorrendje számít**: az első találó szabály lesz az irányadó.

- **Variációk**: bejelölve a per-variációs beállítást, a variáció díjai felülírják a szülő termék díjait.

- **CSV import/export**: tömeges feltöltés és módosítás. A formátum oszlopai: Product ID, Country Code, State Code, Postcode, Line cost, Item cost.

- **Zónaszintű önálló metódus-beállítások**:
  - Alapértelmezett termékköltség (fallback) – ha nincs találó szabály.
  - Kezelési díj: per termék és per rendelés, fix vagy százalékos.
  - “Ingyenes szállítás” és “Helyi átvétel” elrejtése, ha a per-termék módszer aktív az adott zónában.

- **Fejlesztői szűrők**: önálló módban is engedélyezhetsz más módszereket (például fix díjat), ha technikailag finomhangolni szeretnéd a működést.

- **Elnevezés**: a Marketplace-en “Per Product Shipping”, a bővítmény kódban “WooCommerce Shipping Per Product v2”.

## Fő funkciók, érthetően

- **Termék- és variációszintű díjazás**: teljes kontroll, minden méret/súly/kiszerelés külön díjjal kezelhető.
- **Helyalapú szabályozás**: ország, állam/megye és irányítószám szerint differenciálsz. Wildcarddal egyszerű a körzetek lefedése.
- **Hozzáadó vs. önálló mód**: vagy felárként működik a meglévő díjakra, vagy egyedüli szállítási megoldásként ad végösszeget.
- **CSV tömegműveletek**: gyors felépítés nagy katalógusoknál, egységes logika könnyű másolása.
- **Zóna-specifikus opciók**: fallback díj, kezelési díjak és más módszerek elrejtése az egységes checkout élményhez.
- **Woo integráció**: modern Woo funkciókkal kompatibilis, admin felületbe simuló beállításokkal és súgókkal.

## Gyakorlati példák

- **Terjedelmes bútor felára**: a kanapé termékéhez beállítasz egy 3000 Ft sor-díjat és 0 Ft tétel-díjat Magyarországra. Hozzáadó módban ez rákerül a megszokott fix díjra, így a “normál” kosarak nem drágulnak, csak a kanapé.
- **Irányítószám alapú városi felár**: egy gép kiszállítása Budapesten belül extra 1500 Ft. Postcode mezőben megadsz több mintát (pl. 10*, 11*) a lefedni kívánt kerületekre.
- **Méret szerinti variációk**: póló S/M/L – az L variációhoz 300 Ft tétel-díjat adsz, ami felülírja a szülő termék 0 Ft-ját.
- **Önálló módban**: egyedi csomagolású kerámiák csak a per-termék díjból számolódnak, a többi szállítási mód eltűnik a pénztárban a tiszta logika érdekében.
- **Kevert kosár**: normál termék + túlméretes áru. A túlméretes áru per-termék felára hozzáadódik a normál szállítási díjhoz, így a vásárló pontos, arányos díjat lát.

## Gyors beállítási lépések

1. Szállítási zónákhoz add hozzá a “Per-Product Shipping” metódust (ha önálló módban használod).
2. A termékszerkesztő Szállítás fülén kapcsold be a per-termék szállítást.
3. Töltsd ki a szabálytáblát (ország/állam/ZIP, sor- és tétel-díj). A szabályokat rendezd prioritás szerint.
4. Ha a díjakat más módszerekhez szeretnéd hozzáadni, pipáld be az “Adjust Shipping Costs” opciót.
5. Variációknál jelöld a per-variációs opciót, és add meg a variációk díjait.
6. Nagy katalógusnál használj CSV exportot/importot a gyors tömeges szerkesztéshez.

## Minta CSV

```
Product ID,Country Code,State Code,Postcode,Line cost,Item cost
123,HU,,,"1500","0"
123,HU,,10*,"0","500"
123,RO,,RO1*,"0","800"
124,,,"","0","0"
```

Magyarázat:
- Üres mező = bármely (pl. ország nélkül minden országra érvényes).
- Postcode “10*” = minden 10-zel kezdődő irányítószám.
- Line cost = egyszeri díj a terméksorra, Item cost = díj darabonként.

## Előnyök és értékajánlat

- **Maximális rugalmasság**: nem kell kompromisszum a szállítási osztályokkal, finomhangolhatsz irányítószámig.
- **Kevert kosarak professzionális kezelése**: a különleges tételek megkapják a felárukat, a többiek nem.
- **Idő- és költségmegtakarítás**: CSV-vel gyors a bevezetés és a karbantartás, nincs szükség egyedi fejlesztésre.
- **Kiszámítható checkout**: elrejtheted az ingyenes vagy helyi opciókat, ha nem illenek a per-termék logikához.

## Kinek ajánlott?

- **Bútorkereskedők, gép- és nagyáru-forgalmazók**: ahol a méret/súly miatt extra költség keletkezik.
- **Kézművesek, törékeny áruk értékesítői**: speciális csomagolás és körzetfüggő díjak egyszerűen kezelhetők.
- **Nyomdák, egyedi méretű termékek**: variációs díjakkal tiszta, átlátható költségek.
- **Nagy katalógusú webshopok**: CSV-vel gyors tömeges beállítás és egységes logika.

## Fontos megjegyzések és korlátozások

- **Önálló módban** a bővítmény alapértelmezetten kizárólagos; más szállítási mód nem jelenik meg (szűrővel felülírható).
- **Variáció felülír**: a variációs díjak elsőbbséget élveznek a szülő termékkel szemben.
- **Nem élő fuvarozói kalkuláció**: statikus díjtáblákat használsz; a díjakat neked kell karbantartanod.
- **Legacy elemek**: a régebbi, több-módszeres működés és néhány örökölt beállítás kivezetés alatt lehet; új beállításnál a jelenlegi funkciók használata ajánlott.

Ha szeretnéd, készítek neked egy személyre szabott beállítási checklistát (zónák, országkódok, irányítószám-minták) és egy minta CSV-t az induláshoz.