---
title: "JetBooking"
description: "Napi/éjszakai foglalásokhoz készült, WooCommerce-kompatibilis WordPress bővítmény rugalmas árazással, egységkezeléssel és naptárszinkronnal."
sidebar_label: "JetBooking"
---

## Mi ez és milyen problémát old meg?

A JetBooking egy professzionális foglalási bővítmény WordPresshez, amelyet kifejezetten **napi/éjszakai** (daily/nightly) jellegű foglalásokra terveztek. Segít egységes rendszerbe fogni azt, amit sokan több külön pluginnal oldanak meg: elérhetőségi naptár, foglalási űrlap, árkalkuláció, fizetés, egység- és kapacitáskezelés, admin felület és automatizált értesítések. Szorosan **integrálható a WooCommerce-szel**, és működik a népszerű oldalszerkesztőkkel (Elementor, Gutenberg, Bricks).

## Hogyan működik? (architektúra)

Két üzemmód közül választhatsz:

- **Plain (CPT-alapú)**: saját Egyedi Bejegyzéstípusokkal (pl. „Apartmanok”), JetEngine mezőkkel és JetFormBuilder űrlappal építesz adatmodellt és foglalási folyamatot. Maximális testreszabhatóság no-code/low-code eszközökkel.
- **Woo-alapú**: a foglalások **WooCommerce-termékekhez** kapcsolódnak, így a teljes WooCommerce checkout, adózás és rendeléskezelés érhető el. Kétirányú rendelés-szinkron tartja egyben a JetBooking és a WooCommerce adatait.

A foglalási űrlap egy elérhetőségi naptárat használ dátumtartomány-választással. A beküldött adatok alapján a rendszer lefoglalja a kiválasztott egységeket, kiszámolja az árat, és Woo-alapú módban végigviszi a kosár/checkout folyamatot.

## Fő funkciók részletesen

### Foglalási motor és naptár
- **Elérhetőségi naptár** dátumtartomány-választással.
- **Min./max. tartózkodás**, első foglalható nap, legkorábbi/legkésőbbi dátum.
- **Check-out nap** beleszámítása vagy kihagyása az árképzésből.
- **Munkanapok/hétvégék/ünnepnapok** kezelése és kizárások.

Mit jelent ez a gyakorlatban? Beállíthatod például, hogy egy apartmant legalább 2, legfeljebb 14 éjszakára lehessen foglalni, a távozás napja ne számítson teljes árnak, és bizonyos ünnepnapok ki legyenek zárva.

### Dinamikus árazás
- **Szezonális és hétvégi árak** (pl. főszezonban drágább).
- **Ár éjszakánként/naponta**.
- **Tartózkodáshossz-kedvezmény** (pl. 7+ éj -10%).
- **Személyenkénti árképzés** (külön felnőtt/gyerek díj).
- Számított mezők támogatása az **automatikus végösszeg** kalkulációhoz.

Példa egy egyszerű kalkulációra (logika szemléltetéséhez):
```
összeg = alapár_éj * éjszakák
       + hétvégi_pótdíj
       + felnőtt_díj * felnőttek
       + gyerek_díj * gyerekek
       - hosszútáv_kedvezmény
```

### WooCommerce és fizetés
- **Woo checkout**, kuponok, adózás, számlázási adatok.
- **Kétirányú szinkron** a JetBooking foglalás és a Woo-rendelés között.
- Támogatott több fizetési mód (a WooCommerce beállításaid szerint).

### Egységek és kapacitás
- **Units manager**: több azonos típusú egység kezelése (pl. 10 db „Deluxe szoba”).
- **Egységstátuszok**, egyedi ütemezési szabályok és akár buffer idők túlfoglalás ellen.
- Kapacitás és férőhely szerinti számítás (pl. plusz díj extra vendégekért).

### Admin és automatizálás
- **JetBooking Dashboard**: Naptár, Idővonal és Lista nézet, szűrés, rendezés.
- **Kézi foglalás rögzítése**, módosítás, lemondás.
- **Export**: iCal és CSV.
- **Workflows**: eseményalapú e-mailek (visszaigazolás, emlékeztető), valamint webhookok (pl. Zapier/Make).
- **iCal/Google Calendar szinkron**: egy- és kétirányú; fontos tudnod, hogy a Google naptárfrissítések láthatósága késhet a Google frissítési ciklusa miatt.

### Oldalszerkesztők és adatszerkezet
- Teljesen kompatibilis **Elementorral, Gutenberggel és Bricks-szel**.
- A Plain mód ideális **JetEngine** (CPT, dinamikus listák) és **JetFormBuilder** (űrlapok, számított mezők) használatával.
- Katalógus-szűréshez és listázáshoz jól illeszthető **JetSmartFilters**-szel.

## Gyakorlati példák

- **Boutique hotel 12 szobával**: két szobatípus, főszezoni és hétvégi ár, minimum 2 éjszaka. A Units manager kezeli a típusonkénti darabszámot, a vendég e-mailben automatikus visszaigazolást kap, a WooCommerce végzi a fizetést.
- **Autókölcsönző**: napi bérlés, hétvégi pótdíj, kaució WooCommerce-ben kezelve. A naptár kizárja a már foglalt napokat, a hosszú bérlés kedvezményes.
- **Sífelszerelés-bérlés**: szezonális árak, gyerek kedvezmény, iCal szinkron a pultnál használt naptárhoz.

## Előnyök és értékajánlat

- **Kevesebb plugin, kevesebb kockázat**: egy rendszerben a naptár, egységek, árak, fizetés és értesítések.
- **Túlfoglalás mérséklése**: egységszintű készlet, min/max tartózkodás, buffer idők, naptárszinkron.
- **Rugalmas árazás**: szezonok, hétvégék, tartózkodáshossz és személyenkénti díjak.
- **Üzemeltetési hatékonyság**: központi dashboard, exportok, automatikus e-mailek.
- **No-code/low-code**: gyors testreszabás JetEngine-nel és JetFormBuilderrel.

## Kinek ajánlott?

- **Apartman- és nyaralókiadóknak**, panzióknak, kisebb hoteleknek.
- **Napi bérlést** kínáló szolgáltatóknak (autó, eszköz, sportszer).
- **Ügynökségeknek és fejlesztőknek**, akik WooCommerce-alapú foglalási megoldást keresnek, testreszabható adatmodellel.
- Ha **órás/slot-os időpontfoglalás** kell (fodrász, orvos, stúdió), inkább a JetAppointment az ajánlott; a JetBooking a napi/éjszakai foglalásokra optimalizált.

## Gyors indulás (Plain mód)

1. Hozz létre egy **Booking Instance** CPT-t (pl. „Apartmanok”) a szükséges mezőkkel (ár, képek, férőhely, szabályok).
2. Készíts **foglalási űrlapot** számított mezőkkel (éjszakák, személyek, szezonális/hétvégi logika).
3. Állítsd be az **elérhetőségi naptárat**, min/max tartózkodást, kizárásokat.
4. Tedd ki az űrlapot a **Single** sablonra vagy egy **dinamikus popupba**.
5. Kapcsold be a **Workflows** értesítéseket (visszaigazolás, emlékeztető) és az **iCal szinkront**.
6. Ha online fizetés kell, válts **Woo-alapú** módra, és használd a WooCommerce checkoutot.

## Korlátok és megfontolások

- **Óraalapú foglalásra** nem ideális; napi/éjszakai (vagy heti) logikára optimalizált.
- **Google Calendar** szinkronnál számolj azzal, hogy a Google frissítési ciklusa miatt a változások megjelenése késhet.
- Plain módban a mély testreszabáshoz érdemes **JetEngine**-t és **JetFormBuilder**-t használni.

## Fogalomtár

- **Booking Instance**: a foglalható entitás (pl. egy apartman) rekordja.
- **Units manager**: több azonos egység kezelése egy típuson belül.
- **Workflows**: eseményalapú e-mailek és webhookok automatizálása.
- **iCal szinkron**: naptárimport/export ICS URL alapján, egy- vagy kétirányban.

## Licenc röviden

Elérhető önálló éves licenc egy webhelyre, illetve teljes csomagban az összes JetPlugins bővítménnyel. A csomag rugalmas árazást és pénzvisszatérítési garanciát kínál.