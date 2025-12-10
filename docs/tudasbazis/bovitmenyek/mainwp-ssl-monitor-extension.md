---
title: "MainWP SSL Monitor Extension"
description: "Központi SSL-tanúsítvány monitorozás MainWP-ből ütemezett ellenőrzéssel, e-mailes riasztásokkal és részletes tanúsítvány-információkkal."
sidebar_label: "MainWP SSL Monitor Extension"
---

## Mi ez és milyen problémát old meg?

A MainWP SSL Monitor egy **MainWP-kiegészítő**, amellyel a csatlakoztatott WordPress oldalaid SSL-tanúsítványait **egy helyről**, a MainWP irányítópultból felügyelheted. Segít megelőzni a **váratlan lejáratokat**, így elkerülheted a böngészői figyelmeztetéseket, az ügyfélpanaszokat és a konverziós/SEO károkat. Nem telepít és nem újít meg tanúsítványokat; **kizárólag monitoroz** és időben értesít.

## Hogyan működik?

- A MainWP Dashboard ütemezett feladatokkal (cron) **automatikusan** lekérdezi a Child site-ok SSL-tanúsítványait.
- A lekérdezés megállapítja a **lejárati dátumot**, az **issuer**-t, a **Common Name**-et és más metaadatokat.
- Ha egy tanúsítvány a beállított **értesítési küszöbön** belül jár le, a rendszer **e-mailt küld**.
- A Dashboardon egy **táblázat** mutatja az állapotokat, a **Manage Sites** képernyőn pedig külön **SSL Status** oszlop segíti a gyors áttekintést.
- Minden ellenőrzés **naplózásra kerül**, így visszanézheted a változásokat. Az adatok a MainWP **REST API**-n keresztül is elérhetők.

## Fő funkciók részletesen

- **Automatikus ellenőrzések ütemezése**: Beállíthatod, milyen gyakran fusson az SSL-ellenőrzés. A MainWP cron gondoskodik a rendszeres futtatásról, így nem kell manuálisan figyelni a tanúsítványokat.
- **Manuális ellenőrzés**: Egy kattintással lefuttathatod az ellenőrzést az összes, vagy csak a kiválasztott oldalon. Hasznos vészhelyzetben, frissítés vagy migráció után.
- **E-mail értesítések**: Meghatározhatod, hány nappal a lejárat előtt jelezzen a rendszer. Több lépcsős küszöbbel fokozatosan növelhető a sürgősség.
- **Részletes tanúsítvány-információk**: Láthatod a lejárati dátumot, a kibocsátót, a Common Name-et és a főbb mezőket. Segít azonosítani a tanúsítvány típusát és a megújításért felelős szolgáltatót.
- **Oldalszintű felülírás**: A globális beállításokat egyes Child site-okra **felülírhatod** (például eltérő értesítési küszöb, automatikus ellenőrzés ki/be) — ideális eltérő SLA-k esetén.
- **Gyors áttekintés**: A Manage Sites képernyő **SSL Status** oszlopa azonnal jelzi a problémás oldalakat, így célzottan tudsz intézkedni.
- **Napló és előzmények**: Minden változás nyomon követhető, ami segít az **auditálásban** és a riportolásban.
- **REST API támogatás**: Az SSL-állapotok programból is lekérhetők, így beépítheted saját riportjaidba vagy NOC/monitoring nézeteidbe.

## Telepítés és első lépések

Előfeltételek:
- Egy működő **MainWP Dashboard** WordPress telepítés.
- Minden Child site-on a **MainWP Child** bővítmény aktív.
- Az SSL Monitor a **Pro csomag** része.

Lépések:
1. Dashboard > Extensions > Install Extensions > válaszd az SSL Monitor-t > Install > Activate.
2. Extensions > SSL Monitor > Dashboard > indíts **manuális ellenőrzést** (például “Check SSL Certificate on All Sites”).
3. Extensions > SSL Monitor > Settings: állítsd be az **értesítési küszöböt** és az **ellenőrzési gyakoriságot**.
4. Oldalszintű felülírás: Sites > Manage Sites > kiválasztott oldal > SSL Monitor > Settings > **Override general settings**.

Ajánlott: szerveroldali cron beállítása a Dashboardhoz (WP-CLI példa):

```
*/10 * * * * php /path/to/wp-cli.phar --path=/var/www/mainwp-dashboard cron event run --due-now >/dev/null 2>&1
```

## Gyakorlati példák

- **Ügynökség 50+ oldal mellett**: Beállítasz egy 30 napos küszöböt, és engedélyezed az automatikus ellenőrzést. Hetente egyszer manuálisan is lefuttatod, majd a táblázat “Expiring Soon” listájára fókuszálsz. A megújításokat a tárhely- vagy CDN-kezelő felületén intézed.
- **Különböző SLA-k**: Prémium ügyfeleknél oldalszinten 45 napos értesítést adsz meg és napi automatikus ellenőrzést, míg kisebb csomagban 20 nap és heti ellenőrzés elegendő.
- **Napi gyors állapotellenőrzés**: Reggel rá nézel a Manage Sites “SSL Status” oszlopára. Ha piros/sárga jelzést látsz, megnyitod a részleteket, ellenőrzöd a kibocsátót és a CN-t, majd felveszed a megújítási ticketet.
- **REST API riport**: Készítesz egy belső riportot, ami a 30 napon belül lejáró tanúsítványokat listázza:

```
# Példa lekérdezés (sematikus):
# GET mainwp/v2/ssl-monitor?status=expiring&days=30
# Válasz (részlet):
{
  "total": 3,
  "sites": [
    {"site":"client-a.hu","expires_in_days":14,"issuer":"R3","cn":"client-a.hu"},
    {"site":"client-b.com","expires_in_days":7,"issuer":"ZeroSSL","cn":"client-b.com"}
  ]
}
```

## Előnyök és értékajánlat

- **Idő- és költségmegtakarítás**: Nem kell szolgáltatónként és oldalaként külön ellenőrizni a lejáratokat.
- **Kockázatcsökkentés**: Előre jelez a közelgő lejáratokról, így elkerülhetők a leállások és figyelmeztető képernyők.
- **Központosított átláthatóság**: Egyetlen táblázatban látod minden ügyfél oldalletűségét.
- **SLA-kompatibilitás**: Oldalszintű felülírással testre szabhatod az értesítési politikát.
- **Audit és riportálás**: A napló segít visszakövetni, mikor mi történt.

## Kinek ajánlott?

- **Digitális ügynökségeknek** és **karbantartási szolgáltatóknak**, akik sok WordPress oldalt kezelnek.
- **IT üzemeltetésnek/NOC-nak**, ahol fontos a központosított rálátás és az automatizált riasztás.
- **SaaS és többbrandes portfóliók** tulajdonosainak, akiknél eltérő SLA-k, domainek és szolgáltatók keverednek.
- **Freelancereknek**, akik szeretnék minimalizálni a manuális ellenőrzéseket és az ügyfélpanaszokat.

## Korlátok és jó gyakorlatok

- **Mit nem csinál**: Nem telepít, nem konfigurál és nem újít meg SSL-tanúsítványokat; ezt a hosting/CDN/ACME kliens oldalon intézd.
- **Elérhetőség**: Ha egy Child site nem elérhető, az ellenőrzés hibázhat. Gondoskodj a Dashboard szerver **kimenő kapcsolatairól**.
- **Ütemezés**: A megbízható automatikus futáshoz állíts be **szerveroldali cron-t** a Dashboardhoz.
- **Licenc és elérhetőség**: A kiegészítő a MainWP **Pro csomagjának** része, amely tartalmaz prémium bővítményeket, támogatást és frissítéseket.

Ezzel a bővítménnyel pontosan tudni fogod, **melyik tanúsítvány mikor jár le**, miközben az értesítések és a központi nézet leveszik a válladról a manuális ellenőrzés terhét.