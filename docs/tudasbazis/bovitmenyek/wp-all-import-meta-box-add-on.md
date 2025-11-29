---
title: "WP All Import - Meta Box Add-On"
description: "Hivatalos kiegészítő, amellyel a WP All Import drag-and-drop felületén bármely Meta Box mezőbe importálhatsz adatokat CSV/XML/Excel forrásokból."
sidebar_label: "WP All Import - Meta Box Add-On"
---

## Mi ez és milyen problémát old meg?

A WP All Import – Meta Box Add‑On a WP All Import hivatalos kiegészítője, amely közvetlen hidat teremt a forrásadatok és a Meta Box egyedi mezői között. Ha CSV, XML vagy Excel fájlokból szeretnél komplex, Meta Box‑al definiált mezőkbe adatot tölteni (akár klónozható csoportokba, galériákba, WYSIWYG vagy dátum mezőkbe), ez az add‑on egységes, drag‑and‑drop felülettel és teljes mezőtámogatással oldja meg.

A fő cél: professzionális, skálázható, ismételhető import folyamattal elkerülni a kézi adatfelvitelt, a formátumkülönbségekből adódó hibákat és a bonyolult mezők kezelési nehézségeit.

## Követelmények és kompatibilitás

- Szükséges: WP All Import Pro, a Meta Box bővítmény, és a Meta Box Add‑On.
- A Meta Box mezőcsoportokat hozd létre és rendeld a cél bejegyzéstípushoz az import előtt, különben az import képernyő nem fogja látni a mezőket.
- Exporthoz külön kiegészítő érhető el, amely a klónozható/csoport mezőket is szabályos formában kezeli.

## Hogyan működik röviden?

1. Indíts új importot, tölts fel forrásfájlt (helyi, URL, SFTP).
2. Nézd át a forrásstruktúrát, szükség esetén szűrj XPath‑szal.
3. A mapping képernyőn a Meta Box Add‑On szekcióban húzd a jobb oldali adatelemeket a bal oldali Meta Box mezőkhöz. Használhatsz összefűzést és inline PHP‑t.
4. Állíts be egyedi azonosítót (Unique Identifier), ütemezést és frissítési szabályokat.
5. Futtasd az importot, ellenőrizd az eredményt a cél bejegyzések Meta Box mezőiben.

## Fő funkciók – mit csinálnak pontosan?

- **Teljes Meta Box mezőtámogatás**: Szinte minden mezőtípust (alap, haladó, média, WYSIWYG, dátum/óra, kapcsolók, választók) közvetlenül térképezhetsz. A felületen minden célmező megjelenik, így egyértelmű, hova kerül az adat.
- **Rugalmas forráskezelés (CSV/XML/Excel, XPath)**: Kezeld a rendezetlen feedeket is; XPath‑szal pontosan kiválaszthatod és átalakíthatod a szükséges adatokat.
- **Inline PHP és fejlesztői hookok**: Import közben tisztíthatsz, formázhatsz vagy összefűzhetsz értékeket, illetve saját logikát illeszthetsz be.
- **Ütemezés és ismételt futások**: Automatikus frissítések, cron alapú ütemezés. Az egyedi azonosító alapján a rendszer felismeri, mit kell létrehozni, frissíteni vagy kihagyni.
- **Klónozható/ismétlődő és csoport mezők**: Fixed és Variable módokkal kezelheted a többször előforduló rekordokat; almezőnkénti mapping támogatott.
- **Média és feltöltések**: Képek, galériák, fájlok importja URL‑ekből. Egy vagy több elem feltöltése, a megfelelő Meta Box mezőtípushoz illesztve.
- **Címke–érték választós mezők**: Választhatsz, hogy a címkét vagy az értéket importálod; gyakorlatban a “value” használata stabilabb.

## Gyakorlati példák

- **Ingatlan migráció**: Régi adatbázisból importálod a címet, árat, paramétereket, galériát. A “Galéria” Meta Box képeihez több URL‑t adsz meg (soronként vagy választójellel), a rendszer letölti és hozzárendeli őket.
- **Autó katalógus frissítés**: Napi feed VIN azonosítóval. Beállítod a VIN‑t egyedi azonosítónak, a futás frissíti a meglévő rekordok specifikációit, hozzáadja az új modelleket, és archiválja a kiesőket.
- **Könyv‑lista csoport/ismétlődő mezőkkel**: A “Szerzők” klónozható csoportban név és szerep almező van. Fixed módban három szerzőt adsz meg, mindegyiknél külön név/szerep mappinggel.

## Inline PHP példa

Adj hozzá egy tisztító függvényt (pl. functions.php):

```php
function normalize_price($val) {
  $n = preg_replace('/\D+/', '', (string) $val);
  return $n === '' ? '' : (int) $n;
}
```

Használat a mappingben:

```
[normalize_price({ár})]
```

Ezzel Az “ár” mezőből eltávolítod a pénznem jeleket és szóközöket.

## Jó gyakorlatok

- A Meta Box mezőcsoportokat előre hozd létre és rendeld a cél bejegyzéstípushoz.
- Választós mezőknél lehetőleg az értéket (“value”) importáld, ne a címkét.
- Klónozható/csoport mezőknél válaszd ki a megfelelő módot (Fixed/Variable), és almezőnként térképezz.
- Több kép vagy fájl esetén használj soronkénti vagy választójel‑alapú felsorolást (pl. |), a beállításoknak megfelelően.
- Tervezd meg az import/export struktúrát úgy, hogy körkörös migráció esetén visszaállítható legyen.
- Állíts be stabil egyedi azonosítót, és tesztelj kis mintán, mielőtt éles futást indítasz.

## Előnyök és értékajánlat

- **Időmegtakarítás**: Nagy adatállományok percek alatt betölthetők és frissíthetők.
- **Kevesebb hiba**: Drag‑and‑drop mapping, előnézet, validálható mezők.
- **Rugalmasság**: Akár rendezetlen feedek, összetett mezők, egyedi üzleti logika is kezelhető.
- **Automatizálás**: Ütemezett frissítések, ismétlődő importok, fejlesztői bővíthetőség.

## Kinek ajánlott?

- **Ügynökségeknek és fejlesztőknek**: Komplett migrációk, egyedi projektek, komplex adattípusok kezelése.
- **Webshopoknak és katalógusoknak**: Rendszeres készlet‑ és árfrissítések, média import.
- **Tartalomkezelőknek/operátoroknak**: Gyors tömeges módosítások, CSV‑ből való feltöltés programozás nélkül.
- **Adatmérnököknek**: XPath és PHP támogatás heterogén forrásokhoz.

Ezzel a kiegészítővel pontosan azt kapod, amire a Meta Box mezőid profi, skálázható és biztonságos importjához szükséged van: teljes mezőtámogatás, átlátható mapping, rugalmas átalakítás és megbízható automatizálás. Ha Meta Boxot használsz, és adatot kell bejuttatnod – egyszer vagy rendszeresen –, ez az eszköz a legrövidebb út a kész megoldásig.