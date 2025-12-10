---
title: "JetFormBuilder Hierarchical Select"
description: "Kaszkád legördülők JetFormBuilder űrlapokhoz, hierarchikus taxonómiákból töltve; ideális frontend bejegyzésbeküldéshez és -szerkesztéshez."
sidebar_label: "JetFormBuilder Hierarchical Select"
---

## Mi ez és milyen problémát old meg?

A Hierarchical Select a JetFormBuilder PRO kiegészítője, ami egy új űrlapmezőt ad: egymásba ágyazott, kaszkád legördülőket. A mező egy hierarchikus taxonómiából tölti be a választási lehetőségeket, szülő–gyermek logikában. Ezzel egyszerűen megoldhatod a többszintű kategóriaválasztást (például Autó > Márka > Modell), anélkül, hogy külön Select-mezőket és egyedi JavaScriptet kellene építened. Az eredmény konzisztens adatbevitel, kevesebb hiba és gyorsabb űrlapkészítés.

Fejlesztő és kiadó: JetFormBuilder (Crocoblock ökoszisztéma), üzemeltető: Jetimpex Inc. A működéshez a JetFormBuilder ingyenes alapbővítménye szükséges.

## Hogyan működik röviden?

- Kiválasztasz egy hierarchikus taxonómiát forrásként.
- A felhasználó először a felső szintet választja ki; a gyermek szintek dinamikusan ehhez igazodnak.
- A kiválasztott term(ek) a Post Submit Actions segítségével (Insert/Update Post) menthetők a bejegyzéshez; ajánlott a Term ID használata.
- Szerkesztéskor Preset tölti elő a kapcsolt termeket, és automatikusan kirajzolja az adott taxonómiaágat.

## Fő funkciók részletesen

- Kaszkád Select-mezők: A gyermek listák mindig az aktuális szülő kiválasztásához igazodnak. Így kizárt, hogy nem létező vagy rossz szintkombinációt válasszanak.
- Forrás taxonómia: Csak hierarchikus taxonómiák támogatottak (például Kategóriák vagy egyedi, hierarchical=true); nem hierarchikus tagek nem használhatók.
- Mentett érték forrása: Beállíthatod, hogy az űrlap milyen értéket mentsen (Term ID, Name, Slug vagy Meta). Általános esetben a Term ID a legstabilabb.
- Gyermek-szintek megjelenítése: Három stratégia közül választhatsz:
  - mindig látható,
  - csak szülőválasztás után látható,
  - látható, de kezdetben tiltott.
  Ezzel a felhasználói élményt és a hibák megelőzését finomhangolhatod.
- Szintenkénti konfigurálás: Az „Edit Levels” felületen bármennyi szintet felvehetsz, és mindegyikhez nevet, címkét, placeholdert és leírást adhatsz.
- Új termek létrehozása: Engedélyezhető, hogy a felhasználó új gyermeket hozzon létre, ha a kiválasztott szülőnek épp nincs gyereke. Gyorsabb tartalombővítést tesz lehetővé. (Ha bekapcsolod a számított értéket term metából, a kézi bevitel nem érhető el.)
- Preset szerkesztéshez: Meglévő bejegyzésnél automatikusan kitölti a kiválasztott taxonómiaágat. Ha több ághoz tartozik a bejegyzés, a frontend csak egy ágat jelenít meg.
- Calculated Field integráció: A term meta értéke átadható számított mezőnek (például kedvezmény, súly, szállítási díj logika).
- Post Submit Actions: A kiválasztott termek mentése az Insert/Update Post művelettel történik; szintenként is megadható, mi kerüljön mentésre.
- Fejlesztői hookok: PHP szűrők a működés finomhangolásához:
  - jet-form-builder/hr-select/taxonomies-list
  - jet-form-builder/hr-select/query-terms-params
  - jet-form-builder/hr-select/prepare-terms
- Megjelenítés: Bármely témával működik; az űrlapok a blokkeditor mellett Elementorban és Bricksben is beilleszthetők.

## Telepítés és beállítás

1. Telepítsd és aktiváld a JetFormBuilder alap bővítményt, majd a PRO csomagból a Hierarchical Select kiegészítőt.
2. Nyisd meg az űrlapodat, és adj hozzá egy „Hierarchical Select” blokkot.
3. Alap beállítások:
   - Taxonomy Type: válassz egy hierarchikus taxonómiát.
   - Term value from: állítsd be (javasolt: Term ID).
   - Access to child levels: válaszd ki a megjelenítési stratégiát.
   - Edit Levels: vedd fel a szükséges szinteket, add meg a címkéket és placeholdereket.
4. A Post Submit Actions résznél állítsd be az Insert/Update Post műveletet, és jelöld ki, mely termeket mentsen.
5. Opcionális: Szerkesztő űrlapokhoz állíts be Presetet (Post Term).

Példa konfiguráció:

```
Mező neve: vehicle_category
Taxonomy Type: vehicle_category (hierarchical=true)
Term value from: Term ID
Access to child levels: Csak szülő választása után látható
Levels:
  - Név: type, Label: Járműtípus, Placeholder: Válassz típust...
  - Név: brand, Label: Márka, Placeholder: Válassz márkát...
  - Név: model, Label: Modell, Placeholder: Válassz modellt...
```

## Gyakorlati példák

- Autóhirdetés: Közlekedési eszköz > Márka > Modell; a felhasználó csak a releváns modelleket látja a választott márkához.
- Webshop: Férfi > Kollekció > Farmer; gyors, hibamentes kategorizálás termékszerkesztéskor.
- Álláspályázat: Cég típusa > Pozíció > Munkakör; HR-űrlapokban strukturált választás.

## Előnyök és értékajánlat

- Idő- és költségmegtakarítás: nincs szükség egyedi JS-re és több, egymásra épített mező kézi összekötésére.
- Adat-konzisztencia: a gyermek opciók mindig a kiválasztott szülőhöz igazodnak.
- Jobb szerkesztési élmény: Preset automatikusan előkészíti a mezőket meglévő bejegyzéseknél.
- Üzleti logika: term meta bevonható számításokba, intelligensebb űrlapokhoz.
- Rugalmas bővíthetőség: hookokkal testre szabható, mit és hogyan töltsön be.

## Korlátok és fontos megjegyzések

- Csak hierarchikus taxonómiákkal működik; tagek nem használhatók forrásként.
- A mező „Name” (Form field name) kötelező; nélküle nem fog menteni.
- Preset esetén több ág kapcsolata közül a frontend csak egy ágat jelenít meg.
- Ha a számított értéket term metából kéred, a kézi új term bevitel nem elérhető.

## Kinek ajánlott?

- Piacterek, apróhirdetések, katalógusok üzemeltetőinek, akiknek strukturált kategóriaválasztásra van szükségük.
- Webshopoknak, ahol több szinten kell pontosítani a kategóriát.
- Tartalomszerkesztő csapatoknak, akik frontendről is bővítik a tartalmat.
- Ügynökségeknek és fejlesztőknek, akik gyorsan akarnak stabil, bővíthető megoldást szállítani hookokkal.

## Árazás és licenc

A Hierarchical Select a JetFormBuilder PRO csomag része. A PRO csomag belépő szintű előfizetéstől elérhető, és tartalmazza a PRO kiegészítőket. Az árak idővel változhatnak.

## Összegzés

Ha több szintű, hibamentes kategóriaválasztásra van szükséged JetFormBuilder űrlapokban, a Hierarchical Select a legegyszerűbb és legstabilabb, WordPress-native megoldás: gyorsan beállítható, jól skálázható, és fejlett üzleti logikával is kiegészíthető.