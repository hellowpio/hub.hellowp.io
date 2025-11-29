---
title: "Gravity Forms Product Add-Ons for WooCommerce"
description: "WooCommerce kiterjesztés, amellyel Gravity Forms űrlapokat kapcsolhatsz termékekhez, hogy dinamikus árazást, feltételes logikát és fájlfeltöltést hozz a termékoldalra."
sidebar_label: "Gravity Forms Product Add-Ons for WooCommerce"
---

## Mi ez és milyen problémát old meg?

A Gravity Forms Product Add-Ons egy fizetős WooCommerce-bővítmény, amellyel bármely Gravity Forms űrlapot a termékoldalra tehetsz. Így összetett konfigurátorokat készíthetsz, feltételes logikával, több lépésben, dinamikus árkalkulációval és akár fájlfeltöltéssel. A fő előnye, hogy megszünteti a „variáció-robbanást”: nem kell több száz variációt gyártanod, az opciókat és árakat az űrlap kezeli, miközben a kosár és a rendelés pontosan megőrzi a vevő konfigurációját.

## Hogyan működik röviden?

- A Gravity Forms-ban létrehozod az űrlapot (mezők, feltételek, ármezők).
- A WooCommerce termék szerkesztésénél hozzárendeled az űrlapot a termékhez.
- A bővítmény a termékoldalon megjeleníti az űrlapot, és a **GF Pricing Fields** alapján dinamikusan számolja és mutatja az árat.
- A kosárban minden egyes konfiguráció külön-külön azonosítható; azonos beállítások összevonódnak.
- A rendelésben az űrlapbejegyzés és a rendeléstétel kölcsönösen hivatkozik egymásra.

## Fő funkciók részletesen

- **Űrlap-alapú termékkonfiguráció**
  - A teljes Gravity Forms-funkcionalitás elérhető: **feltételes logika**, többoldalas űrlap, kötelező mezők, előre kitöltés. Így lépésről lépésre vezetheted a vevőt még bonyolult termékeknél is.

- **Dinamikus árkalkuláció a Pricing Fields segítségével**
  - Támogatott mezők: **Product, Option** (legördülő/checkbox/radio felárakkal), **Quantity, Total, Shipping**. A megadott opciók és mennyiségek valós időben módosítják az árat.
  - Testreszabhatod az árcímkéket (például „As low as…”), ki- és bekapcsolhatod az összegző sorok megjelenítését, és használhatsz **felhasználói bevitt árat** (pl. adomány).

- **Kosárlogika és szerkeszthetőség**
  - Azonos konfigurációk automatikusan **összevonódnak**; eltérő beállítások külön tételként jelennek meg.
  - Engedélyezheted, hogy a vevő a kosárból visszatérjen a termékoldalra, ahol az űrlap **előre kitöltve** várja a módosításokat.

- **Gazdag mezőválaszték**
  - A standard és advanced Gravity Forms mezők nagy része használható, ideértve a **File Upload**-ot és a **List** mezőt (részleges támogatással). Így képeket, dokumentumokat is bekérhetsz.

- **Bejegyzés–rendelés kapcsolat**
  - A leadott rendelés minden tétele **kapcsolódik** az adott űrlapbejegyzéshez. Opcionálisan a tranzakciós állapotok **szinkronizálhatók**, ami rendkívül hasznos gyártás/fulfillment során.

- **Kompatibilitás és teljesítmény**
  - Támogatja a modern rendeléstárolást (**HPOS**) és a **Cart/Checkout Blocks**-ot, így működik a legújabb WooCommerce-élménnyel is.

## Gyakorlati példák

- **Pizza builder**: méret, tészta, szósz, feltétek; a feltétek darabszámához kötött felárakkal és feltételes lépésekkel.
- **Számítógép-összeállító**: CPU → alaplap → RAM logikus sorrendben; inkompatibilis opciók elrejtése feltételekkel.
- **Adománytermék**: a vevő adja meg az összeget (user-defined price), opcionális üzenettel és visszaigazoló e-maillel.
- **Egyedi ajándék/gravírozás**: szövegmező karakterlimittel, betűtípus-választás felárral, logó **fájlfeltöltéssel**.
- **Nyomdai megrendelés**: többoldalas űrlap mennyiséggel, mérettel, papírtípussal, szállítási felárral, összegző lépéssel.

## Beállítás lépésről lépésre

1. **Űrlap készítése** a Gravity Forms-ban. Ha árat számolsz, tegyél az űrlapra legalább egy **Product** és egy **Total** mezőt. Feláras opciókhoz használd a **Pricing Option** mezőket (ne a sima dropdown/radio/checkbox mezőt).
2. **Összekapcsolás a termékkel** a WooCommerce-ben. A termék alapárát töltsd ki (akár 0), különben az űrlap nem fog megjelenni.
3. **Ármegjelenítés beállítása**: dinamikus kalkuláció, „Before/After” árcímkék, összegző sorok láthatósága.
4. **Haladó opciók**: engedélyezd a kosárból történő szerkesztést, állítsd be az űrlap–rendelés státuszszinkront és az értesítéseket.

```
Gyors checklist
- GF űrlap: Product + Total mező az árazáshoz
- Felárak: Pricing Option mezők használata
- Termék: Regular Price ne legyen üres
- Dinamikus ár: bekapcsolva, árcímkék testre szabva
- Kosár szerkesztés: opcionálisan engedélyezve
```

## Előnyök és értékajánlat

- **Kevesebb variáció, több rugalmasság**: űrlapokkal kiváltod a variációk tömegét.
- **Pontosság a rendelésben**: a tételhez csatolt űrlapbejegyzés megkönnyíti a gyártást és csökkenti a hibákat.
- **Jobb UX, magasabb konverzió**: valós idejű árkijelzés, több lépéses vezetett konfigurálás.
- **Idő- és költségmegtakarítás**: gyorsabb beállítás összetett termékekre, kevesebb karbantartás a variációkhoz képest.
- **Skálázhatóság**: a GF logika és mezők bővíthetők, új termékek gyorsan felépíthetők.

## Célközönség

- **Egyedi és összetett termékeket áruló webshopok**: nyomdák, ajándékboltok, építős/konfigurálós termékek.
- **Ügynökségek és fejlesztők**: amikor a megrendelő üzleti logikája jóval túlmutat a WooCommerce alapvariációin.
- **Nonprofit és adományoldalak**: rugalmas, vevő által megadott ár és kiegészítő adatok gyűjtése.
- **B2B**: összetett paraméterezés, mellékletbekérés, egyedi árkalkuláció.

## Megkötések és fontos tudnivalók

- **AJAX-os űrlapbetöltés** a Gravity Forms-ban nem támogatott.
- A **Partial Entries** és a **Post creation** mezők nem kompatibilisek.
- **Feláras opciókhoz** kizárólag a GF Pricing Option mezőit használd.
- Az űrlapmezők **nem cserélik** a termékképet és **nem** vezérelnek Woo variációkat.
- Gyakori hiba: üres **Regular Price** esetén az űrlap nem jelenik meg.
- Támogatott a **HPOS** és a **Cart/Checkout Blocks**.

## Licencelés és beszerzés

Fizetős kiterjesztés, éves előfizetéses licenccel és hivatalos támogatással. A használathoz szükséged van a Gravity Forms bővítményre is (bármely licencszint).