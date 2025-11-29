---
title: "MainWP API Backups Extension - BETA"
description: "Host-API-kon keresztül indítható, központi backup és visszaállítás a MainWP Dashboardból, eredetileg BETA bővítményként, ma már a Core részeként."
sidebar_label: "MainWP API Backups Extension - BETA"
---

## Mi ez, és milyen problémát old meg?

A MainWP API Backups egy olyan megoldás, amellyel a Child site-jaid mentését és visszaállítását közvetlenül a tárhelyszolgáltatók saját API-jain keresztül vezérelheted a MainWP Dashboardból. Nem WordPressen belül készít archívumot, hanem a hoszt natív backup/snapshot rendszerét használja. Ez megszünteti a sok különböző hosztfelület közötti ki‑be lépkedést, és leveszi a terhet a webhelyeidről: a nehéz munka a szolgáltató infrastruktúráján fut.

Rövid történet: a funkció eredetileg “API Backups” néven BETA bővítményként indult, majd a MainWP Dashboard Core részévé vált.

## Hogyan működik?

- A Dashboardban megadod a szolgáltató(i)d API-hozzáféréseit.
- A MainWP API-hívásokkal listázza az elérhető mentéseket, indít új backupot, és kezdeményezi a visszaállítást.
- A mentés és a restore ténylegesen a hoszt oldali rendszerben történik; a MainWP csak vezérli a folyamatot.

Ezért a folyamat gyors, megbízható és skálázható még nagyobb site-oknál is, mert nem a WordPress/PHP erőforrásait terheli.

## Fő funkciók, érthetően

- **Host/API-alapú mentés és visszaállítás:** a hoszt natív snapshot/backup megoldásait használod, nem plugin-alapú ZIP-et. A lista, indítás és restore is API-n keresztül történik.
- **Központi felület a Dashboardban:**
  - **Backups / API Backups oldal:** összes Child site és az elérhető mentések listája, egyedi vagy bulk backup indítása.
  - **Site Overview > API Backups fül:** az adott oldal összes mentése, részletek és visszaállítás.
  - **Settings > API beállítások:** szolgáltatói API-kulcsok és site‑szintű hozzárendelések (pl. VPS Instance ID).
- **Tömeges műveletek:** több site-on egyszerre indíthatsz mentést. A visszaállítás mindig célzottan, egy adott mentésre és oldalra történik.
- **Tárolás és adathigiénia:** a mentések a szolgáltató tárhelyére kerülnek. A MainWP nem tárolja őket. Kivételként egyes manuális cPanel adatbázis-dumpok a Child site szerverén itt jelenhetnek meg:
  ```
  /wp-content/uploads/mainwp/api_db_backups/
  ```
- **Biztonság:** a 3rd‑party API-kulcsokat a Dashboard titkosítva tárolja, így az érzékeny adatok védelme megoldott.

### Támogatott szolgáltatók (példák)

- cPanel (natív és WP Toolkit)
- Plesk (WP Toolkit)
- Kinsta
- Cloudways
- GridPane (Owner account + Developer csomag vagy magasabb)
- Vultr
- Akamai (Linode)
- DigitalOcean

## Gyakorlati példák

- **Ügynökségi karbantartás:** havi szerződésnél kiválasztod az összes ügyféloldalt, és egy kattintással indítasz snapshotot a saját hosztjukon. Nincs több külön belépés a cPanelbe, Pleskbe vagy felhőszolgáltatói konzolokba.
- **Válságkezelés:** egy friss frissítés után gond van? A Site Overview > API Backups fülön kiválasztod a tegnapi mentést és restore-olod. A hoszt a saját rendszerén végrehajtja a visszaállítást.
- **Erőforrás-kímélés nagy site-oknál:** több tíz gigás médiatárnál plugin-alapú mentés helyett a hoszt snapshotját használod, ami gyorsabb és megbízhatóbb.

## Használati útmutató lépésről lépésre

1. **API kapcsolat beállítása**
   - Nyisd meg a **Settings > API** beállításokat.
   - Add meg a szolgáltatói API‑kulcsokat, és szükség esetén Child site szinten rendeld hozzá a hosztot és az **Instance ID**‑t.
   - Megjegyzés: több VPS-szolgáltatónál kötelező a site‑szintű Instance ID; Cloudways és GridPane esetén jellemzően nem kell külön site‑azonosító.

2. **Mentés indítása**
   - Egy site: **Sites > API Backups**, majd az adott oldalnál **Backup**.
   - Több site: jelöld ki az oldalakat, és indíts **Bulk Backup**-ot. A futási időt a site mérete és a hoszt sebessége határozza meg.

3. **Visszaállítás**
   - Menj a **Sites > API Backups > Manage Backups** részre, válaszd ki a kívánt mentést, és kattints a **Restore Backup** gombra.

## Fontos megjegyzések és korlátozások

- **Szolgáltató-függő előfeltételek:** például GridPane-nél bizonyos csomag szükséges. Több VPS-es környezetben site‑szinten Instance ID-t kell megadnod.
- **cPanel:** új telepítéseknél a backup rendszer gyakran inaktív. Engedélyezd, és első alkalommal előfordulhat, hogy cron/metaadat futtatás szükséges terminálból.
- **Plesk:** a rendszer a megfelelő „Main Site ID”-t várja; a domain ID megadása hibát okozhat.
- **Kinsta:** ügyelj a pontos **Environment ID** megadására; hibás párosítás 404-es API hibát eredményezhet.
- **Tárolás:** a mentések a szolgáltató tártereire kerülnek; a MainWP ehhez nem ad külön tárolót.
- **Biztonság:** az API‑kulcsok a Dashboardon titkosítva vannak.

## Előnyök és értékajánlat

- **Időmegtakarítás:** egy felületről menedzselheted az összes hoszt backupját.
- **Megbízhatóság és teljesítmény:** hoszt‑szintű snapshotok nagyobb site-oknál is gyorsak, és nem terhelik a WordPress-t.
- **Egységes folyamat:** auditálható, ismételhető lépések minden szolgáltatónál.
- **Kockázatcsökkentés:** közvetlen, gyors restore lehetőség egy helyről.

## Kinek ajánlott?

- **Digitális ügynökségeknek** és **webmestereknek**, akik sok site-ot kezelnek különböző hosztokon.
- **Rendszergazdáknak**, akik host‑szintű mentési stratégiát akarnak központosítani.
- **Nagy forgalmú vagy nagy méretű site-ok** üzemeltetőinek, ahol a plugin-alapú mentés erőforrás-igényes.

## Nem erre való

Ha kifejezetten WordPress-en belüli fájl+adatbázis archívumot szeretnél külső tárhelyre (például S3, Drive) menteni, akkor használj dedikált backup integrációkat, mint az UpdraftPlus, BackWPup vagy WPvivid.

## Összegzés

Az API Backups lényege, hogy a MainWP-ből, egységes felületen, a szolgáltatók natív rendszereit vezérelve indítasz mentést és visszaállítást. Így gyorsabban dolgozol, kevesebbet hibázol, és a webhelyeidet nem terheled feleslegesen. Ha több hoszton futó WordPress-oldalakat kezelsz, ez a megközelítés lesz a leghatékonyabb számodra.