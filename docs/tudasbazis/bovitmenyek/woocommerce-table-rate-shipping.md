---
title: "WooCommerce Table Rate Shipping"
description: "Feltételekhez kötött, rugalmas szállítási díjtáblák WooCommerce-hez; zónánként több opcióval és precíz szabályokkal."
sidebar_label: "WooCommerce Table Rate Shipping"
---

## Mi ez és milyen problémát old meg?

A WooCommerce Table Rate Shipping egy hivatalos szállítási módszer, amellyel **összetett, szabályalapú szállítási díjakat** állíthatsz be. Nem valós idejű fuvarozói díjakat kér le, hanem a saját, előre definiált **díjtábláid** alapján számol. Akkor hasznos, ha a sima „Flat Rate” vagy „Free Shipping” már kevés: **sávos díjazást**, több feltétel kombinálását, illetve **több szállítási opció** megjelenítését szeretnéd egy zónán belül.

Tipikus példa: súly- vagy kosárérték-sávok szerinti díjak, szállítási osztályonként eltérő szabályok („Small” vs. „Medium”), vagy több kézbesítési opció ugyanazon régióban (pl. „1. osztály” és „2. osztály”).

## Hogyan működik – alapfogalmak

- **Szállítási zónák és több díjtábla**: A bővítményt zónákhoz adod hozzá. Egy zónán belül több Table Rate Shipping példányt és **több díjtáblát** is használhatsz, így egy régióban több opciót (szállítási módszert) kínálhatsz.

- **Számítási módok**:
  - **Rendelésenként**: a teljes kosárra egyszer számol.
  - **Tételenként**: minden tétel után számol.
  - **Soronként**: kosár-soronként (termékvariáció/felár szerint) számol.
  - **Szállítási osztályonként**: osztályokra bontva számol, akár különböző szabályokkal.

- **Feltételek**:
  - **Ár** (kosárérték),
  - **Súly**,
  - **Tételszám** (összesen vagy azonos osztályban),
  - vagy **feltétel nélkül** (globálisan érvényes sorok).
  Ezekből **sávokat** hozhatsz létre (pl. 0–5 kg; 5–15 kg).

- **Költségösszetevők**:
  - **Alap költség** (soronként),
  - **Tételenkénti költség**,
  - **Százalék** a kosár összegéből,
  - **Súlyegységenkénti költség**.
  Ezek kombinálhatók, így precízen modellezheted a szállítási költséget.

- **Break/Abort logika**:
  - **Break**: ha egy sor feltétele teljesül, megáll a számítás (nem lép tovább a következő sorokra). Ezzel priorizálhatsz és elkerülöd a duplázást.
  - **Abort**: ha teljesül, a módszer nem kínál szállítási díjat (például kizáró feltételeknél).

- **Osztályprioritás**: vegyes kosár esetén eldöntheted, melyik szállítási osztály szabályai élvezzenek elsőbbséget (így a „drágább csomagolás” érvényesülhet).

- **Adózás, kezelési díj, plafon**: megadhatsz **kezelési díjat**, beállíthatod, hogy a költség adózik-e, és **maximális szállítási díj**-plafont is húzhatsz.

- **CSV import/export**: a táblák tömeges szerkesztéséhez és zónák közti másolásához. Nagy frissítéseknél rengeteg időt spórol.

- **Kompatibilitás**: támogatja a modern WooCommerce architektúrát és a blokkalapú kosár/fizetés felületeket.

## Gyakorlati példák

- **Súly alapú sávok**:
  - 0–5 kg: 1 490 Ft
  - 5–15 kg: 2 490 Ft
  - 15 kg felett: 3 990 Ft
  Break a megfelelő sornál, hogy ne adódjanak össze a sávok.

- **Értékalapú díj + ingyenes küszöb**:
  - 0–50 000 Ft: 1 290 Ft
  - 50 000 Ft felett: 0 Ft (Break)
  Így automatikus ingyenes szállítás jár nagyobb kosárértéknél.

- **Több opció egy zónában**:
  - „2. osztály”: olcsóbb, lassabb (alacsonyabb alap + százalék).
  - „1. osztály”: drágább, gyorsabb (magasabb alap + tételenkénti költség).
  Két külön TRS-példány, külön díjtáblákkal.

- **Szállítási osztályok és vegyes kosár**:
  - „Small” osztály: olcsóbb, tételenként számoló szabályok.
  - „Medium” osztály: drágább, súlyalapú szabályok.
  Vegyes kosárnál **osztályprioritás + Break** biztosítja, hogy csak a releváns (jellemzően drágább) díj számolódjon, ne duplázódjon.

- **Workaround több raktár/ország kezelésére**:
  Ha nem használsz valós idejű díjakat több pénznemben, a TRS-ben manuálisan tükrözheted a külön régiós tarifákat zónánkénti táblákkal.

### Mintaszabályok (illusztráció)
```
Díjtábla: "Standard kézbesítés"
Számítás: rendelésenként
1) Feltétel: Súly 0–5 kg      -> Alap: 1490 Ft            | Break: Igen
2) Feltétel: Súly 5–15 kg     -> Alap: 2490 Ft            | Break: Igen
3) Feltétel: Ár >= 50 000 Ft  -> Alap: 0 Ft (ingyenes)    | Break: Igen

Díjtábla: "1. osztály"
Számítás: soronként
1) Feltétel: Nincs            -> Alap: 990 Ft + 1% az összegből + 200 Ft/tétel
```

## Beállítás lépésről lépésre (röviden)

1. Hozz létre vagy válassz egy **szállítási zónát**.
2. Add hozzá a **Table Rate Shipping** módszert; nevezd el ügyfélbarát módon (pl. „Standard kézbesítés”).
3. Válaszd ki a **számítás típusát** (rendelés/tétel/sor/osztály).
4. Építsd fel a **díjtáblát**: határozd meg a feltételeket (ár/súly/tételszám/osztály) és a költségösszetevőket.
5. Használd a **Break** jelölést a megfelelő soroknál; kizárásokhoz „Abort”-ot.
6. Állíts be **kezelési díjat**, adózási viselkedést, és szükség esetén **maximális díj**-plafont.
7. Adj meg **címkét** (módszer neve, leírás), hogy a pénztárban érthető legyen az opció.
8. Teszteld különböző kosár-szcenáriókkal; nagyobb módosításokhoz használd a **CSV import/exportot**.

## Előnyök és értékajánlat

- **Rugalmasság**: összetett üzleti szabályok, sávok és több opció egy zónán belül.
- **Pontos költségmodellezés**: alap, tételenkénti, százalékos és súlyalapú komponensek kombinálhatók.
- **Kontroll vegyes kosaraknál**: osztályprioritás és Break/Abort a duplázás elkerülésére.
- **Admin-hatékonyság**: CSV-vel gyors tömeges frissítés, zónák közti másolás.
- **Megbízhatóság**: hivatalos WooCommerce ökoszisztémába illeszkedik és a modern funkciókkal kompatibilis.

Korlátok:
- **Nem kér le valós idejű fuvarozói díjakat**; manuálisan karbantartott táblákra épít.
- **Tarifaváltozáskor frissítés szükséges** (CSV könnyíti).

Ha extra, speciális feltételekre (például méretek, térfogat, dátum/idő) van szükséged egyetlen táblában, érdemes megfontolni külső, alternatív táblázatos szállítási bővítményeket is.

## Kinek ajánlott?

- Webshopoknak, ahol **súly- vagy értékalapú sávos díjazás** szükséges.
- Vállalkozásoknak, akik **több szállítási opciót** szeretnének ugyanabban a zónában (gyors vs. gazdaságos).
- Boltoknak **vegyes szállítási osztályokkal**, ahol fontos az **összevonás és a prioritás** kezelése.
- Azoknak, akik **fix szabályokkal** dolgoznak, és elfogadják a **manuális (CSV-vel gyorsított) karbantartást**.
- Akik nem igényelnek valós idejű fuvarozói díjakat, vagy azokat **zónák szerint manuálisan szeretnék tükrözni**.

Szeretnél mintatáblát vagy lépésről-lépésre beállítási útmutatót a saját boltod paramétereire szabva? Írj, és összerakom neked.