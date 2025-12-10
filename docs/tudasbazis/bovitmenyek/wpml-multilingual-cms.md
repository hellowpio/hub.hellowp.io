---
title: "WPML Multilingual CMS"
description: "Prémium WordPress bővítmény, amellyel egyetlen telepítésből professzionális, többnyelvű webhelyet működtethetsz – AI-fordítással, SEO-val és WooCommerce támogatással."
sidebar_label: "WPML Multilingual CMS"
---

## Mi ez és milyen problémát old meg?

A **WPML Multilingual CMS** egy fizetős WordPress bővítmény, amellyel a teljes webhelyedet több nyelven, egységesen kezelheted. Nem kell több WordPress-t futtatnod: a bejegyzések, oldalak, egyedi tartalomtípusok, taxonómiák, menük, widgetek és admin-szövegek fordításai egymáshoz vannak kapcsolva, így minden tartalomnak megvan a nyelvi párja. Ezzel megoldod a többnyelvű IA, tartalomszinkron és SEO kihívásait – egyetlen adatbázisban, kontrollált munkafolyamatokkal.

## Hogyan működik röviden?

- Egy telepítésben több nyelvet kezelsz; minden elem fordítása „kapcsolt” változatként tárolódik.
- Beépített **AI-alapú fordítás** (glosszárium + fordítási memória) gyorsítja a munkát, a fordításokat az **Advanced Translation Editor** segíti.
- A **String Translation** a témákból és bővítményekből érkező sztringeket is fordíthatóvá teszi.
- Rugalmas **URL-struktúrák** (mappa, aldomain vagy külön domain) és teljes **SEO-integráció** gondoskodnak az indexelhetőségről.
- WooCommerce esetén a termékek, e-mailek és pénznemek is többnyelvűek lehetnek.
- Fejlesztőknek hookok, XLIFF és GraphQL add-on áll rendelkezésre.

## Fő funkciók

### Többnyelvű tartalomkezelés
- **Bejegyzések/oldalak/CPT-k/taxonómiák/menük/widgetek** fordítása és összekapcsolása.
- **Untranslated fallback**: beállíthatod, hogy a nem fordított tartalom forrásnyelven jelenjen meg a másodlagos nyelveken.

### URL-struktúrák nyelvekhez
- Nyelvek külön **könyvtárakban**, **aldomainekben** vagy **külön domaineken**; opcionálisan **paraméteres** megoldás.
- Egy webhelyen egyszerre csak egy URL-stratégiát használj (nem kombinálható).

### Fordítási eszközök és AI
- **WPML AI** (Private Translation Cloud) alapértelmezés szerint, váltható motorokkal.
- **Fordítási memória**, **glosszárium**, helyesírás-ellenőrzés, jóváhagyási folyamat.
- Két szerkesztő: **Advanced Translation Editor** (modern, automatikus szegmentálás, linkkezelés) és **Classic Translation Editor**.
- **Kreditek**: a csomagokhoz járó automatikus fordítási kreditek (pl. 90 000 / 180 000), további kreditek vásárolhatók.

### String Translation
- Témák és bővítmények szövegeinek (űrlapfeliratok, hibaüzenetek, beállítások) felderítése és fordítása.
- Automatikus és manuális detektálás; keresés és szűrés a gyors munkához.

### Médiafordítás
- Képek/videók/PDF-ek **metaadatai** (alt, cím, felirat) fordíthatók.
- Opcionálisan nyelvenként **eltérő média** jeleníthető meg.

### SEO-integráció
- **Hreflang**, lefordított **slugok**, többnyelvű **sitemap**.
- Kompatibilitás népszerű SEO bővítményekkel külön kiegészítőn keresztül.
- Opcionális **böngészőnyelv-alapú átirányítás**, finomhangolással és SEO-szabályokkal.

### Nyelvválasztók és UX
- **Menü-, lábléc-, blokk- és shortcode**-alapú nyelvválasztók.
- Teljesen egyedi (PHP) nyelvválasztó is készíthető.

### WooCommerce többnyelvű és többpénznemű
- Termékek (változatokkal), kategóriák, URL-ek, értékelések és **rendszer-e-mailek** fordítása.
- **Több pénznem** kezelése, árképzés nyelv/pénznem szerint; a multicurrency önállóan is használható, a teljes többnyelvű élményhez WPML kell.
- Checkout és fizetési módok lokalizációja; REST API-kompatibilitás.

### Fejlesztőknek
- **Hookok**, rövid kódok, **XLIFF export/import** CAT rendszerekhez.
- **REST API**-függőségek egyes funkciókhoz (ATE, String Translation).
- **WPML GraphQL add-on**: nyelvi szűrés, fordítások és menük lekérdezése headless projektekhez.

Példakód – objektum ID lekérése másik nyelven:
```php
$post_id_de = apply_filters( 'wpml_object_id', $post_id, 'post', true, 'de' );
```

## Gyakorlati példák

- **Céges webhely 5 nyelven**: a szolgáltatás-oldal fordításai egymáshoz kapcsolódnak, a slugok lefordulnak, a hreflang és a sitemap rendezett. A nyelvváltó menüben jelenik meg, böngészőnyelv esetén finomhangolt átirányítás működik.
- **WooCommerce bolt**: angol–német nyelv, EUR és USD. A termékleírások és e-mailek fordítottak, az árak másodlagos pénznemben kézzel felülírhatók. A kosár és a pénztár a választott nyelvnek megfelelően lokalizált.
- **Headless tartalomkiszolgálás**: GraphQL-lel lekérdezed az adott nyelvű bejegyzéseket és menüstruktúrát, így Next.js frontendre nyelvenként célzott feedet adsz.

## Előnyök és értékajánlat

- **Időmegtakarítás**: az AI-fordítás és a fordítási memória drasztikusan gyorsítja a munkát.
- **Konzisztencia**: glosszárium és egységes munkafolyamatok biztosítják az egységes terminológiát.
- **SEO-nyereség**: tiszta URL-ek, hreflang, lefordított slugok – jobb nemzetközi rangsorolás.
- **Költséghatékonyság**: egy telepítés, központi admin, kevesebb karbantartás.
- **Skálázhatóság**: bővítményekkel és API-kkal rugalmasan integrálható.

## Kinek ajánlott?

- **Közép- és nagyvállalati webhelyeknek**, ahol komplex IA-t és több csatornát kell több nyelven kezelni.
- **Ügynökségeknek**, akiknek stabil fordítási munkafolyamat és támogatott ökoszisztéma kell.
- **E-kereskedőknek**, akik több piacon, több pénznemben értékesítenek.
- **Fejlesztőcsapatoknak**, akik headless/omnichannel architektúrát építenek.

## Fontos megjegyzések és tippek

- Egy webhelyen **csak egy** nyelvi URL-stratégiát válassz (mappa/aldomain/domain vagy paraméter).
- Bizonyos funkciók a **WordPress REST API** elérhetőségét igénylik; ne korlátozd indokolatlanul.
- WooCommerce: a **multicurrency** önállóan is működik, de a teljes többnyelvű élményhez **WPML szükséges**.
- A fordítási kreditek csomaghoz kötöttek; nagy forgalmú oldalaknál kalkulálj **kreditbővítéssel**.
- A bővítményt és add-onokat a **WPML fiókodból** telepíted és frissíted; a core mellé célzott kiegészítőket válassz (String Translation, Media Translation, SEO, WooCommerce, ACFML, GraphQL, stb.).

Ezzel a készlettel profin, kontrolláltan és skálázhatóan teheted a WordPress-webhelyedet többnyelvűvé – legyen szó marketingoldalról, tartalomportálról vagy teljes értékű webáruházról.