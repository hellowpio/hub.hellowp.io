---
title: "WooCommerce Measurement Price Calculator"
description: "Mérésalapú árazás és készletkezelés WooCommerce-ben: hossz, terület, térfogat, tömeg vagy egyedi dimenziók alapján számolt árak."
sidebar_label: "WooCommerce Measurement Price Calculator"
---

## Mi ez és milyen problémát old meg?

A WooCommerce Measurement Price Calculator (MPC) egy mérésalapú árazást és rendeléslogikát ad a webáruházadhoz. Olyan termékekhez készült, amelyeknél nem darabra, hanem hossz, terület, térfogat, tömeg vagy összetett dimenzió alapján számolsz. Segít abban, hogy a vevő a számára releváns méretet adja meg, te pedig pontos árat, készletfogyást és szállítási tömeget kapj – manuális számolgatás nélkül.

Tipikusan ilyen igény a méteráru, csempedoboz terület szerinti átszámítása, ömlesztett anyag térfogat alapú értékesítése vagy tapéta falméret szerinti kalkulációja.

## Hogyan működik? – A két kalkulátormód

### 1) Mennyiségalapú kalkulátor (quantity-based)
- Akkor használd, ha a termék fix egységeket fed le (pl. 1 doboz csempe = 1,2 m²).
- A vevő megadja a szükséges területet/hosszt, a bővítmény kiszámolja, hány egység kell (felfelé kerekítve).
- Előny: csökkenti az alul- vagy túlrendelést, egyértelművé teszi a darabszámot.

### 2) Felhasználó által megadott kalkulátor (user-defined)
- Akkor ideális, ha egységárat adsz meg (pl. Ár/m, Ár/m², Ár/kg), és az ár a beírt méret alapján változik.
- A végösszeg dinamikusan alakul a megadott méretekből és az egységárból.
- Előny: rugalmas árazás egyedi méretekhez, pontos készlet- és tömegkezeléssel.

## Fő funkciók részletesen

- **Széles mértéktípus-támogatás**: hossz/szélesség/magasság, terület, kerület, térfogat, tömeg – kombinálható egységekkel. Így a legkülönfélébb termékek is modellezhetők.
- **Egységár megjelenítés**: a katalógusban és termékoldalon “ár/egység” formában láttatod a valós összehasonlíthatóság kedvéért.
- **Számított készlet (calculated inventory)**: a készletet mérés szerint vezetheted (pl. méter, m²). A kosárba tett mennyiség pontosan ennyivel csökkenti a készletet.
- **Dinamikus tömeg**: megadható “tömeg per egység” (pl. kg/m²), így a szállítási díjak a valós, kiszámolt tömeg alapján alakulnak.
- **Ártáblázat (pricing table)**: különböző mérési sávokra más és más egységárat állíthatsz, akciós egységárral is. Rövidkóddal táblázatként is megjeleníthető.
- **Minimum/maximum és lépésköz**: szabályozhatod, milyen tartományban és milyen lépésközzel adhat be értéket a vevő. Állíthatsz **“overage”** ráhagyást is (pl. vágási hulladék miatt).
- **Tört értékek**: elfogad “8 1/2” jellegű beviteleket is – fontos a gyakorlati pontossághoz.
- **Változatos termékek**: működik variable termékekkel; az ártáblázat szabályai a szülő terméken adhatók meg.

## Gyakorlati példák

- **Csempe dobozonként**: a vevő megadja, hogy 18 m²-t szeretne burkolni. A doboz 1,2 m²-t fed le. A kalkulátor kiszámolja, hány doboz kell, és az ár a dobozok számából adódik.
- **Méteráru**: egységár/m megadva. A vevő beírja: 3,6 m. Az ár automatikusan 3,6-szorosa az egységárnak, a készlet és tömeg arányosan csökken/nő.
- **Mulcs vagy termőföld**: térfogat alapú árképzés. A vevő megadja a kert méreteit és rétegvastagságot, a rendszer köbmétert számol, és ez alapján áraz.
- **Tapéta – Room Walls kalkulátor**: megadod a falszakaszok méreteit, a plugin kiszámolja a szükséges tapétamennyiséget, ráhagyással együtt.

## Bevezetés és alapbeállítás

1. Aktiválás után állítsd be a termékek alap mértékegységeit (hossz, terület, térfogat, tömeg).
2. A termékszerkesztőben a **Measurement** fülön válaszd ki a kalkulátor típusát (pl. Area, Volume, Dimensions, Weight).
3. Döntsd el, hogy:
   - egységárat szeretnél megjeleníteni,
   - a végösszeg számítva legyen-e (calculated price),
   - kell-e minimumár, min/max, lépésköz, ráhagyás.
4. Mennyiségalapú módnál add meg, egy egység mekkora területet/térfogatot fed le; user-defined módnál állítsd az egységárat és – ha kell – a számított készletet/tömeget.
5. Igény szerint állíts be **ártáblázatot** mennyiségi sávokra.

Példa-mintázat:
```
Kalkulátor: Area (m²)
Egységár: 7 000 Ft / m²
Minimum: 1,0 m² | Maximum: 50,0 m² | Lépésköz: 0,1 m²
Overage: 8%
Tömeg per egység: 2,3 kg / m²
Ártáblázat: 0–10 m²: 7 000 Ft | 10–30 m²: 6 500 Ft | 30+ m²: 6 200 Ft
Egységár megjelenítése: Igen
```

## Kompatibilitás és korlátozások

- **Kompatibilis** a blokkalapú kosárral és pénztárral, valamint a modern rendelés-tárolási megoldásokkal.
- **Nem kompatibilis** többek között az összetett csomagoló bővítményekkel, a “nevezd meg az árat” jellegű megoldásokkal és egyes egyedi ügyfél-áras kiegészítőkkel.
- **Megkötések**:
  - Product Add-ons mellett a számított készlet funkció nem támogatott.
  - Többpénznemű (multi-currency) pluginokkal a dinamikus árképzés miatt korlátozott.
  - Variációk esetén a kalkulátor nem kapcsolható be csak egyes variációkra; az ártáblázat a szülő termékhez tartozik.
  - Rövidkódos termékmegjelenítésnél a kalkulátor nem működik; használd az egyedi termékoldalt.

## Előnyök és értékajánlat

- **Pontosság**: valós méretekből számolt ár, készlet és szállítási tömeg.
- **Kevesebb hibázás**: automatizált kerekítés és egységszámítás.
- **Rugalmasság**: ártáblázatok, min/max, lépésköz és ráhagyás finomhangolása.
- **Jobb vásárlói élmény**: egységár és átlátható kalkulációk a termékoldalon.
- **Időmegtakarítás**: nincs kézi kalkuláció, kevesebb ügyfélszolgálati egyeztetés.

## Kinek ajánlott?

- **Burkolat- és építőanyag-kereskedőknek**: dobozos/tekercses termékek terület- vagy térfogat-alapú értékesítéséhez.
- **Lakástextil, függöny, kárpit** kereskedőknek: méterárus termékek egységáras kalkulációjához.
- **Kertészeti és ömlesztett anyag** forgalmazóknak: köbméter/köbyard alapú árképzéshez.
- **Tapéta és dekor** üzleteknek: falméret szerinti kalkulációhoz, ráhagyással.
- **Bárkinek**, aki méret, terület, térfogat vagy tömeg alapján szeretne árazni és készletet kezelni.

Ha mérésalapú termékeket árulsz, ez a bővítmény pontosan azt adja, amire szükséged van: megbízható kalkulációt, rendezett készletet és transzparens egységárakat.