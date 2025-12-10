---
title: "LearnDash LMS - Paid Memberships Pro"
description: "Hivatalos, ingyenes integráció, amellyel a LearnDash kurzusokat tagsági szintekhez rendelheted a Paid Memberships Pro segítségével; automatikus beíratás, előfizetések és hozzáférés-kezelés."
sidebar_label: "LearnDash LMS - Paid Memberships Pro"
---

## Mi ez és milyen problémát old meg?

A LearnDash LMS – Paid Memberships Pro bővítmény a LearnDash hivatalos, ingyenes integrációja. Összekapcsolja a LearnDash kurzusait a Paid Memberships Pro (PMPro) tagsági szintjeivel, így egyetlen tagsággal több kurzust adhatsz el. Megoldja a tipikus gondokat: nem kell manuálisan beíratni a vevőket, nem csúszik szét a hozzáférés lejáratkor, és tiszta, egységes pénztárfolyamatot ad a kurzusvásárláshoz.

## Hogyan működik röviden?

- A PMPro-ban létrehozol tagsági szinteket (pl. Havi All-Access).
- A szintekhez kurzusokat rendelsz.
- Amikor valaki megveszi a tagságot, a rendszer automatikusan beiratja a hozzárendelt LearnDash kurzusokra.
- Ha a tagság lejár vagy megszűnik, a kurzus-hozzáférés is automatikusan frissül.

## Fő funkciók részletesen

- **Kurzus-hozzárendelés tagsági szintekhez**  
  Egy vagy több LearnDash kurzust kapcsolhatsz egy PMPro szinthez. Vásárlás után azonnali, automatikus beiratás történik a megfelelő kurzusokba. Ugyanez fordítva is szerkeszthető: a kurzus oldalán kiválaszthatod, mely tagság szükséges az eléréshez. A két nézet mindig szinkronban marad.

- **Előfizetés és lejárat kezelése**  
  A PMPro kezeli az ismétlődő díjakat, a lejáratokat és a próbákat. A bővítmény ezt lefordítja kurzus-hozzáféréssé: aktív tagság = aktív kurzuselérés, lejárt tagság = hozzáférés visszavonása. Nem kell kézzel enroll/unenroll-olni.

- **Próbaverziók és kuponok**  
  Ingyenes próbaidőt, kedvezménykódokat és több fizetési átjárót használhatsz a PMPro-val. A LearnDash hozzáférések ehhez automatikusan igazodnak (pl. próba alatt elérhető, majd a próba végén a szokásos előfizetés szerint).

- **Egységes pénztár és vásárlói út**  
  A kurzusoldali „Take this Course” gombot átirányíthatod a PMPro szinteket bemutató oldalra/pénztárra. Így a diák mindig ugyanabba a checkout-folyamatba kerül, kevesebb a zavar és a kosárelhagyás.

- **Retroaktív beíratás**  
  Ha már vannak aktív tagjaid, egy adminisztrációs folyamat futtatásával utólag is beírathatod őket a frissen hozzárendelt kurzusokba. Ez biztosítja, hogy a tagság–kurzus megfeleltetés visszamenőleg is konzisztens legyen.

## Telepítés és alapbeállítás

1. **Előfeltételek**: aktív LearnDash, telepített és aktivált PMPro.
2. **Telepítés**: WordPress admin > LearnDash LMS > Add-Ons > „Paid Memberships Pro for LearnDash” > Install > Activate.
3. **Kurzus-hozzárendelés**:  
   - PMPro: Memberships > Settings > Levels > válaszd a LearnDash szekcióban a kurzusokat, vagy  
   - LearnDash: a kurzus szerkesztésekor jelöld be a „Require Membership” opcióknál a szükséges szint(ek)et.
4. **Kurzus hozzáférési mód**: állítsd „Closed”-ra, és add meg a PMPro „Levels” oldal URL-jét gombcélként, például:
   ```
   Course > Settings
   Access Mode: Closed
   Button URL: /tagsag-szintek/
   ```
5. **Retroaktív beíratás (opcionális)**: futtasd az adminfelületen, ha korábbi tagoknak is kiosztanád az új kurzuseléréseket.

## Gyakorlati példák

- **„Minden kurzus” tagság**: havi vagy éves all-access, amely az összes jelenlegi (és akár jövőbeli) kurzushoz hozzáférést ad. Ideális akadémia jellegű kínálathoz.
- **Tematikus csomagok**: például „Frontend fejlesztő” tagság, amely HTML, CSS, JavaScript és React kurzusokat fog össze. Egy vásárlás, több kurzus.
- **Belépő próba**: 7 nap ingyenes próba, utána havi előfizetés. A próba alatt a diák már tanulhat; a próba végén automatikusan folytatódik a hozzáférés, ha aktív marad az előfizetés.

## Előnyök és értékajánlat

- **Időmegtakarítás**: nincs kézi be- és kijelentkeztetés; a rendszer mindent automatikusan kezel.
- **Rugalmas üzleti modellek**: egyszeri díj, előfizetés, próba, kuponok – mind működik ugyanazon integráción keresztül.
- **Skálázható értékesítés**: csomagold a kurzusaidat tagságokba, növeld a kosárértéket és csökkentsd a bonyolultságot.
- **Egységes vásárlói élmény**: egyértelmű út a kurzusoldaltól a pénztárig, kevesebb lemorzsolódás.
- **Hivatalos, ingyenes kiegészítő**: natív LearnDash-integráció, támogatott működés a LearnDash ökoszisztémában.

## Kinek ajánlott?

- **Online akadémiáknak**: sok kurzus, folyamatos bővülés, all-access vagy tematikus csomagmodellek.
- **Képző cégeknek és tréningprogramoknak**: ismétlődő bevétel és tagságalapú jogosultságkezelés.
- **EdTech startupoknak**: gyors indulás komplett pénztár- és előfizetéskezeléssel.
- **Olyan oktatóknak**, akik kupont, próbát és több fizetési kaput szeretnének egyben kezelni.

## Fontos megjegyzések és korlátozások

- **PMPro szükséges**: az integráció a PMPro alapbővítménnyel működik.
- **Checkout-exkluzivitás**: ugyanazon kurzus-hozzáférést ne kezeld párhuzamosan más checkout megoldással.
- **Többes tagság**: a PMPro alapértelmezetten nem engedi, hogy egy felhasználónak egyszerre több szintje legyen; ehhez külön megoldások szükségesek.
- **Tranzakciós naplózás**: előfordulhat, hogy egy tranzakcióhoz két naplóbejegyzés látszik az adminban; ez normális, a felhasználó nem kerül dupla terhelésre.

## Alternatívák és kapcsolódó integrációk

- **PMPro Courses add-on**: PMPro-központú rendszerekben alternatíva lehet, de a visszamenőleges beíratás kezelése eltérhet.
- **Más tagsági integrációk**: elérhető hasonló, ingyenes LearnDash integráció más tagsági bővítményekhez is.

## Döntési összefoglaló

Akkor válaszd ezt a bővítményt, ha LearnDash-t használsz, és tagságalapú értékesítést, kurzuscsomagokat, előfizetést, próbát és kuponokat szeretnél egyszerűen, automatikus hozzáférés-kezeléssel. Ha a teljes ökoszisztémád PMPro-központú, mérlegelheted a PMPro saját kurzusintegrációját is, de figyelj a beíratások visszamenőleges kezelésére.