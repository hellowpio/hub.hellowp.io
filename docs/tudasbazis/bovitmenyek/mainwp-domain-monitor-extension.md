---
title: "MainWP Domain Monitor Extension"
description: "MainWP Pro kiegészítő központi domain‑figyeléshez: lejáratkövetés, e‑mail riasztások, ütemezett ellenőrzések, WP‑CLI/REST és riport‑integráció."
sidebar_label: "MainWP Domain Monitor Extension"
---

## Mi ez és milyen problémát old meg?

A MainWP Domain Monitor Extension egy **MainWP Pro** bővítmény, amellyel a MainWP Dashboardból egy helyen figyelheted az összes csatlakoztatott WordPress‑oldaladhoz tartozó **domain** lejáratát és alapadatait. Megoldja a szétszórt WHOIS/RDAP lekérdezések és a kései megújítások problémáját: a bővítmény **ütemezetten ellenőriz**, **e‑mail értesítést** küld a közelgő lejáratokról, és egyetlen táblázatban ad teljes képet a legfontosabb domain‑adatokról. Így proaktívan tudsz lépni, elkerülve a leállásokat, SEO és márka reputációs károkat.

## Hogyan működik?

A kiegészítő a **MainWP Dashboardban** fut, és a csatlakoztatott webhelyekhez tartozó domainneveket ellenőrzi. A lekérdezések **RDAP/WHOIS** forrásokra támaszkodnak. Az automatikus ellenőrzéseket **WP‑cron** ütemezi (napi/heti/havi), a határidők közeledtekor pedig e‑mail figyelmeztetést kapsz. Az áttekintő táblázatban láthatod a **regisztrátort**, a **WHOIS/RDAP szervert**, a **kapcsolati adatokat**, a **névszervereket**, a **státuszt** és a **lejárati dátumot**, jelölve azt is, ha bármelyik adat **manuálisan** került rögzítésre (például nem támogatott TLD esetén).

## Fő funkciók, érthetően

- **Lejáratfigyelés és riasztás**: Ütemezett ellenőrzések napi/heti/havi gyakorisággal. Testreszabható **e‑mail értesítések**, amikor egy domain a lejárathoz közelít, hogy időben megújíthasd.
- **Egységes domain‑adatkép**: Egy táblázatban látod a kulcsadatokat: **regisztrátor**, **WHOIS/RDAP kiszolgáló**, **kapcsolati adatok**, **névszerverek**, **státusz**, **lejárat**. Nem kell külön eszközök között ugrálnod.
- **Tömeges vizsgálat és áttekintők**: A Dashboardban minden domain egyszerre elemezhető. A **Global Overview** és **Site Overview** widgetek gyors rálátást adnak a teljes portfóliódra és az egyes oldalakra.
- **Riportolás tokenekkel**: Előre definiált **report tokenekkel** automatikusan beemelheted a domain‑adatokat az ügyféljelentésekbe (pl. domain név, lejárat, napok lejáratig, státusz).
- **Automatizálás**: Használhatod **WP‑CLI** parancsokkal és a **MainWP REST API**‑val, így más rendszerekből is futtathatsz ellenőrzéseket és lekérdezéseket.
- **Kézi adatbevitel**: Ha egy TLD RDAP/WHOIS válasza hiányos vagy nem támogatott, a bővítményben **kézzel rögzítheted/korigálhatod** a domain‑adatokat; a felület jelzi, mi manuális és mi automatikus.
- **Stabil ütemezés**: A háttérben futó ellenőrzések megfelelően ütemeződnek és leütemeződnek, például deaktiváláskor is rendben kezelve a cron feladatokat.

## Gyakorlati példák

- Ügynökségi portfólió: Van 120 ügyfélwebhelyed, különböző regisztrátoroknál. A Domain Monitorban egy táblázatban látod, melyik domain **30 napon belül** jár le, és automatikus e‑mailt kapsz a kritikus tételekről.
- SLA riport: Negyedéves beszámolóban az ügyfél felé automatikusan megjeleníted a domain **lejárati dátumát** és a **napok számát lejáratig**, így átlátható a kockázati szint és a várható teendő.
- Korlátozott TLD: Egy országkódos TLD nem ad vissza teljes adatot RDAP‑on. Kézzel beírod a lejárati dátumot és a regisztrátort; a táblázat megjelöli, hogy ezek **manuális** adatok, mégis biztosítva a figyelmeztetéseket.

## Automatizálás: WP‑CLI, REST és riport tokenek

### WP‑CLI példák
```bash
# Egy konkrét oldal domainjének ellenőrzése (példa site ID: 129)
wp mainwp-domain-monitor check 129

# Minden csatlakoztatott oldal domainjének ellenőrzése
wp mainwp-domain-monitor check --all
```

### REST API
- A MainWP REST API‑n keresztül lekérheted a domain állapotokat, indíthatsz ellenőrzést és integrálhatod a folyamatot külső rendszerekbe (monitoring, CRM, helpdesk).

### Riport tokenek (példa)
A riportokban választható tokenekkel automatikusan beillesztheted az adatokat, például:
```
Domain: {{domain_name}}
Regisztrátor: {{domain_registrar}}
Létrehozva: {{domain_created}}
Utoljára frissítve: {{domain_updated}}
Lejár: {{domain_expires}}
Napok lejáratig: {{domain_days_to_expiry}}
Státusz: {{domain_status}}
Utolsó ellenőrzés: {{domain_last_check}}
```
A konkrét tokenkészletet a riportkészítő felületen tudod kiválasztani.

## TLD‑támogatás és ismert korlátok

- Az adatok **RDAP/WHOIS** forrásokból érkeznek. Bizonyos TLD‑knél (különösen egyes országkódos zónákban) a válasz **hiányos vagy üres** lehet a nyilvántartó korlátozásai miatt.
- A bővítmény fenntart egy **támogatott TLD‑listát**, amely folyamatosan bővül. Nem támogatott vagy hiányos TLD esetén használd a **kézi adatbevitelt**.
- Fontos: a kiegészítő **nem végez megújítást** és nem indít regisztrátori műveleteket; a megújítást mindig a saját regisztrátorodnál intézd.

## Előnyök és értékajánlat

- **Kiesések megelőzése**: időben érkező riasztások a lejáratokról.
- **Időmegtakarítás**: nincs több egyenkénti WHOIS/RDAP keresgélés; minden adat egyetlen nézetben.
- **Skálázhatóság**: tömeges ellenőrzések, ütemezés, CLI és API integráció ügynökségi volumenre.
- **Professzionális riportok**: a domain‑adatok automatikusan bekerülnek az ügyféljelentésekbe.

## Kinek ajánlott?

- **Digitális ügynökségeknek**: sok ügyfél és domain egy kézben, SLA‑k és riportolási kötelezettség.
- **Szabadúszó fejlesztőknek**: egyszerű, központi áttekintés és riasztások a saját/ügyfél domainjeidhez.
- **Webhely‑üzemeltetőknek/IT csapatoknak**: automatizálható ellenőrzések, integrálhatóság meglévő monitorozási folyamataidba.

## Bevált gyakorlatok

- Állíts be **napi** ellenőrzést és **többszintű riasztást** (pl. 60/30/7 nap), hogy mindig legyen időd intézkedni.
- Kritikus TLD‑knél tarts fenn **kézi adatbevitelt** és vond be a **regisztrátor értesítéseit** is.
- Rendszeresen ellenőrizd a **Global Overview** és **Site Overview** widgeteket; a kockázatos tételeket rendszerezd feladatlistába.
- Ügyfélriportokba építs be **tokenes domain szekciót**, így átláthatóvá válik a kockázat és a felelősségi kör.