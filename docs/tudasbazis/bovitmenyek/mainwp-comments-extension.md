---
title: "MainWP Comments Extension"
description: "Központi kommentmoderálás több WordPress-webhelyen a MainWP Dashboardból, tömeges műveletekkel és fejlett szűréssel."
sidebar_label: "MainWP Comments Extension"
---

## Mi ez és milyen problémát old meg?

A MainWP Comments Extension egy Pro kiegészítő, amellyel a MainWP Dashboardból egy helyen kezelheted az összes csatlakoztatott webhelyed (Child Site-ok) hozzászólásait. Ha eddig külön-külön kellett belépned minden admin felületre, hogy jóváhagyj, spamre tegyél vagy törölj kommenteket, ez a bővítmény megszünteti a szétszórt, időrabló moderálást és egységes, gyors munkafolyamatot ad.

## Fő funkciók részletesen

### Központosított moderálás
Egyetlen nézetből eléred az összes Child Site kommentjeit. Ugyanazokat a műveleteket végzed, mint a natív WordPress-ben:
- **Jóváhagyás / visszavonás**: azonnal publikussá teheted vagy várólistára teheted a kommentet.
- **Spam / nem spam**: jelöld spamnek, vagy vedd le a spamszűrőt, ha téves riasztás volt.
- **Szerkesztés**: javíts elírásokat vagy távolítsd el a szabályzatba ütköző részeket.
- **Törlés / visszaállítás**: a kukába helyezés után végleg törölhetsz; a WordPress logikát követi.

### Tömeges műveletek
Nem kell egyesével kattintgatni. Kijelölsz több kommentet, majd egyszerre hajtod végre a jóváhagyást, visszavonást, spamre jelölést, spam feloldását, visszaállítást vagy törlést. Több site, több száz komment – egyetlen művelettel.

### Fejlett szűrés és keresés
Gyorsan megtalálod a releváns bejegyzéseket:
- **Státusz** szerinti szűrés: függőben, jóváhagyott, spam, kuka.
- **Kulcsszó** alapú keresés: név, email, tartalom vagy URL szerint.
- **Dátumtartomány**: sprintzárás, kampány vagy audit időszaka szerinti szűrés.

### Recent Comments widget
A Dashboard Site Overview részén egy áttekintő widget mutatja a legújabb jóváhagyott, függő és törölt kommenteket. Innen rögtön ráléphetsz a szükséges műveletekre, így nem marad elvarratlan szál.

### Egyedi megjelenítés és CPT-támogatás
Szabályozhatod, hány karaktert jelenítsen meg a felület kommentenként, hogy gyorsan átlásd a lényeget. Nemcsak bejegyzések és oldalak, hanem **egyedi bejegyzéstípusok** kommentjei is kezelhetők.

### Teljes MainWP-integráció
Az összes művelet a Dashboardból indul és a csatlakoztatott Child Site-okon hajtódik végre. A folyamat egységes, skálázható és auditálható.

## Hogyan működik? (Workflow)

1. Nyisd meg a MainWP Dashboardot.
2. Lépj az Extensions menübe és válaszd a Comments modult.
3. Válaszd ki, mely Child Site-ok kommentjeit szeretnéd látni.
4. Állítsd be a szűrőket (státusz, kulcsszó, dátum).
5. Kattints a Show Comments gombra.
6. Végezd el az egyedi vagy tömeges műveleteket.

Rövid útvonal:
```
MainWP Dashboard → Extensions → Comments → Search Options → Show Comments
```

Hasznos tudnivalók:
- Alapértelmezetten lekérdezésenként webhelyenként korlátozott számú kommentet kér le a rendszer, hogy gyors maradjon a felület.
- Törléskor a komment először a **kukába** kerül; innen dönthetsz a végleges törlésről vagy visszaállításról.

## Gyakorlati példák

- Ügynökségi moderálás: Reggel bejelentkezel, szűrsz „Függőben” státuszra és az elmúlt 24 órára, majd tömegesen jóváhagyod a szabályos kommenteket, a gyanúsakat spamre teszed.
- Kampány utáni triázs: Kulcsszóra (pl. terméknév) szűrsz, hogy csak a kampányhoz kapcsolódó visszajelzéseket lásd, és priorizáld az ügyfélreakciókat.
- Minőségbiztosítás: Végigmész az „Un-spam” szűrőn, és helyreállítod a tévesen spamnek jelölt értékes hozzászólásokat.

## Előnyök és értékajánlat

- **Időmegtakarítás**: Tíz bejelentkezés helyett egy felület. A tömeges műveletek drámaian csökkentik a kattintások számát.
- **Gyors reakció**: A Recent Comments widget és a szűrők segítenek, hogy semmi ne maradjon a várólistán.
- **Következetesség**: Ugyanazokat a szabályokat érvényesíted minden webhelyen, kevesebb hibával.
- **Skálázhatóság**: Több tucat vagy száz site kommentjei is kezelhetők ugyanazzal a folyamattal.
- **Központi kontroll**: Auditálható, átlátható moderálás egyetlen irányítópultból.

## Kinek ajánlott?

- **Webügynökségeknek**: Ha sok ügyféloldalt kezelsz és SLA-kat tartasz, a központosítás kulcs.
- **Tartalomportfóliót üzemeltetőknek**: Nagy forgalmú bloghálózatok, magazinok kommentáradatának szűrése és moderálása.
- **Közösségmenedzsereknek**: Gyors triázs kulcsszó és dátum alapján, visszajelzések priorizálása.
- **Karbantartó csapatoknak**: Rendszeres napi vagy heti kommentkörök egyszerűsítése.

## Jó gyakorlatok

- Használd együtt **anti-spam** bővítményekkel: a Comments Extension moderál, nem helyettesít spamszűrőt.
- Nagy mennyiségnél mindig állíts be **státusz + dátum** szűrőt, így azonnal a fontos tételekkel kezdesz.
- Alakíts ki **munkamenetet**: pl. először spam triázs, majd függőben lévők átnézése, végül minőségellenőrzés.
- Állítsd be a megjelenített **kommenthossz** értékét, hogy gyorsabban tudd átfutni a tartalmat.

## Adatvédelem és követelmények

- A bővítmény a MainWP Dashboarddal együttműködve működik; a kezelt webhelyeknek Child Site-ként kell csatlakozniuk.
- Az adatkezelés a MainWP bővítményeire érvényes adatvédelmi feltételek szerint történik.
- A műveletek a Child Site-okon futnak le, a Dashboard csak a központi vezérlőfelületet biztosítja.

Ezzel az eszközzel a kommentmoderálás több site esetén is egyszerű, egységes és gyors lesz. Ha napi szinten kezelsz hozzászólásokat több WordPress-webhelyen, gyakorlatilag azonnal megtérül az idő- és erőforrás-megtakarítás.