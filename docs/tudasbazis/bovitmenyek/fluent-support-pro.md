---
title: "Fluent Support Pro"
description: "Önhosztolt, WordPress‑alapú helpdesk és ügyfélszolgálati rendszer. A Pro kiegészítő haladó automatizálással, e‑mail pipinggel, riportokkal és integrációkkal bővíti a core funkciókat."
sidebar_label: "Fluent Support Pro"
---

## Mi ez és mit old meg?

A Fluent Support egy teljes értékű, WordPressbe épülő helpdesk rendszer. A Pro kiegészítővel egy önhosztolt, több csatornás ügyfélszolgálatot kapsz: e‑mailekből automatikus jegyek, automatizmusok, részletes riportok, AI‑segítség és széles integrációs ökoszisztéma. Célja, hogy megszüntesse a drága, ügynökönként fizetős SaaS rendszerekhez kötöttséget, rendet tegyen az e‑mail káoszban, és kontextussal (rendelések, tagságok, kurzusok) gyorsítsa a válaszadást.

## Hogyan működik dióhéjban

- **WordPress bővítmény**: ingyenes core + Pro add‑on. A Pro képességekhez licenc szükséges.  
- **Admin felület**: modern, gyors SPA (VueJS + REST), saját adatbázis‑táblákon (fs_*) dolgozik a teljesítményért.  
- **Business Inboxes**: külön postafiókok és külön **ügyfélportál** per inbox; csatorna lehet “Web” vagy “Web + E‑mail”.  
- **Adatkezelés**: az adatok a saját szervereden maradnak (önhosztolt, GDPR‑barát). Kivétel: az e‑mail piping feldolgozása átmenetileg szerver nélküli környezetben történik, tárolás nélkül.

## Fő funkciók (Pro fókusz)

### Jegykezelés és ügyfélportál
- **Státuszok, prioritások, címkék**: ügyfél és admin is állíthat, termékek szerinti kategorizálás.  
- **Összevonás/szétválasztás, ütközésérzékelés, piszkozatok**, belső megjegyzések, könyvjelzők, **CC‑kezelés**.  
- **Több inbox**: márkánként/szolgáltatásonként elszeparált csapatok és portálok.  
- **Fájlkezelés**: mellékletek a WordPress tárhelyen, vagy **Google Drive / Dropbox** offload jegyenkénti mappákkal.

### E‑mail és üzenetcsatornák
- **E‑mail piping**: továbbított e‑mailekből automatikusan jegy keletkezik (nem IMAP, nem tölti le a régi leveleket, és nem töröl a levélszerverről).  
- **Kétirányú válasz** Slackből és Telegramból; **WhatsApp** értesítés és válasz (gatewayen keresztül).

### Automatizálás és fejlesztői lehetőségek
- **Workflows**: esemény alapú triggerek (pl. jegylétrehozás, ügyfélválasz), feltételek és akciók; tömeges műveletek.  
- **Mentett válaszok**, automatikus lezárás, **billentyűparancsok**.  
- **Webhookok és REST API**: bejövő/kimenő webhook, nyilvános végpontok WordPress‑es hitelesítéssel.

### Jelentések és csapatirányítás
- **Ügynök- és csapatteljesítmény**, inbox- és termékszintű riportok, aktivitási napló, **heatmap**.  
- **Időkövetés** ügynökönként (timesheet) és **CSV export**.  
- **Részletes jogosultságok** és **front‑end agent portal** a Pro csomagban.

### AI és tudás
- **OpenAI integráció**: válaszjavaslatok, hangnem‑finomítás, összefoglalás; saját prompt testre szabható.  
- **Tudásbázis‑javaslatok** a jegyűrlapon (BetterDocs integráció).

### Integrációk és migráció
- **E‑kereskedelem**: WooCommerce, EDD.  
- **Tagság/LMS**: MemberPress, PMPro, Restrict Content Pro, BuddyBoss, LearnDash, LifterLMS, TutorLMS, LearnPress.  
- **Kommunikáció és automatizálás**: Slack, Telegram, Discord, WhatsApp; no‑code/low‑code eszközök.  
- **Migrátorok**: import más helpdeskekből (pl. Freshdesk, Help Scout, Zendesk, SupportCandy, Awesome Support).

## Gyakorlati példák

- **Webáruház támogatás**: a vásárló e‑mailt ír, az továbbítással jeggyé alakul. A jegyben látod a rendelést és a korábbi vásárlásokat. Workflow automatikusan hozzárendeli a “Visszatérítés” csapathoz, címkézi és válaszol egy sablonnal.
- **LMS/edukáció**: hallgató problémát jelez egy leckénél; a jegyben azonnal látod, mely kurzusokra iratkozott és hol tart. A rendszer automatikusan magasabb prioritást ad “vizsgaidőszak” címkével.
- **Ügynökség több márkával**: külön inboxok, külön portálok és ügynökgárda. A mellékletek a Drive‑ba mennek, így nem terhelik a webtárhelyet.
- **B2B/SaaS és IT**: a saját alkalmazásodból REST API‑n nyitsz jegyet, a csapat Slackben válaszol kétirányú módban.

Példa egy egyszerű workflow‑logikára:
```
Ha: jegy létrejön AND termék = "Pro csomag"
Akkor: add_címke("priority-high"), assign_csapat("Pro Support"), küld_válasz("Köszönjük, dolgozunk rajta!")
```

## Előnyök és értékajánlat

- **Önhosztolt és költséghatékony**: nincs ügynökönkénti díj, az adataid nálad maradnak.  
- **Gyorsabb válaszadás**: rendelés/tagság/kurzus kontextus a jegyben.  
- **Rend az e‑mailekben**: automatikus jegyképzés, CC, sablonok, ütközésvédelem.  
- **Automatizálható folyamatok**: kevesebb kattintás, kevesebb hibázási lehetőség.  
- **Átlátható teljesítmény**: csapat‑ és ügynökszintű riportok, időmérés.

## Telepítés röviden (Pro képességekhez)

1. Telepítsd a core bővítményt, majd aktiváld a **Fluent Support Pro** add‑ont és a licencet.  
2. Hozz létre **Business Inboxokat**, állíts be portáloldalt (blokkal vagy shortcode‑dal).  
3. Válaszd a csatornát: **Web** vagy **Web + E‑mail**; e‑mail pipinghez állítsd be a továbbítást.  
4. Kapcsold az integrációkat (pl. Slack/Telegram/WhatsApp, e‑kereskedelem, LMS).  
5. Készíts **workflókat**, sablonválaszokat, riportokat és jogosultságokat.

## Kinek ajánlott?

- **WooCommerce/EDD** boltoknak, ahol kulcs a rendelés‑kontextus és a gyors SLA.  
- **Tagsági és LMS** oldalaknak, ahol a tanulói/tagi adatok nélkülözhetetlenek a támogatáshoz.  
- **Ügynökségeknek és többmárkás csapatoknak**, külön inboxokkal és szerepkörökkel.  
- **B2B/SaaS és belső IT** csapatoknak, akik REST API‑t és webhookokat használnak.

## Fontos tudnivalók és korlátok

- **E‑mail piping**: továbbítás alapú, nem IMAP; nem tölti le a korábbi leveleket és nem töröl a levelezőszerverről.  
- **Feldolgozás**: az e‑mail piping átmeneti, szerver nélküli környezetet használ; adatot nem tárol, de megfelelőségi szempontból vedd figyelembe.  
- **Pro funkciókhoz licenc kell**; a felhőmellékletekhez külső tárhelykapcsolat szükséges.

## Pro vs Free röviden

- **Free**: alap jegykezelés és ügyfélportál.  
- **Pro**: e‑mail piping, automatizálás (workflows), haladó riportok és időkövetés, AI, külső csatornák, webhookok/REST, több inbox, felhőmellékletek, front‑end agent portal.