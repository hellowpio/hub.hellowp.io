---
title: "JetEngine - Get attachment file link by ID"
description: "Ingyenes JetEngine-kiegészítő, amely a Media mezőben tárolt attachment ID-ből kattintható fájllinket generál, kódolás nélkül."
sidebar_label: "JetEngine - Get attachment file link by ID"
---

## Mi ez és milyen problémát old meg?

A JetEngine – Get attachment file link by ID egy ingyenes kiegészítő, amely a JetEngine Dynamic Field (Dinamikus mező) widgethez/blokkhoz új “callbacket” ad. Ha a Media típusú meta mezőidben a fájlok azonosítója (attachment ID) van elmentve, alapból csak egy számot látsz a kimenetben. Ez a bővítmény ezt az ID-t automatikusan a fájl valódi URL-jévé alakítja, és kattintható linkként jeleníti meg – kódolás nélkül. Így könnyen készíthetsz professzionális letöltési linkeket PDF-ekhez, ZIP-ekhez, képekhez, videókhoz és bármilyen médiához.

## Fő funkciók, érthetően

- **Attachment ID → kattintható link**  
  A Media mezőben tárolt azonosítóból a bővítmény valós fájl URL-t állít elő, majd linkként jeleníti meg. Nem kell egyedi PHP-t írnod, a JetEngine beépített dinamikus kimenetszűrésével működik.

- **Dynamic Field “Filter field output” callback**  
  A Dynamic Field beállításain belül bekapcsolod a “Filter field output”-ot, majd kiválasztod a **Get attachment file link by ID** callbacket. Ettől kezdve a szám helyett egy használható linket kapsz a listázásban vagy egyedi sablonban.

- **Testreszabható linkfelirat (Display name)**  
  Megadhatod, hogy mi legyen a link szövege:  
  - a fájl tényleges neve,  
  - az attachment bejegyzés címe,  
  - az aktuális bejegyzés címe,  
  - a szülő bejegyzés címe,  
  - vagy egy teljesen egyedi címke.  
  Ez javítja a hozzáférhetőséget és a felhasználói élményt.

- **Zökkenőmentes JetEngine-integráció**  
  Működik Elementorban és a JetEngine Gutenberg blokkokkal is. A kiegészítőt a JetEngine modulkezelőjében, az **External Modules** között találod és onnan aktiválhatod.

- **Makró-alternatíva haladó felhasználóknak**  
  Ha nem Dynamic Fieldben, hanem például Repeater/HTML formátumú mezőben szeretnél URL-t, használhatod a JetEngine makrót:  
  ```
  %my_media_field|file_url_by_id%
  ```  
  A `my_media_field` a Media meződ kulcsneve.

## Gyakorlati példák

- **Dokumentumtár és letöltési oldal**  
  Egy katalógusokkal teli oldalnál a fájlok ID-ként vannak tárolva. A Listing Grid dinamikusan linkeli őket, a látogatók egy kattintással töltenek.

- **Oktatási anyagok gyűjtőoldala**  
  Kurzusmodulokhoz feltöltött PDF-ek és prezentációk automatikusan linkké válnak a kurzus sablonjában.

- **Frontendes űrlapokkal feltöltött fájlok**  
  Ha JetEngine Forms használatával a fájlokat **Attachment ID** formátumban mented, a callback azonnal megjeleníti a linket a megfelelő helyen.

- **CPT archívumok**  
  Egyedi bejegyzéstípusok (pl. “Pályázatok”) listájában minden rekordnál megjelenik a “Pályázati felhívás (PDF)” link, ID-ből generálva.

## Telepítés és használat, lépésről lépésre

1. **Követelmény**: legyen telepítve és aktív a JetEngine.  
2. **Modul aktiválása**: a JetEngine modulkezelőben az **External Modules** között telepítsd/kapcsold be az ingyenes kiegészítőt (Attachment Link Callback).  
3. **Media mező ellenőrzése**: a JetEngine > Meta Boxes alatt nézd meg, hogy a Media mező **ID** formátumban tárolja az értéket.  
4. **Listing/sablon szerkesztése**: add hozzá a **Dynamic Field** widgetet/blokkot, és forrásnak válaszd ki a Media meződet.  
5. **Kimenet szűrése**: kapcsold be a **Filter field output** opciót, majd callbacknek jelöld ki a **Get attachment file link by ID** lehetőséget.  
6. **Felirat beállítása**: a **Display name** segítségével döntsd el, mi legyen a link szövege (fájlnév, attachment cím, aktuális bejegyzés címe, szülő címe vagy egyedi szöveg).  
7. **Mentés és teszt**: frissítsd a listát/sablont, ellenőrizd, hogy a link nyitható és a megfelelő fájlra mutat.

## Előnyök és értékajánlat

- **Kódmentes megoldás**: nincs szükség egyedi PHP-snippetekre.  
- **Gyors és egységes**: mindenhol azonos logikával jelennek meg a linkek.  
- **Jobb szerkesztői élmény**: a tartalomszerkesztőknek elég a fájlt kiválasztani; a megjelenítés automatikus.  
- **Rugalmas feliratozás**: a link szövege konzisztens és informatív lehet, ami javítja a UX-et és az akadálymentességet.  
- **Moduláris frissítés**: az External Modules használata könnyebb karbantartást tesz lehetővé.

## Kinek ajánlott?

- **Weboldal-építőknek és ügynökségeknek**, akik JetEngine-nel készítenek dinamikus listákat és sablonokat.  
- **Tartalomgazda csapatoknak**, akik gyakran publikálnak letölthető fájlokat (pl. dokumentáció, árlisták, jelentések).  
- **Oktatási és nonprofit szervezeteknek**, ahol sok az anyag és fontos a könnyű hozzáférés.  
- **Fejlesztőknek**, akik egyszerű, karbantartható megoldást akarnak egyedi kód helyett.

## Megjegyzések és bevált gyakorlatok

- **Csak ID-vel működik**: a callback akkor működik helyesen, ha a Media mező értéke ténylegesen **attachment ID**. Ha eleve URL-t tárolsz, nincs szükség erre a callbackre.  
- **Űrlapok beállítása**: JetEngine Forms esetén használd az “Insert attachment” opciót és állítsd az értékformátumot **Attachment ID**-re, így biztosan jó struktúra kerül mentésre.  
- **Felirat-stratégia**: válaszd a felhasználónak legérthetőbb megoldást (pl. fájlnév kiterjesztéssel, vagy beszédes cím: “Termékkatalógus 2025 PDF”).  
- **Hozzáférés-kezelés**: ha privát fájlokat szolgálsz ki, ellenőrizd a jogosultságokat; a callback a linket adja, a hozzáférés-szabályokat neked kell meghatároznod.  
- **Makró használata**: ha nem Dynamic Fieldet használsz, a `%my_media_field|file_url_by_id%` makróval bármilyen dinamikus szövegkörnyezetben kérhetsz le URL-t ID alapján.

Ezzel a kiegészítővel az “csak egy szám látszik” problémából egyetlen kattintással használható, egységes letöltési link lesz – pontosan ott és úgy, ahogy szükséged van rá.