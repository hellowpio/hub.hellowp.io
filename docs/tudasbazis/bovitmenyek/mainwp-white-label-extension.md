---
title: "MainWP White Label Extension"
description: "MainWP Pro kiegészítő ügynökségeknek és fejlesztőknek: átbrandelés, WordPress admin testreszabás, hozzáférés-korlátozás és beépített ügyféltámogatás a kliensoldali MainWP Child fölött."
sidebar_label: "MainWP White Label Extension"
---

## Mi ez és milyen problémát old meg?

A **MainWP White Label** egy hivatalos MainWP kiegészítő, amellyel átírhatod és elrejtheted a **MainWP Child** bővítmény márkajelzését a kliensoldali WordPress telepítéseken, testreszabhatod a WordPress admin felületét, valamint korlátozhatod a kockázatos menüpontokhoz való hozzáférést. Célja, hogy egységes, saját márkás élményt adj az ügyfeleidnek, miközben csökkented a véletlen módosításokból eredő hibák kockázatát, és gyorsítod a támogatási folyamatot.

Fontos: ezzel a kiegészítővel a **MainWP Dashboard** nem white label‑elhető; a módosítások a kliensoldali MainWP Childot és meghatározott WordPress admin elemeket érintenek. A bővítmény korábban „MainWP Branding” néven volt ismert.

## Hogyan működik röviden?

A beállításokat a **MainWP Dashboard** felületén adod meg, majd azokat **globálisan** vagy **webhelyenként** tolod ki a kapcsolt gyermekoldalakra. Minden szabály bármikor visszavonható, és teljes **visszaállítás** funkció is rendelkezésre áll.

## Fő funkciók és mit csinálnak

### MainWP Child átbrandelése
- **Plugin metaadatok cseréje:** átírhatod a bővítmény nevét, leírását, szerzőjét, valamint a kapcsolódó URL-mezőket. Így a kliens a te márkáddal találkozik.
- **Láthatóság elrejtése:** elrejtheted a MainWP Childot a bővítménylistából, csökkentve az akaratlan kikapcsolás esélyét.
- **Célzott alkalmazás:** a szabályokat érvényesítheted minden gyermekoldalra, vagy felülírhatod azokat egyes webhelyeknél.

### Funkciók eltávolítása és tiltása
- **Témák és megjelenés:** letilthatod a témaváltást és elrejtheted a Megjelenés menüt.
- **Bővítmények menü elrejtése:** visszafoghatod a bővítménytelepítést/kikapcsolást.
- **MainWP oldalak eltávolítása:** elrejtheted a MainWP Child beállításait, szerverinformációkat és klónozás/visszaállítás oldalakat.
- **WordPress alapszintek:** elrejtheted a Tools, Settings, Permalinks menüket a tisztább, biztonságosabb admin felületért.

### WordPress admin white label és UI testreszabás
- **Login és favicon:** saját logót és favicont adhatsz a belépőoldalhoz.
- **Dashboard takarítás:** eltávolíthatod a zavaró widgeteket, az „update nag” értesítéseket, a Help és Screen Options füleket.
- **Lábléc és generator meta:** saját admin lábléc szöveg, valamint a WordPress verziót felfedő generator meta módosítása.
- **Egyedi CSS és szövegcsere:** tölts fel egyedi admin/login CSS-t, és cserélj ki tetszőleges admin feliratszövegeket.

### Beépített ügyféltámogatási űrlap
- **Contact Support gomb:** megjelenítheted az admin sávban és/vagy menüben, saját címkével és cél e‑mail címmel. Engedélyezhető globálisan vagy site‑szinten.

### Visszaállítás és karbantartás
- **Reset:** bármikor egy kattintással visszaállíthatod az összes White Label beállítást, ha audit, hibaelhárítás vagy átadás miatt szükséges.

## Gyakorlati példák

- **Ügynökségi brand:** átnevezed a MainWP Childot a saját ügynökséged nevére, beállítod a logódat a login oldalon, az admin láblécet pedig a saját támogatási üzenetedre cseréled.
- **Kliens-UX egyszerűsítése:** elrejted a Bővítmények és Megjelenés menüket, kikapcsolod a képernyőopciókat és a frissítési figyelmeztetéseket, így a kliens csak a számára lényeges funkciókat látja.
- **Gyors támogatás:** bekapcsolod a Contact Support gombot, amely közvetlenül a te támogatási e‑mailedre küldi a kliens üzenetét, a webhely metaadataival együtt.

Példa egyedi login CSS-re:
```
/* Login logó cseréje és igazítása */
body.login #login h1 a {
  background-image: url('/wp-content/uploads/brand-login-logo.png');
  background-size: contain;
  width: 240px;
  height: 80px;
}
```

## Előnyök és értékajánlat

- **Márkakövetkezetesség:** a kliens minden érintkezési ponton a te arculatodat látja.
- **Kevesebb kockázat:** a kritikus menük elrejtésével csökkennek a „véletlenül eltörtük” jellegű incidensek.
- **Tisztább admin felület:** kevesebb zaj, jobb fókusz az üzleti feladatokon.
- **Gyorsabb támogatás:** a beépített űrlap csökkenti az oda‑vissza egyeztetést és a jegyfelvételi időt.
- **Központi irányítás:** mindent a Dashboardból kezelsz, globális szabályokkal és site‑szintű felülírásokkal.

## Kinek ajánlott?

- **Digitális ügynökségeknek** és **freelancereknek**, akik több ügyfél webhelyét kezelik és egységes brandet szeretnének.
- **MSP-knek** és **IT csapatoknak**, akik üzemeltetési kockázatot csökkentenének hozzáférés-korlátozással.
- **In‑house marketing csapatoknak**, akik felhasználóbarát, letisztított admin felületet akarnak átadni belső stakeholdereknek.

## Gyors kezdés

1. Engedélyezd a White Label kiegészítőt a Dashboardban.
2. Állítsd be a **brand metaadatokat** és – ha kell – rejtsd el a MainWP Childot.
3. Válaszd ki a **tiltandó menüket/funkciókat** (Plugins, Appearance, Tools, Settings stb.).
4. Add meg a **Contact Support** gomb szövegeit és cél e‑mailt.
5. Állíts be **egyedi CSS-t** és **szövegcseréket** a kívánt UI‑hoz.
6. Alkalmazd a szabályokat **globálisan**, és finomhangold **site‑szinten**.
7. Ellenőrizd a kliensoldali admin felületet egy próba felhasználóval.

## Megjegyzések és korlátok

- A kiegészítő nem a MainWP Dashboardot, hanem a **kliensoldali** környezetet brandeli.
- A menük és figyelmeztetések elrejtése **nem biztonsági funkció**, hanem UX és üzemeltetési kontroll; a rendszeres karbantartás továbbra is szükséges.
- Mindig tarts kéznél egy **visszaállítási** tervet, hogy gyorsan visszavonhasd a módosításokat audit vagy hiba esetén.