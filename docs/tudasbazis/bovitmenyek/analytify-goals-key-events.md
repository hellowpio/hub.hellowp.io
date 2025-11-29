---
title: "Analytify Goals (Key Events)"
description: "GA4 kulcsesemények (Key Events) áttekintése és riportolása közvetlenül a WordPress adminban, az Analytify Pro moduljaként."
sidebar_label: "Analytify Goals (Key Events)"
---

## Mi ez és milyen problémát old meg?

Az Analytify Goals (Key Events) az Analytify Pro modulja, amely a Google Analytics 4 kulcseseményeit hozza be a WordPress admin felületre. Ahelyett, hogy a GA4 összetett felületén keresgélnél, a legfontosabb interakciókat – például űrlapbeküldés, letöltés, gombkattintás – egy tiszta, WordPressen belüli irányítópulton látod. Ezzel csökkented az eszközváltást, gyorsabban reagálsz a trendekre, és egyszerűbbé válik a csapatmunka és az ügyfélriportálás.

A GA4 rugalmas „Key Events” modelljére épít: bármely eseményt megjelölhetsz kulcseseményként, és az Analytify ezeket gyűjti, összesíti és vizualizálja.

## Hogyan működik?

- A kulcseseményeket a GA4-ben jelölöd meg (Admin > Events).
- Az Analytify Pro a GA4 adatait beolvassa, és a WordPressben irányítópultként jeleníti meg.
- A modul nem hoz létre önálló eseményeket, az eseménygyűjtést a GA4 vagy kiegészítő Analytify modulok végzik.
- A jelentések a WordPress REST API-t használják, ezért annak elérhetősége szükséges.

Például:
```
GA4 Admin > Events:
- form_submit → Mark as key event: ON
- file_download → Mark as key event: ON
- outbound_click → Mark as key event: ON
```

## Fő funkciók, érthetően

- **Key Events irányítópult WordPressben**: Egy nézetben látod a kulcsesemények teljesítéseit, arányait és trendjeit. Így rögtön kiderül, nőtt-e a feliratkozások vagy a letöltések száma, és melyik tartalom húzza fel a mutatókat.
- **Csatorna- és forrásbontás**: Megmutatja, mely kampányok, források vagy médiumok hozták az eseményeket. Konkrétan láthatod, hogy az organikus keresés, a social vagy egy hirdetéscsoport hozta a több űrlapbeküldést.
- **Részletes nézetek és rangsorok**: Azonosíthatod a legjobban teljesítő eseményeket, oldalakat vagy kampányokat, és gyorsan rátalálsz a szűk keresztmetszetekre.
- **Kezdőbarát, WordPress-be ágyazott UI**: A marketing és tartalomcsapat a megszokott felületen dolgozik, technikai beállítások nélkül jut kulcs KPI-okhoz.
- **Moduláris bővíthetőség**: Más Analytify kiegészítőkkel (Events Tracking, Campaigns, Forms Tracking, WooCommerce/EDD) teljes tölcsért építhetsz az események rögzítésétől a bevételig.

## Gyakorlati példák

- **Leadgenerálás**: Megjelölöd kulcseseménynek a „form_submit”-et. A WordPress irányítópulton látod, mely forrásból jönnek a leadek (pl. social vs. hírlevél), hogyan változik a trend, és melyik CTA működik.
- **Tartalommarketing**: Fájlletöltések („file_download”) kulcseseményként. Egy kattintással kiderül, mely e‑book landoló oldala konvertál a legjobban, és mely csatorna hozza a legtöbb letöltést.
- **Ügynökségi riport**: Ügyfélnek adsz WP-hozzáférést, aki heti státuszban megnézi a kulcsesemények alakulását. Nem kell külön GA4 fiókot kezelni, minden a WordPressben látszik.
- **E‑kereskedelem**: A „view_cart” vagy „add_to_cart” kulcseseményként kijelölve, az e‑commerce modulokkal együtt. Látod, mely kampányok hozzák a kosárba helyezéseket, és hol érdemes optimalizálni a tölcsért.

## Előnyök és értékajánlat

- **Kevesebb eszközváltás**: A kulcs KPI-ok a WordPressben vannak, nincs szükség külön GA4 belépésre az alap riportokhoz.
- **Gyorsabb döntések**: Átlátható trendek és bontások, így hamarabb derül ki, merre érdemes költeni vagy mit kell finomhangolni.
- **Egyszerűbb ügyfélkommunikáció**: A WordPresses riportolás csökkenti a félreértéseket és lerövidíti a jóváhagyási köröket.
- **UA → GA4 átmenet támogatása**: A régi „Goals” gondolkodást a GA4 „Key Events” logikára ülteti át, rugalmasabban követheted a konverziókat.
- **Skálázható ökoszisztéma**: Az események rögzítése és automatizálása kiegészítő modulokkal kódolás nélkül is megoldható.

## Kinek ajánlott?

- **Marketing- és tartalomcsapatoknak**: Kulcsmutatók gyors elérése és kampányhatékonyság mérése a WP-ből.
- **Digitális ügynökségeknek**: Egyszerű, ügyfélbarát riportálás WordPress belépéssel.
- **Webshopoknak és termékmenedzsereknek**: Tölcséresemények és bevételi hatások összekötése.
- **Weboldal-tulajdonosoknak**: Átlátható, kezdőbarát rálátás a legfontosabb felhasználói interakciókra.

## Bevezetési lépések

1. Kapcsold össze a webhelyet a GA4 tulajdonnal az Analytify Pro-ban.
2. A GA4-ben jelöld meg kulcseseményként a fontos interakciókat (Admin > Events).
3. Aktiváld az Analytify Pro-ban a Goals/Key Events modult.
4. Nyisd meg a WordPressben a Key Events irányítópultot, elemezd a fő mutatókat és a bontásokat.
5. Igény szerint kapcsold be az Events Tracking kiegészítőt a tipikus kattintások és letöltések automatikus gyűjtéséhez.

## Rendszerkövetelmények és illesztések

- **Analytify Pro szükséges**: a Key Events funkció a Pro része modulárisan.
- **GA4 tulajdon kötelező**: a kulcseseményeket GA4-ben jelölöd meg, az Analytify ezeket jeleníti meg.
- **WordPress REST API**: a jelentések betöltéséhez engedélyezett REST API szükséges.
- **Eseménygyűjtés**: egyedi eseményekhez használhatod az Analytify Events Trackinget és más modulokat (Campaigns, Forms Tracking, WooCommerce/EDD).

## Mit nem csinál önmagában?

- Nem hoz létre GA4 eseményeket; ezeket GA4-ben definiálod vagy kiegészítő modulokkal gyűjtöd.
- Nem helyettesíti a GA4 admin beállításokat; a definíciók és jelölések továbbra is a GA4-ben történnek.

---

Ha szeretnéd, készítek egy helyszíni ellenőrzőlistát a te WordPress környezetedhez: GA4-tulajdon és események felülvizsgálata, Analytify Pro modulok kiválasztása, riportok egységesítése.