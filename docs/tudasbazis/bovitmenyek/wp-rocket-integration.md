---
title: "WP Rocket Integration"
description: "MainWP kiegészítő a WP Rocket központi, tömeges kezeléséhez több WordPress webhelyen."
sidebar_label: "WP Rocket Integration"
---

## Mi ez és milyen problémát old meg?

A WP Rocket Integration a MainWP hivatalos kiegészítője, amellyel a WP Rocket gyorsítótárazó és teljesítmény-optimalizáló beállításait egyetlen irányítópultról tudod kezelni az összes kapcsolt WordPress oldaladon. Nem kell külön belépned minden webhelyre: a cache ürítését, előtöltését, a minify/lazyload/JS-késleltetés, CDN vagy adatbázis takarítás beállításait központilag kapcsolhatod, így egységes, skálázható karbantartást kapsz.

A fő problémák, amiket megold:
- Ismétlődő, időrabló adminmunka több oldalon
- Inkonzisztens teljesítménybeállítások és kiszámíthatatlan eredmények
- Lassan frissülő cache vagy elavult tartalom terítése
- Átláthatatlanság, hogy hol aktív/friss-e a WP Rocket

## Fő funkciók részletesen

### Központi beállításkezelés
A kiegészítő a WP Rocket fő lapjainak logikáját tükrözi, így ugyanazokat az opciókat kapcsolhatod be/ki a Dashboardból:
- **Alap és haladó optimalizálás**: HTML/CSS/JS minify, kombinálás, **JS késleltetése** (beleértve a biztonságos módot), **LazyLoad**, böngésző‑cache, **Google Fonts optimalizálás** (beleértve a saját tárhelyre helyezést).
- **Preload**: sitemap- és URL‑alapú cache előmelegítés, hogy a látogatók az első pillanattól gyors oldalt kapjanak.
- **CDN és Varnish**: CDN‑domain(ek) és kizárások, valamint Varnish integráció beállítása központból.
- **Adatbázis**: revíziók, piszkozatok, transziensek és egyéb felesleges rekordok takarítása, ütemezéssel vagy azonnal.

Minden módosítást egyszerre több site‑on alkalmazhatsz, így egységes baseline-t építhetsz.

### Cache műveletek távolról
- **Clear Cache**: a teljes cache kiürítése több oldalon egy kattintással.
- **Preload Cache**: azonnali előtöltés indítása, hogy tartalomfrissítés után gyorsan felépüljön a cache.
- **OPcache tisztítás**: PHP OPcache ürítése a kapcsolt oldalakon, ha a környezet támogatja.

### Verzió- és állapotfigyelés
A Dashboardban láthatod, melyik oldalon aktív a WP Rocket, szükséges‑e frissítés vagy beavatkozás. Innen indíthatod az aktiválást/frissítést is, így nem marad le egyik site sem.

### Admin kényelmi funkciók
- Gyors áttekintő nézet oldalanként a WP Rocket állapotáról
- A kiegészítő megjelenítésének/rejtésének szabályozása a child site‑okon
- Gyors ugrás az adott oldal WordPress adminjába vagy a WP Rocket beállításaihoz

## Hogyan működik a gyakorlatban?

1) Beállítasz egy bevált WP Rocket profilt a Dashboardban (például minify + Delay JS + LazyLoad + preload).  
2) Kijelölöd a webhelyeket, amelyekre ezt alkalmazni szeretnéd.  
3) Egy kattintással „push”-olod a beállításokat.  
4) Ha tartalmat frissítesz, futtatsz egy **Clear + Preload** műveletet az érintett oldalakon.  
5) Ütemezetten adatbázis-takarítást indítasz, és időnként OPcache-t tisztítasz.

Eredmény: minden oldal egységesen, kiszámíthatóan gyors, és a beavatkozás percek, nem órák.

## Konkrét használati esetek

- Ügynökségi portfólió: 35 ügyféloldalon egységesen bekapcsolod a minify-t és a JS késleltetés biztonságos módját. Ha valahol konfliktus adódik, kiveszed az adott site‑ot a tömeges profilból, és lokálisan finomhangolsz.
- Webshop friss kampánnyal: termékoldalak, landingek módosítása után egy gombbal **Clear + Preload**, így a kampány indulásakor a cache már fel van melegítve.
- CDN átállás: szolgáltatóváltáskor a CDN‑domain minden oldalra egy menetben frissül, kizárásokkal együtt.
- Havi karbantartás: ütemezett adatbázis-takarítás a revíziók és transziensek eltávolítására, stabilabb adatbázis‑méret és gyorsabb admin.

## Gyors indulás – ajánlott lépések

Előfeltételek:
- A MainWP Dashboard és a child oldalak kapcsolatban állnak.
- A WP Rocket telepítve és aktív minden kezelt oldalon.

Lépések:
1. A Dashboardban engedélyezd a WP Rocket Integration kiegészítőt.  
2. Nyisd meg a kiegészítő felületét, és állíts össze egy baseline profilt.  
3. Válaszd ki a céloldalakat, és alkalmazd a profilt.  
4. Futtasd a Clear/Preload műveletet.  
5. Állíts be ütemezett adatbázis-takarítást.

Példa baseline profil (irányadó minta):

```
Alap optimalizálás:
  - HTML/CSS/JS minify: be
  - JS késleltetése (safe mode): be
  - LazyLoad képekre/iframe-ekre: be
Teljesítmény:
  - Preload sitemap alapján: be
  - Preload links: be
Hálózat:
  - CDN domain(ek): megadva
  - Kizárások: kritikus admin útvonalak
Adatbázis:
  - Revíziók/transziensek takarítása: heti
```

Finomítsd site‑típusonként (blog, magazin, webshop) az esetleges kivételekkel.

## Előnyök és értékajánlat

- **Időmegtakarítás**: Több óra helyett percek alatt végzel tömeges műveletekkel.  
- **Következetesség**: Egységes beállítások = stabilabb teljesítmény és kevesebb hiba.  
- **Gyors reakció**: Tartalomfrissítés után azonnali Clear + Preload, kisebb esély „hideg cache”-re.  
- **Üzemeltetési átláthatóság**: Egy nézetben látod a WP Rocket állapotát minden oldalon.

## Kinek ajánlott?

- **Digitális ügynökségeknek**: sok ügyféloldal egységes és auditálható teljesítménymenedzsmentje.  
- **WordPress karbantartó szolgáltatóknak**: SLA‑barát, gyors beavatkozások és rutinok.  
- **SaaS/kiadói hálózatoknak**: több tucat/hundreds site konzisztens sebességprofilja.  
- **DevOps/hosting csapatoknak**: cache/OPcache műveletek központi indítása, kevesebb kézi belépés.

## Megjegyzések és korlátozások

- A kiegészítő **nem helyettesíti** a WP Rocket licencét és telepítését: a WP Rocketet külön, webhelyenként kell telepítened és aktiválnod.
- A tényleges optimalizálást a **WP Rocket** végzi; a kiegészítő a központi vezérlést adja hozzá.
- Bizonyos funkciók (például preload, OPcache tisztítás) a környezettől függnek; ellenőrizd a szerver és a WP Rocket támogatottságát.
- Tömeges bevezetés előtt érdemes egy kisebb site‑csoporton pilotolni, és figyelni a kompatibilitást témákkal/bővítményekkel.