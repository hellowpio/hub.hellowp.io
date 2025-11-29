---
title: "FluentCart"
description: "Önhostolt, WordPress‑alapú e‑kereskedelmi bővítmény fizikai, digitális és licencelt termékekhez, villámgyors checkouttal és fejlesztőbarát bővíthetőséggel."
sidebar_label: "FluentCart"
---

## Mi ez és milyen problémát old meg?

A FluentCart egy teljesen önhostolt, WordPress‑es webáruház‑motor, amellyel egyetlen rendszerben adhatsz el **fizikai termékeket**, **digitális letöltéseket** és **licenckulcsos szoftvereket**, akár előfizetéses modellel is. A célja, hogy levágja a felesleges bloatot, gyorsítsa a checkoutot, és megszüntesse a “szigetszerű” eszközök közötti kényszerű barkácsolást. Nemzetközi adózás? Digitális kézbesítés és licenckezelés? CRM‑automatizmus? Mindez natívan, egy helyen.

## Fő funkciók és hogyan működnek

### Termékek és árképzés
- **Terméktípusok**: fizikai, digitális és licencelt digitális (szoftverkulcs), illetve hibrid csomagok.
- **Árképzés**: egyszeri díj vagy **előfizetés**, variációk (kép, készlet, felár), **Compare at price** összehasonlító ár.
- **Frissítési utak (upgrade)**: ügyfélbarát csomagszint‑váltás **prorata/különbözeti** logikával, így elegáns a Basic → Pro átlépés.

### Checkout, fizetés, adózás, szállítás
- **Fizetési kapuk**: Stripe, PayPal, utánvét; igény esetén **Paddle** a globális adókezelés kiszervezésére.
- **Checkout testreszabás**: mezők kikapcsolása/kötelezővé tétele, **vendégfizetés**, automatikus fióklétrehozás, **order bump** az átlagos kosárérték növeléséhez.
- **Adózás**: **Tax & Duties** rendszer, adóosztályok és ország‑specifikus kulcsok; **EU‑VAT/OSS** forgatókönyvek.
- **Szállítás**: zónák, módszerek, osztályok; rugalmas díjképzés tömeg/érték/kategória alapján.

### Digitális kézbesítés és licencelés
- **Biztonságos letöltés**: helyi tárhely vagy **Amazon S3**; a vásárló a saját fiókjában fér hozzá a fájlokhoz.
- **Licenckulcs‑kezelés**: aktivációs limitek, lejárat, licenc‑szintek és **upgrade utak**; a kulcsok életciklusa átlátható és auditálható.

### CRM, közösség és affiliate
- **FluentCRM**: eseményalapú triggerek (pl. Order Paid, Subscription events), automatikus címkézés és listakezelés.
- **FluentAffiliate**: jutalékkezelés, **kuponhoz kötött** jóváírás, termék‑ vagy csoport‑alapú egyedi ráták.
- **FluentCommunity**: vásárlás után automatikus hozzáférés kurzusokhoz/privát terekhez, jogosultság‑szabályokkal.

### Jelentések és adminisztráció
- **Riportok**: Sales, Orders, Revenue, Subscription, Product; idősoros összehasonlítások, ország/fizetési mód bontás, export.
- **Oldalak és sablonok**: Shop/Cart/Checkout/Profile hozzárendelés, számla/packing slip sablonok, visszaigazoló e‑mailek, naplók, fordíthatóság és szerepkörök.

### Fejlesztői és teljesítmény
- **Saját adatbázis‑táblák** és „okos” erőforrás‑betöltés a gyors oldalbetöltésért még nagy forgalom mellett is.
- **Hookok/filtrék**, **webhookok** és egyedi fizetési kapu minták; **REST API dokumentáció készülőben**. Headless felhasználás támogatott.

## Gyakorlati példák

### Szoftverlicencek értékesítése
1. Hozz létre digitális terméket licenccel, állíts be **aktivációs limitet** és lejáratot.
2. Kapcsold a Stripe‑ot, és engedélyezd az **S3**‑t a telepítőfájlhoz.
3. Adj meg **upgrade utat** Basic → Pro között.
4. Vásárláskor a rendszer kulcsot generál, a letöltés védett; aktiválások számolása automatikus. Közben CRM‑címkék és közösségi jogosultságok is beállnak.

### Nemzetközi fizikai bolt
- Szállítási **zónák** és módszerek beállítása (pl. EU, UK, US).
- **Adóosztályok** és ország‑szintű kulcsok, EU‑vásárlókhoz **VAT/OSS**.
- Ha nem akarsz adómegfeleléssel foglalkozni, válaszd a **Paddle** üzemmódot.
- Checkouton **order bump**: pl. kiterjesztett garancia. A riportokban látod a top országokat és a legjobban teljesítő fizetési módot.

### Online kurzus vagy coaching
- Egyoldalas, gyors **checkout**, automatikus fióklétrehozással.
- CRM‑triggerekkel indul a bevezető e‑mail sorozat, közösségi modulban **automatikus beléptetés** a kurzustérbe.

## Előnyök és értékajánlat

- **Gyorsabb működés**: optimalizált adatbázis és erőforrás‑töltés, reszponzív checkout.
- **Kevesebb eszköz, kevesebb hibaforrás**: fizikai, digitális és licencelt termékek egy rendszerben, beépített adózás, szállítás, kuponok és order bump.
- **Automatizált növekedés**: CRM‑triggerek, affiliate kupon‑jóváírás, közösségi jogosultságok.
- **Nemzetközi készenlét**: adóosztályok, EU‑VAT/OSS, opcionális Paddle‑alapú megfelelés.
- **Teljes kontroll**: 100% önhostolt, fejlesztői hookokkal és készülő API‑val; nincs vendor lock‑in.

## Kinek ajánlott?

- **WordPress fejlesztők/ügynökségek**: gyors, bővíthető alap egyedi projektekhez.
- **Szoftverfejlesztők**: licenckulcs, frissítési utak, S3‑os kézbesítés.
- **Digitális alkotók**: e‑könyv, sablon, kurzus értékesítés automatikus hozzáféréssel.
- **Fizikai kereskedők**: variációk, készlet, szállítás, adózás nemzetközire hangolva.
- **Közösségek és tréningek**: azonnali beléptetés és CRM‑alapú utánkövetés.

## Telepítés és licencelés

- Lépj a WordPress adminban a Bővítmények > Új hozzáadása menübe, keresd a FluentCart‑ot, majd Telepítés és Aktiválás.
- Állítsd be a boltoldalakat (Shop/Cart/Checkout/Profile).
- A Pro kiegészítőt ZIP feltöltéssel telepítheted; használatához licenckulcs szükséges.
- A kód GPL, az alap bővítmény szabadon használható; a Pro modulok licenchez kötöttek.

### Gyors beállítási ellenőrzőlista

```
[ ] Fizetési kapu(ka)t csatlakoztatod (Stripe/PayPal/Paddle/Utánvét)
[ ] Adóosztályok és országkulcsok / EU‑VAT/OSS beállítva
[ ] Szállítási zónák, módszerek, díjak konfigurálva
[ ] Első termék(ek) létrehozva (ár, variáció, készlet)
[ ] Checkout mezők testreszabva + order bump szükség esetén
[ ] E‑mail sablonok, számla/packing slip beállítva
[ ] CRM / Affiliate / Közösség integrációk bekapcsolva
[ ] Digitális fájlok tárhelye (helyi vagy S3) beállítva
[ ] Tesztvásárlás elvégezve sandbox módban
```

## Teljesítmény és skálázás

A FluentCart saját **adatbázis‑táblákat** és **célzott erőforrás‑betöltést** használ, így a termék‑ és checkout‑oldalak gyorsak maradnak forgalmi csúcsban is. A webhookok és fejlesztői hookok révén külső rendszerekkel hatékonyan integrálhatod, miközben az adatok nálad maradnak.