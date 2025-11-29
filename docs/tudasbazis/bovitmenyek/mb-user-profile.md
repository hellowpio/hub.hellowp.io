---
title: "MB User Profile"
description: "Frontend regisztrációt, bejelentkezést és profil‑szerkesztést ad a WordPresshez, a Meta Box felhasználói mezőinek teljes támogatásával."
sidebar_label: "MB User Profile"
---

## Mi ez és milyen problémát old meg?

Az MB User Profile a Meta Box keretrendszer prémium kiterjesztése, amellyel a WordPress‑en teljes, testreszabható **frontend felhasználókezelést** valósíthatsz meg: regisztráció, bejelentkezés, jelszókezelés és profil‑szerkesztés, mindezt az admin felület érintése nélkül. A natív WordPress nem ad kész, rugalmas frontend űrlapokat – ezt pótolja ez a bővítmény. Beépítve tartalmazza az MB User Meta funkcióit, és a Meta Box alap bővítményre épül.

## Fő funkciók részletesen

### Frontend űrlapok és beágyazás
- **Regisztráció**, **bejelentkezés** és **profil‑szerkesztés** shortcode‑okkal helyezhető el bármely oldalra.
- A három űrlaphoz elérhető **Gutenberg‑blokk**, valamint **Elementor, Bricks és Oxygen** widget, így kattintgatva is beillesztheted.
- Művelet utáni **átirányítás** és űrlap‑feliratok testreszabása attribútumokkal.

### Meta Box mezők teljes támogatása
- Az űrlapok ismerik a Meta Box összes **mezőtípusát**, beleértve a **klónozható/ismételhető** mezőket is, így komplex profilokat építhetsz (például több telefonszám, galéria, kapcsolt bejegyzések).
- A WordPress alap user mezőinek (például **first_name**, **last_name**, **user_email**) szerkesztéséhez csak add meg ugyanazokat a mező‑ID‑kat a Meta Box csoportban.

### Biztonság és kényelmi funkciók
- **Google reCAPTCHA v3** a regisztrációs és bejelentkezési űrlapokon a spam ellen.
- **Jelszó‑erősség ellenőrzés** és beépített **elfelejtett jelszó/jelszó‑visszaállítás**.
- **E‑mailes regisztráció‑megerősítés** és opcionális **kényszerített jelszócsere** az első bejelentkezés után.
- Opcionális beállítások: **e‑mail mint felhasználónév**, **szerepkör hozzárendelés** vagy hozzáfűzés.

### Sablonozás és átirányítás
- Az értesítő **e‑mailek sablonjai** felülírhatók a témádban, így egységes arculatot tarthatsz.
- Az űrlapok után történő **visszairányítás** szűrővel módosítható, az űrlapok feliratai és azonosítói shortcode attribútumokkal szabhatók testre.

### Admin beállítások
- A Meta Box menüben külön **User Profile** oldal: itt kapcsolhatod a kényszerített jelszócserét, és kijelölheted az e‑mail megerősítés siker/hiba oldalait.

## Shortcode‑gyorstalpaló

### Regisztráció
```
[mb_user_profile_register
  id="user-fields"
  redirect="/profil"
  email_confirmation="true"
  role="subscriber"
  recaptcha_key="SITE_KEY"
  recaptcha_secret="SECRET_KEY"
  label_register="Regisztráció"]
```

Gyakori attribútumok: id (user mezőcsoport), redirect, email_confirmation, password_strength, email_as_username, role/append_role, recaptcha_key/secret, label_*, id_*.

### Bejelentkezés
```
[mb_user_profile_login
  redirect="/fiokom"
  recaptcha_key="SITE_KEY"
  recaptcha_secret="SECRET_KEY"]
```

Gyakori attribútumok: redirect, value_username, value_remember, label_*, id_*, recaptcha_key/secret.

### Profil‑szerkesztés
```
[mb_user_profile_info
  id="user-fields"
  user_id="123"
  redirect="/fiokom?updated=1"]
```

Az id kötelező (user típusú mezőcsoport), a user_id opcionális; ha nincs megadva, az aktuális felhasználó profilját szerkeszti.

## Gyakorlati példák

- **Tagoldal/közösségi platform**: Regisztráció és login oldalak, profil‑szerkesztés oldalon bio, érdeklődések, közösségi linkek, avatar feltöltés. A belépés után a felhasználó saját maga frissíti az adatait, nincs szükség admin belépésre.
- **Piactér/katalógus**: Eladói profilok cím‑ és kapcsolati mezőkkel, “ellenőrzött” státusz kapcsolóval, több telephely klónozható mezőként. Regisztrációnál automatikus szerepkör hozzárendelés.
- **Intranet/LMS**: Szervezet‑specifikus mezők (osztály, beosztás), egyszerű belépés, kötelező jelszócsere az első login után, és saját jelszó‑visszaállítás.

## Fejlesztői bővíthetőség

Hasznos hookok:
- **rwmb_profile_redirect** – sikeres művelet utáni URL módosítása
- **rwmb_profile_before_process / after_process** – feldolgozás előtt/után
- **rwmb_profile_validate** – egyedi validáció
- **rwmb_profile_insert_user_data / update_user_data** – adatmódosítás létrehozás/frissítés előtt
- **rwmb_profile_before_save_user / after_save_user** – mentés előtt/után
- Mezők listájának módosítása: **rwmb_profile_register_fields**, **rwmb_profile_login_fields**, **rwmb_profile_info_fields**

Ezekkel finomhangolhatod az űrlapok mezőit, validációt és a mentési folyamatot.

## Bevált gyakorlatok és sajátosságok

- **Fájl/kép feltöltés**: Feltöltéshez a felhasználónak be kell jelentkeznie, és rendelkeznie kell upload_files jogosultsággal; ellenkező esetben használj egyszerű file/image mezőt és engedélyezett feltöltési folyamatot.
- **Gyorsítótárazás**: Az űrlapok nonce mezői miatt az ilyen oldalakat ne tedd teljes oldal‑cache alá. Legalább böngésző‑oldali és statikus cache kivétele javasolt az űrlapokat tartalmazó oldalaknál.
- **Stílus**: Alap Meta Box CSS‑t használ. A téma dizájnjához gyakran érdemes saját CSS‑t adni.

## Előnyök és értékajánlat

- **Kódolás helyett konfiguráció**: Nem kell saját űrlap‑, validáció‑ és mentési logikát írnod – a Meta Box mezőidet a plugin automatikusan kezeli frontendről.
- **Biztonság beépítve**: reCAPTCHA, jelszó‑policy és e‑mail megerősítés csökkenti a spamet és növeli a fiókbiztonságot.
- **Gyors beágyazás**: Shortcode, Gutenberg‑blokk és page builder widgetek – percek alatt üzembe helyezheted.
- **Rugalmasság**: Egyszerű tagoldaltól a komplex piactérig skálázható, klónozható mezőkkel és többlépéses profilokkal.

## Kinek ajánlott?

- **Membership és közösségi oldalak** készítőinek, akik frontend profilkezelést akarnak admin nélkül.
- **Piactereknek, katalógusoknak**, ahol eladó/szolgáltató profilokat és szerepköröket kell kezelni.
- **Oktatási és vállalati portáloknak**, ahol belső felhasználók adatait kell biztonságosan karbantartani.
- **Ügynökségeknek és fejlesztőknek**, akik időt akarnak nyerni és megbízható, bővíthető megoldást keresnek.
- **No‑code/builder felhasználóknak**, akik blokkokkal és widgetekkel dolgoznak.

Röviden: ha frontend regisztrációt, belépést és profi profil‑szerkesztést szeretnél a Meta Box erejével, az MB User Profile gyors, biztonságos és fejlesztőbarát választás.