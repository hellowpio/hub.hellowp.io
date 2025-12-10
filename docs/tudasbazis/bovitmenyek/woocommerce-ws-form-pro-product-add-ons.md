---
title: "WooCommerce WS Form PRO Product Add-Ons"
description: "WooCommerce-kiegészítő, amellyel WS Form PRO űrlapokat ágyazhatsz a termékoldalra dinamikus árazással, kosár- és rendelésintegrációval."
sidebar_label: "WooCommerce WS Form PRO Product Add-Ons"
---

## Mi ez és milyen problémát old meg?

A WooCommerce WS Form PRO Product Add-Ons egy bővítmény, amellyel a termékoldaladra teljes értékű WS Form PRO űrlapokat ágyazhatsz. Így bármilyen összetett termék-testreszabást, adatbekérést és dinamikus árazást megvalósíthatsz – kódolás nélkül. A vásárló által megadott adatok automatikusan bekerülnek a kosárba és a rendelésbe, az űrlap e‑kereskedelmi mezői pedig módosítják a termék árát (akár levonással is). A bővítmény képes az űrlap akcióit rendelésállapot-változáskor futtatni, ezért a folyamatok automatizálhatók.

Röviden: akkor kell neked, ha a WooCommerce alap attribútum/variáció rendszerével már nem tudod kényelmesen lefedni a felárakat, feltételeket, többlépéses konfigurátorokat és egyedi adatbekérést.

## Fő funkciók és hogyan működnek

### Termékoldali űrlapbeágyazás
- Bármely WS Form PRO mezőtípus használható (60+), beleértve a választókat, feltöltést, aláírást, számításokat.
- Támogatott a többfüles/többlépéses űrlap és a feltételes logika, így csak a releváns mezőket mutathatod.
- Ismétlődő szekciók (repeaters) segítségével tetszőleges számú tételt vehetsz fel (pl. több név, több fájl, több alkatrész).

### Dinamikus árazás
- Az űrlap e‑kereskedelmi mezői (pl. Price/Total) összeadódnak a WooCommerce termékárhoz; a végösszeg akár nulláról is indulhat (pl. adomány termék).
- Támogatott a negatív összeg, így kedvezményt is számolhatsz (pl. kupon jellegű választás).
- Speciális mezők: **Mennyiség (Quantity)**, **Kosárelem végösszeg (Cart Item Total)**, **Hozzáadás a kosárhoz (Add to Cart)** és **Visszaállítás (Clear)**. Ezekkel az űrlap képes a termék mennyiségét és árát vezérelni, illetve az Add to Cart gombot oda teheted, ahol a folyamatban szeretnéd (akár egy későbbi lépésre).

### Kosár- és rendelésintegráció
- A kitöltött mezők értékei megjelennek a kosárban és a rendelés részleteiben.
- Mezőnként döntheted el, hogy bekerüljön‑e a kosárba/rendelésbe (Exclude from cart and orders), így belső számítási mezőket elrejthetsz.
- Engedélyezheted, hogy a vevő a kosárban visszaszerkessze a testreszabást.

### Oszlop‑leképezés (Column Mapping)
- A választómezők megjelenő címkéje/értéke külön szabályozható az űrlapon, a kosárban és az akciókban. Így például a számításhoz használt “belső” érték eltérhet a vásárló felé mutatott leírástól.

### Műveletek futtatása rendelésállapot alapján
- Az űrlap akciói (pl. e‑mail, webhook/API) automatikusan futhatnak, amikor a rendelés bizonyos állapotba kerül (például Processing vagy Completed).
- Ezzel külső rendszerekhez kapcsolhatsz (értesítés, CRM, automatizmusok), minimális manuális utómunka mellett.

### Termékhozzárendelés skálázhatóan
- Űrlapokat rendelhetsz minden termékhez, kategóriákhoz vagy címkékhez; egy terméknél végül egy űrlap érvényesül.
- A specifikus hozzárendelések elsőbbséget élveznek, így pontosan szabályozhatod, hol melyik űrlap jelenjen meg.

### Kompatibilitás
- Együttműködik több népszerű WooCommerce-bővítménnyel (pl. gyorsnézet, kívánságlista, dinamikus árazás), megőrizve a bolt megszokott élményét.

## Gyakorlati példák

- Name your price/adomány: a termék alapára 0, egy űrlap‑ármező adja a végösszeget; választható célok, előre beállított összegek és egyéni összeg is kezelhető.
- Gravírozás/nyomdai rendelés: szöveg, betűtípus, elrendezés, fájlfeltöltés, aláírás; felárak a választások alapján, feltételesen megjelenő ellenőrzőlisták.
- Konfigurálható ajándékcsomag: több lépésben termékkomponensek kiválasztása, swatchok, egymásra épülő opciók; a végár valós időben frissül.
- Összetett méret/szín felár: kombinációk számítása, mennyiségi kedvezmény vagy tételenkénti felár ismétlődő szekciókkal.

## Beállítás és működés röviden

1. Követelmények: szükséged van WooCommerce-re és WS Form PRO-ra; a témasablon termékoldalának tartalmaznia kell legalább egy Add to Cart gombot.
2. Termék szerkesztése: a Product data blokk WS Form fülén hozd létre vagy válaszd ki az űrlapot. Az előnézet a termékoldalon látható.
3. E‑kereskedelmi mezők: a Price/Total, Quantity és Cart Item Total mezők vezérlik az árazást és mennyiséget; az Add to Cart mezőt oda teszed, ahol a folyamat logikus.
4. Változatos termékeknél az Add to Cart csak érvényes variációválasztás után aktív.
5. Mezők kosár/rendelés láthatósága: ahol kell, kapcsold be az Exclude from cart and orders opciót.
6. Automatizálás: engedélyezd a Run WS Form Actions lehetőséget, és állíts be rendelésállapotokat az akciók futtatásához.
7. Hozzárendelés: űrlapokat termékekhez, kategóriákhoz vagy címkékhez köthetsz; ütközés esetén a célzott hozzárendelés élvez elsőbbséget.

## Előnyök és értékajánlat

- **Maximális rugalmasság**: 60+ mezőtípus, feltételes logika, repeaters – valódi konfigurátorokat építhetsz.
- **Pontos árazás**: felárak, levonások, mennyiségi összefüggések – mind a termékárhoz adódik.
- **Kevesebb fejlesztés**: amit korábban egyedi kóddal oldottál meg, most űrlap‑szabályokkal és mezőkkel beállítható.
- **Jobb vásárlói élmény**: többlépéses folyamat, releváns mezők, visszaszerkeszthető kosár, átlátható összegzés.
- **Automatizmusok**: rendelésállapot‑alapú akciók csökkentik a manuális adminisztrációt.

## Kinek ajánlott?

- Olyan boltoknak, ahol a termékek **összetetten konfigurálhatók** (nyomda, egyedi ajándék, ékszer, bútor, összeszerelhető termékek).
- **Adomány- és “name your price”** modelleket használóknak.
- **B2B és CPQ** jellegű értékesítést folytatóknak, ahol számítások, több tétel és jóváhagyások kellenek.
- **Ügynökségeknek/fejlesztőknek**, akik gyorsan szeretnének megbízható, rugalmas megoldást szállítani kód helyett konfigurációval.

Fejlesztő: Westguard Solutions (WS Form). A bővítmény fizetős kiegészítőként érhető el, és WS Form PRO jelenlétét igényli. Ha szeretnél konkrét mintákat (gravírozás, nyomdai megrendelés, konfigurálható ajándékcsomag), szívesen adok lépésről lépésre beállítási javaslatokat.