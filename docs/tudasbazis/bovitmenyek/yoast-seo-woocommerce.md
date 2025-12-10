---
title: "Yoast SEO: WooCommerce"
description: "Prémium kiegészítő WooCommerce webáruházakhoz a Yoast SEO alapjaira építve: termék-séma, azonosítók, metaadatok, breadcrumb és sitemap finomhangolása."
sidebar_label: "Yoast SEO: WooCommerce"
---

## Mi ez és milyen problémát old meg?

A Yoast SEO: WooCommerce egy fizetős kiegészítő, amely a WooCommerce áruházad technikai SEO-ját optimalizálja a Yoast SEO képességeire építve. Segít, hogy a termék- és kategóriaoldalaid a keresőknek „érthető” strukturált adatokkal, jól felépített metaadatokkal és tiszta navigációval jelenjenek meg. Olyan tipikus gondokat old meg, mint a hiányzó márka vagy globális azonosítók miatti figyelmeztetések, a szűrők által generált zajos URL-ek feltérképezése, a breadcrumb-séma ütközések, illetve a nem indexelendő boltoldalak (kosár, pénztár) felesleges szerepeltetése a sitemapben.

Előfeltétel: a Yoast SEO (ingyenes vagy Premium) kötelező, a kiegészítő önmagában nem használható. Éves előfizetéses termék.

## Fő funkciók, érthetően

- **E-kereskedelmi strukturált adatok (Schema.org)**  
  A bővítmény kibővíti és egységes gráfba „fűzi” a Product, offers, review, aggregateRating, brand, manufacturer, seller stb. elemeket. A termékoldalakat a megfelelő oldaltípusra állítja, és eltávolítja a duplikált WooCommerce breadcrumb sémát. Ezzel növeli a rich results (ár, készlet, értékelések) esélyét.

- **Termékazonosítók kezelése (GTIN/EAN/UPC/ISBN/MPN)**  
  Megadhatod az azonosítókat egyszerű és variációs termék szinten is; a kiegészítő beírja ezeket a sémába. Tömegesen is importálhatod CSV-vel, és célzott visszajelzéseket kapsz, ha hiányzik egy kötelező azonosító.

- **AI-javaslatok SEO címekhez és meta leírásokhoz**  
  A termék- és kategóriaoldal szerkesztésébe ágyazott generálás gyorsítja a tartalom-előkészítést. Ehhez Yoast SEO Premium szükséges.

- **Google-előnézet termékekhez**  
  Valósághű SERP-előnézet: megmutatja az árat, elérhetőséget, értékelést és a vélemények számát, így szerkesztéskor látod, hogyan fog kinézni.

- **Breadcrumb-kezelés**  
  A Yoast-breadcrumb átveszi a WooCommerce morzsákat, beállíthatod az **elsődleges kategóriát** és a megjelenés helyét, és egységes sémát kap a navigáció.

- **XML-webhelytérkép optimalizálás**  
  Automatikusan kihagyja a kosár/pénztár/profil oldalakat a sitemapből, hozzáadja a termékgaléria képeit, és elrejti a szűrt URL-kombinációk tömegét, csökkentve a feltérképezési zajt.

- **Pinterest Rich Pins támogatás**  
  A szükséges og:price, og:currency, og:availability metaadatokat hozzáadja a termékekhez. A Pinterest érvényesítés külön lépés, de az alap technikai feltételeket megkapod.

- **Termék-specifikus SEO analízis**  
  Ellenőrzi többek között a rövid leírás hosszát, a galéria képeinek alt attribútumait és az SKU/azonosítók meglétét, így célzott javításokat végezhetsz.

## Gyakorlati példák

- **GSC figyelmeztetések megszüntetése**  
  Hiányzik a „brand” vagy a GTIN? Hozz létre egy Márka attribútumot, rendeld a bővítményben a „brand” sémamezőhöz, majd töltsd ki termékszinten (vagy CSV-vel). A strukturált adat kitöltésével a figyelmeztetések jellemzően eltűnnek.

- **Szűrt URL-ek zajának csökkentése**  
  Sok kategóriaszűrővel milliónyi URL jöhet létre. A kiegészítő elrejti ezeket a sitemapből, a feltérképezési kapacitás így a valóban fontos kategória- és termékoldalakra fókuszál.

- **Variánsok helyes megjelenítése**  
  Szín/méret variációk esetén variánsszinten adhatod meg a GTIN-t; a séma csoportosítja a variánsokat, a keresők pedig konzisztensen értik az ár- és készletinformációkat.

- **Tartalomgyártás felpörgetése**  
  Több száz termékhez AI-alapú cím és meta leírás generálása: beállítod a hangnemet és a kulcsinformációkat, a rendszer pedig sorban létrehozza a javaslatokat, amiket csak finomhangolnod kell.

## Előnyök és értékajánlat

- **Nagyobb rich results esély**: ár, készlet, értékelés megjelenhet a találatokban.  
- **Kevesebb technikai adósság**: egységes séma, ütközések megszüntetése, tiszta sitemap.  
- **Gyorsabb munkafolyamat**: AI-meta, tömeges azonosító-import, célzott SEO-ellenőrzések.  
- **Jobb megosztási kártyák**: közösségi és Pinterest metaadatok automatikusan rendben.  
- **Skálázhatóság**: nagy katalógusoknál is következetes, automatizálható rutinok.

## Kinek ajánlott?

- **WooCommerce webáruház-tulajdonosoknak**, akik organikus forgalmat akarnak.  
- **SEO-szakértőknek és ügynökségeknek**, akik tiszta, auditálható technikai alapot keresnek.  
- **Nagy, variációkban gazdag katalógusoknak**, ahol kritikus a GTIN/MPN és a konzisztens séma.  
- **Pinterestre dolgozó márkáknak**, ahol fontos a Rich Pins.

## Telepítés és első lépések

```text
1) Előfeltételek: WordPress + WooCommerce + Yoast SEO aktív.
2) Telepítsd a kiegészítőt, majd kapcsold az előfizetést a licenckezelő fiókoddal.
3) Hozd létre a releváns attribútumokat (Márka, Gyártó, Anyag, Szín, Minta).
4) A bővítmény beállításaiban rendeld ezeket a megfelelő sémamezőkhöz.
5) Add meg a globális azonosítókat (GTIN/EAN/UPC/ISBN/MPN) termék- és variánsszinten
   – nagy mennyiségnél CSV-vel importálj.
6) Ellenőrizd a breadcrumb megjelenést és a sitemap tartalmát.
7) (Opcionális) Kérd a Rich Pins jóváhagyást a Pinterest felől.
```

## Hogyan működik a motorháztető alatt?

A kiegészítő a Yoast SEO séma-gráfját bővíti: a termékoldal fő entitása a Product, amelyhez összekapcsolt offers, review és aggregateRating csomópontok tartoznak; beépül a brand/gyártó és az eladó adata is. A breadcrumb séma egységes, a felesleges duplikációkat eltávolítja. A sitemapből kizárja a nem indexelendő oldalakat és elrejti a szűrt URL-kombinációkat, így a keresők hatékonyabban feltérképezik a fontos oldalakat.

## Korlátok és fontos megjegyzések

- **Külső termékbővítmények** egyedi mezőit nem mindig ismeri fel automatikusan; szükség lehet kézi megfeleltetésre vagy fejlesztői kiegészítésre.  
- **Rich Pins** használatához a Pinterest oldalán külön érvényesítés kell.  
- **AI-funkciók** csak Yoast SEO Premium mellett érhetők el; ha a kiegészítőt külön vásárolod meg, a Premiumot is telepítened kell.

## Kell ez neked?

Ha WooCommerce-t üzemeltetsz és szeretnéd, hogy a termékeid a keresőkben gazdag adatokkal, tiszta struktúrával, konzisztens azonosítókkal és optimalizált navigációval jelenjenek meg – miközben automatizálod a monoton SEO-munkát –, akkor ez a kiegészítő pontosan neked való. Ha viszont csak blogot futtatsz vagy nincs webáruházad, a hozzáadott érték kicsi lesz.