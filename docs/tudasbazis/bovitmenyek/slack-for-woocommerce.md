---
title: "Slack for WooCommerce"
description: "Valós idejű Slack-értesítések WooCommerce eseményekhez, testreszabható üzenetekkel és fejlesztői hookokkal."
sidebar_label: "Slack for WooCommerce"
---

## Mi ez és milyen problémát old meg?

A Slack for WooCommerce egy prémium bővítmény, amellyel a boltod fontos eseményei (rendelések, készlet, értékelések, stb.) azonnal megjelennek a Slackben. Így a csapatod a saját csatornáin, valós időben látja a történéseket, kevesebb e-maillel és kevesebb wp-admin belépéssel. Készítője és hivatalos karbantartója a Kestrel.

## Hogyan működik röviden?

A bővítmény a Slackhez OAuth-kapcsolattal csatlakozik. Miután összekötötted a boltodat a Slack munkatereddel, az előre definiált WooCommerce eseményekhez hozzárendelsz Slack-csatornákat és üzenetsablonokat. Amikor az esemény megtörténik (pl. új rendelés érkezik), a bővítmény elküldi az üzenetet a kiválasztott csatornára vagy akár privát csoportba/DM-be (Slack oldali beállításokkal).

## Fő funkciók részletesen

- **Beépített értesítési események**: hét alapértelmezett trigger áll rendelkezésre: New Order, Low Stock, Out of Stock, Backorder, New Customer, New Review, New Post. Ezek igény szerint külön-külön kapcsolhatók és testreszabhatók.
- **Eseményenkénti csatorna és emoji**: minden értesítéshez másik csatornát és emoji ikont állíthatsz be. Emellett megadhatsz globális alapértelmezett csatorná(ka)t és emojit is, amelyet az események örökölnek, ha nem definiálsz egyedit.
- **Üzenetsablonok és formázás**: a beépített üzenetépítővel saját szöveget készíthetsz, sablonváltozókkal (pl. rendelés adatai, vevő neve, értékelés szövege). Támogatott a Slack formázás (félkövér, dőlt, kód, link-szintaxis).
- **Extended notifications**: több eseménynél bekapcsolhatod a részletes nézetet, ami például a rendelési tételeket, mennyiségeket, összesítéseket vagy egy értékelés szövegét is beemeli az üzenetbe. Így kevesebb kattintás kell a döntéshez.
- **Többcsatornás küldés és csatornalista-frissítés**: a bővítmény cache-eli a Slack-csatornákat. Ha a Slackben új csatornát hozol létre, a „Reload Available Channels” gombbal frissítheted a listát.
- **Teszt értesítés és naplózás**: a beállításokból bármikor küldhetsz próbaüzenetet. A Debug mód részletes naplót ír a WooCommerce naplóiba, ami segít a bevezetésben és a hibakeresésben.
- **Fejlesztőbarát API**: hookok és filterek (wcslack_*) segítségével mélyen testre szabhatod az üzeneteket, mezőket, prefixeket, vagy akár új, egyedi eseménylogikát is készíthetsz.
- **Fordíthatóság**: a bővítmény lokalizálható, így a csapatod saját nyelvén kaphat üzeneteket.

### Példa üzenetsablon

```
:tada: Új rendelés – #{{order_number}} • {{order_total}}
Vevő: {{customer_name}} ({{customer_email}})
Tételek:
{{items}}
Állapot: {{order_status}} • Szállítás: {{shipping_method}}
```

A fenti sablonban a kapcsos zárójelek példaként jelzik a beilleszthető rendelésadatokat. A pontosan elérhető változók a bővítményben listázva vannak.

## Gyakorlati használati esetek

- **Értékesítés**: minden új rendelés a #sales vagy #orders csatornára megy. Beállíthatsz külön emojit a nagy értékű rendelésekhez, vagy megjelenítheted a fizetési módot a gyors ellenőrzéshez.
- **Üzemeltetés/logisztika**: Low/Out of Stock és Backorder riasztások a #inventory csatornára, extended üzenettel (terméknév, variáció, készletszint), hogy a beszerzés azonnal lépjen.
- **Ügyfélszolgálat és marketing**: új vásárlók és új értékelések a #support vagy #marketing csatornára. Az értékelés szövegét is megjelenítheted, így gyors a reakció a visszajelzésekre.
- **Tartalom**: új bejegyzések publikálásáról a #content csatorna kap értesítést, amit a csapat azonnal továbboszthat.

## Telepítés és beállítás

1. **Telepítés**: telepítsd és aktiváld a bővítményt a bővítménykezelőben.
2. **Slack-kapcsolat**: hozz létre Slack Appot, add meg a bővítmény által kért átirányítási címet, majd a bővítmény beállításaiban kattints a „Connect with Slack”-re, és engedélyezd a hozzáférést.
3. **Csatornák betöltése**: töltsd be vagy frissítsd a csatornalistát a „Reload Available Channels” gombbal. Állíts be alapértelmezett csatornákat és emojit.
4. **Események testreszabása**: eseményenként válassz csatornát, emojit, sablont. Új rendelésnél dönthetsz arról is, hogy a teljesen ingyenes rendeléseket megjelölöd-e külön.
5. **Tesztelés és debug**: küldj próbaüzenetet. Szükség esetén kapcsold be a Debug módot, és nézd meg a naplókat.

## Előnyök és értékajánlat

- **Gyorsabb reakcióidő**: a kritikus események azonnal a megfelelő csatornán jelennek meg, így nem maradnak el intézkedések.
- **Kevesebb kontextusváltás**: nem kell állandóan a wp-adminban ellenőrizni az állapotot, a csapat a Slackben maradhat.
- **Jobb felelősségmegosztás**: eseményenként más csatornát használhatsz, így mindenki csak a rá vonatkozó értesítéseket kapja.
- **Kevesebb e-mail zaj**: a Slack értesítések kiváltják a rendszer-e-mailek jelentős részét.
- **Rugalmasság fejlesztőknek**: hookokkal saját logikát, további adatok megjelenítését vagy új integrációs pontokat adhatsz.

## Célközönség

- **Kereskedők és bolttulajdonosok**, akik szeretnék a napi történéseket valós időben látni.
- **Üzemeltetők és raktárosok**, akik készletriasztásokra építik a beszerzést.
- **Ügyfélszolgálat és marketing**, akik a vásárlói visszajelzéseket és új regisztrációkat követik.
- **Távoli, Slacket használó csapatok**, ahol fontos a gyors, csatornák szerinti információáramlás.
- **Fejlesztők és ügynökségek**, akik bővíthető, hook-alapú értesítési rendszert keresnek.

## Korlátok és megjegyzések

- **Alapesemények köre**: a bővítmény hét „core” eseményt tartalmaz. További speciális eseményekhez egyedi fejlesztés vagy kiegészítő megoldás szükséges.
- **Emoji viselkedés a Slackben**: a Slack ikonkezelése miatt gyorsan egymás után küldött, eltérő ikonú üzenetek időnként összefűzve jelenhetnek meg.
- **Csatornák cache-elése**: új vagy törölt csatornák csak a csatornalista frissítése után láthatók.

## Követelmények és kompatibilitás

A bővítmény modern WordPress, WooCommerce és PHP környezetet igényel, valamint Slack-fiókot. Kompatibilis a nagy teljesítményű rendeléskezeléssel és a blokkalapú kosár/fizetés felülettel. A telepítés előtt győződj meg róla, hogy a környezeted ezeknek megfelel.

## Licenc és támogatás

A bővítmény fizetős, hivatalos támogatással és pénzvisszatérítési garanciával érhető el a WooCommerce Marketplace-en. A bővítményt a Kestrel fejleszti és tartja karban.