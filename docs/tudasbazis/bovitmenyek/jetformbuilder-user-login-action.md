---
title: "JetFormBuilder User Login Action"
description: "JetFormBuilder Pro kiegészítő, amellyel kódolás nélkül, űrlapból jelentkeztetheted be a felhasználókat, és felépítheted a teljes login + jelszó‑visszaállítás folyamatot."
sidebar_label: "JetFormBuilder User Login Action"
---

## Mi ez, és milyen problémát old meg?

A **User Login Action** a JetFormBuilder Pro egyik kiegészítője, amely lehetővé teszi, hogy egy tetszőleges JetFormBuilder űrlap beküldése után azonnal **bejelentkeztesd** a felhasználót a WordPress natív hitelesítésével. Így elfelejtheted a wp-login felületét és a kódolást igénylő egyedi megoldásokat: saját, arculathoz illesztett bejelentkezési űrlapot hozhatsz létre, egy helyen kezelve a **login**, a **„Remember me”**, a **jelszó‑visszaállítás** és az opcionális **átirányítás** lépéseit.

## Hogyan működik?

Az űrlapodhoz mezőket adsz (felhasználónév/e‑mail és jelszó), majd a Post Submit Actions részben bekapcsolod a **User Login** akciót, és összerendeled a mezőket. A beküldés után a bővítmény a WordPress szabványos autentikációját használja a bejelentkeztetéshez. Ha szükséged van rá, kapcsolhatsz **„Remember me”** mezőt (hosszabb munkamenet), illetve **secure cookie** opciót (HTTPS esetén). Az átirányítást külön **Redirect to Page** akcióval állíthatod be.

## Fő funkciók részletesen

- **Bejelentkeztetés űrlapból**  
  A „Login” és „Password” mezőket kijelölöd a User Login akcióban. A bővítmény ellenőrzi a hitelesítő adatokat, és siker esetén bejelentkezteti a felhasználót – mindezt a saját űrlapodon, saját dizájnnal.

- **„Remember me” hosszabb munkamenettel**  
  Csatlakoztathatsz egy jelölőnégyzetet, amely bekapcsolása esetén a rendszer hosszabb (tipikusan 14 napos) bejelentkezve maradást biztosít. Nélküle a munkamenet rövidebb (tipikusan 2 napos).

- **Secure cookie támogatás**  
  HTTPS alatt engedélyezheted a **secure cookie** beállítást, ami növeli a hitelesítési sütik biztonságát.

- **Jelszó‑visszaállítás űrlapból**  
  Használhatod a dedikált **Reset Password Fields** és **Reset Password Button** blokkokat. A kiegészítő kezeli az időkorlátos visszaállítási tokent, és testreszabható reset e‑maillel küldi ki a hivatkozást.

- **Render States és események**  
  A **Render States** segítségével egy űrlapon belül külön „Login” és „Reset password” nézetet építhetsz. Az **Events** révén meghatározhatod, mely akciók fussanak az adott állapotban (például alapállapotban a login, a reset nézetben a reset‑e‑mail küldés).

- **Kombinálás regisztrációval**  
  A **Register User** akcióval egyetlen űrlapon intézheted a regisztrációt és a bejelentkezést, akár állapotváltó gombokkal (Change Render State) váltva a nézetek között.

- **Sokoldalú megjelenítés**  
  Az űrlapot elhelyezheted Gutenbergben (JetForm blokk), Elementorban (JetForm widget) és Bricksben (JetForm elem).

## Gyakorlati példák

- **Egyedi login oldal**  
  Lecseréled a wp-login felületet egy brandelt oldalra. A felhasználó ott adja meg az adatait, siker esetén a saját fiók oldalára irányítod.

- **Tag- és előfizetéses oldalak**  
  Zárt tartalmak előtt megjeleníted a login űrlapot; a „Remember me” csökkenti az ismételt belépések számát.

- **E‑kereskedelem**  
  Checkout előtt gyors beléptetés, majd visszairányítás a kosár/checkout oldalra.

- **„Elfelejtett jelszó” ugyanazon az űrlapon**  
  A Login és Reset nézet között váltó gombbal biztosíthatod a folyamatos élményt, a felhasználó nem hagyja el az oldalad.

## Telepítés és alapbeállítás

1. **Előfeltétel:** a JetFormBuilder alapbővítmény aktív.  
2. **Addon telepítése:** WordPress admin > JetFormBuilder > Addons > User Login Action > Install > Activate.  
3. **Űrlap létrehozása:** add hozzá a Login/e‑mail, Password, opcionálisan a Remember checkbox mezőket.  
4. **Post Submit Actions:** válaszd a **User Login** akciót, rendeled a mezőket, állítsd be a secure cookie‑t, ha HTTPS‑en vagy.  
5. **Átirányítás:** adj hozzá **Redirect to Page** akciót (például fiókoldalra).  
6. **Jelszó‑visszaállítás (opcionális):** illeszd be a Reset Password blokkokat, állítsd be a reset e‑mailt, és kösd az akciókat a megfelelő Render State‑ekhez.

Példa akciók beállítására:

```
Post Submit Actions
1) User Login
   - Login Field: {user_login_or_email}
   - Password Field: {user_password}
   - Remember Field: {remember_me}
   - Secure Cookie: on
2) Redirect to Page
   - Target: /fiokom
```

Példa állapotok és események:

```
Render States:
- default: Login
- reset: Reset

Events:
- ON.DEFAULT.STATE -> User Login
- ON.RESET.STATE   -> Reset Password, Send Email
- ON.SUCCESS       -> Redirect to Page
```

## Előnyök és értékajánlat

- **Kódmentes bejelentkezés:** nincs szükség egyedi PHP endpointokra.  
- **Egységes UX:** login, remember me, jelszó‑visszaállítás és akár regisztráció is egy űrlapon.  
- **Biztonság és kontroll:** secure cookie HTTPS alatt, kezelhető munkamenet‑időtartam.  
- **Rugalmas folyamatvezérlés:** akciók és események finomhangolása, feltételes működés.  
- **Ökoszisztéma‑előny:** ugyanazzal az űrlapmotorral kezeled a regisztrációt, profilfrissítést, e‑kereskedelmi űrlapokat.

## Kinek ajánlott?

- **Tagolt vagy előfizetéses oldalak** üzemeltetőinek, akik egyedi login élményt szeretnének.  
- **Webáruházaknak**, ahol a checkout előtti zökkenőmentes belépés fontos.  
- **Ügynökségeknek és fejlesztőknek**, akik skálázható, no‑code űrlapalapú auth‑folyamatot szeretnének.  
- **Piactereknek és portáloknak**, ahol a frontend login/regisztráció kritikus a felhasználói élményhez.

## Fontos megjegyzések és korlátozások

- A **User Login** akció önmagában nem irányít át; ehhez adj hozzá **Redirect to Page** akciót.  
- A kiegészítő a **WordPress natív hitelesítését** használja.  
- A **secure cookie** csak **HTTPS** mellett javasolt.  
- A User Login Action a **JetFormBuilder Pro** részeként érhető el.

## Kapcsolódó JetFormBuilder funkciók

- **Register User** akció új felhasználók létrehozásához, akár azonnali bejelentkeztetéssel.  
- **Render States** és **Change Render State** gomb a Login/Reset (és igény szerint Regisztráció) nézetek közti váltáshoz.  
- **Gutenberg, Elementor, Bricks** támogatás az űrlap elhelyezéséhez.

Ezzel a kiegészítővel teljes, professzionális bejelentkezési és jelszó‑visszaállítási folyamatot építhetsz fel – gyorsan, biztonságosan és kódolás nélkül.