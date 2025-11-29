---
title: "LearnDash LMS - Elementor"
description: "Hivatalos kiegészítő, amely mély integrációt ad a LearnDash LMS és az Elementor között, hogy vizuálisan szerkeszthető, egységes sablonokat készíthess kurzus-, lecke-, téma- és kvíz-oldalakhoz."
sidebar_label: "LearnDash LMS - Elementor"
---

## Mi ez és milyen problémát old meg?

A LearnDash LMS – Elementor egy hivatalos kiegészítő, amely összeköti a LearnDash tanuláskezelő rendszert az Elementor oldalépítővel. Segítségével az LMS-tartalmat ugyanazzal a vizuális eszköztárral és dizájnrendszerrel formázhatod, mint a webhely többi részét. Megszünteti a vizuális széttagoltságot (amikor az LMS-oldalak „kilógnak” a témából), és lehetővé teszi, hogy a kurzus-, lecke-, téma- és kvíz-oldalakat globális, újrahasznosítható sablonokkal kezeld.

## Hogyan működik röviden?

- LearnDash-specifikus Elementor widgeteket ad a szerkesztőhöz, amelyeket drag-and-drop módon illeszthetsz be.
- Az Elementor Pro Theme Builderével készítesz globális Single sablonokat (Course/Lesson/Topic/Quiz), majd feltételes megjelenítési szabályokkal hozzárendeled a megfelelő bejegyzéstípusokhoz.
- Opcionálisan kikapcsolhatod az automatikus widget-beszúrást, ha teljes kontrollt akarsz az elrendezés felett.
- Az Instruktor szerepkör Frontend Course Creator funkciójával az oktatók a frontenden is használhatják az Elementor szerkesztőt.

Követelmények: aktív LearnDash-licenc, LearnDash LMS, LearnDash Elementor Addon, Elementor és Elementor Pro.

## Fő funkciók részletesen

### LearnDash-specifikus Elementor widgetek
- **Post Title**: A tananyag címének megjelenítése a saját tipográfiáddal.
- **Course Infobar**: Előrehaladás, beiratkozási státusz, kurzusinformációk – jól látható „állapotsáv”.
- **Course Certificate**: A tanúsítvány blokkjának kiemelt, vizuálisan egységes megjelenítése.
- **Post Content**: A bejegyzés (kurzus/leckék/témák/kvízek) fő tartalma – a szerkesztett szöveg és média.
- **Course Content**: A kurzus tartalomjegyzéke (leckék, témák, kvízek) rendezett, márkázott formában.

Ezekből a widgetekből úgy állítod össze a sablont, mintha „legóznál”: tetszőleges sorrend, saját stílusok, reszponzív beállítások.

### Globális sablonok és Display Conditions
Az Elementor Theme Builderben létrehozott Single sablonokat **Display Conditions** segítségével hozzárendelheted:
- minden kurzushoz (Single Course),
- minden leckéhez (Single Lesson),
- minden témához (Single Topic),
- minden kvízhez (Single Quiz),
vagy akár konkrét elemekhez, kategóriákhoz, címkékhez. Így egy változtatás azonnal érvényes lesz az összes érintett oldalon.

### Disable Widget Auto Insertion
Bekapcsolva az add-on nem illeszti be automatikusan az LMS-widgeteket. Ezt akkor használd, ha:
- teljes kontrollt szeretnél az elem-elhelyezés felett,
- el akarod kerülni, hogy ugyanaz a tartalom kétszer jelenjen meg (duplikáció).

### Frontend szerkesztés (Instruktor kompatibilitás)
Az oktatók a frontenden a „Edit with Elementor” gombbal nyithatják a vizuális szerkesztőt. Így nem kell backend hozzáférést adnod, mégis gyors, biztonságos munkafolyamatot biztosítasz.

### Egységes vizuális élmény
Az LMS-tartalmak ugyanazt a tipográfiát, színpalettát és komponens-stílust kapják, mint a webhely többi része – kódolás nélkül, kizárólag vizuális beállításokkal.

## Gyakorlati példák

- **Egységes kurzusoldal sablon**: Készíts egy Single Course sablont, és rendeld az összes kurzushoz. A javasolt widget-sorrend:
```
Post Title
Course Infobar
Course Certificate
Post Content
Course Content
```

- **Egyedi megjelenés prémium kurzusoknak**: Hozz létre második sablont, amely csak egy adott kategóriára vonatkozik (pl. „Masterclass”). Így a prémium kurzusok külön dizájnt kapnak, anélkül hogy a többieket érintenéd.

- **Kvízoldalak fókuszált elrendezése**: A Single Quiz sablonban minimalista fejrész, jól látható kezdés/folytatás gombok és egy diszkrét infobar javíthatja a vizsgázói élményt.

- **Instruktorok vizuális szerkesztése**: Az oktató a frontenden módosítja a lecke bevezetőjét és képeit, miközben a tananyagstruktúra és a vizuális keret érintetlen marad.

## Telepítés és első lépések

1. **Előkészítés**: Telepítsd/aktiváld a LearnDash LMS-t, az Elementort és az Elementor Prot.
2. **Add-on telepítés**: A WordPress adminban nyisd meg: LearnDash LMS > Addons, telepítsd és aktiváld a „LearnDash Elementor Addon”-t.
3. **Elementor beállítás**: Ha globális sablonokat használsz, hagyd kikapcsolva az Elementor > Settings > General alatt a Courses, Lessons, Topics, Quizzes közvetlen szerkesztési jelölőit.
4. **Sablon létrehozása**: Templates > Theme Builder > Add New > Single, majd válaszd ki a „Course/Lesson/Topic/Quiz” típust.
5. **Widgetek elhelyezése**: Húzd be a LearnDash widgeteket a kívánt sorrendben. Szükség esetén kapcsold be a „Disable Widget Auto Insertion” opciót.
6. **Publikálás**: Publish > Display Conditions alatt rendeld a sablont a célzott bejegyzéstípus(ok)hoz.
7. **Tesztelés**: Nézd meg bejelentkezett és kijelentkezett nézetben is (diák/oktató szerepkörrel).

## Előnyök és értékajánlat

- **Márkahű megjelenés**: Az LMS-oldalak nem lógnak ki a webhely dizájnjából.
- **Gyors sablonkezelés**: Egy módosítás, azonnali hatás a teljes tananyag-struktúrára.
- **Kevesebb fejlesztés**: Nincs szükség kódra vagy sablonfájlok szerkesztésére.
- **Biztonságos munkafolyamat**: Instruktorok frontenden dolgozhatnak, backend hozzáférés nélkül.
- **Kevesebb hiba**: A duplikált/hiányzó elemek elkerülhetők az automatikus beszúrás szabályozásával.

## Kinek ajánlott?

- **Edtech vállalkozásoknak és akadémiáknak**: Márkaazonos, skálázható tananyag-felületek.
- **Ügynökségeknek/fejlesztőknek**: Gyors kivitelezés, kevesebb egyedi kód.
- **Egyéni oktatóknak**: Vizuális szerkesztés, professzionális megjelenés kódolás nélkül.
- **Szerkesztői csapatoknak**: Frontend munkafolyamat, szigorú szerepkör-kezeléssel.

## Megfontolások és korlátok

- **Elementor Pro szükséges** a Theme Builder funkciókhoz.
- **Globális sablonok használata ajánlott**: Ha túl sok egyedi sablont készítesz, később több helyen kell módosítanod.
- **Auto insertion kezelése**: Ha duplikációt látsz, kapcsold be a „Disable Widget Auto Insertion”-t, és rendezd kézzel a widgeteket.

Ezzel a kiegészítővel az LMS-tartalom úgy fog kinézni és működni, ahogy te szeretnéd: egységesen, átláthatóan és hatékonyan menedzselhetően.