---
title: "Pixel Manager Pro for WooCommerce"
description: "Egységes, pontos és adatvédelmi-kompatibilis e‑kereskedelmi mérés WooCommerce-hez – több csatornán, egyetlen bővítménnyel."
sidebar_label: "Pixel Manager Pro for WooCommerce"
---

## Mi ez és milyen problémát old meg?

A Pixel Manager Pro for WooCommerce egy olyan kiegészítő, amellyel a webshopod minden fontos e‑kereskedelmi eseményét (megtekintés, kosárhoz adás, vásárlás, visszatérítés stb.) egységesen tudod mérni és továbbítani a nagy hirdetési és analitikai rendszerek felé. A fő cél: a konverziómérés pontosságának növelése, a dinamikus remarketing kiszolgálása és a jelentések megbízhatóságának javítása — így reálisabb ROAS-t kapsz és kevesebb pénzt égetsz el.

Megoldja a tipikus gondokat:
- elvesző konverziókat (pl. a vevő nem jut vissza a “köszönő” oldalra),
- böngésző- és adblocker-korlátozásokat,
- adatszórást és duplikált jelentéseket,
- visszáruk miatti torz bevételi adatokat,
- hozzájárulás-kezelés és adatvédelem kihívásait.

## Hogyan működik?

A bővítmény mélyen integrálódik a WooCommerce eseményeibe. Böngészőoldali pixeleket és — Pro kiadásban — szerveroldali jelzéseket is küld (CAPI/EAPI), majd ezeket okosan deduplikálja. Az Automatic Conversion Recovery (ACR) pótolja azokat a vásárlási eseményeket, amelyek a “thank you” oldal kihagyása miatt maradnának ki. A Payment Gateway Tracking Accuracy Report kimutatja, ha egy fizetési szolgáltató miatt aránytalanul sok mérés veszik el. A Google Consent Mode v2 és a CMP-integrációk garantálják, hogy a jelzések a látogatói hozzájárulásnak megfelelően fussanak.

## Fő funkciók, érthetően

### Többcsatornás mérés és remarketing
- Egyszerre több platformnak küld azonos, sztenderdizált eseményeket: Google Ads és GA4, Meta, Microsoft Ads, TikTok, Pinterest, Snapchat, LinkedIn, Reddit, Taboola, Outbrain, Hotjar és mások.
- Dinamikus remarketinghez továbbítja a termék- és kosáradatokat, így a hirdetési rendszerek pontosan tudják, mit mutassanak vissza a látogatónak.

### Szerveroldali jeladások (Pro)
- Meta Conversion API, TikTok Events API, Pinterest APIC, Snapchat CAPI és Google Ads Enhanced Conversions támogatás.
- Böngésző–szerver deduplikáció: ha ugyanaz az esemény két úton is befut, csak egyszer számolódik.
- Első feles jeladási módok a megbízhatóság növelésére, különösen Safari/iOS és adblocker környezetben.

### Pontosságnövelő automatizmusok
- **Automatic Conversion Recovery (ACR):** ha a vásárló nem tér vissza a köszönő oldalra (pl. off‑site fizetés után), a bővítmény későbbi látogatáskor pótolja a hiányzó vásárlás-jelzést — szabályokhoz kötötten, naplóval és 30 napos visszatekintéssel.
- **Google Ads Conversion Adjustments:** visszáruk és visszatérítések automatikus feltöltése, hogy a hirdetési rendszerek a korrigált bevétellel számoljanak.
- Rendelés-duplikáció elleni védelem és konzisztens adatstruktúra minden csatorna felé.

### Diagnosztika és hibakeresés
- **Payment Gateway Tracking Accuracy Report:** megmutatja, a vevők hány százaléka ér el a köszönő oldalra. Segít azonosítani a gondot okozó fizetési kaput és javítási javaslatokat ad.

### Adatvédelem és hozzájárulás
- **Consent Mode v2** támogatás: mérés hozzájárulási állapot alapján.
- Széles körű CMP-integráció (pl. Cookiebot, Complianz, OneTrust, Iubenda stb.).

### Teljesítmény és kompatibilitás
- Könnyű, minifikált frontend JS; Pro-ban **lazy‑load** opció.
- Kompatibilis gyorsítótárazó/minifikáló bővítményekkel és számos WooCommerce kiegészítővel.
- Megjegyzés: a szerveroldali protokollok (pl. CAPI) extra erőforrást igényelhetnek — érdemes tervezni.

### Fejlesztői eszközök
- Hookok/filtek, haladó beállítások, egyedi változók (pl. Google Ads).
- Részletes dokumentáció és diagnosztikai eszközkészlet.

## Gyakorlati példák

1. Gyors indulás:
   - Add meg a GA4, Google Ads és Meta azonosítókat.
   - Az alap e‑kereskedelmi események azonnal mennek; dinamikus remarketinghez kapcsold be a szükséges opciókat.
2. Pontosság maximalizálása:
   - Engedélyezd a Meta CAPI-t, TikTok EAPI-t és a Google Enhanced Conversions-t.
   - Figyeld a Payment Gateway riportot; kapcsold be az ACR-t.
3. Visszáruk kezelése:
   - Állítsd be a Google Ads Conversion Adjustments-et, hogy a visszatérítések automatikusan levonódjanak a konverziós bevételből.
4. Egyedi konverzió jelzés (rövidkóddal, Pro):
   ```
   [pmw_event name="lead" value="0" currency="HUF"]
   ```
   Példa: lead űrlap sikeroldalán elhelyezve.

## Előnyök és értékajánlat

- **Több mérés, kevesebb veszteség:** ACR és CAPI/EAPI miatt több konverziót látsz.
- **Reálisabb ROAS:** Conversion Adjustments és deduplikáció révén tisztább számok.
- **Idő- és költségmegtakarítás:** Egyetlen bővítményben állítasz be mindent, kevesebb manuális integráció.
- **Adatvédelmi megfelelés:** Consent Mode v2 és CMP-k, kevesebb kockázat.
- **Skálázható működés:** széles körű kompatibilitás és fejlesztői bővíthetőség.

## Kinek ajánlott?

- Olyan WooCommerce boltoknak, amelyek hirdetnek több csatornán, és fontos a pontos konverziómérés.
- Teljesítményorientált marketingeseknek/ügynökségeknek, akik dinamikus remarketinget és megbízható attribúciót szeretnének.
- Fejlesztőknek, akik egységes, bővíthető mérési keretrendszert keresnek.

## Rendszerkövetelmények és licencelés

- Minimum: WordPress 4.6, WooCommerce 3.7, PHP 7.3.
- A Pro kiadás éves előfizetéses licenccel érhető el, 30 napos pénzvisszafizetési garanciával. Elérhető ingyenes változat is (Pixel Manager for WooCommerce) a fő funkciók egy részével.

## Fontos megjegyzés a névről

Ne keverd össze a SweetCode által fejlesztett Pixel Manager for WooCommerce bővítményt egy hasonló nevű, más fejlesztőtől származó pluginnal. A Pro kiadás — Pixel Manager Pro for WooCommerce — a SweetCode megoldása.