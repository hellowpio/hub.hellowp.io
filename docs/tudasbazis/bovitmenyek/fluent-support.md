---
title: "Fluent Support"
description: "Önhosztolt helpdesk és jegykezelő rendszer WordPresshez: gyors, integrált és skálázható support a saját webhelyeden."
sidebar_label: "Fluent Support"
---

## Mi ez és milyen problémát old meg?

A Fluent Support egy **self‑hosted** helpdesk és **ticketing** bővítmény WordPresshez. Segítségével a teljes ügyfélszolgálati folyamatot a saját webhelyeden futtathatod, **külső SaaS díjak és adatkihelyezés nélkül**. Korlátlan jegyet, ügynököt és felhasználót kezel, villámgyors, egyoldalas adminfelületen dolgozol, és minden adat a saját szervereden marad – **GDPR‑barát módon**.

Fő problémák, amiket megold:
- **Drága növekedési díjak**: nincs ügynökönkénti licenc.
- **Kontekstuális információhiány**: a jegylapról teljes ügyfélképhez jutsz (rendelések, tagság, kurzusok).
- **Kaotikus ticket‑kezelés**: gyors SPA felület, erős szűrés, automatizálás, ütközésvédelem.
- **E‑mailből élő support**: e‑mail piping és több postafiók egy helyen.

## Hogyan működik?

- A jegyek, ügyfelek és mellékletek **külön adatbázistáblákban** tárolódnak a WordPressen belül a teljesítmény érdekében.
- Az adminfelület egy **Vue.js alapú SPA**, amely REST API‑n keresztül, aszinkron tölti az adatokat.
- A **ügyfélportál** a saját oldaladon fut (blokk vagy űrlap), a jegyek weben és e‑mailen is nyithatók.
- A **workflow motor** triggerek/feltételek/akciók alapján automatizálja a rutint.
- Beépített **riportok** és **időkövetés** mérik a csapat teljesítményét.

## Fő funkciók, érthetően

### Jegykezelés, ami segít fókuszban maradni
- **Címkék és prioritások**: rendszerezd és priorizáld a bejövő kéréseket.
- **Jegy‑összefűzés (merge)** és **könyvjelzők**: egyesíts párhuzamos kéréseket, jelöld a fontosakat.
- **Válasz‑piszkozatok és sablonok**: gyorsítsd a visszatérő válaszokat.
- **Ügynök ütközésjelzés**: lásd, ha más is szerkeszti a jegyet.
- **Tömeges műveletek**: állapotváltás, címkézés, válasz több jegyre egyszerre.

### Ügyfélportál a saját oldaladon
- **Blokkszerkesztővel testreszabható** bejelentőfelület.
- **Vendég és bejelentkezett** válaszadás támogatása.
- **Egyedi mezők és űrlapok**: kérj minden szükséges kontextust már nyitáskor.

### Több csatorna és e‑mail alapú support
- **E‑mail piping**: a bejövő levelekből automatikusan jegy lesz, a válaszok szálba rendeződnek.
- **CC‑kezelés**: az érintettek „sub‑customer” szerepben bevonhatók.
- **Több postafiók** kezelése: külön címek, külön csatornák, egy adminfelületen.

### Több „Business Inbox” és multibrand működés
- **Korlátlan inbox**: márkánként, termékvonalanként külön email és portál.
- **Külön ügynökcsapatok** és jogosultságok inboxonként.
- **Elkülönített statisztikák** márkákra bontva.

### Automatizálás és workflow
- **Triggerek/feltételek/akciók**: automatikus címkézés, hozzárendelés, prioritás, állapotváltás.
- **Automatikus jegyzárás** és emlékeztetők inaktivitásnál.
- **Kimenő/bejövő webhooks**, **REST API**: integrálás saját folyamataidba.

### Integrációk és ökoszisztéma
- **E‑kereskedelem**: rendeléshez kötött jegy, teljes vásárlási előzmény.
- **LMS**: tanulói státuszok, beiratkozások és haladás megjelenítése.
- **Tagsági rendszerek**: csomagok, előfizetések, státuszok.
- **Kommunikációs appok**: értesítések és jegyinterakciók csapatcsatornákon.
- **Fájltárak és tudásbázis**: csatolmányok a drive‑ból, hivatkozás a súgócikkekre.
- **Űrlapok és CRM**: űrlapból jegy, ügyféladatok szinkronja.
- **reCAPTCHA**: spam elleni védelem.

### AI a mindennapi supportban (PRO)
- **Válaszjavaslatok**, **összefoglalás**, **hangnem/sentiment** gyors elemzése.
- **Állítható promptok** és stílusok a márkahanghoz.

### Riportok és időkövetés
- **Csapat és ügynök riportok**, napi trendek, aktivitási naplók.
- **Időkövetés (Timesheet)**: hol megy el az idő, exportálható kimutatások.

### Biztonság és megfelelés
- **Kétfaktoros azonosítás**, **e‑mail verifikáció**.
- **Önhosztolt adatkezelés**: minden adat a saját szervereden.
- **Teljesítményre optimalizált** architektúra és médiavédelem.

### Migráció
- Beépített **migrátorok** nagy SaaS‑okból és más WordPress helpdesk bővítményekből.

## Gyakorlati példák

- **Webshop**: egy vásárló a rendelés visszaigazoló emailre válaszol. Automatikusan jegy nyílik, te azonnal látod a rendelést, korábbi vásárlásokat és kuponokat. Workflow felcímkézi „szállítás” kulcsszó esetén, és a logisztikai csapat kapja.
- **LMS**: hallgató jelzi, hogy nem tudja megnyitni a 3. leckét. A jegylapon látod a kurzusát, beiratkozási státuszát, utolsó bejelentkezését. Egy sablonválasszal elküldöd a lépéseket, a workflow pedig 48 óra múlva utánkövet.
- **Ügynökség, több márka**: külön inbox a „SaaS‑odnak” és a „Shopodnak”. Két portáloldal, eltérő űrlapokkal. Automatizmus: a shopos jegyek pénzügyi kulcsszóra a számlázási ügynökökhöz kerülnek, és megy értesítés a csapatcsatornára.
- **E‑mail‑központú support**: bejövő levelekből jegy lesz, a CC‑zett kolléga automatikusan érintettként jelenik meg, így mindenki egy szálon marad.

## Előnyök és értékajánlat

- **Költségkontroll**: nincs ügynökönkénti díj, az infrastruktúra a tied.
- **Gyorsabb megoldás**: 360° ügyfélkép a jegylapon, kevesebb visszakérdezés.
- **Folyamatérettség**: workflow‑k, sablonok, AI támogatja a skálázást.
- **Adattulajdon és megfelelés**: önhosztolt tárolás, GDPR‑barát működés.
- **Rugalmasság**: széles integrációs kör, REST API, webhooks.

## Kinek ajánlott?

- **Webáruházaknak**: rendelés‑központú support, gyors kontextus.
- **Képzési platformoknak**: tanulói adatok a jegylapon, gyors hibakeresés.
- **Tagsági/community oldalaknak**: előfizetések és jogosultságok láthatók egyben.
- **Ügynökségeknek/multibrand csapatoknak**: több inbox, külön portál, külön csapatok.
- **Adatérzékeny szervezeteknek**: teljes kontroll a support adatok felett.

## Gyors indulás

1. **Telepítés**: aktiváld az ingyenes bővítményt, igény szerint a PRO kiegészítést.
2. **Business Inbox**: hozz létre egy inboxot, állítsd be a feladói nevet és címet.
3. **Ügyfélportál**: készíts egy oldalt, add hozzá a támogatási portál blokkot, állítsd be az űrlapmezőket.
4. **E‑mail piping**: állíts be továbbítást az inbox címére, tesztelj egy bejövő levéllel.
5. **Automatizálás**: készíts workflow‑kat címkézésre, hozzárendelésre és automatikus zárásra.
6. **Integrációk**: kapcsold össze az e‑kereskedelmi, LMS és tagsági bővítményekkel.
7. **Csapat és jogosultság**: vedd fel az ügynököket, állíts be értesítéseket és szerepköröket.

Példa workflow (logika):

```
Trigger: Ticket Created
Conditions:
  - Inbox == "Webshop"
  - Customer has recent order (<= 30 nap)
Actions:
  - Set Priority: High
  - Assign to: Sales Support
  - Add Tag: post-purchase
  - Send Auto-reply: "Köszönjük, hamarosan jelentkezünk a rendelésed ügyében."
  - Notify: Csapatcsatorna
```

Tipp: kezdd 1–2 alap szabállyal (hozzárendelés és automatikus zárás), majd finomíts címkékkel és sablonokkal. Így gyorsan mérhető eredményt kapsz, és rövid időn belül érezhetően csökken a kezelési idő.