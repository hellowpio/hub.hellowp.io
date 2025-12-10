---
title: "WP All Import - Gravity Forms Add-On"
description: "WP All Import kiegészítő, amellyel CSV/Excel/XML fájlokból közvetlenül létező Gravity Forms űrlapokba importálhatsz bejegyzéseket, rugalmas mezőtérképezéssel és ütemezéssel."
sidebar_label: "WP All Import - Gravity Forms Add-On"
---

## Mi ez és milyen problémát old meg?

A WP All Import – Gravity Forms Add‑On egy kiegészítő, amellyel **CSV, Excel (XLS/XLSX) vagy XML** fájlokból közvetlenül **létező Gravity Forms űrlapokba** tudsz bejegyzéseket (entries) importálni. Nem űrlapokat hoz létre, hanem az űrlapokhoz tartozó **bejegyzésadatokat** tölti be. Akkor hasznos, ha manuális rögzítés helyett tömegesen szeretnél adatot betölteni, rendszerek közötti migrációt végzel, vagy rendszeres frissítéseket automatizálnál. A megoldás a WP All Import ismerős **drag‑and‑drop** felületét használja, termelési környezetre érett, és a Soflyy által fejlesztett termékvonal része.

## Fő funkciók, érthetően

- **Drag‑and‑drop mezőtérképezés:** A forrásfájl oszlopait egyszerűen a Gravity Forms célmezőire húzhatod. Így bármilyen forrásstruktúrát a cél űrlap mezőire igazíthatsz.
- **Teljes GF mezőtípus‑támogatás:** Kezeli a core Gravity Forms mezőket és a bejegyzésekhez tartozó belső adatokat is (pl. választások, számok, dátumok, összetett mezők).
- **Entry meta és jegyzetek:** Importálhatsz **Entry Notes** megjegyzéseket, valamint metaadatokat, mint a létrehozó, létrehozás dátuma, olvasottság és státusz. Így a jelentések és munkafolyamatok megőrzik kontextusukat.
- **Adattranszformáció inline PHP‑val:** A betöltés előtt átalakíthatod az értékeket (kódok normalizálása, igen/nem konverzió, formázás, feltételes logika).
- **Rekordszűrés:** Csak a feltételeknek megfelelő rekordokat importálja. Így kiszűrheted a hiányos vagy irreleváns sorokat.
- **Ütemezés:** Használhatsz szerveroldali cron‑t vagy a beépített automatikus ütemezőt ismétlődő importokhoz.
- **Forrásformátumok:** **CSV, Excel és XML** támogatás, rugalmas elválasztó‑ és XML‑node beállításokkal.
- **Egyedi azonosító (Unique Identifier):** Automatikusan felismerhető és beállítható, hogy ismételt futáskor új rekord jöjjön létre vagy a meglévő frissüljön.
- **Haladó folyamat‑beállítások:** A WP All Import teljes import‑motorja rendelkezésre áll (feldolgozás, teljesítmény, naplózás, cron‑opciók).

## Hogyan működik? – Lépésről lépésre

1. **Új import:** Indíts új importot, töltsd fel a forrásfájlt, majd célként válaszd a **Gravity Forms Entries** opciót és jelöld ki a cél űrlapot.
2. **Forrás áttekintése:** Állítsd be a delimitert (CSV) vagy az XML csomópontot; adj meg szűrőket, ha csak bizonyos rekordokat szeretnél.
3. **Mezők leképezése:** A drag‑and‑drop nézetben párosítsd a forrásmezőket a GF mezőkhöz. Töltsd ki az **Entry Notes** és az **Other Entry Options** (pl. létrehozási dátum, státusz, olvasottság) mezőket.
4. **Beállítások és futtatás:** Állítsd be a **Unique Identifier** értéket (auto‑detect is elérhető), döntsd el az ismételt futtatás viselkedését (új létrehozása vs. frissítés), majd indítsd az importot. Ütemezett futásokhoz aktiváld a cron‑t vagy az automatikus ütemezőt.

## Gyakorlati példák

- **Migráció oldalról oldalra:** Exportáld a forrásoldal GF bejegyzéseit, majd importáld a céloldalon. A csomagolt beállításokkal a mezőtérképezés és az azonosító szabályok automatikusan betöltődnek, így minimális a manuális konfiguráció.
- **Tömeges módosítás (bulk edit):** Exportálj bejegyzéseket, szerkeszd táblázatban (pl. státusz, összeg, jelölők), majd importáld vissza. A Unique Identifier alapján a bővítmény frissíti a meglévőket.
- **Rendszeres adatbetöltés külső rendszerből:** Egy partner naponta feltölt egy CSV‑t. Beállítasz egy szűrőt, amely csak a “paid” státuszú rekordokat engedi, és napi ütemezéssel automatikusan beolvastatod.

### Példa inline PHP átalakításra

```
<?php
// "igen/yes/true/1" -> 1, minden más -> 0
$raw = {status[1]};
return in_array(strtolower(trim($raw)), ['igen','yes','true','1']) ? '1' : '0';
```

## Előnyök és értékajánlat

- **Időmegtakarítás:** Tömeges rögzítés helyett automatizált importok.
- **Kevesebb hiba:** Konzisztens mezőtérképezés és frissítési szabályok.
- **Rugalmasság:** Bármilyen forrásstruktúrához igazítható, inline PHP‑val tisztítható.
- **Skálázhatóság:** Ütemezett, ismétlődő futások nagy adatvolumenhez.
- **Integritás:** Metaadatok és jegyzetek megőrzése a GF riportokhoz és folyamatokhoz.

## Célközönség

- **Ügynökségek és fejlesztők:** Migrációk, staging‑production szinkronok, automatizált betöltések.
- **Marketing és ügyfélszolgálat:** Kampány‑leadek és ügyfélbejegyzések tömeges frissítése.
- **Adatgazdák/üzemeltetők:** Rendszeres integráció külső forrásokkal, minőségbiztosított adatáramlás.

## Követelmények és csomagolás

- Szükséges: **Gravity Forms**, **WP All Import**, valamint a **Gravity Forms Add‑On**.
- A Gravity Forms Add‑On az **Import Pro** csomag része.
- Kompatibilitás: a fejlesztőcsapat a Gravity Forms készítőjével együttműködve tartja naprakészen a mezőtámogatást.
- Fejlesztő: **Soflyy**.

## Korlátok és megjegyzések

- A bővítmény **bejegyzéseket** importál; nem hoz létre és nem módosít **űrlapokat**. Ha űrlapstruktúrát kell átvinni, azt a Gravity Forms saját import/export eszközeivel tedd meg.

## Tippek induláshoz

- Kezdj **tesztimporttal** néhány rekorddal, ellenőrizd a mezőtérképezést és a **Unique Identifier** beállítást.
- Ismétlődő importnál határozd meg világosan a **frissítési szabályokat** (csak hozzáadás, csak frissítés, hozzáadás és frissítés).
- Használj **szűrőket** a célzott betöltésre (pl. csak érvényes e‑mail, összeg > 0).
- Ütemezéshez választhatsz szerveroldali **cron**‑t vagy a beépített **automatikus ütemezőt**.

Összefoglalva: ha megbízható, rugalmas és skálázható módon szeretnél Gravity Forms bejegyzéseket tömegesen importálni, ez a kiegészítő adja a legkevesebb súrlódással járó, professzionális megoldást.