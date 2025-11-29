---
title: "AffiliateWP - Allowed Products"
description: "Affiliate termékjutalékok termékszintű, ID-alapú engedélyezése: csak a megadott termékek után képződik jutalék."
sidebar_label: "AffiliateWP - Allowed Products"
---

## Mi ez és milyen problémát old meg?

Az Allowed Products az AffiliateWP hivatalos kiegészítője, amellyel pontosan meghatározhatod, hogy **mely termékek után járjon jutalék** az affiliate partnereidnek. Aktiválás után mindent letilt, és csak az általad megadott **termékazonosítók** (product ID-k) kerülnek engedélyezésre. Így nem kell több száz terméken egyenként kikapcsolnod a jutalékot, ha például csak néhány kiemelt SKU-t szeretnél jutalmazni.

## Hogyan működik – alapelvek

- **Alapértelmezett tiltás:** telepítés és bekapcsolás után egyetlen termék sem jutalékolható, amíg nem adsz meg engedélyezett ID-kat.
- **Engedélyező lista:** egy egyszerű lista határozza meg, mely termékek generálhatnak referral-t. Ami nincs a listában, az nem termel jutalékot.
- **0.00 összegű referral kezelése:** ha a kosárban nincs engedélyezett termék, az add-on 0.00 értékű referral-t eredményezne. Ha az AffiliateWP-ben be van kapcsolva az „Ignore referrals with zero amount” opció, ezek a nullás tételek egyáltalán nem jönnek létre.
- **Variálható termékek:** variálható termékeknél a **szülő (parent) termék ID-ját** kell megadnod, nem a variációkét.

## Fő funkciók részletesen

- **Termékszintű engedélyező lista:** csak a listán szereplő product ID-k után számít a rendszer jutalékot. Vegyes kosár esetén a jutalék kizárólag az engedélyezett termékekhez kapcsolódó összeg alapján képződik; ha egyáltalán nincs engedélyezett termék a kosárban, a referral 0.00 lesz.
- **Alapértelmezett „deny-all” modell:** teljes kontrollt ad. Amíg nem engedélyezel konkrét ID-kat, semmi nem jutalékolható. Ez megakadályozza a véletlen vagy hibás kifizetéseket.
- **Nullás referralok automatikus figyelmen kívül hagyása:** együttműködik az AffiliateWP beállításával, amely a 0.00 összegű referralokat ignorálja. Ezzel elkerülöd a felesleges zajt a jelentésekben.
- **Széles körű kompatibilitás:** működik a főbb AffiliateWP integrációkkal (például webáruház- és tagsági bővítményekkel), így a legtöbb elterjedt értékesítési környezetben használhatod.
- **Egyszerű admin felület:** egyetlen mezőbe írod be a termékazonosítókat, vesszővel elválasztva. Nincs bonyolult szabálymotor – gyors és letisztult.

## Telepítés és beállítás

Előfeltétel: legyen telepítve és aktív az AffiliateWP.

1. Telepítsd a „AffiliateWP – Allowed Products” bővítményt, majd aktiváld.
2. Nyisd meg: Affiliates → Settings → Integrations.
3. Keresd meg az **Allowed Products** mezőt, és add meg a jutalékolható termékek **product ID**-it, vesszővel elválasztva.
4. Variálható terméknél a **parent ID-t** írd be.
5. WooCommerce-ben a termék ID-t megtalálod a Termékek listában a terméknév fölé húzott egérrel, vagy a szerkesztő URL-jében.

Példa beviteli formátum:
```
123, 456, 789
```

Tipp: ha teljesen üresen hagyod a mezőt, **semmilyen** termék után nem keletkezik kifizetendő jutalék.

## Gyakorlati példák

- **Kampánytermékek jutalmazása:** fut egy promóció három kiemelt SKU-ra. Felveszed a három ID-t az engedélyezett listára, és máris csak ezek után fizetsz jutalékot.
- **Alacsony árrésű cikkek kizárása:** a belépő szintű termékek nem bírják a jutalékot; egyszerűen nem kerülnek fel az engedélyezett listára, így nem keletkezik utánuk referral.
- **Tagsági oldalaknál csak bizonyos csomagok:** például csak a Pro és Business csomagokért jár jutalék. Felveszed e két membership termék ID-ját, és készen vagy.
- **Gyártói megfelelőség:** egyes gyártók tiltják a partnerjutalékot. Ezek a termékek nem kerülnek a listára, így teljesíted az előírásokat.

## Előnyök és értékajánlat

- **Időmegtakarítás:** nem kell minden nem kívánt terméket egyesével tiltani – elég a kívánt ID-kat engedélyezni.
- **Pénzügyi kontroll:** elkerülöd a véletlen, nem tervezett jutalékokat. Nullás rendeléseket akár automatikusan ignorálhatsz.
- **Egyszerűség és átláthatóság:** nincs túlkomplikált szabályozás; világos, hogy mi jutalékolható és mi nem.
- **Rugalmas kampánykezelés:** ideiglenes promóciókhoz percek alatt átállíthatod, mely termékek után jár jutalék.

## Célközönség

- **Nagy katalógussal dolgozó webáruházak**, ahol csak néhány termék jutalékolható.
- **Alacsony árrésű vagy szabályozott termékkörök** kezelői, akiknél kritikus a kifizetések kontrollja.
- **Tagsági és digitális termékes oldalak**, ahol csomagszintű jutalékszabályok kellenek.
- **Ügynökségek és programmenedzserek**, akiknek gyorsan és biztonságosan kell kampányokra hangolniuk a jutalékolást.

## Ismert korlátozások és megjegyzések

- **ID-alapú allowlist:** kategória, kupon, dátum vagy affiliate-specifikus szabályokat ez a bővítmény önmagában nem kezel. Ilyenekhez más AffiliateWP funkciók vagy egyedi kód szükséges.
- **Üres lista = nincs jutalék:** amíg nem adsz meg engedélyezett ID-kat, nem képződik kifizetendő jutalék.
- **Variációk:** mindig a parent termék ID-ját használd, különben a variáció nem lesz jutalékolható.
- **Nullás referralok:** ha nem szeretnél 0.00 értékű bejegyzéseket, kapcsold be az AffiliateWP-ben a nullás referralok ignorálását.

## Gyors hibakeresés

- Nem képződik jutalék? Ellenőrizd, hogy a termék ID-ja szerepel-e az engedélyezett listában, és helyesen írtad-e be (vesszővel elválasztva).
- Variálható termék? Győződj meg róla, hogy a parent ID van a listán.
- Sok 0.00 referral? Kapcsold be a nullás referralok figyelmen kívül hagyását az AffiliateWP-ben.
- Vegyes kosár esetén csak az engedélyezett termékek után várj jutalékot; ha ilyen nincs, a teljes referral 0.00 lesz.

## Háttér és karbantartás

Hivatalos AffiliateWP kiegészítő, eredetileg ingyenes add-onként jelent meg. A szerző és közreműködő csapat ismert az AffiliateWP ökoszisztémában, a bővítmény folyamatosan karbantartott, integrációs javításokkal és kompatibilitási finomításokkal.