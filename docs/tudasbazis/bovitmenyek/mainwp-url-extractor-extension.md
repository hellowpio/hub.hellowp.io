---
title: "MainWP URL Extractor Extension"
description: "Pro kiegészítő a MainWP Dashboardhoz: URL‑ek és metaadatok tömeges kinyerése több WordPress webhelyről, testreszabható formátumban, CSV/TXT exporttal."
sidebar_label: "MainWP URL Extractor Extension"
---

## Mi ez és milyen problémát old meg?

A MainWP URL Extractor egy hivatalos MainWP Pro bővítmény, amellyel a MainWP Dashboardból egyszerre több, különálló WordPress webhely bejegyzéseiből és oldalairól tudsz URL‑eket és kapcsolódó metaadatokat kinyerni. Megszünteti a kézi, időigényes összegyűjtést: egy helyről, egységesen és gyorsan készíthetsz jól formázott listákat riportoláshoz, SEO‑hoz, migrációhoz vagy indexeléshez. Nem igényel külső szolgáltatást vagy API‑t.

## Hogyan működik röviden?

1. Nyisd meg a MainWP Dashboardban: Extensions > URL Extractor.
2. Állítsd be a kimenetet az Output format mezőben előre definiált tokenekkel és saját elválasztóval.
3. Válaszd ki a Child site‑okat és szűrj tartalomtípusra, státuszra, kulcsszóra, dátumtartományra.
4. Nézd meg az előnézetet, majd exportálj CSV vagy TXT fájlba.
5. Mentsd el az Output/Separator párost sablonként, hogy később egy kattintással újrahasználd.

## Fő funkciók részletesen

- Tömeges kinyerés több webhelyről
  - A Dashboard nézőpontjából, egy futtatással gyűjthetsz URL‑listákat a kiválasztott Child site‑okról. Nem kell belépni az egyes webhelyekre, nincs szükség külön API‑kulcsokra.

- Token‑alapú, testreszabható kimenet
  - A kimeneti sorokat sablonszerűen építheted fel tokenekből, például: **Post URL**, **Title**, **Date**, **Status**, **Author**, **Website URL**, **Website Name**. A tokenek közé tetszőleges elválasztó, fix szöveg vagy idézőjelek is kerülhetnek.

  Példa kimeneti sablonra:
  ```
  "{Post URL}";"{Title}";{Date};{Status};"{Author}";"{Website Name}"
  ```

- Részletes szűrés
  - Támogatott szűrők: tartalomtípus (**Post**, **Page**), státusz (**Published**, **Pending**, **Private**, **Scheduled**, **Draft**, **Trash**), kulcsszó a címben/tartalomban, dátumtartomány, valamint konkrét Child site‑ok vagy site‑tagek.

- Előnézet és egykattintásos export
  - Az eredmények előnézetben ellenőrizhetők (mezők, sorrend, elválasztó), majd egyetlen lépésben exportálhatók **.csv** vagy **.txt** formátumba, azonnal betölthetők táblázatkezelőbe vagy külső eszközökbe.

- Sablonok mentése és újrafelhasználása
  - Az **Output format** és **Separator** beállításaidat sablonként elmentheted. Így a rendszeres riportokat konzisztensen és gyorsan újragenerálhatod.

- Teljesítmény és rekordlimit kézben tartása
  - Nincs fix felső korlát az összes kinyerhető URL‑re; a gyakorlatban a szerver erőforrásai és a site‑ok száma a mérvadó. Alapértelmezés szerint Child site‑onként csak egy meghatározott számú bejegyzést kérdez le a bővítmény; ezt fejlesztői szűrővel növelheted.

  Példa a lekérdezési limit emelésére:
  ```php
  // functions.php vagy saját plugin
  add_filter('mainwp_url_extractor_max_posts_number', function ($limit) {
      return 500; // emeld a rekordlimitet Child site-onként
  });
  ```

## Gyakorlati példák

- SEO audit lista
  - Szűrés: minden publikált Post és Page az összes ügyféloldalról.
  - Output: URL, cím, publikálási dátum, szerző, site neve.
  - Felhasználás: áttekintő mátrix a tartalom minőségi és technikai ellenőrzéséhez.

- Migrációs átirányítási terv
  - Szűrés: adott időszakban publikált vagy frissített tartalmak.
  - Output: régi URL, cím, státusz, site neve.
  - Felhasználás: redirect mapping készítése és ellenőrzése migráció előtt.

- Scheduled bejegyzések ellenőrzése
  - Szűrés: csak Scheduled státusz.
  - Output: cím, URL, ütemezett dátum, szerző, site neve.
  - Felhasználás: tartalomtervezés, ütközések és hiányok megelőzése.

- Kulcsszavas kampányriport
  - Szűrés: cím vagy tartalom kulcsszóval.
  - Output: URL, cím, státusz, publikálási dátum, site neve.
  - Felhasználás: kampányhoz kapcsolódó tartalmak gyűjtése és teljesítménykövetés.

## Előnyök és értékajánlat

- Jelentős időmegtakarítás: megszűnik a manuális másolgatás több site‑ról.
- Következetesség: token‑alapú, egységes CSV/TXT, könnyű utófeldolgozás.
- Skálázhatóság: több webhely, nagy tartalomkészlet kezelése egy felületen.
- Rugalmasság: sablonokkal reprodukálható riportok, fejlesztői szűrőkkel finomhangolható működés.
- Adatbiztonság: nincs harmadik fél API, minden a saját infrastruktúrádon fut.

## Célközönség

- Ügynökségek és account managerek: gyors ügyfélriportok, konzisztens exportok.
- SEO szakértők: indexelési listák, auditok, migrációs térképek előkészítése.
- Tartalommenedzserek és szerkesztők: státusz‑, ütemezés‑ és kulcsszóalapú átnézetek.
- Webmester csapatok és projektvezetők: több site állapotának összevont követése.

## Követelmények és korlátok

- Követelmény: MainWP Dashboard (Core) és Pro hozzáférés.
- Alapértelmezett rekordlimit Child site‑onként, amely fejlesztői szűrővel emelhető.
- Teljesítmény: nagy adatmennyiségnél a szerver erőforrásai döntőek.
- A tokenek és szűrési lehetőségek bővülhetnek; a legfrissebb funkciókért és kompatibilitási információkért mindig nézd meg a tudásbázist és a változásnaplót.

## Tippek a hatékony használathoz

- Kezdd kisebb site‑körrel és fokozatosan emeld a limitet, így elkerülheted a túlterhelést.
- Használj site‑tageket a kiválasztáshoz (pl. ügyfél, régió, nyelv), hogy gyorsabban állíts össze riportokat.
- Állíts be egy alapértelmezett export sablont, és csak a szűrőket változtasd a különböző riportokhoz.
- CSV‑hez javasolt idézőjelezni a szöveges mezőket és konzisztens elválasztót használni, hogy a táblázatkezelők hibátlanul értelmezzék az adatokat.