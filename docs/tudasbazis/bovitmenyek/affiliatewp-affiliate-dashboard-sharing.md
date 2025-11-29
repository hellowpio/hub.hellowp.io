---
title: "AffiliateWP - Affiliate Dashboard Sharing"
description: "Egykattintásos affiliate linkmegosztás a partnerfelületről; ma beépítve az AffiliateWP-be és az Affiliate Portalba, UTM-követéssel és QR-kóddal."
sidebar_label: "AffiliateWP - Affiliate Dashboard Sharing"
---

## Mi ez és milyen problémát old meg?

Az AffiliateWP – Affiliate Dashboard Sharing eredetileg egy hivatalos kiegészítő volt, ami a partnereidnek egykattintásos linkmegosztást adott az Affiliate Area (partnerfelület) oldalán. A cél: megszüntetni a másolás–beillesztés körüli hibákat és súrlódást, hogy a partnerek gyorsabban, pontosabban tudjanak posztolni. Ma ugyanez a funkció az AffiliateWP alapbeállításai közé beépítve érhető el **Affiliate Link Sharing** néven, míg az új **Affiliate Portal** kiegészítő saját, natív megosztást tartalmaz. A régi add-on a Portal mellett már nem szükséges.

## Hogyan működik röviden?

- A WordPress adminban a következő útvonalon kapcsolhatod: **AffiliateWP » Settings » Affiliates » Affiliate Link Sharing**.
- Itt kiválaszthatod, mely csatornák legyenek elérhetők a partnereknek (pl. Facebook, LinkedIn, X, E-mail, QR-kód).
- X és E-mail esetén további mezők nyílnak meg (előre kitöltött szöveg, tárgy).
- Mentés után az Affiliate Area felületen a partner saját hivatkozása alatt megjelennek a megosztási ikonok; kattintásra az adott platform azonnal a megfelelően paraméterezett linkkel nyílik meg.
- **Affiliate Portal** használatakor a megosztás beépített; QR-kódhoz külön kiegészítő érhető el. A régi Dashboard Sharing add-on itt nem támogatott.

## Fő funkciók részletesen

### Egykattintásos megosztás
A partnerek az ikonokra kattintva azonnal megnyithatják a választott csatorna megosztó felületét. A rendszer automatikusan a partner saját azonosítójával és – ha kéred – kampányparaméterekkel látja el a linket. Ezzel elkerülhetők a hibás vagy hiányos linkek.

### Választható csatornák
Te döntöd el, mely megosztási opciók jelenjenek meg. Ha például a programod főként LinkedInre épül, egyszerűen kikapcsolhatsz minden mást, hogy tiszta, célzott felületet kapjanak a partnerek.

### E-mail megosztás testreszabása
Előre megadhatsz tárgyat és bevezető szöveget, így a partnerek egy gombnyomással kész, szerkeszthető e-mail vázlatot kapnak. Ez kiváló, ha a partnereid hírlevelet küldenek vagy személyes megkeresést végeznek.

Példa sablon:
```
Tárgy: Nézd meg ezt az ajánlatot!
Üzenet: Szia! Ajánlok neked egy oldalt, ahol kedvezményesen vásárolhatsz. Itt találod: [AFFILIATE_LINK]
```

### Kampánykövetés UTM-mel
A megosztási csatorna alapján automatikusan hozzáadhatók UTM paraméterek, így pontosabban elemezheted, honnan jött a forgalom és a konverzió.

Példa paraméterezés:
```
?ref=AFFILIATE_ID&utm_source=x&utm_medium=affiliate&utm_campaign=dashboard_share
```

### QR-kód generálás
A partnerek a saját linkjükhöz QR-kódot kérhetnek és letölthetnek. Ez különösen hasznos offline helyzetekben: nyomtatott szórólap, rendezvény roll-up, csomagolás.

### Integrációk
- **Custom Affiliate Slugs**: ha egyedi slugokat használsz, a partner felületen a slugos és a normál link között lehet váltani, és mindkettő megosztható.
- **Multi‑Tier Commissions**: a partner hálózati (toborzó) linkje ugyanúgy megosztható az összes csatornán, segítve az al-partnerek szerzését.

### Admin oldali beállítások
- Kapcsold be a kívánt csatornákat az AffiliateWP beállításaiban.
- Állíts be előre kitöltött szöveget X és E-mail esetén.
- Mentés után a partnerek azonnal látják az ikonokat az Affiliate Area oldalon.
- **Affiliate Portal** esetén a megosztás beépített; QR-kódhoz külön kiegészítő szükséges.

## Gyakorlati példák

- **Közösségi poszt 10 másodperc alatt**: a partnered rákattint az X ikonra, a felugró szerkesztőben már ott a saját azonosítós link és az előre megadott üzenet. Szerkeszt, posztol – kész.
- **Gyors hírlevél-beillesztés**: e-mail megosztásra kattintva megnyílik a levelező kliens sablonnal és az affiliate linkkel. A partner csak személyre szabja és küldi.
- **Offline kampány**: QR-kód letöltése, nyomtatás flyeren. A vásárló mobilról azonnal a hivatkozott oldalra jut, a jutalék mérhető.
- **Többszintű toborzás**: a hálózati toborzó link megosztása LinkedInen; az új al-partnerek után a felsőbb szint is jutalékot kap.

## Előnyök és értékajánlat

- **Kevesebb hiba, több megosztás**: nincs több elrontott link vagy hiányzó azonosító.
- **Konzisztens mérés**: automatikus UTM-ekkel tisztábban látod, mely csatorna hoz konverziót.
- **Gyors bevezetés**: percek alatt beállítható, a partnerek azonnal használják.
- **Kisebb támogatási teher**: a “hol találom a linkem?” és “hogyan osszam meg?” kérdések száma csökken.
- **Jobb partnerélmény**: látható, kézre álló ikonok, kevesebb kattintás.

## Célközönség

- **Webáruházak és SaaS szolgáltatók**: akik affiliate programot futtatnak, és a partnereik aktivitását szeretnék növelni.
- **Marketing- és partnerprogram-menedzserek**: akik átlátható, csatornánként mérhető kampányokat akarnak.
- **Affiliate partnerek**: akik gyorsan, hibamentesen szeretnének posztolni, e-mailt írni vagy QR-kódot használni.
- **Többszintű programok üzemeltetői**: ahol a hálózati toborzás kulcsfontosságú.

## Kompatibilitás és licenc megjegyzések

- **Affiliate Area vs. Affiliate Portal**: a klasszikus Affiliate Area esetén a megosztási funkció az AffiliateWP beállításaiból kapcsolható. Az Affiliate Portal saját megosztási felületet ad; a régi Dashboard Sharing add-on ott nem szükséges.
- **Pro kiegészítők**: a Custom Affiliate Slugs és a Multi‑Tier Commissions külön licencet igényelhetnek. Maga a megosztási funkció az AffiliateWP-ben érhető el.

## Tipp: ajánlott alapbeállítások

- Engedélyezd a Facebook, LinkedIn, X, E-mail és QR-kód csatornákat.
- Állíts be rövid, egységes e-mail tárgyat és nyitó szöveget.
- Használj konzisztens UTM sémát:
```
utm_source=[CSATORNA]  utm_medium=affiliate  utm_campaign=dashboard_share
```
- Teszteld partnerként az Affiliate Area/Portal felületet, és nézd meg, hogy a linkek és a QR-kódok helyesen működnek-e.