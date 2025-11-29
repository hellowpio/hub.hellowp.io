---
title: "WP All Import - WooCommerce Import Add-On Pro"
description: "WooCommerce-termékek profi, tömeges importja CSV/XML/Excel/Sheets forrásból, variációkkal, képekkel, ütemezett frissítéssel és fejlett szinkronnal."
sidebar_label: "WP All Import - WooCommerce Import Add-On Pro"
---

## Mi ez és mit old meg?

A WooCommerce Import Add-On Pro a WP All Import professzionális kiegészítője, amellyel nagyméretű termékkatalógusokat tudsz gyorsan és megbízhatóan beolvasni WooCommerce-be. Megoldja a kézi termékfelvitel időigényét, a beszállítói fájlok összevisszaságát, a variálható termékek maceráját, és a napi/órás ár- és készletfrissítések automatizálását – duplikáció nélkül, kontrolláltan.

## Hogyan működik röviden?

1. Feltöltöd vagy megadod a forrásfájlt (CSV, XML, Excel, Google Sheets, FTP/SFTP).
2. A varázslóban drag-and-drop módon hozzárendeled a forrásmezőket a WooCommerce mezőkhöz.
3. Beállítod az egyedi azonosítót (SKU, ID vagy bármely egyedi mező) az illesztéshez.
4. Meghatározod, mit frissítsen újrafuttatáskor (pl. csak ár és készlet).
5. Opcionálisan ütemezed a futást cron-nal vagy az automatikus ütemező szolgáltatással.
6. Az import nagy fájloknál darabolva fut, hibatűrő, visszafutható, naplózott.

## Fő funkciók, érthetően

### Rugalmas források és adatstruktúra
- Kezeli a CSV, XML, Excel és Google Sheets fájlokat kötött oszlopnevek nélkül.
- Infók bárhonnan: feltöltés, URL, FTP/SFTP, jelszavas/HTTP auth is.
- Nagy állományok darabolt feldolgozása, folytatás időtúllépés után.

### Teljes WooCommerce terméktámogatás
- **Egyszerű**, **variálható**, **csoportos (grouped)** és **külső/affiliate** termékek.
- Előfizetés típusok egyszerű eseteinek támogatása a megfelelő bővítményekkel együtt.

### Variációk és attribútumok, okosan
- Variációk létrehozása struktúraminták alapján akár XML-ből is.
- Attribútumok és variációk tömeges összeillesztése, attribútum-hierarchiák építése.
- Variációnkénti ár, készlet, kép és SKU kezelés.

### Képek és galériák
- Főképek, galériák és variációképek importja URL-ről vagy fájlból.
- Képadatok (cím, leírás, alt) kezelése, többszörös képtársítás.

### Kategóriák, címkék, taxonómiák
- Termékkategóriák és címkék automatikus létrehozása.
- Hierarchiák felépítése és egyedi taxonómiák kezelése.

### Frissítés és szinkron duplikáció nélkül
- **Egyedi azonosító** alapján párosítja a rekordokat (pl. SKU), így nem duplikál.
- Mezőszintű frissítés: pontosan megadhatod, mit frissítsen újrafutáskor (ár, készlet, képek stb.).
- Hiányzó termékek törlése az aktuális feed szerint, készlet/ár szinkron eszközökkel.

### Ütemezés és automatizálás
- Két út: saját cron (trigger és processing végpont) vagy beépített automatikus ütemező.
- Visszajelzés a futás állapotáról, naplózás, hibakezelés.

### Migráció és újrakonfigurálás
- Export-bundle + import: WooCommerce-bolt költöztetés átvihető beállításokkal.
- Új környezetben gyors újrafuttatás, minimalizált leállással.

### Teljesítmény és megbízhatóság
- Több százezres tételekhez optimalizált feldolgozás.
- Részletes naplók, újrafuttatás és részimport lehetőségek.

### Testreszabhatóság fejlesztőknek
- Saját PHP-függvények az adattranszformációhoz.
- Bővíthető API és add-on keretrendszer.

Példa egy árnormalizáló függvényre és használatára:
```
function normalize_price($raw) {
  $raw = str_replace([' ', 'Ft', 'HUF'], '', $raw);
  $raw = str_replace(',', '.', $raw);
  return floatval(preg_replace('/[^\d\.]/', '', $raw));
}
// Használat a mezőtérképben:
// [normalize_price({price[1]})]
```

## Gyakorlati példák

- Beszállítói feed napi frissítése: reggel 6-kor fut, frissíti csak az árat és készletet; új termékeket felvesz, kikerülteket archivál vagy töröl.
- Variálható ruházat: méret/szín attribútumokból variációk képződnek, variációnként eltérő ár és készlet.
- Google Sheets alapú munkafolyamat: a csapat táblázatban módosítja az árakat; az import ütemezve fut és élesíti a változásokat.
- Költöztetés új webshopra: export-bundle a forrásról, betöltés a célon, azonosítók megőrzése, képek és kategóriák átadásával.

## Előnyök és értékajánlat

- Időmegtakarítás: tömeges import pár kattintással, kézi felvitel helyett.
- Pontosság: egyedi azonosítóval stabil illesztés, nincs duplikáció.
- Rugalmasság: bármilyen forrásstruktúrát megeszik, fejleszthető PHP-val.
- Skálázhatóság: nagy katalógusokhoz és gyakori frissítésekhez tervezve.
- Üzembiztonság: naplók, visszafuttatás, részimport – kontroll a teljes folyamat felett.

## Kinek ajánlott?

- Webshop üzemeltetőknek, akik rendszeresen kapnak beszállítói CSV/XML feedeket.
- Ügynökségeknek, akik több WooCommerce áruházat tartanak karban és migrálnak.
- Nagy katalógusok tulajdonosainak, variálható termékekkel és gyakori árszinkronnal.
- Olyan csapatoknak, akik táblázatból szeretnék kezelni az árat/készletet és időzítve frissíteni.

## Követelmények és csomagok

- Szükséges: WooCommerce és a WP All Import telepítése. A WooCommerce Add-On a WP All Import varázsló 4. lépésében jelenik meg, itt éred el a Woo-mezők drag-and-drop összerendelését.
- A Pro kiadás adja a fejlett képességek döntő részét: mély variációkezelés, grouped/affiliate termékek, URL/FTP import, ütemezés, egyedi PHP és prémium támogatás.
- A WooCommerce-funkciók a WP All Import Pro csomagjaiban érhetők el; az aktuális csomagokat és feltételeket mindig az aktuális hivatalos információk alapján ellenőrizd.

## Bevált gyakorlatok

- Válassz stabil **egyedi azonosítót** (pl. SKU), és ne változtasd az idő során.
- Használd a mezőszintű frissítést: csak azt frissítsd, amit kell (pl. ár/készlet), így gyorsabb és biztonságosabb.
- Képeknél egységes, elérhető útvonalakat adj; variációkhoz külön képeket rendelj.
- Nagy import előtt futtass **tesztimportot** pár tétellel, ellenőrizd a kategóriákat és attribútumokat.
- Automatizálásnál állíts be értesítést és ellenőrizd rendszeresen a naplókat.

Ezzel a bővítménnyel gyorsan, kontrolláltan és skálázhatóan tudod WooCommerce-termékeidet importálni és naprakészen tartani – akár összetett variációkkal és több forrásból származó adatokkal is.