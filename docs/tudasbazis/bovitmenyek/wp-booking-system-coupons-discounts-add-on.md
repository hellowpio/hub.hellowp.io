---
title: "WP Booking System - Coupons & Discounts Add-on"
description: "Prémium kiegészítő automatikus kedvezményekhez és kuponkódokhoz a WP Booking System foglalási folyamataiban."
sidebar_label: "WP Booking System - Coupons & Discounts Add-on"
---

## Mi ez és milyen problémát old meg?

A Coupons & Discounts Add‑on a WP Booking System prémium kiegészítője, amellyel automatizált kedvezményeket és kuponkódos promóciókat állíthatsz be napi alapú foglalásokhoz. Segít abban, hogy ne manuálisan variáld az árakat hosszabb tartózkodásokra, hétköznapokra, visszatérő vendégekre vagy időzített akciókra, hanem feltételek alapján a rendszer számoljon mindent helyetted. Így pontos árkalkulációt, mérhető kampányokat és jobb konverziót érsz el.

## Hogyan működik röviden?

- Automatikus kedvezményeket hozol létre szabályokkal (feltételekkel), amelyek a foglalás adatai alapján aktiválódnak.
- Kuponkódokat adhatsz ki, amelyeket a vendég az űrlapon megadva érvényesíthet.
- A kedvezmények számítási módja, időzítése és láthatósága testre szabható.
- Minden szabály naptár(ak)hoz köthető, időszakokra szűkíthető, és akár „negatív kedvezményként” felárat is adhatsz.

## Fő funkciók részletesen

### Automatikus kedvezmények (Discounts)

- Kedvezmény típusa: választhatsz **fix összeg** vagy **százalék** között.
- Alkalmazás módja:
  - **Per day**: naponta levonandó összeg (csak fix összeg esetén).
  - **Per booking**: egyszeri kedvezmény az egész foglalásra.
- Számítási alap:
  - **Teljes ár** (naptárár + űrlap‑extrák), vagy
  - **Csak a naptárár** (százalék esetén választható).
- Láthatóság: megjelenítheted külön sorban a kalkulációban, vagy **rejtve** beépítheted az árba.
- Időzítés és érvényesség:
  - Beállíthatsz **dátumtartományokat** és „Validity inclusion” opciókat:
    - csak a kezdőnap számít,
    - kezdő VAGY zárónap,
    - kezdő ÉS zárónap.
- Célzott naptárak: kiválaszthatod, mely naptár(ak)ra érvényes a kedvezmény.
- Feltételek (kombinálhatók, csoportosíthatók), például:
  - foglalt napok száma,
  - rendelés összértéke,
  - foglalás kezdő/záró **hétköznapja**,
  - hátralévő napok száma a mai naphoz képest (**early‑bird/last‑minute**),
  - napi ár,
  - űrlapmező értéke (pl. „Hűségkártya = igen”),
  - felhasználó státusza (bejelentkezett-e),
  - felhasználói szerepkör.
- Negatív kedvezmények: ugyanazzal a logikával **felárat** is adhatsz (pl. extra személy vagy speciális szolgáltatás esetén).

### Kuponkódok (Coupons)

- Kupon létrehozása: kód + leírás, a foglalási űrlapra a **Coupon** mezőt húzod be a Form Builderben.
- Kupon típusa és értéke: **fix összeg** vagy **százalék**.
- Alkalmazás módja: **Per day** (csak fix) vagy **Per booking**.
- Számítási alap: **teljes ár** vagy **csak naptárár** (százalék esetén).
- Alkalmazási sorrend: megadhatod, hogy a kupon a többi kedvezmény **előtt vagy után** számítson (százalék + teljes ár esetén kritikus).
- Célzott naptárak: kiválasztható, mely naptárakra érvényes.
- Használati limit: meghatározhatod, hányszor váltható be a kupon.
- Alkalmazható hétköznapok: pl. csak hétköznap induló foglalásokra.
- Érvényességi dátumok:
  - **Validity Period**: mely foglalási dátumokra érvényes a kupon.
  - **Usage Period**: mely időszakban lehet a kupont beváltani (a foglalási dátumtól függetlenül).

## Telepítés és első lépések

1. Engedélyezd az add‑ont a WP adminban (Business vagy magasabb csomag szükséges).
2. Automatikus kedvezmények: a WP Booking System → **Discounts** menüben hozd létre és állítsd be.
3. Kuponok: a WP Booking System → **Coupons** menüben add fel.
4. Űrlap: a Form Builderben add az űrlaphoz a **Coupon** mezőt, ha kuponkódot szeretnél bekérni.

## Gyakorlati példák

Hosszú tartózkodás kedvezménye:
```
If Booked Days ≥ 3
Then 20% discount
Scope: Per booking, Base: Calendar prices only
Show in price breakdown: Yes
```

Early‑bird akció:
```
If Days from Today ≥ 60
Then -10% (Per booking, Base: Total price)
Validity: only start date within 2025‑06‑01..2025‑08‑31
```

Hétköznapi promóció:
```
If Booking Start Weekday ∈ {Mon, Tue, Wed}
Then -15€ per day
```

Visszatérő ügyfél kupon:
```
Coupon Code: MY-SECOND-VISIT
Type: Fixed, Value: 25
Apply: Per booking
Limit: 1 use per customer
Order: After other discounts
```

Felár űrlapmező alapján:
```
If Form Field “Extra Pet” = Yes
Then +10€ per day (negative discount)
```

## Előnyök és értékajánlat

- Időmegtakarítás: az **automatizált szabályok** leveszik a kézi árazás terhét.
- Pontos árképzés: a **számítási alap** és az **alkalmazási sorrend** finomhangolásával hibátlan kalkulációt kapsz.
- Mérhető promóciók: a **kuponok** használati limitjeivel és időablakaival kontrollált kampányokat futtathatsz.
- Jobb UX és marketing: a kedvezmény lehet **látható** (növeli a bizalmat) vagy **rejtett** (letisztult ár), igény szerint.

## Kinek ajánlott?

- Szállásadóknak (apartman, panzió) és napi bérlésben dolgozóknak (jármű, eszköz), akik rugalmas, feltételekhez kötött **dinamikus árképzést** szeretnének.
- Szervezeteknek, akik **tagsági** vagy **visszatérő** kedvezményeket adnak.
- Akcióorientált csapatoknak, akik **early‑bird/last‑minute** és **kuponos** kampányokat futtatnak, mérhető eredményekkel.

## Korlátok és tippek

- A **Per day** alkalmazás csak **fix** összegű kedvezményeknél/kuponoknál elérhető.
- A **Teljes ár** vs. **Csak naptárár** választás csak **százalékos** típusnál értelmezhető.
- Több kupon együttes beváltásáról a dokumentáció nem részletez mindent: élesítés előtt teszteld a kombinációkat és az **alkalmazási sorrend** hatását.
- A „Validity inclusion” beállításoknál pontosítsd, hogy a kezdő és/vagy zárónap számítson, különben eltérhet az elvárt működés.

## Hibaelhárítás és bevált gyakorlatok

- Ha a kedvezmény „nem látszik”, ellenőrizd a **célzott naptárat**, az **időszakot** és a **feltételek** teljesülését.
- Százalékos kuponoknál döntsd el, hogy a **többi kedvezmény előtt vagy után** alkalmazódjanak – ez jelentősen befolyásolja a végösszeget.
- Használj **külön soros megjelenítést** A/B teszthez: sok esetben javítja a konverziót, ha a vendég látja a megtakarítást.
- „Negatív kedvezménnyel” egységesítsd a felár-logikát, ne építs párhuzamos, bonyolult űrlapfeltételeket.