---
title: "Gravity SMTP"
description: "WordPress‑hez készült SMTP/API e‑mail küldő bővítmény, amely kiváltja a PHP mail() hívást, javítja a kézbesíthetőséget, és központi naplózást, jelentéseket ad."
sidebar_label: "Gravity SMTP"
---

## Bevezetés: mire való és milyen problémát old meg?

A Gravity SMTP egy WordPress bővítmény, amely az összes kimenő e‑mailedet megbízható SMTP‑ vagy API‑alapú szolgáltatókon keresztül küldi. Kiváltja a WordPress alapértelmezett PHP mail() küldését, így elkerülöd a spambe landolást, a láthatatlan küldési hibákat és a nyomkövethetetlenséget. Célja, hogy jobb kézbesíthetőséget, részletes naplózást és átlátható riportokat adjon – a Gravity ökoszisztémába illesztve.

## Hogyan működik?

A bővítmény „elfogja” a WordPress wp_mail() hívásait, a küldési kérést naplózza, majd a beállított szolgáltató (pl. SendGrid, Amazon SES, Postmark stb.) felé továbbítja. Nem a Gravity szerverein keresztül kézbesít, hanem közvetlenül a választott szolgáltatóhoz csatlakozik. Fontos: pár bővítmény saját küldőt használ (nem wp_mail), ezek leveleit a Gravity SMTP nem kezeli.

Például egy alap WordPress‑küldés már a Gravity SMTP útvonalán megy:
```
wp_mail( get_option( 'admin_email' ), 'SMTP teszt', 'Ha megérkezett, a Gravity SMTP működik.' );
```

## Fő funkciók és mit jelentenek a gyakorlatban

### Széleskörű integrációk
Közvetlen integráció népszerű szolgáltatókkal: többek között Amazon SES, SendGrid, Mailgun, Postmark, Brevo, Gmail/Google Workspace, Microsoft 365/Outlook, MailerSend, Mailjet, Elastic Email, Mailchimp Transactional, Resend, SMTP2GO, SparkPost, Zoho Mail, valamint **Custom SMTP** bármely szabványos SMTP‑hez. Ezzel a saját infrastruktúrádhoz, szabályzataidhoz illesztheted a küldést.

### Elsődleges és tartalék szolgáltató (failover)
Beállíthatsz egy **Primary** és egy **Backup** integrációt. Ha az elsődleges hibázik (pl. kvóta vagy elérhetetlenség), a küldés automatikusan a tartalékra esik vissza. Beépített **tesztküldéssel** azonnal validálhatod a beállításokat.

### E‑mail naplózás
Alapértelmezetten aktív, és kereshető listában láthatod a tárgyat, címzetteket, időbélyeget, állapotot, hibaüzeneteket. Opcionálisan elmentheted a **levéltörzset** és a **csatolmányokat** is; a megőrzési idő (retention) állítható. A naplók a WordPress adatbázisba kerülnek, a csatolmányok az uploads/gravitysmtp/attachments mappába.

### Hibakeresési (debug) napló
Kapcsolható **debug log**, amely a kézbesítési folyamat részleteit rögzíti (hitelesítés, válaszkódok, hálózati hibák). Külön megőrzési idővel működik, így a hibaelhárítás céljaira hatékony.

### Megnyitás‑követés (kísérleti)
Bekapcsolható **open tracking**, amely láthatatlan képponttal naplózza az első megnyitást. Segít megérteni az elérést, de kísérleti funkció, és extra kéréseket generálhat nagy forgalomnál.

### Jelentéskészítő irányítópult
Összesítéseket kapsz: sikeres/hibás küldések, megnyitási arány, időbeli trendek, „top források” (mely plugin küldte), „top címzettek”. Könnyebben azonosítod a problémás területeket vagy a szokatlan terhelést.

### WordPress e‑mail menedzsment
Finoman szabályozhatod, mely beépített WordPress‑értesítések menjenek ki (admin értesítések, kommentek, új felhasználók, adatvédelmi e‑mailek stb.). Egyenként letilthatod őket, így csökkented a zajt, és megelőzöd a nem kívánt küldéseket (különösen stagingen vagy multisite‑on).

### Nem proxyzza a levelezést
A kézbesítés közvetlenül a beállított szolgáltatón át történik – a bővítmény naplóz és monitoroz, de nem köztes relé.

## Gyakorlati példák

- Webáruház: a rendelés‑visszaigazolásokat és számlaértesítéseket API‑n át küldöd egy tranzakciós szolgáltatóval; ha az elérhetetlen, automatikus átvétel a tartalék szolgáltatóval.
- Ügyfélszolgálat: ha egy felhasználó azt állítja, nem kapott jelszó‑visszaállító levelet, a naplóban visszakeresed a státuszt és a hibaokot, majd a debug napló alapján elhárítod az SPF/DKIM gondot.
- Staging környezet: letiltod a WordPress‑alap értesítéseket, hogy tesztelés közben ne menjenek ki valós e‑mailek.
- Marketing megfelelőség: bekapcsolod az open trackinget, hogy lásd, mely rendszerszintű értesítéseket nyitják meg a leginkább.

## Telepítés és beállítás dióhéjban

1. Töltsd le és telepítsd a bővítményt a jogosult Gravity Forms előfizetésedből.
2. Aktiválás után add meg a licenckulcsot.
3. Hozz létre egy integrációt (API‑kulcsok/SMTP adatok megadásával), majd jelöld **Set as Primary**‑nak.
4. Adj meg opcionálisan **Backup** integrációt.
5. Futtasd a beépített **tesztküldést**, és ellenőrizd a naplóban az eredményt.
6. Állítsd be a naplózás megőrzését, és döntsd el, mented‑e a levéltörzset/csatolmányokat.

## Adatkezelési és üzemeltetési megfontolások

- A naplózás alapból aktív; a megőrzés állítható. Ha bekapcsolod a **Save Email Body** és **Save Attachments** opciókat, személyes adat is kerülhet az adatbázisba és a fájlrendszerbe – ezt vedd figyelembe az adatkezelési szabályzatodban és a tárhely méretezésénél.
- Az **open tracking** láthatatlan képpontot használ; nagy küldési volumen mellett extra forgalmat okozhat.
- Nem minden bővítmény használ wp_mail‑t; ezek levelei kívül eshetnek a naplózáson és a kézbesítésen.

## Előnyök és értékajánlat

- Jelentősen jobb kézbesíthetőség hitelesített csatornákon (SPF/DKIM/DMARC).
- Láthatóvá válnak a hibák és okok – gyorsabb hibaelhárítás.
- Failoverrel csökken a leállások és elveszett üzenetek kockázata.
- Központi napló és dashboard: gyors audit, támogatás, kapacitástervezés.
- Kevesebb zaj a WordPress értesítések finomhangolásával.

## Kinek ajánlott?

- **Üzleti/produkciós webhelyeknek** (e‑kereskedelem, ügyfélszolgálat, belső rendszerek), ahol kritikus a tranzakciós e‑mailek megbízhatósága.
- **Ügynökségeknek és multisite hálózatoknak**, akiknek fontos a központi naplózás, a riportok és a forgalom kontrollja.
- **Fejlesztői/staging környezeteknek**, ahol minimalizálni kell a véletlen küldéseket.

## Megjegyzés a licenchez

A bővítmény a Gravity ökoszisztéma része, és meghatározott Gravity Forms előfizetésekkel érhető el. Aktiválása licenckulccsal történik.