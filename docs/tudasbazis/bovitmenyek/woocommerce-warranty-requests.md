---
title: "WooCommerce Warranty Requests"
description: "Hivatalos WooCommerce-bővítmény a garanciák, visszaküldések és cserék (RMA) teljes körű, önkiszolgáló és adminisztrált kezelésére."
sidebar_label: "WooCommerce Warranty Requests"
---

## Mi ez és milyen problémát old meg?

A WooCommerce Warranty Requests (mai nevén: Returns and Warranty Requests for WooCommerce) egy hivatalos, fizetős kiegészítő, amellyel a teljes RMA-folyamatot a webáruházadon belül, egységesen kezelheted. Leveszi a válladról a rendezetlen e-mailek, táblázatok és ad hoc ügyintézés terhét: minden garanciális visszaküldés és cserekérelem egy központi felületen, átlátható státuszokkal, automatizált értesítésekkel fut végig.

## Hogyan működik dióhéjban?

1. Beállítod a garanciafeltételeket termékszinten (alapértelmezett garancia is megadható).
2. A vevő a saját fiókjából indíthat kérelmet, ha a garancia érvényes.
3. Az admin egy központi RMA-listában kezeli a státuszokat és a kommunikációt.
4. Lezáráskor visszaküldést, cserét vagy egyéb megoldást rögzítesz; a rendszer minden lépésről értesít.

## Fő funkciók, érthetően

- **Központi RMA-kezelőfelület**  
  Minden garanciális, visszaküldési és cserekérelem egy helyen, szűrőkkel, keresővel. Létrehozhatsz saját státuszokat (pl. Beérkezett, Vizsgálat alatt, Jóváhagyva, Csere folyamatban), és ezek mentén szervezheted a belső folyamatot.

- **Garancia hozzárendelése termékhez/variációhoz**  
  Három mód: nincs garancia, a termék tartalmazza (élettartam vagy időben korlátozott), illetve **feláras add-on garancia**. Ugyanarra a termékre több eltérő add-on opciót és díjat is megadhatsz (például 12/24/36 hónap különböző árakon). Beállíthatsz alapértelmezett garanciát az új termékekhez.

- **Önkiszolgáló kérelemindítás**  
  A vásárló a Fiókom > Rendelések nézetből indíthat kérelmet, csak akkor, ha a rendelés állapota és a garancia érvényessége ezt lehetővé teszi. Az űrlap testreszabható, így pontosan azt kéred be, amire szükséged van.

- **Testreszabható RMA-kód és státuszok**  
  Meghatározhatod az RMA-azonosítók formátumát/hosszát, és saját státuszhálóval irányíthatod az ügyintézést. Ez segít a belső SLA-k és felelősségi körök betartásában.

- **Automatikus e-mail értesítések**  
  Minden fontos státuszváltáshoz rendelhetsz értesítést a vevőnek és/vagy az adminnak. A tárgy és a tartalom testre szabható, változókkal (például rendelésazonosító, RMA-kód, terméknév), így személyre szabott és informatív kommunikációt küldhetsz.

- **Testreszabható kéreleműrlap**  
  Saját mezőket adhatsz hozzá (egysoros, többsoros, legördülő), kérhetsz **fájl- és képfeltöltést** a hiba dokumentálásához. Így az első beküldéskor megkapod a lényeges információkat.

- **Szállítás és nyomkövetés**  
  Feltölthetsz visszaküldési címkét a vevőnek, bekérheted a vevői visszaküldési követőkódot, és rögzítheted a csere-küldemény tracking adatait. Minden adat egy helyen, visszakereshetően.

- **Adminisztratív kérelemindítás**  
  Telefonos vagy személyes megkeresés esetén te is létrehozhatsz RMA-t az adminból, így az offline esetek sem maradnak nyilvántartáson kívül.

- **Rövidkód és tömeges kezelés**  
  Általános visszaküldési űrlapot szúrhatsz be bármely oldalra rövidkóddal, és CSV-importtal tömegesen frissítheted a garanciaadatokat nagy katalógusoknál.

```text
[warranty_return_form]
```

### Kulcsfelületek az adminban

- **Warranties > Settings**: alapbeállítások, űrlapmezők, értesítések, alapértelmezett garancia.  
- **RMA-lista**: összes kérelem, szűrés, státuszok, e-mail sablonok.  
- **Product data > Warranty**: garanciatípus, időtartam, add-on opciók és díjak.

## Gyakorlati példák

- **Elektronikai webáruház**: A laptopok 24 hónap beépített garanciával mennek, plusz 12/24 hónap feláras kiterjesztést kínálsz. A vevő 8 hónap után képet tölt fel a hibáról, a rendszer RMA-kódot ad, te pedig „Vizsgálat alatt” státuszra teszed, visszaküldési címkét küldesz, majd „Csere úton” státuszban rögzíted a trackinget. A vevő minden lépésről értesítést kap.

- **Divat és ruházat**: A vevők az űrlapon megadják a méretproblémát, képet csatolnak a termékről. Te az „Ellenőrzés” státusz után jóváhagyod a cserét, és kuponkódot küldesz a naprakész készletezéshez igazított megoldásként.

- **B2B alkatrész-kereskedelem**: Telefonon beérkező hibabejelentéseket az admin hoz létre RMA-ként, így a teljes folyamat és kommunikáció auditálható és visszakereshető.

## Előnyök és értékajánlat

- **Kevesebb manuális munka**: Automatikus értesítések, testreszabott űrlapok, központi státuszkezelés.  
- **Átláthatóság**: Minden kérelem egy helyen, naplózott lépésekkel és nyomkövetéssel.  
- **Jobb ügyfélélmény**: Önkiszolgáló indítás, egyértelmű státuszok, proaktív kommunikáció.  
- **Bevételi lehetőség**: Több szintű, feláras garanciák értékesítése termékenként.  
- **Skálázhatóság**: CSV-import és sablonok nagy katalógusokra, csapatokra szabva.

## Kinek ajánlott?

- **Közepes és nagy forgalmú webáruházaknak**, ahol sok a visszaküldés/garanciális ügy, és fontos az SLA-k betartása.  
- **Műszaki, divat, bútor, sport, babatermék és D2C márkáknak**, ahol képek, leírások és nyomkövetési adatok kellenek a döntéshez.  
- **B2B és omnichannel kereskedőknek**, akiknél az offline megkereséseket is rendszerben kell tartani.  
- **Azoknak, akik kiterjesztett garanciát értékesítenének**, és rugalmas árazási opciókat szeretnének termékszinten.

## Összefoglalás

Ezzel a bővítménnyel a garanciák és visszaküldések nem szétszórt e-mailekben, hanem egy jól szervezett, WooCommerce-be épülő RMA-folyamatban futnak. Beállítod a garanciafeltételeket, a vevő önkiszolgálóan indítja a kérelmet, te pedig státuszokkal, sablonokkal és nyomkövetéssel profin lekezeled. Ha fontos az átláthatóság, a skálázhatóság és a kiváló ügyfélélmény, ez a megoldás neked szól.