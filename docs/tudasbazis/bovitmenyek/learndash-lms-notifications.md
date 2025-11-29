---
title: "LearnDash LMS - Notifications"
description: "Ingyenes, hivatalos LearnDash-kiegészítő eseményalapú, személyre szabott e-mail értesítésekhez tanulóknak, csoportvezetőknek és adminoknak."
sidebar_label: "LearnDash LMS - Notifications"
---

## Mi ez és milyen problémát old meg?

A LearnDash LMS – Notifications egy hivatalos, ingyenes kiegészítő, amellyel automatikus e-maileket küldhetsz a tanulói életciklus különböző pontjain. Kiváltja a kézi e-mailezést, növeli az elköteleződést (onboarding, mérföldkövek, emlékeztetők), csökkenti a lemorzsolódást (inaktivitási értesítők), és segít a jogi megfelelésben (kötelező leiratkozási link).

## Hogyan működik röviden?

- **Eseménytrigerek** alapján működik: amikor egy tanuló valamit megtesz (vagy épp nem tesz), a rendszer automatikusan e-mailt küld.
- Az értesítés **globálisan**, vagy **konkrét kurzushoz/leckéhez/témához/vizsgához** köthetően is beállítható.
- Beállíthatod a **címzetteket** (tanuló, csoportvezető, admin), az **azonnali** vagy **késleltetett** küldést, és **dinamikus shortcode-okkal** személyre szabhatod az üzenetet.
- A küldést a WordPress/LearnDash **cron ütemező** kezeli; a külön **Status** képernyőn látod a cron állapotát, a várakozó e-mailek számát és az utolsó futást.
- Fontos: egy értesítés **trigerje publikálás után nem módosítható**; másik eseményhez új értesítést hozz létre.

## Telepítés és követelmények

- Telepítés a LearnDash admin felület **Add-ons** menüjéből (ajánlott), vagy a bővítmény ZIP **kézi feltöltésével**.
- Frissítések a WordPress Bővítmények oldalán, érvényes LearnDash licenccel.
- A kiegészítő a LearnDash core követelményeihez igazodik. A LearnDash csak az aktuális és az azt megelőző két WordPress főverziót támogatja.

## Fő funkciók részletesen

### 13 beépített eseménytrigger
Az e-mail küldésének kiváltói többek között:
- **Beiratkozás kurzusba**, **kurzus/lecké/téma teljesítése**
- **Ütemezett lecke elérhetővé válása**
- **Vizsga sikeres**, **vizsga sikertelen**, **vizsga befejezése**
- **Beadandó feltöltése**, **beadandó jóváhagyása**
- **Esszékérdés értékelés alatt**
- **Inaktivitás X napja**
- **Kurzuslejárat előtt X nappal**

Minden értesítést hozzárendelhetsz globálisan vagy konkrét tananyagelemhez, így precízen célozhatsz.

### Üzenetkésleltetés
Választhatsz **azonnali** küldést, vagy beállíthatsz **X napos késleltetést**. Például: a „vizsga sikertelen” után 2 nappal küldött korrekciós e-mail időt hagy a tanulónak megemészteni a visszajelzést.

### Dinamikus tartalom (shortcode-ok)
Több tucat beépített shortcode áll rendelkezésre a személyre szabáshoz (felhasználói adatok, kurzus/leckecímek, vizsgaeredmény, stb.). Így minden címzett olyan információt kap, ami rá releváns.

Példa-sablon:
```
Szia [user_firstname]!

Gratulálunk a(z) [course_title] kurzus [lesson_title] leckéjének teljesítéséhez.
Következő lépés: [next_step_link]

Eddigi eredményed: [quiz_score]% (célszint: 80%).
Ha elakadtál, nézd meg: [support_link]

Üdv,
A képzésed csapata
[unsubscribe_link]
```

### Címzettek és szerepkörök
- **Tanuló**: személyes visszajelzés és iránymutatás.
- **Csoportvezető**: valós idejű képben tartás a csoport haladásáról.
- **Admin**: működési riasztások, beadandók, mérföldkövek nyomon követése.

### Kezelőfelület és szűrés
A LearnDash LMS > Notifications alatt **kereshetsz és szűrhetsz** (kurzus, lecke, téma, vizsga, trigger szerint), szerkeszthetsz vagy törölhetsz. Publikálás után a **trigger nem módosítható**, viszont a szöveg és a címzettek igen.

### Leiratkozás és megfelelés
Minden e-mail tartalmaz **leiratkozási linket**, amelyet jogi okokból nem lehet kikapcsolni.

### Állapot és hibakeresés
A **Status** képernyő megmutatja a cron beállítását, a várakozó e-mailek számát és az utolsó futást. A kézbesíthetőséghez javasolt megbízható SMTP és stabil cron környezet használata.

## Gyakorlati példák

- **Onboarding sorozat**: beiratkozáskor üdvözlő e-mail; 3 nap múlva tippek; az első ütemezett lecke elérhetőségekor emlékeztető.
- **Teljesítmény-visszajelzés**: „vizsga sikeres” esetén gratuláció és haladó tartalom; „vizsga sikertelen” esetén javító útmutató és ajánlott leckelista.
- **Drip és határidők**: üzenet, amikor egy ütemezett lecke megnyílik; **kurzuslejárat előtt X nappal** emlékeztető.
- **Inaktivitási visszacsábítás**: ha a tanuló **X napja nem lépett be**, motiváló e-mail konkrét javaslatokkal.
- **Oktatói tájékoztatás**: csoportvezető értesítése beadandó feltöltésekor vagy jóváhagyásakor.

## Előnyök és értékajánlat

- **Időmegtakarítás**: kiváltja a kézi üzenetküldést; egyszer beállítod, onnantól működik.
- **Személyre szabás**: dinamikus változókkal releváns, egyénre szabott kommunikáció.
- **Nagyobb elköteleződés**: a megfelelő üzenet a megfelelő időben csökkenti a lemorzsolódást.
- **Átláthatóság**: Status nézet, cron és queue információk segítik a gyors hibakeresést.
- **Megfelelés**: kötelező leiratkozási link minden e-mailben.

Tipp: tervezd meg az e-mail mennyiséget; a túl sok értesítés ronthatja a felhasználói élményt.

## Célközönség

- **Online akadémiák és kurzuspiacok**: skálázható onboarding és mérföldkő-értesítések.
- **Vállalati L&D** csoportvezetőkkel: automatikus riportálás és folyamat-értesítések.
- **Kohorsz-alapú, drip tanfolyamok**: ütemezett leckék és határidők kommunikációja.
- **Kompliance és minősítés**: lejárat előtti figyelmeztetések, vizsga-visszajelzés.

Kiegészítő megjegyzés: elérhető külön Slack integráció is, amely ugyanazon eseményekről csatornákra küldhet értesítést – ez az e-mailes Notifications kiegészítő hasznos párja lehet csapaton belüli kommunikációban.

## Összegzés

A LearnDash Notifications a tanulói kommunikáció „autopilotja”: 13 eseménytrigger, késleltetett küldés, bőséges dinamikus shortcode-k és rugalmas címzettkezelés egyetlen, könnyen kezelhető felületen. Ha szeretnél kevesebb kézi e-mailezést, nagyobb elköteleződést és jobb átláthatóságot, ez a kiegészítő neked való.