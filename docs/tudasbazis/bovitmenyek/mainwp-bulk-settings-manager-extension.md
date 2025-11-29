---
title: "MainWP Bulk Settings Manager Extension"
description: "MainWP kiegészítő, amellyel a WordPress Core, bővítmények és témák beállításait tömegesen, központilag oszthatod ki több különálló webhelyre."
sidebar_label: "MainWP Bulk Settings Manager Extension"
---

## Mi ez és milyen problémát old meg?

A MainWP Bulk Settings Manager egy bővítmény a MainWP Dashboardhoz, amellyel ugyanazokat a beállításokat pillanatok alatt átviheted több, különálló (nem multisite) WordPress webhelyre. Megszünteti a „minden oldalon külön kattintgatok” rutint, csökkenti a hibalehetőséget, és egységes, skálázható konfigurációkezelést ad ügynökségeknek és webhelyportfóliót kezelő csapatoknak.

## Hogyan működik?

- **Key Maker + Kulcsok (Keys):** A Child oldalon futó, ingyenes Key Maker rögzíti egy beállító űrlap elküldése után a beküldött mezőket és értékeiket (post-submission request). Ebből készül a „kulcs”.
- **Import és szerkesztés:** A kulcsot a MainWP Dashboardon importálod a Bulk Settings Managerbe, ahol ellenőrizheted, szerkesztheted, majd kioszthatod kiválasztott Child oldalakra.
- **Key Ring:** Több kulcsot össze is fűzhetsz egy „kulcsgyűrűvé”, így egy kattintással több beállító oldal teljes konfigurációját küldheted ki konzisztensen.
- **Boilerplate tokenek:** Kulcsmezőkben használhatsz helyettesítőket (pl. domain, cégadatok), így site-onként egyedi értékek kerülnek be mentéskor.

## Fő funkciók részletesen

- **Tömeges beállításkiosztás (Core, bővítmények, témák):** Bármely „klasszikus” WordPress űrlapot használó beállító oldal kezelhető. A kulcs a beküldött mezőket és értékeket viszi át más oldalakra – például SEO plugin alapbeállítások, cache szabályok, űrlapok, témaopciók.
- **Kulcsok készítése és importja:** Készíts kulcsot egy mintaoldalon a Key Makerrel, majd importáld a Dashboardra. Az importnál mezőlistát látsz, szükség esetén pontosíthatsz, törölhetsz vagy módosíthatsz értékeket.
- **Key Ring (kulcsgyűrű):** Ha egy plugin több fülén is van konfiguráció, vagy több bővítmény/téma beállítását kell egyszerre átküldeni, fogd össze őket egy Key Ringbe a konzisztens mentéshez.
- **Boilerplate integráció:** Engedélyezd a tokeneket, és a kulcsok mentésekor a helyettesítők automatikusan kitöltődnek site-specifikus értékekkel (pl. domain URL, cégnév).
- **Folyamatvezérlés és teljesítmény:** Állíts be **késleltetést** két Child oldal között a szerverterhelés csökkentésére. A mentések **előzményeit** bármikor törölheted.
- **Előnézet és ellenőrzés:** Mentés előtt áttekintheted, mely mezők milyen értéket kapnak, így minimalizálod a hibákat.

## Gyakorlati példák

- **Admin e‑mail csere sok oldalon:** Importálod a „Általános beállítások” kulcsot, a domain mezőket tokenre cseréled, megadod az új admin e‑mailt, majd kiosztod az összes kijelölt oldalra.

```json
{
  "option_page": "general",
  "fields": {
    "new_admin_email": "support@ceg.hu",
    "home": "[url.site]",
    "siteurl": "[url.site]"
  }
}
```

- **SEO plugin egységesítés:** A mintaoldalon beállítod az indexelési, sitemap és meta opciókat, kulcsot készítesz, majd Key Ringben összevonod más kapcsolódó beállításokkal (pl. tartalmi sablonok tokenekkel), és kiosztod az ügyfélportfólióra.
- **Onboarding új webhelyekhez:** Egy etalon site beállításait (biztonság, cache, űrlapok, téma) kulcsokba mented, Key Ringet készítesz, és néhány kattintással beüzemeled az új oldalakat.
- **Gyors reagálás auditokra:** Adatvédelmi vagy biztonsági ajánlások miatti módosításokat egy körben átviszed minden érintett oldalra.

## Előnyök és értékajánlat

- **Időmegtakarítás:** Több tucat mezőt több tucat oldalon frissíthetsz percek alatt.
- **Konzisztencia:** Ugyanaz a konfiguráció mindenhol, kevesebb emberi hiba.
- **Skálázhatóság:** Ügynökségi volumenben is stabil, auditálható folyamat.
- **Rugalmasság:** Tokenekkel site‑specifikus adatok is automatizálhatók.
- **Gyors onboarding és migráció:** Etalon beállítások klónozása új vagy áthelyezett webhelyekre.

## Célközönség

- **Digitális ügynökségek** és **freelancerek**, akik több ügyféloldalt kezelnek.
- **In-house csapatok**, akik vállalati portfóliót üzemeltetnek.
- **Rendszergazdák/DevOps**, akik központi, ismételhető konfigurációkezelést igényelnek.

## Kompatibilitás és korlátozások

- **Támogatott felület:** Olyan beállító oldalak, amelyek standard WordPress űrlapként működnek (a Key Maker a POST-olt mezőket rögzíti).
- **Korlátok:** Kezdeti varázslók, külső oldalra vivő összekapcsolási lépések (pl. elsődleges felhőkapcsolat) nem rögzíthetők kulccsal; az ilyen beállításokat csak a kezdeti lépés után tudod kezelni.
- **Visszavonás:** Nincs automatikus „Undo”. Felülírással vagy manuális visszaállítással lehet korrigálni, ezért különösen fontos a mentés előtti ellenőrzés.
- **Nonce/mező-problémák:** Előfordulhat „invalid nonce” vagy nem észlelt mező. Tipp: csak a releváns űrlaprészről készíts kulcsot, és mindig post‑submission rögzítést használj.

## Rövid munkafolyamat

1. Telepítsd a Key Makert egy minta Child oldalon.
2. Állítsd be a kívánt bővítményt/témát, küldd el az űrlapot, másold a post‑submission kulcsot.
3. Importáld a kulcsot a Dashboardon, ellenőrizd és szükség esetén szerkeszd.
4. Válaszd ki a céloldalakat, állíts be késleltetést (ha kell), majd mentsd.
5. Több kulcs esetén hozz létre Key Ringet, és egyben küldd ki.
6. Igény szerint töröld az előzményeket.

## Best practice tippek

- Mindig **post‑submission** kulcsot használj a pontos mezőmentéshez.
- **Boilerplate tokenekkel** tedd automatává a site‑specifikus értékeket.
- Állíts össze **Key Ringet**, ha több beállító oldalt kell szinkronban tartani.
- Először futtasd le **tesztkörnyezetben** és egy **kisebb site‑csomagon**, csak utána menjen élesben nagy volumenre.
- Használj **késleltetést**, ha sok oldalt frissítesz egyszerre, hogy kíméld a szervereket.