---
title: "WP Grid Builder - LearnDash"
description: "A WP Grid Builder hivatalos LearnDash kiegészítője, amely dedikált kártyablokkokkal, facettált szűréssel és vizuális kártyaépítéssel segít profi kurzuskatalógusokat készíteni kódolás nélkül."
sidebar_label: "WP Grid Builder - LearnDash"
---

## Mi ez és milyen problémát old meg?

A **WP Grid Builder – LearnDash** egy hivatalos kiegészítő, amely a WP Grid Builder kártya- és rácsmotorját kapcsolja össze a **LearnDash** tananyagokkal. Célja, hogy a kurzusaidat, leckéidet és témáidat egységes, testreszabható **kártyadizájnban** jelenítsd meg, miközben a tanulók számára releváns **dinamikus adatokat** (ár, előrehaladás, státusz, ütemezés) kódolás nélkül, vizuálisan építed be. Megszünteti a „kódkényszert”, és skálázható, gyors **facettált szűrést** ad a kurzuslistákhoz.

## Fő funkciók részletesen

### LearnDash-specifikus kártyablokkok
A kiegészítő új blokkokat ad a WPGB **Card Builder** felületéhez, amelyek közvetlenül a LearnDash adataiból dolgoznak:
- **Előrehaladás sáv és %**: bejelentkezett felhasználóknál személyre szabott progresszt mutat, így a tanuló azonnal látja, hol tart.
- **Leckék/lépések száma**: megjeleníti, mennyi tartalom vár a kurzusban.
- **Felhasználói aktivitás**: jelzi, hogy a tanuló elkezdte-e vagy befejezte-e a kurzust.
- **Ár**: a kurzus aktuális árát és opcióit kártyaszinten jelenítheted meg.
- **Tartalomtípus státusz**: vizuális jelzés, hogy a kártya kurzus, lecke vagy téma.
- **Ütemezés (Lesson release schedule)**: feltünteti, mikor válik elérhetővé egy lecke vagy modul.

Ezek a blokkok a kártyán bárhol elhelyezhetők, kombinálhatók, és a WPGB stílus- és feltételkezelésével (pl. csak bejelentkezett felhasználóknak) finoman szabályozhatók.

### Course Grid mezők integrációja
Sok LearnDash-telepítés használja a „Course Grid” funkció extra mezőit. Az addon képes ezeket is kártyára tenni:
- **Rövid leírás (short description)**
- **Egyedi gombszöveg** (pl. „Beiratkozom”)
- **Price ribbon** (árszalag a kártya sarkában)
- **Videós előnézet** (YouTube/Vimeo/Wistia teaser)

Így egy helyen, egységesen kezeled a metaadatokat, nem kell két külön megoldás logikáját összefésülnöd.

### Rácsok, facetták és teljesítmény
A LearnDash-adatok a WPGB teljes ökoszisztémájával működnek:
- **Facettált szűrők**: taxonómiák, egyedi mezők, rendezés, ár, szint, címkék, dátum, értékelés.
- **Gyors Ajax szűrés és indexelés**: nagy kurzusállomány esetén is reszponzív, oldal-újratöltés nélküli UX.
- **Rugalmas rácsok**: Masonry, Justified, Metro, karusszelek; egyedi kártyasablonok.
- **Gutenberg blokkok és shortcode-ok**: ahol kényelmes, ott illeszted be.

### Kettős Course Grid-helyzet támogatása
Előfordulhat, hogy a Course Grid funkció külön bővítményként települ, más környezetben pedig a LearnDash magjához tartozik. Az addon mindkét helyzetet támogatja, ezért projektindításkor elég ellenőrizned, nálad melyik érvényes.

## Hogyan állítsd be? (rövid útmutató)

1. **Telepítés**: aktiváld a WP Grid Buildert, a LearnDash LMS-t és a LearnDash kiegészítőt.
2. **Kártyaépítés**: a WPGB Card Builderben keresd a **LearnDash blokkokat**, húzd a kártyára (pl. progress bar, ár, rövid leírás), állítsd be a stílust és láthatósági feltételeket.
3. **Rács létrehozása**: készíts egy **Gridet** a LearnDash „Course” tartalomtípushoz, és rendeld hozzá a kártyát.
4. **Facettek**: adj szűrőket (kategória, szint, ár, címke, rendezés), és kösd a gridhez.
5. **Beillesztés oldalra**: használd a WPGB blokkokat, vagy illeszd be shortcode-dal:

```
[wpgb_filters id="courses-filters"]
[wpgb_grid id="courses-grid"]
```

Cseréld az azonosítókat a sajátjaidra. A gyors működéshez futtasd le a WPGB indexelőt a telepítés után.

## Gyakorlati példák

- **Nyilvános kurzuskatalógus**: rácsban listázod a kurzusokat, kártyán az ár, rövid leírás, price ribbon és teaser videó. A felhasználó kategóriára, szintre, árra, értékelésre szűr.
- **„My Courses” nézet**: bejelentkezett tanulóknak személyre szabott kártyák, **előrehaladás sávval**, státusszal („folyamatban”, „befejezve”) és a következő elérhető lecke időpontjával.
- **Tantárgy-/modulkatalógus**: leckéket és témákat listázol, ahol a látogató tartalomtípusra, témakörre vagy nehézségi szintre szűr.
- **Értékesítési aloldal**: kiemelt kurzusok karusszelben, **egyedi CTA gombszöveggel** és **price ribbonnel** a konverzió növelésére.

## Előnyök és értékajánlat

- **No-code felépítés**: a LearnDash adatok kártyára tétele és feltételes megjelenítése kód nélkül.
- **Egységes dizájn**: a Course Grid metaadatok zökkenőmentesen illeszkednek a WPGB kártyasablonjaiba.
- **Skálázható teljesítmény**: gyors indexelés és Ajax szűrés nagy katalógusoknál is.
- **Személyre szabott élmény**: felhasználónként eltérő előrehaladás és státusz jelenik meg.
- **Kevesebb fejlesztési idő**: vizuális szerkesztés, újrahasználható kártyák és rácsok.

## Kinek ajánlott?

- **E-learning csapatoknak**: akik professzionális, kereshető „All Courses” oldalt szeretnének.
- **Ügynökségeknek**: standardizálható, újrahasznosítható komponensek több LearnDash-projekthez.
- **Oktatóknak és kisebb vállalkozásoknak**: egyszerűen összeállítható katalógus, konverziót támogató kártyákkal.
- **Technikai vezetőknek**: átlátható adatforrások, jól definiált kompatibilitási keretek és stabil működés.

## Követelmények és kompatibilitás

- **Függőségek**: szükséged van a WP Grid Builder alapbővítményre és a LearnDash LMS-re.  
- **Course Grid mezők**: a kapcsolódó extra mezők akkor érhetők el, ha a környezetedben a Course Grid funkció aktív (külön bővítményként vagy a LearnDash részeként).  
- **Beillesztés**: Gutenberg blokkokkal vagy shortcode-okkal működik; a facetták a WPGB általános szűrőivel kompatibilisek.  
- **Licencelés**: a LearnDash addon a WP Grid Builder előfizetéshez tartozó kiegészítő.

## Tippek a sikeres bevezetéshez

- **Feltételes megjelenítés**: csak bejelentkezetteknek mutasd az előrehaladást; vendégeknek ár és összefoglaló.
- **Indexelő futtatása**: nagy kurzusállománynál rendszeresen frissítsd az indexet a gyors szűrésért.
- **Kártyasablonok**: készíts külön kártyát nyilvános katalógushoz és „My Courses” nézethez.
- **Tesztkörnyezet**: ellenőrizd, nálad a Course Grid funkció külön bővítményként vagy a mag részeként érhető el; az addon mindkettőt kezeli.