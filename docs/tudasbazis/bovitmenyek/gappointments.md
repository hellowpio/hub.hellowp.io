---
title: "gAppointments"
description: "Prémium Gravity Forms-kiegészítő online időpontfoglaláshoz: szolgáltatások, szolgáltatók, naptár és fizetés egy űrlapfolyamatban."
sidebar_label: "gAppointments"
---

## Mi ez és milyen problémát old meg?

A gAppointments egy **időpontfoglaló bővítmény** a Gravity Forms-hoz. Arra való, hogy a meglévő űrlapfolyamataidba beépítsd a teljes foglalási logikát: szolgáltatásválasztás, szolgáltató, naptár, árkalkuláció, fizetés és értesítések. Így nem kell külön foglalómotort használnod, minden egy helyen marad – az űrlapjaidban.

## Hogyan működik röviden?

- Létrehozol **szolgáltatásokat** (ár, időtartam, kapacitás, pufferidő stb.).
- Felveszel **szolgáltatókat** (egyedi munkaidő, szünetek, ünnepnapok).
- A Gravity Forms-ban összeállítod az űrlapot a **dedikált foglalási mezőkkel**.
- Opcióként bekapcsolod a **fizetést** és az **értesítéseket**.
- Beágyazod az űrlapot, és az ügyfelek önkiszolgálóan foglalnak.

## Fő funkciók

### Foglalási mezők a Gravity Forms-ban
A bővítmény saját mezőket ad:
- **Booking Services**: szolgáltatásválasztás és árazás alapja.
- **Booking Providers**: konkrét szolgáltató kiválasztása.
- **Booking Calendar**: időpont/dátum kijelölése az elérhetőségek szerint.
- **Booking Cost**: foglalási költség kalkulációja.
- **Gravity Forms Total integráció**: a teljes összeg a megszokott Total mezőbe kerül, hogy fizetési feedekkel azonnal használhasd.

Mit jelent ez a gyakorlatban? A felhasználó az űrlapon kiválasztja a szolgáltatást és a szolgáltatót, látja az **elérhető idősávokat**, a rendszer kiszámolja az árat, és rögtön fizethet.

### Szolgáltatások és időrések
- **Időrés-alapú vagy csak dátumos** foglalás.
- **Időtartam** és **pufferidő (cleanup)** a találkozók között.
- **Kapacitás/férőhely**: több résztvevős foglalások támogatása.
- **Hézagcsökkentés (reduce gaps)**: optimalizálja az egymás utáni idősávokat.
- **12/24 órás formátum**, **végidő megjelenítése**, **AM/PM tüntetése**.
- **Előrendelési ablakok**: jövőbeni napok száma, dátumintervallum vagy egyedi napok.
- **Többszörös foglalás engedélyezése**, napi foglalási limit, **dupla foglalás tiltása**.

Ezekkel szabályozod, mikor és mennyit lehet foglalni, minimalizálva a kihagyott idősávokat és a túlfoglalást.

### Szolgáltatók kezelése
- **Szolgáltatónként egyedi munkaidők**, szünetek, ünnepnapok.
- A szolgáltatók a **frontenden megtekinthetik** saját időpontjaikat.
- Egyszemélyes és több szolgáltatós működésre egyaránt alkalmas.

### Fizetés és értesítések
- Működik a Gravity Forms **fizetési kiegészítőivel** (pl. online fizetés).
- A fizetés összege a **Form Total** alapján számolódik.
- **E‑mail értesítések** alapból, **SMS** opcióval kiegészítve.

Így az ügyfél a foglaláskor már fizethet, ami csökkenti a no-show-kat és az utólagos adminisztrációt.

### Naptár és többnyelvűség
- **Google Calendar szinkron** opció, hogy a naptárad naprakész legyen.
- **Add to Calendar** beállítás, hogy az ügyfél egy kattintással felvegye a találkozót.
- **Fordítható naptárfelület** és **reszponzív** megjelenés mobilra.

### Frontend önkiszolgálás
- Rövidkódok a saját időpontok megjelenítéséhez:

```
[ga_appointments]
[ga_provider_appointments]
```

- Szerepkör-alapú menük: külön menüpont ügyfeleknek és szolgáltatóknak.

## Gyakorlati példák

- **Szépségszalon**: hajvágás 45 perc, 15 perc pufferrel; 2 fodrász külön munkaidőkkel; a vendég választ fodrászt és időpontot, fizet online, automatikus e‑mail és naptárbejegyzés készül.
- **Magánrendelő**: 20 perces konzultációk, napi max. 12 foglalás; dupla foglalás tiltása; az orvos ünnepnapokon nem elérhető; az asszisztens a frontend listából látja a napi időpontokat.
- **Online coaching/oktatás**: csak dátumfoglalás eseményenként, kapacitás 20 fő; a résztvevők “Add to Calendar” gombbal viszik a saját naptárukba.

## Előnyök és értékajánlat

- **Egy ökoszisztéma**: űrlapok, logikák, értesítések, fizetés és foglalás egy helyen.
- **Kevesebb adminisztráció**: automatikus idősávkezelés, értesítések és fizetések.
- **Túlfoglalás elleni védelem**: kapacitás, dupla foglalás tiltása, naptárszinkron.
- **Jobb erőforrás-kihasználás**: pufferidők, hézagcsökkentés és előrendelési szabályok.
- **Ügyfélélmény**: gyors, mobilbarát foglalás és azonnali visszaigazolás.

## Kinek ajánlott?

- **Szolgáltatásalapú vállalkozásoknak**: szépségipar, egészségügy, tanácsadás, edzés/oktatás, javító- és helyszíni szolgáltatások.
- **Olyan csapatoknak, akik már Gravity Forms-t használnak**, és a foglalást természetesen, külön rendszer nélkül, a meglévő űrlapfolyamataikban szeretnék kezelni.
- **Több szolgáltatóval dolgozó vállalkozásoknak**, ahol kritikus a kapacitás és a beosztás.

## Biztonság és frissítések

Korábban azonosítottak egy **Reflected XSS** sérülékenységet, amelyet a fejlesztő frissítéssel javított. Mindig a **legfrissebb kiadást** használd, és tartsd naprakészen a bővítményt és a kapcsolódó kiegészítőket.

## Rendszerkövetelmények

- **WordPress** és **Gravity Forms** szükséges.
- Opcionális: **Gravity Forms fizetési kiegészítők** online fizetéshez.
- Opcionális: **Google Calendar** párosítás (a párosítás lépéseit a fejlesztő támogatása ismerteti).

## Gyors bevezetési checklist

- Szolgáltatások: időtartam, ár, kapacitás, puffer, foglalási ablakok beállítása.
- Szolgáltatók: felhasználó-hozzárendelés, munkaidő, szünetek, ünnepnapok.
- Űrlap: név/e‑mail/telefon mezők + Booking Services/Providers/Calendar/Cost + Total.
- Logika: többszörös foglalás, napi limit, dupla foglalás tiltása, hézagcsökkentés.
- Fizetés: fizetési feed(ek) beállítása; összeg a Total mezőből.
- Értesítések: e‑mail sablonok és (ha kell) SMS.
- Naptár: Google Calendar szinkron és/vagy Add to Calendar.
- Frontend: rövidkód-oldalak az ügyfélnek és a szolgáltatónak.
- Adatvédelem: adatkezelési és értesítési szabályok ellenőrzése.

Ezzel a gAppointments-szel egy professzionális, rugalmas és skálázható foglalási rendszert kapsz, amely natívan illeszkedik a Gravity Forms világába.