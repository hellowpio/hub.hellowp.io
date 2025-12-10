---
title: "LearnDash LMS - GravityForms Integration"
description: "Hivatalos LearnDash kiegészítő a Gravity Forms és a LearnDash összekapcsolásához: egyedi regisztráció, fizetés és automatikus kurzusbeiratás."
sidebar_label: "LearnDash LMS - GravityForms Integration"
---

## Mi ez és milyen problémát old meg?

A LearnDash LMS – Gravity Forms Integration egy hivatalos, ingyenes kiegészítő, amely összeköti a **Gravity Forms** űrlapkezelőt a **LearnDash** LMS-sel. Segítségével teljesen testreszabott jelentkezési/regisztrációs űrlapokat készíthetsz, és az űrlap beküldése (és fizetés) után a felhasználókat automatikusan **beirathatod** egy vagy több kurzusba. A megoldás azoknak szól, akik a LearnDash alap regisztrációs folyamata helyett rugalmas, több-lépéses, feltételes és fizetésre alkalmas űrlapokat akarnak használni – kódolás nélkül.

## Hogyan működik? (röviden)

- A Gravity Forms űrlapján összegyűjtöd a szükséges adatokat.
- A Gravity Forms User Registration feed létrehozza/kezeli a **WordPress-felhasználót**.
- Ha fizetés szükséges, azt a Gravity Forms fizetési add-onjai intézik.
- Sikeres beküldés/fizetés után az integráció automatikusan **beiratja** a felhasználót a kiválasztott LearnDash kurzus(ok)ba.

```text
Űrlap beküldése → (Fizetés, ha van) → WP felhasználó létrehozása → Automatikus kurzusbeiratás
```

A LearnDash oldalon beállítható a **Paid Form** opció, ami garantálja, hogy a beiratás csak sikeres fizetés után történjen. Fizetés nélküli (ingyenes) űrlapnál a beiratás azonnali.

## Fő funkciók, érthetően

- **Egyedi regisztrációs űrlapok**: Tetszőleges mezőkkel (név, e-mail, szervezet, hozzájárulások), több lépéssel és feltételes logikával szabhatod testre a jelentkezést. Nincs kötött mezőkészlet, mindent te határozhatsz meg.
- **Automatikus beiratás több kurzusba**: Egy űrlaphoz több **kurzust** is rendelhetsz. A beküldő felhasználó mindegyikhez azonnal hozzáfér, amint a folyamat sikeresen lezárult.
- **WordPress-felhasználó létrehozása**: A User Registration feedben beállítod az akciót (Create user), és mezőnként megadod a megfeleltetést (felhasználónév, jelszó, szerepkör, profilmezők). Az űrlapadatok bekerülnek a felhasználói fiókba.
- **Fizetés kezelése**: A Gravity Forms fizetési add-onjai (pl. Stripe, PayPal, Authorize.net) bonyolítják a tranzakciót. A LearnDash **Paid Form** jelölésével biztosíthatod, hogy a hozzáférés csak kifizetés után legyen aktív.
- **“Closed” árkategória támogatása**: A LearnDash kurzusoldalán a **Closed** opcióval kikapcsolhatod a natív “Take this Course” gombot, és a saját Gravity Forms alapú funnelre irányíthatod a jelentkezőket.

## Telepítés és beállítás (gyors áttekintés)

Szükséges:
- Aktív **LearnDash**.
- **Gravity Forms** és a **User Registration** add-on (fizetéshez a megfelelő fizetési add-onok).

Lépések:
1. Telepítsd és aktiváld a Gravity Forms-t, kapcsold be a User Registration add-ont.
2. A WordPress adminban, a LearnDash LMS > Add-Ons menüben telepítsd/aktiváld a Gravity Forms integrációt.
3. Hozz létre egy űrlapot (legalább e-mail mezővel).
4. Az űrlaphoz készíts **User Registration** feedet: állítsd “Create user”-re, térképezd fel a mezőket, válassz szerepkört.
5. Ugyanitt a **LearnDash beállításoknál** jelöld ki a kurzus(oka)t, amelyekbe automatikus beiratás történjen.
6. Fizetős folyamatnál konfiguráld a kívánt fizetési add-ont, és a LearnDash oldalon jelöld az űrlapot **Paid Form**-ként. A kurzusnál használd a **Closed** árkategóriát, és irányíts a saját űrlapodra.

## Gyakorlati példák

- **Ingyenes gyors regisztráció**: Egy rövid űrlappal e-mail + név bekérése után azonnal hozzáférést adsz a bevezető kurzushoz. A felhasználói fiók automatikusan létrejön, te pedig plusz adatokat is gyűjthetsz (pl. érdeklődési kör).
- **Fizetős kurzuscsomag**: Egy űrlapon több kurzust jelölsz ki csomagként. A vevő Stripe-on fizet, a fizetés visszaigazolása után azonnal beiratódik mindegyik tanfolyamra.
- **Vállalati onboarding**: Többlépéses űrlap cégnévvel, beosztással és hozzájárulásokkal. Feltételes logikával külön ágat adhatsz a menedzsereknek, és őket több kurzushoz rendeled hozzá egyszerre.

## Előnyök és értékajánlat

- **Maximális rugalmasság**: Nem kell beérned a kötött regisztrációval; mindent az űrlap logikájára építhetsz.
- **Kevesebb egyedi fejlesztés**: Kódolás nélkül érsz el bonyolult folyamatokat (feltételek, több lépés, extra mezők).
- **Zökkenőmentes fizetés → hozzáférés**: A **Paid Form** és a fizetési add-onok együtt biztosítják a helyes sorrendet.
- **Idő- és költségmegtakarítás**: Egy csatornában kezeled a jelentkezést, a fizetést és a beiratást.
- **Márkaélmény**: Az űrlap kinézete és folyamata hozzád igazítható, nem kell külső checkoutra támaszkodnod.

## Korlátok és megjegyzések

- Az integráció a **User Registration** mechanizmusára épül. Csoportokhoz való automatikus hozzárendelés nincs külön kiemelve; ha erre van igény, érdemes automatizáló eszközöket bevonni.
- A fizetési add-onok használatához a Gravity Forms megfelelő licencére lesz szükséged.
- Nem teljes értékű “kosár” rendszer; inkább űrlapalapú jelentkezési/checkout folyamat.

## Kinek ajánlott?

- **Online akadémiáknak és képzési vállalkozásoknak**, akik egyedi jelentkezést és csomagkurzusokat szeretnének.
- **Vállalatoknak/HR-csapatoknak**, ahol onboarding során több és összetett adatot kell gyűjteni, eltérő jogosultságokkal.
- **Ügynökségeknek és fejlesztőknek**, akik ügyfeleiknek testreszabott, mégis gyorsan kivitelezhető LearnDash beiratási folyamatot építenének.
- **Nonprofitoknak és programgazdáknak**, akik ingyenes vagy részben támogatott kurzusokra akarnak adatgazdag jelentkezést.

## Rövid összegzés

A LearnDash LMS – Gravity Forms Integration akkor a legjobb választás, ha a kurzusjelentkezést teljesen egyedi, űrlapalapú folyamattá akarod alakítani. Egy helyen kezelheted a regisztrációt, a fizetést és az automatikus kurzusbeiratást, miközben a Gravity Forms eszköztára adja a rugalmasságot és a skálázhatóságot.