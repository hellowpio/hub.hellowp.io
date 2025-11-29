---
title: "Ninja Forms - Save Progress"
description: "Prémium kiegészítő a Ninja Forms-hoz: részleges űrlapkitöltések mentése és későbbi folytatása bejelentkezve vagy helyi tárolással."
sidebar_label: "Ninja Forms - Save Progress"
---

## Mi ez és milyen problémát old meg?

A Save Progress a Ninja Forms hivatalos bővítménye, amellyel az űrlapkitöltők elmenthetik a folyamat közbeni állapotot, és később pontosan onnan folytathatják. Kifejezetten hosszú, többoldalas űrlapoknál hasznos, ahol gyakori a félbehagyás. Célja, hogy ne vesszenek el a részlegesen megadott adatok, ezáltal nő a befejezett beküldések aránya és csökken a felhasználói frusztráció.

## Hogyan működik röviden?

- Bejelentkezett felhasználóknak egy **Mentés gomb** jelenik meg az űrlapon; ezzel explicit mentik az aktuális állapotot.
- Opcionálisan bekapcsolhatod a **helyi böngészős tárolást** (local storage) vendégeknek; ilyenkor automatikus mentés történik a böngészőben.
- Az admin oldalon a mentések megjelennek, kereshetők és szükség esetén **teljes beküldéssé konvertálhatók**.

## Fő funkciók részletesen

### Mentés gomb (Save field)
- A Builderben a Common Fields közt kapod a **Save** mezőt. Húzd az űrlapra oda, ahol a gombot szeretnéd.
- Bejelentkezett felhasználóknak gombként látszik; megnyomásakor elmenti az aktuális mezőértékeket.
- Többoldalas (multi-step) űrlapoknál jellemzően minden oldal alján, a Következő/Vissza gombok közelében érdemes elhelyezni.

### Többszörös mentések
- Az **Advanced > Save Progress** alatt az **Allow Multiple Saves** engedélyezésével egy felhasználó több különálló, időbélyegzett mentést készíthet ugyanarról az űrlapról.
- A felhasználó később listából választhatja ki, melyik mentését tölti vissza és folytatja.

### „Load Saved Progress” tábla
- Ha léteznek mentések, az űrlap tetején megjelenik egy lista a felhasználó mentéseiről.
- A tábla oszlopcímkéi testreszabhatók; innen közvetlenül **betöltés** vagy **szerkesztés** indítható.

### Helyi böngészős tárolás (vendégeknek)
- Az **Advanced > Save Progress > Enable Local Browser Storage** bekapcsolásával a rendszer automatikusan menti a mezőértékeket a böngészőben.
- Nincs külön Mentés gomb; a kitöltő ugyanazon eszközön és böngészőben térhet vissza. Böngészőadatok törlése esetén a mentés elveszik.

### E-mailek és műveletek mentéskor
- Az **Emails & Actions** elemeinél külön állíthatod, hogy **mentéskor** is fussanak-e (például „Mentés visszaigazolása” e-mail, belső értesítő, egyedi üzenet).
- A mentés és a beküldés logikája külön kezelhető, feltételes szabályokkal (Conditional Logic) kombinálható.

### Mentések az adminban
- A mentések rögzítéséhez kapcsold be a **Record/Store Submission** műveletnél a mentés támogatását.
- A **Submissions** nézetben láthatod a mentéseket (**View Saves**), megnyithatod (**View Progress**), és egy kattintással **Convert to Submission** művelettel teljes beküldéssé alakíthatod.

### Több eszköz közti folytatás
- Bejelentkezett felhasználóknál a mentések fiókhoz kötve tárolódnak, így egy másik eszközről vagy böngészőből is folytathatók.
- Helyi tárolás módban ez nem elérhető.

## Gyakorlati példák

- Jelentkezési űrlap több lépésben: a pályázó félbehagyhatja, majd később visszatér, kiválasztja a mentését a listából, és folytatja a következő oldallal.
- B2B ajánlatkérés: az érdeklődőnek össze kell gyűjtenie műszaki adatokat; ment, visszatér másnap, és ott folytatja, ahol abbahagyta.
- Belső jóváhagyási folyamat: az ügyfélkapuval belépő kolléga több körben tölti az adatokat; az admin közben látja a részállapotokat, és szükség esetén értesítőt küld mentéskor.

## Előnyök és értékajánlat

- **Magasabb befejezési arány**: a félbehagyott űrlapokból is lesz beküldés.
- **Jobb felhasználói élmény**: nem kell elölről kezdeni, csökken a lemorzsolódás.
- **Admin átláthatóság**: részállapotok tárolása, visszakereshetőség, konvertálhatóság.
- **Automatizáció**: emlékeztető e-mailek és egyedi folyamatok már mentéskor elindíthatók.
- **Adatvédelmi tisztaság**: nincs „láthatatlan” gyűjtés; a mentés a felhasználó aktív művelete.

## Célközönség

- Hosszú vagy multi-step űrlapokat használó weboldalak üzemeltetői.
- HR és oktatási intézmények jelentkezési folyamatai.
- Ügynökségek és B2B cégek összetett brief/ajánlatkérés űrlapokkal.
- Nonprofitok és pályázatkezelők többkörös adatbekéréssel.

## Beállítás lépésről lépésre

1. Telepítsd és aktiváld a bővítményt.
2. A Builderben add hozzá a **Save** mezőt oda, ahol a Mentés gombot szeretnéd.
3. Az **Emails & Actions** alatt kapcsold be a **Record/Store Submission** műveletnél a mentések rögzítését. Állítsd be, mely műveletek fussanak **Save** eseményre is.
4. Ha szeretnéd, engedélyezd az **Allow Multiple Saves** opciót az **Advanced > Save Progress** alatt.
5. Nincs beléptetés? Kapcsold be az **Enable Local Browser Storage** lehetőséget, és jelezd a felhasználóknak, hogy az adatok az adott böngészőhöz és eszközhöz kötöttek.

## Fontos korlátozások és megfontolások

- A **Mentés gomb** csak bejelentkezett felhasználóknak látszik; vendég módban az automatikus mentés működik.
- **Fájl feltöltések** csak beküldéskor kerülnek rögzítésre; a mentés nem tárolja a fájlokat.
- **Adatvédelem**: mentési rekord a felhasználói akcióhoz (Mentés gomb) kötötten jön létre.
- **Helyi mentés sérülékeny**: böngészőadat-törlés vagy eszközváltás esetén a vendég mentése elveszik.
- Bejelentkezett mentéshez érdemes valamilyen **felhasználókezelő** megoldást használni.

## Névhasználat

A kiegészítőt korábban „Save User Progress” néven is emlegették; a jelenlegi megnevezés: **Save Progress**.