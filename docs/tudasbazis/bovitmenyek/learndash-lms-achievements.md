---
title: "LearnDash LMS - Achievements"
description: "A LearnDash hivatalos gamifikációs kiegészítője jelvényekkel, pontokkal és vezetőlistákkal. Eseményekhez kötött jutalmazással növeli a tanulói elköteleződést és láthatóvá teszi az előrehaladást."
sidebar_label: "LearnDash LMS - Achievements"
---

## Bevezetés: mire való és milyen problémát old meg?

A LearnDash LMS – Achievements a LearnDash hivatalos gamifikációs bővítménye. Jelvényeket és pontokat oszt a tanulóknak előre beállított események (triggek) alapján, és vezetőlistákat jelenít meg. Segít megoldani:
- alacsony aktivitás: azonnali jutalmazással növeli a motivációt,
- láthatatlan haladás: jelvényekkel és pontokkal teszi kézzelfoghatóvá az eredményeket,
- manuális jutalmazás terhe: automatizált kiosztás,
- monetizációs ösztönző hiánya: pontok beváltása kurzusvásárlásra,
- csoportos tanulás átláthatósága: a csoportvezetők jelvényképet és pontokat látnak.

## Fő funkciók és hogyan működnek

### Eseményalapú jutalmazás (triggerek)
Előre definiált eseményekhez rendelhetsz jutalmakat:
- **WordPress-események**: regisztráció, bejelentkezés, hozzászólás, bejegyzés megtekintése, több egymást követő napi bejelentkezés (streak).
- **LearnDash-események**: kurzus/leckék/témák teljesítése, kvíz sikeres/sikertelen, X% feletti kvízeredmény, feladat feltöltése és elfogadása, esszé értékelése, továbbá összetett feltételek (pl. X kurzus befejezve, X jelvény/pont megszerezve).

Minden Achievement bejegyzésben kiválasztod a triggert, beállítod a jutalmat (pontszám, jelvény, előfordulások), majd publikálod. A rendszer ezután automatikusan kiosztja a jutalmakat, amikor az esemény bekövetkezik.

### Jelvények és pontok
- **Jelvények**: használhatsz beépített ikonokat vagy saját képeket. A jelvények a felhasználói profilban és dedikált listákban jelennek meg.
- **Pontok**: a tanulók tevékenységgel gyűjtik, az aktuális egyenleg több nézetben és widgetben is látható.
- **Admin és csoportvezető**: admin bónuszpontot adhat közvetlenül a felhasználói szerkesztőképernyőn; csoportvezetők áttekintik a csoport tagjainak jelvényeit.

### Pontok beváltása kurzusokra
A kurzus szerkesztőjében megadható egy **pont-ár**, és a tanuló ponttal „vásárolhatja meg” a kurzust. Jelenleg ez a funkció a Buy Now hozzáférési módban támogatott. Ez közvetlen ösztönző a folyamatos pontgyűjtésre.

### Megjelenítés és UI
- **Popup értesítés**: testre szabható megjelenési idő, pozíció, színek, RTL támogatás. Azonnali visszajelzést ad a felhasználónak.
- **Blokkok és shortcode-ok**: saját „Saját eredményeim” nézet és „Vezetőlista” komponens áll rendelkezésre Gutenberg blokkban és shortcode-ként.

### Adatkezelés és bővíthetőség
A felhasználói adatok exportálása/törlése során az Achievements adatai is kezelhetők. Fejlesztőknek hookok és szűrők érhetők el (pl. létrehozás, eltávolítás után futó akciók), így az automatizmusok és integrációk testre szabhatók.

## Gyors indulás

1. Telepítés: WordPress adminban menj a LearnDash LMS > Add-Ons menübe, telepítsd és aktiváld a bővítményt. Alternatíva: Bővítmények > Új hozzáadása > .zip feltöltése.
2. Első Achievement létrehozása: Új Achievement > válassz triggert (pl. „Kvíz teljesítése 80% felett”), adj meg pontot és jelvényt, határozd meg, hányszor kapható meg.
3. Publikálás: közzététel után a trigger és a kapcsolt tananyagelemek nem módosíthatók.
4. Megjelenítés: helyezd el az „My Achievements” vagy „Achievements Leaderboard” blokkot/shortcode-ot a kívánt oldalon.
5. (Opcionális) Pont-ár a kurzushoz: a kurzus szerkesztőben add meg a pont-árat, ha ponttal is elérhetővé szeretnéd tenni.

## Shortcode-ok és blokkok

- Vezetőlista (szám és pontok megjelenítése):
```
[ld_achievements_leaderboard number="10" show_points="true"]
```

- Saját eredményeim (pontok megjelenítése):
```
[ld_my_achievements show_points="true"]
```

A fenti funkciók Gutenberg blokkokként is elérhetők: My Achievements, Achievements Leaderboard.

## Gyakorlati példák

- **Napi visszatérés ösztönzése**: Adj 5 pontot minden bejelentkezésért, és extra jelvényt 7 egymást követő nap után. A popup azonnal jelzi a jutalmat.
- **Minőségi kvízteljesítmény**: Állíts be 100 pontot és egy „Kvíz Mester” jelvényt 80% feletti eredményért. A vezetőlista a legtöbb pontot gyűjtőket emeli ki.
- **Kurzusvásárlás pontból**: Kezdő kurzusért 500 pont-árat adsz meg. A tanuló a gyűjtött pontjait beváltva fér hozzá, így a teljes rendszer motiválóbb.
- **Csoportos tanulás**: Csoportvezető látja, ki szerezte meg a „Modulzáró” jelvényt, és célzott támogatást ad a lemaradóknak.

## Előnyök és értékajánlat

- **Magasabb elköteleződés**: jutalmazás és azonnali visszajelzés.
- **Átlátható haladás**: vizuális jelvények, pontok, vezetőlisták.
- **Kevesebb adminmunka**: automatizált kiosztás triggerekkel.
- **Bevételnövelés**: pontbeváltás kurzusokra, erősebb motiváció a tanulásra.
- **Skálázhatóság**: blokkok, shortcode-ok, hookok fejlesztői bővíthetőséggel.

## Kinek ajánlott?

- **Online akadémiáknak és vállalati L&D csapatoknak**: ha növelnéd a kurzusbefejezési arányt.
- **Közösségi alapú programoknak**: ahol fontos a versengés és az elismerés.
- **Iskoláknak és tréningcégeknek**: csoportvezetői átláthatóság és motivációs eszköztár.
- **Monetizáló kurzusportáloknak**: ha pontokkal is szeretnél hozzáférést adni kurzusokhoz.

## Kompatibilitás és megkötések

- Aktív LearnDash LMS szükséges.
- A „pontokkal vásárlás” jelenleg a Buy Now hozzáférési módban érhető el.
- Fontos: publikálás után a trigger és a kapcsolt tananyagelemek nem módosíthatók.
- Testreszabható popup (időzítés, pozíció, színek, RTL), jelvényméret és tooltip tipográfia.
- Fejlesztő: LearnDash (StellarWP / Liquid Web márka).

Ezzel a bővítménnyel játékossá, mérhetővé és jutalmazóvá teheted a tanulási élményt – egyszerű beállításokkal, automatikus működéssel és látványos felhasználói felülettel.