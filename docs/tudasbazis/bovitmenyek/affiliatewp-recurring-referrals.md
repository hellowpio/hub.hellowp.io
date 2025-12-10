---
title: "AffiliateWP - Recurring Referrals"
description: "Automatikus partnerjutalék a teljes előfizetési életciklusra: a megújítási fizetések után is jutalmat kapsz az AffiliateWP-ben."
sidebar_label: "AffiliateWP - Recurring Referrals"
---

## Mi ez és milyen problémát old meg?

Az AffiliateWP – Recurring Referrals a Professional licenchez tartozó kiegészítő, amellyel nem csak az első vásárlás, hanem minden későbbi, előfizetésből származó megújítás után is automatikus partnerjutalékot rögzíthetsz. Ha előfizetéses üzleted van, ez szinkronba hozza a partnereid érdekeit a valós, ismétlődő bevételeiddel, és megszünteti a kézi, hibalehetőségekkel teli megújítás-követést.

## Hogyan működik röviden?

- A kiegészítő összeköti az AffiliateWP-t a használt előfizetés-kezelőddel (pl. WooCommerce Subscriptions, MemberPress stb.).
- Minden megújításnál a rendszer eseményt kap (pl. rendelés megújult, számla kifizetve), majd a beállított szabályok szerint létrehoz egy megújulási referral bejegyzést a megfelelő partnernek.
- A jutalék mértéke és típusa rugalmasan szabályozható globális, termék- és partner-szinten, teljesítménysávokkal és megújulási limitekkel.

## Fő funkciók és beállítások

### Támogatott integrációk
- **Előfizetés/megújítás követés:** WooCommerce + WooCommerce Subscriptions, Easy Digital Downloads + Recurring Payments, Restrict Content Pro, Paid Memberships Pro, MemberPress, MemberMouse, LifterLMS.
- **Űrlap/Stripe alapú előfizetések:** Gravity Forms (fizetési kiegészítőkkel), WP Simple Pay (Stripe), PayPal Buttons.

### Rugalmas jutalékszabályok
- **Megújulási ráta és típus:** százalék vagy fix összeg állítható globálisan.
- **Partnerenkénti megújulási ráta:** külön szabályok VIP partnerekhez vagy egyedi megállapodásokhoz.
- **Termék- és partner-szintű ráták:** egyes előfizetéses termékekhez saját megújulási rátát adhatsz, termékeket ki is zárhatsz a megújulási jutalékból.
- **Teljesítménysávok (Tiered Affiliate Rates):** a megújulási jutalék igazítható a partner teljesítményéhez (pl. havi forgalmi sávok).

### Megújulási jutalék-korlát
- **Recurring Referral Limits:** korlátozhatod, hogy egy előfizetés hány megújításáig járjon jutalék (globálisan, termékenként és partnerenként is). Hasznos a LTV kontrollhoz.

### Rátahierarchia és elsőbbség
- A megújításokra külön rátahierarchia érvényes, amely felülbírálja az általános egyszeri jutalék-szabályokat:
  - Globális megújulási ráta → Termék megújulási ráta → Teljesítménysávok → Partner megújulási ráta → Partner + termék megújulási ráta.

### Integráció-specifikus beállítások
- **WooCommerce / EDD:** termékszinten megadhatod a megújulási rátát, és ki is zárhatod a terméket a megújulási jutalékból.
- **WP Simple Pay / Gravity Forms:** a megújítási eseményekhez kötelező a **webhookok** beállítása (külön a teszt és az éles környezethez), különben a megújítások nem fognak jutalékot generálni.
- **Kézi hozzárendelés:** meglévő előfizetésekhez adminból társíthatsz megújulási referralokat (integrációtól függő módszerrel, pl. WooCommerce-nél parent order ID alapján). Fontos: múltbeli megújításokra nem generál jutalékot.
- **Próbaidőszakok és 0 összegű tételek:** ne kapcsold be a „Zero Amount Referrals” figyelmen kívül hagyását, mert a 0 összegű induló tétel szükséges a későbbi megújítások helyes hozzárendeléséhez.

## Gyakorlati példák

- **WooCommerce Subscriptions, 20% megújulási ráta:** havi 10 000 Ft-os tagság esetén a partner minden megújításnál 2 000 Ft jutalékot kap. Ha beállítasz 6 megújulási limitet, a jutalék az első 6 hónapra jár.
- **Tiered Rates egy oktatópartnernek:** ha egy partner havi 1 000 000 Ft feletti megújítási bevételt hoz, a megújulási rátája automatikusan 20%-ról 25%-ra emelkedik a következő ciklusokra.
- **WP Simple Pay Stripe előfizetés próbaidővel:** a próba kezdetekor keletkező 0 Ft-os tétel rögzül, majd a próba utáni első fizetett megújításnál a rendszer már a megfelelő partnernek írja jóvá a jutalékot (webhook kötelező).

## Gyors beállítási lépések

1. Telepítsd és aktiváld az AffiliateWP alapbővítményt, Professional licenccel.
2. Telepítsd/aktiváld a Recurring Referrals kiegészítőt.
3. Lépj az AffiliateWP › Settings › Commissions menübe, és engedélyezd az „Enable Recurring Referrals” opciót.
4. Állítsd be a megújulási rátát és a rátatípust (százalék vagy fix).
5. Ha kell, adj meg partner- és/vagy termékszintű megújulási rátákat, és konfiguráld a megújulási limiteket.
6. Kapcsold be a teljesítménysávokat, ha sávos jutalmazást szeretnél a megújításokra.
7. Integráció-specifikusan állíts be mindent: Woo/EDD termékszintű opciók; WP Simple Pay/Gravity Forms webhookok.
8. Teszteld: hozz létre egy teszt-előfizetést affiliate hivatkozással, várj egy megújítást, ellenőrizd a referral bejegyzést.

```
Teszt-checklist (ajánlott)
- Affiliate link kattintás és cookie érvényes
- Előfizetés létrejön affiliate-hez kötve
- Próbaidőszak (ha van) rögzül 0 Ft-tal
- Megújítási esemény megérkezik (webhook OK)
- Referral létrejön helyes rátával és valutával
- Limit elérése után nem keletkezik új referral
```

## Előnyök és értékajánlat

- **Bevételhez igazított ösztönzés:** a partnereid a teljes előfizetési életciklusért kapnak jutalékot, nem csak az első vásárlásért.
- **Automatizált és egységes folyamat:** több előfizetés-kezelővel működik, csökkenti a kézi munkaigényt és a hibakockázatot.
- **Költségkontroll:** rugalmas ráták, kizárások, sávok és megújulási limitek.
- **Átlátható szabályok:** nincs visszamenőleges jutalékolás, egyértelmű a számítási logika.

## Kinek ajánlott?

- **Előfizetéses/membership alapú webáruházaknak** (WooCommerce Subscriptions, EDD Recurring).
- **Oktatási platformoknak** (LifterLMS) és **tartalom-előfizetéseknek** (RCP, PMPro, MemberPress).
- **Űrlapalapú vagy Stripe előfizetéseket használóknak** (Gravity Forms + gateway, WP Simple Pay).
- **Ügynökségeknek és growth csapatoknak**, akik teljesítményalapú, skálázható partnerprogramot akarnak.

## Fontos megkötések és megjegyzések

- WooCommerce esetén kizárólag a hivatalos Subscriptions bővítmény támogatott.
- Múltbeli megújításokra a rendszer nem generál jutalékot; egyes integrációknál a kézi hozzárendelés korlátozott, MemberMouse esetén jelenleg nem lehetséges.
- WP Simple Pay és Gravity Forms esetén a webhookok helyes beállítása elengedhetetlen.
- A kiegészítő a Professional licenccel érhető el és azon keresztül frissül.
- A fejlesztő az AffiliateWP csapata, az eszköz az Awesome Motive portfólió része.

Ezzel a kiegészítővel pontosan azt kapod, amire egy ismétlődő bevételű üzletnek szüksége van: megbízható, automatizált és finoman hangolható megújítási jutalékkezelést. Ha az előfizetéses bevételeid nőnek, a partnereid motivációja is veled nő.