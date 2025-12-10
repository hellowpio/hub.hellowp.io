---
title: "MainWP Matomo Extension"
description: "Hivatalos MainWP-kiegészítő, amellyel a Matomo analitikát egy központi MainWP irányítópultban követheted és összevetheted több WordPress webhely között."
sidebar_label: "MainWP Matomo Extension"
---

## Mi ez és milyen problémát old meg?

A **MainWP Matomo Extension** egy hivatalos MainWP-bővítmény, amely a **Matomo** (korábban Piwik) analitikai adatait jeleníti meg **központilag** a MainWP irányítópultodban. Nem nyomkövető és nem helyettesíti a Matomót: a mérés a Matomóban történik, a kiegészítő pedig a Matomo **API**-ján keresztül olvassa be az adatokat. Így ügynökségként vagy fejlesztőként nem kell tucatnyi külön Matomo-fiókba belépned: egyetlen felületen látod az összes webhely fő mutatóit, gyorsan összevetheted őket, és egyszerűbbé válik a riportolás.

## Hogyan működik röviden?

- A MainWP-ben megadod a **Matomo Dashboard URL-jét** és az **API tokent**.
- A kezelt **Child Site**-okat hozzákapcsolod a megfelelő **Matomo site ID**-khez.
- A bővítmény a Matomo API-n keresztül lekéri és widgetekben megjeleníti a fő KPI-ket.
- A mérőkódot nem kezeli: a Matomo **követőkódját külön** kell beillesztened.

Fontos kompatibilitás:
- Szükséges: **MainWP Core** és **Pro** hozzáférés, valamint **Matomo On-Premise vagy Cloud**.
- Nem kompatibilis a **Matomo for WordPress** pluginnal és a **Piwik Pro**-val.
- A bővítmény nem tárolja és nem módosítja az analitikai adatokat, csak **lekéri és megjeleníti** őket.

## Fő funkciók és mit csinálnak

- **Globális és webhelyenkénti widgetek**: A fő irányítópulton összesített képet kapsz, míg az egyes Child Site-ok oldalán részletes, webhelyspecifikus nézetet látsz. Ez segít azonnal észrevenni, hol történt kiugrás vagy visszaesés.
- **Kulcsmutatók áttekintése**: Látogatások, oldalmegtekintések, **oldalak/látogatás**, **visszafordulási arány**, **átlagos idő az oldalon**, **új látogatók**, opcionálisan **egyedi látogatók**. Ezek a KPI-k a leggyakoribb riportigényeket lefedik.
- **Testreszabható rácselrendezés**: Widgeteket mozgathatsz, 2–3 oszlopos elrendezést állíthatsz be. Így a legfontosabb mutatókat a szem elé helyezheted.
- **Időtáv és frissítési gyakoriság**: Beállíthatod, hogy az **elmúlt hét/hónap** adatai jelenjenek meg, és milyen gyakran frissüljenek a kimutatások. Ez illeszthető a heti vagy havi riportciklusodhoz.
- **Lokalizáció**: A felület fordítható, így kényelmes a csapatod számára is.
- **Site ID hozzárendelés**: A Child Site és a Matomo site közti párosítás biztosítja, hogy minden webhely a saját, pontos adatait mutassa.

## Telepítés és konfiguráció

1. **Előkészítés**: Győződj meg róla, hogy a Matomo működik (On-Premise vagy Cloud), elérhető a **Dashboard URL**, és van **API tokened**.
2. **Kapcsolódás** a MainWP-ben: Lépj az Extension beállításaiba és add meg az URL-t, a tokent, a **timeoutot**, az **időtartományt** és a **frissítési gyakoriságot**.
3. **Hozzárendelés**: A Manage Sites nézetben minden Child Site szerkesztésénél válaszd ki a megfelelő **Matomo site ID**-t.
4. **Widgetek testreszabása**: Rendezd a widgeteket és állítsd be az oszlopszámot az áttekinthetőség érdekében.
5. **Egyedi látogatók**: Ha az “utolsó 7/30 nap” nézetben is szeretnéd a **Unique Visitors** mutatót, engedélyezd a Matomóban az egyedi dátumtartományokra vonatkozó számítást.

Példa beállítások:
```
Matomo URL: https://analytics.sajat-doma.in
API Token: ************************
Timeout: 20s
Date Range: Last 30 days
Auto Refresh: 6h
```

## Gyakorlati példák

- **Ügynökségi reggeli ellenőrzés**: Hétfőn megnyitod a MainWP globális nézetét. Egyből látod, melyik webhelyeknél nőtt meg a visszafordulási arány vagy esett vissza a forgalom. A gyanús tételre kattintva részletesen átnézed az adott site widgetjeit, majd feladatot adsz a csapatnak.
- **Klienshívás előtti gyors áttekintés**: Egy konkrét ügyfél site-ján egy kattintással eléred az elmúlt hónap fő számait, és fel tudod hívni a figyelmet a kiemelkedő tartalmakra vagy kampányokra.
- **Adatvédelem-központú projektek**: Olyan ügyfeleknél, ahol a GDPR elsődleges szempont, Matomót használsz mérésre, a MainWP kiegészítő pedig a napi munkához ad központi, átlátható rálátást.

## Előnyök és értékajánlat

- **Időmegtakarítás**: Egy felületen látod az összes site mutatóit, nincs több tucatnyi belépés és tab.
- **Gyors döntéstámogatás**: A testreszabható widgetekkel a lényeg azonnal a szemed előtt van.
- **Következetes riportolás**: Egységes KPI-k, könnyebb belső és ügyfélkommunikáció.
- **Adatvédelem tiszteletben tartása**: A bővítmény csak **API-lekérést** végez; az adatok a Matomo rendszerében maradnak.

## Kinek ajánlott?

- **WordPress ügynökségeknek** és **freelancereknek**, akik sok webhelyet kezelnek és központi analitikára vágynak.
- **Marketing- és tartalomcsapatoknak**, akiknek gyors állapotképre és összehasonlítható mutatókra van szükségük.
- **IT/DevOps** csapatoknak, akik a teljes ökoszisztéma egészségét figyelik.

Nem neked való, ha kizárólag más analitikát használsz, **Matomo nélkül**, vagy ha a site-okon a **Matomo for WordPress** plugint futtatod.

## Korlátok és hibakeresés

- **Követőkódot nem illeszt be**: a Matomo mérőkódját külön kell telepítened.
- **Kompatibilitás**: csak különálló Matomo Dashboarddal működik (On-Premise/Cloud), Piwik Pro és a Matomo for WordPress nem támogatott.
- **API hibák (401/500)**: gyakran tűzfal/WAF okozza. Ellenőrizd a szervernaplókat, engedélyezd a MainWP irányítópult IP-jét, vizsgáld felül az **API token** jogosultságait és a rate limit szabályokat.

## Összegzés

A **MainWP Matomo Extension** a Matomo analitikát hozza be a MainWP-be, hogy több webhely forgalmát **egy központi, testreszabható** nézetben lásd. Nem mér és nem helyettesíti a Matomót, hanem professzionális, ügynökségi használatra optimalizált **riport- és monitoring** eszközt ad a napi munkádhoz. Ha több WordPress oldalt kezelsz és fontos a gyors, adatvédelmi szempontból is korrekt rálátás, ez a kiegészítő neked szól.