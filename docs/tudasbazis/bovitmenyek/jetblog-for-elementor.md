---
title: "JetBlog For Elementor"
description: "Blog- és hírjellegű tartalmak látványos megjelenítésére szolgáló Elementor-kiegészítő, fejlett lekérdezésekkel és magazin-szerű elrendezésekkel, kódolás nélkül."
sidebar_label: "JetBlog For Elementor"
---

## Mi ez és milyen problémát old meg?

A JetBlog a Crocoblock blog- és hírportálokra szabott bővítménye az Elementorhoz. Olyan látványos lista- és csempelayoutokat, hírcsíkot és videólejátszási listát kapsz, amelyekkel kód nélkül építhetsz magazin-szerű oldalakat. A fő gond, amit megold: az Elementor alap poszt‑widgetjeinek korlátait átlépi (komplex lekérdezések, gazdag elrendezések, stabil lapozás archívumokon), így gyorsabban és konzisztensen állíthatsz össze nyitó-, kategória- és archív oldalakat.

## Fő funkciók és hogyan működnek

### Hat célzott Elementor‑widget
- **Smart Posts List**: Rugalmas listanézet több oszloppal és sorral. Szabályozhatod a képméreteket, a kiemelt elemek elrendezését, a metaadatok (szerző, dátum, kategória) és kivonatok megjelenítését. Támogatja a szűrést és rendezést, valamint az offsetet, így például kihagyhatod a már kiemelt cikkeket.
- **Smart Posts Tiles**: 9 előre kialakított **csempelayout** magazin-nyitókhoz. Állítható csempe‑méretek és arányok, beépített karusszel, lapozás és navigáció. Kiemelt „fősztori” nagy csempével, mellette kisebb blokkokkal – mindezt drag‑and‑drop.
- **Text Ticker**: „Breaking news” típusú **hírcsík** gördülő vagy írógépes hatású címsorokkal. Beállíthatod az automatikus görgetés sebességét, ikonokat és dátumot. Friss posztokból vagy saját lekérdezésből tölti a tételeket.
- **Video Playlist**: YouTube/Vimeo listák és egyedi videók megjelenítése egységes lejátszóban. Opcionális YouTube API‑kulccsal lekéri a videók **időtartamát**, így pontos metaadatokkal dolgozhatsz. Testreszabható bélyegképek, címek, leírások.
- **Posts Pagination**: Számozott és előző/következő lapozás a JetBlog listákhoz/csempékhez. Az oldalad fő WordPress‑lekérdezéséhez (*main query*) illeszkedik, ezért archívumokon különösen stabil és SEO‑barát.
- **Posts Navigation**: Előző/következő navigáció archív és bejegyzés‑listázó nézetekhez. Személyre szabható címekkel és ikonokkal, a fő lekérdezéssel összhangban.

### Fejlett lekérdezések és adatforrások
- **Egyéni WordPress Query**: meta‑ és dátum‑lekérdezés, taxonómiák bevonása/kizárása, **post offset**, rendezés több szempont szerint.
- **CPT és archívum támogatás**: egyéni bejegyzéstípusok és kategória/archív sablonok gond nélkül működnek.
- **Egyedi mezők**: a widgetek képesek metaadatokat megjeleníteni és ezek alapján **szűrni**. JetEngine‑nel kombinálva teljes értékű dinamikus tartalomkezelést kapsz.

### Teljesítmény és szerkesztői élmény
- **Available Widgets**: csak azokat a JetBlog‑widgeteket kapcsold be, amelyeket használsz – ezzel csökkented a terhelést.
- **Editor Load Level**: szabályozhatod, mennyi stílusopció töltődjön be az Elementorban (None–Full). Nagy oldalaknál érezhetően gyorsabbá teheti a szerkesztést.

## Gyakorlati példák

- **Magazin nyitóoldal**: felül Smart Posts Tiles 9‑es elrendezéssel, ahol az első csempe nagyban mutatja a legfrissebb kiemelt cikket, mellette 4–6 kisebb csempe a „Top sztoriknak”. Alatta Smart Posts List két oszlopban, bekapcsolt kivonatokkal és dátummal, offsettel kizárva a fenti cikkeket.
- **Kategória‑/archív sablon**: az archív sablonodba helyezz Smart Posts List‑et, alá **Posts Pagination**‑t. Mivel a lapozás a *main query*-re épül, az URL‑ek tiszták maradnak, és a lapozás stabil még többszáz cikkes kategóriákban is.
- **Hírcsík a fejlécben**: Text Ticker az utolsó 10 bejegyzéssel, automatikus gördüléssel, cím előtti ikonokkal. Ideális asztali menüsor fölé vagy mobilon a hero alatt.
- **Videós blokk**: Video Playlist „Heti ajánlók” címmel, YouTube‑videók listájával. API‑kulcs megadásával megjelenik a videók hossza, a látogatók azonnal látják a néznivaló időigényét.

## Előnyök és értékajánlat

- **Időmegtakarítás**: kész magazin‑mintázatok, kevesebb manuális CSS és nincs szükség PHP‑kódra összetett szűréshez.
- **Professzionális megjelenés**: látványos csempék, listák, hírcsík és videólejátszó egységes dizájnnal.
- **Skálázhatóság**: a *main query*-hez igazodó lapozás és navigáció nagy tartalomkészleteken is stabil.
- **Költséghatékonyság**: Elementor Pro nélkül is erős blog/hír funkciókat kapsz.
- **Szerkesztői teljesítmény**: a widget‑kapcsolók és az Editor Load Level segítenek gyorsan dolgozni nagy projekteken.

## Célközönség

- **Online magazinok és hírportálok**: nyitók és rovatoldalak gyors összeállításához.
- **Tartalomgazdag blogok**: kategória‑ és archív nézetek profi megjelenítéséhez.
- **Ügynökségek és fejlesztők**: sablon‑szintű, stabil lapozással és rugalmas lekérdezésekkel.
- **Videós alkotók**: YouTube/Vimeo blokkok rendezett, metaadatokkal támogatott megjelenítéséhez.
- **Szerkesztők, akik nem kódolnak**: no‑code beállításokkal, vizuális kontrollal.

## Bevezetési tippek és licenc

- Telepítsd az Elementort (Pro nem szükséges).  
- Kapcsold be csak a szükséges **Available Widgets** elemeket.  
- Archív sablonoknál használd a **Posts Pagination/Navigation** widgeteket a *main query* mellett.  
- A **Video Playlist**‑hez érdemes YouTube API‑kulcsot megadni az időtartamokhoz.  
- Licenc: önálló JetBlog előfizetés 1 webhelyre éves díjjal; a bővítmény a Crocoblock csomagok részeként is elérhető, akár lifetime opcióval. A fejlesztő a Crocoblock (Jetimpex Inc.).

```text
Gyors indulási ellenőrzőlista
1) Elementor telepítve és aktiválva
2) JetBlog aktiválva → csak szükséges widgetek bekapcsolva
3) Archiv/Category template: Smart Posts List/Tiles + Posts Pagination
4) Home: Smart Posts Tiles (kiemeltek) + Smart Posts List (friss cikkek)
5) Header: Text Ticker (utolsó 5–10 poszt)
6) Video: Playlist + YouTube API‑kulcs (opcionális)
7) Editor Load Level finomhangolása nagy oldalaknál
```

## Rövid widget‑áttekintő

- **Smart Posts List**: listanézet, oszlop/sor, képméretek, meta/kivonat, szűrés és rendezés.  
- **Smart Posts Tiles**: 9 csempelayout, csempe‑méretek, karusszel, lapozás.  
- **Text Ticker**: hírcsík írógép‑effekttel, autoplay, dátum/ikonok.  
- **Video Playlist**: YouTube/Vimeo lista, egyedi videók, dinamikus metaadatok.  
- **Posts Pagination**: számozott lapozás a fő lekérdezéshez illesztve.  
- **Posts Navigation**: előző/következő navigáció archívumokhoz.

Ezzel a bővítménnyel pontosan azt kapod, amire egy modern magazin‑ vagy hírsite‑nak szüksége van: gyors, látványos és stabil tartalommegjelenítést, fejlett lekérdezésekkel és no‑code szerkesztéssel.