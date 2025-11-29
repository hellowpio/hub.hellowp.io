---
title: "Perfmatters"
description: "Könnyű, prémium WordPress teljesítményoptimalizáló, amely a felesleges kód és assetek eltávolítására és a Core Web Vitals javítására fókuszál."
sidebar_label: "Perfmatters"
---

## Mi ez és milyen problémát old meg?

A **Perfmatters** egy könnyű, “no bloat” szemléletű, prémium WordPress bővítmény. Nem gyorsítótárat ad, hanem a betöltési útvonalat rövidíti: eltávolítja a felesleges kódot, letiltja a nem használt JS/CSS fájlokat, optimalizálja a betöltési sorrendet, és segít elérni jobb **Core Web Vitals** értékeket. Cachinggel együtt működik; a célja, hogy a ténylegesen szükséges kód maradjon csak a frontenden.

## Hogyan működik? Fő modulok és mit csinálnak

### Gyors kapcsolók (One‑click toggles)
Egyszerű kapcsolókkal ki‑/bekapcsolhatod a “bloatot”:
- **Emojis, embeds, dashicons** tiltása: kevesebb kérés, kisebb oldal.
- **jQuery Migrate** eltávolítása: régi függőség kidobása, ha a téma nem igényli.
- **RSS/REST linkek, verziószámok** elrejtése: kisebb HTML, kevesebb leak.
- **Google Fonts/Maps tiltása**, **XML‑RPC** lekapcsolása.
- **WooCommerce opciók**: feleslegesen betöltött shop scriptek/styles letiltása, **cart fragments** kikapcsolása, ha üres a kosár.
- **Heartbeat API** ritkítása/tiltása, **autómentés intervallum** és **bejegyzés‑verziók** limitálása: kisebb szerverterhelés.

### Script Manager
Oldalanként, sablonszinten vagy post típusonként kikapcsolhatod a JS/CSS-t – akár **regex** alapon, eszköz‑ és bejelentkezési állapot szerinti szabályokkal. 
- **MU mode**: nemcsak az enqueue‑olt asseteket, hanem egy plugin teljes front‑endjét (hookok, lekérdezések, inline kód) is kizárhatod.
- **Testing Mode**: a változtatásokat csak te (admin) látod, így kockázatmentesen tesztelhetsz.
- **Globális nézet és kivételek**: gyors áttekintés és finomhangolás.

Példa regex szabályra:
```
^/blog/.*     # minden blogbejegyzés URL-re alkalmazd
```

### JavaScript optimalizálás
- **Defer**: elhalasztja a JS futtatását, csökkenti a render‑blocking hatást.
- **Delay JS**: futtatást csak felhasználói interakció után indítja (globálisan vagy célzottan), **timeouttal** és **kizárásokkal**. Ideális: Google Analytics/Tag Manager, AdSense, Facebook Pixel, WooCommerce cart fragments.
- **Minifikálás (JS)**: kisebb fájlok, gyorsabb letöltés.

### CSS optimalizálás
- **Remove Unused CSS**: kihasználatlan stílusok eltávolítása (fájl vagy inline), az eredeti stíluslapok **Delay/Async/Remove** kezelése.
- **Minifikálás (CSS)**, globális és oldalankénti **kizárások/ürítések**.

### Lazy Load és média
- **Képek, videók, iframek, CSS háttérképek** lustabetöltése.
- **Above‑the‑fold képek automatikus kivétele** a lazy‑ből, hogy az LCP gyors maradjon.
- **Width/height pótlása** a képeken a **CLS** csökkentésére.
- **WebP és AVIF** támogatás.
- A fejlesztői mérések szerint átlagosan ~33% betöltési idő csökkenés érhető el.

### Előtöltés és prioritás
- **Kritikus képek preloadja**, **fetchpriority** beállítás az LCP javítására.
- **Preload/Preconnect/DNS‑prefetch**: kevesebb várakozás harmadik felekre.
- **Speculative Loading**: core funkcióra építve beállíthatod **prerender** módra a belső linkeket – a következő oldal szinte azonnal megjelenik.

### Betűkészletek
- **Google Fonts helyi hosztolása**, cache‑barát kiszolgálás, **font‑display: swap**, **subset** szűkítés a CSS méret csökkentésére.

### Analitika
- **GA4 script helyi hosztolása** (normál vagy “minimal”), **IP anonimizálás**, fejléchez/lábléchez illesztés, kompatibilitás népszerű analitika pluginekkel, együtt használható a **Delay JS**‑szel.

### CDN és adatbázis
- **CDN rewrite**: a média/asset útvonalak átírása saját CDN domainre, finomhangolható kizárásokkal.
- **Adatbázis karbantartás**: verziók, autómentések, spam/trash kommentek, lejárt transientek törlése, táblák optimalizálása, **időzített** futtatással.

### Egyéb eszközök
- **Login URL átnevezése**: botterhelés csökkentése.
- **Saját kód beszúrása** head/body/footer helyekre.
- **Import/Export**, **WP‑CLI**, **multisite** kezelés (beállítások “push”-olása), **akadálymentes mód**.

## Gyakorlati példák

- **Blog**: tiltsd az embeds/dashicons‑t, hostold lokálisan a Fonts‑ot és Analytics‑et, kapcsold be a Remove Unused CSS‑t és a Lazy Load‑ot. Az FCP/LCP érezhetően javul, a HTML és JS méret csökken.
- **WooCommerce**: ha a kosár üres, kapcsold ki a cart fragments‑t, vagy késleltesd JS Delay‑jel. Tiltsd a Woo scripteket nem shop oldalakon a Script Managerrel. Marketing scripteket Delay‑re tedd. Ezzel gyakran több másodpercet nyersz TTI‑ben.
- **Page builderes oldalak**: a builder globális CSS/JS‑ét csak ott hagyd bekapcsolva, ahol szükséges (Script Manager + MU mode). A fölös komponensek eltávolítása drasztikusan csökkenti a kérések számát.
- **Ügynökség/multisite**: exportáld a bevált beállításokat és pushold a hálózat aloldalaira; ütemezd az adatbázis takarítást; CLI‑vel ürítsd a cache‑eket tömegesen.

## Előnyök és értékajánlat

- **Gyorsabb oldal és jobb Core Web Vitals** konkrét, mérhető javulásokkal (LCP/INP/CLS).
- **Kevesebb bloat**: csak a szükséges kód fut, kevesebb kérés, kisebb fájlok.
- **Stabilabb szerver**: Heartbeat és botforgalom kezelése, alacsonyabb CPU‑használat.
- **Kevesebb kézi munka**: egykattintásos kapcsolók és Script Manager a kézi dequeue és kódpiszkálás helyett.
- **Megfelelőség és privacy**: helyi Fonts/Analytics csökkenti a külső függőségeket.

## Kinek ajánlott?

- **Bloggerek és tartalmi oldalak**: gyors betöltés, jobb SEO és felhasználói élmény.
- **WooCommerce tulajdonosok**: nagy terhelés mellett is gyors kosár/fizetés, több konverzió.
- **Ügynökségek és multisite adminok**: import/export, hálózati terítés, WP‑CLI – skálázható folyamatok.
- **Fejlesztők és performance szakik**: finomhangolás MU mode‑dal, regex szabályokkal, kivétellistákkal.

## Telepítés és első lépések

1. Töltsd fel a perfmatters.zip fájlt a Bővítmények → Új hozzáadása → Bővítmény feltöltése menüpontban.
2. Aktiváld, majd add meg a licenckulcsot a Perfmatters → License alatt.
3. Kövesd a “Beállítási ajánlások” útmutatót: kezdd a gyors kapcsolókkal, majd a Script Managerrel, végül finomhangold a JS/CSS és Lazy Load beállításokat. Használj Testing Mode‑ot élesítés előtt.
4. Kombináld megbízható cachinggel a teljes stackért.

## Kompatibilitás és követelmények

- **No front‑end JS** alapelv: a bővítmény nem terhel fölös szkripteket; bizonyos funkciókhoz minimális inline kód kerülhet be (pl. Delay JS, Speculative Loading).
- Széles körű kompatibilitás ismert témákkal és page builderekkel.
- Minimális PHP: **7.2**.

## Licenc és árak

- Éves licenc, **30 napos pénzvisszatérítéssel** és **15% megújítási kedvezménnyel**.
- **Personal** (1 webhely): 29.95 USD/év
- **Business** (3 webhely): 59.95 USD/év
- **Unlimited** (korlátlan, multisite támogatással): 124.95 USD/év

Összességében a Perfmatters a kód‑ és asset‑szintű optimalizálás eszköztára, amellyel célzottan gyorsíthatod a WordPressedet, és cachinggel együtt teljes, modern performance stacket építhetsz. Ha pontosan azt szeretnéd betölteni, amire tényleg szükség van – és semmi többet –, ez a bővítmény neked készült.