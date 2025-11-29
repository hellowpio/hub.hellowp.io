---
title: "JetFormBuilder ConvertKit Action"
description: "PRO kiegészítő a JetFormBuilderhez, amely automatikusan feliratkozókat hoz létre és címkéz a ConvertKitben az űrlapbeküldések alapján."
sidebar_label: "JetFormBuilder ConvertKit Action"
---

## Mi ez és milyen problémát old meg?

A JetFormBuilder ConvertKit Action egy PRO kiegészítő, amellyel a WordPressen létrehozott JetFormBuilder űrlapokat közvetlenül összekötöd a ConvertKit e-mail marketing rendszerrel. A cél egyszerű: az űrlapbeküldésekből automatikusan feliratkozók lesznek a ConvertKitben, a megfelelő címkékkel és kitöltött mezőkkel. Nem kell többé CSV-exporttal, manuális importtal és kézi címkézéssel bajlódnod – minden azonnal, pontosan és egységesen történik.

## Hogyan működik röviden?

- Az űrlap beküldése után lefut egy **Post Submit Action**, ami a megadott **API-kulccsal** hívást indít a ConvertKit felé.
- A **Fields Map** alapján a JetFormBuilder mezők értékei átkerülnek a ConvertKit feliratkozói mezőibe (Email kötelező, First Name opcionális).
- A kiválasztott **Tags** azonnal hozzárendelődnek, így a feliratkozó rögtön a megfelelő szegmensbe kerül, és indulhatnak az automatizmusok.

## Fő funkciók részletesen

- **ConvertKit mint Post Submit Action**:  
  Az integráció az űrlap után fut le, így az adatátadás nem függ gombnyomásoktól vagy külső eszközöktől. Stabil, beépül a JetFormBuilder űrlapfolyamatába.

- **API-kulcs kezelés és validálás**:  
  Az admin felületen megadod az API Key-t, majd a **Validate API Key** gombbal ellenőrzöd a hitelességet. Ha hálózati vagy átmeneti hiba adódik, a **Retry request** segít az újrapróbálásban. Így biztos lehetsz benne, hogy a kapcsolat él és működik.

- **Címkék szinkronizálása (Tags)**:  
  Az **Update Tags List** funkcióval a ConvertKitben létrehozott címkéket frissíted az adminban, majd egyszerűen kiválasztod, melyik címkéket kapja meg az adott űrlapról érkező feliratkozó. Ez garantálja a konzisztens szegmentálást.

- **Mezőtérképezés (Fields Map)**:  
  Megadod, mely JetFormBuilder mező mely ConvertKit mezőbe kerüljön. Az **Email** kötelező (nélküle nincs feliratkozó), a **First Name** opcionális. Így biztosítod, hogy a kampányaidban a szükséges mezők mindig rendelkezésre álljanak.

- **Témafüggetlen működés**:  
  A kiegészítő bármely WordPress témával együttműködik a JetFormBuilder keretein belül.

## Telepítés és beállítás 4 lépésben

1. WordPress admin > JetFormBuilder > Addons: telepítsd és aktiváld a ConvertKit integrációs addont.  
2. ConvertKit fiókban keresd meg az API kulcsot (Account Settings > General).  
3. JetFormBuilder > Forms: nyisd meg az űrlapot, Post Submit Actions > New Action > válaszd a ConvertKitet.  
4. Illeszd be az API key-t, nyomd meg a Validate API Key-t, futtasd az Update Tags Listet, válaszd ki a címkéket, állítsd be a Fields Mapet (Email kötelező), majd ments.

```text
Fields Map példa:
- Email      -> {email}
- First Name -> {keresztnev}
Tags: ["webinar-regisztracio", "lead-maganoktatasi"]
```

## Gyakorlati példák

- **Hírlevél-feliratkozás**:  
  A „Feliratkozom” űrlap beküldésekor a látogató e-mail címe felkerül a feliratkozók közé, megkapja a „newsletter” címkét, és automatikusan elindul a bevezető e-mail-sorozat.

- **Leadgenerálás és eseményregisztráció**:  
  Konferencia vagy webinár regisztrációs űrlapjánál a beküldők a „webinar-2025-q1” címkét kapják. Így külön kampányban kaphatnak emlékeztetőket, napirendet és utólagos anyagokat.

- **Fizetés utáni automatizálás** (Stripe Payments addonnal):  
  Miután az űrlap-alapú fizetés sikeres, a vásárlót automatikusan címkézed (pl. „customer”, „course-A”), és elindítod a köszönő- és onboarding e-mailsorozatot.

## Előnyök és értékajánlat

- **Idő- és hibamegtakarítás**: nincs manuális export–import, kevesebb elgépelés és duplikáció.  
- **Konzisztens szegmentálás**: címkék frissítése és kiválasztása az adminból, azonnali automatizmus-indítás.  
- **Gyorsabb kampányindítás**: a leadek valós időben kerülnek be a ConvertKitbe.  
- **Egységes WordPress-ökoszisztéma**: a JetFormBuilder más marketingcsatornákkal is integrálható; a ConvertKit Action ebbe a rendszerbe illeszkedik.  
- **Skálázható folyamatok**: bővíthető űrlapokkal, több kampánnyal, összetett címkézéssel.

## Kinek ajánlott?

- **Tartalomkészítők és hírlevél-kiadók**: folyamatos listanövelés minimális kézi munkával.  
- **Oktatók, tréning- és eseményszervezők**: regisztrálók azonnali címkézése és célzott emlékeztetők.  
- **Kis- és középvállalkozások**: leadgyűjtésből értékesítési tölcsérbe léptetés automatikus kampányokkal.  
- **E-kereskedők és szolgáltatók**: fizetés utáni follow-up sorozatok, upsell és onboarding levelek.  
- **Marketingcsapatok**: tiszta adatfolyam, reliable API-integráció, kevesebb operatív teher.

## Függőségek és licenc

- **Szükséges bővítmény**: aktív JetFormBuilder (a ConvertKit Action a PRO addonkészlet része).  
- **Külső fiók**: aktív ConvertKit-fiók és érvényes API kulcs.  
- **Elérhetőség**: a ConvertKit Action hivatalosan listázott PRO addon; csomagolás és árképzés a fejlesztői oldalon változhat.

## Tippek és hibaelhárítás

- **API hiba?** Ellenőrizd a kulcsot a Validate API Key-jel; átmeneti gondnál használd a Retry requestet.  
- **Hiányzó címke?** Futtasd az Update Tags List funkciót, majd válaszd ki újra a kívánt tageket.  
- **Sikertelen feliratkozás?** Győződj meg róla, hogy az Email mező kötelező és helyesen van hozzárendelve a Fields Mapben.  
- **Tesztelés**: küldj próbaűrlapot valós e-mail címmel, és ellenőrizd a ConvertKitben a címkét és a feliratkozó adatait.

Ezzel a kiegészítővel a JetFormBuilder űrlapjaid zökkenőmentesen kapcsolódnak a ConvertKithez, így gyorsan, pontosan és skálázhatóan építheted a listádat és automatizálhatod a kampányaidat.