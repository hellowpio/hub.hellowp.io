---
title: "JetFormBuilder Save Form Progress"
description: "Pro kiegészítő, amely automatikusan elmenti az űrlapok kitöltési állapotát a böngészőben, így megszakítás után is ott folytathatod, ahol abbahagytad."
sidebar_label: "JetFormBuilder Save Form Progress"
---

## Bevezetés: mi ez és milyen problémát old meg?

A **JetFormBuilder Save Form Progress** egy Pro kiegészítő, amely automatikusan elmenti az űrlapok kitöltési állapotát és a bevitt adatokat a böngészőben. Akkor is működik, ha nem vagy bejelentkezve. A célja egyszerű: ha félbeszakad a kitöltés (bezárod az oldalt, elnavigálsz, újratölt a böngésző), ne vesszen el semmi, és visszatéréskor folytathasd ott, ahol abbahagytad. A kiegészítőt a JetFormBuilder ökoszisztémát fejlesztő Crocoblock készíti, és a Pro csomag részeként érhető el.

## Hogyan működik?

A bővítmény a böngésző **Local Storage** tárhelyét használja. Minden űrlaphoz hozzárendel egy azonosítót, és ehhez menti:
- az űrlapmezők értékeit,
- a több lépéses folyamatban az aktuális lépést,
- a számított mezők eredményeit,
- a feltételes megjelenítések állapotát,
- a már csatolt fájlokat.

Amikor újra megnyitod az űrlapot ugyanabban a böngészőben és eszközön, a kiegészítő visszatölti a mentett állapotot. Mivel a mentés a böngészőhöz kötött, az adatok alapértelmezés szerint nem szinkronizálódnak más eszközre vagy másik böngészőbe; privát/incognito módban, illetve helyi adatok törlésekor a mentés elveszhet.

## Fő funkciók, érthetően

- **Automatikus böngészőoldali mentés**: gépelés közben folyamatosan menti a mezőértékeket. Nem kell külön gombot nyomnod, és nem terheli a szervert.
- **Multi-step előrehaladás megőrzése**: többoldalas űrlapoknál emlékszik, melyik lépésig jutottál, a **progress bar** állapotával együtt.
- **Számítások és feltételes logikák mentése**: a kalkulált összegek, kedvezmények, dinamikus mezőértékek és láthatósági állapotok visszaállnak, így nem kell újra „kikattintani” a feltételeket.
- **Fájlcsatolások megőrzése**: a beküldés előtti csatolmányok is a helyükön maradnak; nem kell újra feltölteni őket.
- **Autocomplete mezők támogatása**: a **Select Autocomplete** és az **Address Autocomplete** mezők tartalma is visszatöltődik.
- **Egyszerű beállítások az űrlapnál**:
  - **Save form progress**: be/ki kapcsoló az automatikus mentéshez.
  - **Clear saved form data after successful submission**: sikeres beküldés után törölje-e a böngészőben tárolt állapotot.

## Gyakorlati példák

- **Álláspályázat (5 lépés)**: önéletrajz, motivációs kérdések, portfólió-feltöltés. Ha a pályázó közben mással foglalkozik és bezárja az oldalt, másnap ugyanonnan folytathatja, a csatolt fájlokkal együtt.
- **B2B ajánlatkérés**: sok változó, kalkuláció és feltételes mező. Visszatéréskor minden számított érték és megnyitott szekció megmarad.
- **Támogatási űrlap**: képernyőképek, logok csatolása. Nem kell újra feltölteni, ha a böngésző véletlenül újratölt.
- **Eseményregisztráció/Booking**: több lépés, több adat. A felhasználói élmény egyenletes, a lemorzsolódás kisebb.

## Telepítés és beállítás

1. WordPress Vezérlőpult → JetFormBuilder → Addons: telepítsd és aktiváld a **Save Form Progress** kiegészítőt.
2. Nyisd meg az adott űrlapot a szerkesztőben.
3. A JetForm beállításoknál keresd a **Form Progress** szekciót:
   - Kapcsold be a **Save form progress** opciót.
   - Döntsd el, hogy a **Clear saved form data after successful submission** legyen-e aktív (beküldés után törölje a mentést).

## Kinek ajánlott?

- **HR és karrier oldalak**: hosszabb jelentkezési űrlapoknál.
- **Ügynökségek és B2B szolgáltatók**: komplex ajánlatkérések, konfigurátorok.
- **Szolgáltatók, akik időpontot egyeztetnek**: több lépéses foglalási folyamatok.
- **Ügyfélszolgálat/IT**: hibajegy űrlapok csatolmányokkal.
- **Kutatások, felmérések**: hosszabb kérdőívek, több szakasz.

Mindenkinek hasznos, akinél a kitöltés több percig tart, és nem szeretné, hogy félbeszakadás esetén elvesszen a munka.

## Előnyök és érték

- **Kevesebb lemorzsolódás**, nagyobb befejezési arány.
- **Jobb felhasználói élmény**: nincs kényszer-újrakezdés.
- **Időmegtakarítás**: nem kell újra feltölteni fájlokat vagy végigkattintani feltételeket.
- **Szerverterhelés nélkül**: a mentés kliensoldalon történik.
- **Rugalmas tisztítás**: szabályozhatod, hogy beküldés után maradjon-e mentés.

## Üzemeltetési megfontolások

- **Böngészőhöz kötött mentés**: az adatok ugyanazon az eszközön és böngészőben érhetők el; másik eszközre nem szinkronizálódnak. Incognito módban vagy helyi adatok törlésekor a mentés elveszhet.
- **Beküldés utáni törlés**:
  - Ha az űrlapot gyakran, egymás után használják (pl. több foglalás), érdemes kikapcsolva hagyni a törlést.
  - Ha tiszta indulást szeretnél minden beküldés után, kapcsold be a törlést.
- **Nem helyettesíti a szerveroldali tárolást**: a Save Form Progress a beküldés előtti állapotot menti a böngészőben. A beküldött adatok adminisztratív kezeléséhez használd a **Save Form Record** funkciót. Ha a felhasználó útvonalát is rögzítenéd, állítsd be a **User Journey Tracking** lehetőséget.

## Összegzés

A **JetFormBuilder Save Form Progress** egy Pro kiegészítő, amely megbízhatóan és automatikusan menti az űrlapok kitöltési állapotát a böngészőben – beleértve a lépéseket, számításokat, feltételeket, csatolt fájlokat és autocomplete mezőket. Beállítása néhány kattintás, működése észrevétlen, az eredménye pedig kézzelfogható: jobb felhasználói élmény, kevesebb lemorzsolódás, több befejezett beküldés. A fejlesztő a Crocoblock, a JetFormBuilder ökoszisztéma részeként.