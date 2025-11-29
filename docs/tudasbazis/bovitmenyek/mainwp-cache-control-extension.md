---
title: "MainWP Cache Control Extension"
description: "MainWP kiegészítő, amely frissítések után automatikusan üríti és központilag kezeli a cache-t a csatlakoztatott WordPress-gyerekoldalakon."
sidebar_label: "MainWP Cache Control Extension"
---

## Mi ez és milyen problémát old meg?

A MainWP Cache Control egy profi kiegészítő, amellyel a MainWP Dashboardból automatikusan és kézzel is törölheted a gyorsítótárat a csatlakoztatott gyerekoldalakon. A célja egyszerű: frissítések után azonnal eltüntetni a “stale” cache-t, hogy a látogatóid mindig a legfrissebb verziót lássák – legyen szó CSS/JS fájlokról, sablonokról vagy bővítményekről. Emellett központi helyről, tömegesen intézheted a cache-kezelést, akár több tucat vagy száz webhelyen.

## Hogyan működik?

- Amikor a MainWP-ről frissíted a WordPress core-t, témákat vagy bővítményeket, a bővítmény automatikusan purge-öt indít a gyerekoldalon használt cache-megoldás felé.
- A Cache Control felismeri a telepített cache plugineket, és (ha beállítod) a Cloudflare CDN cache-ét is képes egyszerre üríteni.
- A purge után – ahol támogatott – preload fut, így csökkented a “hideg cache” miatti első betöltési lassulást.
- A Manage Sites táblában látod, mikor történt utoljára purge, és milyen cache-megoldást detektált a rendszer.

## Fő funkciók

- Automatikus purge frissítések után:  
  Ha a Dashboardról frissítesz, a bővítmény automatikusan üríti a gyerekoldalak cache-ét. Ezzel elkerülöd a frissítés utáni megjelenési hibákat és inkompatibilitásokat.

- Kézi, tömeges törlés:  
  A Manage Sites oldalon kijelölöd a site-okat, és a Purge Cache bulk művelettel egy kattintással ürítesz. Ideális, ha tartalom- vagy beállítás-változások után azonnali cache-tisztítást akarsz mindenhol.

- Gyors elérés gombokkal:  
  Az Overview és az egyes Child Site nézetekben Clear Cache gombot kapsz a leggyakoribb művelethez, így nem kell menüket bejárnod.

- Cloudflare integráció:  
  E-mail és API kulcs megadásával a Cloudflare cache is törölhető, sőt a bővítmény a Cloudflare-t és a helyi cache plugint egyszerre kezeli. Ez megoldja a „fél-ürített” cache helyzeteket rétegelt (CDN + plugin) környezetekben.

- Állapot és naplók:  
  A Last Purged oszlopban látod az utolsó ürítés idejét. A log táblázat segít visszakövetni, mi történt; a Save State funkcióval rögzítheted és áttekintheted a végrehajtások eredményeit.

- Preload purge után:  
  Támogatott plugineknél a törlés után preload indul, így a legfontosabb oldalak már felmelegített cache-ből szolgálnak ki.

## Támogatott cache-megoldások (példák)

- CDN: Cloudflare
- Népszerű pluginek és megoldások: Breeze, LiteSpeed Cache, SiteGround Optimizer, Swift Performance, WP Fastest Cache, W3 Total Cache, WP Rocket, Hummingbird, Cache Enabler, NitroPack, Autoptimize, Nginx Helper, WP-Optimize, Comet Cache, FlyingPress, WP Super Cache, valamint host-specifikus megoldások (pl. Rocket.net, Pressable, RunCloud).

## Gyakorlati példák

- Ügynökségi frissítéscsomag:  
  Heti frissítéseket futtatsz 60 webhelyen. A frissítés után a purge automatikusan végbemegy, így nincs kézi belépés site-onként, és csökkennek a „szétesett design” jellegű panaszok.

- Új CSS deploy több site-on:  
  Stagingről élesítés után kijelölöd az érintett site-okat, Purge Cache tömegesen, és minden látogató azonnal az új stílusokat látja.

- Rétegelt cache tisztítása:  
  Egy webshopnál Cloudflare + helyi cache fut. A bővítmény mindkettőt együtt üríti, így nem marad vissza elavult tartalom egyik rétegben sem.

## Beállítás és használat

### Előfeltételek
- MainWP Dashboard és aktív Pro előfizetés.
- A gyerekoldalak sikeresen csatlakoztatva a Dashboardhoz.
- Cloudflare használatakor e-mail és API kulcs.

### Lépések
```
1) Dashboard: Extensions > Cache Control – engedélyezd, mentsd a beállításokat, futtasd a szinkront.
2) Site-specifikus felülírás: Child Site > Cache Control – egyedi beállítások, Cloudflare adatok megadása, mentés + szinkron.
3) Kézi törlés:
   - Manage Sites: jelöld ki a site-okat > Bulk Actions: Purge Cache
   - vagy Overview / Child Site oldalon: Clear Cache gomb.
```

## Hibakeresés

- Nem látod a purge hatását?  
  Ellenőrizd, hogy a gyerekoldalon támogatott cache plugin fut-e, és megfelelő jogosultsággal elérhető-e.

- Cloudflare nem ürül?  
  Vizsgáld meg, hogy az e-mail és API kulcs helyes-e, nincs-e IP vagy tűzfal korlátozás.

- „Last Purged” nem frissül vagy vegyes eredmény látható a logban:  
  Szinkronizáld a site-okat, frissítsd a MainWP Dashboard/Child és az extension verzióit, majd nézd át a log táblát. Ha a probléma ismételhető, érdemes support jegyet nyitni és mellékelni a log kivonatát.

## Kompatibilitás és kiegészítők

Ha kifejezetten a WP Rocket részletes, távoli konfigurálására van szükséged (nem csak purge/preload), a Rockethez külön dedikált MainWP kiegészítő használható. Ez nem váltja ki a Cache Controlt, de kiterjeszti a lehetőségeidet Rocket-specifikus beállításokra.

## Kinek ajánlott és miért?

- Webfejlesztő ügynökségeknek: időt és munkaórát spórolsz, csökken a frissítés utáni hibák száma.
- Karbantartást végző szolgáltatóknak: központi, konzisztens cache-kezelés sok site-on.
- Nagy portfóliót kezelő site tulajdonosoknak: egyszerű, átlátható műveletek, naplózhatóság, állapotkövetés.

## Miért éri meg?

- Kevesebb manuális munka: központosított purge egy kattintással.
- Kevesebb hibajegy: frissítések után azonnal érvényesülnek a változások.
- Jobb teljesítmény: preload csökkenti a hideg cache miatti lassulásokat.
- Biztonságosabb üzem: naplók és állapotjelzések segítik a gyors ellenőrzést és hibaelhárítást.

Összességében a MainWP Cache Control a többoldalas WordPress környezetekben nélkülözhetetlen eszköz a megbízható, automatizált és skálázható cache-kezeléshez.