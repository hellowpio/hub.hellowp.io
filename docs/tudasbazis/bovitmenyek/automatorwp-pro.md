---
title: "AutomatorWP Pro"
description: "No‑code automatizálási motor WordPresshez: triggerekből és akciókból építesz folyamatokat, a Pro csomag pedig minden prémium funkciót és integrációt egyben ad."
sidebar_label: "AutomatorWP Pro"
---

## Mi ez és milyen problémát old meg?

Az AutomatorWP egy nyílt forráskódú “automator” bővítmény, amellyel kódolás nélkül kötheted össze a WordPress‑es bővítményeidet és külső szolgáltatásaidat. Lényege: ha egy **trigger** (esemény) megtörténik, akkor fut egy vagy több **akció** (művelet). Az AutomatorWP Pro ehhez a maghoz tartozó, mindent‑egyben prémium kiegészítő: egyszerre ad hozzáférést a haladó funkciókhoz és a legtöbb prémium integrációhoz. Ezzel gyakorlatilag megszünteted a “pluginok nem beszélnek egymással” problémát.

## Hogyan működik röviden?

1. Létrehozol egy automatizmust.
2. Hozzáadsz egy vagy több triggert (pl. “vásárlás történt”, “űrlapot beküldtek”).
3. (Opcionális) Feltételeket állítasz be, hogy mikor fusson tovább.
4. Hozzáadsz egy vagy több akciót (pl. “küldj e‑mailt”, “add meg a hozzáférést”, “küldj webhookot”).
5. Ütemezheted vagy azonnal futtathatod.

Példa recept pszeudóban:
```
Trigger: WooCommerce rendelés "Befejezett"
Filter: rendelés értéke >= 30 000 Ft
Actions:
  - Várakozás: 7 nap
  - Küldj e-mailt kedvezménykóddal
  - Add hozzá a "VIP" CRM taget
```

## Fő funkciók és mit jelentenek a gyakorlatban

### Vizuális szerkesztő és futási logika
- **Több trigger és akció**: összetett folyamatokat építhetsz, ahol több feltétel teljesülése indít el több lépést.
- **Sorrendiség és darabszám**: beállíthatod, hogy triggerek meghatározott sorrendben és/vagy x alkalommal történjenek meg, mielőtt az akciók futnak.
- **Limitek**: megadhatsz globális és felhasználónkénti korlátokat (pl. egy jutalom csak egyszer járjon).

### Integrációk (200+)
Százas nagyságrendben érhetők el triggerek/akciók népszerű bővítményekhez és külső platformokhoz. Sok integráció két szintre oszlik: az alap elemek az ingyenes magban, a haladó triggerek/akciók a **Pro** csomagban találhatók.

### Automatizmus‑típusok
- **Logged‑in**: bejelentkezett felhasználók eseményeire reagál.
- **Anonymous**: vendég eseményekből indít akciókat, akár új felhasználó létrehozásával (pl. űrlap → felhasználó → kurzushozadás).
- **All Users**: manuális vagy ütemezett tömegműveletek felhasználócsoportokon, biztonságos “loopolással” és szűréssel.
- **Posts**: beépített WordPress poszt‑triggerek és akciók (létrehozás, frissítés, törlés, megtekintés, státuszváltás).
- **Import File (Pro)**: CSV/Sheets adatsoron végighaladó akciók időzítéssel (pl. listából tömeges CRM‑felvétel).

### Ütemezés és késleltetés (Pro)
A **Schedule Actions** bármely akciót késleltethet (másodperctől évekig) vagy fix dátumra ütemezhet. Minden akció külön ütemezhető, a háttérfutást a WordPress ütemezői végzik.

### Webhooks és REST (Pro)
Kétirányú adatkapcsolatot építhetsz: fogadhatsz webhookokat külső rendszerektől, és küldhetsz is adatot bármely URL‑re. Így könnyen kötöd össze a WordPressedet automatizációs szolgáltatásokkal vagy más weboldalakkal.

### Feltételek (Filters) és dinamikus adatok (Tags)
- **Filters**: bármely triggerhez/akcióhoz tetszőleges feltételt adhatsz (pl. szerepkör, meta, űrlapmező‑érték).
- **Tags**: a triggerektől kapott adatokat továbbviheted az akciókba (felhasználónév, e‑mail, rendelésösszeg, dátum stb.).
- **Function tags (Pro)**: bővített eszköztár formázáshoz és generáláshoz (Formatter/Generator/Calculator), például:
  - szöveg‑ és számformázás,
  - véletlen string vagy e‑mail generálása,
  - sorszám/azonosító, hash, nonce előállítása.

### Láncolás és tömegesítés
- **Run Now**: egy automatizmus indíthat egy másikat (pl. esemény → All Users automatizmus lefuttatása).
- **All Users / Import File**: nagy adatállományok biztonságos, ütemezett feldolgozása.

### Átláthatóság és üzemeltetés
- **Részletes naplók**: trigger, akció és ütemezett futás szinten követhetsz mindent, ami a hibakeresést felgyorsítja.
- **Import/Export URL‑en**: receptek gyors megosztása és migrálása fájlkezelés nélkül.

## Gyakorlati példák

- **E‑kereskedelem**: vásárlás után 7 nappal automatikus e‑mail kedvezménykóddal; értékelés után “VIP” címkézés és hírlevéllistára helyezés.
- **Oktatás (LMS)**: videó megtekintése + teszt teljesítése → kurzushozzáférés, jelvény, köszönő e‑mail.
- **Közösség/memberség**: csoporthoz csatlakozás és első fórumbejegyzés → rang/jogosultság, CRM szinkron.
- **Marketing/CRM**: űrlapbeküldés → címkézés, lista‑felvétel és webhook küldés külső automatizáció felé.
- **Admin**: havi karbantartás All Users‑szel: inaktív felhasználók megjelölése, értesítés, riport export.

## Előnyök és értékajánlat

- **Kódolás nélkül** építesz összetett integrációkat.
- **Időzítés és utánkövetés**: nem felejtesz el emlékeztetőket, upsell üzeneteket, lejárati figyelmeztetéseket.
- **Költségcsökkentés**: kevesebb egyedi fejlesztés, gyorsabb implementáció.
- **Skálázhatóság**: tömeges, ütemezett feldolgozás nagy felhasználói/adatlistákon.
- **Átlátható működés**: részletes logokkal gyors a hibakeresés.

## Licencelés és beszerzés

- Az **alap plugin** ingyenes, és kötelező a Pro használatához.
- Az **AutomatorWP Pro** nem különálló termék, hanem hozzáférési csomagként érhető el, amely egyetlen licenccel ad hozzáférést a prémium funkciókhoz és számos Pro integrációhoz.
- Jellemző csomagok: Personal (2 webhely), Professional (10 webhely), All Access (korlátlan). Elérhetők többéves opciók kedvezménnyel.
- A Pro telepítése egyetlen kiegészítővel és “master” licenckulccsal történik; a frissítések a Pro integrációkat is lefedik.

## Célközönség

- **Webáruház‑tulajdonosok**: vásárlás utáni folyamatok, upsell, hűségprogram.
- **Oktatási portálok**: beiratkozás, haladás‑alapú jutalmazás, kommunikáció.
- **Közösségi és tagsági oldalak**: szerepkörök, jogosultságok, gamification.
- **Marketingesek és ügynökségek**: űrlap → CRM/hírlevél → külső automatizáció.
- **Rendszergazdák/üzemeltetők**: ütemezett karbantartási feladatok, adat‑batching.

## Bevezetési tippek

- Állíts fel teszt/staging környezetet és ellenőrizd az ütemezés működését (WP Cron/Action Scheduler).
- Kapcsold be a naplózást, és készíts teszt eseteket minden kulcslépésre.
- Kezdd egyszerű receptekkel, majd bővítsd feltételekkel és ütemezéssel.
- Tömegműveleteknél (All Users/Import File) mindig használj szűrőket és kisebb batch méreteket az első futásoknál.

Megjegyzés: Az AutomatorWP‑t a GamiPress csapata fejleszti; a projekt alapítói Ruben Garcia és Irene Berna. A Pro csomag választásával egy helyen kapod a haladó ütemezést, webhookokat, bővített “function tageket”, az import alapú automatizmusokat és a legtöbb prémium integrációt.