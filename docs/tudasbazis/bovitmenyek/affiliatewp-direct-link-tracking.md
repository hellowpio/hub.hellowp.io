---
title: "AffiliateWP - Direct Link Tracking"
description: "Pro kiegészítő az AffiliateWP-hez, amely domain‑alapú hozzárendeléssel teszi lehetővé a paraméter nélküli, közvetlen affiliate linkelést."
sidebar_label: "AffiliateWP - Direct Link Tracking"
---

## Mi ez és milyen problémát old meg?

Az AffiliateWP – Direct Link Tracking egy **Pro kiegészítő**, amellyel az affiliate partnereid a **saját webhelyükről közvetlenül** linkelhetnek a te webshopodra/szolgáltatásodra **referral paraméterek nélkül**. A hozzárendelés a **hivatkozó domain** (HTTP referrer) alapján történik, így az affiliate linkek természetesek és „tiszta” URL-ek maradnak. Ez megoldja azt a gyakori problémát, hogy a látogatók levágják a referral paramétert, vagy bizalmatlanok a „ref” jelöléssel szemben — mégis megkapja az affiliate a jutalékot.

## Hogyan működik röviden?

1. Az affiliate a saját domainjét (és opcionálisan alútvonalát) felveszi az **Affiliate Area** felületén.
2. Te, mint admin, ezt **ellenőrzöd és jóváhagyod**.
3. Ha egy látogató az affiliate oldaláról érkezik, a rendszer a **HTTP referrer** alapján azonosítja a domaint, és **sütiben** eltárolja az affiliate azonosítót.
4. A vásárlások vagy leadek onnantól úgy kerülnek jóváírásra, mint a hagyományos affiliate linkeknél.
5. Opcionálisan használhatod az **„Utolsó referáló jóváírása”** logikát, ha a programodban ez az elv.

## Fő funkciók részletesen

### Adminisztráció és szabályozás
- **Központi Direct Links nézet**: egy helyen látod és kezeled az összes beküldött domaint, státuszokkal (függőben, aktív, inaktív, elutasított).
- **Jóváhagyási folyamat**: csak az általad jóváhagyott domainek működnek. Ez védi a programot a visszaélésektől.
- **Engedélyezés és korlátok**: globálisan vagy egyedi affiliate szinten engedélyezheted, és meghatározhatod, hány domain használható.
- **Domain feketelista**: megadhatsz tiltott domaineket, amelyek forgalmát a rendszer figyelmen kívül hagyja.
- **Email értesítések**: automatikus üzenetek az adminnak új/módosított domainről, az affiliate-nek jóváhagyásról vagy elutasításról.
- **Domain + útvonal támogatás**: nem csak teljes domain, hanem **konkrét alútvonal** is engedélyezhető (például egy blog vagy profil aloldal szintű célzás).

Mit jelent ez a gyakorlatban? Például korlátozhatod, hogy egy partner legfeljebb 2 domaint használjon, vagy csak a blogja „/ajanlo” aloldaláról érkező forgalmat fogadod el.

### Affiliate felület és kényelem
- **Dedikált Direct Links fül** az Affiliate Area-ban a domainek hozzáadására, szerkesztésére, törlésére.
- **Rövidkód** a frontend menedzsmenthez, ha nem az alap Affiliate Area-t használod:

```
[affiliate_direct_links]
```

Az affiliate így stabil, egyszerű élményt kap: nem kell paraméterezett linkeket szerkesztenie, elég a saját tartalmában a normál URL-re hivatkoznia.

### Integrációk és kompatibilitás
- Működik az összes AffiliateWP által támogatott **e‑commerce, tagsági és űrlap integrációval**. Vagyis ugyanúgy keletkezik és könyvelődik a jutalék, csak a hozzárendelés módja lesz „referrer‑alapú”.

### Biztonság és ellenőrzés
- A jóváhagyás célja, hogy a partner **csak a saját tulajdonú vagy kezelt** domaint használhassa.
- A tényleges tulajdonjog ellenőrzése (whois, DNS, meta token, manuális validálás) **az admin felelőssége**.
- A bővítmény **alapértelmezetten kizárja** a saját kereskedői domaint, hogy ne keletkezzen téves hozzárendelés.

## Gyakorlati példák

- **Tartalomkészítő blog**: cikkből a termékoldalra linkel, paraméter nélkül. Az olvasó „tiszta” hivatkozást lát, a rendszer mégis az affiliate-nek írja jóvá a konverziót.
- **Kupon/ajánló oldal**: a kuponlistából közvetlenül visz a boltba. Ha a felhasználó meg is osztja a linket, a paraméter hiánya miatt nem „tűnik el” a hozzárendelés.
- **Platform aloldal**: nagy platformon működő profil/blog konkrét alútvonaláról engedélyezed a forgalmat, így finoman célzol és kizárod a rendszeridegen forgalmat.

## Beállítás röviden

1. Telepítsd és licenceld az **AffiliateWP** alap bővítményt.
2. Telepítsd és aktiváld a **Direct Link Tracking** kiegészítőt.
3. Kapcsold be a funkciót a beállításokban (globálisan vagy affiliate-enként), állíts be **domain-korlátot** és szükség esetén **feketelistát**.
4. Kérd be az affiliate domaineket, **ellenőrizd**, majd **hagyd jóvá**.
5. Kapcsold be az **értesítéseket** az automatikus admin/affiliate e-mailekhez.

## Hibaelhárítás és ismert korlátok

- **Referrer szükséges**: csak akkor történik hozzárendelés, ha a böngésző elküldi a hivatkozó domaint. Könyvjelzőből, kézzel beírt URL-ről érkezve nincs hozzárendelés.
- **HTTPS/HTTP keverés**: biztonságos forrásról nem mindig megy át referrer nem biztonságos célra. Javaslat: a kereskedői oldal legyen **HTTPS**.
- **Böngészőszintű korlátozások**: egyes böngészők szigorúbban kezelik a referrert. Részben segíthet az affiliate oldalon:

```
<meta name="referrer" content="always">
```

- **rel="noreferrer"**: ha a link tartalmazza, a referrer nem jut át. Kérd meg az affiliate-et, hogy ezt **távolítsa el**, és figyeljen a „új lapon megnyitás” beállítások automatikus attribútumaira.
- **Saját domain kizárása**: a kereskedő saját forgalma alapból nem számít affiliate-nek.

## Előnyök és értékajánlat

- **Természetes linkek, nagyobb bizalom**: nincs gyanús paraméter, nőhet az átkattintási arány és a konverzió.
- **SEO-barát megoldás**: tiszta URL-ek, kevesebb manipulációs jel.
- **Egyszerű affiliate‑élmény**: kevesebb hibalehetőség, nincs szükség link‑paraméterezésre.
- **Kevesebb admin teher**: központi kezelés, jóváhagyás, feketelista és e‑mail értesítések.
- **Finom kontroll**: domain- és alútvonal-szintű engedélyezés, per‑affiliate korlátok.

## Kinek ajánlott?

- **Webshopok és SaaS szolgáltatók**: akik affiliate programot futtatnak, és javítanák a konverziós rátát.
- **Tartalomgyártók, bloggerek, influencerek**: akik természetes hivatkozásokat szeretnének a saját oldalukról.
- **Kupon- és deal oldalak**: ahol a paraméteres linkeket gyakran módosítják vagy levágják a felhasználók.
- **SEO‑fókuszú csapatok**: akik tiszta linkstruktúrát és egyszerű hozzárendelést keresnek.

## Tippek a sikeres bevezetéshez

- Állíts be egyértelmű **jóváhagyási szabályokat** a domain beküldéshez (ellenőrzési lépések, elfogadható alútvonalak).
- Kommunikáld az affiliate-eknek: kerüljék a **rel="noreferrer"** használatát, és törekedjenek **HTTPS** forrásra.
- Tesztelj különböző böngészőkben és eszközökön, ellenőrizd a sütik létrejöttét és a hozzárendelést.
- Használd az **„Utolsó referáló”** logikát, ha gyakori az egymást követő ajánlások versengése.