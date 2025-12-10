---
title: "MainWP Pro Reports Extension"
description: "Teljesen testreszabható, márkázott ügyfélriportok készítése és automatizált kiküldése a MainWP Dashboardból."
sidebar_label: "MainWP Pro Reports Extension"
---

## Mi ez és milyen problémát old meg?

A MainWP Pro Reports egy olyan kiegészítő, amellyel ügynökségként vagy karbantartóként átlátható, márkázott ügyfélriportokat készíthetsz. Láthatóvá teszi mindazt, amin dolgozol: frissítések, biztonság, uptime, analitika, e-kereskedelem, teljesítmény és még sok más. A cél, hogy az ügyfeled pontosan értse, milyen értéket kap, és ne kelljen órákat töltened manuális összesítésekkel.

## Hogyan működik?

- A riportok a MainWP Dashboardból készülnek és onnan küldhetők.
- Minden kezelt webhelyen futnia kell a MainWP Child és a naplózást végző MainWP Child Reports bővítményeknek (ez gyűjti a frissítések, bejegyzések, felhasználók stb. eseményeit).
- A bővítmény sablonokkal, tokenekkel és integrációkkal dolgozik. A tokenek dinamikusan töltik fel a riport szakaszait az adott időszak adataival.
- A jelentések PDF-ben vagy akár kizárólag HTML e-mailként is kiküldhetők, ütemezve vagy azonnal.
- A generált PDF-ek a Dashboard szerveren tárolódnak, így visszakereshetők és archiválhatók.

Például:
```
Riport sablonok: /wp-content/uploads/mainwp/report-templates/
Generált PDF-ek: /wp-content/uploads/mainwp_pro_reports/
```

A riportadatok REST API-n lekérhetők (külső rendszerekbe is beépíthetők), de a PDF generálása nem API-funkció. Gondoskodj róla, hogy a WordPress REST API elérhető legyen.

## Fő funkciók, érthetően

### Teljesen testreszabható sablonok
PHP/HTML/CSS alapú sablonokkal a teljes kinézetet és tartalmi sorrendet a saját márkádra szabhatod. A sablonokat a feltöltések mappájába másolva frissítésbiztosan karbantarthatod. Külön mezők állnak rendelkezésre fejléc, bevezető és záró szöveghez.

### Tokenek és integrált adatok
Százával érhetők el tokenek a kliens- és időszak-információtól a frissítéseken, biztonsági eseményeken és uptime statisztikákon át az analitikáig, teljesítmény- és e-kereskedelmi adatokig. Készíthetsz saját tokeneket is. A tokenek a PDF-ben és az e-mail törzsében is használhatók.

Példa:
```
Címzett: [client.email]
Időszak: [date.range]
PDF fájlnév: [site.name]-riport-[date.range].pdf
```

### Ütemezett és egyszeri küldés
- Egyszeri: tetszőleges dátumtartományra.
- Ismétlődő: napi/heti/havi ütemezéssel, megadott küldési nappal.
A munkafolyamatban van előnézet, piszkozat mentés és azonnali küldés. Az ütemezés WordPress CRON alapon fut.

### Testreszabott e-mail kézbesítés
Több címzett és BCC mező, tokenek a tárgyban és tartalomban, testreszabott fájlnév. Dönthetsz úgy is, hogy csak HTML e-mailt küldesz PDF nélkül.

### Márkázás és többnyelvűség
Logó, színek, betűtípusok és sablonszövegek mind testreszabhatók. A táblázatfejlécek és címsorok fordíthatók, így többnyelvű riportokat is küldhetsz.

### REST API és fejlesztői eszközök
A riportadatok REST API-n lekérhetők saját pipeline-okhoz (PDF generálás nélkül). Filterek és hookok segítenek egyedi tokenek és kimenetek kialakításában, haladó sablonlogikával.

## Milyen adatokat tudsz bevonni?

- WordPress események: mag-, bővítmény- és sablonfrissítések, telepítések/eltávolítások, bejegyzések, oldalak, felhasználók, kommentek (Child Reports napló).
- Biztonság: például Sucuri, Wordfence, Solid Security, Jetpack Protect/Scan.
- Uptime: válaszidők, leállások, rendelkezésre állás, grafikonok.
- Analitika és keresés: Google Analytics, Matomo, Fathom, Search Console.
- Teljesítmény: Lighthouse pontszámok és auditok.
- Domain/SSL: lejárati dátumok, állapot.
- E-kereskedelem: WooCommerce rendelésérték, top termékek, készlet.
- Feladatok: például Atarim feladatstatisztikák.

Megjegyzés: az egyes szekciókhoz a megfelelő MainWP kiegészítők és/vagy külső szolgáltatások szükségesek.

## Gyakorlati példák

- Havi ügyfélriport ügynökségnek: automatizált összefoglaló frissítésekről, biztonságról, uptime-ról és analitikáról, PDF melléklettel, saját márkával.
- WooCommerce bolt tulajdonosának: hónap végi értékesítési összeg, top termékek, készletfigyelmeztetések, kiegészítve teljesítmény- és biztonsági képpel.
- SLA riport menedzselt szolgáltatásnál: uptime százalékok és incidensek, válaszidő trendek, Lighthouse pontszámváltozás.
- Projektlezáró beszámoló: adott dátumtartományra az összes fontos változás és elvégzett feladat, PDF archiválással.

## Előnyök és értékajánlat

- Látható érték: az ügyfél pontosan látja, min dolgozol.
- Időmegtakarítás: sablonok + ütemezés → minimális manuális munka.
- Egységesítés: szétszórt adatok egy dokumentumban.
- Márkázás: profi, konzisztens megjelenés több nyelven is.
- Visszakereshetőség: a PDF-ek központilag tárolódnak a Dashboardon.

## Kinek ajánlott?

- Webes ügynökségeknek és menedzselt WordPress szolgáltatóknak, akik rendszeresen riportolnak.
- Szabadúszóknak, akiknek fontos a látható, bizonyíték-alapú ügyfélkommunikáció.
- DevOps/IT csapatoknak, akik SLA-t vagy rendelkezésre állási vállalást igazolnak.
- Olyan csapatoknak, akik belső BI/riport pipeline-t építenek és REST API-n keresztül adatot gyűjtenének.

## Telepítés és első lépések

1. Telepítsd a kiegészítőt a MainWP Dashboardra.
2. Minden kezelt webhelyen legyen aktív a MainWP Child és a MainWP Child Reports.
3. Szinkronizálj, majd válassz egy riport sablont (vagy készíts sajátot).
4. Állítsd be az időszakot vagy az ütemezést (napi/heti/havi).
5. Válaszd ki a szekciókat, add meg a címzetteket, tárgyat és a PDF fájlnevet tokenekkel.
6. Nézd meg az előnézetet, ments piszkozatot, majd küldd a riportot (PDF-fel vagy csak HTML e-mailként).

Fontos megjegyzések:
- A Child Reports új telepítés után csak a további aktivitást naplózza; kell némi idő, mire elég adat gyűlik.
- Bizonyos szekciókhoz további MainWP kiegészítők és külső integrációk szükségesek.
- Az ütemezés WordPress CRON-on fut; gondoskodj róla, hogy a CRON megbízhatóan működjön.
- A REST API-ból a riportadatok lekérhetők, de a PDF generálása nem elérhető API-n.