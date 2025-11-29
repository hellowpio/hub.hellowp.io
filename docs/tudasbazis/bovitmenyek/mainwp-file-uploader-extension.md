---
title: "MainWP File Uploader Extension"
description: "Pro kiegészítő a MainWP-hez: egyetlen Dashboardból tölthetsz fel fájlokat tömegesen több Child Site-ra, célkönyvtár-megadással, felülírás-kezeléssel és részletes visszajelzéssel."
sidebar_label: "MainWP File Uploader Extension"
---

## Mi ez és milyen problémát old meg?

A MainWP File Uploader Extension egy Pro kiegészítő, amellyel a MainWP Dashboardból egyszerre több WordPress gyerekoldalra (Child Site) tölthetsz fel fájlokat – FTP, SFTP vagy tárhelyes belépések nélkül. Ha ügynökségként vagy több honlapot kezelő adminisztrátorként rendszeresen kell fájlokat terítened (például ZIP-eket, statikus állományokat, konfigurációt), ez az eszköz nagyságrendekkel csökkenti az idő- és hibaterhet.

## Hogyan működik röviden?

- A MainWP Dashboardon kiválasztod a céloldalakat (akár kliens szerinti csoportosítással).
- Beállítod a célkönyvtárat (a bővítmény létrehozza, ha nem létezik).
- Bedobod a fájlokat drag & drop-pal, vagy többfájlos választással.
- Elindítod a feltöltést, és valós idejű állapotjelzést kapsz site-onként és fájlonként.

## Fő funkciók és mit jelentenek a gyakorlatban

- Tömeges feltöltés több webhelyre
  - Egyszerre több fájlt küldhetsz több kijelölt Child Site-ra. Ugyanazt a fájlcsomagot egy kattintással eljuttatod az összes kiválasztott oldalra.
- Célkönyvtár megadása és automatikus létrehozása
  - Szabadon adsz meg elérési utat. Ha a mappa nem létezik, automatikusan létrejön, így nem kell előkészítő lépésekkel bajlódnod.
- Drag & drop és többfájlos kiválasztás
  - Fogd‑és‑vidd feltöltés, több fájl egyidejű kiválasztása, kényelmes UI-val.
- Felülírás-kezelés
  - Azonos név és azonos mappa esetén a meglévő fájl felülíródik. Így biztosíthatod a konzisztens verziót minden oldalon.
- Széles fájltípus-támogatás
  - Tipikusan használható: PHP, CSS, JS, ZIP, PDF, DOC/DOCX, JPG/PNG, MP3/MP4 és sok más. A tiltott típusok (pl. .htaccess) védelmi okból blokkoltak.
- Egyedi fájltípusok engedélyezése
  - Szűrővel bővítheted az engedélyezett kiterjesztések listáját (például JSON). Példa alább.
- Kliens szerinti site-szűrés
  - Ha a MainWP-ben kliensekkel csoportosítod a site-okat, gyorsan célozhatsz meghatározott ügyfélcsoportokra.
- Folyamat-visszajelzés
  - Progress bar és állapotkártyák jelzik, mi hova töltődik, mi sikeres és mi igényel figyelmet.
- WP-CLI támogatás
  - Automatizálhatod a terítést parancssorban vagy CI/CD folyamatokban.
- MainWP integráció, Pro licenc
  - A MainWP Dashboard Add-on menüjében használod; a Child Site-okhoz a MainWP Child bővítményen keresztül kapcsolódik.

## Gyakorlati példák

- Plugin vagy téma ZIP terítése több oldalra
  - Feltöltöd a ZIP-et a wp-content/upgrade vagy egy ideiglenes mappába minden kijelölt oldalra, majd helyben telepíted/aktiválod.
- Statikus assetek frissítése
  - Egy új style.css vagy app.js minden brand-oldalra azonos útvonalra kerül, felülírva a régit, így azonnali és egységes kinézetet kapsz.
- Konfigurációs és rendszerfájlok
  - robots.txt, sitemap stub, nyelvi fájlok (.po/.mo), vagy egyéni .xml/.json beállítások célzott terítése.
- Mentések és helyreállítás
  - Backup ZIP-ek céloldalakra juttatása, hogy a helyreállítási folyamat gyorsabban indulhasson.

## Előnyök és értékajánlat

- Időmegtakarítás: nincs több száz ismételt FTP művelet, egy panelről intézel mindent.
- Kevesebb hiba: a központosított, konzisztens folyamat csökkenti a manuális hibák esélyét.
- Skálázhatóság: 5 vagy 500 site esetén is ugyanazt a lépést végzed.
- Rugalmasság: tetszőleges célmappa, széles fájltípus-támogatás, bővíthető engedélyezési lista.
- Átláthatóság: valós idejű visszajelzés, egyértelmű státusz minden céloldalon.

## Kinek ajánlott?

- Ügynökségeknek, akik sok ügyféloldalt kezelnek és gyakran terítenek állományokat.
- WordPress multisite-ot NEM használó, de sok külön site-tal dolgozó csapatoknak.
- DevOps/ops szerepköröknek, akik automatizálni szeretnének WP-CLI-vel és CI/CD-vel.
- Frissítéseket, brandinget, kampányanyagokat rendszeresen terítő marketing/fejlesztő csapatoknak.

## Gyorsindító

1. Előfeltétel: aktív MainWP Dashboard és kapcsolt Child Site-ok.
2. Nyisd meg: Dashboard > Add-on > File Uploader.
3. Válaszd ki a site-okat (opcionálisan kliens szerint szűrj).
4. Add meg a célkönyvtárat (példák: wp-content/uploads, wp-content/mu-plugins, public_html/custom-assets).
5. Húzd be a fájlokat, majd indítsd a feltöltést.
6. Ellenőrizd a státuszt; szükség esetén ismételd a hibás tételeket.

Egyedi fájltípus engedélyezése (például .json):

```php
add_filter( 'mainwp_file_uploader_allowed_file_types', function( $types ) {
    $types[] = 'json';
    return $types;
} );
```

## Üzemeltetési és biztonsági megjegyzések

- Tiltott fájlok: biztonsági okokból bizonyos állományok (pl. .htaccess) nem tölthetők fel.
- Felülírás: azonos fájlnév és útvonal esetén a meglévő fájl cserélődik – tervezd a verziózást ennek tudatában.
- Elérési út és nevek: a szóközök automatikusan kötőjelre cserélődnek a kompatibilitásért.
- Méret- és host-limitációk: a feltöltés a Dashboard szerver PHP beállításaihoz igazodik (például maximális fájlméret). Egyes tárhelyek további korlátozásokat alkalmazhatnak.
- Frissítés: korábbi kiadásokban azonosítottak jogosulatlan feltöltésre alkalmas sérülékenységet; mindig a legfrissebb kiadást használd.

## Hol illeszkedik a rendszerbe?

- Használat helye: MainWP Dashboard > Add-on > File Uploader.
- Kapcsolat a site-okkal: a MainWP Child bővítményen keresztül.
- Licencelés: Pro kiegészítő, a Pro Bundle részeként érhető el.

Ezzel a kiegészítővel egyetlen, biztonságos felületről tudod a fájlterítést megoldani, gyorsan, skálázhatóan és átlátható visszajelzéssel – pontosan azt adja, amire a több webhelyes üzemeltetésben szükséged van.