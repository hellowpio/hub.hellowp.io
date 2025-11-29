---
title: "LearnDash LMS - Restrict Content Pro Integration"
description: "Ingyenes, hivatalos LearnDash kiegészítő, amely a Restrict Content Pro tagsági szintekhez kurzus-hozzáférést rendel, és automatikusan kezeli a be- és kiiratkozást."
sidebar_label: "LearnDash LMS - Restrict Content Pro Integration"
---

## Mi ez és milyen problémát old meg?

A LearnDash LMS – Restrict Content Pro Integration egy hivatalos, ingyenes kiegészítő, amely összeköti a **LearnDash** kurzusaidat a **Restrict Content Pro (RCP)** tagsági szintjeivel. Segítségével egyetlen tagság megvásárlásával több kurzushoz is automatikusan hozzáférést adhatsz, majd a **tagság megszűnésekor a hozzáférést automatikusan visszavonja**. Így nem kell manuálisan be- és kiiratkoztatnod a felhasználókat, és elkerülheted a “lejárt előfizetés, de még van hozzáférés” típusú hibákat.

Fontos: a LearnDash önmagában is képes kurzusok védelmére/értékesítésére. Az RCP integráció akkor kell, ha **tagsági csomagokat**, **előfizetéseket**, **kuponokat**, **több fizetési kaput** és fejlettebb pénztár-élményt szeretnél.

## Követelmények és kompatibilitás

- Szükséges aktív **LearnDash** és aktív **Restrict Content Pro**.  
- A “Restrict Content” ingyenes változat ezzel a kiegészítővel nem működik.  
- Az integráció opcionális; tagsági logika és előfizetések esetén hasznos.

## Hogyan működik?

### Admin folyamat
1. Hozd létre a LearnDash kurzus(oka)t.  
2. Hozz létre egy RCP **tagsági szintet**.  
3. A tagsági szint szerkesztőjében válaszd ki, mely **LearnDash kurzusok** tartozzanak ehhez a szinthez (egynél több is lehet), majd mentsd.

### Felhasználói életciklus
- **Vásárlás**: a felhasználó az RCP pénztárán át tagságot vesz.  
- **Automatikus beiratás**: a rendszer azonnal beiratja a tagsághoz rendelt kurzusokra.  
- **Lemondás/lejárat**: a rendszer automatikusan **kiiratja** a kapcsolt kurzusokból.

## Fő funkciók, érthetően

- **Tagsági szint ↔ kurzus(oka)k hozzárendelése**: egy RCP szinthez tetszőleges számú LearnDash kurzust köthetsz. Így egyetlen vásárlással “kurzuscsomagot” értékesíthetsz.
- **Automatikus beiratás**: amint a fizetés és a tagság aktív, a felhasználó az összes kapcsolt kurzushoz hozzáfér. Nincs kézi adminisztráció.
- **Automatikus visszavonás**: lemondás, nem fizetés vagy lejárat esetén a rendszer elveszi a hozzáférést a kurzusokhoz. A kurzus-hozzáférés a tagsági státuszhoz igazodik.
- **Előfizetés, próbaidő, kuponok, több fizetési kapu**: az RCP funkcionalitásait változtatás nélkül használhatod (pl. Stripe, PayPal, kuponkódok, free trial). Ezek közvetlenül a kurzus-hozzáférésre hatnak a tagságon keresztül.
- **Egyszerű telepítés**: a LearnDash Add-Ons menüből vagy kézi bővítmény-feltöltéssel.

## Gyakorlati példák

- **Kurzuscsomag egy díjért**: “Marketing Alapok” tagság = Kezdő, Középhaladó és Haladó kurzus. Egy vásárlás, három kurzus hozzáférés.
- **Előfizetéses akadémia**: havi díjas “Pro” tagság, amely minden új publikált kurzushoz is hozzáférést ad (csak hozzá kell rendelned a tagsági szinthez).
- **Ingyenes próba**: 7 nap próbaidő, ezalatt automatikus beiratás történik; ha a próba lejár és nem hosszabbít, a rendszer visszavonja a hozzáférést.
- **Vállalati hozzáférés**: céges tagsági szint, amely több munkatársnak ad kurzushozzáférést (felhasználónként tagságkezeléssel).

## Előnyök és érték

- **Időmegtakarítás**: elfelejtheted a manuális be- és kiiratkozást.  
- **Pontosság**: a kurzus-hozzáférés mindig a tagsági státuszhoz igazodik.  
- **Rugalmas üzleti modellek**: előfizetés, egyszeri díj, kuponok, próbaidők – mind támogatott.  
- **Egységes pénztár**: fejlettebb checkout-élmény és több fizetési kapu.  
- **Skálázhatóság**: új kurzusok hozzáadása egyetlen tagsági szinthez percek kérdése.

## Kinek ajánlott?

- **Online akadémiák és kurzuscsomagok**: ha több kurzust adnál el egyben.  
- **Előfizetéses modellek**: ha havi/éves díjért folyamatos hozzáférést adsz.  
- **Kedvezményvezérelt értékesítés**: ha kuponokkal, akciókkal dolgozol.  
- **Több fizetési kaput igénylők**: ha nem csak egyetlen gateway-t használnál.

Ha klasszikus “termék + kosár” e-kereskedelmi folyamatot szeretnél, lehet, hogy egy webshop-integráció illeszkedik jobban. Ha viszont tagságokban gondolkodsz, ez az integráció a legegyszerűbb út.

## Telepítés és alapbeállítás

1. Telepítsd és aktiváld a **LearnDash**-t és az **RCP**-t.  
2. Telepítsd az “Restrict Content Pro for LearnDash” kiegészítőt (LearnDash LMS > Add-Ons > Install > Activate, vagy ZIP feltöltéssel).  
3. Hozz létre vagy szerkessz egy **Membership Level**-t az RCP-ben.  
4. A szint szerkesztőjében, a **Courses** mezőben válaszd ki a kapcsolt LearnDash kurzus(oka)t.  
5. Mentsd a beállítást és tesztelj egy új tagságvásárlással.

### Bevezetési checklist

```
[ ] LearnDash és RCP aktív
[ ] Integrációs bővítmény telepítve, aktiválva
[ ] Kurzus(ok) létrehozva LearnDash-ben
[ ] RCP tagsági szint(ek) létrehozva
[ ] Courses mezőben kurzusok hozzárendelve
[ ] Fizetési kapu(k) és próba/kupon beállítva (opcionális)
[ ] Tesztvásárlás → automatikus beiratás ellenőrzése
[ ] Lemondás/lejárat → automatikus kiiratás ellenőrzése
```

## Jó gyakorlatok

- **Ne keverd a hozzáférési szabályokat**: egy kurzushoz lehetőleg egyértelműen tagsági szint(ek)en keresztül adj hozzáférést.  
- **Teszteld a teljes életciklust**: vásárlás → beiratás, lemondás → kiiratás.  
- **Használd a tagsági logikát**: csomagok, próbaidő, kuponok – ezek adják az integráció erejét.  
- **Tudd, mikor nem kell**: ha csak egy-egy kurzust adsz el tagsági logika nélkül, elég lehet a LearnDash alap védelme.