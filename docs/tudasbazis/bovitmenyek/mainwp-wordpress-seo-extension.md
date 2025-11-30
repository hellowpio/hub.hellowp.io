---
title: "MainWP WordPress SEO Extension"
description: "A MainWP Yoast SEO Extension központi irányítást ad a Yoast SEO-beállításokhoz és SEO-metákhoz több WordPress-oldalon, közvetlenül a MainWP irányítópultról."
sidebar_label: "MainWP WordPress SEO Extension"
---

## Mi ez és milyen problémát old meg?

A MainWP WordPress SEO Extension (mai nevén: **MainWP Yoast SEO Extension**) egy MainWP kiterjesztés, amellyel a **Yoast SEO** beállításait **központilag, tömegesen** kezelheted az összes, MainWP-hez csatlakoztatott WordPress „Child” webhelyeden. Arra való, hogy ne kelljen site-ról site-ra belépned ugyanazokat a SEO-beállításokat kattintgatni, és hogy a tartalomközzétételhez szükséges **SEO-metákat** (cím, leírás, noindex, canonical stb.) **egy helyről** add meg és küldd ki.

Röviden: egységesíti és felgyorsítja a **Yoast SEO**-val végzett munkát sok webhelyen, miközben átlátható kontrollt ad a teljes portfóliód fölött.

## Hogyan működik?

- A kiterjesztést csak a **MainWP Dashboard**-ra telepíted.
- A **Yoast SEO** plugint a Dashboardon és minden érintett **Child** site-on aktiválnod kell – ez a működés előfeltétele.
- A MainWP irányítópulton megjelenik egy **Yoast SEO** menü, ahol:
  - áttekinted, mely site-okon aktív a Yoast,
  - sablonként importált beállításokat **terítesz** több site-ra,
  - új bejegyzések/oldalak publikálásakor a **Yoast metabox** is elérhető, így a SEO beállítások a tartalommal együtt kerülnek ki.
- Integrálódik a **MainWP Boilerplate**-tel, így sablon tartalmakat és azok SEO-metáit egyszerre viheted ki, helykitöltő tokenekkel személyre szabva.

## Fő funkciók, érthetően

### Központi Yoast SEO panel
Egy nézetben látod, hol fut a Yoast, hol hiányzik, és hol van elintéznivaló. Innen gyorsan átnavigálhatsz a konkrét site admin felületére vagy a helyi Yoast beállításokhoz. Ez megszünteti a „vakon keresgélés” és a tab-dzsungel problémáját.

### Beállítássablonok importálása és terítése
A Yoast saját Import/Export eszközével kinyert konfigurációt feltöltöd a MainWP-be, elmented sablonként, majd kiválasztod a cél site-okat és egy kattintással alkalmazod. Így az olyan kritikus elemek, mint a **címképzés**, **meta- és indexelési szabályok**, automatikusan egységesen mennek ki.

### SEO metabox a központi publikálásban
Új bejegyzést vagy oldalt hozol létre a MainWP-ben? Ugyanott megkapod a **Yoast metaboxot**: megadhatod a SEO címet, meta leírást, canonical URL-t, noindex/no-follow beállításokat, sőt a haladó opciókat is. Amikor publikálsz, a tartalom és a SEO-meta **együtt** kerül ki a kiválasztott site-okra – nincs több „elfelejtett meta”.

### Integráció a MainWP Boilerplate-tel
Használj tokeneket (pl. `{SITE_NAME}`, `{CITY}`) sablon tartalmakban, és rendelj hozzájuk Yoast beállításokat is. Így egyszerre kapsz **következetes**, mégis **személyre szabott** megjelenést sok site-on, egyetlen folyamatban.

### Állapot- és frissítésfigyelés
A panel jelzi, ha a Yoast inaktív valamelyik site-on, vagy teendő van. Ezzel időben észreveszed a „kilógó” konfigurációkat, csökkented a hibákat és az SEO-inkonzisztenciát.

## Gyakorlati példák

- Ügynökségi alapbeállítás: Egy „mintasite”-on finomhangolod a címképzést és indexelési szabályokat, exportálsz, majd sablonként ráteríted 30+ ügyféloldalra. Pár perc munka, napok helyett.
- Új site onboarding: Frissen csatlakoztatott oldalra azonnal „ráöntöd” a Yoast sablont, és a kötelező oldalakat (Impresszum, Adatkezelés) a szükséges noindex/canonical beállításokkal publikálod.
- Kampánykezelés: Akcióidőszakban több site-on azonos canonical szabályokat állítasz be kampányoldalakra, központilag, tévesztés nélkül.
- Archívumok rendbetétele: A címkézett archívumokat noindexre állítod hálózatszinten, egyetlen terítéssel.

## Telepítés és első lépések

1. Telepítsd és aktiváld a kiterjesztést a MainWP Dashboardon.
2. Győződj meg róla, hogy a Yoast SEO a Dashboardon és minden Child site-on aktív.
3. A Yoastból exportált konfigurációt töltsd fel sablonként a MainWP-ben.
4. Válaszd ki a cél site-okat, és alkalmazd a sablont.
5. Hozz létre új bejegyzést/oldalt a MainWP-ben, töltsd ki a Yoast metaboxot, majd publikálj.

```txt
Ellenőrzőlista
- [ ] MainWP Dashboard elérhető és működik
- [ ] Yoast SEO aktív a Dashboardon
- [ ] Yoast SEO aktív minden Child site-on
- [ ] Exportált Yoast konfiguráció kéznél
- [ ] Teszt site-on próba-terítés és ellenőrzés
```

## Előnyök és értékajánlat

- **Időmegtakarítás**: Több órányi ismétlődő kattintás helyett percekben terítesz beállításokat.
- **Következetesség**: Egységes cím- és indexelési szabályok mindenhol, kevesebb SEO-hiba.
- **Gyors publikálás**: A SEO-meták nem maradnak le; a tartalom és beállítás együtt megy ki.
- **Skálázhatóság**: Tucatnyi vagy száz site kezelése is áttekinthető marad.
- **Minőségbiztosítás**: Központi láthatóság az inaktív/hibás állapotokra, gyors beavatkozás.

## Kinek ajánlott?

- **Digitális ügynökségeknek**: Sok ügyféloldal egységes SEO-jához.
- **Fejlesztői és webmester csapatoknak**: Gyors onboarding és frissítésmenedzsment.
- **Franchise- és multi-brand hálózatoknak**: Sablon alapú, mégis személyre szabott tartalom és meta.
- **Vállalati SEO-csapatoknak**: Irányítás, megfelelőség és hibacsökkentés központilag.

## Biztonság és karbantartás

Korábbi kiadásokban azonosított jogosultságkezelési hiba már javításra került. Javasolt mindig a **legfrissebb** kiadást használni, a MainWP-t és a Yoast SEO-t rendszeresen frissíteni. Tartsd meg a **legkisebb szükséges jogosultság** elvét a MainWP-hez, és nagyobb terítés előtt végezz **tesztet** egy kiválasztott site-on. Tömeges módosítás előtt készíts **biztonsági mentést**.

---

Megjegyzés a névről: a bővítmény történeti okokból „WordPress SEO” néven is ismert, a jelenlegi hivatalos megnevezés **MainWP Yoast SEO Extension**. Elérhető a MainWP Pro csomag részeként.