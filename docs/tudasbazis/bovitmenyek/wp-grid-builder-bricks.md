---
title: "WP Grid Builder - Bricks"
description: "Hivatalos kiegészítő, amely a WP Grid Builder facetes szűrését és rugalmas rácsait natívan beépíti a Bricks szerkesztőbe – kód és shortcode nélkül."
sidebar_label: "WP Grid Builder - Bricks"
---

## Mi ez és milyen problémát old meg?

A WP Grid Builder – Bricks egy hivatalos kiegészítő, amely összekapcsolja a WP Grid Buildert a Bricks vizuális oldalépítővel. Két új Bricks‑elem (Grid és Facet) jelenik meg, így közvetlenül a vásznon tudsz facetes szűrést és fejlett rácsokat építeni. Nem kell shortcode‑okkal vagy egyedi kóddal bajlódnod: az összerendelés kattintással történik, a találatok pedig azonnal, oldalújratöltés nélkül frissülnek.

A kiegészítő különösen akkor hasznos, ha sok elemet (bejegyzéseket, termékeket, portfóliót) szeretnél gyorsan és pontosan szűrhetővé tenni Bricks alatt.

## Hogyan működik röviden?

- A Bricksben megjelenik két új elem: **Grid** és **Facet**.
- A **Grid** elem képes WP Grid Builder rácsok és archív eredmények megjelenítésére.
- A **Facet** elem kiválaszt egy szűrendő célt (Grid, Posts, Products, vagy akár Container/Block/Div), és AJAX‑szal frissíti annak tartalmát – csak a szükséges komponensek renderelődnek újra, nem az egész oldal.
- Ha a szűrendő elem nem ugyanazon a vásznon van (például popupban), a cél elem azonosítója is megadható.

Példa elem‑azonosító:
```
#brxe-abc123
```

## Fő funkciók, érthetően

- **Két natív Bricks‑elem (Grid, Facet)**: A Grid a megjelenítést adja (Masonry/Metro/Justified, reszponzív beállítások, lazy‑loading), a Facet pedig a szűrést (taxonómiák, mezők, tartományok, kereső).
- **Facetes szűrés Bricks elemekre**: Nem csak rácsokra, hanem a Bricks saját elemeire is alkalmazhatod (Posts, Products, Container/Block/Div). Archív sablonok eredményei is megjeleníthetők Gridben.
- **Teljesítményorientált működés**: A WP Grid Builder index‑táblát és egyedi AJAX végpontokat használ a gyors szűréshez. Így nagy adatállomány mellett is azonnali a reakció, minimális szerver‑ és hálózati terheléssel.
- **Széles facet‑típus választék**: Kategória/címke választók, ár‑ és dátumtartomány, értékelés, készlet, egyedi mezők (ACF/Meta Box/PODS kompatibilitás), keresőmező, pagináció és “Load more”.
- **URL és előzmény szinkron**: A választott szűrési állapot megosztható és visszaállítható (hasznos kampányokhoz, ügyfélszolgálathoz).
- **WooCommerce‑re optimalizálva**: Ár, készlet, akció, értékelés szerinti szűrés; termékkatalógusok gyors, stabil facetezése.
- **Szerkesztőben élő előnézet**: Amit beállítasz, azt azonnal látod. Nincs shortcode, nincs találgatás.

## Gyors beállítás lépésről lépésre

1. Telepítsd és aktiváld a WP Grid Buildert és a Brickshez készült kiegészítőt.
2. Nyisd meg az oldalt Bricksben, ahová a listát és a szűrőket szeretnéd.
3. Helyezd el a **Grid** elemet (vagy használd a Bricks Posts/Products elemet).
4. Helyezd el a **Facet** elemet.
5. A Facet elemben a “Select a grid or element to filter” legördülőben válaszd ki a szűrendő elemet. Ha a cél popupban van, add meg az elem ID‑ját, például:
   ```
   #brxe-abc123
   ```
6. Szükség esetén futtasd a WP Grid Builder indexelését (különösen új mezők/facetek után).
7. Teszteld a szűrési kombinációkat és a paginációt/“Load more” működését.

## Gyakorlati példák

- **Blog/portfólió**: Kategória + címke + szerző + dátumtartomány. A felhasználó kiválasztja a témát és az időszakot, a lista azonnal frissül.
- **Termékkatalógus**: Ár csúszka + készlet + értékelés + attribútumok (méret, szín). A készlet és az ár azonnal szűkíti a találatokat, nincs oldalfrissítés.
- **Csapat/adatbázis**: Telephely + készségek + osztály. Gyors belső kereséshez és HR‑szűréshez ideális.
- **Események**: Dátumtartomány + helyszín + kategória. Naptárnézet helyett facetes listával pontos találatokat adsz.

## Bevált gyakorlatok és korlátozások

- **Ne használd** a Bricks “Infinite scroll” opcióját ezeknél a listáknál; helyette alkalmazz **paginációs facete**t vagy **Load more**‑t.
- A Bricks “Cache query loop” opcióját **kapcsold ki**, különben váratlan lekérdezési viselkedést kaphatsz.
- A **facet és a szűrendő elem legyen ugyanazon az oldalon**. Popupnál adj meg elemazonosítót.
- **Ne keverd** más szűrési rendszerekkel (például a Bricks saját filtereivel), mert ütközésekhez vezethet.
- **Query Loop karusszelben/sliderben nem támogatott** – a facetes frissítés nem fog megbízhatóan működni.

## Előnyök és értékajánlat

- **Kódmentes facetezés** Bricks alatt: percek alatt összekattintható.
- **Villámgyors** szűrés nagy adatbázison is az index‑tábla és az egyedi AJAX miatt.
- **Konzisztens szerkesztői élmény**: élő előnézet, nincs shortcode.
- **E‑kereskedelemre kész**: ár/készlet/értékelés és egyedi attribútumok szűrése.
- **Megosztható találati állapot**: URL‑szinkronnal könnyebb támogatást és kampánykommunikációt adni.

## Kinek ajánlott?

- **Bricks felhasználóknak**, akik facetes, AJAX‑os szűrést és rugalmas rácsot akarnak kódolás nélkül.
- **Webügynökségeknek**, akik skálázható, újrahasznosítható listákat építenek ügyfeleknek.
- **Webshopoknak**, ahol az ár, készlet és értékelés szerinti szűrés kulcs a konverzióhoz.
- **Nagy tartalomkatalógussal** dolgozóknak (blog, híroldal, könyvtár, directory), ahol a sebesség és a pontosság kritikus.

## Gyors hibaelhárítás

- Nincsenek találatok? Ellenőrizd az indexelést és a facet‑beállításokat.
- Nem frissül a lista? Kapcsold ki a Query Loop cache‑t, és ellenőrizd a cél elem kiválasztását/ID‑ját.
- Nem működik a végtelen görgetés? Használj paginációs facete‑t vagy “Load more”‑t.

Ezzel a kiegészítővel a Bricks alatt végre tényleg natív, gyors és tartósan karbantartható facetes listákat építhetsz – kompromisszumok és kódolás nélkül.