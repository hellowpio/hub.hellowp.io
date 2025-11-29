---
title: "WP All Import - JetEngine Add-On"
description: "JetEngine mezők és CCT-k importja/exportja WP All Import/Export környezetben – repeaterek, galériák, relációk és automatizálás támogatással."
sidebar_label: "WP All Import - JetEngine Add-On"
---

## Mi ez és milyen problémát old meg?

A **WP All Import – JetEngine Add‑On** a WP All Import/Export hivatalos kiegészítője, amely lehetővé teszi, hogy a **JetEngine** egyedi mezőibe és **CCT** tartalmakba adatot importálj és onnan exportálj. Megoldja a JetEngine egyik legnagyobb hiányosságát: a nagy mennyiségű, **összetett adatmodellek** (Repeater, Gallery, Relations, CCT) megbízható és automatizálható mozgatását. Így bármilyen heterogén forrásból érkező **CSV/Excel/XML/JSON** állományt be tudsz illeszteni JetEngine‑alapú WordPress struktúrákba, illetve onnan ki tudsz exportálni tömeges szerkesztéshez vagy migráláshoz.

Megjegyzés a terminológiáról: a „JetEngine Add‑On” kifejezés vonatkozhat
- a WP All Import/Export csapat hivatalos JetEngine integrációjára, és
- a közösségi, harmadik fél által készített „Coding Chicken – JetEngine Importer” bővítményre.
Az alábbiakban ezeket külön nevezzük meg.

## Hogyan működik röviden?

- Importnál kiválasztod a cél **post típust vagy CCT‑t**, betallózod a forrásfájlt (vagy URL‑t), majd **drag‑and‑drop** módszerrel leképezed a JetEngine mezőket. Szükség esetén **inline PHP** transzformációkkal tisztítod/átalakítod az adatokat. Ezután futtatod vagy **ütemezed** az importot.
- Exportnál összeállítasz egy egyedi **CSV/XML/JSON sémát**, a JetEngine mezőket szintén drag‑and‑drop módon választod ki, és opcionálisan transzformálod az értékeket. Az exportot vissza is importálhatod **tömeges szerkesztés** céljából.

## Fő funkciók (hivatalos JetEngine Add‑On)

- **JetEngine mezők teljes köre**: támogatja a Text, Textarea, Number, WYSIWYG, HTML, Date/Time/Datetime, Colorpicker, Switcher/Checkbox/Radio/Select, Icon Picker, Media, Gallery, **Repeater**, Maps és **Relations** mezőket. A repeaterek és galériák elemeinek strukturált feltöltése drag‑and‑drop-al történik, a bonyolult mezők belső szerkezetét az add‑on kezeli.
- **CCT import és export**: közvetlenül a **Custom Content Types** tábláiba importálhatsz és onnan exportálhatsz. Ideális nagy, „nem poszt” jellegű adatbázisokhoz (pl. katalógusok, készlet, ügyféladatok).
- **Relációk kezelése**: felvehetsz **kapcsolatokat** (Relations) entitások között, például ingatlan–ügynök, termék–gyártó, esemény–helyszín. A kapcsolatokat azonosító, slug vagy egyedi kulcs alapján is összepárosíthatod.
- **Univerzális fájlformátum-támogatás**: **CSV/Excel/XML/JSON** források, illetve távoli URL-ek is használhatók. A forrás szerkezete nem kell, hogy tökéletesen illeszkedjen: a leképezés oldja meg a különbségeket.
- **Haladó testreszabás**: **inline PHP** és akció/filter horgok segítségével futás közben alakíthatod az adatokat. Például valuta‑jelek eltávolítása, formátumváltás, tömbök szétbontása.
  ```
  // Egyszerű példa: ár mező tisztítása
  return preg_replace('/[^\d\.]/', '', $value);
  ```
- **Automatizálás és skálázhatóság**: épített ütemezővel vagy saját **cron**-nal rendszeres frissítéseket futtathatsz nagy adatkészleteken. Többnyelvű oldalaknál **WPML‑kompatibilis** import valósítható meg.
- **Teljes körű export**: JetEngine mezők drag‑and‑drop exportja, egyedi séma kialakítása, **PHP-alapú transzformáció**, majd visszaimport a gyors tömeges szerkesztéshez vagy migráláshoz.

## Harmadik fél: Coding Chicken – JetEngine Importer

- **Ingyenes**: alap JetEngine mezők importja bejegyzésekhez, felhasználókhoz, taxonómiákhoz.
- **Pro csomag**: kiterjesztett támogatás a **Repeater**, **Media**, **Gallery**, **Map**, **Posts** és **Relations** mezőkhöz. Ismert korlát, hogy **CCT** csak akkor kezelhető, ha társul hozzá WordPress post típus.

## Gyakorlati példák

- **Ingatlanportál**: külső feedből érkező lakás‑/házhirdetések importja egy JetEngine **CCT**‑be. A tulajdonságok **repeaterben**, a képek **galériában**, a koordináták **maps** mezőben, az ügynökhöz pedig **relation** kapcsolattal kötöd. Az importot napi ütemezéssel futtatod, így az állomány mindig naprakész.
- **Piactér/katalógus**: termékek tömeges betöltése, képgalériával, attribútumokkal (repeater), gyártóhoz vagy eladóhoz kapcsolt **relációval**. Exporttal gyors „bulk edit”, majd visszaimport.
- **Állásportál**: JSON vagy XML feedből állások importja külön nyelvekre **WPML** segítségével; kategóriák és címkék automatizált létrehozása, lejárati dátumok kezelése.

## Előnyök és értékajánlat

- **Időmegtakarítás**: kézi adatfelvitel helyett automatizált import/export, akár több tízezer rekord esetén.
- **Kevesebb hiba**: a leképezés és validáció csökkenti a kézi hibákat; komplex mezők is konzisztensen tölthetők.
- **Rugalmasság**: bármilyen forrásból érkező, eltérő felépítésű adatot be tudsz olvasni és átalakítani.
- **Skálázhatóság**: ütemezés, cron és részletekben futtatás nagy adatállományokra optimalizálva.
- **Kódmentes, de fejleszthető**: drag‑and‑drop a legtöbb feladatra, ugyanakkor **PHP**‑val bármit finomhangolhatsz.

## Célközönség

- **Ügynökségek és fejlesztők**: komplex JetEngine alapú projekteknél adatmozgatás, integrációk, migrációk.
- **Tartalom‑/adatgazdák**: katalógusok, piacterek, ingatlanportálok, álláskereső oldalak rendszeres frissítése.
- **Marketing és operáció**: export–szerkesztés–visszaimport folyamatokkal gyors tömeges módosítás.

## Előfeltételek és kompatibilitás

- Hivatalos integrációhoz import esetén **WP All Import Pro + JetEngine Import Add‑On**, exporthoz **WP All Export Pro + JetEngine Export Add‑On** szükséges. A JetEngine mezőtípusok széles köre támogatott.
- A **Coding Chicken – JetEngine Importer** a WP All Importtal együttműködve működik; a Pro csomag bővíti a mezőtámogatást, CCT esetén a post‑típushoz kötött változatokra korlátozva.

## Gyors kezdés (import – hivatalos)

1. Menj az All Import › New Import menüpontra és válaszd ki a cél **post típust vagy CCT‑t**.
2. Add meg a forrás **CSV/Excel/XML/JSON** fájlt vagy URL‑t.
3. A leképező felületen húzd rá a forrás mezőket a megfelelő **JetEngine mezőkre**.
4. Szükség esetén adj meg **inline PHP** transzformációt (pl. ár, dátum, formátum javítása).
5. Állíts be **egyedi egyezést** (unique key) az azonos rekordok frissítéséhez.
6. Futtasd az importot, vagy **ütemezd** rendszeres futásra (beépített ütemező vagy cron).

Ezzel a bővítménnyel pontosan azt kapod, amire egy JetEngine‑alapú site adatkezeléséhez szükséged van: megbízható, skálázható, fejleszthető import‑ és exportfolyamatot, amely a legegyszerűbb mezőktől a legösszetettebb relációkig mindent lefed. Ha nagy, összetett adatkészletekkel dolgozol, ez a megoldás gyakorlatilag nélkülözhetetlen.