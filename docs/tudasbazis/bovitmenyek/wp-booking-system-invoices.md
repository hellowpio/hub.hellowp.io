---
title: "WP Booking System - Invoices"
description: "Prémium kiegészítő, amely automatikus, testreszabható PDF‑számlát generál minden WP Booking System foglaláshoz, e‑mail csatolási és EU e‑számla opcióval."
sidebar_label: "WP Booking System - Invoices"
---

## Mi ez és milyen problémát old meg?

A WP Booking System – Invoices egy prémium kiegészítő, amellyel minden új foglalásról automatikus, egységes és jogszabálykövető PDF‑számlát készíthetsz – külön számlázó vagy e‑kereskedelmi bővítmény nélkül. Megszünteti a kézi számlázás terhét, csökkenti a hibákat, és biztosítja a következetes számozást, megjelenést és tartalmat. Business (vagy magasabb) licenccel érhető el.

## Hogyan működik röviden?

1. Aktiválod az Invoices kiegészítőt (Business/Developer licenc szükséges).
2. Globális beállítás: megadod az arculati elemeket, a számlaszámozás logikáját és a megjelenítési szabályokat.
3. Űrlapszinten testreszabod a vevő/szállító adatokat és a láblécet (dinamikus tagekkel is).
4. Amikor új foglalás jön létre, a rendszer automatikusan generálja a PDF‑számlát.
5. A foglalásnál azonnal megtekintheted/letöltheted, szükség esetén javíthatod a vevői adatokat, és újranyomtatod vagy e‑mailhez csatolod.

## Fő funkciók, érthetően

- Automatikus PDF‑számlák
  - Minden új foglaláshoz azonnal létrejön egy számla. Ezzel elkerülöd a késést, a kézi adatbevitelt és a formai eltéréseket.

- E‑mail csatolmány
  - Beállíthatod, hogy a rendszer az értesítő e‑mailekhez automatikusan csatolja a számlát. Így az ügyfél rögtön megkapja a bizonylatot.

- Márka és megjelenés
  - Testreszabható logó (kép vagy szöveg), fejléc, alcím és akcentusszín, plusz szabad szöveg a számlaláblécben. A számláid vizuálisan is a márkádat erősítik.

- Számlaszámozás és határidők
  - Meghatározhatsz előtagot (például év/sorozat), sorszám‑eltolást a foglalásazonosítóból, és esedékességi napokat. Példa:
    ```
    Számlaszám: INV-2025-0456
    Esedékesség: +7 nap
    ```

- Tartalmi opciók
  - Kérheted a foglalási részletek megjelenítését a láblécben, a napi árak tételes bontását többnapos foglalásnál, és elrejtheted a 0 árú tételeket.

- Vevő- és eladóadatok kezelése
  - Űrlapszinten (Form Options → Invoice Settings) megadhatod a vevői és szállítói adatokat, akár dinamikus tagekkel (pl. a foglalási űrlap mezőiből). Minden űrlapon külön felülírhatod a lábléc szövegét is.

- Megtekintés és módosítás a foglalásnál
  - A foglalási ablak Payment Details vagy Invoice fülén letöltheted a PDF‑et, és szerkesztheted a vevői adatokat. Módosítás után újranyomtathatod/újraküldheted a számlát.

- EU e‑Számla (EN 16931)
  - Opcionális, EN 16931‑kompatibilis strukturált e‑számlát is generálhatsz, ami közintézményi és piactéri követelményekhez hasznos.

- Egyedi számlasablon
  - A beépített invoice-template.php felülírható, így teljesen saját számlaképet készíthetsz, amit a témádban tárolsz.

## Gyakorlati példák

- Szálláshelyek
  - Egy 5 éjszakás foglalásnál bekapcsolod a napi bontást: a számlán minden nap külön tételként szerepel, az akcentusszín és a logó pedig egységes arculatot ad.

- Jármű- és eszközkölcsönzés
  - Hétvégi bérlés után a foglalás visszaigazolásának e‑mailjéhez automatikusan csatolódik a számla, 5 napos fizetési határidővel.

- EU‑s vevő vagy közintézmény
  - Bekapcsolod az e‑számlát, így a foglalás mellett keletkezik a strukturált adatfájl is, ami megfelel a vonatkozó európai szabványnak.

## Előnyök és értékajánlat

- Idő- és adminisztráció‑megtakarítás: nincs kézi számlázás.
- Kevesebb hiba: egységes sablonok és automatizált adatkivonás.
- Márkahű megjelenés: professzionális, bizalomépítő dokumentumok.
- Megfelelőség: logikus számozás, esedékesség, EU e‑számlázási opció.
- Integrált működés: minden a WP Booking Systemen belül, extra rendszerek nélkül.

## Kinek ajánlott?

- Apartmanok, panziók, szállásadók, akik többnapos foglalásokkal dolgoznak.
- Jármű‑, hajó‑, kerékpár‑ és eszközkölcsönzők.
- Rendezvényhelyszínek és szolgáltatók, ahol fix foglalások keletkeznek.
- Ügynökségek, fejlesztők, akik ügyfeleiknek komplett, karbantartható megoldást keresnek.
- EU‑s beszállítók, akiknek fontos az EN 16931‑kompatibilis e‑számla.

## Telepítés és első lépések

1. Előfeltétel: WP Booking System prémium + Business/Developer licenc, majd az Invoices kiegészítő aktiválása.
2. Globális beállítások: Settings → Payment → Invoices
   - Logó, fejléc/alcím, akcentusszín
   - Számlaszéria előtag, sorszám‑eltolás, esedékesség napokban
   - Napi bontás, 0 árú tételek elrejtése, lábléc opciók
3. Űrlapszint: Forms → Form Options → Invoice Settings
   - Vevői és szállítói adatok (dinamikus tagekkel)
   - Űrlapspecifikus lábléc megjegyzés
4. E‑mail csatolmány: engedélyezd, hogy a számlák az értesítő e‑mailekhez csatolódjanak.

## Működési folyamat a gyakorlatban

- Foglalás létrejön → a rendszer generálja a PDF‑számlát (és opcionálisan az e‑számlát).
- Adminban a foglalásnál a Payment Details/Invoice fülön:
  - Megtekintés, letöltés, újranyomtatás
  - Vevői adatok pontosítása és mentése
  - Újraküldés e‑mailben, ha szükséges

## Testreszabás tippek

- Arculat: használd a vállalati színeket és logót a profi megjelenéshez.
- Számozás: állíts be egy egyértelmű előtagot és évenkénti logikát (pl. INV-2025-XXXX).
- Sablon: ha speciális elrendezést szeretnél, készíts saját invoice-template.php fájlt a témádban.
- Napi bontás: hosszabb tartózkodásnál növeli az átláthatóságot és csökkenti a vitás helyzeteket.

## Adminisztráció és hozzáférés

- Minden számlát a foglalás szerkesztőnézetéből érsz el.
- A vevői adatok utólagos módosítása után a PDF újragenerálható.
- A fájlok letöltése és e‑mailes kiküldése egy kattintás.