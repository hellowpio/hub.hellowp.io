---
title: "GP Premium"
description: "Moduláris prémium kiegészítő a GeneratePress témához: blokk‑alapú sablonépítés, fejlett elrendezés- és stílusvezérlés, valamint gyors indulást segítő kezdőoldal-könyvtár."
sidebar_label: "GP Premium"
---

## Mi ez és milyen problémát old meg?

A **GP Premium** a GeneratePress ingyenes WordPress témához készült prémium bővítmény. Úgy bővíti a témát, hogy közben megmarad a teljesítmény: moduláris felépítésének köszönhetően csak azt töltöd be, amire szükséged van. Ha ügynökségként, fejlesztőként vagy haladó felhasználóként gyakran kell gyorsan, mégis rugalmasan testreszabható webhelyeket építened, a GP Premium megszünteti a gyermek-témák és nehézkes page builderek kényszerét. Blokk‑alapú sablonokkal, precíz elrendezés- és stílusvezérléssel, valamint kész **starter site** mintákkal dolgozhatsz – gyorsan, kódolás nélkül vagy minimális kóddal.

Licencelés: éves előfizetéssel frissítéseket és támogatást kapsz, a licenc legfeljebb 500 webhelyen használható. Elérhető önálló termékként és csomagban is.

## Fő funkciók és hogyan működnek

### Elements + Block Elements (Theme Builder)
- A **Block Elements** a blokkszerkesztőben enged egyedi sablonelemeket készíteni: fejlécek, láblécek, hősávok, tartalmi sablonok, oldalsávok, hook‑alapú beillesztések.
- **Megjelenítési szabályokkal** célzottan alkalmazhatod: globálisan vagy feltételekhez kötve (pl. bejegyzéstípus, kategória, szerző, adott oldal).
- A blokkos megközelítés együttműködik a generatív blokkokkal, így pixelpontos, dinamikus komponenseket alkothatsz.

### Site Library (starter sablonok)
- Több tucat professzionális **kezdőoldal** importálható pár kattintással. Ezek teljes oldalstruktúrákat és beállításokat hoznak, amelyeket utána finomhangolsz a saját tartalmadra.

### Haladó stílusvezérlés
- **Színek, tipográfia, térközök, háttérképek**: részletes kontroll a témakomponensek felett. A GeneratePress újabb kiadásaiban számos stílusopció közvetlenül a témába költözött, így az irányítás egységes és átlátható.

### Blog modul
- Rugalmas **archívum- és bejegyzéselrendezések**: oszlopos és masonry rácsok, kivonatkezelés, metaelemek láthatósága, végtelen görgetés vagy gombos betöltés.

### Menu Plus és Secondary Navigation
- **Ragadós navigáció**, mobil fejlécek, **off‑canvas**/slide‑out menü, automatikus elrejtés-görgetés effektek.
- Másodlagos menü külön elhelyezési és igazítási opciókkal, teljes szélességű vagy keretezett kialakítással.

### WooCommerce integráció
- Kiterjesztett **bolt-, termék- és pénztár-oldal** beállítások: rácsok, képarányok, kapcsolódó/upsell termékek, menükosár ikon, **“sticky” kosárpanel**, kenyérmorzsa és több. A használathoz a WooCommerce bővítmény szükséges.

### Disable Elements, Spacing, Backgrounds
- Oldalanként tilthatod a komponenseket (pl. címsor, fejléc, lábléc, navigáció), illetve globálisan vezérelheted a **szélességeket, margókat és paddingokat**, valamint a háttérképeket. Így gyorsan állítasz össze letisztult, céloldal‑szerű nézeteket.

## Gyakorlati példák

- **Ügynökségi folyamat:** importálsz egy starter site‑ot, majd Block Elements‑szel készítesz egy egyedi fejlécet. Megjelenítési szabály: csak a Blog és Kategória archívumokon aktív. A többi oldalon marad az alapfejléc.
- **Kampánylanding:** ugyanarra a bejegyzéstípusra több sablont hozol létre. Egyik sablon hősávval és CTA‑val csak az “Esemény” kategórián, a másik kódolt elemek nélkül a “Hírek” kategórián jelenik meg.
- **Mobil navigáció:** bekapcsolod a sticky headert és az off‑canvas menüt. Hosszú menüdet mobilon kényelmes, ikon‑vezérelt panelbe költözteted.
- **WooCommerce bolt:** kétoszlopos terméklistát állítasz, nagyított képekkel és “sticky” kosárral, hogy a felhasználó görgetés közben is lássa a kosár állapotát.

Példa megjelenítési szabályokra (illusztráció):
```
Element: Page Hero
Include: Bejegyzéstípus = Bejegyzés
Exclude: Kategória = Hírek
Hook: after_header
```

## Előnyök és értékajánlat

- **Gyermek-téma nélkül** alakítható sablonozás és hook‑kezelés – tisztább, karbantarthatóbb megoldás.
- **Gyors indulás**: starter site import, majd finomhangolás. Projektek közt újrahasznosítható munkafolyamat.
- **Teljesítménybarát**: moduláris felépítés, minimális bloat.
- **Page builder nélkül** is haladó elrendezések: kevesebb bővítmény, kevesebb konfliktus, kevesebb karbantartás.
- **Skálázható licenc**: sok webhelyen használható, támogatással és frissítésekkel.

## Kinek ajánlott?

- **Ügynökségeknek**: egységes, gyors kivitelezés több projekten, újrahasznosítható elemekkel.
- **Freelancereknek és fejlesztőknek**: blokk‑alapú theme builder, precíz kontroll kódhegyek nélkül.
- **Haladó felhasználóknak és webshop‑tulajdonosoknak**: WooCommerce‑re szabható téma‑szintű finomhangolás, jobb mobil navigáció és UX.

## Telepítés és követelmények

- Előfeltétel: aktív **GeneratePress** téma.
- Telepítés:
  1. Töltsd fel a gp-premium.zip fájlt bővítményként (ne témaként).
  2. Aktiváld a bővítményt.
  3. Az adminban kapcsold be a szükséges modulokat.
- **Licenckulcs**: a frissítésekhez és értesítésekhez aktiváld a licencet.
- WooCommerce funkciókhoz külön aktiválnod kell a WooCommerce bővítményt.

## Fontos tudnivalók az életciklusról

- Az **Elements** modul egységes keretbe hozta a korábbi Page Header és Hooks megoldásokat (migrációval).
- A **Block Elements** bevezetésével a blokk‑alapú szerkesztés az alapértelmezett út.
- Számos **szín- és tipográfia** beállítás közvetlenül a témába költözött, így a vezérlés még inkább központosított.
- A klasszikus **Sections** modul hivatalosan elavult; modern alternatíva a blokk‑alapú szerkesztés.

## Hibaelhárítás – gyors tippek

- **“Missing style.css” hiba telepítéskor**: valószínűleg témaként próbáltad feltölteni. Telepítsd bővítményként.
- **Site Library nem tölt be**: ellenőrizd, hogy a szerver eléri‑e a külső forrásokat és működik‑e a WordPress REST API; próbálj állandó hivatkozásokat újramenteni, frissítsd a mintalistát, és nézd meg nincs‑e host oldali védelem, ami blokkol.
- **Nincs frissítési értesítés**: ellenőrizd a licencaktivációt és az internet‑elérést a szerveren.

--- 

A GP Premium lényege: gyorsan indíthatsz, blokk‑alapon építhetsz célzott sablonokat, miközben precízen kontrollálod a megjelenést – mindezt karcsú, teljesítményorientált keretrendszerben. Ha hatékony, skálázható és jól karbantartható WordPress‑megoldást keresel, ez az ökoszisztéma neked szól.