---
title: "JetEngine - Custom visibility conditions"
description: "Ingyenes JetEngine kiegészítő, amely két új láthatósági feltételt ad a Dynamic Visibility modulhoz: bejegyzés-státusz és szerzőség alapján vezérelt megjelenítés."
sidebar_label: "JetEngine - Custom visibility conditions"
---

## Mi ez és milyen problémát old meg?

A Custom visibility conditions egy ingyenes JetEngine add‑on, amellyel a **Dynamic Visibility** modul két új feltétellel bővül: **Post Status is** és **Is post by current user**. Ezekkel kódolás nélkül szabályozhatod, hogy a Single Page sablonon mely elemek (szekciók, oszlopok, widgetek) látszódjanak a bejegyzés aktuális státusza vagy a bejelentkezett felhasználó szerzősége alapján. Amit korábban egyedi PHP‑val oldottál meg, itt néhány beállítással elérhető.

## Fő funkciók

### Post Status is
Ezzel a feltétellel az adott bejegyzés **státusza** alapján jeleníthetsz meg vagy rejthetsz el elemeket. Hasznos, ha külön üzenetet vagy gombot szeretnél mutatni például vázlat (draft), jóváhagyásra vár (pending) vagy közzétett (publish) állapotban. Több státuszt is megadhatsz, így összetett szabályokat építhetsz.

Mit csinál pontosan?
- Ellenőrzi a Single Page sablonban betöltött bejegyzés státuszát.
- Ha a státusz egyezik a megadott(akkal), a beállított láthatósági akció (Show/Hide) érvényesül.

### Is post by current user
Ezzel a feltétellel azt szabályozod, hogy egy elem **csak a bejegyzés szerzője** számára legyen látható. Ideális szerzői visszajelzésekhez, “Szerkesztés” gombhoz vagy olyan CTA‑khoz, amelyeket kizárólag a poszt készítője láthat.

Mit csinál pontosan?
- Összeveti a betöltött bejegyzés szerzőjét a bejelentkezett felhasználóval.
- Ha megegyezik, a beállított láthatóság érvényesül.

Megjegyzés: a két extra feltétel dokumentáltan a **Single Page** sablonon működik.

## Gyakorlati példák

- Szerkesztőségi workflow: jeleníts meg egy “Vár jóváhagyásra” bannert, amikor a bejegyzés **pending** vagy **draft**. Amint **publish** lesz, a banner automatikusan eltűnik.
- Szerzői eszközök: mutass “Köszönjük a beküldést” üzenetet és “Szerkesztés” gombot **csak a szerzőnek**. Más felhasználók ezt nem látják.
- Összetett szabály: időzített szerzői üzenet, ami kizárólag a poszt szerzőjének jelenik meg az első 48 órában (a Dynamic Visibility idő/dátum feltételeivel kombinálva).

## Telepítés és aktiválás

Két módon telepítheted:
1. A WordPress Vezérlőpultban menj a **JetEngine > External Modules** menübe, és kapcsold be a **Custom visibility conditions** modult.
2. Töltsd le a kiegészítőt, telepítsd bővítményként, majd a JetEngine irányítópultján aktiváld a kapcsolóját.

Használat:
- **Elementor**: az elem Advanced > **Dynamic Visibility** részében kapcsold be a funkciót, állítsd be a Visibility actiont (**Show** vagy **Hide**), majd válaszd ki és konfiguráld a fenti két feltétel egyikét.
- A Dynamic Visibility modul általánosan működik **Gutenberg** és **Bricks** szerkesztőkben is; haladó esetekhez shortcode‑ok is elérhetők.

## Konfigurációs minták

Post Status is – többszörös státusz:
```
Condition: Post Status is
Values: draft, pending, future
Action: Show
```
Ezzel például egy figyelmeztetés látszik minden nem publikált poszton.

Is post by current user – szerzői gomb:
```
Condition: Is post by current user
Action: Show
Element: “Szerkesztés” gomb
```
A gomb csak annak a felhasználónak jelenik meg, aki a poszt szerzője.

Kombinált szabály (AND logika a felületen több feltétellel):
- Post Status is: draft, pending
- Is post by current user: true
- Action: Show
Eredmény: a banner csak a szerzőnek látszik, amíg a poszt nincs közzétéve.

## Előnyök és értékajánlat

- **Kód nélküli feltételes megjelenítés**: nincs szükség egyedi sablonlogikára, PHP‑ra.
- **Pontos célzás**: csak annak mutatsz elemeket, akinek releváns (pl. szerző).
- **Gyorsabb munkafolyamat**: státuszfüggő üzenetek és vezérlők egy helyen, vizuálisan állíthatók.
- **Kombinálhatóság**: illeszkedik a Dynamic Visibility széles feltételrendszerébe (szerepkör, bejelentkezés, dátum/idő, query, stb.), így komplex szabályláncokat építhetsz.

## Célközönség

- **Tartalomkezelők és szerkesztők**: jóváhagyási és moderációs folyamatok vizuális támogatása.
- **UGC platformok üzemeltetői**: szerzői visszajelzések, privát szerzői eszközök megjelenítése.
- **Fejlesztők és site builderek**: gyors prototípus és tiszta megvalósítás kódolás nélkül, bármely támogatott szerkesztőben.

## Kompatibilitás, korlátok és jó gyakorlatok

- **Követelmények**: szükséges a JetEngine és a Dynamic Visibility modul; az add‑on önmagában nem használható.
- **Sablon‑környezet**: a két extra feltétel a **Single Page** sablonon érvényes.
- **Frontenden vezérel**: megjelenítést szabályoz, de **nem helyettesít** jogosultság‑kezelést. A feltöltés/szerkesztés engedélyeit továbbra is WordPress képességekkel, JetEngine Profile Builderrel vagy más hozzáférés‑kezeléssel kezeld.
- **Gyorsítótárazás**: erős cache vagy statikus generálás befolyásolhatja a feltételek kiértékelését. Teszteld bejelentkezett és vendég nézetben is.

## Összefoglalás

A JetEngine – Custom visibility conditions célzott, ingyenes kiegészítő, amellyel státusz‑ és szerzőalapú láthatósági szabályokat állíthatsz be a Single Page sablonon. Egyszerűsíti a szerkesztőségi folyamatokat, javítja a szerzői élményt, és zökkenőmentesen kombinálható a Dynamic Visibility további feltételeivel – mindezt kódolás nélkül, a vizuális szerkesztőkben.