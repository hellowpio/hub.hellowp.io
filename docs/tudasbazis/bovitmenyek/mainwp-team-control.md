---
title: "MainWP Team Control"
description: "Szerepkör-alapú, finomhangolt hozzáférés-kezelés a MainWP Dashboardhoz ügynökségeknek és csapatoknak."
sidebar_label: "MainWP Team Control"
---

## Mi ez és mit old meg?

A MainWP Team Control egy hivatalos, Pro kiegészítő a MainWP-hez, amellyel részletesen szabályozhatod, ki mit láthat és mit végezhet el a MainWP Dashboardon. Ha több kollégával, alvállalkozóval vagy részlegekkel dolgozol, nem kell mindenkinek teljes hozzáférést adnod az összes ügyfél-webhelyhez és modulhoz: precízen beállíthatod a szükséges minimumot (least privilege), így nő a biztonság és csökken a hibázás esélye.

## Hogyan működik a hozzáférés-kezelés?

A logika három pillérre épül:
- **Egyedi szerepkörök**: létrehozol tetszőleges “custom role”-okat.
- **Jogosultságcsoportok**: meghatározod, hogy az adott szerep milyen MainWP funkciókhoz és kiegészítőkhöz férhet hozzá.
- **Webhely-hozzáférés**: megadod, mely gyermek webhelyekre érvényes a szerep – egyenként vagy **Site Tag** csoportok alapján.

Mindez a MainWP Dashboardon belül érvényes. Nem módosítja a WordPress általános (WP Admin) jogosultságait.

## Fő funkciók részletesen

- **Egyedi szerepkörök létrehozása**
  - Tetszőleges számú szerepet hozhatsz létre névvel és leírással. Ezeket később újrafelhasználhatod és finomíthatod.
- **Granuláris jogosultságok**
  - Szerepenként kiválaszthatod, mely MainWP funkciók (pl. frissítések, bővítmény- és sablonkezelés) és mely kiegészítők (pl. Backups, Reports, Cost Tracker, Insights) legyenek elérhetők. Így különválaszthatod az operatív, riportáló vagy pénzügyi feladatokat.
- **Hozzáférés webhelyenként vagy Site Tag alapon**
  - Pontosan meghatározhatod, mely site-ok látszanak egy szerep számára. Site Tag-ek használatával csoportosíthatod az ügyfélportfóliót (pl. “Ügyfél-A”, “WooCommerce”, “VIP”), és a szerep automatikusan megkapja az adott címkéhez tartozó régi és új webhelyeket. Ha új site-ot adsz a taghez, szükség esetén mentsd újra a szerepet, hogy azonnal érvényesüljön.
- **Korlátlan csapattag**
  - Nincs felhasználószám-limit a Dashboardban: a csapatod méretét a működésed diktálja.
- **Szoros integráció**
  - Nem kell külső szolgáltatás vagy API: minden beállítás a MainWP-n belül történik, egységes felületen.

## Gyakorlati példák

- **Ügynökségi munkamegosztás**
  - A junior kollegának adsz egy szerepet, amely csak a **frissítések** és **megtekintés** jogot tartalmazza az ő ügyfélcsoportjára; míg a szenior hozzáfér a **biztonsági mentésekhez**, **riportokhoz** és több site-csoporthoz.
- **Ügyfélalapú delegálás**
  - A “Projektvezető – Ügyfél-B” szerep csak a “Ügyfél-B” címkéjű site-okat látja, így nem fér hozzá más ügyfelek adataihoz.
- **Modulonkénti elkülönítés**
  - A “Bővítmény-admin” szerep kezelheti a bővítményeket és sablonokat, de nem láthatja a pénzügyi modulokat. Egy másik szerep kizárólag a **jelentések** készítéséhez kap hozzáférést.
- **Alvállalkozó bevonása**
  - Ideiglenes szerep, csak a kijelölt projekt site-jaihoz és a szükséges modulokhoz, a munka végeztével a szerep vagy a hozzárendelés törölhető.

## Előnyök, miért éri meg

- **Biztonság és megfelelőség**: csak a szükséges hozzáférések, kevesebb véletlen módosítás.
- **Skálázhatóság**: szerepekkel és címkékkel könnyű karbantartani a jogokat, akár több száz site esetén is.
- **Operatív hatékonyság**: a kollégák csak azt látják, amire szükségük van – gyorsabb munkavégzés, kevesebb tévedés.
- **Idő- és költségmegtakarítás**: kevesebb mikromenedzsment, egy felületen kezelhető jogosultságok.

## Kinek ajánlott?

- **Webes ügynökségeknek** és **MSP-knek**, akik sok ügyfél-site-ot kezelnek.
- **Vállalati digitális csapatoknak**, ahol több szerepkör dolgozik együtt.
- **Freelancereknek VA-kkal**, akik bizonyos feladatokat delegálnának, de nem adnának teljes hozzáférést.
- **Adatvédelemre és auditálhatóságra fókuszáló szervezeteknek**, ahol a legkisebb szükséges jogosultság elve fontos.

## Beüzemelés – alap workflow

1. **Szerep létrehozása**  
   Menj a Team Control felületre és hozz létre egy új szerepet (név, leírás).
2. **Jogosultságok beállítása**  
   Válaszd ki, mely Dashboard funkciók és kiegészítők érhetők el a szerepnek.
3. **Webhely-hozzáférés megadása**  
   Jelöld ki az engedélyezett site-okat egyenként, vagy rendelj a szerephez **Site Tag**-eket a csoportalapú delegáláshoz.
4. **Felhasználók hozzárendelése**  
   A Dashboard felhasználói közül válaszd ki, kinek adod az új szerepet.
5. **Karbantartás**  
   Új site felvételekor add hozzá a megfelelő taghez. Ha nem jelenik meg azonnal a szerep hatálya alatt, mentsd újra a szerepet.

### Minta szerepkör–jogosultság mátrix

```
Szerep: Junior Operátor
- Funkciók: Frissítések megtekintése/alkalmazása
- Kiegészítők: Reports (csak megtekintés)
- Hozzáférés: Tag = "Ügyfél-A"

Szerep: Bővítmény-admin
- Funkciók: Bővítmény- és sablonkezelés
- Kiegészítők: Backups
- Hozzáférés: Site-ok egyenként kijelölve

Szerep: Senior Technikus
- Funkciók: Teljes műszaki hozzáférés (kivéve pénzügyi)
- Kiegészítők: Backups, Reports, Insights
- Hozzáférés: Tag = "WooCommerce"

Szerep: Pénzügyi Elemző
- Funkciók: Jelentéskészítés
- Kiegészítők: Cost Tracker, Reports
- Hozzáférés: Tag = "VIP-Ügyfelek"
```

## Korlátok és jó gyakorlatok

- **Hatókör**: a Team Control csak a MainWP Dashboardon érvényes; a WordPress általános admin felületét nem korlátozza. Ha a Dashboard-oldal WP Adminját is szűrnéd, külön szerepkörkezelő bővítményre van szükség.
- **Elkülönített Dashboard**: érdemes a MainWP-t külön, “üres” WordPress telepítésen futtatni, így ritkábban kell a WP Admin jogokat piszkálni.
- **Nagy site-szám kezelése**: használj következetes **Site Tag**-eket; ez gyorsítja a delegálást és a későbbi karbantartást.
- **Naprakészen tartás**: frissítsd a kiegészítőt és a MainWP-t, hogy a legújabb jogosultság-opciók és használhatósági finomítások elérhetők legyenek.

Összességében a MainWP Team Control akkor ad igazi értéket, ha több emberrel és sok webhellyel dolgozol: egyszerűvé teszi a szerepek kialakítását, a hozzáférések szétosztását és a mindennapi, biztonságos üzemeltetést.