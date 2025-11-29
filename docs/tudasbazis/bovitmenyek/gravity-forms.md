---
title: "Gravity Forms"
description: "Prémium WordPress űrlap‑ és adatrekord‑kezelő, amellyel kódolás nélkül építhetsz összetett űrlapokat, fogadhatsz fizetéseket és automatizálhatod a folyamataidat."
sidebar_label: "Gravity Forms"
---

## Mi ez és milyen problémát old meg?

A Gravity Forms egy prémium, GPL licencű WordPress bővítmény összetett online űrlapokhoz. Segítségével kódolás nélkül tudsz adatot gyűjteni, fizetéseket fogadni, felhasználókat regisztrálni, tartalmat beküldetni, és az adatokat azonnal továbbítani a rendszered felé. Célja, hogy az űrlap‑alapú üzleti folyamataid gyorsan, megbízhatóan és átláthatóan működjenek.

## Hogyan működik dióhéjban?

- Az adminban drag‑and‑drop űrlapépítővel létrehozod az űrlapot.
- Blokkal vagy shortcoddal beágyazod egy oldalra.
- A beküldések az **Entries** felületen jelennek meg, szűrhetően és exportálhatóan.
- **Értesítésekkel** e‑mailt küldesz magadnak/ügyfélnek; **visszaigazolással** üzenetet vagy átirányítást adsz.
- **Add‑onokkal** fizetéseket, integrációkat, felméréseket és automatizációt kapcsolsz.

## Fő funkciók részletesen

### Űrlapszerkesztő és megjelenés
- **Vizuális építő** többoszlopos elrendezéssel, **többoldalas** űrlapokkal és előnézettel.
- **Reszponzív**, **WCAG 2.1 AA** szemléletű kimenet.
- **Mentés és folytatás**: a felhasználó félbehagyhatja, később befejezheti.

### Mezők, logika, számítások
- Gazdag mezőkészlet (szöveg, választó, dátum, fájlfeltöltés, fizetési mezők).
- **Feltételes logika**: mezők/szakaszok/oldalak megjelenítése a válaszok alapján.
- **Számítások**: összeg, szállítás, adó, egyedi képletek.

### Adatkezelés az adminban
- **Entries**: listázás, szűrés, tömegműveletek, megjegyzések, státuszok.
- **Export CSV‑be**, riportkészítéshez.
- **Partial Entries**: elhagyott űrlapok részleges mentése a konverzió javítására.
- **Személyes adatok** exportálása/törlése és **megőrzési házirend** a megfeleléshez.

### Értesítések és visszaigazolások
- **E‑mail értesítések** dinamikus mezőbeillesztéssel, csatolmányokkal, feltételes küldéssel.
- **Visszaigazolás**: köszönő üzenet, egyedi oldal megjelenítése vagy átirányítás.

### Spamszűrés és biztonság
- **Honeypot**, beépített CAPTCHA integrációk (pl. reCAPTCHA, Turnstile), **Akismet**.
- Opcionális **Moderation** kiegészítő: toxicitásszűrés és tiltólisták.
- Fájlfeltöltésnél jogosultság‑ és típuskorlátozás, biztonsági ajánlások.

### Fizetések és e‑kereskedelem
- **Stripe** és **PayPal** add‑onok: egyszeri díj, **előfizetés**, engedélyezés‑foglalás, későbbi terhelés.
- **Kuponok**, több pénznem, lokalizáció, kifizetési naplózás.

### Tartalom‑ és felhasználókezelés
- **Advanced Post Creation**: frontenden beküldött tartalomból bejegyzések/CPT‑k létrehozása, taxonómiák és médiák kezelése.
- **User Registration**: felhasználók regisztrációja, aktiválása, szerepkörök, közösségi integrációk.

### Integrációk és ökoszisztéma
- Hivatalos add‑onok e‑mail marketinghez, CRM‑ekhez, analitikához.
- **Webhooks**, **Zapier**, és kiterjedt külső ökoszisztéma fejlett automatizációkhoz.

### Speciális űrlaptípus: Conversational Forms
- Teljesképernyős, kérdésenkénti, beszélgetéses élmény, amely növeli a kitöltési arányt – akár fizetési mezőkkel is.

## Gyakorlati példák

1. Ajánlatkérés → CRM
   - Mezők: név, e‑mail, szolgáltatás, fájlfeltöltés.
   - Feltételes mezők a szolgáltatás alapján.
   - Értesítés az értékesítőnek; visszaigazolás az ügyfélnek.
   - Webhook a CRM felé; Partial Entries az elhagyások mentésére.

2. Előfizetés Stripe‑pal
   - Termék + előfizetés mező, kuponkód.
   - Kötelező jelölő az ÁSZF‑hez.
   - Sikeres fizetés után átirányítás a köszönő oldalra; kudarc esetén hibaüzenet.

3. Frontend cikkbeküldés
   - Cím, kivonat, tartalom, kiemelt kép, kategória.
   - Advanced Post Creation feed: a mezők térképezése, „várólista” státusz.
   - Moderation kiegészítő a nemkívánatos tartalom szűrésére.

## Előnyök és értékajánlat

- **Időmegtakarítás**: komplex űrlapok kódolás nélkül, percek alatt.
- **Kevesebb lemorzsolódás**: többoldalas űrlap, Mentés és folytatás, Conversational UX.
- **Bevétel‑növelés**: fizetések, előfizetések, kuponok, naplózás.
- **Adatáramlás**: azonnali integrációk CRM‑be, táblázatba, automatizációkba.
- **Megfelelés és kontroll**: adatmegőrzés, export/erase, biztonsági és spamszűrési opciók.

## Kinek ajánlott?

- **Ügynökségeknek**: skálázható űrlapstack ügyfeleknek, széles add‑on választék.
- **KKV‑knak és e‑kereskedőknek**: ajánlatkérés, rendelés, előfizetés egy rendszerben.
- **Nonprofitoknak és oktatásnak**: adomány, jelentkezés, pályázat, felmérés.
- **Közösségi/tagsági oldalaknak**: regisztráció, aktiválás, jogosultságok.
- **Fejlesztőknek/devopsnak**: REST API, WP‑CLI, webhookok, testreszabható workflow.

## Fejlesztőknek és üzemeltetőknek

- **REST API v2**: formák, beküldések lekérése/létrehozása, validálás, fájlfeltöltés.
- **WP‑CLI**: űrlapok, mezők, értesítések, entries kezelése parancssorból.
- **Add‑On Framework**: saját integrációk, hookok és filterek.

Példák:

```bash
# Beküldések exportja CLI-ből
wp gf entry export --form-id=12 --search="status:is:active" --filename=export.csv
```

```bash
# Új űrlap létrehozása CLI-ből
wp gf form create "Kapcsolat" --description="Kapcsolati űrlap"
```

```bash
# Egyszerű beküldés REST API-n (példa)
curl -X POST \
  -H "Content-Type: application/json" \
  -u consumer_key:consumer_secret \
  -d '{"input_1":"Teszt Név","input_2":"teszt@example.com"}' \
  https://sajat-oldalad.tld/wp-json/gf/v2/forms/5/submissions
```

## Biztonság és megfelelés

- **Spamszűrés**: honeypot, CAPTCHA, Akismet, Moderation.
- **Fájlok**: típus‑ és méretkorlát, jogosultságkezelés.
- **Adatvédelem**: személyes adatok export/erase, megőrzési szabályok, IP‑tárolás tiltása.
- Üzemeltetési javaslat: mindig az adminon belüli frissítési csatornát használd, és maradj naprakész; korábbi ellátási lánc‑incidensek elkerülésére ez a legbiztonságosabb.

## Licencelés röviden

Éves előfizetés több csomagban:
- **Basic**: alap űrlapkészítés és népszerű marketing add‑onok.
- **Pro**: fizetések és automatizációk.
- **Elite**: minden hivatalos add‑on, korlátlan telepítés, prioritásos támogatás, multisite.
Nonprofit kedvezmény elérhető.

--- 

Összefoglalva: a Gravity Forms egy érett, kiterjeszthető űrlapplatform, amellyel a legtöbb űrlapos üzleti igényed — lead gyűjtés, fizetés, felmérés, tagság, tartalombeküldés, workflow — egyetlen, WordPress‑natív megoldásban lefedhető. Ha gyorsan, biztonságosan és integráltan akarsz dolgozni, ez a bővítmény neked szól.