---
title: "WPML Media Translation"
description: "WPML kiegészítő a WordPress médiáinak (képek, videók, PDF-ek) többnyelvű kezeléséhez: nyelvenként eltérő fájlok és média metaadatok fordítása."
sidebar_label: "WPML Media Translation"
---

## Mi ez és milyen problémát old meg?

A WPML Media Translation a WPML ökoszisztéma hivatalos kiegészítője, amely megoldja a többnyelvű média kezelésének két kulcskérdését: 
- hogyan fordítsd a **képekhez tartozó metaadatokat** (alt szöveg, cím, felirat, leírás), és 
- hogyan rendelj **eltérő médiát nyelvenként** ugyanahhoz az oldalhoz vagy termékhez.

Ha például más képet szeretnél mutatni a francia változatban (eltérő jogi jelölések, kulturális különbségek), vagy nyelvek szerint optimalizálnád az alt szövegeket SEO és akadálymentesség miatt, ez a bővítmény erre ad professzionális, szerkesztőbarát megoldást.

## Hogyan működik röviden?

- A **WPML mag** végzi a média metaadatok fordítását (ATE/Translation Management használatával).
- A **Media Translation add‑on** feladata, hogy az oldal/termék fordításaiban tetszőlegesen **másik fájlt** rendelhess a médiamezőkhöz nyelvenként.
- Az „**Automatikus felismerés**” opcióval a WPML okosan kezeli, mikor kell a médiához kapcsolódó szöveges mezőket duplikálni a fordítási felületre (csak ha szükséges).

```text
WPML → Settings → Media Translation
[ ] Automatically detect best options for translating image texts
```

## Fő funkciók, részletesen

- **Média metaadatok fordítása**
  - Az oldal/poszt fordításakor az ATE (Advanced Translation Editor) automatikusan felkínálja a képekhez kapcsolódó meta‑mezők fordítását. Így az alt, cím, felirat, leírás minden nyelven lokalizált lesz – ez egyszerre SEO és akadálymentességi előny.

- **Eltérő média per nyelv**
  - Ugyanazon tartalom fordításaiban teljesen más **képet, videót, PDF‑et** adhatsz meg. Ezt a WPML → Media Translation képernyőn állítod, a kívánt nyelvnél a „Use a different file” funkcióval. A hozzárendelés stabil marad a fordítási frissítések során is.

- **Intelligens duplikációkezelés**
  - A rendszer nem másolja feleslegesen a fizikai képfájlokat. Csak a szükséges **szöveges mezőket** duplikálja (a használt szerkesztő/builder logikájához igazodva). Így a médiatár és az adatbázis tisztább, karcsúbb marad.

- **Kiemelt kép és galériák kezelése**
  - A kiemelt képek és galériák a fordításokkal együtt következetesen szinkronizálhatók vagy cserélhetők. Ha a fordításban más képet szeretnél, a Media Translation felületén rendeld hozzá – a beállítás megmarad.

- **Kompatibilitás, integráció**
  - Gond nélkül működik a főbb oldalszerkesztőkkel (Gutenberg, Elementor, Divi, Beaver Builder) és képtömörítőkkel. A többnyelvű változatokhoz megadott fájlok optimalizálása is kezelhető.

## Gyakorlati példák

- **WooCommerce termékek:** Országonként más csomagolásfotó vagy jogi piktogram. A magyar változatban HUN jelölés, a németben DE‑specifikus összetevőlista a címkén.
- **Marketingoldal hero banner:** Az angol oldalon „Free shipping”, a spanyolon „Envío gratis” felirat szerepel a képen – két külön fájlt állítasz be nyelvenként.
- **Infografikák és letölthető PDF‑ek:** Régiónként eltérő adatokkal. A PDF metaadatai (cím, leírás) is fordíthatók.
- **SEO és AA (akadálymentesség):** Az alt szövegeket és címeket minden nyelven kulcsszó‑aligazítással optimalizálod, javítva a találhatóságot és az olvashatóságot.

## Ajánlott munkafolyamat

1. **Metaadatok fordítása**
   - Küldd az oldalt/posztot fordításra a Translation Managementből.
   - Az ATE-ben fordítsd le a képhez tartozó mezőket (alt, cím, felirat, leírás).
   - Kapcsold be az automatikus felismerést, hogy csak a szükséges média‑szövegek jelenjenek meg fordításra.

2. **Eltérő fájl beállítása nyelvenként**
   - Aktiváld a Media Translation add‑ont.
   - Nyisd meg a WPML → Media Translation képernyőt.
   - Válaszd ki a médiát, majd a célnyelvet, és használd a „Use a different file” opciót.
   - Mentsd – a cserekép stabilan kapcsolódik a fordításhoz.

Tipp: Ha a fordítófelületen nem látsz média URL‑t, az normális. A médiák ID‑alapúak, a csere a Media Translation képernyőn történik.

## Előnyök és értékajánlat

- **Pontosan azt a képet mutatod**, amit az adott nyelvi közönségnek szeretnél.
- **Jobb SEO és akadálymentesség** a lokalizált alt/cím mezőkkel.
- **Kevesebb adatbázis‑terhelés**, nincs felesleges fájl‑duplikáció.
- **Stabil fordítási folyamat**: a csereképek nem vesznek el ATE/TM frissítésekkor.
- **Időmegtakarítás**: az automatikus felismerés csak a szükséges mezőket hozza át, kevesebb kattintás, kevesebb hibalehetőség.

## Kinek ajánlott?

- **Webáruházaknak (WooCommerce):** áruképek, címkék, jogi jelölések nyelvenként eltérők lehetnek.
- **Marketingcsapatoknak és ügynökségeknek:** A/B‑tesztelt bannerek és üzenetek lokalizált képi változatai.
- **Szerkesztőségeknek, blogoknak:** Infografikák és illusztrációk régióspecifikus adaptációi.
- **SEO/AA fókuszú csapatoknak:** Nyelvspecifikus alt/cím szövegek a jobb rangsorolás és hozzáférhetőség érdekében.
- **Oldalszerkesztőket használóknak:** Gutenberg/Elementor/Divi alatti médiamezők fordítása és cserefájl‑kezelése zökkenőmentesen.

## Rendszerkövetelmények és megjegyzések

- A Media Translation a **WPML Multilingual CMS** részeként használható; önmagában nem működik.
- A média metaadatok fordítását a **WPML fordítófelületei** végzik; a **csereképek nyelvenkénti hozzárendelése** a Media Translation feladata.
- Az „automatikus felismerés” alapértelmezésben minimalizálja a szükségtelen meződuplikációt.
- Frissítések során a csereképek hozzárendelése megmarad.
- A bővítményt az **OnTheGoSystems Limited** fejleszti és tartja karban.

Ezzel a kiegészítővel teljes kontrollt kapsz a többnyelvű médiáid felett: eldöntheted, mikor elég a metaadatok fordítása, és mikor kell valóban másik fájlt megjeleníteni – mindezt biztonságosan, a fordítási folyamatokkal szinkronban.