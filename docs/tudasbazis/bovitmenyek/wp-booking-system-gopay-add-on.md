---
title: "WP Booking System - GoPay Add-on"
description: "Natív GoPay fizetési átjáró a WP Booking System foglalási űrlaphoz, kártyás és banki átutalásos online fizetés CEE piacokra, WooCommerce nélkül."
sidebar_label: "WP Booking System - GoPay Add-on"
---

## Mi ez és milyen problémát old meg?

A WP Booking System – GoPay Add-on egy prémium kiegészítő, amellyel közvetlenül a foglalási űrlapodon fogadhatsz online fizetést a **GoPay** átjárón keresztül. Akkor hasznos, ha szállást, eszközt, termet vagy programot adsz bérbe, a célpiacod CEE országok (pl. CZ, SK, HU, PL, RO, BG, HR), és helyi kártyás/banki fizetést szeretnél – **WooCommerce** réteg bevezetése nélkül.

## Hogyan működik a gyakorlatban?

- A vendég a **WP Booking System** űrlapján kiválasztja a dátumokat és opciókat, az árképzés automatikusan számol.
- A **Payment Method** mezőben a GoPay-t választja, ezután a tranzakció a GoPay felületén zajlik.
- A fizetés eredménye visszakerül a foglaláshoz: **státusz**, **tranzakcióazonosító**, választott **átjáró**.
- Ha **előleget** kérsz, a második (vég)fizetés is mehet ugyanazon kapun, külön fizetési oldallal és linkkel.

## Fő funkciók részletesen

- **Natív GoPay integráció**: A fizetési folyamat a foglalási űrlap része marad, nem kell külön webáruház. A tranzakció átirányítással a GoPay oldalán történik, a visszajelzés automatikusan mentésre kerül.
- **Kártyás és banki átutalásos fizetések**: A GoPay által támogatott módozatok elérhetők; a pontos lista országonként eltérhet, ezért mindig ellenőrizd a GoPay hivatalos felületén.
- **Testreszabható megjelenés**: Beállíthatod az **Aktív/Inaktív** állapotot, a vevő felé látható **Display Name**-et, a rövid **Description**‑t, és az **Invoice Item Name**‑et, ami a GoPay tételeknél jelenik meg.
- **Árképzés és fizetési mezők**: Dátumonkénti árak, opcionális felárak (űrlap‑ármezők), kuponmező (kupon kiegészítővel), valamint **Payment Method** és **Total** mezők a pontos összeg mentéséhez.
- **Előleg / részfizetés**: Kérhetsz százalékos vagy fix **deposit**‑ot, majd a végösszeget ugyanazzal a kapuval rendezheted. A második fizetéshez beállítható egy külön **Secondary Payment Page**.
- **Fizetési adatok a foglalásban**: Foglalásonként láthatod a fizetési státuszt, a használt átjárót, a **Transaction ID**‑t, és innen kezdeményezhetsz **visszatérítést** is.

## Telepítés és alapbeállítás (lépésről lépésre)

1. **Előfeltétel**: aktív WP Booking System prémium licenc, **Business** vagy **Developer** (a Personal csak offline fizetést tud).
2. **Add‑on telepítése**: WP Admin → WP Booking System → Add‑ons → GoPay → Install.
3. **GoPay kereskedői fiók**: regisztrálj a GoPay-nél; jóváhagyás után kapsz **sandbox** kulcsokat. Legalább egy sikeres teszttranzakció szükséges, ezután kérheted az éles (**production**) API adataidat.
4. **Konfiguráció**: WP Admin → WP Booking System → Payments → Payment Gateways → GoPay. Kapcsold **Active**‑ra, add meg a **Display Name**, **Description**, **Invoice Item Name** mezőket és az **API kulcsokat** (sandbox/production).
5. **Űrlap mezők**: a foglalási űrlaphoz add hozzá a **Payment Method** és **Total** mezőket, hogy az árak és a fizetési döntés naplózódjanak.
6. **Második fizetési oldal (opcionális)**: ha előleget használsz és ugyanazzal a kapuval szeretnéd a végfizetést, állíts be egy **Secondary Payment Page**‑et, és illeszd be a shortcode‑ot:
   ```
   [wpbs-payment-form]
   ```

## Gyakorlati példák

- **Apartman Budapesten**: A vendég kiválasztja a dátumokat, a rendszer kiszámolja az árat, 30% előleget kérsz. A vendég GoPay‑jel fizet kártyával, a foglalás státusza azonnal frissül. Érkezés előtt automatikus e‑mailben megkapja a végfizetési linket ugyanarra a kapura.
- **Csónakbérlés Dalmáciában**: Óradíjak és opcionális felszerelések felárai az űrlapon. A helyi banki átutalás és kártya is választható GoPay-en, WooCommerce nélkül.
- **Workshop Kolozsváron**: Early bird kuponok, fix összegű előleg, majd a fennmaradó díj a Secondary Payment Page‑en, tranzakcióazonosítóval követve.

## Előnyök és értékajánlat

- **WooCommerce‑mentes online fizetés**: kevesebb bonyodalom, kisebb karbantartási költség.
- **CEE‑re optimalizált**: helyi kártya- és banki csatornák egy átjárón belül.
- **Egységes admin**: foglalás + fizetés egy helyen; státuszok, tranzakciók, visszatérítések átláthatóan.
- **Rugalmas árazás és előleg**: a valós működésedhez igazított deposit és végfizetés.
- **Biztonságos bevezetés**: kötelező sandbox teszt, így csökkentett kockázattal élesíthetsz.

## Kinek ajánlott?

- **Szállásadóknak**: apartmanok, vendégházak, kempingek, nyaralók.
- **Bérbeadóknak**: sporteszköz, csónak, autó, terem, rendezvényhelyszín.
- **Szolgáltatóknak**: időpont‑alapú programok, túrák, kurzusok, workshopok.
- Ha a célpiacod főként **CZ, SK, HU, PL, RO, BG, HR**, és fontos a helyi kártya/banki fizetés, valamint nem akarsz külön webáruház‑motort felhúzni.

## Megjegyzések és korlátok

- A GoPay Add‑on csak **Business/Developer** licencekben érhető el; az add‑onok a licenc részei, külön nem vásárolhatók.
- A GoPay által támogatott fizetési módozatok országonként változhatnak – mindig ellenőrizd a hivatalos felületen.
- A második (vég)fizetés használatához szükséges a **Secondary Payment Page** megfelelő beállítása és a shortcode beillesztése.

Ha szeretnéd, készítek egy részletes telepítési/checklist sablont admin menüpontokkal és képernyőképek helyőrzőivel, hogy gyorsan be tudd vezetni a rendszert.