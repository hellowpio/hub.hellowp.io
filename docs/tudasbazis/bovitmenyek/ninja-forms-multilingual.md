---
title: "Ninja Forms Multilingual"
description: "Hivatalos WPML kiegészítő a Ninja Forms űrlapok teljes körű többnyelvű fordításához és egységes kezeléséhez."
sidebar_label: "Ninja Forms Multilingual"
---

## Mi ez és milyen problémát old meg?

A **Ninja Forms Multilingual** (NFML) a WPML hivatalos összekötő kiegészítője, amely teljes többnyelvűségi támogatást ad a **Ninja Forms** űrlapokhoz. Nélküle a Ninja Forms űrlapok nem jelennek meg a WPML fordítási felületein, így minden nyelvre külön űrlap-karbantartásra kényszerülnél. Az NFML-lel az űrlapok minden, a felhasználó által látott eleme fordítható, az egész folyamat beépül a WPML-féle fordítási munkafolyamatba, és a frontenden automatikusan a megfelelő nyelvű űrlap töltődik be.

Fejlesztő: az NFML-t a WPML-t készítő OnTheGoSystems fejleszti; a Ninja Forms a Saturday Drive terméke.

## Rendszerkövetelmények és beszerzés

Szükséged lesz:
- **Ninja Forms**
- **WPML** és **WPML String Translation**
- **Ninja Forms Multilingual** kiegészítő

Az NFML a WPML csomag részeként érhető el; nem a nyilvános bővítménytárból tölthető. A Ninja Forms teljes WPML-kompatibilitásához ez a kiegészítő szükséges.

## Hogyan működik a gyakorlatban?

1. Hozz létre vagy válassz ki egy Ninja Forms űrlapot, majd publikáld.
2. Lépj a WPML **Translation Dashboard** felületére, szűrj a **Ninja Forms** tartalomtípusra.
3. Jelöld ki az űrlap(oka)t, és küldd fordításra: kézzel, automatikus gépi fordítással vagy professzionális szolgáltatással.
4. A fordítófelületen megkapod a mezőcímkéket, helyőrzőket, súgószövegeket, hiba- és sikerüzeneteket fordítható szegmensekben.
5. Beágyazod a forrás űrlapot az oldaladra (blokkal vagy rövidkóddal). A fordított oldalak automatikusan a megfelelő nyelvű űrlapot jelenítik meg – külön extra beállítás nélkül.

Példa beágyazásra:

```
[ninja_form id="3"]
```

Nem kell nyelvenként külön rövidkódot használnod.

## Fő funkciók, részletesen

- **Teljes űrlapelem-fordítás**: Fordíthatod a mezők címkéit, helyőrzőit, súgószövegeit, a gombfeliratokat, a több-lépéses űrlapok lépéscímeit, valamint a hiba- és sikerüzeneteket. Így minden felhasználói érintkezési pont konzisztens lesz minden nyelven.

- **Mély integráció a WPML folyamataiba**: Az űrlapok a Translation Dashboardon kezelhetők. Választhatsz kézi fordítást, automatikus gépi fordítást (gyors kiindulás finomhangolással) vagy professzionális fordítószolgáltatást – mindezt egységes munkafolyamatban.

- **Automatikus nyelvi megjelenítés**: A forrással beágyazott űrlap automatikusan a látogató által megnyitott nyelvi változat szerint jelenik meg. Nincs szükség feltételes rövidkódokra vagy nyelvfüggő űrlaplogikára.

- **Egy forrás űrlap, több nyelv**: Nem kell nyelvenként külön űrlapot karbantartanod. A módosításokat a forrás űrlapon végzed, a WPML jelzi a fordítások frissítési szükségletét.

- **Duplikálás, ha nem kell önálló fordítás**: Ha egy nyelven nem akarsz külön szövegezést fenntartani, a Translation Management felületen a **Duplicate** opcióval tükrözheted a forrás űrlapot.

- **Ügynökségi használatra optimalizált**: Több űrlapot csoportosan küldhetsz fordításra, nyomon követheted az állapotot, és egységesítheted a folyamatot soknyelvű projekteknél.

## Konkrét, gyakorlati példák

- **Kétnyelvű kapcsolatfelvétel**: Egyetlen forrás űrlapból készítesz magyar és angol fordítást. A magyar oldalon magyar mezőcímkék és üzenetek jelennek meg, az angolon angolul – automatikusan.

- **Többlépéses ajánlatkérő**: A lépéscímek, gombok (Következő, Vissza), validációs hibák, valamint a beküldés utáni köszönőüzenet mind fordíthatók. A felhasználó végig az anyanyelvén halad.

- **Regisztráció jogi elfogadásokkal**: A checkboxok melletti jogi szövegek és a hibaüzenetek (pl. kötelező elfogadás) nyelvenként lokalizáltak, így megfelelhetsz a helyi elvárásoknak.

## Előnyök és értékajánlat

- **Idő- és költségmegtakarítás**: Egy űrlapot fordítasz, nem több külön verziót tartasz kézben.
- **Kevesebb hiba, nagyobb következetesség**: Központi fordítási szegmensek, ellenőrzött munkafolyamat.
- **Jobb felhasználói élmény**: Zökkenőmentes nyelvváltás, minden felirat a megfelelő nyelven.
- **Rugalmasság**: Kézi, gépi vagy profi fordítás – válaszd, ami a projektedhez illik.
- **Skálázhatóság**: Több űrlap és nyelv kezelése egységes módszerrel.

## Célközönség

- **Többnyelvű weboldalak tulajdonosai**, akik Ninja Formst használnak és WPML-lel fordítanak.
- **Ügynökségek és fejlesztők**, akik sok űrlapot és nyelvet tartanak karban, és folyamatot akarnak egységesíteni.
- **Tartalom- és lokalizációs csapatok**, akik fordítási minőséget és státusz-követést igényelnek.
- **E-kereskedelmi/SaaS projektek**, ahol kritikus a pontos, lokalizált űrlapélmény.

## Gyors kezdés, lépésről lépésre

1. Telepítsd és aktiváld a WPML-t, a String Translationt, a Ninja Formst és az NFML-t.
2. Hozz létre/nyisd meg az űrlapot, majd publikáld.
3. Nyisd meg a WPML fordítási irányítópultját, szűrj a Ninja Forms tartalomtípusra.
4. Jelöld ki az űrlapokat, és küldd fordításra a kívánt módszerrel.
5. Illeszd be az űrlapot az oldaladba blokkal vagy rövidkóddal.
6. Válts nyelvet az oldalon, és ellenőrizd, hogy a megfelelő fordítás jelenik meg.

## Hibaelhárítás és ismert korlátozások

- **Merge tag-ek az e-mailekben**: Bizonyos beállításoknál előfordulhat, hogy másodlagos nyelven nem a várt fordítás jelenik meg. Teszteld a beküldést minden nyelven.
- **PDF export és checkboxok**: A PDF export kiegészítővel egyes űrlapoknál hiba jelentkezhet. Ha ilyen kiegészítőt használsz, ellenőrizd a generált PDF-et minden nyelven.
- **Űrlapok nem láthatók a fordítási listában**: Győződj meg róla, hogy az űrlap publikált és az NFML aktív; használd a Ninja Forms szűrőt.
- **Változtatás után hiányos fordítás**: A forrás űrlap módosítása után indítsd újra a fordítás frissítését; a rendszer jelzi a módosult szegmenseket.
- **Nem kell külön fordítás?** Használd a **Duplicate** opciót a nyelvek tükrözéséhez.

## Tippek és bevált gyakorlatok

- Írj **rövid, egyértelmű** mezőcímkéket és üzeneteket – így gyorsabb és pontosabb a fordítás.
- Állíts be konzisztens **alapértelmezett nyelvet**, és ezt tartsd a forrás űrlap nyelvének.
- **Teszteld** a felhasználói utat minden nyelven: mezővalidáció, hiba/sikerüzenetek, e-mail értesítések.
- Sok űrlap esetén indíts **automatikus gépi fordítással**, majd finomhangolj kézzel a kritikus szövegeken.

Ezzel az NFML-lel pontosan azt kapod, amire egy többnyelvű űrlapkezeléshez szükség van: átlátható fordítási folyamatot, egységes karbantartást és hibamentes felhasználói élményt.