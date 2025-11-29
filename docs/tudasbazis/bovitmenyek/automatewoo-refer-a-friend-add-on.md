---
title: "AutomateWoo - Refer A Friend Add-on"
description: "Hivatalos WooCommerce kiegészítő a csalásvédett, automatizált ajánlóprogramhoz kupon- vagy linkmegosztással és automatikus bolt­egyenleg-jóváírással."
sidebar_label: "AutomateWoo - Refer A Friend Add-on"
---

## Mi ez és mit old meg?

Az AutomateWoo – Refer A Friend egy prémium kiegészítő az AutomateWoo-hoz, amellyel **teljesen automatizált ajánlóprogramot** építhetsz a webáruházadban. Meglévő vásárlóid egyedi kuponnal vagy hivatkozással ajánlanak téged a barátaiknak; a barát kedvezményt kap, az ajánló pedig **bolt­egyenleg** formájában jutalmat. A bővítmény egyszerre kezeli a rögzítést, állapotokat, csalásvédelmet és a jutalmazást – így nem kell manuálisan nyomon követned a referálásokat.

Előfeltétel: a WooCommerce és az AutomateWoo aktív telepítése.

## Hogyan működik röviden?

1. Kiválasztod a **kampánytípust**: kuponos vagy linkalapú.
2. Létrehozol egy **megosztó oldalt** (shortcode-dal), és bekapcsolod a **poszt‑vásárlási widgetet**.
3. A vásárló megkapja az egyedi kuponját/linkjét, és megosztja e‑mailben vagy közösségi csatornákon.
4. A barát vásárol; a rendszer létrehozza a **referral rekordot**.
5. A rendelés teljesítésekor automatikusan vagy manuálisan **jóváhagyod**; az ajánló **bolt­egyenleget** kap.
6. Az AutomateWoo **workflow-k** értesítéseket küldenek (ügyfél, admin), és minden mérhető a **riportokban**.

## Fő funkciók, közérthetően

### Kampánytípusok
- **Kuponalapú kampány**: minden ajánlónak egyedi kuponja van. A megosztott kupon beváltása esetén a barát azonnali kedvezményt kap, az ajánló pedig jutalmat. Pontosan mérhető, kód-alapon követhető.
- **Linkalapú kampány**: az ajánló egy egyedi hivatkozást oszt meg. A kattintás és vásárlás alapján jön létre a referral, kupon nélkül. Letisztult, súrlódásmentes megosztás.

Megjegyzés: egyszerre csak az egyik típust használhatod (nem kombinálhatók).

### Megosztás és Share Widget
- Beépített megosztás e‑mailen, Facebookon, X/Twitteren és WhatsAppon.
- **Poszt‑vásárlási Share Widget** a köszönőoldalon és a rendelés‑e‑mailekben – ott kér meg megosztásra, ahol a legfogékonyabb a vásárló.
- Dedikált **megosztó oldal** shortcode-dal; dinamikus tartalom miatt ezen az oldalon a gyorsítótárat kapcsold ki.

### Csalásmegelőzés, állapotok
- Beépített védelmek: **IP-azonosság ellenőrzés**, **sütiegyezés** és **számlázási e‑mail** ütközésvizsgálat a self‑referral és visszaélések ellen.
- Referral életciklusok: **Pending**, **Approved**, **Potential Fraud**, **Rejected**. A gyanús esetek nem kapnak automatikus jóváhagyást.

### Jutalmazás és admin
- Automatikus **bolt­egyenleg-jóváírás** a jóváhagyáskor.
- Átlátható adminlista, részletes **riportok** a teljesítményről.
- Ügyféloldalon külön **Saját fiók** fül: az ajánló látja az állapotokat és az egyenlegét, kevesebb supportot igényel.

### AutomateWoo-integráció
- Új **triggerek** (például új referral létrejötte vagy státuszváltozás), változók és e‑mail komponensek.
- Teljesen testreszabott **workflow-k**: értesítések, figyelmeztetések, emlékeztetők – mind automatizálva.

## Gyakorlati példák

- Direkt fogyasztói bolt: kuponos kampányt indítasz. A barát 10% kedvezményt kap, az ajánló 2 000 Ft bolt­egyenleget. Amikor a rendelés teljesült, a jóváírás automatikusan megtörténik, az ajánló e‑mailt kap, a riportban látod az új ügyfélszerzést.
- Előfizetéses áruház: linkalapú kampányt futtatsz. Ha a barát előfizet, az ajánló egyenleget kap, a Potential Fraud státuszról automatikus admin értesítés megy. A megosztó widget a köszönőoldalon azonnal ösztönöz további ajánlásokra.

## Telepítés és alapbeállítás

1. Telepítsd és aktiváld a WooCommerce-t és az AutomateWoo-t, majd a Refer A Friend kiegészítőt.
2. Hozz létre egy “Megosztás” oldalt, és illeszd be:
   ```
   [automatewoo_referrals_page]
   ```
3. Menj a WordPress adminban: AutomateWoo > Settings > Refer A Friend. Válaszd ki a **share típust** (kupon vagy link), állítsd be a **jutalmakat** és az e‑mail opciókat.
4. Tedd láthatóvá a widgetet:
   ```
   [automatewoo_referrals_share_widget]
   ```
   és a fiókfület:
   ```
   [automatewoo_referrals_account_tab]
   ```
5. Építs workflow-kat a triggerekre (pl. “New Referral Created”, “Referral Status Changed”) értesítésekhez és automatikus jóváhagyáshoz.

Megjegyzés: a shortcode-okat tartalmazó oldalak dinamikusak – a cache-t itt kapcsold ki.

## Fejlesztői tippek

- Csalásdetektálás ideiglenes kikapcsolása teszthez:
  ```php
  add_filter( 'automatewoo/referral/is_potential_fraud', '__return_false' );
  ```
- Sablonok felülírása: a frontend és HTML e‑mail sablonok a bővítmény templates mappájában találhatók, témában felülírhatók.

## Előnyök és értékajánlat

- **Alacsonyabb megszerzési költség**: a szájreklám minőségi forgalmat hoz.
- **Kevesebb manuális munka**: automatikus követés, státuszkezelés, jutalmazás.
- **Kevesebb visszaélés**: több rétegű csalásvédelem.
- **Átláthatóság**: ügyfél‑ és adminnézet, részletes riportok.
- **Rugalmas automatizáció**: személyre szabott workflow-k bármely lépésnél.

## Kinek ajánlott?

- **D2C márkáknak** és webshopoknak, akik gyorsan bevezethető ajánlóprogramot keresnek.
- **Előfizetéses boltoknak**, ahol a megújuló bevétel mellé hűségerősítő ösztönző kell.
- **Kis- és középvállalkozásoknak**, akik marketingbüdzsé helyett a közösségükre támaszkodnának.
- **Marketingcsapatoknak**, akik adatvezérelt, automatizált referral csatornát szeretnének.

## Korlátok és kompatibilitás

- Egyszerre **nem** futtatható kupon- és linkmegosztás; választanod kell.
- Gyakori igények: admin általi manuális referral létrehozás, referral kódok átnevezése, „másolás vágólapra” gomb a widgetben – ezek egy része tervezett fejlesztés.
- Kompatibilis a modern WooCommerce funkciókkal, beleértve a **HPOS**-t és a **Cart/Checkout Blocks**-ot.

## Licenc és beszerzés

Hivatalos WooCommerce kiegészítő, 1 éves licenc keretében támogatással és frissítésekkel, 30 napos pénzvisszafizetési garanciával. Az ár tipikusan éves díjas konstrukció.