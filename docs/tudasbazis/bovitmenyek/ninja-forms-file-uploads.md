---
title: "Ninja Forms - File Uploads"
description: "Hivatalos Ninja Forms kiegészítő fájlfeltöltéshez: típus-, méret- és darabszám-korlátokkal, médiatárba vagy felhőbe mentéssel."
sidebar_label: "Ninja Forms - File Uploads"
---

## Mi ez és milyen problémát old meg?

A File Uploads a Ninja Forms hivatalos kiegészítője, amellyel bármely űrlapodra egyszerűen tehetsz **fájlfeltöltési mezőt**. Segít szabályozni, hogy a látogatók milyen fájlokat, mekkora méretben és hány darabot küldhetnek, és hogy a fájlok **hová kerüljenek**: a WordPress Médiakönyvtárába, a szerveredre vagy közvetlenül **Google Drive / Dropbox / Amazon S3** tárhelyre. Ezzel leválasztod a mellékleteket az e-mailről, kikerülöd a csatolási korlátokat, és **rendezett, visszakereshető** tárhelyet kapsz.

## Fő funkciók és működés

### Fájlfeltöltési mező hozzáadása
- Az űrlapszerkesztőben egy kattintással, drag‑and‑droppal elérhető a **File Upload** mező.
- Támogatja a **többfájlos** feltöltést; a felhasználó törölhet, újrapróbálhat.

### Feltöltési korlátok
- Állítsd be az **engedélyezett kiterjesztéseket** (MIME-típus fehérlista alapján).
- Add meg a **minimális és maximális fájlméretet**, valamint a **darabszám-limitet** mezőnként.
- Testreszabható hibaüzenetekkel segítheted a beküldőt.

### Mentési célhelyek
- **Szerver/Médiakönyvtár**: a fájlok menthetők a szerverre és opcionálisan a WordPress Médiakönyvtárba (attachment azonosító/URL merge taggel elérhető).
- **Külső felhő**: a kiegészítő globális External Settings részében csatlakozol Drive/Dropbox/S3 szolgáltatókhoz, majd az űrlapon egy **External File Upload** akcióban kiválasztod a célhelyet. Választható **háttérfeltöltés**, hogy a nagy fájlok feltöltése megbízhatóbban fusson.

### Átnevezés és mappastruktúra
- Szabályalapú **átnevezés** és **mappa-minták**: merge tagekkel a fájlok neve és elérési útja az űrlapadatokból épülhet fel (pl. név, dátum, űrlap azonosító).

Példa minta:
```
applications/{date:Y}/{date:m}/{field:nev}-{submission:id}.{ext}
```

### E-mail integráció
- A feltöltött fájlokat **csatolhatod** értesítő e-mailekhez, vagy **letöltési linket** szúrhatsz be merge taggel.

### Admin eszközök
- **Browser Uploads** nézet: listázás és törlés, űrlapra és dátumra szűrve.
- Globális **Upload Settings**: alapértelmezett mappa, maximális méret, hibaüzenetek.

### Nyilvános URL és háttérfeltöltés
- Felhő-céloknál elérhető a **Use Public URL** opció, amellyel közvetlen, nyilvános linket adsz a fájlhoz.
- Az **External File Upload** akcióban kapcsolható **background upload** a megbízhatóbb átadásért.

### Biztonság és megfelelőség
- Alapértelmezett **MIME-fehérlista**, amit bővíthetsz.
- S3 esetén az alapértelmezett hozzáférés privát; ACL szűrővel szabályozható.
- A bővítmény kezeli a fájlnevek biztonságos escapingjét.

## Fontos technikai tudnivalók

- A feltöltés mindig a **webszervereden** megy keresztül, ezért a PHP‑limitek (upload_max_filesize, post_max_size, max_execution_time, memory_limit) érvényesek. Nagy fájloknál ezeket emeld, és mérd fel a környezetedet.
- Bizonyos haladó opciókhoz engedélyezd a **Developer Mode**-ot a Ninja Formsban.
- Integrációk:
  - Drive/Dropbox: egyszeri csatlakozás az External Settings-ben; adható egyedi mappaút.
  - Amazon S3: IAM kulcsokkal vagy wp-config konstansokkal, pontos bucket névvel; ACL szűrhető.

S3 kulcsok megadása wp-config.php-ben:
```
define('NF_FU_AMAZON_S3_ACCESS_KEY', 'AKIA...');
define('NF_FU_AMAZON_S3_SECRET_KEY', '********');
```

MIME‑típusok bővítése:
```
add_filter('ninja_forms_upload_mime_types_whitelist', function($mimes){
  $mimes['zip'] = 'application/zip';
  $mimes['csv'] = 'text/csv';
  return $mimes;
});
```

## Gyakorlati példák

- **Álláspályázat**: csak PDF/DOCX, max. 10 MB, legfeljebb 3 fájl. A fájlok Drive-ra mennek „/HR/Applications/” mappába, HR értesítés e-mailben letöltési linkkel.
- **Ügyfélszolgálat**: képernyőképek (PNG/JPG) és logok (ZIP), szerverre mentve, automatikus ticket-azonosítós átnevezéssel, e-mail csatolással a gyors hibajavításhoz.
- **Tartalom-beküldés**: fotók médiatárba kerülnek, a szerkesztőség a bejegyzésben rögtön felhasználhatja az attachment ID alapján.
- **Ajánlatkérés / megrendelés**: tervfájlok S3-ra, privát hozzáféréssel; a sales csapat csak linket kap, így nem terheli az e-mailt.

## Előnyök és értékajánlat

- **Nincs többé e-mail limit**: nagy mellékletek gond nélkül érkeznek.
- **Rendezett tárhely**: szabályos átnevezés és mappa-struktúra miatt minden gyorsan visszakereshető.
- **Skálázható**: felhő-célokkal nem a webszerver tárhelyét terheled.
- **Gyorsabb folyamatok**: automatikus csatolás/linkek az e-mailekben, kevesebb kézi munka.
- **Biztonság**: fehérlistázott típusok, privát S3, kontrollált elérés.

## Kinek ajánlott?

- **HR és toborzás**: önéletrajzok, portfóliók gyűjtése szabályozottan.
- **Ügyfélszolgálat és IT**: hibajegyek mellékleteinek kezelése.
- **Szerkesztőségek és ügynökségek**: tartalom-beküldés médiatár-integrációval.
- **E-kereskedelem / B2B értékesítés**: specifikációk, tervfájlok fogadása.
- **Oktatás és HR folyamatok**: beadandók, igazolások bekérése.

## Bevezetési javaslatok

1. Tervezd meg a **fájlpolitikát** (típus, méret, darabszám) és állítsd be mezőnként.
2. Döntsd el a **célhelyet** (Médiakönyvtár vs. felhő), konfiguráld az External Settings-et, majd add hozzá az **External File Upload** akciót.
3. Nagy fájloknál igazítsd a **PHP-limiteket**, és szükség esetén kapcsold be a **háttérfeltöltést**.
4. Definiálj **átnevezési és mappa-mintákat** a rendezett tároláshoz.
5. Teszteld a folyamatot valós, nagyobb fájlokkal, és ellenőrizd az e-mail értesítések mellékleteit/linkjeit.

A File Uploads-szal pontosan szabályozod, mit, mennyit és hová tölthetnek fel a felhasználóid – miközben az adatáramlásod gyorsabb, biztonságosabb és átláthatóbb lesz.