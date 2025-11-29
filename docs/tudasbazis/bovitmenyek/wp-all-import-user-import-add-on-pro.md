---
title: "WP All Import - User Import Add-On Pro"
description: "WordPress felhasználók tömeges importja és frissítése CSV, Excel, Google Sheets és XML forrásokból, teljes mező- és meta támogatással."
sidebar_label: "WP All Import - User Import Add-On Pro"
---

## Mi ez és milyen problémát old meg?

A WP All Import – User Import Add‑On Pro a WP All Import Pro “Users” kiegészítője. Arra való, hogy WordPress felhasználókat egyszerre, tömegesen importálj és frissíts bármilyen adatforrásból (CSV, Excel, Google Sheets, XML), anélkül, hogy kézzel kellene felvinni vagy szerkeszteni őket. Megoldja a migráció, adatszinkron és tömeges módosítás kihívásait, biztonságosan kezeli a jelszavakat, és elkerüli a duplikációkat.

## Fő funkciók, érthetően

- **Rugalmas importforrások**: Bármilyen CSV, XLSX, Google Sheets URL vagy XML feldolgozható, tetszőleges struktúrával és fájlmérettel. Nem kell “pont olyan” elrendezés, a mezőket szabadon párosíthatod.
- **Drag‑and‑drop mezőhozzárendelés**: A forrásmezőket egyszerűen ráhúzod a WordPress felhasználói mezőkre (e‑mail, név, megjelenítendő név, weboldal, jelszó, szerepkör). Ugyanígy bármelyik **felhasználói meta** is importálható (bővítmények/sablonok saját mezői).
- **Jelszavak profi kezelése**: Tudsz importálni **hash‑elt jelszavakat** másik WordPress oldalról, így a felhasználók a régi jelszavukkal léphetnek be. Igény esetén sima szöveges jelszavakat is megadhatsz (a megfelelő beállítással).
- **Szerepkörkezelés és e‑mail értesítések kontrollja**: Szerepköröket oszthatsz az importból, és letilthatod a rendszerértesítéseket, hogy az import ne küldjön váratlan e‑maileket.
- **Frissítés egyedi azonosító alapján**: Beállíthatod, mi az **egyedi azonosító** (pl. e‑mail, ID vagy külső rendszer azonosítója). Így pontos egyezés alapján frissít, elkerülve a duplikációkat. Finomhangolhatod, mely mezőket frissítse vagy hagyja érintetlenül; a hiányzókat kérésre törölheti.
- **Ütemezett futtatás**: Automatikus, időzített importok kront használva vagy a beépített ütemező szolgáltatással. Ideális rendszeres szinkronizáláshoz.
- **Többnyelvű támogatás**: WPML kompatibilitás a többnyelvű telepítésekhez.
- **Fejlesztőbarát bővíthetőség**: Saját **PHP függvényeket** futtathatsz az importban (tisztítás, normalizálás, feltételek, összefűzések).
- **Védett források**: Jelszóval védett URL‑ekről (HTTP Basic Auth) is le tudja tölteni a forrást.
- **Export‑migráció integráció**: Felhasználókat exportálhatsz “bundle” csomagba, amit a céloldalon automatikusan sablonozva vissza tudsz importálni.

### Példa egy saját PHP tisztító függvényre

```php
// functions.php vagy a WP All Import "Function Editor"-ában
function normalize_phone($value) {
    return preg_replace('/\D+/', '', $value);
}
```

A mezőhozzárendelésnél:
```
[normalize_phone({phone[1]})]
```

## Hogyan működik? (Gyors workflow)

1. Menj az All Import > New Import menüpontra, tölts fel fájlt vagy adj meg URL/FTP elérést.
2. Válaszd ki az import célját: **Users**.
3. A drag‑and‑drop felületen párosítsd a forrásmezőket a WordPress felhasználói mezőkhöz és a szükséges user meta adatokhoz. Jelszó esetén jelöld, ha hash‑elt értéket adsz meg.
4. Állítsd be az **egyedi azonosítót** és a frissítési szabályokat (mit frissítsen, mit hagyjon érintetlenül, hiányzók törlése).
5. Opcionálisan ütemezd a futást (cron vagy beépített ütemezés), majd indítsd el az importot és ellenőrizd az eredményt.

## Gyakorlati példák

- **Teljes migráció egyik oldalról a másikra**: Exportálod a felhasználókat a forrásoldalon, importálod a céloldalon. A hash‑elt jelszavaknak köszönhetően a felhasználók ugyanazzal a jelszóval lépnek be, nincs szükség tömeges jelszó‑resetre.
- **WooCommerce vásárlók költöztetése**: A vásárlók valójában WordPress felhasználók. A plugin a vásárlói meta mezőket is kezeli (számlázási/szállítási adatok), így az ügyféladatbázis sértetlen marad.
- **Külső CRM/ERP/LMS szinkron**: Hetente vagy naponta lefutó, ütemezett importtal frissítheted a felhasználói rekordokat. Az egyedi azonosító megakadályozza a duplikációkat, és csak a módosult mezők frissülnek.
- **Tömeges profilfrissítés**: Exportálás után Excelben szerkeszted a mezőket (pl. szerepkör, státusz, lejárati dátum), majd visszaimportálod — percek alatt végigfuttatható.

## Előnyök és értékajánlat

- **Időmegtakarítás**: Több száz vagy több tízezer felhasználó betöltése és frissítése percek–órák alatt, kézi admin munkanapok helyett.
- **Kevesebb hiba**: A drag‑and‑drop hozzárendelés és az egyedi azonosítón alapuló frissítés minimalizálja a hibákat és duplikációkat.
- **Biztonság**: A **hash‑elt jelszó** import a legjobb gyakorlatot követi; az értesítések blokkolása megakadályozza a kéretlen e‑maileket.
- **Rugalmasság**: Tetszőleges forrásszerkezet, bármennyi user meta, saját PHP transzformációk – nem kell kompromisszumot kötnöd.
- **Skálázhatóság**: Nagy fájlok, ütemezett futások, védett források – éles, nagy terhelésű rendszerekhez is illeszkedik.

## Kinek ajánlott?

- **Ügynökségeknek és fejlesztőknek**: Gyors migrációk, staging‑éles adatátadások, multisite szétbontás/összevonás.
- **Webshop tulajoknak**: WooCommerce ügyféladatok pontos és biztonságos költöztetése vagy szinkronizálása.
- **Oktatási és tagsági oldalaknak**: LMS/membership meta mezők tömeges kezelése, jogosultságok és státuszok frissítése.
- **Integrációra építő csapatoknak**: CRM/ERP rendszerekkel való folyamatos adatcsere, ütemezett importokkal.

## Követelmények és licenc

A “Users” funkció a WP All Import Pro részeként, Users add‑onként érhető el. A licenc a fejlesztő által kínált csomagok része, korlátlan telepítéssel és pénzvisszafizetési garanciával. A termékcsalád fejlesztője a Soflyy.

## Bevált gyakorlatok és megjegyzések

- **Hozzáférés**: Az import eszközhöz csak megbízható adminok kapjanak hozzáférést, mert teljes körű adatírási jogot biztosít.
- **Migráció**: Ha tudod, használj export “bundle” csomagot; a céloldalon automatikusan előkészíti az import sablont.
- **E‑mailek**: Nagyobb import előtt kapcsold ki a rendszerértesítéseket, hogy a felhasználók ne kapjanak váratlan üzeneteket.
- **Tesztelés**: Először futtasd le kis mintán, ellenőrizd a mezőpárosításokat és az egyedi azonosító logikáját, majd jöhet az éles, ütemezett futás.

Ezzel a bővítménnyel pontosan tudod irányítani, hogy milyen felhasználói adat hogyan, mikor és honnan kerüljön a WordPress‑edbe — gyorsan, biztonságosan és megismételhetően. Ha rendszeresen kell felhasználókat mozgatnod vagy frissítened, nagy valószínűséggel ez az eszköz kell neked.