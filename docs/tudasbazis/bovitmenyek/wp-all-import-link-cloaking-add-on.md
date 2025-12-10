---
title: "WP All Import - Link Cloaking Add-on"
description: "Automatikus affiliate- és külső link-álcázás a WP All Import folyamatában, egységes, saját domaint használó útvonalakkal."
sidebar_label: "WP All Import - Link Cloaking Add-on"
---

## Mi ez és milyen problémát old meg?

A WP All Import hivatalos kiegészítője, amellyel az import során automatikusan “álcázhatod” (cloakolhatod) az affiliate és más külső linkeket. A gyakorlatban ez azt jelenti, hogy a külső hivatkozások saját domainről induló, egységes útvonalakra cserélődnek, miközben a kattintó felhasználó a megfelelő külső céloldalra jut. Ez profi megjelenést ad, csökkenti a kézi utómunka igényét, és különösen hatékony nagy tömegű termék- vagy tartalomimportoknál.

## Hogyan működik az import közbeni link-álcázás?

Az import folyamatban – a beállításaidtól függően – a bővítmény végigmegy a releváns mezőkön, megkeresi a külső hivatkozásokat, majd belső útvonalra cseréli őket. Az így generált belső link egy egyedi azonosítót tartalmaz (és opcionálisan egy prefixet), a háttérben pedig átirányít a valódi cél-URL-re. Kiemelten támogatott a WooCommerce External/Affiliate termékek “Buy URL” mezője, de általános tartalommezőkben lévő linkekkel is működik.

## Fő funkciók és beállítások

### Cloaking módok
- **Ne álcázzon semmit**: az import változatlanul hagyja a linkeket.
- **Minden link cloakolása**: a bejegyzés tartalmában, kivonatában és egyedi mezőkben lévő linkek is átalakításra kerülnek.
- **Csak a WooCommerce “Buy URL” cloakolása**: kifejezetten az External/Affiliate termékek vásárlási hivatkozásához.

Mindhárom mód az import varázslóban választható, így pontosan szabályozhatod, hol történjen beavatkozás.

### Testreszabható prefix
Az álca­zott útvonal elé beállíthatsz egy **opcionális prefixet** (legfeljebb egy "/" jelet tartalmazhat), például: "go/". Így egységes minta alakítható ki, például: `/go/{azonosító}`. Prefix nélkül is működik, ekkor az útvonal formája `/{azonosító}`.

### Érintett mezők
Ha a “minden link cloakolása” opciót használod, a bővítmény a **tartalom**, az **excerpt** és az **egyedi mezők** linkjeit is kezeli. Ez különösen hasznos, ha forrásfájlodban sok vegyes helyen előforduló külső hivatkozás van.

### Célzott cloaking segédfüggvénnyel
Speciális esetekhez használhatod a **pmailc_cloak_aff_links()** segédfüggvényt, például ACF mezők célzott feldolgozására.

Használat WP All Import mezőcímkékkel:
```
[pmailc_cloak_aff_links({producturl[1]})]
```

Paraméterezve:
```
[pmailc_cloak_aff_links({producturl[1]}, true, {link_prefix[1]}, {old_prefix[1]})]
```

Paraméterek:
- content (string): a feldolgozandó URL vagy szöveg
- single_url (bool): egyetlen URL vagy több link feldolgozása
- link_prefix (string): alkalmazandó prefix
- old_prefix (string): korábbi prefix kezelése igény szerint

## Gyakorlati példák

- **Minden link cloakolása importkor**  
  Az import varázslóban válaszd a “Cloak all links present during import” opciót, és adj meg egy prefixet (pl. “go/”). Ekkor a tartalom, az excerpt és a custom fields linkjei is belső útvonalra cserélődnek.

- **Csak a WooCommerce “Buy URL” cloakolása**  
  Válaszd a “Only cloak WooCommerce External/Affiliate Product Buy URL” opciót. Így a termékoldalak többi linkje változatlan marad, csak a partnerprogramos vásárlási hivatkozás kap belső útvonalat.

- **Célzott cloaking ACF mezőben**  
  Ha például egy ACF “product_url” mezőt szeretnél álcázni:
  ```
  [pmailc_cloak_aff_links({product_url[1]})]
  ```
  Vagy prefixszel:
  ```
  [pmailc_cloak_aff_links({product_url[1]}, true, go/)]
  ```

## Előnyök és értékajánlat

- **Profi megjelenés és jobb UX**: a partnerlinkek egységes, belsőnek látszó formában jelennek meg, kevésbé tűnnek spam-szerűnek.
- **Teljes automatizálás**: az álcázás az import része, nincs szükség utólagos szerkesztésre vagy külön linkkezelő folyamatokra.
- **Egységes URL-minta**: a prefix + azonosító séma (pl. “/go/12345”) egyszerűsíti a karbantartást és a riportolást.
- **Rugalmasság**: a globális opciók mellett a segédfüggvény célzottan is bevethető olyan mezőknél, amelyeket máshogy nem érnél el.

## Kinek ajánlott?

- **Affiliate webáruházaknak**, amelyek WooCommerce External/Affiliate termékeket importálnak.
- **Tartalomgyártóknak és kiadóknak**, akik sok külső (affiliate) linket hoznak be cikkekbe, kategóriákba, egyedi mezőkbe.
- **Ügynökségeknek és fejlesztőknek**, akik rendszeresen kezelnek nagy CSV/XML/Excel importokat, és fontos az egységes, automatizált linkkezelés.

## Telepítés és gyors kezdés

1. **Telepítés**: töltsd le a kiegészítő ZIP fájlt, majd a WordPress-ben a Bővítmények > Új hozzáadása > Feltöltés útvonalon aktiváld.
2. **Licencelés**: a licenc a fő WP All Import/Export bővítményekre vonatkozik; az add-on-ok a legfrissebb verziókhoz külön kulcs nélkül érhetők el.
3. **Beállítás az importban**: az import varázsló “Link Cloaking Add-on” szakaszában válaszd ki a cloaking módot, és állíts be prefixet (legfeljebb egy “/” szerepelhet benne).
4. **Speciális mezők**: ha egyedi (pl. ACF) mezőkben is cloakolni szeretnél, használd a pmailc_cloak_aff_links() segédfüggvényt.

## Megjegyzések és korlátok

- A cloaking az **import futásakor** történik. Ha vannak olyan mezők, amelyeket az “összes link” opció sem fed le, alkalmazd a segédfüggvényt.
- A konkrét **átirányítási kód** (301/302/307) és egyes robotkezelési részletek nincsenek rögzítve; ha speciális SEO-követelményeid vannak, egyeztesd a támogatással.
- Prefix váltásakor vagy régi séma cseréjekor használd az **old_prefix** paramétert, és futtasd le az importot a kívánt eredményhez.

Ezzel a kiegészítővel pontosan szabályozhatod, hogy az importált tartalmaidban hol és hogyan legyenek álcázva a külső linkek – gyorsan, következetesen és kézi utómunka nélkül.