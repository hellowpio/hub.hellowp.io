---
title: "WP All Import Pro"
description: "Prémium WordPress-importáló bővítmény, amellyel bármilyen XML/CSV/Excel/Google Sheets forrásból rugalmasan tölthetsz be bejegyzéseket, termékeket, felhasználókat – ütemezéssel és automatizálással."
sidebar_label: "WP All Import Pro"
---

## Mi ez és milyen problémát old meg?

A WP All Import Pro egy fejlett, mégis felhasználóbarát importmotor WordPresshez. Akkor van rá szükséged, ha heterogén, gyakran változó forrásokból (XML, CSV, Excel, Google Sheets) kell rendszeresen tartalmat töltened WordPressbe: bejegyzéseket, oldalakat, egyedi bejegyzéstípusokat, taxonómiákat, felhasználókat vagy akár WooCommerce termékeket. A bővítmény fő erőssége, hogy strukturálatlan vagy vegyes szerkezetű adatforrásokat is képes felvenni, átalakítani és a megfelelő WordPress mezőkbe irányítani – duplikáció nélkül, automatizált frissítésekkel.

## Hogyan működik röviden?

1. Forrás kiválasztása: fájlfeltöltés, URL, FTP/SFTP, vagy Google Sheets.
2. Előnézet: a rekordok azonosítása és a struktúra felismerése.
3. Drag-and-drop mezőtérképezés: a forrás mezőit „ráhúzod” a WordPress célmezőkre (egyedi mezők, taxonómiák, képek, add-onok).
4. Futtatás és ütemezés: egyszeri import vagy ismételt frissítés, törlési/összefésülési szabályokkal.

## Fő funkciók részletesen

### Rugalmas forráskezelés
- **Formátumok**: XML, CSV, Excel, Google Sheets.
- **Nagy fájlok**: szakaszos feldolgozás, timeout-kerülés. Akkor is működik, ha a forrásod nem teljesen egységes.

### Drag-and-drop mezőtérképezés
- **Bármely WordPress mező**: cím, tartalom, kivonat, státusz, dátum, szerző.
- **Egyedi mezők (post meta) és taxonómiák**: témák és bővítmények által létrehozott mezők automatikus felismerése.
- **Összetett struktúrák**: ismétlődő mezők, relációk, hierarchikus kategóriák.

### Képek és média
- **Források**: külső URL, szerverfájl, médiatár.
- **Műveletek**: kiemelt kép, galéria, meglévő képek megőrzése vagy cseréje, hibakezelés (pl. sikertelen letöltés → piszkozat).

### Ütemezés és automatizálás
- **Saját cron**: időzített futás a tárhelyed cronjával, nagy importok feldarabolt feldolgozása.
- **Beépített ütemező szolgáltatás**: pár kattintással, külön előfizetéssel.

### Frissítések és összefésülés
- **Egyedi azonosító (Unique Identifier)**: SKU, külső ID vagy bármilyen stabil mező alapján párosít.
- **Szabályok**: meglévők frissítése, újak felvétele, és a forrásból hiányzók törlése igény szerint.

### Haladó transzformációk
- **Inline PHP**: futás közben átalakíthatod az értékeket (pl. „YES/NO” → „1/0”, dátumformátumok, feltételes logika).
- **Egyedi XPath és hookok**: fejlesztőbarát, összetett esetekhez.

### WP‑CLI integráció
- Parancssorból futtathatod és szkriptelheted az importokat (CI/CD, távoli ütemezés, gyorsabb feldolgozás).

```
# Importok listázása
wp all-import list

# Konkrét import futtatása ID alapján
wp all-import run --id=123

# Naplózás nélkül, kényszerített futás
wp all-import run --id=123 --force --quiet
```

### WooCommerce támogatás (Add-On Pro)
- **Termékek és variációk**: SKU/Parent SKU, cím vagy XML gyermekelemek alapján csoportosít.
- **Attribútumok, ár, készlet, képek/galériák**: teljes körű szinkron támogatás.
- **Komplex esetek**: több attribútum, eltérő változatsémák, képcsatolás variációnként.

### Hivatalos add-onok
- **ACF, Meta Box, JetEngine**: natív mezőtérképezés (pl. repeater, kapcsolatok).
- **Gravity Forms**: bejegyzések/leadek importja.
- **Users**: felhasználók, jelszavak, szerepkörök, user meta és kapcsolatok importja.

## Gyakorlati példák

### 1) Beszállítói termékfeed WooCommerce-be
- Forrás: CSV/Excel/URL-ről frissülő feed.
- Unique ID: SKU.
- Mapping: cím, leírás, ár, készlet, kategória, képek (kiemelt + galéria).
- Ütemezés: napi frissítés; hiányzók törlése bekapcsolva, ár/készlet frissítés engedélyezve.

### 2) Ingatlanportál migráció
- Forrás: XML változó struktúrával.
- Mapping: egyedi CPT (ingatlan), taxonómiák (város, típus), egyedi mezők (ár, alapterület).
- Képek: külső URL-ek letöltése; hibás képnél a bejegyzés piszkozat marad.
- Inline PHP: ár normalizálása, mértékegységek egységesítése.

### 3) Felhasználók betöltése
- Forrás: CSV.
- Mapping: e‑mail, megjelenített név, role, jelszó, user meta (pl. számlázási adatok).
- Szabályok: meglévők frissítése e‑mail alapján; új felhasználók létrehozása.

## Előnyök és értékajánlat

- **Időmegtakarítás**: tömeges importok és frissítések automatizálva.
- **Rugalmasság**: szinte bármilyen forrásból és struktúrából dolgozik.
- **Adatminőség**: transzformációk, feltételes logika, duplikáció elkerülése.
- **Skálázhatóság**: nagy fájlok, szakaszos feldolgozás, WP‑CLI.
- **Ökoszisztéma**: WooCommerce és fejlett mezőkezelés add-onokkal.

## Kinek ajánlott?

- **Webáruházak és e‑kereskedelmi csapatok**: termék- és készletszinkron, affiliate feedek.
- **Ügynökségek és fejlesztők**: migrációk, integrációk, egyedi mezők és CPT-k.
- **Adatportálok és listázó oldalak**: ingatlan/állás/cégkatalógus tartalmak tömeges kezelése.
- **Rendszergazdák/DevOps**: ütemezett folyamatok, WP‑CLI, megbízható frissítések.

## Tippek és best practice-ek

- **Válassz stabil Unique ID-t**: pl. SKU vagy külső azonosító. Ez az alapja a pontos frissítésnek.
- **Kezdd kis mintával**: ellenőrizd a mappinget és a képeket, csak utána futtasd az egészet.
- **Használj ütemezést**: rendszeres feedfrissítéshez cron vagy a beépített ütemező szolgáltatás.
- **Szakaszos feldolgozás**: nagy importnál csökkentsd a batch méretet, kerüld a timeoutot.
- **Inline PHP-val normalizálj**: értékek, formátumok, kategóriatérképek egységesítéséhez.

## Összegzés

A WP All Import Pro akkor a legerősebb, amikor vegyes minőségű, változó forrásadatból kell megbízhatóan, ismételhetően és automatizáltan WordPress-tartalmat előállítanod. A rugalmas drag-and-drop mapping, a képek kezelése, az ütemezett frissítések, a WP‑CLI és az add-on ökoszisztéma együtt olyan importfolyamatot adnak a kezedbe, amellyel összetett migrációk és napi szintű szinkronok is biztonságosan megoldhatók. Ha rendszeresen dolgozol adatfeedekkel vagy nagy tömegű tartalommal, ez a bővítmény pontosan neked való.