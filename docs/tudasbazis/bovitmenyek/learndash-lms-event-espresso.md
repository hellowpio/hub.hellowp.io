---
title: "LearnDash LMS - Event Espresso"
description: "Hivatalos integráció, amely az Event Espresso regisztrációt automatikus beiratkozássá alakítja a LearnDash kurzusokba."
sidebar_label: "LearnDash LMS - Event Espresso"
---

## Mi ez és milyen problémát old meg?

A LearnDash LMS – Event Espresso egy hivatalos integrációs bővítmény, amely összekapcsolja az eseményregisztrációt és jegyértékesítést a kurzus-hozzáféréssel. Ha valaki sikeresen regisztrál egy Event Espresso-eseményre, a rendszer automatikusan beiratja a megjelölt LearnDash kurzus(ok)ba. Így megszűnik a kézi adatátvitel és a manuális beiratás, csökken a hibázás esélye, és időt spórolsz az adminisztráción.

## Hogyan működik?

- A résztvevő a frontenden regisztrál/jegyet vásárol egy Event Espresso-eseményre.
- A fizetési értesítés (IPN) beérkezése után az integráció:
  - e-mail cím alapján azonosítja a felhasználót,
  - ha nincs fiók, létrehoz egy WordPress-felhasználót,
  - automatikusan beiratja a jegyhez rendelt LearnDash kurzus(ok)ra.

```text
Regisztráció/Jegyvásárlás
        │
   Fizetési jelzés (IPN)
        │
Felhasználó azonosítás e-mail alapján
        │
Ha nincs fiók → fiók létrehozása
        │
Beiratás a kiválasztott LearnDash kurzusokra
```

## Fő funkciók részletesen

- **Automatikus tanfolyam-hozzáférés**: Amint a fizetés/registráció megerősítést kap, a résztvevő beiratást kap a kijelölt kurzusokra. Nem kell importálni listákat, kézzel beállítani hozzáféréseket, mindent a rendszer intéz.
- **Több kurzus egy eseményhez**: Egy jegyhez több LearnDash kurzust is kapcsolhatsz. Például egy élő workshop jegye adhat hozzáférést egy felkészítő és egy utókövető online modulhoz.
- **Széles fizetési kaputámogatás**: Az integráció az Event Espresso által támogatott fizetési átjárókkal működik; az IPN indítja a beiratást. Így a tranzakciók biztonságos, ellenőrzött folyamata alapján történik a tanulói hozzáférés.
- **Ingyenes és fizetős események**: Használhatod teljesen ingyenes regisztrációknál és fizetős jegyeknél is; a logika változatlan: sikeres folyamat = beiratás.
- **Csepegtetett (drip) tananyag**: A LearnDash időzített leckéivel előkészítő anyagokat adhatsz az esemény előtt, majd utólagos tartalmakat, teszteket, tanúsítványokat a rendezvény után.

## Gyakorlati példák

- **Blended learning tréning**: A résztvevő jegyet vesz a kétnapos élő tréningre. Azonnal hozzáfér egy online „felkészítő” kurzushoz (videók, előolvasmányok), a tréning után pedig automatikusan megkapja az „utókövető” kurzust tesztekkel és tanúsítvánnyal.
- **Vizsgafelkészítő**: A vizsganap eseményjegye mellé a rendszer automatikusan beirat a gyakorló tesztek kurzusába. Sikeres részvétel után megnyílik egy zárómodul.
- **Vállalati onboarding**: Az új belépő egy belső workshopra regisztrál. A regisztrációval rögtön megkapja az e-learning alapismeretek kurzusát, majd a workshop után a haladó modulokat.

## Telepítés és beállítás

1. **Előfeltételek**: Aktív LearnDash licenc, telepített és aktivált LearnDash és Event Espresso (Pro).
2. **Add-on telepítése**: WordPress admin > LearnDash LMS > Add-Ons > válaszd az Event Espresso integrációt, majd telepítsd és aktiváld.
3. **Esemény és jegy beállítása**:
   - Hozz létre egy eseményt az Event Espressóban.
   - A jegynél (Available Tickets > Advanced Settings) keresd a **LearnDash Courses** szekciót.
   - Válaszd ki a kurzus(oka)t, amelyekhez a regisztráció hozzáférést ad.
4. **Tesztelés**: Végezz egy próbaregisztrációt a frontenden. Sikeres fizetési jelzés után ellenőrizd, hogy a felhasználó beiratkozott-e a megfelelő kurzusokra.

## Fontos korlátozások

- **IPN szükséges**: A beiratás az azonnali fizetési értesítésre épül. Manuális befizetések vagy banki átutalások nem indítják el automatikusan a kurzus-hozzáférést.
- **Adminból felvett résztvevők**: A WordPress vezérlőpulton kézzel hozzáadott regisztrációk nem kapnak automatizált LearnDash-hozzáférést. Ehhez frontenden kell regisztrálni.
- **Kompatibilitás**: Az integráció az Event Espresso támogatott kiadásaival használható. Javasolt mindig a legfrissebb, egymással kompatibilis verziókat futtatni.

## Előnyök és értékajánlat

- **Idő- és költségmegtakarítás**: Megszűnik a kézi beiratás, Excel-export és -import, kevesebb az adminisztráció.
- **Kevesebb hiba**: Az IPN-alapú automatizmus csökkenti az elmaradt vagy téves hozzáférések számát.
- **Skálázhatóság**: Több kurzus kapcsolása egy jegyhez támogatja a komplex, egymásra épülő tanulási útvonalakat.
- **Jobb tanulói élmény**: Azonnali hozzáférés, csepegtetett elő- és utóanyagok, átlátható folyamat.

## Licenc és elérhetőség

- Az add-on a LearnDash Add-Ons menüből érhető el aktív LearnDash licenc mellett.
- Az Event Espresso Pro külön termék és külön licencet igényel.

## Kinek ajánlott?

- **Képzésszervezők és tréningcégek**: Élő eseményeket online tananyaggal egészítenél ki, minimális adminisztrációval.
- **Vállalatok és intézmények**: Onboarding, kötelező képzések, blended learning programok egységes, automatizált folyamata.
- **Vizsgaközpontok és akadémiák**: Vizsgaidőpontok regisztrációja mellett gyakorló kurzusok és tanúsítványok automatizált kiosztása.
- **Konferenciaszervezők**: Jegyvásárlás után tematikus online modulok biztosítása a résztvevőknek.

Ha zökkenőmentesen szeretnéd összekötni az eseményregisztrációt a kurzus-hozzáféréssel, ez a bővítmény pontosan erre való: a regisztráció pillanatától a tanulói beiratásig mindent automatizál.