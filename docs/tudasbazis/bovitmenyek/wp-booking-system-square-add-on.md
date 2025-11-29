---
title: "WP Booking System - Square Add-on"
description: "Square fizetési kapu integráció a WP Booking System foglalási űrlapjába, azonnali online kártyás fizetéssel, előengedélyezéssel és admin oldali visszatérítéssel."
sidebar_label: "WP Booking System - Square Add-on"
---

## Mi ez és milyen problémát old meg?

A WP Booking System – Square Add‑on egy prémium kiegészítő, amellyel a foglalási űrlapodon közvetlenül, a **Square** fizetési kapun keresztül fogadhatsz **online bankkártyás fizetéseket**. Nem kell webáruházat építened vagy WooCommerce‑t használnod: a fizetés a WP Booking System saját pénztári folyamatába illeszkedik. Ezzel csökkented a no‑show‑t, automatizálod a díjbeszedést és egy helyen kezeled a foglalásokat és tranzakciókat.

## Hogyan működik?

- A vendég a foglalási űrlapon kiválasztja a **Square** fizetési módot, megadja a kártyaadatokat, amelyeket a Square biztonságosan feldolgoz.
- Eldöntheted, hogy a foglaláskor az összeg azonnal **terhelésre** kerüljön, vagy csak **előengedélyezést** kérsz, és a végső terhelést később, az admin felületen történő elfogadáskor hajtod végre.
- A fizetés és a foglalás adatai a WP Booking System adminban jelennek meg; innen **visszatérítést** is indíthatsz.
- Ha **részletfizetést / előleget** kérsz, a végfizetés történhet online is egy külön **Secondary Payment Page** oldalon.

## Fő funkciók, érthetően

- **Square integráció a foglalási űrlapon**
  A Square mint fizetési opció jelenik meg. A kártyaadatok a Square rendszeren keresztül kerülnek feldolgozásra, így a teljes fizetési élmény a foglalási folyamat része.

- **Előengedélyezés (authorize) és késleltetett terhelés (capture)**
  Beállíthatod, hogy a foglalás pillanatában csak fedezetellenőrzés történjen. Az előengedélyezés **7 napig** érvényes; ez idő alatt az adminban egy kattintással terhelheted az összeget. Ha 7 nap eltelik, a terhelés meghiúsul, és a fedezet felszabadul.

- **Sandbox/teszt üzem**
  Válts **teszt módba**, használd a Square sandbox kártyáit, és élesítés előtt kockázat nélkül ellenőrizd a teljes folyamatot.

- **Admin beállítások, testreszabás**
  Kapcsolhatod a fizetési módot (Aktív/Inaktív), megadhatod a **megjelenített nevet** és **leírást**, beállíthatod az **Invoice Item Name** mezőt (ez a Square irányítópultban látszó tételnév), és külön kapcsolhatod a **késleltetett terhelést**.

- **API-kapcsolat Square‑hez**
  A beállításokban rögzíted az **Application ID**, **Access token** és **Location ID** értékeket. Ezek biztosítják a biztonságos kommunikációt a Square és a weboldalad között.

- **Részletfizetés és végfizetés online**
  Kérhetsz **előleget**, a fennmaradó összeget pedig később a **Secondary Payment Page** oldalról lehet rendezni – ugyanazzal a Square kapuval.

- **Tranzakciókezelés és visszatérítés**
  A foglalási modálban látszanak a fizetési részletek; innen indíthatsz **refundot** (teljes vagy részleges), így nem kell külön rendszerek között ugrálnod.

## Telepítés és konfiguráció röviden

Előfeltételek:
- WP Booking System Business (vagy magasabb) licenc
- Square fejlesztői fiók az API‑kulcsokhoz

Lépések:
1. Hozz létre Square alkalmazást a fejlesztői irányítópulton.
2. Másold ki az **Application ID** és **Access token** értékeket, és rögzítsd a WP Booking System → Settings → Payments → Square felületen.
3. Szerezd meg a **Location ID**‑t, és add meg a megfelelő Square beállításnál.
4. Mentsd a beállításokat, majd igény szerint kapcsold be a **Sandbox módot** teszteléshez.

Beállítás minta:

```
Payments > Square
- Status: Active
- Display name: Bankkártya (Square)
- Description: Biztonságos online kártyás fizetés
- Invoice Item Name: Foglalás #{{booking_id}}
- Capture later (authorize only): enabled
- Mode: Sandbox / Live
- Application ID: sq0idp_...
- Access token: EAAA-...
- Location ID: L123ABC...
```

## Példák a gyakorlatból

- **Vendégház előfoglalás ellenőrzéssel**
  Előengedélyezed a kártyát foglaláskor, majd a szobák végleges visszaigazolásakor, 7 napon belül terheled az összeget. Ha nem hagyod jóvá, az összeg nem kerül levonásra.

- **Eszközbérlés azonnali terheléssel**
  A bérlő foglal, az összeg azonnal terhelésre kerül. Kevesebb adminisztráció, biztos bevétel.

- **Szolgáltatás előleg + végfizetés**
  Online előleget kérsz, a szolgáltatás előtt a vendég a Secondary Payment Page‑en rendezi a maradékot ugyanazzal a Square‑rel.

- **Gyors visszatérítés problémás esetnél**
  Lemondáskor a foglalási modálból indítod a részleges visszatérítést – nincs külön belépés más rendszerbe.

## Előnyök és értékajánlat

- **WooCommerce nélkül**: önálló, egyszerű pénztár a foglalási űrlapban.
- **Kevesebb no‑show**: előleg vagy előengedélyezés már a foglalásnál.
- **Egységes admin**: foglalások, fizetések, visszatérítések egy helyen.
- **Biztonságos bevezetés**: sandbox és tesztkártyák.
- **Rugalmas pénzkezelés**: azonnali terhelés vagy késleltetett capture, ami a működésedhez igazítható.
- **Bővíthető**: együttműködik a WP Booking System árazási, adó, kupon és több pénznemes funkcióival, valamint más fizetési kapukkal is alternatívaként.

## Kinek ajánlott?

- **Szálláshelyeknek**: apartmanok, vendégházak, kempingek – ahol hasznos az előengedélyezés és az előleg.
- **Eszközbérbeadóknak**: kerékpárok, sporteszközök, autók – azonnali terhelés és letétkezelés.
- **Szolgáltatóknak és rendezvényszervezőknek**: időpont‑ és helyfoglalások online díjbeszedéssel.
- Neked, ha **Square‑t használsz**, és WP Booking System Business (vagy magasabb) licenccel dolgozol.

## Korlátok és megjegyzések

- Az előengedélyezés **7 napig** érvényes. Ha később próbálod terhelni, a tranzakció meghiúsul.
- A kiegészítő csak **Business (vagy magasabb)** licenccsomaggal érhető el.
- A működéshez érvényes **Square API‑kulcsok** és **Location ID** szükségesek.