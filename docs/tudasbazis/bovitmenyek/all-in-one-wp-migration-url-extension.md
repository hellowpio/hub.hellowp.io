---
title: "All-in-One WP Migration URL Extension"
description: "Fizetős kiegészítő az All‑in‑One WP Migration bővítményhez, amellyel közvetlen URL‑ről importálhatsz .wpress mentéseket szerveroldali letöltéssel és automatizálással."
sidebar_label: "All-in-One WP Migration URL Extension"
---

## Mi ez és milyen problémát old meg?

Az All‑in‑One WP Migration URL Extension egy prémium kiegészítő, amellyel az All‑in‑One WP Migration importálási folyamatában **közvetlen URL‑ről** tölthetsz be **.wpress** mentéseket. Ezzel elkerülöd a böngészős feltöltést, így nem ütközöl **PHP upload limitbe**, nem szenvedsz a kliensoldali **időtúllépésektől**, és nem kell kétszer mozgatni az adatot (helyi gépre, majd vissza a szerverre).

Röviden: a szervered tölti le a mentést a megadott URL‑ről, majd végrehajtja a **teljes importot**, ami a célsite tartalmát felülírja.

## Hogyan működik?

A kiegészítő telepítése után az All‑in‑One WP Migration → Import képernyőn megjelenik egy új forrás: **Import from → URL**. Itt megadod a mentés közvetlen elérési címét (akár időzített/presigned linket is), a szerver letölti a fájlt, majd az importáló motor a megszokott módon végigviszi a visszaállítást.

A kiegészítő **WP‑CLI integrációval** is rendelkezik, így a hozzá tartozó parancsokkal könnyebben felügyelheted és automatizálhatod a folyamatot (pl. szkriptek, ütemezések, CI/CD).

## Fő funkciók részletesen

- **Közvetlen URL‑alapú import**: a .wpress mentést nem a böngészőből töltöd fel, hanem az URL‑t megadva a szerver húzza le. Ez stabilabb nagy fájloknál, és független a helyi internetkapcsolatodtól.
- **Szerveroldali letöltés**: a letöltés a célkörnyezetben történik, így csökken a megszakadt feltöltések, proxy/NGINX/Apache timeoutok és kliensoldali limitációk kockázata.
- **WP‑CLI támogatás**: a kiegészítő parancssori integrációval érkezik, amivel a folyamatok **automatizálhatók** (pl. rendszeres ellenőrzések, integráció ütemezett feladatokkal).
- **Ökoszisztéma‑illeszkedés**: a funkció az All‑in‑One WP Migration megszokott importálójába illeszkedik. Ugyanúgy kapsz előnézetet/figyelmeztetést a **teljes felülírásról**, mint más importforrásoknál.

## Gyakorlati példák

- **Gyors távoli visszaállítás**: az ügynökség átadja a produkciós szervernek a mentés URL‑jét; a szerver közvetlenül letölti és visszaállítja a site‑ot. Nincs helyi letöltés‑feltöltés kör.
- **Nagy site migrálása**: több gigás .wpress fájl esetén a böngészős feltöltés gyakran megakad. URL‑es importtal a szerver stabilan lehúzza a csomagot, és fut a visszaállítás.
- **Staging → production “pull”**: stagingen készült snapshot elérhető ideiglenes URL‑en; a production rendszer ütemezetten “behúzza” a friss mentést WP‑CLI‑vel.
- **Incidens‑helyreállítás (DR)**: friss, távoli mentésből gyorsan visszaállíthatod a site‑ot egy tiszta WordPress példányra.

## Előnyök és értékajánlat

- **Időmegtakarítás**: nincs dupla adatmozgatás (A → helyi → B), a célkörnyezet egy lépésben tölti le.
- **Megbízhatóság**: kevesebb kliensoldali hiba, stabilabb nagy fájloknál.
- **Korlátok megkerülése**: csökken a böngészős és PHP feltöltési limit hatása.
- **Automatizálhatóság**: WP‑CLI‑vel beilleszthető ütemezett és CI/CD folyamatokba.
- **Egyszerű üzemeltetés**: a megszokott All‑in‑One WP Migration felületen működik, egyértelmű felülírási figyelmeztetéssel.

## Kinek ajánlott?

- **Ügynökségek és fejlesztők**: rendszeres staging/production szinkronok, projektátadások.
- **Rendszergazdák/DevOps**: automatizált, scriptelhető helyreállítások és migrációk.
- **Nagy site‑ok tulajdonosai**: nagy méretű mentések stabil importálása.
- **Hosting szolgáltatók**: gyors DR‑forgatókönyvek tiszta telepítésekre.

## Rendszerkövetelmények és telepítés

- Szükséges a **bázis All‑in‑One WP Migration** bővítmény.
- Az URL Extensiont külön zip fájlként telepítsd és **aktiváld** a Bővítmények menüben.
- Aktiválás után az Import felületen megjelenik az **URL** opció.

## Használat lépésről lépésre

1. Készíts friss mentést a célsite‑ról (az import teljes felülírást végez).
2. Nyisd meg: All‑in‑One WP Migration → **Import**.
3. Válaszd: **Import from → URL**.
4. Illeszd be a .wpress mentés közvetlen elérési címét (pl. időzített/presigned link).
5. Indítsd az importot, olvasd el és hagyd jóvá a **felülírás** figyelmeztetést.
6. A folyamat végén jelentkezz ki/be, vizsgáld át a site‑ot, cseréld a jelszavakat, ürítsd a gyorsítótárakat.

```
Ellenőrzőlista import előtt:
- A megadott URL közvetlenül letölthető és időben érvényes.
- Van elegendő szabad lemezterület (ajánlott a mentés méretének legalább 2x‑e).
- Célkörnyezet PHP/HTTP timeout értékei elegendően magasak nagy fájlokhoz.
- Célkörnyezet mentése elkészült és biztonságban van.
```

## Kompatibilitás és tippek

- Bizonyos bővítményeket ideiglenesen kapcsold ki import előtt: **CDN/cache**, **kényszerített SSL átirányítók**, **relatív URL‑kezelők**. Ezek néha zavarhatják a folyamatot.
- Ha extrém nagy fájlokkal dolgozol, a feltöltési korlátok rendszer‑szintű oldásához szükség lehet magasabb csomagra a ServMask kínálatából.
- Nagyobb importnál ellenőrizd a szerver erőforrásokat (CPU, RAM, I/O), és futtasd a műveletet alacsony terhelésű időablakban.
- Használj **ideiglenes, engedélyezett URL‑eket** (pl. aláírt linkek), és korlátozd a hozzáférést IP‑re vagy időre.
- DR esetén mindig egy **tiszta WordPress** telepítésre importálj, majd azonnal frissítsd a hitelesítő adatokat.

## Licenc és csomagok

Az URL Extension egy **fizetős kiegészítő**. A ServMask prémium kínálatában önállóan is elérhető, és bizonyos csomagok részeként is megtalálható a közvetlen URL import funkció. A pontos csomag‑összetétel idővel változhat; vásárlás előtt ellenőrizd, melyik megoldás felel meg a felhasználási esetednek.

## Összegzés

Az All‑in‑One WP Migration URL Extension akkor ad valódi előnyt, ha a mentésed távoli helyen van, nagy fájlmérettel dolgozol, vagy **automatizálni** szeretnéd a visszaállításokat. A telepítés egyszerű, a használat a megszokott importfolyamatba illeszkedik, és a szerveroldali letöltésnek köszönhetően stabilabb, gyorsabb és megbízhatóbb, mint a hagyományos böngészős feltöltés. Ha rendszeresen migrálsz vagy DR‑forgatókönyveket kezelsz, ez a kiegészítő kifejezetten neked való.