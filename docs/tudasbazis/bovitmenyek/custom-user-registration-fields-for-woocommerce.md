---
title: "Custom User Registration Fields for WooCommerce"
description: "Fizetős WooCommerce-kiegészítő az egyedi regisztrációs mezők, szerepkör-választó, jóváhagyás és értesítések kezelésére – B2C és B2B folyamatokhoz."
sidebar_label: "Custom User Registration Fields for WooCommerce"
---

## Mi ez és milyen problémát old meg?

A Custom User Registration Fields for WooCommerce egy professzionális kiegészítő, amellyel korlátlan számú **egyedi mezőt** adhatsz a WooCommerce regisztrációs űrlapjához. Megoldja, hogy az alap, minimális WooCommerce-regisztráció helyett már az első belépés előtt begyűjtsd a számodra fontos adatokat (pl. cégadatok, adószám, preferenciák), és komplett **B2B regisztrációs folyamatokat** építs fel **szerepkör-választóval**, **manuális/automatikus jóváhagyással** és **e-mail értesítésekkel**. A mezők az adminban és a „Fiókom” oldalon is megjelennek, így az adatok végig követhetők. WooCommerce nélkül is képes a mezőket az alap WordPress-regisztráción megjeleníteni.

Fontos: ez a leírás az Addify által fejlesztett, Marketplace-en elérhető bővítményről szól. Nem azonos az ingyenes, hasonló nevű másik megoldással. Ha ezt keresed, figyeld, hogy a fejlesztő Addify, és szerepel-e a szerepkör-alapú jóváhagyás.

## Fő funkciók, érthetően

- Korlátlan egyedi mező
  - Hozzáadhatsz tetszőleges számú mezőt, amelyekhez beállíthatod a **címkét**, **placeholdert**, **leírást**, **kötelező/elhagyható** státuszt, **olvasható (read-only)** módot, **fél- vagy teljes szélességet**, sőt **egyedi CSS**-t is. A mezők sorrendje rendezhető.
- Szerepkör-választó és feltételes logika
  - A regisztráción megjeleníthetsz **szerepkör-választót** (pl. „Nagyker”, „Kereskedő”). Te döntöd el, mely szerepkörök választhatók, és a mezőket **szerepkörökhöz rendelheted**, így mindenki csak a releváns kérdéseket látja. A **feltételes (dependable) mezők** segítségével tisztább, rövidebb űrlapot készíthetsz.
- Jóváhagyási folyamat és értesítések
  - Új felhasználók **manuális vagy automatikus jóváhagyása** szerepkörönként. A rendszer **e-maileket** küld a regisztrációról, függő státuszról, jóváhagyásról vagy elutasításról – adminnak és ügyfélnek egyaránt.
- Alap számlázási (billing) mezők engedélyezése
  - Opcionálisan bekapcsolhatod a klasszikus számlázási mezőket (név, cég, cím, telefon stb.) a regisztrációhoz. Ezek az adatok **automatikusan előtöltődnek** a pénztárban, így kevesebb a dupla adatbevitel.
- Megjelenítés több nézetben
  - A felhasználó a „**Fiókom**” oldalon láthatja (és beállításidtól függően szerkesztheti) az adatokat. Az admin a **Felhasználók** alatt mindent átlát. Opcionálisan a mezők megjelenhetnek a **rendelés részleteinél** és a **rendelési e-mailekben** is.
- Mezőtípusok széles köre
  - Többek között: **szöveg**, **szövegterület**, **e-mail**, **szám**, **jelszó**, **legördülő**, **többválasztós**, **jelölőnégyzet(ek)**, **rádió**, **fájlfeltöltés** (méret- és típuskorlátozással), **színválasztó**, **dátum-/időválasztó**, **Google reCAPTCHA**, valamint **címsor/fejléc** és **leírás** mezők.
- Kompatibilitás szerepkör-kezelőkkel
  - Együttműködik elterjedt **szerepkör-kezelő bővítményekkel**, így haladó jogosultsági modellbe is könnyen illeszthető.
- Spamvédelem
  - Beépített **reCAPTCHA** mezőtípus csökkenti a robotregisztrációkat.

## Gyakorlati példák

- B2B nagyker regisztráció
  - A felhasználó szerepkört választ („Nagyker”), erre feltárulnak a **cégjegyzékszám**, **adószám**, **számlázási cím** mezők. A lead „függő” állapotba kerül, az admin ellenőrzi, majd jóváhagyja. Jóváhagyás után e-mailt kap, és beléphet.
- Szolgáltatás/klub
  - A regisztráción kérhetsz **érdeklődési köröket**, **tagsági azonosítót**, **születési dátumot**. Ezek később a „Fiókom” oldalon áttekinthetők, frissíthetők.
- Pénztárnál regisztráció
  - Ha engedélyezed a pénztárnál történő fiók-létrehozást, ugyanazok a regisztrációs mezők megjelenhetnek ott is. Technikai okból bizonyos mezők (pl. **fájlfeltöltés**, **reCAPTCHA**) a pénztárnál nem jelennek meg. A **szerepkör-választó** és a hozzá kötött feltételes mezők elérhetők.

## Hogyan kezdjem? (telepítés és alapbeállítás)

1. Telepítés után keresd az admin menüben a **Registration Fields** menüpontot.
2. Hozz létre új mezőt: válaszd ki a **típust**, add meg a **címkét**, állítsd be a **kötelező** státuszt, **szélességet**, esetleg **read-only** módot és egyedi **CSS**-t.
3. Állíts be **szerepkör-választót**, és rendeld a mezőket konkrét szerepkörökhöz vagy feltételekhez.
4. Engedélyezd az **alap számlázási mezőket**, ha szeretnéd ezeket előre megkérdezni.
5. Konfiguráld a **jóváhagyási szabályt** (manuális/automatikus) szerepkörönként, és szerkeszd a **értesítő e-mailek** szövegét.
6. Döntsd el, hol jelenjenek meg az adatok: **Fiókom**, **admin felhasználói adatlap**, opcionálisan **rendelés részletek** és **rendelési e-mailek**.

Tipp: tartsd az űrlapot röviden – használj szerepkör- és feltételalapú megjelenítést, hogy mindenki csak a releváns mezőket lássa.

## Ismert korlátozások

- A WooCommerce **alap regisztrációs mezői** mindig a lista elején jelennek meg; az egyedi mezők rendezhetők, de az alapmezők közé nem illeszthetők. A **szerepkör-választó** az alapmezők után jelenik meg.
- A pénztárnál történő regisztráción **bizonyos mezők** (pl. fájlfeltöltés, reCAPTCHA) nem jelennek meg.
- Nincs **shortcode**, és nem hozhatsz létre **több külön regisztrációs űrlapot**; a bővítmény a WooCommerce natív űrlapját bővíti.
- **Jelszó-megerősítő** mező hozzáadása nem támogatott.

## Kompatibilitás és követelmények

A bővítmény WooCommerce-alapú webáruházakhoz készült, több nyelvet támogat, és együttműködik népszerű szerepkör-kezelő megoldásokkal. A WordPress és WooCommerce használata alapfeltétel.

## Előnyök és értékajánlat

- **Adatteljesség az első pillanattól**: kevesebb utólagos egyeztetés, gyorsabb onboarding.
- **B2B validáció**: csak jóváhagyott ügyfelek férnek hozzá a fiókhoz és a rendeléshez.
- **Kevesebb dupla adatbevitel**: a regisztráción bekért számlázási adatok **előre kitöltik** a pénztár mezőit.
- **Jobb ügyfélkommunikáció**: automatikus, állapotalapú **e-mail értesítések**.
- **Rugalmas űrlapok**: feltételes és szerepkör-függő megjelenítés, széles **mezőtípus-választék**.
- **Spamcsökkentés**: reCAPTCHA integráció.

## Kinek ajánlott?

- **B2B/Nagyker webáruházaknak**: szerepkörök, cégadatok, dokumentumfeltöltés és manuális jóváhagyás.
- **Szolgáltatóknak, kluboknak, tagsági oldalaknak**: profilmezők, érdeklődések, tagsági adatok kezelése.
- **Ügynökségeknek és fejlesztőknek**: gyors megoldás a komplex regisztrációs igényekre, testre szabható megjelenéssel.
- **Szabályozott iparágaknak**: ellenőrizhető, jól dokumentált ügyféladat-folyamat.

Ezzel a bővítménnyel pontosan azt kérdezheted meg a regisztrációnál, amire üzletileg szükséged van, átlátható jóváhagyási folyamattal és egységes adatkezeléssel – mindezt a WooCommerce ökoszisztémájába illesztve.