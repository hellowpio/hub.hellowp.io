---
title: "JetEngine"
description: "Dinamikus tartalom- és adatmodell-bővítmény WordPresshez: CPT/CCT, relációk, lekérdezések, listázások és felhasználói funkciók egy ökoszisztémában."
sidebar_label: "JetEngine"
---

## Mi ez és milyen problémát old meg?

A JetEngine egy dinamikus tartalomkezelő bővítmény WordPresshez, amely Elementorral, a Blokk Szerkesztővel (Gutenberg) és Bricks-szel működik. Akkor kell, ha strukturált adatokból építenél komplett webhelyet – kódolás nélkül. Egyetlen eszközkészletben kapod meg a **tartalommodellt** (CPT, CCT, taxonómiák, mezők, relációk), a **megjelenítést** (Listings, térkép, naptár), a **lekérdezés-kezelést** (Query Builder), a **személyre szabást** (Visibility, Profile, Data Stores) és az **integrációkat**.

A JetEngine célja, hogy leváltsd a sok kis plugint: központosítja az adatmodellt és a lekérdezéseket, gyors, skálázható (CCT), és komplex kapcsolatokkal is boldogul.

## Hogyan működik – fő modulok

### Tartalomszerkezet
- **Custom Post Types, Taxonomies, Meta Boxes, Custom Fields**: felépíted a tartalomtípusokat és a mezőket (dátum, reláció, repeater, galéria stb.), és hozzárendeled a szerkesztőfelülethez.
- **Options Pages**: globális adatok (pl. cégadatok, kapcsolatok) egy helyen, bárhol dinamikusan felhasználhatók.
- **Custom Content Types (CCT)**: adataid külön SQL-táblában tárolódnak, így nagy adatmennyiségnél is gyors marad a webhely. Kapnak saját mezőket, admin oszlopokat/szűrőket és igény szerint single-oldal megjelenítést.

### Listázás és megjelenítés
- **Listings + Listing Grid**: kártyasablonokat készítesz, majd rácsban, sliderben, térképen vagy naptárban listázod őket.
- **Dynamic Field/Tag/Function, Macros**: bármilyen mező, kapcsolat vagy aggregált érték (darabszám, átlag, min/max, összeg) dinamikus kiírása.
- **Dynamic Calendar**: időalapú tartalmak (események, foglalások) naptárszerű nézete.
- **Map Listings**: Google Maps és OpenStreetMap megjelenítés, cookie/consent-kompatibilis mintákkal.

### Kapcsolatok és adatmodellezés
- **Relations**: 1–1, 1–N és N–N relációk CPT-k, CCT-k, taxonómiák és felhasználók között. Kezelhetsz relációs metamezőket (pl. szerep egy film–színész kapcsolatban), és lekérdezheted a szülő/gyermek/nagyszülő ágakat.

### Lekérdezés-kezelés
- **Query Builder**: központi helyen hozol létre lekérdezéseket posztokra, termekre, felhasználókra, kommentekre, CCT-re, REST API-ra vagy közvetlen **SQL**-re. Tud cache-elni, és kérésre **REST végpontot** is regisztrál.
- **AI Query Generator**: prompt alapján javasol SQL-t/lekérdezést, amit finomíthatsz.

### Felhasználói funkciók és személyre szabás
- **Profile Builder**: saját fiók- és profiloldalak menüvel, aloldalakkal, jogosultság-alapú hozzáféréssel.
- **Data Stores**: kedvencek, like-ok, nemrég megtekintett elemek – tárolás usermeta, cookie, session vagy local storage módban.
- **Dynamic Visibility**: elemek feltételes megjelenítése metaérték, felhasználói szerep, dátum/idő vagy egyéb feltételek szerint. Shortcode-on át is használható.

### AI-eszközök
- **AI Website Structure Builder**: promptból javasolt tartalommodell (CPT, mezők, relációk), amit egy kattintással átvehetsz és szerkeszthetsz.

### Admin és integrációk
- **Admin Columns & Filters**: egyedi oszlopok és szűrők a listanézetekhez.
- **Integrációk**: Elementor Pro, Gutenberg (JetStyleManagerrel), Bricks, ACF, WooCommerce, Pods, CPT UI, fő SEO-bővítmények.
- **Űrlapok**: frontenden beküldéshez és szerkesztéshez használd a JetFormBuildert (a JetEngine beépített űrlapmodulja legacy).

### REST API
- **CCT végpontok**: CRUD műveletek, listázás és külső rendszerek felé történő integráció fekete doboz kód nélkül.

## Gyakorlati példák

### 1) Ingatlanportál
- **Adatmodell**: CCT „Ingatlan”, mezők: ár, város, cím, alapterület, képgaléria; Taxonómia: ingatlantípus; Reláció: „Ingatlan” – „Ügynök” (felhasználó).
- **Lekérdezés**: Query Builderrel ár, város és típus szűrés, cache bekapcsolva.
- **Megjelenítés**: Listing Grid + Map Listing (pin-ek az ingatlanok címe alapján).
- **Funkciók**: Data Stores „Kedvencek”; Dynamic Visibility-val a „Kapcsolatfelvétel” gomb csak bejelentkezetteknek látszik; Profile Builderen ügynök-profilok.

### 2) Állásportál
- **Adatmodell**: CPT „Állás”, Taxonómia „Kategória”; reláció „Cég” CCT-vel.
- **Naptár**: Dynamic Calendar a jelentkezési határidőkhöz.
- **Űrlap**: JetFormBuilder frontendes beküldés és állás-szerkesztés jóváhagyási folyamattal.

### 3) Directory/Marketplace
- **Relációk**: N–N „Szolgáltatás” és „Város” között, relációs metával (árkategória).
- **Lekérdezés**: REST-forrásból érkező kínálat kombinálása saját CCT-vel a Query Builderben.
- **Felhasználói élmény**: like-ok és „nemrég megtekintett” lista Data Stores-szal.

## Előnyök és értékajánlat

- **Egy ökoszisztéma**: kevesebb plugin, kevesebb inkompatibilitás.
- **Skálázható teljesítmény**: CCT külön táblában, Query Builder cache és SQL mód.
- **Modellezési szabadság**: komplex relációk és relációs metaadatok.
- **Átlátható logika**: lekérdezések központosítva, újrahasznosíthatóak.
- **Gyakorlati eszköztár**: térkép, naptár, profilok, kedvencek, feltételes láthatóság.
- **No-code/low-code**: fejlesztői rugalmasság kódolás nélkül, de igény esetén bővíthető.

## Kinek ajánlott?

- **Ügynökségeknek és fejlesztőknek**, akik összetett, adatvezérelt projekteket szállítanak gyorsan.
- **Vállalkozásoknak**, akik saját directory/marketplace, ingatlan- vagy állásportált építenének.
- **Tartalomkezelőknek**, akik globális adatokat és listázásokat akarnak konzisztensen kezelni.
- **No-code alkotóknak**, akik vizuális builderekkel dolgoznak, de profi adatmodellre van szükségük.

## Gyors kezdőminta

```text
1) Hozz létre CCT „Listing” entitást (ár, helyszín, képek).
2) Készíts Relation-t „Listing” ↔ „User (Owner)”.
3) Hozz létre Query Builderben listázó lekérdezést (szűrés ár/hely szerint, cache).
4) Építs Listing sablont (Dynamic Field + galéria), majd tedd ki Listing Gridbe.
5) Adj hozzá Map Listinget cím mező alapján.
6) Kapcsold be a Data Stores „Kedvencek” funkciót.
7) Állíts be Dynamic Visibility szabályt (pl. „Ajánlatkérés” gomb csak bejelentkezett tulajdonoson kívülieknek).
8) Készíts Options Page-et (céges adatok), és jelenítsd meg a fejléchez.
```

Ezzel a folyamattal néhány óra alatt egy skálázható, dinamikus listázóoldalt kapsz, amely készen áll keresőre, térképre, kedvencekre és profilokra – egyetlen bővítményen belül.