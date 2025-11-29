---
title: "LearnDash LMS - MemberPress Integration"
description: "Hivatalos LearnDash kiegészítő, amely a MemberPress tagsági szinteket a LearnDash tanfolyam-hozzáféréssel kapcsolja össze, automatikus be- és leiratkozással."
sidebar_label: "LearnDash LMS - MemberPress Integration"
---

## Mi ez és milyen problémát old meg?

A LearnDash LMS – MemberPress Integration egy hivatalos LearnDash bővítmény, amely összeköti a tagsági szinteket a tanfolyam-hozzáféréssel. Amikor valaki megvásárol egy tagságot, **automatikusan beiratkozik** a hozzá rendelt tanfolyamokra; amikor a tagság lejár vagy lemondásra kerül, **automatikusan leiratkozik**. Így nem kell kézzel kezelni a hozzáféréseket, elkerülhetők a “vettem, de nem férek hozzá” helyzetek, és skálázhatóvá válik a kurzuseladás.

## Hogyan működik?

- A MemberPress-ben létrehozott **tagsági szinthez** kiválasztod, mely LearnDash tanfolyamok tartoznak.
- A kiválasztott tanfolyamok hozzáférési módját **Closed**-ra állítod, így a beléptetést a tagság vezérli.
- Vásárláskor a rendszer beiratkoztatja a felhasználót; a tagság státusza (aktív, lemondott, lejárt) alapján a hozzáférés **automatikusan frissül**.
- Több tanfolyam is rendelhető egy tagsághoz, így **csomagként** értékesíthetsz.

## Fő funkciók és mit csinálnak

### Tanfolyam-hozzárendelés tagságokhoz
A MemberPress tagsági szerkesztőjében a LearnDash fülön kiválasztod a tanfolyamokat. A hozzárendelés után a tagság jogosultsága dönti el, ki mit lát. Ezzel a teljes beiratkozási logika egységesen kezelhető.

### Automatikus beiratkozás és leiratás
Vásárláskor azonnali beiratkozás történik, lemondáskor vagy lejáratkor a rendszer kiveszi a felhasználót a kurzus(ok)ból. Nem kell manuálisan adminisztrálni, csökken a hibázás esélye.

### Csomagolt értékesítés (bundling)
Egy tagsághoz **több tanfolyam** is rendelhető, így könnyen létrehozhatsz “Bronz/Ezüst/Arany” csomagokat vagy tematikus kurzuscsomagokat.

### Kuponok és próbaverziók
A MemberPress kuponjai és próbaverziós beállításai **közvetlenül érvényesek** a LearnDash tanfolyamokra a tagságon keresztül. Így egyszerűen futtathatsz akciókat vagy kínálhatsz ingyenes próbanapokat.

### Retroactive Tool
Ha utólag adsz új tanfolyamot egy meglévő tagsághoz, vagy valakinél elmaradt a beiratkozás, a Retroactive Tool **visszamenőleg rendez**. Végigpásztázza a tranzakciókat/szabályokat, és beiratkoztatja az érintett felhasználókat.

### Háttérbeiratkozás nagy csomagoknál
Ha egy tagsághoz **5 vagy több** tanfolyam tartozik, a beiratkoztatás **háttérfolyamatban** fut. Ehhez működő cron szükséges, hogy a beiratkozások megbízhatóan lefussanak nagy terhelésnél is.

Példa WP-CLI paranccsal:
```
wp cron event run --due-now
```

### E-kereskedelem és checkout
A checkout és a fizetés teljes folyamata a MemberPressen megy keresztül. A támogatott fizetési átjárók és e-kereskedelmi funkciók a MemberPress képességeit követik.

## Gyakorlati példák

- **Csomagszintek**: Bronz tagság = 2 alapkurzus; Ezüst = Bronz + haladó kurzus; Arany = minden kurzus. A vásárló egyetlen előfizetéssel megkapja a szintjéhez tartozó összes kurzust.
- **Próbaverziós kampány**: 7 napos próba az “Ezüst” tagsághoz. A felhasználó azonnal hozzáfér a kijelölt tanfolyamokhoz, majd a próba végén automatikusan folytatódik az előfizetés.
- **Utólag bővített csomag**: Hozzáadsz még 1 kurzust az “Arany” tagsághoz. A Retroactive Tool lefuttatásával a korábbi előfizetők is megkapják a hozzáférést.
- **Vállalati belső akadémia**: Éves vállalati tagság több tucat kurzussal. A háttérbeiratkozás cron mellett stabilan fut, így nincs időtúllépés a böngészőben.

## Előnyök és értékajánlat

- **Időmegtakarítás**: megszűnik a kézi be- és kijelentkeztetés.
- **Kevesebb hiba**: automatikus jogosultság-kezelés, Retroactive Tool-lal kiegészítve.
- **Rugalmas értékesítés**: csomagok, előfizetések, kuponok és próbák egyben.
- **Skálázhatóság**: nagy kurzuscsomagok esetén háttérbeiratkozás cron-nal.
- **Egységes checkout**: a fizetés és a hozzáféréskezelés logikája egy helyen.

## Telepítés és alapbeállítás

1. **Szükséges bővítmények**: aktív LearnDash és aktív MemberPress licenc. Az integrációs add-on ingyenes.
2. **Telepítés**: LearnDash LMS > Add-Ons > “MemberPress for LearnDash” > Install/Activate, vagy manuális feltöltés a letöltött ZIP segítségével.
3. **Tanfolyamok beállítása**: a kurzusok hozzáférési módját állítsd **Closed**-ra.
4. **Hozzárendelés tagsághoz**: MemberPress > Membership szerkesztése > Membership Options > LearnDash fül > válaszd ki a tanfolyamokat.
5. **Nagy csomagok (5+)**: gondoskodj működő cron-ról a háttérbeiratkozáshoz.
6. **Visszamenőleges javítás**: MemberPress > Settings > LearnDash fül > Tools > Run, majd mentsd a beállításokat.

## Követelmények, megjegyzések, jó gyakorlatok

- **Kötelező** a tanfolyamoknál a **Closed** hozzáférési mód, különben a tagság nem fogja kezelni a beléptetést.
- A fizetési átjárók és e-kereskedelmi részletek a MemberPress képességeit követik.
- Az integráció opcionális: LearnDash önmagában is védhet tananyagokat, de a MemberPress ad haladó tagság-, előfizetés-, kupon- és jelentés-funkciókat.
- A bővítmény fejlesztője a **LearnDash**; hivatalos add-onként folyamatosan karbantartott.

## Kinek ajánlott?

- **Online akadémiák és edtech vállalkozások**: csomagolt és előfizetéses értékesítéshez.
- **Vállalati képzési programok**: sok kurzus, sok felhasználó, szükség van megbízható automatikára és háttérfolyamatokra.
- **Trénerek, ügynökségek**: rugalmas kupon- és próbaverziós kampányok, minimális adminisztrációval.
- **Bárki, aki szeretné a checkoutot és a hozzáférést** egyetlen, stabil tagsági rendszerben kezelni.

Ha az a célod, hogy a kurzusaidat tagsági modellel, megbízható automatikával és skálázható háttérrel add el, ez az integráció pontosan erre való.