---
title: "API Manager for WooCommerce"
description: "Licenckezelő és frissítéskiszolgáló WooCommerce-hez. Digitális termékeidet API-kulcsokkal, előfizetésekkel és biztonságos frissítésekkel kezelheted."
sidebar_label: "API Manager for WooCommerce"
---

## Mi ez és milyen problémát old meg?

Az API Manager for WooCommerce egy WooCommerce-kiterjesztés, amellyel a digitális termékeidet (pluginek, témák, szoftverek, API-hozzáférések) **licenckulcsokkal** védve értékesítheted. Automatikusan ad ki kulcsokat, kezeli az **aktiválásokat és megújításokat**, és biztonságosan kézbesíti a **szoftverfrissítéseket**. Gyakorlatban ez a bővítmény lesz a saját **licenc- és frissítéskiszolgálód** a WooCommerce áruházadon belül.

## Hogyan működik röviden?

- A bővítmény minden vásárláshoz **licenckulcsot** generál.
- A kliens (pl. a WordPress bővítményed) a beépített **licenc‑API**-hoz fordul aktiválásért, ellenőrzésért, frissítésért és letöltésért.
- Az API a WooCommerce termék‑azonosítót és a vásárló kulcsát használja a hozzáférések és jogok érvényesítéséhez.
- A WordPress‑es **PHP SDK** “bedrótozza” a licencelést és a frissítéseket a megszokott admin felületekbe (egy kattintásos update).
- Admin oldalon látod és kezeled az aktivációkat; a vásárló a saját fiókjában maga intézi a kulcsait és az eszközeit.

## Fő funkciók részletesen

### Licenckulcs‑kiadás és ‑kezelés
- Vásárláskor automatikus **API kulcs** generálás.
- **Aktivációs helyek** (slotok) szabályozása: meghatározhatod, hány eszközön használható egyszerre.
- **Lejárat és megújítás** kezelése egyszeri vagy előfizetéses termékeknél.

### Teljes licencmenedzsment API
- **Aktiválás/deaktiválás**: eszközhöz kötött használat nyilvántartása.
- **Státusz‑ellenőrzés**: érvényes‑e a kulcs, hány aktiváció aktív.
- **Frissítési metaadatok** és **biztonságos letöltési URL‑ek** kiadása a kliensnek.

### Biztonságos szoftverfrissítések
- WordPressen belüli **egy kattintásos/automatikus frissítés**.
- Fájlok kiszolgálása saját tárhelyről, távoli forrásból vagy **S3**‑ról.
- Minden letöltési link **időzített és lejáró**, így nem osztható tovább.

### Előfizetések és megújítások
- **WooCommerce Subscriptions** és **Constellation** integráció.
- A licenc **csak aktív** vagy **lemondás alatt** álló előfizetés mellett érvényes.
- Automatikus megújítások és lejárat előtti **emlékeztetők**.

### Admin és vásárlói felület
- Adminban a rendelésnél látod az **aktív eszközöket**, resetelheted vagy deaktiválhatod őket.
- A vásárló a **Saját fiók** felületen kezeli a kulcsait, eszközeit és letöltéseit.

### Fejlesztői eszközök és SDK
- Ingyenes **PHP könyvtár** gyors integrációhoz: licenc‑ellenőrzés, frissítési feed, admin UI bekötés.
- **Postman**‑minta a végpontok teszteléséhez.

### Teljesítmény, naplózás, biztonság
- **SmartCache** a licenc‑API gyorsítására és terhelés csökkentésére.
- WooCommerce‑be ágyazott **debug logok**.
- **IP‑engedélyezőlista** szerver‑oldali hívásokhoz, **HTTPS**, WordPress **biztonsági kulcsok**, cache‑ és tűzfal‑irányelvek.

## Gyakorlati példák

### 1) WordPress bővítmény licencelése és frissítése
- Beállítasz egy “API‑erőforrás” terméket aktivációs limittel.
- Vásárlás után a vevő kap egy kulcsot; a bővítményed az SDK‑n keresztül aktivál.
- A frissítési információkat és a csomagot az API szolgálja ki, időzített linkkel.
- Előfizetés lejártakor a frissítések és letöltések automatikusan leállnak.

### 2) SaaS vagy REST API monetizáció
- A bejövő kérések a licenc‑API‑n át ellenőrzik a **kulcs érvényességét** és az **aktivációs helyek** számát.
- Belső szerverekhez **IP‑whitelist**-et állítasz, hogy gép‑gép hívások biztonságosan menjenek.

### 3) Licenckulcsos letöltések (app, kurzus, fájl)
- A fizető ügyfél kulcsa alapján **lejáró letöltési linket** kap.
- A hivatkozás az első kijelölt letöltési fájlhoz kötődik a terméken.

## Példa API‑hívások (paraméterek)

Aktiválás:
```
request=activation
&product_id=123
&api_key=LICENC-KULCS
&instance=EGYEDI-ESZKOZ-ID
```

Frissítés‑ellenőrzés:
```
request=pluginupdate
&product_id=123
&api_key=LICENC-KULCS
&instance=EGYEDI-ESZKOZ-ID
&version=AKTUALIS_VERZIO
```

Deaktiválás:
```
request=deactivation
&product_id=123
&api_key=LICENC-KULCS
&instance=EGYEDI-ESZKOZ-ID
```

## Előnyök és értékajánlat

- Saját, **kontrollált licencszerver** WooCommerce‑en belül.
- Kevesebb support: a vevők **önkiszolgáló** licenckezelést kapnak.
- **Biztonságos frissítéskiszolgálás**, lejáró linkekkel.
- **Skálázható** API és cache, részletes naplózás.
- Gyors fejlesztés az **SDK**‑val, kevesebb egyedi kód.

## Kinek ajánlott?

- **WordPress bővítmény‑ és témakészítőknek**, akik saját boltjukból adnak el és frissítenek.
- **SaaS/API szolgáltatóknak**, akik licenc‑alapú hozzáférést és eszköz‑aktivációt akarnak.
- **Ügynökségeknek**, akik ügyfeleknek szállított komponenseket szeretnének licenchez kötni.
- **Digitális tartalom‑készítőknek**, akik időzített, védett letöltéseket keresnek.

## Bevezetés röviden

1. Telepítsd és aktiváld a bővítményt a WooCommerce áruházadban.
2. A terméknél jelöld be az **API erőforrás** opciót, állítsd az **aktivációs limitet**, a **lejáratot** és add meg a letöltési fájlokat vagy S3‑at.
3. Illeszd be a **PHP SDK**‑t a szoftveredbe, add meg a termék azonosítót és teszteld a hívásokat.
4. Előfizetéses modellhez kapcsold be a **Subscriptions/Constellation** integrációt.

## Best practice és buktatók

- Ne töröld az **API‑ként jelölt terméket** (a meglévő aktivációk sérülhetnek).
- Használj **HTTPS‑t**, állítsd be a WordPress **AUTH/SECURITY** kulcsokat, és kapcsold ki a **WP_DEBUG**‑ot élesben.
- Kerüld a **query‑string cache**‑elését, a tűzfalban engedélyezd az API paramétereket.
- Frissítéseknél ügyelj a **numerikus product_id** használatára; a frissítési csomag a termék első letöltési fájljához kötődik.
- Migrációhoz elérhető **importőr** korábbi megoldásokból; komplex esetekhez útmutató áll rendelkezésre.

## Követelmények és kompatibilitás

Modern WordPress, WooCommerce és PHP környezet szükséges. Kompatibilis a nagy teljesítményű rendeléskezeléssel, a blokkos kosár/penztár megoldásokkal, és támogatja az S3 tárhelyet, valamint az előfizetéses bővítményekkel való együttműködést.

Összességében az API Manager for WooCommerce átfogó licenc‑ és frissítéskezelő réteget ad a boltodhoz, amellyel professzionális, skálázható és biztonságos módon értékesíthetsz és frissíthetsz szoftvert vagy API‑hozzáférést.