---
title: "JetFormBuilder MailPoet Action"
description: "PRO kiegészítő a JetFormBuilderhez, amely a MailPoet hírlevélrendszerrel integrálja az űrlapokat: feliratkozók automatikus létrehozása, listakezelés, double opt‑in és mezőtérképezés."
sidebar_label: "JetFormBuilder MailPoet Action"
---

## Mi ez és milyen problémát old meg?

A JetFormBuilder MailPoet Action egy PRO kiegészítő, amellyel bármely JetFormBuilder‑űrlap beküldésekor automatikusan MailPoet feliratkozókat hozhatsz létre és a megfelelő listákba sorolhatsz. Mindez a WordPress vezérlőpulton belül történik, így nem kell többé CSV‑t exportálnod/importálnod, és könnyen beépítheted a double opt‑int és az üdvözlő e‑maileket az űrlapfolyamataidba.

## Követelmények és kompatibilitás

- Szükséges: **JetFormBuilder** (ingyenes alapbővítmény) és a **MailPoet** plugin.
- A MailPoet Action csak akkor jelenik meg a JetFormBuilder **Post Submit Actions** között, ha a PRO addon telepítve és aktiválva van.
- Gutenberg‑alapú űrlapszerkesztés; bármely WordPress témával működik.
- A JetFormBuilder és PRO kiegészítői a Crocoblock termékei.

## Fő funkciók részletesen

### MailPoet szinkronizáció – „Make a request”
Az akció szerkesztőjében található **Make a request** gomb frissíti a JetFormBuilder és a MailPoet közötti adatokat (pl. elérhető listák és mezők). Ezt használod, ha új listát hoztál létre MailPoetben, vagy változtak a mezők.

### Listakezelés az űrlapból
Az akcióban kiválaszthatod a cél **Mailing List**(áka)t (pl. „Newsletter”). A sikeres beküldés után a felhasználó azonnal a kijelölt listákba kerül, a MailPoet előfizetői státuszával együtt.

### Double opt‑in – „Send Confirmation Email”
Ha bekapcsolod, a rendszer megerősítő e‑mailt küld. A megerősítésig a felhasználó **Unconfirmed**, utána **Subscribed** státuszt kap. Ha kikapcsolod, a feliratkozó megerősítés nélkül kerül fel (státusza később módosítható).

### Üdvözlő e‑mail – „Schedule Welcome Email”
Engedélyezve a MailPoet **Welcome Email** automatizmusát indítja el a feliratkozás után. Ehhez a MailPoetben előzetesen létrehozott üdvözlő sorozat szükséges.

### Értesítés átugrása – „Skip Subscriber Notification”
Lehetővé teszi, hogy a feliratkozó ne kapjon külön értesítést a regisztrációról. Hasznos például adminisztrátori adatfelvételnél vagy belső importhelyzetekben.

### Mezőtérkép – „Fields Map”
Összerendelheted az űrlapmezőket a MailPoet mezőivel. Az **Email** mező kötelező; a **Keresztnév** és **Vezetéknév** opcionális. A pontos leképezés javítja az adatminőséget és elkerüli a hibás importokat.

### Feltételes végrehajtás
A JetFormBuilder feltételrendszerével a MailPoet akció csak meghatározott űrlapértékek esetén fut. Tipikus példa a „Feliratkozom a hírlevélre” jelölőnégyzet: csak kipipálva kerül a felhasználó a listára.

## Telepítés és alapbeállítás

1. JetFormBuilder > Addons: telepítsd és aktiváld a **MailPoet Integration** addont.
2. Telepítsd/aktiváld a **MailPoet** plugint, majd aktiváld a kulcsot a MailPoet beállításoknál.
3. JetForms > Forms: nyisd meg az űrlapodat, a **Post Submit Actions** panelen add hozzá a **MailPoet** akciót.
4. Kattints a **Make a request** gombra az adatok szinkronizálásához.
5. Válaszd ki a listákat, állítsd be a **Send Confirmation Email**, **Schedule Welcome Email**, **Skip Subscriber Notification** opciókat.
6. Térképezd fel a mezőket a **Fields Map**‑ben (Email kötelező).
7. Opcionálisan állíts be **feltételeket** (pl. jelölőnégyzethez kötve).
8. Mentsd az űrlapot, teszteld egy próbaküldéssel.

Példa „Fields Map” beállításra:
```
Email -> Email
First Name -> Keresztnév
Last Name  -> Vezetéknév
```

## Gyakorlati példák

- Blog hírlevél‑CTA: egy egyszerű e‑mail mezővel feliratkozók a „Newsletter” listába kerülnek; double opt‑in aktív, majd automatikus üdvözlő e‑mail indul.
- Lead magnet letöltés: űrlap beküldése után megerősítő e‑mail; megerősítéskor üdvözlő üzenet a letöltési linkkel.
- Eseményérdeklődés: jelölőnégyzet dönti el, hogy az érdeklődő felkerüljön‑e a promóciós listára. A MailPoet akció csak akkor fut, ha van hozzájárulás.

## Előnyök és értékajánlat

- **Időmegtakarítás**: nincs manuális export‑import; a feliratkozók azonnal listába kerülnek.
- **Jogszabályi megfelelés**: a **double opt‑in** egyszerűen beépíthető az űrlapfolyamatba.
- **Jobb adatminőség**: a **Fields Map** minimalizálja az elírásokat és a hibás mezőkapcsolatokat.
- **Automatizált onboarding**: a **Welcome Email** sorozatok a beküldéssel egyidőben indulhatnak.
- **Rugalmas élmény**: az **értesítés átugrása** és a **feltételek** finomhangolják a felhasználói utat.

## Kinek ajánlott?

- Tartalomkészítők és bloggerek, akik gyorsan szeretnének minőségi feliratkozói bázist építeni.
- Webshopok és marketingesek, akik lead magnettel, kosárelhagyókkal vagy promóciós listákkal dolgoznak.
- Rendezvényszervezők, akik érdeklődő űrlapból akarnak engedélyköteles promóciós listát építeni.
- Ügynökségek és site builderek, akik skálázható, kliens‑barát workflow‑t keresnek WordPressen belül.

## Megjegyzések és korlátozások

- A MailPoet Action nem működik önmagában: szükséges a MailPoet plugin telepítése és aktiválása.
- Üdvözlő e‑mailekhez a MailPoetben előzetesen létrehozott „Welcome Email” automatizmus kell.
- A MailPoet akció csak akkor érhető el a Post Submit Actions listában, ha a PRO addon aktív.

## Összegzés

A JetFormBuilder MailPoet Action a legrövidebb út az űrlapjaid és a hírlevélrendszered összekötésére. Pontos mezőtérképezést, rugalmas opt‑in kezelést és automatikus üdvözlő folyamatokat kapsz, mindezt egyetlen, WordPressen belüli, átlátható beállítási felületen. Ha hírlevél‑listát építesz JetFormBuilder‑űrlapokkal, ez az addon gyakorlatilag kötelező.