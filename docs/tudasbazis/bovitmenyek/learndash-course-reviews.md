---
title: "LearnDash Course Reviews"
description: "Tanulói értékelések és vélemények a LearnDash kurzusoldalakon, 1–5 csillagos rendszerrel és WordPress-alapú moderálással."
sidebar_label: "LearnDash Course Reviews"
---

## Mi ez és milyen problémát old meg?

A LearnDash Course Reviews a LearnDash beépített értékelési rendszere, amellyel a beiratkozott hallgatóid 1–5 csillaggal és rövid szöveges véleménnyel értékelhetik a kurzusaidat. Ezzel hiteles társadalmi bizonyítékot építesz, átlátható döntéstámogatást adsz a leendő tanulóknak, és valódi visszajelzést kapsz a tartalom fejlesztéséhez. A jogosultsági szabályok megakadályozzák a „fake review”-kat: csak az értékelhet, aki már elkezdte a kurzust.

## Fő funkciók és működés

- **1–5 csillag + szöveges vélemény a kurzusoldalon**  
  A tanuló a kurzusoldalra belépve adhat csillagos értékelést és rövid kommentet. A rendszer átlagos értéket számol, amit a látogatók is látnak – ez segíti a gyors összehasonlítást és a konverziót.

- **Automatikus megjelenítés külön „Reviews” fülön**  
  A bővítmény a kurzusoldalhoz egy új, Reviews (Vélemények) fület ad. Nem kell sablont módosítanod: a lista, az átlag, a csillagok és az űrlap automatikusan illeszkedik a témádhoz.

- **Jogosultság alapú védelem a hamis értékelések ellen**  
  Csak az adhat értékelést, aki legalább egy kurzuslépést elindított. Így a vélemények relevánsak, a csillagos átlag pedig valós tanulói tapasztalatot tükröz.

- **Kurzusonként ki- és bekapcsolható**  
  Ha egy kurzusnál nincs szükség véleményekre (például belső megfelelőségi tréning), egyszerűen letilthatod. Útvonal:  
  LearnDash LMS > Courses > kiválasztott kurzus > Course fül > Course Reviews szekció.

- **WordPress-komment alapú moderálás**  
  A vélemények a WordPress beépített kommentrendszerét használják. Ugyanúgy tudod jóváhagyni, szerkeszteni, spamként jelölni vagy törölni őket, mint bármely kommentet:  
  WordPress Admin > Comments.

- **Megjelenítés és rendezés a témád beállításai szerint**  
  A listázás és rendezés a sablonod és a WordPress beszélgetés (Discussion) beállításaiból öröklődik. Ha egyedi sorrendre, szűrőkre vagy más elrendezésre van szükséged, témaszintű testreszabás vagy kiegészítő funkciók ajánlottak.

- **Bővíthetőség fejlesztőknek**  
  Elérhetők akciók/filtrők és publikus függvények a folyamatok finomhangolásához (például beküldés után futó hookok, lekérdezési módosítók).

## Gyakorlati példák

- **Nyilvános kurzuskatalógus**  
  Kapcsold be a Reviews fület minden értékesítési kurzuson. A csillagos átlag és a friss vélemények jelentősen növelhetik az iratkozási arányt, különösen hasonló tematikájú kurzusok összevetésénél.

- **Belső vállalati tréning**  
  Gyűjts gyors, lényegre törő visszajelzéseket a tanulói élményről. A kommentekből kiderülhet, hol akadtak el a kollégák, milyen modul igényel frissítést.

- **Marketingoldal „Összes vélemény” blokk (prémium kiegészítővel)**  
  Ha tetszőleges oldalon szeretnél csillagokat vagy gyűjtött véleményeket megjeleníteni, a prémium Ratings, Reviews & Feedback kiegészítő shortcode-jaival teheted meg:

```
[rrf_show_ratings]       ; átlagos értékelés megjelenítése
[rrf_course_review]      ; értékelő űrlap adott kurzushoz
[rrf_all_reviews]        ; összes/legutóbbi vélemény listázása
```

## Telepítés és beállítás röviden

- **Elérhetőség**  
  A funkció a LearnDash alaprésze. Ha régebben külön „Course Reviews” bővítményt használtál, frissítés után a külön addont nyugodtan eltávolíthatod.

- **Engedélyezés kurzusszinten**  
  Nyisd meg a kurzust a szerkesztőben: LearnDash LMS > Courses > Course fül > Course Reviews. Kapcsold be vagy ki igény szerint.

- **Moderálás folyamata**  
  Minden új értékelés a WordPress kommentfolyamába kerül. Állíts be jóváhagyási szabályokat (előzetes moderálás, értesítések), és szükség esetén használd a spam- és moderációs kulcsszűrőket.

- **Tipp**  
  Kérj értékelést a tanulóktól kurzus- vagy vizsga-befejezés után. Prémium kiegészítővel automatikus emlékeztető e-maileket is küldhetsz.

## Előnyök és értékajánlat

- **Hitelesség és konverzió**: valós tanulói vélemények, csillagos átlag – kevesebb kétely, gyorsabb döntés.  
- **Fake review-védelem**: csak megkezdett kurzus után enged értékelni.  
- **Zero overhead moderálás**: a már ismert WP-kommentfolyamatot használod.  
- **Rugalmas bevezetés**: kurzusonként kapcsolható, témádhoz illeszkedik.  
- **Skálázhatóság**: prémium kiegészítővel shortcode-ok, médiás review-k, értesítések és haladó szabályok érhetők el.

## Kinek ajánlott?

- **Egyéni kurzuskészítők és online akadémiák**: azonnali társadalmi bizonyíték, egyszerű beüzemelés, jobb konverzió.  
- **Vállalati L&D csapatok**: strukturált, gyors visszajelzés a tartalom minőségéről és a tanulói élményről.  
- **Marketingcsapatok**: csillagok és vélemények beépítése kampány- és landolóoldalakba (prémium kiegészítővel).  
- **Fejlesztők/ügynökségek**: hookokkal és sablonszinten bővíthető, testreszabható megjelenítés.

## Korlátok és tippek

- **Megjelenítés/rendezés** a témától és a WordPress beszélgetés beállításaitól függ. Speciális lista- és szűrési igényekhez használj tématestreszabást vagy a prémium shortcode-okat.  
- **Értékelési jogosultság**: csak megkezdett kurzus után lehet értékelni. Ha kizárólag befejezés után szeretnél engedélyezni, szükséged lehet egyedi fejlesztésre vagy a prémium folyamatokra.  
- **Adatkezelés**: a vélemények kommentként tárolódnak, így kompatibilisek a meglévő anti-spam és moderációs eszközeiddel.

Összességében a LearnDash Course Reviews egy könnyen bevezethető, mégis erős alapfunkciókat nyújtó megoldás, amellyel egyszerre növelheted a kurzusaid hitelességét és javíthatod a tartalmaidat a tanulók valós visszajelzései alapján.