---
title: "MainWP Jetpack Protect Extension"
description: "Ingyenes MainWP-kiegészítő, amely a Jetpack Protect sebezhetőség-vizsgálatait egy központi irányítópultban összesíti és segít a javításban."
sidebar_label: "MainWP Jetpack Protect Extension"
---

## Mi ez és milyen problémát old meg?

A **MainWP Jetpack Protect Extension** egy ingyenes kiegészítő, amellyel a **Jetpack Protect** bővítményt futtató WordPress‑oldalak sebezhetőségi állapotát egyetlen **MainWP** irányítópultból követheted. Ha sok webhelyet kezelsz, nem kell oldalanként belépni és külön ellenőrizni a kockázatokat: a kiegészítő egy helyen gyűjti a napi vizsgálatok eredményeit, jelzi a **core/plugin/téma** sebezhetőségeket, és támogat a **frissítés** vagy **eltávolítás** elindításában.

## Hogyan működik?

- A gyermekoldalakon a **Jetpack Protect** fut, amely a **WPScan** adatbázisára támaszkodva naponta átvizsgálja a WordPress magot, bővítményeket és témákat.
- A **MainWP Jetpack Protect Extension** ezeket az eredményeket **szinkronizálja** és **összesíti** a MainWP irányítópultban.
- A kiegészítő nem tisztít fertőzést és nem futtat saját vizsgálatot; a **javítási lépéseket** (például frissítés vagy eltávolítás) indíthatod el központilag.
- Az eredmények megjelenése a MainWP‑ben a napi ciklus miatt akár **24 órát** is késhet.

Előfeltételek:
- Minden felügyelt webhelyen legyen telepítve a **Jetpack Protect** (önálló plugin).
- A kiegészítőt a **MainWP Dashboard**-on aktiváld.

## Fő funkciók, érthetően

### Központi áttekintő widget
A **MainWP Overview** oldalon egy widget mutatja, hány oldal érintett, mikor volt az utolsó vizsgálat, és mennyi a nyitott sebezhetőség. Gyors rálátás, hogy hova kell figyelned.

### Vulnerabilities nézet (részletes lista)
- Minden gyermekoldalnál látod az **utolsó vizsgálat idejét** és a talált **core/plugin/téma** sebezhetőségek számát.
- Egy sor kibontásával megjelenik a **részletes leírás**, a kockázati szint és a **javasolt lépés**.
- Ahol elérhető, a kiegészítő felkínálja a **frissítést** a javított verzióra, vagy a komponens **letiltását/eltávolítását**.

### Javítási műveletek
- Egy kattintással indíthatsz **frissítést** a problémás bővítményekre/témákra.
- Ha nincs elérhető javítás, a kockázatos komponens **eltávolítása** is kezdeményezhető.
- A folyamat célja, hogy a lehető leggyorsabban **csökkentsd a kitettséget**.

### Bulk műveletek és admin eszközök
- Tömegesen **csatlakoztathatod** a Jetpack Protectet több gyermekoldalhoz.
- **Elrejtheted** a Jetpack Protect plugint a gyermekoldal adminjából, vagy **leválaszthatod** az integrációt – mindezt központilag.
- Az **Overview** lapról az összes releváns művelet elérhető, így egységes a munkafolyamat.

### Napi vizsgálatok státusza
- Jól látható, mely oldalaknál futott le a **napi automatikus szkennelés**, és hol várható még szinkronizáció.

## Gyakorlati példák

- Ügynökségi helyzet: kezelsz **50 webhelyet**. A widget jelzi, hogy 6 oldalon kritikus bővítményhibák vannak. A Vulnerabilities nézetben kibontod a listát, és egy lépésben frissíted az érintett bővítményeket. Időnyereség: órák helyett percek.
- Nem javítható téma: egy régi téma ismert hibával szerepel, de nincs frissítés. A kiegészítő javasolja az **eltávolítást**. Ideiglenesen letiltod, majd biztonságosabb témára migrálsz.
- Új ügyfélcsomag: egyszerre veszel fel **10 új oldalt** a MainWP alá. Bulk módban csatlakoztatod a Jetpack Protectet, és másnap már teljes képet kapsz az összes sebezhetőségről.

## Előnyök és értékajánlat

- **Időmegtakarítás**: nincs többé oldalankénti bejelentkezés és manuális ellenőrzés.
- **Gyors reakció**: a napi vizsgálatok és a központi riasztások miatt hamarabb lépsz.
- **Egységes folyamat**: ugyanaz a javítási rutin minden oldalon, kevesebb hiba, kevesebb felelősségi rés.
- **Naprakész adatbázis**: a WPScan/Jetpack biztonsági adatbázisára épülő riasztások megbízhatóak és aktuálisak.
- **Skálázhatóság**: a bulk műveletek miatt könnyen kezeled a tucatnyi vagy száz webhelyes portfóliót.

## Kinek ajánlott?

- **WordPress ügynökségeknek**: több ügyfélwebhely állapotának centralizált követése.
- **Szabadúszó fejlesztőknek/üzemeltetőknek**: gyors, átlátható biztonsági riport és javítás.
- **Vállalati IT‑csapatoknak**: belső WordPress‑flották homogén felügyelete és szabványosított eljárások.
- **MSP-knek**: skálázható felügyelet, kevesebb manuális adminisztráció.

## Gyors kezdés

1. Telepítsd a **MainWP Jetpack Protect Extensiont** a MainWP Dashboardon.
2. Telepítsd a **Jetpack Protect** plugint minden felügyelt gyermekoldalra.
3. Csatlakoztasd a Jetpack Protectet tömegesen a MainWP‑ből.
4. Nyisd meg a kiegészítő nézetét, és kezdd a felülvizsgálatot.

```text
MainWP > Extensions > Jetpack Protect
Vulnerabilities > [Oldal kibontása] > Update / Deactivate / Remove
```

Tipp: Állíts be heti rutinellenőrzést a widget és a Vulnerabilities lista átnézésére, hogy minimalizáld a kitettséget.

## Korlátok és fontos megjegyzések

- **Napi ciklus**: a vizsgálatokat a Jetpack Protect végzi naponta; a MainWP‑ben az eredmények megjelenése akár 24 órát is késhet.
- **Nem malware‑tisztító**: a kiegészítő nem távolít el fertőzést; elsődleges javítási út a komponensek frissítése vagy eltávolítása.
- **On‑demand vizsgálat és WAF**: az azonnali vizsgálatok és egykattintásos javítások a **Jetpack Scan** szolgáltatással és a hozzá tartozó **Jetpack Scan Extension** használatával érhetők el.
- **Jetpack fő plugin nem szükséges**: a Jetpack Protect önállóan fut.
- **Előfeltétel**: minden felügyelt oldalon legyen telepítve a Jetpack Protect, különben nincs mit összesíteni.

## Megkülönböztetés: Protect Extension vs. Scan Extension

- **Jetpack Protect Extension**: az ingyenes Jetpack Protect napi sebezhetőségi eredményeit jeleníti meg és támogatja a frissítést/eltávolítást.
- **Jetpack Scan Extension**: a felhőalapú Scan szolgáltatással dolgozik, **on‑demand** vizsgálatot, **WAF**‑ot és haladó javítási opciókat kínál előfizetéssel.

Ha szeretnéd, készíthetek telepítési ellenőrzőlistát és üzemeltetési playbookot heti/havi feladatokkal, hogy a csapatod gyorsan és konzisztensen dolgozhasson.