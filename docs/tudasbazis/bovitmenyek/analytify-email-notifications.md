---
title: "Analytify Email Notifications"
description: "Analytify Pro kiegészítő, amely ütemezett, testreszabható GA4 e-mail jelentéseket és valós idejű riasztásokat küld több címzettnek."
sidebar_label: "Analytify Email Notifications"
---

## Mi ez és milyen problémát old meg?

Az **Analytify Email Notifications** az Analytify Pro prémium WordPress-analitika ökoszisztéma fizetős kiegészítője. Segítségével a legfontosabb **GA4 mutatókat** automatikus, jól olvasható **e-mail jelentésekben** kapod meg – te és a csapatod is – anélkül, hogy be kellene lépnetek a WordPress vagy a GA4 felületére. Kiváltja a manuális riportgyártást, egységesíti a kommunikációt, és **valós idejű riasztásokkal** segít gyorsan reagálni a teljesítmény-ingadozásokra.

Előfeltételek: **Analytify Pro**, összekapcsolt **Google Analytics 4 (GA4) property**, valamint a kiegészítő licenc aktiválása.

## Fő funkciók, érthetően elmagyarázva

### Ütemezett e-mail jelentések
- Állítsd be, hogy a jelentések **naponta, hetente, havonta vagy egyedi gyakorisággal** menjenek ki.
- A rendszer az általad választott időközönként automatikusan **összeállítja és elküldi** a GA4 adatokat tartalmazó összefoglalót.

### Testreszabható metrikák és blokkok
- Te döntöd el, mi kerüljön a riportba: **forgalom, konverziók, visszafordulási arány, Top Pages, földrajzi bontás, rendszer- és közösségi források, kulcsszavak** stb.
- A riport e-mail-barát **HTML formában** érkezik, grafikonokkal és táblákkal, hogy a nem technikai érintettek is könnyen értelmezzék.

### Valós idejű riasztások
- Beállíthatod, hogy a rendszer **azonnal e-mailt** küldjön, ha egy kulcs-mutató (pl. hirtelen forgalomcsökkenés) kilóg a kívánt sávból.
- Így hamar észreveszed a problémát (kampányhiba, mérési gond, technikai hiba), és gyorsan be tudsz avatkozni.

### Több címzett egyszerre
- **Több e-mail címzettet** is megadhatsz, így minden releváns kolléga/ügyfél ugyanazt a konszolidált jelentést kapja.
- Ideális ügynökségi vagy többcsapatos vállalati környezetben.

### Jelentésformátumok
- Alapértelmezésben **HTML**, emellett választhatsz **PDF** vagy **CSV** formátumot is a megosztás céljához igazítva.

### Márkázás és megjelenés
- Személyre szabható **From Name** (feladó név), elrejthető a “**Go to Dashboard**” gomb, és adhatsz **személyes megjegyzést** a riport végéhez (pl. kommentár, teendők).

## Beállítás és működés röviden

### Telepítés
1. Győződj meg róla, hogy az **Analytify Pro** aktív és a webhelyed kapcsolódik a **GA4 propertyhez**.
2. Töltsd fel és aktiváld az Email Notifications kiegészítőt a WordPress-ben (Plugins > Add New > Upload).
3. Aktiváld a **licenckulcsot**.
4. Lépj az **Analytify > Settings > Email** fülre.

### Konfiguráció
- Add meg a **feladó nevét** és a **címzetteket**.
- Válaszd ki az **ütemezést** (napi/heti/havi/egyedi).
- Jelöld ki a **riportban szereplő metrikákat** és blokkokat.
- Válaszd ki a **jelentésformátumot** (HTML/PDF/CSV).
- Finomhangolás: **Go to Dashboard gomb elrejtése**, **Personal Note** hozzáadása.
- Mentsd a beállításokat; a riportok a megadott ütemben érkeznek.

### Jelentések használata
- Az e-mailben kapott **HTML riport** azonnal olvasható a legtöbb kliensben. Ha bekapcsoltad, a “Go to Dashboard” gombbal mélyebbre ugorhatsz az Analytify felületén.

```text
Mintabeállítási checklist
- Előfeltételek: Analytify Pro + GA4 property, licenc aktiválva
- Címzettek: marketing@..., vezeto@..., ugyfel@...
- Ütemezés: heti, hétfő 09:00
- Metrikák: forgalom, konverziók, Top Pages, földrajzi bontás
- Formátum: HTML
- Márkázás: From Name = “Acme Analytics”, Go to Dashboard gomb elrejtve
- Personal Note: “Fókusz a blog organikus forgalmára, lásd javaslatok a végén.”
```

## Gyakorlati példák

- Ügynökségi riportautomatizálás: Állíts be **heti HTML jelentést** minden ügyfélhez tartozó stakeholder-listának. A végén **személyes megjegyzésben** összegzed a teendőket (pl. “A konverziók 12%-kal nőttek, folytassuk az A/B tesztet”).
- Vezetői összefoglaló: **Havi kivonat** a C-level számára, csak a **Top Pages, forgalom, konverziók** blokkokkal. Rejtsd el a “Go to Dashboard” gombot, hogy a fókusz az e-mailben maradjon.
- Anomáliafigyelés: Állíts be **azonnali riasztást** jelentős forgalomesés esetére. Ha gond van (pl. leállt egy kampány), az e-mail alapján azonnal riaszthatod a felelős csapatot.

## Előnyök és értékajánlat

- **Időmegtakarítás**: leváltja a kézi riport-összeállítást és -küldést.
- **Következetes kommunikáció**: minden érintett ugyanazt a minőségi, márkázott riportot kapja.
- **Gyors reakció**: a valós idejű e-mail riasztások lerövidítik a hibaészlelés idejét.
- **Közérthető adatszolgáltatás**: a vizuális HTML-riportok a nem technikai érintetteknek is egyértelműek.
- **Rugalmasság**: metrikák, ütemezés, formátum és megjelenés testreszabható.

## Kinek ajánlott?

- **Digitális ügynökségeknek**: skálázható ügyfélriportálás több címzettel, minimális kézi munkával.
- **Vállalati marketing- és vezetői csapatoknak**: rendszeres GA4 összefoglalók belépés nélkül.
- **E-kereskedelmi oldalaknak**: konverzió- és forgalomfigyelés, azonnali riasztásokkal.
- **Többoldalas vagy több piacos szervezeteknek**: egységes riportok minden érintettnek.

## Kompatibilitás és ökoszisztéma

- Csak az **Analytify Pro** környezetében működik, GA4-kapcsolattal.
- Az Analytify termékcsalád része (Core + Pro + kiegészítők, pl. Campaigns, Goals, WooCommerce/EDD), így **egységes analitikai ökoszisztémába** illeszkedik.

## Fejlesztői háttér

Az Analytify ökoszisztémát az Analytify/WPBrigade csapata gondozza; a fő bővítmény fejlesztőjeként a WordPress.org Adnant tünteti fel. A kiegészítő a Pro-val együtt biztosít teljes körű, e-mail alapú riportautomatizálást és riasztást.