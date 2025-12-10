---
title: "Ninja Forms - ActiveCampaign"
description: "A Ninja Forms hivatalos kiegészítője, amely a WordPress űrlapjaid adatait automatikusan szinkronizálja az ActiveCampaignbe listákra, mezőmappezéssel és tagekkel."
sidebar_label: "Ninja Forms - ActiveCampaign"
---

## Mi ez, és milyen problémát old meg?

A Ninja Forms – ActiveCampaign kiegészítő összeköti a WordPressen készült Ninja Forms űrlapjaidat az ActiveCampaign CRM- és marketingautomatizációs rendszerrel. A beküldött űrlapok adatai (kontakt, mezők, tagek) automatikusan és strukturáltan kerülnek át, így nem kell többé CSV export–import köröket futtatnod, és azonnal beindíthatod az automatizmusokat.

Röviden: űrlap → kontakt az ActiveCampaignben → lista, mezők, tagek → automatizált kampányok indulnak.

## Fő funkciók, érthetően

- **Egyetlen Action az összekapcsoláshoz**
  Az űrlapod “Emails & Actions” részébe felveszel egy ActiveCampaign actiont. Itt kiválasztod a céllistát, majd **mezőmappezéssel** összerendeled az űrlapmezőket az ActiveCampaign kontaktmezőivel (alap és egyedi mezők). Így minden adat a helyére kerül.

- **Több tag egyszerre**
  Az űrlap beküldésekor a kontaktot **egy vagy több taggel** látod el. A tageket vesszővel elválasztva adhatod meg, pl. kampány-, forrás- vagy érdeklődési címkéket. Ezekkel azonnal szegmentálhatsz és automatizmusokat indíthatsz.

- **Double opt‑in tiszteletben tartása**
  Ha az ActiveCampaignben bekapcsolod a feliratkozás megerősítését, az integráció ezt követi. Vagyis a Ninja Forms űrlapról érkező feliratkozók ugyanazt a megerősítési folyamatot kapják, mintha natív AC-űrlapon jelentkeztek volna.

- **Egyedi kontaktmezők támogatása**
  Nem csak az alapmezőket (Név, Email) kezeli: az ActiveCampaignben létrehozott **custom fieldeket** is lekérdezi és felkínálja mappezésre. Így a leadjeid nem veszítik el a kontextust.

- **Több ActiveCampaign-fiók űrlaponként**
  Ha több márkát vagy piacot kezelsz külön AC-fiókokkal, űrlaponként megadhatod, melyik fiókkal hitelesítsen a kiegészítő. Így egy webhelyen, külön űrlapokkal is szépen szétválaszthatod a csatornákat.

- **Beküldésenkénti diagnosztika**
  Minden submission után elérhető egy diagnosztikai nézet, amely megmutatja az API-válaszokat. Ha valami nem kerül be a listára, itt látod, miért (pl. hiányzó kötelező mező vagy hibás lista).

## Gyakorlati példák

- **Hírlevél-feliratkozás**
  Feliratkozó űrlap → céllista “Hírlevél” → tagek: “feliratkozo, forras:blog” → automatikus üdvözlő email és drip kampány indul.

- **Webinár-regisztráció**
  Regisztrációs űrlap → “Webinár – Jelentkezők” lista → tagek: “webinar, tema:crm” → emlékeztető sorozat, utána follow‑up ajánlat.

- **Kapcsolatfelvétel → értékesítési tölcsér**
  Contact form → “Érdeklődők” lista → “lead, forras:kapcsolat” tagek → automatizmus: feladat létrehozása az értékesítőnek, köszönő email a felhasználónak.

- **Lead magnet letöltés**
  Ebook letöltési űrlap → “Lead Magnet – Ebook” lista → “lead-magnet:ebook, tartalom:crm” tagek → háromrészes nurturing kampány.

Példa tagmező beállításra:
```
feliratkozo, forras:blog, kampany:tavasz, erdeklodes:crm
```

## Telepítés és alapbeállítás

1. Telepítsd és aktiváld a prémium ActiveCampaign kiegészítőt.
2. A Ninja Forms beállításoknál add meg az ActiveCampaign fiókod URL-jét és API-kulcsát.
3. Nyisd meg a kívánt űrlapot, és az Emails & Actions panelen add hozzá az ActiveCampaign actiont.
4. Válaszd ki a céllistát.
5. Állítsd be a **mezőmappezést**: pl. Email → Email, Teljes név → First/Last Name mezők, egyedi űrlapmezők → egyedi AC-mezők.
6. Add meg a **tageket** vesszővel elválasztva.
7. Mentsd az űrlapot, küldj be egy tesztet, és ellenőrizd a **diagnosztikát** és az AC oldalon a kontaktot.

Tipp: Ha double opt‑int használsz, előbb konfiguráld az ActiveCampaignben a megerősítést, az integráció automatikusan követi.

## Előnyök és értékajánlat

- **Idő- és költségmegtakarítás**: nincs kézi export–import, az adatok automatikusan a helyükre kerülnek.
- **Jobb adatintegritás**: precíz mezőmappezéssel csökken a hibás vagy hiányos kontaktadatok aránya.
- **Azonnali szegmentálás**: tagekkel rögtön célcsoportokba rendezheted a leadeket, és elindíthatod az automatizmusokat.
- **Rugalmas többmárkás működés**: űrlaponként eltérő AC-fiók.
- **Gyors hibakeresés**: a beküldésenkénti diagnosztika lerövidíti a problémák feltárását.

## Korlátok és fontos megjegyzések

- **Egy űrlap = egy AC-fiók**: feltételes logikával nem válthatsz dinamikusan fiókot egy űrlapon belül.
- **Double opt‑in**: az AC oldalon kell bekapcsolnod és beállítanod; az integráció ezt tiszteletben tartja.
- **Követelmények**: naprakész WordPress, Ninja Forms és PHP környezet javasolt a stabil működéshez.

## Kinek ajánlott?

- **Marketing csapatoknak**, akik skálázható feliratkozási és leadkezelési folyamatot szeretnének.
- **Értékesítési/CRM csapatoknak**, akiknek kritikus az adatok pontossága és a gyors kvalifikáció.
- **Oktatóknak, rendezvényszervezőknek**, akik webinárokat, eseményeket futtatnak automatizált emlékeztetőkkel.
- **Több márkát kezelő vállalkozásoknak**, ahol külön AC-fiókok futnak.
- **Ügynökségeknek**, akik ügyfelenként eltérő listákat, tageket és automatizmusokat kezelnek.

## Licenc és támogatás

A kiegészítő előfizetéses licencmodellel érhető el, automatikus megújítással (bármikor lemondható) és rövid pénzvisszatérítési garanciával. Az ügyféltámogatás munkanapokon elérhető, és segít a beállításban, hibakeresésben, valamint a legjobb gyakorlatok kialakításában.

---

Összefoglalva: ezzel a kiegészítővel a Ninja Forms űrlapjaidból érkező adatok azonnal és hibamentesen kerülnek az ActiveCampaignbe, tagekkel és mezőmappezéssel együtt. Ha szeretnél több feliratkozót, jobb adatminőséget és automatizált kampányokat, ez az integráció pontosan azt adja, amire szükséged van.