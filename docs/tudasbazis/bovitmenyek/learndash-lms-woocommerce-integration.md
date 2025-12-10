---
title: "LearnDash LMS - WooCommerce Integration"
description: "Hivatalos, ingyenes LearnDash kiegészítő, amellyel kurzusokat és csoportokat WooCommerce termékként adhatsz el, automatikus beiratással és hozzáférés-kezeléssel."
sidebar_label: "LearnDash LMS - WooCommerce Integration"
---

## Mi ez és milyen problémát old meg?

A LearnDash LMS – WooCommerce Integration egy hivatalos, ingyenes kiegészítő, amellyel a LearnDash-ben létrehozott kurzusokat és csoportokat WooCommerce-termékként értékesítheted. A sikeres fizetés után a rendszer automatikusan beiratja a vásárlót a hozzárendelt kurzusokra/csoportokba, visszatérítés vagy előfizetés-lemondás esetén pedig megvonja az elérést. Így a kurzusértékesítésed ugyanazt a bevált e‑kereskedelmi folyamatot használja, mint bármely webáruház: adók, kuponok, több fizetési átjáró, számlázás, visszatérítés – minden a helyén.

## Fő funkciók, érthetően

- **Kurzusok és csoportok termékké kötése**  
  Egy WooCommerce-termékhez egy vagy több LearnDash kurzust és/vagy csoportot rendelhetsz. Ezzel könnyen létrehozol egyedi kurzusokat, csomagokat vagy vállalati hozzáféréseket.

- **Széles terméktípus-támogatás**  
  Használhatod az egyszerű (Simple), változatos (Variable), egyszeri és előfizetéses (Simple/Variable Subscription) termékeket, plusz elérhető egy dedikált **Course** terméktípus is. Variációknál a hozzárendelést variációs szinten adhatod meg.

- **Automatikus beiratás és elérés-megvonás**  
  Sikeres fizetéskor a vevő automatikusan kurzuselérést kap. Visszatérítésnél, meghiúsult fizetésnél vagy lemondott előfizetésnél a rendszer a hozzáférést megvonja, így a rendelések és hozzáférések mindig összhangban maradnak.

- **Részletes “Enrollment Status” szabályok**  
  Meghatározhatod, hogy mely rendelés- és előfizetés-állapotoknál adjon vagy tagadjon hozzáférést (Grant/Deny). Ez az egyéni WooCommerce státuszokkal is működik, így teljes kontrollod van a hozzáférés időzítésén.

- **Előfizetéses hozzáférés**  
  WooCommerce Subscriptions használatával ismétlődő díjjal adhatsz kurzuselérést. A hozzáférés az előfizetés aktív, szüneteltetett vagy lejárt állapotához igazodik.

- **Retroaktív hozzáférés-szinkron**  
  Ha bármilyen okból eltérés alakul ki (például régi rendeléseknél), a “Retroactive course access” eszközzel utólag újraszinkronizálhatod a hozzáféréseket a rendelésállapotok alapján.

- **Pénztári UX-kiegészítések**  
  - “Purchase Note” mezőben rögtön megadhatod a következő lépéseket vagy a kurzuslinket.  
  - Vásárlás utáni átirányítással közvetlenül a tanfolyamoldalra küldheted a vevőt.  
  - Gyors kosárra helyezéshez használhatsz direkt URL-t:

```
/?add-to-cart=TERMÉK_ID
```

- **Admin/fejlesztői kontrollok**  
  Fejlesztői szűrőkkel kikapcsolhatod a bejelentkezés-kényszert a pénztárnál, vagy megtilthatod a kurzusos rendelések automatikus “Complete” állapotát – hasznos, ha fizikai és digitális tételek vegyesen szerepelnek.

## Hogyan működik a gyakorlatban? (Folyamat)

1. **Termék létrehozása** WooCommerce-ben (Simple/Variable/Subscription/Course).  
2. **Hozzárendelés**: a termék adatmezőiben kiválasztod, mely LearnDash kurzus(ok) és/vagy csoport(ok) járjanak a termékhez.  
3. **Vásárlás és fizetés**: a vevő a WooCommerce pénztáron fizet bármely támogatott átjáróval.  
4. **Automatikus beiratás**: a rendszer a rendelés/előfizetés állapota alapján adja vagy vonja meg a hozzáférést.  
5. **Szinkron és karbantartás**: eltérés esetén futtasd a retroaktív eszközt.

## Gyakorlati példák

- **Egyszeri díjas kurzus**: létrehozol egy Simple terméket, hozzákötöd a kurzust, a sikeres fizetés után a diák azonnal hozzáfér.  
- **Kurzuscsomag**: egy termékhez több kurzust rendelsz, így csomagkedvezménnyel adhatod őket.  
- **Változatos termék**: variációnként más kurzust vagy csomagot adsz (pl. Alap/Pro csomag).  
- **Előfizetéses hozzáférés**: Subscriptions-szel havi díjért biztosítasz elérést; lemondáskor a hozzáférés megszűnik.  
- **Vállalati értékesítés**: egy termékhez LearnDash csoportot rendelsz, így egy tranzakcióval adsz szervezeti hozzáférést. Ha ülésszám-kezelés is kell, erre külön kiterjesztés használható.

## Előnyök és értékajánlat

- **Teljes e‑kereskedelmi ökoszisztéma**: adózás, számlázás, kuponok, promók, sok fizetési átjáró.  
- **Kevesebb manuális munka**: automatikus beiratás és elérés-megvonás rendelésállapot alapján.  
- **Pontosság és kontroll**: Enrollment Status szabályokkal nincs “fizetett, mégsem elér” vagy “visszatérített, mégis elér” helyzet.  
- **Rugalmas csomagolás**: csomagok, variációk, előfizetések – mind ugyanazon a folyamaton.  
- **Skálázhatóság**: B2C és B2B értékesítéshez is bevált, nagy forgalom mellett is stabil.

## Telepítés és beállítás röviden

- **Előkészítés**: telepítsd és aktiváld a LearnDash-t és a WooCommerce-t; előfizetéshez a Subscriptions bővítményt.  
- **Add-on telepítése**: a LearnDash Add-ons menüből vagy manuálisan feltöltve aktiváld az integrációt.  
- **Termék-konfiguráció**: válaszd ki a terméktípust, majd a LearnDash Courses/Groups mezőkben rendeld hozzá a kurzusokat/csoportokat. Variációknál variációnként állítsd be.  
- **Gombok és átirányítás**: a LearnDash kurzus/csoport “Button URL” mezőjébe tedd a megfelelő termék- vagy add-to-cart URL-t.  
- **Pénztári üzenetek**: adj meg Purchase Note-ot, és szükség esetén állíts be rendelés utáni átirányítást.

## Kinek ajánlott?

- **Online oktatóknak és akadémiáknak**: akik professzionális fizetési és számlázási folyamatot szeretnének.  
- **Marketing- és e‑kereskedelmi csapatoknak**: kuponokkal, csomagokkal, A/B tesztelhető ajánlatokkal dolgoznak.  
- **Vállalati képzésszolgáltatóknak**: csoportalapú hozzáférést adnak, előfizetéses modellel is.  
- **Vegyes (digitális + fizikai) kínálatú webáruházaknak**: ugyanazon pénztárban kezelik a kurzusokat és a termékeket.

## Korlátok és megjegyzések

- A használathoz szükséges a LearnDash és a WooCommerce; előfizetéshez külön Subscriptions bővítmény kell.  
- A WooCommerce általában felhasználói fiókot hoz létre a pénztárban; ez biztosítja a helyes beiratást. Ez fejlesztői szűrővel módosítható.  
- Változatos és előfizetéses termékeknél a hozzárendeléseket variációs szinten is külön be kell állítani.  
- Ha régi rendeléseknél eltérés van a hozzáférésekben, futtasd a retroaktív szinkront.

## Összegzés

Ezzel a kiegészítővel a LearnDash kurzusaid és csoportjaid a WooCommerce teljes erejével értékesíthetők. Egy helyen kapod a profi pénztárt, a pontos hozzáférés-kezelést és a rugalmas csomagolási lehetőségeket – kevesebb manuális feladattal, nagyobb biztonsággal és jobb tanulói élménnyel. Ha kurzust adsz el, ez az integráció a legrövidebb út a megbízható, skálázható megoldáshoz.