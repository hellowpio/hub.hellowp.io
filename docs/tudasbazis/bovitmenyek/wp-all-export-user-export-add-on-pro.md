---
title: "WP All Export - User Export Add-On Pro"
description: "Hivatalos WP All Export kiegészítő WordPress felhasználók rugalmas, ütemezhető exportálásához CSV/Excel/Google Sheets/XML formátumokba, teljes meta támogatással."
sidebar_label: "WP All Export - User Export Add-On Pro"
---

## Mi ez és milyen problémát old meg?

A WP All Export – User Export Add‑On egy hivatalos kiegészítő, amivel a WordPress felhasználókat exportálhatod testreszabott táblázatokba és XML‑ekbe. 2024. május 15‑től a felhasználó‑export külön add‑on, vagyis új és meglévő user exportok futtatásához ezt külön kell telepítened. A bővítmény megoldja a WordPress alap export korlátait: nemcsak az alap user mezőket, hanem WooCommerce és más pluginek egyedi meta adatait is kényelmesen, saját oszlopkiosztással, szűréssel és ütemezéssel viheted ki.

## Hogyan működik röviden?

- Új export létrehozása: Users típus
- Mezők kijelölése drag & drop módszerrel
- Oszlopok átnevezése, sorrend, kombinált mezők
- Szűrők beállítása (szerep, státusz, bármely meta)
- Export futtatása → CSV/Excel/Google Sheets/XML
- Opcionálisan ütemezés és automatizált továbbítás
- Módosítás után visszaimport WP All Importtal (Bundle sablonnal)

```text
All Export → New Export → Users
  → Drag & Drop mezők
  → Filters (pl. role = customer, last_login > 30 nap)
  → Run Export → Letöltés / Ütemezés
  → (Opció) Bundle → WP All Import visszatöltés
```

## Fő funkciók, érthetően

- Formátumok: **CSV, Excel, Google Sheets, XML**
  - Google Sheets‑be közvetlenül küldheted a frissített adatokat.
  - XML‑nél vizuálisan vagy kézzel építhetsz akár teljesen egyedi sémát.

- Teljes adatmező‑kör:
  - **Alap WordPress user mezők** (név, e‑mail, regisztráció dátuma, szerep stb.).
  - **WooCommerce vevőadatok** (számlázási/szállítási címek, rendeléshez kötődő meta).
  - **Bármely plugin által hozzáadott user meta**, automatikus felismeréssel.

- **Oszlop‑tervező**:
  - Mezők átnevezése, sorrendezése, új oszlopok létrehozása.
  - Mezők kombinálása (pl. Teljes név = keresztnév + vezetéknév).
  - Fejlesztőként saját **PHP‑logikát** is beépíthetsz az értékek átalakításához.

- **Szűrés és célzás**:
  - Szerep, státusz, dátum, vagy bármely meta alapján.
  - Összetett feltételek (és/vagy) a pontos célcsoport kiválasztásához.

- **Ütemezés és automatizálás**:
  - Exportok időzítése saját cron‑nal vagy szolgáltatói ütemezéssel.
  - **Zapier integráció**: több mint ezer külső alkalmazás felé továbbíthatsz adatokat emberi beavatkozás nélkül.

- **Migráció és visszaimportálás**:
  - Export → Excelben szerkesztés → **WP All Import** segítségével visszatöltés.
  - **Bundle** letöltés: az export mellé kapsz egy kész import sablont.

- **Nagy adatmennyiség, stabilitás**:
  - Háttérfeldolgozás és ütemezés a nagy userbázisok megbízható kezeléséhez.

- **Biztonság**:
  - **Hash‑elt jelszavak** exportálása és visszaimportja: migrációkor nem kell tömeges jelszó‑resetet kérned.

- **Kompatibilitás**:
  - **WooCommerce** meta mezők automatikus felismerése.
  - **WPML** támogatás többnyelvű környezetben.
  - **Zapier** csatlakozás CRM‑ekhez, hírlevélküldőkhöz, táblázatokhoz és sok más eszközhöz.

Megjegyzés: az add‑on a WP All Export funkcióit bővíti; a licencelés és csomagok idővel változhatnak, ezért mindig az aktuális feltételek érvényesek.

## Gyakorlati példák

- CRM szinkron:
  - Hetente exportálod a „customer” szerepű felhasználókat, a fontos mezőket (e‑mail, teljes név, ország, utolsó rendelés összege) saját oszlopokba rendezve, majd Zapieren át a CRM‑be küldöd.

- Hírlevél szegmentálás:
  - Szűrő: feliratkozott = igen, utolsó aktivitás < 90 nap. Az exportot Excelbe küldöd, és címkéket (pl. „VIP”, „Inaktív”) generálsz kombinált oszlopokkal.

- WooCommerce riport:
  - Országonkénti vevőlista és összes költés: billing_country + total_spent alapján kimutatás, Google Sheets‑be időzítve.

- Teljes site migráció jelszavakkal:
  - Minden user exportálása hash‑elt jelszavakkal, Bundle letöltés, majd az új oldalon WP All Importtal visszatöltöd – a felhasználók ugyanazzal a jelszóval tudnak belépni.

- Egyedi XML partnernek:
  - A partner rendszere egyedi XML sémát kér. Az XML‑építőben pontosan olyan elemeket és hierarchiát hozol létre, amilyet ők várnak.

## Előnyök és értékajánlat

- **Időmegtakarítás**: nincs több kézi adattisztítás, oszlop‑másolgatás.
- **Rugalmasság**: bármilyen mezőt, bármilyen elrendezésben exportálhatsz.
- **Automatizálás**: ütemezett export + Zapier = önjáró adatfolyamok.
- **Kevesebb hiba**: vizuális oszlop‑tervező és újrafuttatható sablonok.
- **Skálázhatóság**: nagy site‑okon is stabil feldolgozás.
- **Fájdalommentes migráció**: jelszavak megőrzése, Bundle‑alapú visszatöltés.

## Kinek ajánlott?

- **Webshopoknak és e‑kereskedelmi csapatoknak**: WooCommerce vevőadatok riportjai, szegmentálás, kampányok előkészítése.
- **Marketing/CRM szakembereknek**: folyamatos, tiszta adatáramlás hírlevélrendszerekbe és CRM‑ekbe.
- **Ügynökségeknek és fejlesztőknek**: migrációk, staging→live szinkron, egyedi XML követelmények kiszolgálása.
- **Nagyvállalati és többnyelvű oldalaknak**: ütemezett, megbízható exportok WPML és komplex meta környezetben.
- **Rendszergazdáknak/adatgazdáknak**: audit, archiválás, rendszeres mentések strukturált formátumban.

Ha felhasználóadatokat szeretnél profi módon kinyerni, alakítani és automatizáltan továbbítani, a User Export Add‑On pontosan erre való: egyszerre rugalmas, skálázható és visszaimportálással is kerek egészet alkot.