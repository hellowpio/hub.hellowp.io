---
title: "Analytify Easy Digital Downloads"
description: "GA4-alapú e‑kereskedelmi mérés és riportok Easy Digital Downloads áruházakhoz az Analytify Pro integrált moduljaként, közvetlenül a WordPress adminban."
sidebar_label: "Analytify Easy Digital Downloads"
---

## Mi ez és milyen problémát old meg?

Az Analytify Easy Digital Downloads modul az Analytify Pro része, és azt tudja, amire a digitális termékboltoknak szüksége van: automatikusan beköti az EDD vásárlói interakcióit a GA4-be, majd a legfontosabb e‑kereskedelmi mutatókat közvetlenül a WordPress adminban mutatja. Nem kell kézzel kódolnod, nem kell GTM‑mel bajlódnod; a termékmegtekintéstől a vásárlásig minden esemény követése és riportolása megoldott.

A modul megszünteti a szétszórt riportolást: ugyanabban a felületen látod a tölcsért, a termékteljesítményt, a kuponokat és a visszatérítéseket, ahol a boltodat kezeled. A háttérben GA4‑re épít, így a teljes vásárlói út a GA4‑ben is elemezhető.

## Hogyan működik röviden?

A modul az EDD által kiváltott interakciókat GA4‑eseményekké alakítja (például view_item, add_to_cart, begin_checkout, purchase), és elküldi a GA4‑be. Ugyanezek a számok megjelennek az Analytify EDD irányítópultján is a WordPressen belül. A mérés valós időben ellenőrizhető, és historikusan is elemezhető. A fókusz teljesen GA4; korábbi UA/V3 függőségek nélkül.

## Előfeltételek és telepítés

- WordPress és aktív Easy Digital Downloads bővítmény
- Analytify Pro, összekötve a GA4 tulajdonoddal
- Az EDD modul aktiválása az Analytify Pro Add‑ons nézetében

Lépések áttekintése:

```
WordPress > Analytify > Settings > Authentication > Kapcsolódás GA4-hez
WordPress > Analytify > Add-ons > Easy Digital Downloads > Activate
WordPress > Analytify > Dashboards > EDD
```

Aktiválás után az eseménykövetés automatikusan elindul; nincs szükség további kódolásra. Ha örökölt, külön telepített add‑onnal találkozol, a modulfunkciók ugyanúgy elérhetők az EDD dashboardon.

## Fő funkciók részletesen

- Automatikus GA4 e‑kereskedelmi események
  - A modul rögzíti a kulcslépéseket: termékmegtekintés, kosárba tétel, pénztár indítása, vásárlás. Ez biztosítja, hogy a teljes tölcsér mérhető legyen, és a GA4 Monetization és vásárlói út riportjaiban is megjelenjen.

- Vásárlói viselkedés és tölcsérelemzés
  - Megmutatja, hol esnek ki a felhasználók: termékoldalról nem tesznek kosárba, kosárból nem indul pénztár, vagy a pénztárban hagyják el. Ezek a pontok célzott optimalizációt tesznek lehetővé.

- Termékteljesítmény mélységben
  - Látod termékenként a bevételt, az értékesített darabszámot, a cart‑to‑detail arányt és a részleteket. Így könnyen azonosítod a “vitrinbe való” termékeket és a gyengén konvertálókat.

- Pénztár és vásárlás elemzése
  - Kosárelhagyás arány, pénztárban történő lemorzsolódás, valamint rendelés szintű forrás/közeg (source/medium) attribúció. Ez utóbbi kulcs a kampányok és csatornák ROI‑jának pontos értékeléséhez.

- Kupon- és visszatérítés‑riportok
  - Kuponhasználat, kuponhoz kötött bevétel és konverziók, visszatérítések száma és összege. Egy helyen látod a promóciók hatását és észreveszed az esetleges visszaéléseket.

- Földrajzi bontások
  - Top országok és városok szerinti eladások a WordPress‑irányítópulton. Hasznos lokalizált ajánlatokhoz és terjeszkedési döntésekhez.

- Új statisztikák a dashboardon
  - Konverziós arány, valamint első vásárlók/új ügyfelek mutatók az EDD irányítópultban. Könnyebb külön kezelni az új és visszatérő vevők viselkedését.

## Hol látod a számokat?

- WordPress admin: Analytify > Dashboards > EDD. Itt összefoglaló KPI‑k, tölcsér, termékteljesítmény, kuponok, visszatérítések és földrajzi bontások jelennek meg.
- GA4 felület: valós idejű eseményellenőrzés, monetizációs riportok és a vásárlói út elemzése a részletes attribúcióhoz.

## Gyakorlati példák

- Napi boltmonitorozás
  - Reggel ránézel az EDD dashboardra: bevétel, tranzakciók, AOV és konverziós arány. Ha a konverziód esik, a tölcsérből azonnal látod, melyik lépés romlott.

- Terméklap optimalizálás
  - Egy népszerű letöltés cart‑to‑detail aránya gyenge. A/B tesztelsz CTA‑t és leírást; a változás utáni emelkedést a termékteljesítmény panelen rögtön visszaigazolja a rendszer.

- Kuponstratégia finomhangolása
  - Új kuponkampányt indítasz. A kupon riportban követed a bevételt és a konverziót, majd ellenőrzöd, nőtt‑e a visszatérítések aránya. Ha igen, szigorítasz a feltételeken.

- Csatorna‑ROI mérése
  - A rendeléseknél látszik a forrás/közeg. Ha a fizetett hirdetés alacsony AOV‑val hoz vevőket, költségvetést csoportosítasz át egy jobb teljesítményű csatornára.

## Előnyök és értékajánlat

- Időmegtakarítás: nincs egyedi fejlesztés vagy GTM‑konfigurálás, a mérés “plug and play”.
- Egységes rálátás: a legfontosabb EDD mutatók közvetlenül a WordPressben, mégis GA4‑kompatibilis alapon.
- Jobb döntések: tölcsér‑ és termékszintű insightok, rendelés szintű attribúcióval.
- Kevesebb hibalehetőség: előre beállított GA4 események, konzisztens implementációval.

## Kinek ajánlott?

- Digitális termékeket áruló EDD bolttulajdonosoknak, akik gyorsan, kódolás nélkül akarnak pontos GA4 mérést.
- Marketingeseknek és ügynökségeknek, akik csatorna‑ és kampányteljesítményt, ROI‑t és tölcsérkiesést elemeznek.
- Nem technikai WordPress adminoknak, akik egy helyen, érthetően szeretnék látni a kulcsszámokat.
- Termék‑ és növekedési csapatoknak, akik termékszintű optimalizációt és új vásárlói szerzést mérnek.

## Tippek és hibaelhárítás

- Aktiválás után ellenőrizd az eseményeket a GA4 valós idejű nézetében.
- Ügyelj, hogy ne fusson párhuzamos, duplikáló GA4‑tracking más pluginból vagy tag managerből.
- Ha nem látsz adatot: kapcsold ki a böngésző‑adblockot, ürítsd a cache‑t, és győződj meg róla, hogy az Analytify hitelesítése sikeres és a megfelelő GA4 tulajdonhoz kapcsolódik.

Összességében az Analytify Easy Digital Downloads modul a GA4‑es e‑kereskedelmi mérés bevezetését és napi használatát egyszerűsíti le: automatizált eseménykövetés, átlátható tölcsér, részletes termékteljesítmény, kuponok és visszatérítések – mindez a WordPressen belül, GA4‑re építve. Ha EDD‑t használsz, ez a legrövidebb út a megbízható, döntésképes analitikához.