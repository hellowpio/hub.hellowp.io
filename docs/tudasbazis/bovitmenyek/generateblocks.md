---
title: "GenerateBlocks"
description: "Könnyű, teljesítményre optimalizált blokk‑készlet a WordPress blokkszerkesztőjéhez, amellyel pár sokoldalú alapblokkból skálázható elrendezéseket és komponenseket építhetsz."
sidebar_label: "GenerateBlocks"
---

## Mi ez és milyen problémát old meg?

A GenerateBlocks egy könnyű, **Gutenberg‑alapú** blokk‑készlet. Célja, hogy néhány **sokoldalúan paraméterezhető alapblokkal** (nem tucatnyi „kész” elem) felépíthess bármilyen elrendezést – felesleges bloat és külső függőségek nélkül. Tökéletes, ha gyors, tiszta, karbantartható kódot szeretnél, és eleged van a nehézkes oldalépítőkből.

Megoldja:
- a **lassú oldalépítést**: mintákkal és rugalmas blokkokkal gyorsít,
- a **dizájn‑inkonzisztenciát**: központi stíluskezeléssel egységesít,
- a **plugin‑dzsungelt**: pop‑up, slide‑in, feltételes megjelenítés és mega menü egy helyen,
- a **bloatot**: csak a használt blokkokhoz generál minimális CSS‑t.

## Fő funkciók – mit csinál pontosan?

### Alapblokkok
- **Container** és **Grid**: reszponzív szekciók és rácsok építéséhez. Részletes vezérlés padding, gap, háttér, árnyék, szegély, kerekítés, igazítás és breakpoint‑specifikus beállítások felett.
- **Text/Headline/Button**: tipográfia és állapotok (hover/focus) pontos állítása; gomboknál kitöltés/outline, ikonok, spacing és reszponzív méretek.
- **Image**: képarány, objektum‑pozíció, kerekítés, keret és maszkolás; képek rácsba illesztése egyszerű.
- **Shape**: dekoratív alakzatok (pl. szeparátorok, hullámok) teljesen vektoros, CSS‑barát megoldással.
- **Query** (Looper, Loop Item, No Results, Page Numbers): tartalmi listák és kártyarácsok építése. Saját lekérdezés vagy az aktuális sablon öröklése; összetevőnként állítható elrendezés.

### Dinamikus tartalom (Dynamic Tags)
Blokkon belül használhatsz **dinamikus címkéket** poszt‑ és szerző‑adatokhoz, taxonómiákhoz, linkekhez – kódolás nélkül.

```
{{post_title}}
{{post_date}}
{{term_list taxonomy="category"}}
{{author_name}}
```

Ezeket bármely szöveg‑ vagy gombblokkban használhatod, akár Query loopban is.

### Teljesítmény és kimenet
- **Minimalista CSS**: csak a ténylegesen használt beállításokra generál stílust.
- **Tiszta HTML5**: felesleges wrapper és függőség nélkül, így gyors és SEO‑barát.

### Mintakönyvtár
- Beépített **minták** (patternök) segítenek pillanatok alatt összerakni hero, pricing, feature, testimonial, CTA és footer szekciókat. Öröklik a téma tipográfiáját és színeit, így már alapból egységes a megjelenés.

### GenerateBlocks Pro kiegészítések
- **Global Styles**: új generációs stílus‑motor saját osztályokkal, pseudo‑elemekkel/állapotokkal és fejlett breakpoint‑kezeléssel. Egyetlen helyen definiálod a gombok, tipók, kártyák mintáit, majd bárhol újrahasznosítod.
- **Pattern Library (Pro)**: több száz professzionális minta, amelyek a Global Styles‑t használják – így percek alatt „oldalszintű” eredményt kapsz.
- **Asset Library**: saját **SVG ikonok és formák** központi tárhelye; egy kattintással beszúrhatod és újrahasznosíthatod őket.
- **Device Visibility**: blokkok megjelenítése/elrejtése eszköz‑nézetenként.
- **Copy/Paste/Clear Styles**: lokális stílusok gyors másolása és tisztítása a szerkesztőben.
- **Overlay Panels + Feltételek**: pop‑up, slide‑in, off‑canvas, tooltip és mega menü beépítve. Megjelenítési szabályokkal célozhatsz oldal‑típusra, user‑szerepre, eszközre, dátum/időre, UTM‑re stb.
- **Query bővítések**: meta és opciós adatok olvasása, azonnali lapozás és örökölt lekérdezés sablonokhoz.
- **GenerateCloud**: saját mintakönyvtárak megosztása több webhely között (ügynökségi és multisite workflow‑hoz ideális).

## Gyakorlati példák

### 1) Hero szekció 5 perc alatt
1. Helyezz el egy **Container** blokkot, adj háttérképet vagy színt.
2. Tegyél bele egy **Grid**‑et: bal oszlop Headline + Text + Button, jobb oszlop Image.
3. Reszponzív finomhangolás: oszlopszélesség, gap, tipóméret mobil/tablet nézetben.

### 2) Blogkártya‑rács a Query‑vel
- Helyezz el egy **Query** blokkot, állítsd „örökölt” módra vagy adj meg saját feltételeket.
- A **Loop Item** belsejébe pakold a kártyaelemeket:

```
Image (featured)
Headline ({{post_title}} linkelve)
Text ({{post_excerpt}})
Button ("Tovább")
```

- Adj hozzá **Page Numbers** blokkot lapozáshoz és **No Results** blokkot üres állapotra.

### 3) Pop‑up lead‑gyűjtő feltételekkel
- Hozz létre egy **Overlay Panel**‑t modal módban.
- Tartalom: Headline, rövid Text, Email mező/gomb.
- Feltétel: csak blogcikkeken, csak mobilon, és csak akkor, ha a látogató nem bejelentkezett.

### 4) Dizájnrendszer Global Styles‑szal
- Készíts egy gombstílust, majd osztály alapján alkalmazd bárhol:

```
.gbtn--primary { /* gombváltozat */
  --gb-button-bg: var(--color-primary);
  --gb-button-text: #fff;
}
.gbtn--primary:hover { filter: brightness(1.1); }
```

Ezzel elkerülöd az ismétlést, és egy frissítéssel az egész oldalrendszert átszínezheted.

## Előnyök és értékajánlat

- **Sebesség**: minimális kód, gyors betöltés.
- **Karbantarthatóság**: központi stílusok, kevesebb egyedi CSS.
- **Kevesebb plugin**: overlay, feltételek, ikonkezelés egy csomagban.
- **Gyors szerkesztés**: minták + másolható stílusok = kevesebb munkaóra.
- **Skálázhatóság**: dizájnrendszeres megközelítés nagy projektekhez.
- **Tiszta kimenet**: SEO‑ és fejlesztőbarát HTML/CSS.

## Kinek ajánlott?

- **Ügynökségek és multisite csapatok**: egységes dizájn és minta‑megosztás.
- **WordPress fejlesztők**: teljes kontroll, tiszta kimenet, bővíthetőség.
- **Site builderek és tartalomkészítők**: gyors építés mintákból, kód nélkül.
- **Teljesítmény‑mániások**: bloatmentes, optimalizált megoldás.

## Telepítés és támogatás

A bővítményt a WordPress adminban a bővítménytelepítőből, vagy .zip feltöltéssel teheted fel. Részletes dokumentáció és fórum alapú támogatás érhető el; a Pro változat előfizetéshez kötött és prémium támogatást biztosít. Elérhető ingyenes és Pro kiadás, továbbá csomag, amely a kapcsolódó termékekkel együtt érkezik.

## Megjegyzések és korlátok

- **Alapblokk‑filozófia**: nem kapsz „kész” testimonial/pricing blokkokat; ezeket mintákból és kombinált alapblokkokból rakod össze. Cserébe kisebb a bloat és nagyobb a kontroll – a tanulási görbe eleinte meredekebb lehet.
- **Új funkciók stabilitása**: a „feltételes megjelenítés minden blokkra” típusú újdonságok frissen érkezhetnek; élesítés előtt ellenőrizd az aktuális stabil állapotot és a változásnaplókat.