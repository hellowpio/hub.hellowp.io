---
title: "Teams for WooCommerce Memberships"
description: "WooCommerce-kiegészítő, amellyel egyéni tagságok helyett csapatoknak/csoportoknak adhatsz hozzáférést, központosított számlázással és helykezeléssel."
sidebar_label: "Teams for WooCommerce Memberships"
---

## Mi ez és milyen problémát old meg?

A Teams for WooCommerce Memberships egy bővítmény, amellyel a tagsági hozzáféréseket nem egyéneknek, hanem **csapatoknak/csoportoknak** adhatod el. Egy „tulajdonos” intézi a vásárlást és a számlázást, majd **helyeket (seat)** oszt ki a tagoknak, akik megkapják ugyanazokat az előnyöket, mint az egyéni tagok. Ezzel megoldod a B2B értékesítés egyik legnagyobb gondját: nem kell minden munkatársnak külön vásárolnia és számlát kezelnie.

Követelmény: szükséged van a WooCommerce Memberships bővítményre. Előfizetéses csapatokhoz a WooCommerce Subscriptions használata ajánlott.

## Hogyan működik röviden?

1. Létrehozol egy terméket, és bekapcsolod a **Team Membership** funkciót.  
2. Beállítod az árazást (főnként vagy csomagonként), valamint a min./max. helyszámot.  
3. A vevő megadja a csapat nevét, kifizeti a rendelést, majd a **Saját fiók > Teams** felületen meghívja a tagokat (linkkel vagy e-maillel).  
4. A csapat tagsági hozzáférése a rendeléshez (vagy előfizetéshez) kötötten működik; a számlázás központosított marad.

## Fő funkciók részletesen

- **Csapat-/csoporttagság értékesítése**  
  Bármely egyszeri vagy előfizetéses termékből készíthetsz csapatterméket. A vásárló csapatnevet ad meg, és akár dönthet arról is, hogy ő maga foglal-e helyet a keretből.

- **Rugalmas árazás és helylimit**  
  Választhatsz **per-member** (főnkénti) vagy **per-team** (csomag) árazást. Meghatározhatsz **minimális és maximális helyszámot**, így kontrollálhatod a licencelési kereteket. A tulajdonos később is **bővítheti a helyeket**; előfizetés esetén a rendszer arányosítja a díjat a ciklus hátralévő részére.

- **Szerepkörök és jogosultságok**  
  - **Tulajdonos**: vásárlás, számlázás, teljes csapatkezelés.  
  - **Menedzser**: tagok kezelése (engedélyezhető).  
  - **Tag**: a tagsági előnyök felhasználója.  
  Beállíthatod, hogy a tulajdonosnak kötelező-e helyet foglalnia, illetve a menedzserek adhassanak-e hozzá új menedzsereket.

- **Tagfelvétel és meghívás**  
  - **Nyilvános csatlakozási link**: gyors és kényelmes; bármikor újragenerálható.  
  - **E-mail meghívás**: biztonságosabb, egyenkénti hozzáadás.  
  Ezzel a csapat önállóan kezeli a tagságait, tehermentesítve az adminisztrációdat.

- **Ülés-/helykezelés és hozzáférés**  
  A helyek számát a tulajdonos később növelheti. Előfizetéses csapatnál a hozzáadott helyek költsége **prórációval** számolódik. Lemondás vagy visszatérítés esetén a **teljes csapat hozzáférése** változik ennek megfelelően.

- **Admin eszközök**  
  A háttérben listázhatod és szerkesztheted a csapatokat (név, helylimit, tagok), **manuálisan hozhatsz létre csapatot**, és tagokat adhatsz/vehetsz el. Elérhető **export** (azonosító, slug, név, szerep). CSV-importtal a csapatmezők jelenleg nem frissíthetők.

- **Előfizetések integráció**  
  A csapat teljes hozzáférése követi az előfizetés állapotát (aktív, szüneteltetett, lemondott). Előfizetés-váltáskor új csapat jöhet létre; a tagokat ilyenkor újra meg kell hívni.

- **Testreszabás és e-mailek**  
  Átnevezheted a „team” kifejezést (pl. „klub”, „család”), szabályozhatod az eltávolítási jogokat és a menedzseri hatásköröket, valamint beállíthatod a „hamarosan lejár” értesítések időzítését.

## Gyakorlati példák

- **B2B e-learning**: Egy cég 50 fős hozzáférést vásárol. A HR a menedzser, ő hívja meg az alkalmazottakat. Ha év közben bővül a csapat, további helyeket vesz, az előfizetés díja arányosan nő.
- **Digitális magazin családi csomag**: Egy előfizetés, 5 hely. A családfő a tulajdonos, e-mailben hívja meg a családtagokat.
- **Szakmai klub vállalati tagság**: Egy tagság keretében a cég marketing és sales csapata kap kedvezményeket és zárt anyagokat; a menedzser kezeli a belépőket.
- **Oktatási intézmény**: Egy tanár megvásárol egy kurzus-csapatot az osztálynak; a diákokat linkkel csatlakoztatja.

## Beállítás lépésről lépésre (rövid)

1. Hozz létre egy új terméket, és kapcsold be a **Team Membership** opciót.  
2. Válassz **per-member** vagy **per-team** árazást; add meg a min./max. helyszámot.  
3. Rendeld a terméket a megfelelő **Memberships tervhez**.  
4. Döntsd el, hogy a tulajdonos **foglal-e helyet**.  
5. Mentsd a terméket, majd teszteld a vásárlási folyamatot és a **Saját fiók > Teams** kezelőfelületet.

Példakonfiguráció:
```
Árazás: per-member
Minimum hely: 5
Maximum hely: 200
Tulajdonos foglal helyet: Igen
„Team” elnevezése: „Csapat”
Menedzser jogosultság: tagok kezelése engedélyezve
```

## Előnyök és értékajánlat

- **Központosított számlázás**: egy vásárlás, több felhasználó hozzáférése.  
- **Kevesebb admin**: a tagkezelést a tulajdonosra/menedzserre bízod.  
- **Skálázhatóság**: rugalmas helyszám és árazás, próráció előfizetésnél.  
- **Konzisztens jogosultságok**: a csapattagok ugyanazokat az előnyöket kapják, mint az egyéni tagok.  
- **Testreszabhatóság**: elnevezések, szerepkörök, e-mailek finomhangolása.

## Célközönség

- **E-learning és tudásbázisok**: csapat- vagy vállalati licenceléshez.  
- **Digitális magazinok és klubok**: családi/csoportos előfizetésekhez.  
- **B2B szolgáltatók**: ahol fontos a központosított számlázás és a helykeretek.  
- **Oktatók, intézmények**: osztályok, évfolyamok egyszerű kezelése.  
- **Fejlesztők/üzemeltetők**: akik hookokkal, egyedi jogosultságokkal integrálnának.

## Korlátozások és jó gyakorlatok

- **Ne** alakíts át meglévő egyéni tagsági terméket csapattermékké; hozz létre **újat**.  
- Egy csapat **egy** tagsági tervhez ad hozzáférést; a hozzáférési idő a terv beállításaival azonos.  
- Előfizetés-váltáskor **új csapat** jön létre; a tagokat újra kell hívni.  
- CSV-importtal jelenleg a csapatmezők **nem** frissíthetők.  
- A nyilvános csatlakozási link kevésbé biztonságos; szükség esetén **forgasd újra**.  
- A bővítményt a SkyVerge fejleszti; használatához WooCommerce Memberships szükséges.

Ezzel a bővítménnyel célzottan és hatékonyan tudsz csapatoknak értékesíteni, miközben csökken az adminisztráció, nő a skálázhatóság, és átlátható marad a hozzáféréskezelés. Ha csoportos hozzáféréseket adnál el, ez az eszköz a leggyorsabb út a professzionális megvalósításhoz.