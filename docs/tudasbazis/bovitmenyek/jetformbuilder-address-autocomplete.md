---
title: "JetFormBuilder Address Autocomplete"
description: "PRO kiegészítő a JetFormBuilderhez, amely Google-alapú, valós idejű címajánlást és automatikus címkitöltést ad az űrlapmezőkhöz."
sidebar_label: "JetFormBuilder Address Autocomplete"
---

## Mi ez és milyen problémát old meg?

A JetFormBuilder Address Autocomplete egy PRO kiegészítő, amely új, **cím-autokomplett** mezőt ad a JetFormBuilder űrlapjaidhoz. Gépelés közben legfeljebb **5 releváns javaslatot** hoz fel a Google szolgáltatásából, és kiválasztáskor automatikusan kitölti a címmezőt. Így gyorsabban, pontosabban gyűjtesz címet, kevesebb elütéssel és érvénytelen bevitellel – különösen fontos regisztrációknál, álláspályázatoknál vagy checkout folyamatokban.

## Hogyan működik? (áttekintés)

- Amint a felhasználó gépelni kezd, a mező azonnal **valós idejű találatokat** listáz (max. 5).
- A kiválasztott találat alapján a mező a címadatot **szabványosított formában** tölti ki.
- A javaslatokat **országokra** és **helytípusokra** szűrheted (pl. csak városok, csak címek), így kontextushoz illeszkedő találatokat kap a felhasználó.
- A működéshez **Google Places/Maps API-kulcs** szükséges (engedd a számlázást is). A kulcsot a JetFormBuilder globális beállításainál adod meg.
- Teljesítmény és kompatibilitás érdekében globális kapcsolóval letilthatod a **Google Maps JS** betöltését, ha azt már más bővítmény vagy a téma tölti.
- A mező megjelenése **Gutenbergben és Elementorban** is testreszabható, és a fejlesztő általános témakompatibilitást kommunikál.

## Fő funkciók, érthetően

- **Address Autocomplete mezőtípus**: Húzd az űrlapba, add meg a címkét, slugot, leírást, és állítsd be az alapértéket. A komponens azonnal keres, amint a felhasználó gépel.
- **Valós idejű javaslatok (max. 5)**: Azonnali visszajelzés gyorsítja a kitöltést, csökkenti a félbehagyott űrlapok számát.
- **Ország-alapú szűrés**: Válassz ki egy vagy több országot. Ha például csak magyar címekre van szükséged, felesleges találatok nem zavarják a felhasználót.
- **Place types szűrés**: Korlátozd a keresést egy konkrét típusra (Geocode, Address, Establishment, Regions, Cities). Így például kérdőívnél csak városokat engedsz meg, checkoutnál pedig részletes címeket.
- **Testreszabott megjelenés**: A mező stílusát és elrendezését a vizuális szerkesztőidben alakítod, hogy illeszkedjen a designhoz.
- **Google API integráció + betöltés-szabályozás**: Külön beállítási fül az API-kulcshoz, és kapcsoló a Google Maps JS kikapcsolására a double-load és script-ütközések megelőzéséhez.
- **Ökoszisztéma-integráció**: Jól működik a **Save Form Progress** addonnal (mezőközbeni mentés), valamint a **Map Field** mezővel (autokomplett keresés + térképes megjelenítés).

## Gyakorlati példák

- **Regisztrációs űrlap**: A felhasználó beírja a címe első pár karakterét, a mező felkínálja a pontosított találatokat. Kiválasztás után egységes formátumú adat kerül mentésre.
- **Álláspályázati űrlap**: A “Place types: Address” beállítással postázható címeket gyűjtesz, ami csökkenti az utólagos egyeztetést.
- **Kérdőív/szavazás**: “Place types: Cities” és ország-szűrés – a kitöltő csak releváns településeket lát, elírások nélkül.
- **Checkout**: A felhasználó gyorsabban tölti ki a szállítási címet; a standardizált címek csökkentik a kézbesítési hibákat és növelik a konverziót.

## Előnyök és értékajánlat

- **Kevesebb hiba, kevesebb utánkövetés**: A szabványosított címek csökkentik a kézbesítési és adminisztratív problémákat.
- **Gyorsabb kitöltés**: Kevesebb gépelés, jobb felhasználói élmény, mérhető konverziónövekedés.
- **Célzott találatok**: Ország- és helytípus-szűréssel relevánsabb javaslatokat adsz.
- **Stabilitás és teljesítmény**: A Google Maps JS duplikált betöltésének elkerülése megelőzi az ütközéseket.
- **Zökkenőmentes integráció**: Egy ökoszisztémában maradsz (JetFormBuilder + PRO addonok).

## Kinek ajánlott?

- **Webshopoknak** és előfizetéses szolgáltatóknak: checkout és számlázási címek gyorsítására.
- **HR- és toborzási oldalaknak**: pontos, postázható címek gyűjtésére.
- **Önkormányzati/oktatási kérdőíveknek**: csak város vagy régió kiválasztására.
- **Ügynökségeknek**: skálázható, ügyfélbarát címbevitelre bármely WordPress témán.

## Előfeltételek

- **JetFormBuilder** (PRO előfizetés a kiegészítőhöz).
- **Google Places/Maps API-kulcs** és aktív számlázás.
- Gutenberg vagy Elementor környezet a kényelmes testreszabáshoz.

## Telepítés és beállítás (röviden)

1. Nyisd meg: JetFormBuilder > Addons, majd telepítsd és aktiváld az Address Autocomplete addont.
2. Menj a JetFormBuilder > Settings > Address Autocomplete API részhez, add meg a Google API-kulcsot. Ha más már tölti a Google Maps JS-t, kapcsold ki itt a betöltést.
3. Szerkeszd az űrlapot, add hozzá az **Address Autocomplete** mezőt.
4. Állítsd be a **Countries allowed** listát és a **Place types** értéket (egyszerre egy típus).

### Mezőbeállítások

- **Label, Field name (slug), Description, Default value**
- **Countries allowed**: több ország kijelölése a találatok korlátozására
- **Place types**: Geocode, Address, Establishment, Regions, Cities (egyszerre csak egy választható)

## Kompatibilitás és integráció

- **Gutenberg és Elementor** támogatás, bármely WordPress témával használható.
- **Map Field**-del együtt: autokomplett keresés után a kiválasztott hely térképen jeleníthető meg.
- **Save Form Progress**: csökkenti a félbehagyott űrlapok arányát.

## Megjegyzések és korlátok

- A javaslatok száma **legfeljebb 5**.
- A **Place types** szűrésnél egyszerre **egy típus** választható.
- **API-kulcs és számlázás** nélkül az autokomplett nem működik.

## Licenc és elérhetőség

A kiegészítő a **JetFormBuilder PRO** csomag része; az előfizetés éves díja a belépő szinttől indul, és több tucat PRO addont tartalmaz.

```text
Implementációs checklista
1) PRO előfizetés aktív, addon telepítve/aktiválva
2) Google API-kulcs létrehozva, számlázás engedélyezve
3) Kulcs megadva: JetFormBuilder > Settings > Address Autocomplete API
4) Google Maps JS betöltés: csak egyszer (kapcsoló ellenőrzése)
5) Mező hozzáadása az űrlaphoz
6) Countries allowed és Place types beállítva a use-case-hez
7) Teszt: releváns javaslatok, max. 5 találat, helyes kitöltés
8) (Opcionális) Map Field integráció és Save Form Progress aktiválás
```