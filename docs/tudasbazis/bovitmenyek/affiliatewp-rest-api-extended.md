---
title: "AffiliateWP - REST API Extended"
description: "Pro kiegészítő, amely a core AffiliateWP REST API-t teljes CRUD-funkcionalitással bővíti (affiliates, referrals, visits, payouts, creatives), egységes autentikációval és granuláris engedélyezéssel."
sidebar_label: "AffiliateWP - REST API Extended"
---

## Röviden

Az AffiliateWP – REST API Extended egy Pro kiegészítő, amellyel a korábban csak olvasható AffiliateWP REST API teljes értékű CRUD-képességet kap: az affiliates, referrals, visits, payouts és creatives objektumok nem csak lekérdezhetők, hanem létrehozhatók, módosíthatók és törölhetők is.

## Mit old meg?

Alapból az AffiliateWP REST API read-only. Ha külső rendszerekből akarsz partnert létrehozni, referralokat rögzíteni vagy kifizetéseket kezelni, egyedi admin felületet vagy közvetlen adatbázis-műveleteket kellene írnod. A REST API Extended ezt szünteti meg: egységes, dokumentált, hitelesítéssel védett REST végpontokon keresztül mindent automatizálhatsz és integrálhatsz.

## Fő funkciók és működés

- **Teljes CRUD az affiliate adatokhoz**
  - **Affiliates**: partnerfiókok programozott létrehozása és módosítása (pl. státusz, kifizetési e‑mail, jutalék beállítások).
  - **Referrals**: jutalékok/konverziók rögzítése, státuszváltás, törlés (pl. rendelés feldolgozásakor).
  - **Visits**: kattintások/látogatások naplózása külső forrásból (pl. nem‑WordPress webshopból).
  - **Payouts**: kifizetések létrehozása és menedzselése (pl. zárt könyvelési folyamatból).
  - **Creatives**: kreatívok (bannerek, szöveglinkek) kezelése az API-n keresztül.

- **Útvonalak és metódusok**
  - Gyűjtemény: `/wp-json/affwp/v1/{object}` – GET listáz, POST/PUT létrehoz.
  - Erőforrás: `/wp-json/affwp/v1/{object}/{id}` – GET lekér, PATCH frissít, DELETE töröl.
  - **OPTIONS**: felfedi a séma- és validációs információkat (kötelező mezők, típusok, engedélyezett metódusok).

- **Autentikáció és jogosultság**
  - **Basic Auth API-kulcsokkal**: a Public Key a “felhasználó”, a Token a “jelszó”.
  - A kulcsok WordPress jogosultságokhoz kötöttek; csak azt engedik, amit a kulcshoz tartozó szerepkör is tud.

- **Konfiguráció**
  - Aktiválás után az adminban az AffiliateWP → Settings → REST API lapon külön-külön engedélyezheted az objektumtípusok végpontjait (affiliates, referrals, visits, payouts, creatives).
  - API-kulcsok: AffiliateWP → Tools → API Keys alatt generálhatók.

## Gyakorlati példák (Getting started)

- Autentikáció minta (cURL):
```
curl -u PUBLIC_KEY:TOKEN https://sajatoldalad.hu/wp-json/affwp/v1/affiliates
```

- Új affiliate létrehozása:
```
curl -X POST -u PUBLIC_KEY:TOKEN \
  -H "Content-Type: application/json" \
  -d '{
    "user_id": 123,
    "status": "active",
    "payment_email": "partner@example.com"
  }' \
  https://sajatoldalad.hu/wp-json/affwp/v1/affiliates
```

- Referral rögzítése:
```
curl -X POST -u PUBLIC_KEY:TOKEN \
  -H "Content-Type: application/json" \
  -d '{
    "affiliate_id": 45,
    "amount": "29.00",
    "reference": "ORDER-10045",
    "context": "checkout",
    "status": "pending"
  }' \
  https://sajatoldalad.hu/wp-json/affwp/v1/referrals
```

- Erőforrás frissítése (PATCH) és törlése:
```
# Referral státuszváltás
curl -X PATCH -u PUBLIC_KEY:TOKEN \
  -H "Content-Type: application/json" \
  -d '{ "status": "paid" }' \
  https://sajatoldalad.hu/wp-json/affwp/v1/referrals/987

# Törlés
curl -X DELETE -u PUBLIC_KEY:TOKEN \
  https://sajatoldalad.hu/wp-json/affwp/v1/referrals/987
```

- Kötelező mezők felfedezése (OPTIONS):
```
curl -X OPTIONS -u PUBLIC_KEY:TOKEN \
  https://sajatoldalad.hu/wp-json/affwp/v1/referrals
```

Tipp: az OPTIONS válasz pontosan megmutatja, milyen mezők szükségesek az adott POST/PUT/PATCH híváshoz, így gyorsabban és hibamentesen fejleszthetsz.

## Tipikus használati esetek

- **Külső rendszerekből történő követés**: nem‑WordPress webshop a vásárlásnál referral-t hoz létre.
- **Két WordPress oldal szinkronja**: ha az A oldalon jóváhagysz egy affiliate-et, az API-n keresztül automatikusan létrejön a B oldalon is.
- **ERP/CRM integráció**: ügyfélfázis alapján referral státuszok frissítése vagy kifizetések indítása.
- **Zapier automatizáció**: űrlap beküldésekor affiliate létrehozása, vagy Google Sheets sorból payout készítése. (Az adott “Action”-höz szükséges végpontokat engedélyezned kell.)

## Előnyök és értékajánlat

- **Idő- és költségmegtakarítás**: nincs szükség egyedi admin felületekre vagy közvetlen adatbázis-műveletekre.
- **Headless és több-rendszeres működés**: az affiliate programod teljesen irányítható külső alkalmazásokból.
- **Biztonságos és következetes**: egységes, jogosultságokkal védett API az egész affiliate adatmodellhez.
- **Gyors fejlesztés**: OPTIONS, sémák és ismerős REST minták segítik a gyors implementációt.

## Kinek ajánlott?

- **Fejlesztők és integrátorok**: akik saját backendből, szolgáltatásból vagy middleware-ből akarják vezérelni az affiliate folyamatokat.
- **Üzemeltetők és growth csapatok**: akik automatizálni szeretnék az affiliate onboardingot, a referral-kezelést és a kifizetéseket.
- **No‑code/low‑code felhasználók**: akik Zapierrel vagy hasonló eszközökkel építenek automatizmusokat.

## Követelmények és telepítés

1. Szükséged van aktív AffiliateWP core telepítésre és érvényes Pro licencre.
2. Telepítsd és aktiváld a REST API Extended bővítményt.
3. Menj az AffiliateWP → Settings → REST API oldalra, és pipáld ki a használni kívánt objektumtípusok végpontjait.
4. Generálj API-kulcsot az AffiliateWP → Tools → API Keys alatt (Public Key + Token).
5. Használd a kulcsokat Basic Auth-tal a hívásokhoz.

## Jó gyakorlatok és biztonság

- **Mindig HTTPS**: a Basic Auth csak titkosított csatornán biztonságos.
- **Legkisebb jogosultság elve**: csak a szükséges végpontokat engedélyezd, és a kulcsokhoz minimális szükséges szerepkört adj.
- **Kulcsrotáció és naplózás**: rendszeresen cseréld a Tokeneket, és figyeld a hívási naplókat.
- **OPTIONS használata**: kódolás előtt derítsd ki a validálási szabályokat és kötelező mezőket.

Ezzel a kiegészítővel teljes kontrollt kapsz az affiliate programod fölött API-n keresztül: gyorsabban integrálhatsz, kevesebbet hibázol, és minden folyamatot automatizálhatsz.