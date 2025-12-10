---
title: "JetFormBuilder PDF Attachment"
description: "A JetFormBuilder Pro hivatalos kiegészítője, amely a beküldött űrlapadatokat automatikusan PDF-be rendezi, e‑mailhez csatolja, letöltésre megnyitja vagy a Médiatárba menti."
sidebar_label: "JetFormBuilder PDF Attachment"
---

## Mi ez és milyen problémát old meg?

A JetFormBuilder PDF Attachment egy olyan kiegészítő, amellyel a weboldaladon beküldött űrlapadatokból automatikusan, azonnal PDF-dokumentum készül. Ezzel kiváltod a kézi dokumentumkészítést és -csatolást: a fájl egyből elkészül, opcionálisan e‑mailhez kerül, letöltésre megnyílik, illetve el is menthető a Médiatárba. Standardizálható, márkázott PDF-eket ad, minimális utómunka mellett.

## Fő funkciók, részletesen

- **Automatikus PDF-generálás beküldéskor**  
  A „Generate PDF” utófeldolgozó akció a beérkező űrlapadatokat egy előre létrehozott sablon szerint PDF-be rendezi. A fájl nevét makrókkal alakíthatod (például mezőértékekből), így minden dokumentum beszédesen azonosítható.

- **E‑mail csatolmány**  
  Egy kattintással hozzákötheted a „Send Email” akcióhoz. A generált PDF automatikusan az e‑mail melléklete lesz, ideális visszaigazolásokhoz, számlákhoz, jegyekhez.

- **Mentés a szerveren (Médiatár/Uploads)**  
  A „Save generated PDF” kapcsolóval döntöd el, hogy a fájl maradjon-e a szerveren (megjelenik a Médiatárban, és a Form Records nézetben is), vagy az akciók lefutása után automatikusan törlődjön.

- **Azonnali letöltés/átirányítás**  
  A bővítmény makrókat ad a generált fájl URL-jéhez, így beküldés után megnyithatod a PDF-et a böngészőben vagy átirányíthatod a felhasználót egy letöltési oldalra.

- **PDF-sablonok blokk-alapú szerkesztéssel**  
  A JetFormBuilder menüben külön „Templates” rész jelenik meg. A PDF tartalmát WordPress-blokkokkal építed: **Heading**, **Paragraph**, **Image**, **Table**, **Columns**, **Custom HTML**, valamint **Conditional Block** (feltételes megjelenítés).

- **Mezőmakrók és dinamikus adatok**  
  Az űrlapmezők értékeit makrókkal jeleníted meg a sablonban (például: `%field_name%`). Képek beillesztése is támogatott Media Fieldből. A fájlnév is épülhet makrókra, az alapértelmezett sablonnév mellett testreszabott elnevezéseket adhatsz.

- **Feltételes tartalom**  
  A Conditional Block és – igény szerint – dinamikus láthatósági feltételek segítségével csak a releváns szakaszok kerülnek a PDF-be (például egy rész csak bizonyos válasz esetén jelenjen meg).

- **Hibaüzenetek testreszabása**  
  Külön üzeneteket állíthatsz be a generálás vagy a csatolás sikertelensége esetére.

- **Biztonságos tárolás**  
  A PDF-ek az Uploads mappában, .htaccess védelemmel és egyedi nevű almappákban tárolódnak, ami csökkenti a jogosulatlan elérés kockázatát.

## Gyakorlati példák

- **Jelentkezési visszaigazolás**: beküldés után személyre szabott PDF, azonnali mellékletként a jelentkező e‑mailjében.  
- **Jegy/nyugta/számla**: rendelési adatokból automatikus, márkázott dokumentum.  
- **Orvosi jelentés vagy űrlap**: strukturált PDF, csak a releváns szekciókkal.  
- **Utazási terv**: dátumokkal, QR-kóddal/azonosítóval (képmezőből).  
- **Szabadságkérelem**: HR-folyamatokhoz bizonyítható PDF-nyom.

Elektronikus aláírásra a Signature mezőt beépítve a felhasználó kézírásos aláírása is megjelenhet a PDF-ben (tipikus szerződésekhez, hozzájárulásokhoz).

## Minták és makrók

- **Példa fájlnévre**:
```
szamla-%first_name%-%order_id%.pdf
```

- **Egyszerű sablonszöveg**:
```
# Rendelés visszaigazolás

Rendelés azonosító: %order_id%
Név: %first_name% %last_name%
E-mail: %email%

Összeg: %total_amount%
Fizetési mód: %payment_method%

Köszönjük a rendelésed!
```

- **Letöltési URL makró (példa)**:
```
%generate_pdf_{action_id}_url%
```
Az `{action_id}` helyére a „Generate PDF" akció azonosítója kerül. Ezt használhatod átirányításhoz vagy gomb/link megjelenítéséhez.

## Gyors bevezetés (lépésről lépésre)

1. Telepítsd és aktiváld a JetFormBuilder Pro csomagot és a PDF Attachment kiegészítőt.  
2. Hozz létre egy űrlapot vagy nyisd meg meglévődet.  
3. A Post Submit Actions között add hozzá a „Generate PDF” akciót, válassz sablont (vagy készíts újat).  
4. Állítsd be a fájlnevet (makrókkal), a „Save generated PDF” kapcsolót és a hibaüzeneteket.  
5. Ha e‑mail melléklet kell, kattints az „Attach to the Send Email action” gombra, majd állítsd be a „Send Email” akciót.  
6. Helyezd el az űrlapot az oldalon, küldj tesztet, és ellenőrizd az e‑mailt/Médiatárat/Form Records nézetet.

## Előnyök és értékajánlat

- **Időmegtakarítás**: nincs többé manuális PDF-készítés és csatolás.  
- **Egységes arculat**: sablonokkal konzisztens, márkázott dokumentumok.  
- **Pontosság és átláthatóság**: a mezőkből érkező adatok automatikusan és hibamentesen kerülnek a dokumentumba.  
- **Automatizálás**: e‑mail küldés, mentés, letöltés egy folyamatban.  
- **Biztonság és adminisztrálhatóság**: védett tárhely, könnyű visszakereshetőség a Form Records nézetben.

## Kinek ajánlott?

- **Ügynökségek és webfejlesztők**: gyorsan szállítható, skálázható PDF-folyamatok ügyfeleknek.  
- **Webshopok és szolgáltatók**: számlák, visszaigazolások, jegyek automatizálása.  
- **Egészségügyi és oktatási intézmények**: űrlapokból hivatalos PDF-dokumentumok.  
- **HR és jogi területek**: kérelmek, szerződések, aláírt nyilatkozatok.  
- **Rendezvényszervezők**: belépők, programok, voucherek azonnali kiküldése.

## Technikai megjegyzések és korlátozások

- Ha a „Save generated PDF” ki van kapcsolva, a fájl az akciók után törlődik; bekapcsolva a Médiatárban és a Form Records alatt is elérhető.  
- Egy Image blokk egyetlen Media Field képet jelenít meg; több képhez használj több Image blokkot.  
- A fájlnevek és a sablon tartalma mezőmakrókkal dinamikusak.  
- A JetFormBuilder Gutenberg-alapú, de az űrlapok Elementorban és Bricksben is megjeleníthetők; a PDF Attachment ezekkel együtt működik.  
- A PDF-ek Uploads alatti, egyedi almappákban, .htaccess védelemmel tárolódnak.

## Licenc és elérhetőség

A PDF Attachment a JetFormBuilder Pro csomag része. A Pro előfizetés jellemzően egy webhelyre éves díjért érhető el, amely tartalmazza a Pro kiegészítők csomagját. Az árak és feltételek változhatnak; érdemes az aktuális információkat ellenőrizned.