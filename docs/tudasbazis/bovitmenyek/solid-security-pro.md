---
title: "Solid Security Pro"
description: "Professzionális WordPress biztonsági bővítmény több rétegű védelemmel: bejelentkezés‑biztonság, sérülékenységkezelés, tűzfal és automatizált frissítések."
sidebar_label: "Solid Security Pro"
---

## Mi ez és milyen problémát old meg?

A Solid Security Pro egy több rétegű WordPress biztonsági bővítmény, amely a bejelentkezés megerősítésétől a sérülékenységek kezelésén át a tűzfalig és az automatizált frissítésekig lefedi a legkritikusabb kockázatokat. Célja, hogy megakadályozza a fiókátvételt és a brute force támadásokat, időben észlelje és csillapítsa a bővítmény/téma sérülékenységeket (akár gyártói javítás előtt is), és folyamatos rálátást adjon az eseményekre. A termék korábban iThemes Security Pro néven volt ismert; ma a SolidWP márkához tartozik.

## Fő funkciók és hogyan működnek

### Bejelentkezés- és fiókvédelem
- **2FA**: TOTP‑alapú alkalmazásokkal, e‑maillel vagy hardverkulccsal erősítheted a belépést.
- **Passkeys (WebAuthn)**: jelszó nélküli, biometrikus belépés (pl. Face ID, Touch ID, Windows Hello).
- **Passwordless és Magic Links**: ideiglenes, e‑mailes egyszeri belépő link, hasznos lockout után vagy mobilon.
- **Jelszópolitika**: erős jelszókövetelmény, jelszókorhatár, kiszivárgott jelszavak tiltása.

Mit jelent ez neked? Ha egy támadó megszerzi a jelszót, 2FA/passkeys nélkül nem jut be; ha egy felhasználó elfelejti a jelszót, Magic Linkkel gyorsan és biztonságosan visszaléphet.

### Brute force és botvédelem
- **Helyi és hálózati brute force védelem**: IP‑alapú lockoutok és tiltólisták.
- **CAPTCHA-k**: Turnstile, reCAPTCHA (v2, v3, Invisible) vagy hCaptcha a belépési és űrlapoknál.

Ez csökkenti az automata próbálkozások számát és a szerverterhelést.

### Tűzfal (WAF) és IP‑kezelés
- **Szabályok és naplók**: finomhangolható védelmi szabályok, részletes naplózás.
- **Virtuális foltozás**: valós idejű sérülékenység‑intelligencia alapján blokkolja a kihasználásokat, még hivatalos javítás előtt.
- **IP Management**: engedélyezett/tiltott IP listák külön kezelőfelületen.

A WAF a publikus támadási mintákat még a WordPress réteg előtt megfogja.

### Sérülékenység‑kezelés és Site Scan
- **Időzített vizsgálat**: a Pro kiadás gyakori (óránkénti) ellenőrzésekkel dolgozik.
- **Kockázati pontszám és teendők**: egyértelműen jelzi, mi kritikus és mit tegyél.
- **Káros listák ellenőrzése**: figyeli, hogy az oldal szerepel‑e ismert blokkolólistán.
- **Virtuális foltozás**: áthidaló védelem addig, amíg meg nem érkezik a gyártói frissítés.

### Verziókezelés
- **Automatikus frissítések**: WordPress, bővítmények, témák kezelése.
- **Auto Update if Fixes Vulnerability**: csak akkor frissít, ha ismert hibát javít.
- **Frissítési késleltetés**: beállítható csúsztatás a kompatibilitási kockázatok mérséklésére.
- **Elavult szoftver-védelem és „rogue installok” feltárása**: régi, elfelejtett telepítések felkutatása ugyanazon tárhelyen.

### Eszköz- és munkamenet‑védelem
- **Trusted Devices**: ismeretlen eszközön korlátozza az érzékeny műveleteket.
- **Session Hijacking Protection**: eszközváltás észlelésekor automatikusan kijelentkeztet.

### Naplózás és irányítópult
- **User Logging**: be‑ és kijelentkezések, bővítménykezelés és egyéb admin események naplózása.
- **Security Dashboard**: testreszabható kártyákkal valós idejű áttekintés a kockázatokról és a lockoutokról.

### CAPTCHA‑ökoszisztéma
- A legnépszerűbb szolgáltatókkal integrálható, és több űrlap‑típusra bekapcsolható (login, regisztráció, jelszó‑visszaállítás, hozzászólások).

### Haladó eszközök
- **Temporary Privilege Escalation**: időzített admin/editor jog kiosztása automatikus visszavonással.
- **File Change Detection**: fájlváltozások észlelése online hash‑összevetéssel a fals pozitívok csökkentésére.
- **Hardening**: rejtett login URL, adatbázis‑prefix módosítás, salts csere, szerver‑ és wp‑config szabályok.
- **Multisite és WP‑CLI**, valamint **központi menedzsment** több oldalhoz.

## Gyakorlati példák

- **Webshop**: kötelező 2FA a szerkesztőknek és adminoknak, passkeys a tulajdonosnak, CAPTCHA a checkout‑on, Site Scan + „Auto Update if Fixes Vulnerability”, WAF virtuális foltozással a 0‑day próbálkozások ellen.
- **Ügynökség**: több ügyféloldal központi kezelése, automatizált riportok, ideiglenes jogemelés alvállalkozóknak, lockoutok távoli feloldása.
- **Közösségi/membership**: Trusted Devices megfékezi a fiókátvételt, CAPTCHA a hamis regisztrációk ellen, Passwordless gyorsítja a belépést.
- **Régi telepítések**: verziókezeléssel és késleltetett frissítéssel biztonságosan hozod naprakésszé, közben feltárod az elfelejtett példányokat.

## Előnyök és értékajánlat

- **Kevesebb incidens, kisebb terhelés**: a brute force és botok visszaszorítása csökkenti a szerverköltséget.
- **Gyors reagálás sérülékenységekre**: virtuális foltozás és célzott frissítések minimális kieséssel.
- **Átláthatóság**: naplók és dashboard segítenek azonnal látni, mi történik.
- **Időmegtakarítás**: sablonos beállítások, automatizált frissítések és központi menedzsment.

## Rendszerkövetelmények és kompatibilitás

WordPress 6.5 vagy újabb, PHP 7.4 vagy újabb. Működik Apache/LiteSpeed (mod_rewrite) és NGINX környezetben. Multisite támogatott.

## Korlátok és megfontolások

- **Nem komplett malware‑eltávolító**: a fókusz a megelőzésen és a sebezhetőség‑kezelésen van. Ha fertőtlenítés kell, egészítsd ki dedikált szkennerrel.
- **Mentések**: a beépített megoldás adatbázisra fókuszál; teljes webhelymentéshez használj külön backup eszközt.
- **Lockout finomhangolás**: állítsd be ésszerűre, hogy valós felhasználókat ne zárj ki.

## Célközönség

- **KKV és e‑kereskedelem**: tranzakcióbiztonság, fiókvédelem, gyors javítások.
- **Ügynökségek és fejlesztők**: tömeges üzemeltetés, audit és ideiglenes hozzáférések.
- **Közösségi/membership oldalak**: fiókátvétel és spam regisztráció elleni kontroll.
- **Többszerzős blogok és vállalati oldalak**: erős hitelesítés, naplózás, hardening.

## Gyors bevezetési javaslat

1. Futtasd az onboardingot, válassz megfelelő **Site Template**‑et (pl. Ecommerce/Blog).
2. Kapcsold be: **2FA vagy Passkeys**, **Network Brute Force**, **CAPTCHA**.
3. Állítsd be a **Site Scan**‑t és a **Verziókezelést** „Auto Update if Fixes Vulnerability” móddal, 24–72 órás késleltetéssel.
4. Engedélyezd a **Trusted Devices** funkciót és az admin értesítéseket.
5. Nézd át a **WAF** automatizált beállításait, és konfiguráld az **IP‑listákat**.
6. Készíts biztonsági mentést, majd futtasd a **Hardening** ajánlásokat.

```yaml
# Minimum baseline (példa)
auth:
  passkeys: enabled
  two_factor: required_for_editors_and_admins
brute_force:
  network_protection: enabled
  captcha: login_registration
vuln_management:
  site_scan: hourly
  auto_update_if_fixes_vuln: true
  update_delay_hours: 48
waf:
  automated_virtual_patching: enabled
  ip_whitelist: [your.office.ip]
sessions:
  trusted_devices: enabled
logging_dashboard:
  user_logging: enabled
  security_dashboard: enabled
``` 

## Licencelés röviden

Elérhető ingyenes és **Pro** kiadásban. A Pro éves előfizetéses, egy webhelyre érvényes licenccel indul, és tartalmazza a fejlett sérülékenység‑ és tűzfal funkciókat (beleértve a virtuális foltozást).