---
title: "MainWP Favorites Extension"
description: "Kedvenc bővítmény- és sablonlisták létrehozása és tömeges telepítése a MainWP Dashboardból, lokális, adatvédelmi szempontból kontrollált módon."
sidebar_label: "MainWP Favorites Extension"
---

## Mi ez és milyen problémát old meg?

A MainWP Favorites Extension egy hivatalos kiegészítő a MainWP Dashboardhoz. Segítségével a gyakran használt bővítményeket és sablonokat **kedvencek** listákba mentheted, majd ezeket pár kattintással, **tömegesen** telepítheted a kiválasztott gyerekoldalakra. Megszünteti az ismétlődő keresgélést és manuális feltöltéseket, egységesíti a kiinduló „stacket”, és felgyorsítja az új site-ok bevezetését. A kedvencek listák **lokálisan** a saját Dashboardodon élnek, nem támaszkodnak külső „favorites” API-ra, így az adatvédelmi kontroll nálad marad.

## Fő funkciók és működés

### Lokális kedvencek kezelése
- Hozz létre bővítmény- és sablonbejegyzéseket egy központi, csak neked látható listában.
- Szerkesztheted a címeket, törölhetsz elemeket, és áttekintheted a lista állapotát.
- A lista nem kerül külső szolgáltatáshoz, minden a Dashboardodon marad.

### Hozzáadás URL alapján
- Elég megadnod a bővítmény vagy sablon ZIP-fájljának **nyilvánosan elérhető** URL-jét (lehet a hivatalos tárházból vagy külső, publikus tárhelyről).
- A kiegészítő automatikusan a legfrissebb elérhető csomagot húzza le és azt telepíti a céloldalakra.
- Opcionálisan nevet is adhatsz az elemnek, hogy később könnyen azonosítsd.

### Verzió-információ és kézi ellenőrzés
- A kedvencek listában láthatod az elérhető verzióinformációkat.
- Kézzel indíthatsz frissítési ellenőrzést, hogy tudd, mikor érdemes újratelepíteni vagy frissíteni a stack elemeit.

### Ikonok, rendezés, gyors kijelölés
- Ikonok és rendezhető oszlopok segítik a gyors áttekintést.
- A telepítő felületen elérhető a **Select All**, így egy mozdulattal kijelölheted az összes kedvencet.

### Natív telepítőbe integrálva
- A „Install Favorites” gomb a MainWP Plugins/Themes > Install oldalain jelenik meg.
- Innen indíthatod a kijelölt kedvencek **tömeges telepítését** a kiválasztott gyerekoldalakra.
- Ugyanazok a telepítési opciók érhetők el, mint a natív MainWP telepítésnél (például **Overwrite existing**).

## Gyors üzembe helyezés

1. A MainWP Dashboardban engedélyezd a kiegészítőt (Pro csomag szükséges).
2. Menj: Add-ons > Favorites > Add New.
3. Illeszd be a bővítmény/sablon ZIP **publikus** URL-jét, adj nevet, mentsd.
4. Ismételd, amíg összeáll a céges „alapstack”.
5. Menj: Plugins > Install Plugins vagy Themes > Install Themes > Install Favorites.
6. Válaszd ki a telepítendő kedvenceket és a cél gyerekoldalakat.
7. Indítsd a telepítést, kövesd a folyamatjelentést.

Példa egy reprodukálható alapstackre:

```
profil: "Blog alap"
bővítmények:
  - SEO
  - Gyorsítótár
  - Biztonság
  - Kapcsolati űrlap
sablon:
  - Könnyű, blogfókuszú téma
```

## Gyakorlati példák

- Ügynökségi „Blog” és „Shop” profilok: hozz létre két kedvenclistát a gyakori bővítményekkel és egy-egy alap témával. Új projekt indulásakor 2–3 perc alatt telepíted mindkettőt a megfelelő site-okra.
- Onboarding meglévő site-okra: ha több ügyfélsite-on egységesítenéd a környezetet (pl. SEO + gyorsítótár + biztonsági csomag), válaszd ki a kedvenceket és telepítsd őket tömegesen.
- Külső forrású eszközök: ha saját fejlesztésű bővítményedet publikus ZIP-ként elérhetővé teszed, felveheted a listába, és ugyanúgy telepítheted, mint a hivatalos tárházból származókat.

## Előnyök és értékajánlat

- Időmegtakarítás: nincs több keresgélés és manuális feltöltés, a telepítési lista mindig kéznél van.
- Egységesség: előre definiált stackkel csökken a hibák száma és nő a konzisztencia.
- Adatvédelem: a kedvencek lista helyben marad, nem használ központi „favorites” szolgáltatást.
- Központi karbantartás: egy helyen látod a stack verzióit, kézzel ellenőrizheted az újdonságokat.
- Rugalmasság: hivatalos tárházból és külső, publikus tárhelyekről is tudsz telepíteni.

## Célközönség

- Webes ügynökségek, amelyek több, hasonló felépítésű site-ot indítanak és gondoznak.
- Szabadúszó WordPress fejlesztők, akik standard eszközkészlettel dolgoznak.
- Belső IT/marketing csapatok, amelyek több márkaoldalt kezelnek és egységes környezetet akarnak fenntartani.
- Operáció/DevOps, akiknek a gyors, reprodukálható telepítés kritikus.

## Megfontolások és korlátok

- Az URL-nek autentikáció nélküli, nyilvános elérésűnek kell lennie, különben a letöltés/telepítés nem sikerül.
- Ha korábban csoportalapú kedvenc-telepítést használtál vagy parancssoros integrációra támaszkodtál, ellenőrizd a saját környezetedben, hogy ezek a lehetőségek elérhetők-e.
- A kiegészítő a MainWP Dashboard részeként működik, és a gyerekoldalakhoz telepített kommunikációs bővítményt használja; a használathoz Pro előfizetés szükséges. A pontos rendszerkövetelményeket mindig a saját telepítésedhez igazítsd.

## Összegzés

A MainWP Favorites Extension arra való, hogy a számodra bevált bővítmény- és sablonkészleteket **standardizáld** és **villámgyorsan** telepítsd több WordPress oldalra. URL-alapú felvétellel, natív telepítőbe ágyazott folyamattal és lokális, adatvédelmi szempontból kedvező tárolással biztosítja, hogy percek alatt, hibamentesen állítsd elő a kívánt környezetet. Ha több site-ot kezelsz, és fontos a konzisztencia, ez a kiegészítő neked készült.