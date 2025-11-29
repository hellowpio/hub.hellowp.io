---
title: "MainWP Pressable Extension"
description: "MainWP Pro kiegészítő, amellyel a Pressable hosztingon futó WordPress-oldalaidat a MainWP irányítópultból, a Pressable API-n keresztül menedzselheted – külön belépés nélkül."
sidebar_label: "MainWP Pressable Extension"
---

## Mi ez és milyen problémát old meg?

A MainWP Pressable Extension egy **MainWP Pro** kiegészítő, amellyel a **Pressable** hosztingon futó webhelyeid hoszting-specifikus feladatait közvetlenül a **MainWP Dashboardból** intézheted. Nem kell többet felületről felületre ugrálnod: site-létrehozás, **staging/production** váltás, **CDN** kapcsolás, **backup** kezelés és **phpMyAdmin** elérés mind egy helyről, akár **tömegesen** is. Ügynökségi környezetben ez kézzelfogható idő- és hibacsökkentést hoz.

## Fő funkciók, érthetően

- **Pressable-fiókok összekapcsolása**: a Pressable **API Client ID/Secret** megadásával kapcsolod a fiókod a MainWP-hez. Több fiókot is kezelhetsz egy irányítópultból. A Pressable-en lévő site-ok a kiegészítő táblájában akkor jelennek meg, ha child site-ként hozzáadtad őket a MainWP-hez.

- **Új webhely létrehozása**: közvetlenül a MainWP-ből indíthatsz új Pressable site-ot. Megadhatod a **site nevet**, választhatsz **WordPress** vagy **WooCommerce** típust, jelölheted **Staging** környezetnek, kiválaszthatod a **PHP verziót** és az **adatközpont** lokációját. Így gyors a provisioning, nincs kontextusváltás.

- **Életciklus-kezelés**: meglévő site-okat egy kattintással **letilthatsz/engedélyezhetsz** (Live/Disabled), vagy végleg **törölhetsz**. Válthatsz környezetet (**Convert to Staging** vagy **Staging to Live**) – praktikus átadás előtt vagy teszteléskor.

- **CDN kezelése**: be- és kikapcsolhatod a **Pressable CDN**-t. Hasznos, ha kampány előtt teljesítményt optimalizálsz, vagy hibaelhárításnál ideiglenesen lekapcsolnád.

- **Biztonsági mentések**: listázod a Pressable backupjaid, külön **fájl** és **adatbázis** letöltést kérhetsz, illetve **visszaállítást** indíthatsz ugyanarra vagy – ha igényli a folyamat – **másik Pressable site-ra**. Klónozásnál és incidenskezelésnél különösen hasznos.

- **1 kattintásos phpMyAdmin**: közvetlen **phpMyAdmin**-hozzáférés linkkel a MainWP-ből, így gyorsan elérheted az adatbázist.

- **Tömeges műveletek**: a fenti hoszting-specifikus akciók nagy részét **bulk** módban, több site-on egyszerre futtathatod. Ideális ügynökségi karbantartási rutinokhoz.

- **Gyors állapot-áttekintés**: a kiegészítő táblázatai hoszting-információkat is mutatnak: **State**, **Environment**, **Data Center**, **IP**, havi és 24 havi **látogatottság**, **CDN** állapot, **utolsó backup** ideje. Egyetlen nézetben látod a kritikus adatokat.

## Gyakorlati példák

- **Villámrajtos indulás**: 5 új WooCommerce boltot indítasz. A MainWP-ben megadod a neveket, kiválasztod az európai adatközpontot és a kívánt PHP-t, jelölöd Stagingnek. Pár perc múlva mind az öt site kész a csapatnak a témák és bővítmények telepítéséhez.

- **Kampány előkészítés**: egy blognál bekapcsolod a **CDN**-t és ellenőrzöd az előző havi látogatottságot. Ha nő a terhelés, a staginget egy kattintással **Live**-ra emeled az átadás után.

- **Incidenskezelés**: hibás frissítés miatt a site szétesett. A MainWP-ben ránézel a **backup** listára, kiválasztod a tegnapi mentést, és **restore**-t indítasz. Ha tesztelnéd, előbb egy **másik Pressable site**-ra állítod vissza.

- **Adatbázis gyorsjavítás**: kliens hibát jelez. Egy kattintással megnyitod a **phpMyAdmin**-t, javítod a táblát, kész.

- **Tömeges karbantartás**: negyedéves takarításnál 30 site-on letiltod átmenetileg a CDN-t, vagy több tesztoldalt egyszerre **Disabled** állapotba teszel – mindezt egy körben.

## Előnyök és értékajánlat

- **Időmegtakarítás**: hosztingfeladatok egy helyről, több fiókon és site-on át, tömegesen.
- **Kevesebb hibalehetőség**: standardizált folyamatok, kevesebb kézi lépés és kevesebb bejelentkezés.
- **Átláthatóság**: hoszting- és WordPress-információk **egységes nézetben**.
- **Rugalmasság**: **staging/production** váltás, **backup**-alapú visszaállítás és **CDN**-kapcsolás pillanatok alatt.
- **Önállóság és kontroll**: a MainWP önhosztolt megközelítése és a Pressable API integrációja biztonságos, auditálható működést tesz lehetővé.

## Kinek ajánlott?

- **WordPress ügynökségeknek**: portfólió-szintű menedzsment, bulk műveletek, gyors provisioning.
- **Webhely-karbantartóknak/IT csapatoknak**: incidenskezelés, backup és adatbázis-hozzáférés központilag.
- **Nagyobb szervezeteknek**: több **Pressable-fiók** és sok site egységes irányítása egy irányítópulton.

## Követelmények

- **MainWP Dashboard** aktív **Pro** előfizetéssel.
- **Pressable-fiók** és érvényes **API** hozzáférés (**Client ID** és **Client Secret**).
- A kezelt site-oknak **child site**-ként szerepelniük kell a MainWP-ben, hogy megjelenjenek az extension táblájában.

## Gyors üzembe helyezés

```
1) MainWP Dashboard > Extensions > Pressable > Install, majd Activate
2) Pressable felület: hozz létre új API Applicationt (teljes jogosultság), jegyezd fel a Client ID / Secret értékeket
3) MainWP > Extensions > Pressable > Settings: add meg és mentsd az API adatokat
4) Add hozzá a Pressable site-jaidat child site-ként a MainWP-hez (ha még nem tetted)
5) Nyisd meg az Extensiont és végezd a szükséges műveleteket (létrehozás, CDN, backup, staging/live, stb.)
```

## Használati megjegyzések és korlátok

- Kifejezetten **Pressable** hosztinghoz készült; más szolgáltatóknál nem használható.
- A végrehajtható műveletek a Pressable-fiókod **jogosultságaitól** függenek (például letiltás vagy törlés).
- Csak azok a site-ok láthatók az extensionben, amelyeket **child site-ként** már hozzáadtál a MainWP-hez.
- **Destruktív műveleteknél** (törlés, letiltás, restore) használj staginget és készíts előtte mentést.
- Több **Pressable-fiók** párhuzamos kezelése támogatott ugyanazon Dashboardból.