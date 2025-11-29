---
title: "JetFormBuilder Select Autocomplete"
description: "PRO kiegészítő a Select mezőhöz: gépelés közbeni keresés és AJAX-os opcióbetöltés a gyors, pontos választáshoz."
sidebar_label: "JetFormBuilder Select Autocomplete"
---

## Mi ez és milyen problémát old meg?

A **JetFormBuilder Select Autocomplete** egy PRO kiegészítő, amely a Select mezőt **“type-ahead” kereséssel** és **AJAX-os, valós idejű opcióbetöltéssel** bővíti. Akkor jön jól, amikor hosszú legördülő listákból kell választanod: nem kell végiggörgetned száz vagy ezer elemet, elég pár karaktert beírnod, és azonnal megkapod a releváns találatokat. Ezzel gyorsabbá, pontosabbá és felhasználóbarátabbá teszi az űrlapkitöltést.

## Fő funkciók, részletekben

- **Gépelés közbeni javaslatok (type-ahead)**
  - Amint elkezdesz gépelni a Select mezőbe, a bővítmény a rendelkezésre álló opciók között keres, és releváns találatokat kínál. Ez különösen hasznos nagy adathalmazoknál (városok, termékek, ügyfélnevek).

- **AJAX-alapú opcióbetöltés**
  - A lehetőségek nem egyszerre töltődnek be, hanem kérésenként, valós időben. Így az űrlap gyorsabban betölt, a szerver kevésbé terhelődik, és az adatok mindig naprakészek (például változó készlet vagy foglalási időpontok esetén).

- **Minimum beviteli hossz (Minimum input length)**
  - Beállíthatod, hány karakter után induljon a keresés (jellemzően 2–3). Ez csökkenti a felesleges kérések számát és a találatok zaját, miközben megtartja a gyors használhatóságot.

- **Egyszerű kapcsolók a mezőben**
  - A Select mező beállításai között külön **Use Autocomplete** kapcsolóval aktiválhatod az automatikus kiegészítést, valamint külön **Loading via AJAX** kapcsolóval teheted aszinkronná a betöltést. Nincs szükség kódolásra, minden a szerkesztőben állítható.

- **Teljes integráció a Select mező forrásaival**
  - Az autocomplete a Select mező minden elérhető forrástípusán működik: **kézi lista**, **bejegyzések**, **taxonómiák**, **meta adatok**, **glosszárium** stb. Így akár dinamikus adatbázisok fölött is kényelmesen kereshetsz.

## Gyakorlati példák

- **Pénztár űrlap – város kiválasztása**
  - Több ezer város közül kell választani? Állíts be 2–3 karakteres minimumot, és a felhasználó már a név első betűi után megkapja a szűkített listát.

- **Rendelésfelvétel – termékkeresés**
  - Ha a Select a termékkatalógusból épül, az autocomplete gépelés közben szűri a termékeket, így nem kell hosszú listákat böngészni.

- **Foglalási űrlap – szolgáltatás/ügyfél kiválasztása**
  - Admin vagy ügyfélszolgálati űrlapokon gyorsan előkereshető a kívánt ügyfél vagy szolgáltatás tétel.

- **Dinamikusan változó listák**
  - Ha a háttéradatok gyakran frissülnek (készlet, idősávok), az AJAX-nak köszönhetően a felhasználó mindig az aktuális kínálatból választhat.

## Telepítés és aktiválás

1. Nyisd meg a WordPress admin felületet.
2. Lépj a JetFormBuilder > Addons menübe.
3. Válaszd a **Select Autocomplete** kiegészítőt.
4. Kattints az **Install Addon**, majd az **Activate Addon** gombra.
5. A Select mező beállításai között megjelennek az új kapcsolók: **Use Autocomplete**, **Loading via AJAX**, **Minimum input length**.

## Használat az űrlapszerkesztőben

1. Nyisd meg vagy hozd létre az űrlapodat.
2. Adj hozzá egy **Select** mezőt, állíts be **forrást** (kézi lista vagy dinamikus adat).
3. Kapcsold be a **Use Autocomplete** opciót.
4. Ha naprakész, nagy adatforrást használsz, kapcsold be a **Loading via AJAX** opciót.
5. Állítsd be a **Minimum input length** értékét (ajánlott: 2–3 karakter).

Az űrlapot megjelenítheted Gutenberg blokkal, Elementor widgettel vagy shortcode-dal:

```
[jetformbuilder id="123"]
```

## Előnyök és értékajánlat

- **Gyorsabb kitöltés:** kevesebb görgetés, kevesebb hibázás.
- **Jobb teljesítmény:** nem terheled feleslegesen az oldalt több száz opció betöltésével.
- **Mindig friss adatok:** az AJAX miatt a forrásváltozások azonnal megjelennek.
- **Skálázhatóság:** nagy adattömegeknél is zökkenőmentes használat.

## Kinek ajánlott?

- **Webshopoknak** pénztári és regisztrációs űrlapokhoz.
- **Szolgáltatóknak** és **foglalási rendszereknek**, ahol sok szolgáltatás vagy idősáv közül kell választani.
- **Ügynökségeknek** és **site buildereknek**, akik skálázható, UX-központú űrlapokat készítenek.
- **Belső admin űrlapokhoz**, ahol nagy adatbázisban kell gyorsan találatot találni.

## Követelmények és kompatibilitás

- **Szükséges**: JetFormBuilder bővítmény.
- **Elérhetőség**: a PRO addon-csomag része, előfizetés szükséges.
- **Megjelenítés**: Block Editor alapú; használható Gutenbergben, Elementoron, Bricksben és shortcode-dal.

## Tippek a beállításhoz

- **Minimum input length:** nagy adathalmaznál állítsd 2–3 karakterre a terhelés csökkentéséhez.
- **AJAX használata:** dinamikus, gyakran frissülő vagy nagy forrásoknál mindig kapcsold be.
- **Források kombinálása:** ha a Select a bejegyzésekből vagy taxonómiákból jön, az autocomplete lényegesen gyorsítja a keresést.
- **Placeholder és súgószöveg:** jelezd a mezőben, hogy “Kezdj el gépelni…”, így a felhasználó azonnal érti a működést.

## Összegzés

A **JetFormBuilder Select Autocomplete** a Select mezőt gépelés közbeni kereséssel és AJAX-os, valós idejű opcióbetöltéssel ruházza fel, így gyors, pontos és skálázható választást ad még nagyon hosszú, dinamikus listák esetén is. Fejlesztője: Crocoblock.