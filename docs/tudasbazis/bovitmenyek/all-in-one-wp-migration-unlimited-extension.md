---
title: "All-in-One WP Migration Unlimited Extension"
description: "Fizetős kiegészítő az All‑in‑One WP Migration bővítményhez, amely eltávolítja a méret-, idő- és memória‑korlátokat, és WP‑CLI/Server Restore funkciókat ad a nagy méretű WordPress mentésekhez."
sidebar_label: "All-in-One WP Migration Unlimited Extension"
---

## Mi ez és milyen problémát old meg?

Az All‑in‑One WP Migration Unlimited Extension egy fizetős kiegészítő, amely az alap All‑in‑One WP Migration bővítményből kihozza a maximumot: megszűnnek a hostolói és PHP‑korlátok (fájlfeltöltési limit, futásiidő‑ és memória‑limit), így gyakorlatilag bármilyen méretű `.wpress` mentést importálhatsz. Extra bónusz a parancssoros (WP‑CLI) integráció és a **Server Restore**, amely közvetlenül a szerveren lévő mentésből állít vissza – feltöltés nélkül.

Licencelés röviden: az Unlimited 69 USD/év, legfeljebb 50 webhelyen használhatod; a használat site‑onként számít, a helyi fejlesztői környezet nem. A Pro csomag (99 USD/év) tartalmazza az Unlimitedet, és felhő‑célokat + ütemezett mentést is ad. Multisite környezethez külön kiegészítő van, amelyben az Unlimited eleve benne van.

## Fogalmak, amiket jó ismerni

- **.wpress**: az All‑in‑One WP Migration saját mentési formátuma (fájl + adatbázis).
- **ai1wm‑backups mappa**: a mentések alapértelmezett helye a wp‑content alatt; innen a bővítmény közvetlenül felismeri a mentéseket.
- **Reset Hub**: beépített „reset” eszközök fejlesztéshez/staginghez (pluginek törlése, téma‑reset, média‑takarítás, adatbázis‑reset, teljes site‑reset).

## Fő funkciók, érthetően

- **Korlátok megkerülése**: Nem kell többé a `post_max_size`, `upload_max_filesize` vagy a böngészős feltöltési limit miatt aggódnod. Hosszú import közben sem futsz bele tipikus időtúllépésekbe (500/504, maximum execution time).
- **Server Restore**: FTP/SFTP‑vel csak bemásolod a `.wpress` fájlt az `ai1wm‑backups` könyvtárba, majd a bővítmény admin felületén közvetlenül visszaállíthatod – fájlfeltöltés nélkül.
- **WP‑CLI integráció**: Automatizáld a mentést és visszaállítást ügynökségi vagy DevOps folyamatokban, cronból/scriptből.
- **Reset Hub**: Egy kattintással „tiszta lapot” csinálhatsz fejlesztői/staging site‑okon; választhatod célzottan csak a plugineket, csak a médiát vagy akár a teljes site‑ot.

### WP‑CLI – tipikus parancsok

```bash
# Mentés készítése (opcionális cserékkel és kizárásokkal)
wp ai1wm backup --replace="regi.hu" "uj.hu" --exclude-cache

# Mentések listázása
wp ai1wm list-backups

# Visszaállítás (megerősítés nélkül)
wp ai1wm restore /path/to/backup.wpress --yes

# Mentés tartalmának böngészése
wp ai1wm browse-backup /path/to/backup.wpress

# Mentés kicsomagolása egy célútvonalra
wp ai1wm extract-backup /path/to/backup.wpress --extract-path=/var/backup/extracted
```

## Telepítés és tipikus munkafolyamat

### Telepítés
1. Vásárlás után töltsd le a kiegészítő ZIP fájlt.
2. A WordPress Vezérlőpultban: Bővítmények → Új hozzáadása → Bővítmény feltöltése → válaszd ki a ZIP‑et.
3. Aktiváláskor az alap All‑in‑One WP Migration is feltelepül/aktiválódik (ha még nincs).

### Munkafolyamat migráláshoz
1. Forrás site-on: Export → File, készül egy `.wpress` fájl.
2. Cél szerveren: telepítsd/aktiváld az Unlimitedet.
3. Importálás:
   - vagy Import → File és tallózd a `.wpress` fájlt,
   - vagy másold a fájlt az `wp-content/ai1wm-backups` mappába, majd válaszd a Backups képernyőn a Server Restore‑t.
4. Az import végén abba a site‑ba jelentkezz be, amelyikből a mentés készült.
5. Beállítások → Közvetlen linkek: kattints a mentésre (újraírások frissítése).

## Gyakorlati példák

- **Több GB‑os költöztetés**: Egy nagy WooCommerce áruházat új tárhelyre viszel. Az Unlimiteddel nem kell a feltöltési limit miatt variálnod; Server Restore‑ral a fájlt csak bemásolod és visszaállítod.
- **Gyors helyreállítás incidens után**: Frissítés tönkreteszi az oldalt. A legutóbbi `.wpress` mentést a szerveren tartod; két kattintás és már fut is a restore.
- **Automatizált üzemeltetés**: Ügynökségként éjszakai biztonsági mentéseket futtatsz cronból WP‑CLI‑val, és szükség esetén scriptből visszaállítasz stagingre.
- **Staging „takarítás”**: Minden sprint végén Reset Hubbal törlöd a felesleges médiát és plugineket, vagy teljesen visszaállítod a környezetet.

## Hibaelhárítás és követelmények

- **Feltöltési/timeout hiba**: használd a Server Restore‑t vagy a WP‑CLI‑t a böngészős feltöltés helyett.
- **Nagyon nagy fájlok**: 2 GB felett 64 bites PHP szükséges, különben a fájlkezelés korlátozott lehet.
- **Fájl helye**: a `.wpress` mentések a `wp-content/ai1wm-backups` mappában jelennek meg; innen a Backups képernyő felismeri és visszaállítható.
- **Alap bővítmény**: az Unlimited az All‑in‑One WP Migration kiegészítője; az alap plugin szükséges a működéshez.

## Előnyök és értékajánlat

- **Időmegtakarítás**: nincs több kis darabolás, újrapróbálás, félbeszakadt feltöltés.
- **Stabil folyamat**: nagy importoknál is megbízható, a PHP‑korlátok nem akasztanak meg.
- **Automatizáció**: parancssorból üzemeltethető, beépíthető CI/CD‑be és cronba.
- **Rugalmas helyreállítás**: feltöltés nélkül, szerverről, percek alatt visszaállíthatsz.

## Célközönség

- **Ügynökségek és tárhelyszolgáltatók**: tömeges költöztetések, automatizált mentés/visszaállítás.
- **Fejlesztők/DevOps**: scriptelhető folyamatok, staging reset, gyors rollback.
- **Nagy forgalmú/e‑kereskedelmi oldalak**: több GB‑os mentések gond nélkül.
- **Multisite üzemeltetők**: hálózatos környezetben a Multisite kiegészítő tartalmazza az Unlimitedet, így a méretkorlát itt sem akadály.

## Csomagok röviden

- **Unlimited Extension**: 69 USD/év, legfeljebb 50 site/év; a helyi (localhost) használat nem számít bele.
- **All‑in‑One WP Migration Pro**: 99 USD/év; tartalmazza az Unlimitedet, plusz felhő‑tárhely célokat és ütemezett mentéseket.
- **Multisite Extension**: WordPress hálózatokra; az Unlimited ebben is benne van.

Összefoglalva: az Unlimited Extension „kinyitja” az All‑in‑One WP Migration teljes potenciálját, megszüntetve a méret‑, futásiidő‑ és memória‑korlátokból adódó akadályokat, és professzionális eszközt ad a kezedbe a gyors, automatizálható migráláshoz és helyreállításhoz.