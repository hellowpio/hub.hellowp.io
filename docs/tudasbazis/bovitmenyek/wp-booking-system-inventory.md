---
title: "WP Booking System - Inventory"
description: "Prémium kiegészítő napi kapacitáskezeléshez: több foglalás/nap egy naptárban, automatikus készletcsökkentéssel és dátumzárással."
sidebar_label: "WP Booking System - Inventory"
---

## Mi ez és milyen problémát old meg?

A WP Booking System – Inventory egy prémium kiegészítő, amely napi szintű készletkezelést ad a naptáraidhoz. Akkor hasznos, ha több azonos egységet adsz bérbe (pl. 4 szoba, 10 kerékpár) és nem akarsz külön naptárat vezetni mindegyikhez. Beállítod a napi maximumot (pl. 4), és a rendszer enged addig foglalni, majd automatikusan letiltja a dátumot, amikor a készlet elfogy. Segít elkerülni a túlfoglalást és egyszerűsíti a naptárkezelést.

Fontos korlátozás: az Inventory nem kompatibilis iCalendar szinkronnal. Ha iCal feedeket használsz (pl. csatornaszinkron), ezt a kiegészítőt nem szabad bekapcsolni.

## Hogyan működik?

- A naptárszerkesztőben minden naphoz megadhatsz **készletértéket**. Beállíthatsz egy **alapértelmezett** értéket is, ami minden dátumra érvényes.
- Amikor beérkezik egy foglalás, a kiválasztott nap(ok) készlete **automatikusan csökken** a foglalt darabszámmal.
- Ha a készlet eléri a nullát, a dátum **automatikusan foglaltra vált**, így több foglalás nem lehetséges.
- Az űrlapon megjelenik egy új **Inventory** mező, ahol a vendég darabszámot választhat (pl. hány egységet szeretne). Ez az aktuális dátumok maximális készletéből számolódik.
- Ugyanazon űrlapon több Inventory mezőt is használhatsz, és ezek akár **másik naptár készletéből** is „táplálkozhatnak”. Ilyenkor a rendszer a kapcsolt naptárban is létrehoz egy „Automatikusan létrehozott” foglalást a készlet konzisztenciája érdekében.
- Az extrák (pl. kerékpár) árazását a kiválasztott darabszámmal **szorozhatod**, így a végösszeg automatikusan igazodik.

Kötelező beállítás: a beágyazott foglaló űrlapnál kapcsold be az **Automatically Block Dates** opciót, különben a dátumzárás nem fog működni.

## Fő funkciók részletesen

### Napi készletmező a naptárban
- Adj meg egy alapértelmezett készletet (pl. 4), amit igény szerint dátumszinten felülírhatsz (pl. ünnepnapokon 6).
- Módosításaid azonnal érvényesek az űrlapokra és a rendelkezésre állásra.

### Automatikus készletcsökkentés és dátumzárás
- Minden új foglalás csökkenti a készletet. Ha egy rendelésben több darabot választanak, annyival csökken.
- Nulla készletnél a dátum automatikusan foglaltra vált – nincs több manuális adminisztráció.

### Több slot foglalása egy rendelésben
- Az **Inventory** űrlapmező egy lenyíló, amely 1-től a kiválasztott napok minimális elérhető készletéig kínál választási lehetőséget.
- Beállíthatsz **Maximum Limitet**, hogy egy vevő legfeljebb hány egységet vihessen egy rendelésben.

### Külső készletforrás (Inventory Source)
- Egy űrlapon több Inventory mező is lehet, és megadhatod, hogy melyik melyik naptár készletét használja.
- A rendszer a kapcsolt naptárban automatikusan létrehoz egy párfoglalást, így az extrák készlete is pontosan fogy.

### Ár képzése darabszám alapján
- Adj hozzá termék/ár mezőt, és kapcsold be a **Multiplication** opciót: a végösszeg a kiválasztott darabszám szerint szorzódik.

## Gyakorlati példák

- Panzió 4 azonos szobával: állítsd be a naptár alapértelmezett készletét 4-re. Ha 4 foglalás érkezik ugyanarra a napra, a rendszer lezárja a dátumot. Nem kell 4 külön naptár.
- Villa + kerékpárok extra: a villa fő naptár mellé hozz létre egy „Biciklik” naptárt 10-es készlettel. Az űrlapon adj hozzá egy Inventory mezőt, amely a „Biciklik” naptár készletét használja. Ha a vendég 3 biciklit kér, a villa foglalás mellett automatikus bejegyzés jön létre a bicikli-naptárban is, a rendszer pedig 3-mal csökkenti a készletet és az árat is ennek megfelelően számolja.
- Eszközbérlés/járműpark: jetski kölcsönzésnél napi 8 egység készlet. Engedélyezd, hogy egy rendelésben legfeljebb 2 egységet vihessenek. A rendszer a kiválasztott napokhoz mérten ajánl darabszámot.

## Telepítés és alapbeállítás

1. WP adminban nyisd meg az Add-ons menüt, telepítsd és aktiváld az Inventory kiegészítőt.
2. A naptárszerkesztőben állíts be alapértelmezett készletet, majd szükség esetén módosíts egyes dátumokat.
3. Az űrlapszerkesztőben add hozzá az **Inventory** mezőt:
   - Forrás: aktuális naptár vagy másik naptár
   - Maximum Limit: opcionális plafon rendelésenként
4. Adj hozzá ár mezőt, és kapcsold be a **Multiplication** opciót, ha az ár darabszám-arányos.
5. A beágyazás/beállítások között kapcsold be az **Automatically Block Dates** opciót.

Példa beállítás vázlat:
```
Inventory (Rooms):
  Source: Current calendar
  Max per order: 2
Pricing (Nightly rate):
  Multiplication: enabled
```

## Előnyök és értékajánlat

- Túlfoglalás megelőzése több azonos egység esetén.
- Kevesebb naptár, kevesebb adminisztráció, tisztább folyamatok.
- Gyorsabb foglalás: a vendég egy rendelésben több darabot kérhet.
- Extrák készlete és ára automatikusan követi a fő foglalást.
- Minden licenchez elérhető prémium funkció, külön vásárlás nélkül.

## Célközönség

- Több azonos egységet kiadó szállásadók (panziók, apartmanházak).
- Eszköz- és járműkölcsönzők (kerékpár, jetski, csónak).
- Program- és élményszolgáltatók limitált kapacitással.
- Olyan webhelyek, ahol a napi kapacitáskezelt foglalás kritikus.

Nem ajánlott, ha iCal szinkront használsz csatornák között. Ilyenkor külön naptárstratégiát vagy külső csatornakezelőt érdemes fontolni.

## Korlátok és jó gyakorlatok

- iCal inkompatibilitás: az Inventory nem működik bejövő/kimennő iCal feedekkel.
- Az **Automatically Block Dates** bekapcsolása kötelező.
- Többnapos foglalásoknál a rendszer a kiválasztott időszak legkisebb elérhető készlete alapján engedi a darabszámot.
- Teszteld a beállításokat próbarendeléssel, különösen külső készletforrás használatakor.

Megjegyzés: a bővítményt a WP Booking System fejlesztőcsapata készíti; a termék aktív karbantartás és dokumentáció mellett érhető el.