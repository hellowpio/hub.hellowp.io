---
title: "WooCommerce Bookings"
description: "Hivatalos WooCommerce kiterjesztés időpontok, bérlések és helyfoglalások értékesítéséhez rugalmas elérhetőséggel, árazással és naptárintegrációval."
sidebar_label: "WooCommerce Bookings"
---

## Mi ez és milyen problémát old meg?

A WooCommerce Bookings a WooCommerce hivatalos bővítménye, amellyel **foglalható termékeket** hozhatsz létre: időpontok, bérlések, idősávos belépők vagy terem-/eszközfoglalások értékesíthetők közvetlenül a webáruházadban. Kiváltja a manuális egyeztetést, megelőzi a dupla foglalásokat, kezeli az időzónákat és a **komplex árazást**, miközben neked egy átlátható admin naptárt ad.

## Hogyan működik röviden?

A termékadatoknál választod a **Bookable product** típust, majd beállítod:
- a foglalási **időblokkokat** (pl. 30/60 perc vagy nap),
- a **min./max. előfoglalási** időt és a **pufferidőket**,
- opcionálisan **Persons** (létszám, személytípusok) és **Resources** (személyzet/helyiség/eszköz) kezelést,
- a **költségeket** (alapdíj, blokkonkénti díj, megjelenítési ár),
- az **elérhetőségi szabályokat** és az **időzóna**-logikát,
- igény szerint **jóváhagyásos** folyamatot és **Google Naptár** szinkront.

```text
Minta beállítás (összefoglaló)
- Típus: Bookable product
- Időblokk: 60 perc
- Előfoglalás: min. 24 óra, max. 30 nap
- Puffer: 15 perc, adjacent buffering bekapcsolva
- Persons: Has persons (Felnőtt/Gyerek), kapacitás 1–12
- Resources: Has resources (Szoba A/B), automatikus kiosztás
- Costs: Base + Block, hétvégi felár szabály
- Elérhetőség: H-P 9–18, hétvége zárva
- Jóváhagyás: szükséges, e-mail értesítések aktívak
```

## Fő funkciók részletesen

### Időblokkok és foglaláslogika
- **Blokk-alapú időkezelés**: percek/órák/napok szerinti foglalás, fix vagy ügyfél által megadott időtartammal.
- **Előfoglalási ablak**: szabályozod, milyen korán és meddig előre lehet foglalni.
- **Pufferidők**: automatikus szüneteket iktatsz a foglalások közé; az „adjacent buffering” a szomszédos foglalások mindkét oldalára pufferel.

### Elérhetőség és időzónák
- **Részletes elérhetőségi szabályok** termék- és erőforrás-szinten (nyitvatartás, kivételek, kizárások).
- **Alapértelmezett állapot**: megadhatod, hogy a termék általában elérhető vagy tiltott, és erre építesz szabályokat.
- **Időzóna-támogatás**: az idősávok és visszaigazolások megjeleníthetők a látogató saját időzónájában, különösen óra/perc alapú foglalásoknál.

### Persons (Személyek)
- **Létszámkezelés**: min./max. fő és kapacitás.
- **Személytípusok**: pl. felnőtt/gyerek eltérő árral és szabályokkal.
- **Fejenkénti árazás**: az árak automatikusan szorzódnak személyenként.

### Resources (Erőforrások)
- **Megosztott erőforrások**: személyzet, szoba vagy eszköz kapacitással.
- **Választás vagy kiosztás**: az ügyfél választhat konkrét erőforrást, vagy a rendszer automatikusan kiosztja.
- **Erőforrás-költségek és elérhetőség**: külön költség- és szabályrendszer erőforrásonként.

### Árazás (Costs)
- **Alapdíj (Base)** és **blokkdíj (Block)** kombinálható.
- **Tartomány-alapú szabályok**: napszak, nap, létszám vagy időtartam szerinti felár/kedvezmény.
- **Megjelenítési ár**: min./max. ár kommunikálása a termékoldalon.

### Naptár és adminisztráció
- **Admin naptárnézet**: hónap/nap/ütemezés nézet az összes foglalás áttekintéséhez.
- **Kézi foglalás**: adminból új foglalás rögzíthető rendeléshez kötötten vagy anélkül.
- **Szerkesztés és kezelés**: meglévő foglalások módosíthatók egy helyen.

### Jóváhagyás és értesítések
- **Előzetes jóváhagyás**: a beérkező foglalás először „jóváhagyandó”, majd fizetéskérés megy az ügyfélnek.
- **E-mail életciklus**: értesítések a státuszokhoz (függőben, jóváhagyva, visszaigazolva), plusz rendelésszintű levelek.

### Integrációk és kiegészítők
- **Google Naptár**: egy- vagy kétirányú szinkron; kétirányú módban a Google-be írt események blokkolják az elérhetőséget.
- **Kiegészítők**: előlegfizetés, nyilvános foglalási naptár, szállás-specifikus funkciók.
- **Kompatibilitás**: modern WooCommerce-ökológia (pl. HPOS, blokkalapú kosár/checkout) támogatása.
- **Fejlesztőknek**: hookok, sablonok, CSS, olvasási REST-végpontok, valamint export/import eszköz.

## Gyakorlati példák

- **Szépségszalon**: 60 perces blokkok, 15 perc puffer, munkatársak mint erőforrások, az ügyfél kiválasztja a stylistot. Hétvégére felár szabály.
- **Jógaóra/csoportos tréning**: fix idősávok, 20 fős kapacitás, „Felnőtt/Gyerek” személytípus külön árral. A foglalás automatikusan visszaigazolt.
- **Kajakbérlés**: óradíjas blokkok, eszközök mint erőforrások megosztott kapacitással, puffer a ki- és visszaadásra. Kétirányú naptárszinkron a csapat beosztásához.
- **Múzeumi idősávos belépő**: naponta több fix sáv, létszámkorlát, megjelenítési ár a min.–max. kommunikációhoz, előzetes jóváhagyás kikapcsolva a gyors kasszához.

## Előnyök és értékajánlat

- **Kevesebb admin**: az ügyfelek önkiszolgálóan foglalnak, te pedig naptárból kezeled.
- **Nincs dupla foglalás**: kapacitás, erőforrások és pufferidők gondoskodnak a biztonságról.
- **Rugalmas árazás**: valós üzleti szabályokat tudsz leképezni (hétvégi felár, létszámkedvezmény).
- **Jobb ügyfélélmény**: időzóna-kijelzés, tiszta idősávok, automatizált értesítések.
- **Skálázhatóság**: személyek, erőforrások, naptárszinkron és kiegészítők egységes rendszerben.

## Kinek ajánlott?

- **Szolgáltatóknak**: szépségszalon, orvos, tanácsadó, fotós – időpontfoglalás cap-pel és jóváhagyással.
- **Edzőknek/oktatóknak**: csoportos órák, workshopok, kurzusok fix idősávokkal és létszámkezeléssel.
- **Túraszervezőknek**: vezetett túrák, fix turnusok erőforrás- és személykezeléssel.
- **Bérbeadóknak**: eszköz-, terem- vagy járműbérlés kapacitással és pufferidőkkel.
- **Látogatóközpontoknak/attrakcióknak**: idősávos belépők, dinamikus kontingensek.
- **Szállásadóknak**: ha szállás-specifikus igényed van, kiegészítővel bővítheted.

## Korlátok és tippek

- **Google Naptár**: alapból egy naptár kapcsolható; kétirányú módban a Google-események az üzlet elérhetőségét blokkolják. A Google-ben szerkesztett események nem módosítanak visszamenőleg WooCommerce-foglalást.
- **Pufferidők**: a puffer egysége megegyezik a foglalási blokk egységével, és beleszámít az elérhetőségbe.
- **Időzóna**: különösen óra/perc alapú foglalásoknál hasznos; tartsd szem előtt a nemzetközi ügyfeleket.

Ezzel a bővítménnyel pontosan azt kapod, amire egy professzionális online foglalási rendszerben szükséged van: szabályozható idősávokat, valós üzleti logikát követő árazást, erőforrás- és létszámkezelést, valamint egy tiszta naptárt – mindezt a saját WooCommerce áruházadba integrálva.