---
title: "MainWP Virusdie Extension"
description: "Hivatalos MainWP-kiegészítő a Virusdie felhőalapú webhelybiztonság integrálásához: automatikus szkennelés, értesítések és riportok egy helyen."
sidebar_label: "MainWP Virusdie Extension"
---

## Mi ez és milyen problémát old meg?

A MainWP Virusdie Extension egy hivatalos integráció, amellyel a Virusdie felhőalapú biztonsági szolgáltatásának adatait és műveleteit a saját MainWP irányítópultodból éred el. Több webhelyet kezelsz? Nem kell külön bejelentkezni, szinkronfájlt kézzel feltölteni vagy mindenhol külön szkennelni: központilag, egy felületen látsz mindent, és automatizálhatod a vizsgálatokat.

Fejlesztője a MainWP, a biztonsági szolgáltatást a Virusdie üzemelteti.

## Fő funkciók és működés

### Fiók és API-kulcsok

- Közvetlenül a MainWP-ből létrehozhatsz ingyenes Virusdie-fiókot vagy beléphetsz meglévőbe.  
- A sikeres bejelentkezés után az API-kulcsok automatikusan betöltődnek, nincs manuális másolás.

Mit nyersz vele? Nem kell külön portálokkal bajlódnod; a MainWP mindent előkészít a kommunikációhoz.

### Webhely-hozzáadás és szinkronfájl

- Az integráció automatikusan felveszi a gyerekoldalaidat a Virusdie felületére.  
- Az egyedi szinkronfájlt (a Virusdie működésének kulcsa) a bővítmény tölti fel – FTP nélkül.

Mit nyersz vele? Megszűnik a kézi FTP-zés és a hibalehetőség, gyorsabban állsz üzembe tömegesen is.

### Szkennelés és automatizálás

- Ingyenes csomaggal: heti automatikus vizsgálat és email-értesítés riasztás esetén.  
- Fizetős Virusdie csomaggal igény szerint indíthatsz kézi vagy gyakoribb szkennelést, akár UI-ból, WP-CLI-ből vagy a MainWP REST végpontjáról.

Mit nyersz vele? Alapszinten is folyamatos lefedettség, frissítés esetén pedig teljes automatizálhatóság és sűrűbb ellenőrzés.

### Eredmények és riportok

- A találatokat és állapotokat a MainWP Dashboard mutatja, így egy helyen látod a teljes flottát.  
- A Virusdie adatai beépíthetők a MainWP riportjaiba, így ügyfélbarát, átlátható jelentéseket készíthetsz.

Mit nyersz vele? Kevesebb kontextusváltás, egységes jelentések, jobb ügyfélkommunikáció.

### Eltávolítás és karbantartás

- Webhelyeket a MainWP-ből vehetsz fel vagy távolíthatsz el a Virusdie rendszeréből.  
- Eltávolításkor szükség esetén töröld kézzel a szinkronfájlt a webhely gyökeréből.

## Gyakorlati példák

- Ügynökségi portfólió: 40 ügyféloldal heti automatikus szkennelése, riasztások emailben és a Dashboardon. Az account manager havonta riportot generál a biztonsági állapotról – percek alatt.  
- DevOps folyamat: éjszakai ütemezésből WP-CLI-vel indítasz vizsgálatot a frissítés előtt és után; eltérés esetén ticket nyílik a csapatnak.  
- Tűzoltás: gyanús aktivitásnál egy kattintással on‑demand szkennelést indítasz (prémium csomag szükséges), és azonnal látod, hol a probléma.

## Előnyök és értékajánlat

- Időmegtakarítás: nincs külön bejelentkezés vagy FTP-zés, a szinkron és a heti szken időzítve történik.  
- Skálázhatóság: korlátlan számú oldal kezelhető már az ingyenes csomaggal is.  
- Kevesebb hiba: a szinkronfájl-feltöltés automatizált, így ritkábbak a beállítási bakik.  
- Rugalmas automatizálás: CLI/REST integrációval beillesztheted saját ütemezéseidbe és eszközláncaidba.  
- Átlátható riportok: a biztonsági állapot ügyfélfelé is bizonyítható, számszerűsíthető.

## Kinek ajánlott?

- WordPress ügynökségeknek és MSP-knek, akik tucatnyi vagy száz webhelyet üzemeltetnek.  
- Szabadúszóknak, akik egységes, automatizált biztonsági láthatóságot szeretnének.  
- DevOps/IT csapatoknak, akik scriptelhető, REST/CLI-alapú folyamatokban gondolkodnak.  
- Olyan csapatoknak, akiknek fontos a riportolás és az ügyfélkommunikáció.

## Gyors telepítés és első lépések

1. Telepítsd és aktiváld a MainWP irányítópultodon a Virusdie Extensiont.  
2. Indítsd a Sign‑Up/Sign‑In folyamatot; a rendszer automatikusan betölti az API-kulcsokat.  
3. Add hozzá a gyerekoldalakat; a szinkronfájl automatikusan feltöltődik.  
4. Várd a heti automatikus szkennelések eredményeit; állapot és riasztások a Dashboardon és emailben.  
5. Ha on‑demand szkennelést, automatikus tisztítást, WAF-ot vagy patch‑menedzsmentet szeretnél, frissíts a Virusdie megfelelő csomagjára (oldalszinten).

## Parancsok és API

WP‑CLI példa (prémium csomaggal indítható on‑demand szkennelés):
```
wp mainwp-virusdie scan <site_id>
```

MainWP REST végpont példa:
```
POST /virusdie/scan
Body: { "site_id": 123 }
```

## Fontos megjegyzések és korlátok

- Fiókkompatibilitás: bizonyos régebbi, a MainWP-n kívül létrehozott prémium Virusdie-fiókok API-korlátozás miatt nem csatlakoztathatók. A zökkenőmentes integrációhoz érdemes új fiókot létrehozni közvetlenül a bővítményen belül.  
- Ingyenes vs. prémium: az ingyenes integráció fókusza a rendszeres (heti) szkennelés és értesítés. On‑demand/gyakoribb vizsgálat, automatikus tisztítás, WAF és patch‑menedzsment a Virusdie prémium szolgáltatásai, amelyeket oldalszinten aktiválhatsz.  
- Hibaelhárítás – szinkronfájl: ha „Unique sync file could not be uploaded” üzenetet kapsz, jelentkezz ki a bővítményből, ugyanazzal az emaillel futtasd újra a Sign‑Up folyamatot az egyszeri jelszavas belépéssel, majd próbáld meg ismét a csatlakoztatást.  
- Ökoszisztéma: ez egy MainWP-kiegészítő, nem a nyilvános WordPress‑tárban elérhető külön plugin. A Virusdie önálló WordPress‑bővítménye más célú kliensmodul; a MainWP‑integrációt ez az Extension biztosítja.

## Összegzés

Ha több WordPress webhely biztonságát kell átlátnod és menedzselned, a MainWP Virusdie Extension központi, automatizált és skálázható megoldást ad. Egy felületen állítod be a szinkront, kapod a heti szkenneléseket, indíthatsz igény szerinti vizsgálatokat, és készíthetsz professzionális riportokat – időt spórolva és csökkentve a kockázatot.