---
title: "WP Grid Builder - Map Facet"
description: "Interaktív térképfacet a WP Grid Builderhez. Google/Mapbox/Leaflet támogatás, geolokáció, marker‑klaszterezés és távolság szerinti rendezés kódolás nélkül."
sidebar_label: "WP Grid Builder - Map Facet"
---

## Mi ez és milyen problémát old meg?

A Map Facet a WP Grid Builder hivatalos kiegészítője, amellyel térképet használhatsz **szűrőként**. A bejegyzéseid, taxonómiáid vagy felhasználóid egy‑egy **marker** formájában jelennek meg a térképen, a hozzájuk rendelt **szélesség/hosszúság** (lat/lng) koordináták alapján. A felhasználó a térkép mozgatásával és nagyításával valós időben szűrheti az eredményeket, így könnyen építhetsz **üzletkeresőt, ingatlankeresőt, esemény‑ vagy szolgáltatás‑katalógust** – kódolás nélkül.

## Hogyan működik röviden?

- A facettek a WP Grid Builder indexelt adatbázisát használják, ezért a szűrés gyors és folyamatos.
- A térkép **Google Maps**, **Mapbox** vagy **Leaflet** alapon jelenik meg.
- A markerek forrása lehet ACF/Meta Box térképmező, saját lat/lng mező, vagy bármely mező, amelyben lat/lng kulcsokkal található tömb.
- A térkép nézetéhez kötött szűrés bekapcsolható: amit a térképen látsz, azt kapod a találatokban.
- A marker‑popupok tartalma a WP REST API‑n keresztül töltődik, így a lista frissítése gördülékeny.
- A távolság szerinti rendezés akkor érhető el, ha Geolocation facetet használsz a kiinduló hely meghatározásához.
- Egy facet egy időben **egy** tartalmat/lekérdezést szűr.

## Fő funkciók részletesen

- **Több térképszolgáltató**: választhatsz Google Maps, Mapbox vagy a nyílt forrású Leaflet között. Így rugalmasan illeszkedsz a projekted technikai és költségkeretéhez.
- **Geolocation facet (cím/hely kereső)**: beírhatod a címet vagy észleltetheted a böngészővel a felhasználó aktuális pozícióját. A talált koordinátához sugár‑ és távolság‑alapú szűrést kapcsolhatsz.
- **Pan to Search és térkép‑alapú szűrés**: ha a felhasználó mozgatja vagy nagyítja a térképet, az eredmények automatikusan a látható területre szűkülnek. Kényelmes, „térkép, mint szűrő” élményt ad.
- **Marker clustering**: sok pont esetén a rendszer klasztereket képez, így a térkép áttekinthető marad. A klaszterikonok megjelenése szabályozható (méret/menyiség szerint), a csoportosítás viselkedése finomhangolható.
- **Egyedi ikonok és popupok**: feltételek alapján adhatsz külön marker‑ikonokat és testreszabott popup‑tartalmakat. A popupba kártyát tehetsz (ugyanazt a „card” sablont, amit a gridekhez használsz), a tartalom betöltése REST alapon történik.
- **Highlight marker**: amikor az egérrel egy kártyára viszel, a hozzá tartozó marker kiemelhető a térképen – intuitív kapcsolat a lista és a térkép között.
- **ACF és Meta Box integráció**: natív támogatás az ismert térképmezőkhöz, valamint a markerhez tartozó egyedi mezőkhöz. Nem kell adattranszformációt írnod.
- **Saját lat/lng mezők**: ha nincs ACF/Meta Box, a Map Facet saját mezőkkel is tud koordinátákat kezelni (posztoknál, taxonómiáknál, felhasználóknál), akár a grid előnézetéből felvéve.
- **Teljesítmény és UX**: az indexelt facetrendszer gyors, a több térképfacet egyoldalas használata optimalizált, a marker- és klaszterfrissítések gördülékenyek.

## Gyakorlati példák

- **Üzletkereső (store locator)**: a látogató beír egy címet, a Geolocation facet beállítja a középpontot, a térkép és a lista a megadott sugáron belüli boltokat mutatja. A „Rendezés távolság szerint” a legközelebbi találatokat hozza előre.
- **Ingatlankatalógus**: a térképen klaszterek jelzik a sűrű területeket; ránagyítva felbomlanak egyedi markerekre. A kártyára húzva az egeret kiemelődik a megfelelő marker.
- **Esemény‑térkép**: „Pan to Search” bekapcsolva csak a látható városrész eseményeit listázod. A popupban rövid kártya jelenik meg dátummal és „Részletek” gombbal.
- **Turizmus/szolgáltatás‑kereső**: kategória‑facetekkel kombinálva a térképet tényleges facettált keresővé teheted (pl. „Csak családbarát szállások a belvárosban”).

## Előnyök és értékajánlat

- **Kód nélküli megoldás**: nem kell külön Google/Mapbox integrációt fejlesztened.
- **Gyors és skálázható**: indexelt szűrés, klaszterezés és REST‑es betöltés nagy adatállományra is.
- **Rugalmas adatforrás**: ACF/Meta Box vagy saját mezők – azt használod, ami már a projektben van.
- **Kiemelkedő UX**: „Pan to Search”, kiemelés kártya‑hoverre, egyedi ikonok és popupok – egységes felületen állítható.
- **Ökoszisztéma‑integráció**: a facettek bármely WP Grid Builder gridhez vagy külső lekérdezéshez kapcsolhatók; a grid megjelenítése opcionális (lehet csak térképnézet is).

## Kinek ajánlott?

- **Ügynökségeknek és fejlesztőknek**, akik gyorsan akarnak térképes szűrést adni ügyfeleiknek anélkül, hogy egyedi kódot írnának.
- **Katalógus‑ és piactér‑üzemeltetőknek**, akik helyalapú böngészést kínálnának nagy adattömegre.
- **Kiskereskedelmi láncoknak**, akik üzletkeresőt szeretnének távolság szerinti rendezéssel.
- **Turisztikai és rendezvényszervező oldalaknak**, ahol a földrajzi kontextus kulcsfontosságú.

## Követelmények és megfontolások

- Szükséged van a WP Grid Builder fő bővítményére; a fő bővítmény rendszerkövetelményei az irányadók.
- Google és/vagy Mapbox használatához **érvényes API‑kulcs** szükséges. Leaflet esetén válassz csempeszolgáltatót.
- Egy facet **egyetlen** tartalmat/lekérdezést szűr egyszerre.
- A **távolság szerinti rendezés** csak akkor elérhető, ha a szűrés kiindulópontját Geolocation facet adja.
- A külső térképszolgáltatók használatának **költsége** a szolgáltató díjazásától függ; tervezéskor kalkuláld be.

## Gyors bevezetési folyamat

1. **Adatelőkészítés**: add hozzá a lat/lng koordinátákat ACF/Meta Box mezőkkel vagy a Map Facet saját „Map coordinates” mezőivel.
2. **Facet létrehozása**: új facet → Action: Filter → Filter Type: Map; válaszd ki a térképszolgáltatót, állítsd be a vezérlőket, a „Pan to Search” opciót, a markereket és klasztereket.
3. **Geolokáció és rendezés**: adj hozzá Geolocation facetet címkeresőként/helyérzékeléshez; tegyél fel Sort facetet, és válaszd az „Order by: Distance” opciót.
4. **Hozzárendelés**: kapcsold a facetteket a gridhez vagy a kívánt lekérdezéshez. Ha akarod, csak a térképet jelenítsd meg.
5. **Teszt és finomhangolás**: ellenőrizd a marker‑popupokat, a klaszterezést, a kiemelést és a teljesítményt különböző zoomszinteken.

## Összegzés

A Map Facet professzionális, nagy teljesítményű megoldás WordPresshez, amellyel konfigurációval – nem fejlesztéssel – építhetsz élvonalbeli, helyalapú keresőt. Több térképszolgáltató, geolokáció, klaszterezés, távolság szerinti rendezés és gazdag testreszabás egyetlen, összefüggő rendszerben. Ha térkép‑alapú szűrésre van szükséged, ez a legrövidebb út a kész, skálázható megoldáshoz.