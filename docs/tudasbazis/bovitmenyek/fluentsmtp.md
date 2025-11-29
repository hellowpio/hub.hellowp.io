---
title: "FluentSMTP"
description: "Ingyenes, nyílt forráskódú WordPress bővítmény a megbízható e‑mail kézbesítéshez, több szolgáltatóval, okos útvonalválasztással és naplózással."
sidebar_label: "FluentSMTP"
---

## Mi ez és milyen problémát old meg?

A FluentSMTP egy ingyenes, nyílt forráskódú WordPress bővítmény, amely a WordPress által küldött leveleket megbízható e‑mail szolgáltatókon (SMTP vagy natív API) keresztül továbbítja. Ezzel kiváltja a tárhelyek bizonytalan PHP mail funkcióját, így az értesítések, rendelés‑visszaigazolások, jelszó‑emlékeztetők és űrlapértesítések nem késnek, nem vesznek el és kisebb eséllyel kerülnek spambe.

Röviden: a bővítmény átveszi a WordPress wp_mail hívásait, és a beállított szolgáltatón keresztül küldi el őket – gyorsabban, biztonságosabban és nyomon követhetően.

## Hogyan működik?

- A WordPressben hívott `wp_mail()` függvényt a FluentSMTP „elfogja”.
- Az általad beállított kapcsolatok (mailerek) közül kiválasztja a megfelelőt a feladói cím vagy domain alapján.
- Natív API‑t (pl. Amazon SES, Google, Microsoft, SendGrid, Mailgun, Postmark, Brevo, SparkPost, SMTP2GO, Elastic Email, Zoho ZeptoMail) vagy klasszikus SMTP‑t használ.
- Hiba esetén automatikusan életbe léphet egy tartalék (fallback) kapcsolat.

Példa a WordPress oldali küldésre (amit a FluentSMTP átvesz):
```php
wp_mail('ugyfel@pelda.hu', 'Rendelésed megérkezett', 'Köszönjük a vásárlást!');
```

## Fő funkciók, érthetően

- **Többes kapcsolat és okos routing**
  - Egyszerre több szolgáltatót állíthatsz be. Például a tranzakciós levelek menjenek egy olcsó és gyors szolgáltatón, a marketing kampányok pedig egy másikon.
  - A bővítmény a feladói cím vagy domain alapján automatikusan a megfelelő csatornára irányít.

- **Tartalék (fallback) kapcsolat**
  - Ha az elsődleges szolgáltató hibázik vagy lassú, a rendszer automatikusan a tartalékra vált, hogy a levelek akkor is kimenjenek.

- **Natív API‑integrációk és SMTP**
  - Több nagy szolgáltatóhoz közvetlen API‑kapcsolat érhető el (gyorsabb és stabilabb), vagy használhatsz bármilyen SMTP‑t is.

- **Email‑naplózás és jelentések**
  - Láthatod minden kimenő üzenet státuszát, a szolgáltató válaszát, a fejléceket és csatolmányokat.
  - Hibás üzeneteket újraküldhetsz, napi/összesített statisztikát nézhetsz, és opcionálisan csak a hibákat naplózhatod.

- **Valós idejű hibariasztások**
  - Sikertelen kézbesítésnél azonnali értesítéseket kérhetsz Slackre, Telegramra vagy Discordra. Így nem napokkal később derül ki egy probléma.

- **Migrációs segéd**
  - Egy kattintással importálhatod a beállításokat népszerű SMTP bővítményekből, így gyors a váltás.

- **Email‑szimuláció és multipart**
  - Teszteléshez kapcsolhatsz szimulált kézbesítést (nem megy ki tényleges email).
  - A bővítmény automatikusan plain‑text részt ad a HTML levelekhez a jobb kézbesíthetőségért.

- **Multisite támogatás**
  - Hálózati környezetben is működik, webhelyenként külön konfigurációval.

- **Biztonságos kulcskezelés**
  - API‑kulcsok/SMTP adatok titkosítva tárolódnak, és opcionálisan a wp-config.php‑ban is megadhatók állandókkal.
  - Google és Microsoft integrációknál OAuth 2.0 használat.

Példa wp-config alapú beállításra (a konkrét konstansok a választott driver dokumentációja szerint változnak):
```php
// Példa – illusztratív! A tényleges konstansok a választott szolgáltatótól függnek.
define('FLUENTSMTP_USE_ENV_CONFIG', true);
// define('FLUENTSMTP_PROVIDER_API_KEY', 'itt-az-api-kulcsod');
// define('FLUENTSMTP_DEFAULT_FROM', 'no-reply@domained.hu');
```

## Gyakorlati példák

- **Webáruház (WooCommerce):**
  - Rendelés‑ és számlaértesítések menjenek egy tranzakciós szolgáltatón át.
  - Hírlevelek és promóciók egy másik, reputációban erős szolgáltatón.
  - Ha az elsődleges szolgáltató kiesik, a fallback átveszi a forgalmat.

- **Űrlapok és ügyfélszolgálat:**
  - Contact Form 7 / Gravity Forms / Elementor Forms értesítések stabilan megérkeznek.
  - A naplóban visszanézheted, hogy az ügyfél melyik időpontban kapta meg az üzenetet, szükség esetén újraküldheted.

- **Ügynökség és fejlesztői környezet:**
  - Stagingen email‑szimulációval tesztelsz, így nem küldesz ki valós értesítéseket.
  - Slack riasztás fejlesztés közben, ha valami elromlik.

## Előnyök és értékajánlat

- **Kézbesíthetőség**: nagy szolgáltatók infrastruktúráján küldesz, nem a tárhely bizonytalan PHP mail funkcióján.
- **Láthatóság**: részletes naplók, újraküldés, statisztikák – mindig tudod, mi történt a levelekkel.
- **Rugalmasság**: több kapcsolat, okos routing, fallback – kontroll a költség és megbízhatóság felett.
- **Idő- és pénzmegtakarítás**: kevesebb ügyfélszolgálati panasz, gyorsabb hibakeresés, kevesebb elveszett email.
- **Ingyenes és nyílt forráskódú**: nincs licencdíj, közösségi támogatás, átlátható működés.

## Kinek ajánlott?

- **Webáruház tulajdonosoknak**: tranzakciós levelek biztos kézbesítése.
- **Marketingeseknek**: hírlevelek külön útvonalon, jobb reputációval.
- **Űrlapokat használóknak**: minden értesítés megy, naplózható és visszakövethető.
- **Ügynökségeknek és fejlesztőknek**: több környezet, több szolgáltató, riasztások és szimuláció.
- **Multisite hálózatoknak**: webhelyenkénti finomhangolás.

## Telepítés és gyors beállítás

1. Telepítsd és aktiváld a bővítményt a bővítménykezelőből.
2. Indítsd el a varázslót, válassz szolgáltatót (pl. API‑s driver vagy „Other SMTP”).
3. Add meg az API‑kulcsot vagy az SMTP adatokat (host, port, titkosítás, felhasználó/jelszó).
4. Állíts be alapértelmezett és tartalék kapcsolatot.
5. Kapcsold be a naplózást és állíts automatikus törlést.
6. Konfiguráld a hibariasztásokat (Slack/Telegram/Discord).
7. Küldj teszt e‑mailt.

## Biztonság és best practice

- Tárold a kritikus kulcsokat a wp-config.php‑ban, különösen klónozás vagy költöztetés esetén.
- Kapcsold be az email‑naplók automatikus törlését, hogy az adatbázis ne hízzon.
- Használj legalább két kapcsolatot (alapértelmezett + fallback).
- Állíts be domain hitelesítést a választott szolgáltatónál (SPF/DKIM) a jobb kézbesíthetőséghez.
- Fejlesztői/staging környezetben használd az email‑szimulációt.

## Kompatibilitás

A FluentSMTP minden olyan bővítményre hat, amely a WordPress `wp_mail` API‑t használja, így széles körben kompatibilis űrlap‑ és e‑kereskedelmi megoldásokkal. Multisite környezetben webhelyenként konfigurálható.

Ezzel a bővítménnyel pontosan megfogod, mi történik a leveleiddel: megbízhatóan kimennek, nyomon követhetők, és hiba esetén azonnal tudsz reagálni. Egyszerre gyors, rugalmas és ingyenes megoldás a WordPress e‑mailjeihez.