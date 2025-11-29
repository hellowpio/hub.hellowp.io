---
title: "YITH WooCommerce Ajax Product Filter Premium"
description: "AJAX‑alapú, mobilbarát szűrőrendszer WooCommerce‑hez, variációszintű pontossággal és fejlett SEO/URL‑kezeléssel."
sidebar_label: "YITH WooCommerce Ajax Product Filter Premium"
---

## Mi ez és milyen problémát old meg?

A YITH WooCommerce Ajax Product Filter Premium egy fejlett, AJAX‑alapú termékszűrő WooCommerce webáruházakhoz. Segít, hogy a vásárlók oldalfrissítés nélkül, másodpercek alatt leszűkítsék a terméklistát kategória, címke, attribútum (például méret, szín), ár, értékelés, márka, készlet vagy akció szerint. Ezzel megszünteti a lassú, többlépéses böngészést, csökkenti a kilépési arányt, és gyors, mobilbarát vásárlói élményt ad.

## Hogyan működik röviden?

Szűrőket hozol létre **presetekben**, majd ezeket elhelyezed a bolt fő (Shop/kategória) oldalain vagy egyedi landingeken. A látogató a szűrőket jelölgeti; a találatok azonnal, AJAX‑szal frissülnek (vagy igény szerint csak egy „Apply filters” gomb megnyomása után). A szűrők dinamikusan alkalmazkodnak: a nulla találatú opciókat elrejtheted vagy letilthatod.

## Fő funkciók, részletesen

### Taxonómia és attribútum szűrők
- Kategória, címke, egyedi taxonómiák és **attribútumok** (pl. méret, szín).
- **Megjelenítések**: checkbox, radio, legördülő, szöveges lista, szín‑ és képminták, címkék.
- **Logika**: AND/OR, többes kiválasztás, hierarchia kezelése, elem‑számlálók.
- **Adoptive működés**: a releváns opciókat tartja láthatóan; üres találatú értékek elrejthetők/tilthatók.

### Ár szerinti szűrés
- **Ár‑csúszka** adaptív minimum/maximum értékekkel és lépésközzel.
- **Előre definiált árkategóriák** (tartományok), akár többes választással és „& above” opcióval.

### Értékelés és készlet/akció
- **Review szűrő** csillagok szerint.
- **Készleten**, **akciós** vagy **kiemelt** termékek szűrése egy kattintással.

### Rendezettség (Order by)
- AJAX‑os váltás: alapértelmezett, népszerűség, ár szerint, értékelés, legújabb stb.

### Elhelyezés és integráció
- **Widget**, **shortcode**, **Gutenberg blokkok**, **Elementor widgetek**.
- Integráció: márka szerinti szűrés, AJAX kereső, végtelen görgetés, variációs swatch‑ok átvétele.

Példa shortcode:
```
[yith_wcan_filters preset_id="123" show_active_labels="yes" show_reset="yes"]
```

### Elrendezés és UX
- **Vízszintes szűrősáv** a terméklista felett (modern mintázat).
- **Mobil modál**: könnyű használat kis kijelzőn.
- **Aktív szűrők címkéi** és globális **Reset** gomb.
- Szűrők összehajtható (toggle) csoportokban.

### Teljesítmény és viselkedés
- **AJAX** alapú frissítés oldalváltás nélkül; opcionális **Apply** gomb.
- **Lusta betöltés** a szűrőpanelekre és „Show more” pagináció a hosszú listákhoz.
- Belső **cache optimalizáció** a gyorsabb válaszokért.

### Variálható termékek (variációszintű szűrés)
- Csak olyan termék jelenjen meg, amelynek legalább egy variációja illeszkedik a kiválasztott feltételekre.
- Ha egyetlen variáció felel meg, a listanézetben megjelenhet annak képe/ára.
- Javasolt bekapcsolni a WooCommerce „Product attributes lookup table” használatát (WooCommerce > Settings > Products > Advanced), különösen nagy katalógusnál.

### SEO és URL‑kezelés
- **Robots meta** szabályozás a szűrt oldalakra (noindex/nofollow variánsok).
- **Nofollow** a szűrő linkjeire.
- **Permalink módok**: rövidített megosztható URL, paraméterezett URL vagy URL‑mentes (AJAX) működés.

### Testreszabás
- **Színek/stílusok**, swatch‑méretek, **tooltip**, egyedi **loader** kép, „Clear” linkek.
- Automatikus címkék a WooCommerce taxonómiák és attribútumok alapján.
- Többnyelvűség és fordítás támogatott.

### Presetek
- **Korlátlan preset**, kategóriánként/oldalanként eltérő szűrő‑készlettel.
- Alap „Draft” preset a gyors induláshoz.

## Gyakorlati példák

- Divat: szűrj **méret**, **szín**, **anyag**, **márka**, **ár** szerint; mobilon modál, asztalin vízszintes sáv. A variációszűrés biztosítja, hogy csak valóban elérhető szín‑méret kombinációk jelenjenek meg.
- Elektronika: **márka**, **tárolókapacitás**, **képernyőméret**, **készlet** és **akció** szűrők; „Order by: legújabb” a megjelenések kiemelésére.
- Bútor: **kategória** (kanapé, szék), **anyag**, **szélesség/ár** csúszkák; „Show more” a hosszú anyaglistákhoz.
- Marketplace: kategória‑specifikus presetek; márka + készlet + ár kombinációk, végtelen görgetéssel.

## Előnyök és értékajánlat

- Gyorsabb termékfelfedezés, kevesebb lepattanás, jobb konverzió.
- Folyamatos, megszakítás nélküli **UX** AJAX‑szűréssel.
- Mobilon is átlátható, **modális** felület.
- Pontos találati lista a **variációszintű** egyezéssel.
- **SEO‑kontroll** a duplikáció és indexelési problémák elkerülésére.
- Skálázható teljesítmény: **lusta betöltés**, pagináció, cache.

## Kinek ajánlott?

- Közepes és nagy WooCommerce áruházaknak, ahol sok kategória/attribútum van.
- Divat, elektronika, bútor, beauty és más vertikumok, ahol a variációk kritikusak.
- Marketplace‑ek és márka‑fókuszú boltok.
- Olyan csapatoknak, akik Gutenberg vagy Elementor alapon építenek és precíz elrendezés‑kontrollt várnak.

## Rövid telepítés és beállítás

1. Telepítsd és aktiváld a bővítményt.
2. Hozz létre egy **Presetet** az adminban.
3. Add hozzá a szükséges szűrőket (Taxonómia, Ár, Review, Készlet stb.), állítsd be az **AND/OR** logikát és az **adoptive** viselkedést.
4. Válaszd ki az **AJAX** azonnali frissítést vagy az **Apply** gombos módot.
5. Helyezd el a Presetet **widgetként**, **shortcode‑dal**, **Gutenberg blokkal** vagy **Elementor** widgettel.
6. Kapcsold be a **Mobil modált**; finomhangold az aktív címkéket és a „Reset” gombot.
7. Nagy katalógusnál engedélyezd a WooCommerce **attributes lookup table** használatát.

## Best practice tippek

- Mutasd csak a releváns szűrőket kategória‑oldalanként külön **presetekkel**.
- Hosszú listáknál kapcsold be a **Show more** és a **lusta betöltést**.
- Színes/label swatchoknál egyeztesd a termékvariációk beállításaival a konzisztens élményért.
- SEO‑nál szűrt nézetekre állíts be **noindex**‑et, ha nincs egyedi tartalmi értékük.
- Teszteld mobilon a **modál** áramlást; helyezd szem elé a **Reset** gombot.