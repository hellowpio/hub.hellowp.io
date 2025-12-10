---
title: "JetFormBuilder MailerLite Action"
description: "Pro kiegészítő, amellyel a JetFormBuilder űrlapokból automatikusan MailerLite (Classic) feliratkozókat hozhatsz létre – csoportokkal, tagekkel, feltételekkel."
sidebar_label: "JetFormBuilder MailerLite Action"
---

## Mi ez és milyen problémát old meg?

A **JetFormBuilder MailerLite Action** a JetFormBuilder Pro hivatalos kiegészítője. Összeköti a WordPressen készült JetFormBuilder űrlapjaidat a **MailerLite (Classic)** e-mail marketing rendszerrel, és a beküldött adatokból automatikusan létrehozza a feliratkozókat. Nincs több manuális export–import, nincs CSV-kezelés: minden adat a megfelelő csoportba és mezőkbe kerül, rögtön az űrlapbeküldés után – akár feltételekhez és fizetési eseményekhez kötve.

## Fő funkciók és működés

### API-kulcsos hitelesítés
A kapcsolatot **API-kulccsal** állítod be. Az API key megadását követően a **Validate API Key** gombbal azonnal ellenőrizheted a hitelesítést, a **Retry request** pedig újraküldi a kérést, ha frissíteni vagy hibát javítani szeretnél. Így gyorsan kiderül, hogy a MailerLite-fiók elérhető-e az addon számára.

### Csoportok és tagek kezelése
Kiválaszthatod, melyik **Subscriber Group**-ba kerüljenek az új feliratkozók, és – ha támogatott – **tageket** is társíthatsz. Az **Update Tags List** gombbal bármikor frissítheted a MailerLite-ból lehívott csoportok/tag-ek listáját, ami segít a naprakész szegmentálásban.

### Mezőtérképezés (Fields Map)
A **Fields Map** segítségével az űrlapmezőket pontosan hozzárendeled a MailerLite egyéni mezőihez. A **Email** mező kötelező, a többi (pl. keresztnév, cégnév) tetszőlegesen párosítható. Ez garantálja a jó adatminőséget és a későbbi szegmentáció egyszerűségét.

### Post Submit Action, feltételek és események
A MailerLite Action a JetFormBuilder **Post Submit Actions** rendszerében fut. Beállíthatsz:
- **Feltételeket** (Conditions), pl. csak akkor fusson, ha a “Hozzájárulok a hírlevélhez” checkbox be van jelölve.
- **Eseményeket** (Events), pl. csak **sikeres Stripe vagy PayPal fizetés** után hajtódjon végre. Ez minimalizálja a téves vagy jogosulatlan feliratkozásokat.

### Telepítés és aktiválás a JetFormBuilderen belül
A bővítményt a JetFormBuilder **Addons** felületéről telepítheted és aktiválhatod. Ezután az adott űrlap **Post Submit Actions** részén adod hozzá a **MailerLite** műveletet, majd szerkeszted a beállításokat.

### Fizetési integrációk
Stripe/PayPal használata esetén a MailerLite Action-t eseményhez kötheted. Például: csak a **“Payment completed”** esemény után kerüljön a vásárló a “Customers” csoportba, megadott tagekkel.

### Kompatibilitás
Az integráció a **MailerLite Classic** rendszerével működik. Ha az új (nem Classic) verziót használod, ellenőrizd az API-kompatibilitást és igazítsd a beállításokat ennek megfelelően.

## Gyakorlati példák

- **Hírlevél-feliratkozás**: Egy egyszerű űrlap e-mail és keresztnév mezővel. A beküldés után a felhasználó a “Newsletter” csoportba kerül. Feltétel: a GDPR/jogosultsági checkbox jelölve legyen.
- **Leadmágnes letöltése**: Letöltés kérés űrlappal. A beküldő a “Leads” csoportba kerül, és kapja a “lead-magnet” taget. Ezzel automatikusan elindul a welcome-sorozat.
- **Webinár-regisztráció**: A jelentkezők a “Webinar – [dátum]” csoportba kerülnek, “registered” taggel. A MailerLite-ból célzott emlékeztetőket küldesz.
- **E-kereskedelem (Stripe)**: Fizetés utáni eseményre kötve a vevő a “Customers” csoportba és “first-purchase” taggel kerül be. A visszatérő vásárlóknak másik taget adhatsz.

Példa beállítás vázlata:

```
Post Submit Action: MailerLite
- Validate API Key: OK
- Group: Newsletter
- Fields Map:
  - Email -> email
  - First name -> first_name
- Tags: lead-magnet, 2025-spring
- Conditions: GDPR_checkbox = checked
- Events (opcionális): Payment = success (Stripe)
```

## Beállítás lépésről lépésre

1. **Telepítés/aktiválás**: JetFormBuilder > Addons > MailerLite Integration bekapcsolása.
2. **API-kulcs**: Szerezd be a MailerLite fiókod API key-ét, illeszd be, majd **Validate API Key**.
3. **Post Submit Action hozzáadása**: Az űrlapnál válaszd a **MailerLite** műveletet.
4. **Csoport és mezők**: Válassz **Group**-ot, töltsd ki a **Fields Map**-et (Email kötelező).
5. **Tagek és frissítés**: Ha szükséges, **Update Tags List**, majd tagek kiválasztása.
6. **Feltételek/Események**: Állíts be checkbox-feltételt vagy fizetési eseményt.
7. **Mentés és teszt**: Küldj próba űrlapot és ellenőrizd a MailerLite-ban az eredményt.

## Előnyök és értékajánlat

- **Időmegtakarítás**: Automatikus adatátvitel, nincs manuális export–import.
- **Adatminőség**: Kötelező e-mail és precíz mezőtérképezés a tiszta adatbázisért.
- **Szegmentálhatóság**: Csoportok és tagek révén könnyű célzás és automatizmus-indítás.
- **Megbízható automatizálás**: Feltételek és események minimalizálják a hibákat.
- **Kódmentes beállítás**: Minden a JetFormBuilder felületén, fejlesztés nélkül.

## Kinek ajánlott?

- **Tartalomkészítők és blogok**: hírlevél-építés és leadmágnesek egyszerű bekötése.
- **E-kereskedők**: vásárlók automatikus csoportosítása fizetés után.
- **B2B marketing és sales**: letöltésekből, ajánlatkérésekből azonnali lead-felvétel.
- **Eseményszervezők**: webinár- és rendezvényregisztrációk célzott követése.
- **Oktatási vállalkozások**: kurzusérdeklődők szegmentálása és onboarding sorozatok.

## Fontos megjegyzések

- **MailerLite Classic kompatibilitás**: ha az új MailerLite-ot használod, ellenőrizd az API-képességeket.
- **Licenc**: a MailerLite Action a **JetFormBuilder Pro** csomag része.
- **E-mail mező kötelező**: nélküle nem hozható létre feliratkozó.
- **Tesztelés**: élesítés előtt küldj tesztbeküldést, és ellenőrizd a csoportot/mezőket/tageket.

Ha szeretnél, kérhetsz külön útmutatót a GDPR checkbox-feltétel tipikus beállításáról vagy egy Stripe-fizetés utáni feliratkozási folyamat lépésről lépésre példáról.