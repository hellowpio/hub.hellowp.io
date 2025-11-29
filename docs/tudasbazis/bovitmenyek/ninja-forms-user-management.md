---
title: "Ninja Forms - User Management"
description: "Prémium Ninja Forms kiegészítő, amellyel regisztrációt, bejelentkezést, profilfrissítést és beküldés-hozzáférést adhatsz kódolás nélkül."
sidebar_label: "Ninja Forms - User Management"
---

## Mi ez és milyen problémát old meg?

A Ninja Forms – User Management egy prémium add-on, amely a WordPress felhasználókezelést hozza be a Ninja Forms űrlapjaiba. Segítségével a látogatók a frontendről regisztrálhatnak, bejelentkezhetnek és frissíthetik profiljukat, te pedig szerepkörök szerint szabályozhatod, ki láthatja vagy szerkesztheti a Ninja Forms beküldéseket. Ezzel jelentősen csökkented az adminisztrációs terhet, egységes, testreszabott felhasználói élményt adsz, és kódolás nélkül valósítasz meg haladó jogosultságkezelést.

## Fő funkciók és hogyan működnek

### Előre kész űrlapsablonok és műveletek
- **Sablonok**: Regisztráció, Bejelentkezés, Profil frissítése.
- **Műveletek (actions)**: Register User, Login User, Update Profile.
A sablonok egy kattintással létrehozhatók, a hozzájuk tartozó műveletek pedig elvégzik a háttérfolyamatokat (felhasználó létrehozása, beléptetés, profiladatok mentése).

### Testreszabható regisztráció
- **Mező-hozzárendelés**: az űrlap mezőit hozzákötheted a WordPress attribútumokhoz (felhasználónév, email, jelszó).
- **Szerepkör-kiosztás**: regisztrációkor megadhatod a WordPress szerepkört (pl. Subscriber, Editor, vagy egyedi).
- **Haladó opciók**: automatikus beléptetés sikeres regisztráció után; belépési adatok kiküldése emailben véletlen jelszóval.

### Bejelentkező űrlap bárhol
A bejelentkező sablont bármely oldalra, bejegyzésbe vagy widget-területre beillesztheted. A felhasználónév lehet email is. Az űrlap alapértelmezetten csak kijelentkezett látogatóknak látszik, így nem zavarja a már bejelentkezett felhasználókat.

### Jelszó-visszaállítás és merge tagek
Egyszerűen hozzáadhatod az “Elfelejtett jelszó” hivatkozást egy HTML mezőben:

```
{user_management:password_reset}
```

További merge tagek is elérhetők (pl. kijelentkezés), amelyeket rugalmasan beépíthetsz az űrlapfolyamataidba.

### Profilfrissítő űrlap
A bejelentkezett felhasználók a frontendről módosíthatják adataikat (email, jelszó, egyéb mezők). Így nem kell az admin felületen turkálniuk, gyors és biztonságos önkiszolgáló élményt kapnak.

### Egyedi felhasználói meta kezelése
A regisztráción és profilfrissítésen át következetesen kezelheted az extra adatokat. A mezőket **Custom Meta** kulcsokhoz társítod (pl. company, member_id), és ezek az értékek a felhasználó meta adatai közé kerülnek. Ugyanezekkel a kulcsokkal az Update Profile űrlap automatikusan tölti és frissíti az adatokat.

### Beküldések hozzáféréskezelése (User Access)
A Ninja Forms > User Access felületen szerepkörönként állíthatod:
- **View** és **Edit** jogok, külön a saját (**Owner**) és mások (**Others**) beküldéseire.
- Az engedélyek egymásra épülnek: beállíthatod, hogy valaki csak a saját beküldéseit lássa/szerkessze, míg más szerepkörök mindent elérhetnek.
- Nem admin szerepkörök esetén kapcsold ki a régi beküldés-kezelő nézetet (Legacy Submissions Page), hogy az új jogosultságok érvényesüljenek.

## Gyakorlati példák

- **Tagfelvétel egyesületnél**: regisztrációs űrlap extra mezőkkel (tagszám, osztály), szerepkör automatikus “Subscriber”, sikeres mentés után auto-login és belépési adatok emailben.
- **Szerkesztőségi munkafolyamat**: az “Editor” szerepkör láthat és szerkeszthet minden beküldést, a “Contributor” csak a sajátjait. Így delegálhatod a beküldés-kezelést admin jog nélkül.
- **Landing oldali login box**: bejelentkező űrlap beágyazva, alatta jelszó-reset hivatkozás a merge taggel. Csak kijelentkezett látogatóknak jelenik meg.
- **Ügyfélprofil frissítés**: “Profil frissítése” űrlap a fiókoldalon, amely a korábban rögzített egyedi meta adatokat is tölti és menti (pl. számlázási cég, adószám).

## Első lépések röviden

1. **Telepítés**: szükséged van a Ninja Forms alap bővítményre, majd telepítsd és aktiváld a User Management add-ont.
2. **Regisztrációs űrlap**: hozz létre “Register User” sablont; az Emails & Actions alatt állítsd a mező-hozzárendeléseket és a szerepkört; kapcsold be az automatikus beléptetést vagy az emailes értesítést, ha kell.
3. **Bejelentkezés**: generáld a “Login Form” sablont; igény szerint adj HTML mezőt a jelszó-reset linkhez:
   ```
   {user_management:password_reset}
   ```
4. **Profilfrissítés**: készíts “Update Profile” űrlapot; a regisztrációnál használt Custom Meta kulcsokat itt is add meg, hogy az adatok átjárhatók legyenek.
5. **Beküldés-jogosultságok**: a User Access felületen szerepkörönként állítsd a View/Edit jogokat Owner/Others bontásban; kapcsold ki a Legacy Submissions Page-t nem adminoknál.
6. **Beágyazás**: helyezd el az űrlapot bármely oldalra a rövidkóddal:
   ```
   [ninja_form id="123"]
   ```

## Előnyök és értékajánlat

- **Időmegtakarítás**: a felhasználók maguk regisztrálnak és frissítik profiljukat, kevesebb adminisztráció.
- **Egységes UX**: a regisztráció/bejelentkezés/profil ugyanabban a dizájnban fut, mint az oldalad.
- **Finomhangolt jogosultságok**: pontosan meghatározhatod, ki mit láthat vagy szerkeszthet.
- **Kódolás nélkül**: sablonok, műveletek és merge tagek; gyors bevezetés, alacsony karbantartási költség.
- **Biztonság és kontroll**: szerepkör-alapú hozzáférés, csak kijelentkezetteknek látható login/reg, robotvédelem integrálható (pl. reCAPTCHA).

## Kinek ajánlott?

- **Magazinok, szerkesztőségek**: szerepkörös beküldés-kezelés, önkiszolgáló profil.
- **Oktatási portálok és zárt közösségek**: belépés, tagsági profiladatok, testreszabott meta.
- **Egyesületek, klubok**: tagsági regisztráció és adatfrissítés frontendről.
- **Ügynökségek, kivitelezők**: gyorsan szállítható, karbantartható felhasználókezelés ügyfélprojektekben.

## Megjegyzések és bevált gyakorlatok

- A regisztrációs és bejelentkezési űrlapok csak kijelentkezett látogatóknak látszanak – teszteléskor jelentkezz ki.
- Tartsd naprakészen a bővítményt, és tegyél robotvédelmet a nyilvános űrlapokra.
- Támogatás és licenc: előfizetéses modell, hivatalos ügyfélszolgálat munkanapokon, pénzvisszatérítési garancia elérhető.