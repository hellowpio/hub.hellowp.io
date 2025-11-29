---
title: "MB Frontend Submission"
description: "Frontend űrlapokkal és felhasználói dashboarddal teszi lehetővé bejegyzések, egyedi mezők és modellek beküldését a Meta Box ökoszisztémában."
sidebar_label: "MB Frontend Submission"
---

## Mi ez és milyen problémát old meg?

Az MB Frontend Submission a Meta Box prémium kiegészítője, amellyel kódolás nélkül tudsz frontend űrlapokat és felhasználói „dashboardot” megjeleníteni. Így a látogatóid bejelentkezés után bejegyzéseket, egyedi bejegyzéstípusokat vagy modelleket küldhetnek be, szerkeszthetnek és törölhetnek – anélkül, hogy admin hozzáférést adnál nekik. Megoldja a strukturált adatgyűjtést (összes Meta Box mezőtípus), a jogosultságkezelés terheit és az egységes beküldési folyamatot.

## Hogyan működik röviden?

- A Meta Box-szal létrehozol egy mezőcsoportot (field group), és hozzárendeled egy post type-hoz vagy modellhez.
- Egy oldalra blokk vagy shortcode segítségével kirakod a beküldési űrlapot.
- Egy másik oldalra kirakod a felhasználói dashboardot, ahol a saját beküldések listázhatók, szerkeszthetők, törölhetők.
- Az űrlap a WordPress alap mezőit (cím, tartalom, kivonat, dátum, kiemelt kép) és a Meta Box által definiált custom fieldeket is kezeli.

## Fő funkciók

### Frontend beküldési űrlap
- Gutenberg blokk vagy shortcode formában jelenítheted meg.
- Kezeli a WordPress bejegyzésmezőket és bármely Meta Box mezőtípust (dátum, WYSIWYG, fájl, kép, számskála stb.).
- Támogatja az Ajax-alapú beküldést, visszaigazoló üzenetet, átirányítást és reCAPTCHA v3 védelmet.
- Testreszabható a mezők sorrendje és feliratozása, valamint az űrlap megjelenése.
- Dinamikus paraméterezés: URL query stringből és hookokkal tölthetsz elő értékeket, saját validációs logikát építhetsz.
- Fájl-/kép-feltöltéshez a felhasználói szerepkörnek szüksége van az „upload_files” képességre; enélkül használj egyszerű „file”/„image” mezőtípusokat.

### Felhasználói dashboard
- Rövidkóddal listázza a bejelentkezett felhasználó saját beküldéseit.
- Szerkesztés és törlés a listából, megerősítő üzenetekkel.
- Testreszabható oszlopok és feliratok; lapozás; „Új hozzáadása” gomb.
- Az „edit_page” attribútummal összekötheted az űrlapot tartalmazó oldallal.

### Egyedi modellek és saját táblák
- Nem csak bejegyzésekhez: űrlapokat modellekhez is készíthetsz (object_type = model).
- Nagy forgalmú, sok metaadatot kezelő rendszerekhez saját táblákat és modelleket használhatsz a jobb teljesítményért.

### Sablonfelülírás és integrációk
- A kimeneti sablonok a témában felülírhatók (mb-frontend-submission könyvtárban).
- Natív blokkok, valamint elemek a népszerű page builderekhez (pl. Bricks, Elementor).
- Page builder sajátosság: ha a dashboard nem találja a beküldő űrlap rövidkódját, tedd a shortcode-ot közvetlenül az oldal tartalmába, vagy használd a builder beépített Meta Box elemeit.

### Biztonság és validáció
- Backend (PHP) és frontend (JS) validáció, egyedi hibaüzenetekkel.
- Hookok a folyamat minden pontján (pl. átirányítás, feldolgozás utáni műveletek).
- Iframe-be ágyazásnál a böngészők sütiszabályai miatt szükség lehet SameSite=None; Secure beállításokra és HTTPS-re.

## Gyakorlati példák

- Közösségi blog/híroldal: az olvasók cikket küldenek be. A beküldések alapértelmezés szerint piszkozatba kerülhetnek, a szerkesztők ellenőrzik, a szerző pedig a dashboardon bármikor javíthat.
- Apróhirdetés/ingatlan listing: ár, hely, állapot, galéria – mind strukturált mezőkben. A beküldő űrlap új hirdetéseket hoz létre, a dashboardon szerkeszthetők és törölhetők.
- Vélemény-/értékelőoldal: csillagos értékelés, előnyök/hátrányok, termékképek – egységes űrlapon, következetes adatstruktúrával.

## Shortcode példák

Beküldési űrlap (egyedi bejegyzéstípushoz):
```
[mb_frontend_form
  id="listing_fields"
  post_type="listing"
  post_fields="title,content,thumbnail"
  ajax="true"
  confirmation="Köszönjük, a bejegyzésed beérkezett."
  redirect="/profil/dashboard"
  recaptcha_key="SITE_KEY"
  recaptcha_secret="SECRET_KEY"]
```

Felhasználói dashboard:
```
[mb_frontend_dashboard
  edit_page="123"
  post_type="listing"
  columns="title,date,status,actions"
  label_title="Cím"
  label_date="Dátum"
  add_new="Új bejegyzés"]
```

Hasznos attribútumok (válogatás):
- űrlap: id, post_type, post_fields, ajax, edit, allow_delete, force_delete, confirmation, redirect, delete_confirmation, object_type, object_id, recaptcha_key, recaptcha_secret
- dashboard: edit_page, post_type, object_type, model_name, columns, title_link, add_new, label_title/label_date/label_status/label_actions

## Gyorsindító

1. Telepítsd és aktiváld a Meta Box-ot és az MB Frontend Submission kiegészítőt.
2. Hozz létre egy mezőcsoportot, és rendeld az érintett post type-hoz vagy modellhez.
3. Készíts egy „Beküldés” oldalt, és illeszd be a beküldési űrlap rövidkódját a kívánt attribútumokkal.
4. Készíts egy „Dashboard” oldalt, tedd rá a dashboard rövidkódot, és az „edit_page” értékéhez add meg a beküldő oldal ID-jét.

## Előnyök és értékajánlat

- Admin terhelés csökkentése: nincs szükség szerzőknek admin hozzáférésre.
- Strukturált, konzisztens adatok: minden Meta Box mezőtípus elérhető.
- Gyors bevezetés: blokkokkal és shortcode-okkal, kódolás nélkül.
- Skálázható: modellek és saját táblák támogatása nagy adatvolumenhez.
- Biztonságos és testreszabható: validáció, reCAPTCHA, hookok, sablonfelülírás.

## Célközönség

- Tartalomgyártó oldalak tulajdonosai, akik közösségi beküldést szeretnének.
- Piactér-, apróhirdetés- és listing-üzemeltetők, ahol a felhasználói tételek kezelése kritikus.
- Ügynökségek/fejlesztők, akik gyorsan, stabil alapon akarnak frontend űrlapokat és szerkesztői folyamatot építeni ügyfeleiknek.

## Tippek és hibaelhárítás

- Ha a dashboard azt jelzi, hogy gond van a shortcode-dal, ellenőrizd, hogy az „edit_page” valóban arra az oldalra mutat, ahol a beküldő űrlap rövidkódja a tényleges oldal-tartalomban szerepel (ne builder-specifikus mezőben).
- Media feltöltéshez biztosíts „upload_files” jogosultságot, vagy használj egyszerű fájl/kép mezőket.
- Iframe-be ágyazásnál állítsd a sütik SameSite és Secure attribútumait, és használj HTTPS-t.