---
title: "WP Rocket"
description: "Prémium WordPress teljesítménybővítmény: gyorsítótárazás és front‑end optimalizálások a betöltési idő és a Core Web Vitals javításáért."
sidebar_label: "WP Rocket"
---

## Mi ez és milyen problémát old meg?

A **WP Rocket** egy prémium WordPress‑bővítmény, amely azonnal bevethető **gyorsítótárazási** és **front‑end optimalizálási** eszközkészlettel gyorsítja az oldalad. Aktiválás után automatikusan alkalmazza a bevált gyakorlatokat (page cache, böngésző‑cache, GZIP/kompresszió), és célzottan javítja a **Core Web Vitals** mutatókat. Olyan problémákra ad választ, mint a magas **TTFB**, a **render‑blocking** erőforrások, a túl sok **JavaScript** miatti gyenge interaktivitás (TBT/INP), a YouTube beágyazások terhelése vagy a **CLS** kilengések.

## Hogyan működik röviden?

- Szerveroldalon **statikus HTML cache** fájlokat készít és szolgál ki, csökkentve a PHP/DB terhelést.  
- Előre **preloadolja** a cache‑t a webhelytérkép és módosítások alapján.  
- Front‑enden **kisebb és kevesebb** CSS/JS kerül betöltésre: minifikál, eltávolítja a nem használt CSS‑t, késlelteti a JS‑t.  
- A médiát **lustán tölti** (LazyLoad), a betűkészleteket **optimalizálja** (self‑host, preload), és szükség esetén **CDN‑nel** működik.  
- Adatbázist tisztít, Heartbeat terhelést csökkent, és finomhangolható szabályokkal kezeli a kivételeket.

## Fő funkciók részletesen

### Gyorsítótárazás és kiszolgálás
- **Oldal‑cache (page caching):** automatikusan statikus HTML‑t készít, így a kiszolgálás gyors és erőforrás‑takarékos. Beállítható **cache élettartam (TTL)**, és külön **mobil cache** is.  
- **Cache preload:** a bővítmény háttérfolyamatban bejárja az oldalakat (pl. sitemap alapján), hogy a első látogatónak már legyen kész cache.  
- **Böngésző‑cache és GZIP/kompresszió:** a szerveredhez illeszkedő szabályokkal gyorsítja az ismételt látogatásokat.

### CSS/JS optimalizálás
- **Minifikálás és kombinálás:** csökkenti a fájlméretet és – ahol hasznos – az HTTP kérések számát.  
- **Remove Unused CSS (RUCSS):** oldalanként csak a ténylegesen szükséges CSS kerül beágyazásra, mérsékelve a render‑blocking hatást és javítva az LCP/CLS értékeket.  
- **Delay JavaScript execution:** a nem kritikus JS futását felhasználói interakcióig halasztja, így érezhetően javulhat az FCP/TBT/INP. Kizárásokkal és „safe mode”-dal finomhangolható.  
- **Dinamikus kompatibilitási listák:** felhőből frissülő kizárások/integrációk csökkentik a törések kockázatát.

### Média és betűkészletek
- **LazyLoad képekre és iframe‑ekre/videókra:** késleltetett betöltés, ami különösen hosszú oldalaknál hatásos.  
- **YouTube „facade”:** valódi iframe helyett előnézeti képet tölt be, a lejátszó csak kattintáskor érkezik.  
- **Google Fonts optimalizálás:** self‑host, automatikus **preconnect** és **kritikus fontok preloadja** a gyors, stabil betűmegjelenítésért.  
- **Hiányzó képméretek pótlása:** width/height attribútumok hozzáadásával csökkenti a **CLS**‑t.  
- **Link‑előbetöltés (Preload links):** a kurzor fölévitelekor előre letölti a céloldal HTML‑jét, így a navigáció közel azonnali.

### CDN és képszolgálás
- **CDN integráció:** CNAME átírás, dns‑prefetch/preconnect beállítások; külön kiegészítő a Cloudflare‑hez, APO kompatibilitással.  
- **WebP kompatibilitás:** külön cache‑változat WebP képekre (a konverziót képtömörítő bővítmény végzi).

### Adatbázis és háttérfolyamatok
- **Adatbázis‑tisztítás:** régi verziók, lomtár, spam/trashed kommentek, tranziensek törlése, ütemezhetően.  
- **Heartbeat kontroll:** ritkítással vagy tiltással csökkenthető a szerverterhelés.

### Haladó szabályok és add‑onok
- **Kizárások és purge szabályok:** URL‑, cookie‑, query string‑alapú kivételek.  
- **E‑kereskedelem kompatibilitás:** kosár/pénztár/számla oldalak automatikus kizárása.  
- **User Cache add‑on:** külön cache bejelentkezett felhasználóknak.  
- **Varnish add‑on:** cache ürítések szinkronizálása reverse proxyval.  
- **Host kompatibilitás:** menedzselt tárhelyek saját page cache‑e mellett a WP Rocket front‑end optimalizációi továbbra is működnek.

## Gyakorlati példák

- **Lassú első betöltés megoldása:** blogon bekapcsolod a page cache‑t és a preloadot; a szerver ritkábban futtatja a WordPresst, a TTFB érezhetően esik.  
- **Nehéz JS‑től magas TBT/INP:** aktiválod a Delay JS‑t, majd kizárod a kritikus analitika/azonosító szkripteket.  
- **YouTube‑gal tele oldal:** a facade bekapcsolása tucatnyi 3rd‑party kérés helyett egyetlen előnézeti képet tölt be, az interaktivitás gyorsul.  
- **Webfont és CLS gondok:** self‑host + preload woff2, kép‑méretek pótlása; a vizuális elrendezés stabilabb, kevesebb villogás.

Példa kritikus script kizárására a késleltetésből:
```html
<script src="/js/critical-tracker.js" data-nowprocket></script>
```

## Előnyök és értékajánlat

- **Azonnali eredmények minimális beállítással:** aktiválás után több optimalizáció rögtön él.  
- **Kevesebb bővítmény, egységes felület:** cache, CSS/JS, média, CDN és DB karbantartás egy helyen.  
- **Stabilitás dinamikus kompatibilitással:** kevesebb ütközés, kevesebb kézi kivétel.  
- **Mérhető javulás a Core Web Vitalsban:** jobb LCP/CLS/INP → jobb felhasználói élmény és SEO.  
- **Támogatás és garancia:** kereskedelmi támogatás, 14 napos pénzvisszafizetés. Az éves díj funkcionálisan azonos minden csomagban; a Single 1 oldalra, a Plus 3 oldalra, a Multi 50 oldalra érvényes.

## Kinek ajánlott?

- **Kis‑ és középvállalkozások, blogok:** gyors betöltés, jobb rangsorok, alacsonyabb kilépési arány.  
- **Webáruházak:** beépített e‑kereskedelmi kivételek, stabil pénztárélmény.  
- **Tagsági/portál jellegű oldalak:** User Cache a bejelentkezett forgalomhoz.  
- **Ügynökségek és fejlesztők:** skálázható többoldalas licenc, automatizálható beállítások.

## Bevezetési lépések (ajánlott sorrend)

1. Telepítés után ellenőrizd, hogy a **page cache** működik, majd kapcsold be a **preloadot**.  
2. Aktiváld a **RUCSS**‑t és a **Delay JS**‑t; tesztelj, szükség esetén adj hozzá kizárásokat (pl. `data-nowprocket`).  
3. Kapcsold be a **LazyLoad**‑ot és a **YouTube előnézetet**; nézd meg a vizuális működést.  
4. Használsz külső fontokat? Engedélyezd a **Google Fonts optimalizálást**, a **self‑hostot** és a **font preloadot**.  
5. Ha van **CDN/Cloudflare**, állítsd be a dedikált integrációt; APO mellett figyelj a mobil cache viselkedésére.  
6. **TTL**: a noncékat használó funkciók miatt javasolt legfeljebb 10 órára állítani.  
7. Menedzselt tárhelynél ne zavarjon az üres plugin cache mappa; az optimalizációk akkor is érvényesek.

## Gyakori buktatók

- A **Delay JS** késleltetheti analitika/azonosító kódok futását – használd a kizárásokat vagy a `data-nowprocket` attribútumot.  
- A **RUCSS** háttérfolyamataihoz publikus elérés és megbízható cron kell; tűzfalas szigorítások zavarhatják.  
- **Noncek és TTL:** túl hosszú cache‑élettartam hibákat okozhat űrlapoknál – maradj 10 óra alatt.  
- **Host oldali cache:** ha a tárhelyed saját cache‑t használ, a WP Rocket page cache inaktív maradhat – ez nem hiba, a front‑end optimalizálások működnek.

Összefoglalva: a WP Rocket egy „minden az egyben” teljesítményeszköz, amely a szerver‑ és kliensoldali optimalizálás kulcstechnikáit hozza egy felületre, minimális beállítással látványos gyorsulást és jobb Core Web Vitals eredményeket adva.