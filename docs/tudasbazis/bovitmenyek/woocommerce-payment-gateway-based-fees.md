---
title: "WooCommerce Payment Gateway Based Fees"
description: "Prémium WooCommerce-kiegészítő, amellyel fizetési mód alapján automatikus felárakat adhatsz a rendeléshez, kosár- és termékszinten, adózással és Blocks támogatással."
sidebar_label: "WooCommerce Payment Gateway Based Fees"
---

## Mi ez és milyen problémát old meg?

A WooCommerce Payment Gateway Based Fees egy prémium kiegészítő, amellyel a vásárló által választott **fizetési módhoz kötött felárat** adhatsz a rendeléshez. Tipikus célja a **tranzakciós költségek** (kártya, PayPal, utánvét stb.) áthárítása vagy kompenzálása, hogy előre tervezhető legyen a nettó bevételed. Fontos: ez a bővítmény kifejezetten felárra szolgál, **kedvezményt (negatív összeget) nem támogat**.

## Hogyan működik röviden?

- A bővítmény a pénztárnál automatikusan kiszámítja és hozzáadja a felárat a kiválasztott **payment gateway** alapján.
- A díjakat beállíthatod **kosár/order szinten** és **termékszinten** is; a termékszintű díjak hozzáadódnak a kosárdíjhoz.
- Az admin felületen a rendszer által számolt díj **bármikor szerkeszthető**, manuális rendelésekhez is hozzáadható.
- A díjhoz **adóosztály** rendelhető, és használható automatizált adózás-kompatibilis beállítás.
- Működik **Blocks Checkout** nézettel, és a díj megnevezése **többnyelvűen** fordítható.

## Fő funkciók és beállítások

### Díjak fizetési módonként
Minden telepített fizetési módhoz külön szabályt hozhatsz létre: engedélyezés, megnevezés, díjtípus, adókezelés és feltételek. Így például az utánvétre lehet fix felár, a kártyás fizetésre százalékos.

### Számítási módok
- **Fix összeg**: állandó felár (például +990 Ft).
- **Add % to total amount**: a díj a teljes kosárérték százaléka (például +2,9%).
- **Include % in total amount**: jutalékos logika. Úgy számol, hogy a fizetési szolgáltató levonása után is megkapd a kívánt nettó összeget, ezért a bruttó felár ehhez arányosan igazodik.

### Kosár/order szintű díjak
A WooCommerce beállításokban megadhatod:
- **Min./max. kosárérték** mellett alkalmazott díjakat.
- **Min./max. díjplafont** (például legfeljebb +3000 Ft).
- **Kizárások e‑mail alapján**, ha bizonyos ügyfeleket mentesítenél.

### Termékszintű díjak
A termék szerkesztésénél külön **Additional Fees** fülön:
- Gateway‑enkénti **termékdíjakat** adhatsz meg (ez a kosárdíjon felül érvényesül).
- Beállíthatsz **értékhatárt**, amely felett a termékdíj ne alkalmazódjon (például drágább variációknál ne legyen felár).

### Manuális kezelés
- Rendelésszerkesztéskor a felár **átírható** vagy **hozzáadható**, így fizetési mód‑váltásnál vagy manuális rendelésnél sem kell kézzel számolnod.

### Adózás
- Minden díjhoz **adóosztály** rendelhető, a bővítmény együttműködik automatizált adózással is. (Megjegyzés: a Jetpack típusú automata adók csak korlátozottan támogatottak; a WooCommerce Tax használata ajánlott.)

### Többnyelvűség és Blocks
- A díj **megnevezése** fordítható többnyelvű környezetben.
- **Block alapú pénztár** nézettel kompatibilis, így a felár ott is helyesen jelenik meg.

### Fejlesztői bővíthetőség
- Szűrő: **wc_add_fees_calculated_fee** – a kiszámolt díj programozott módosítására (például kerekítés vagy üzleti szabályok).
  
```php
/**
 * Példa: felár kerekítése 5 Ft-os lépcsőre.
 */
add_filter('wc_add_fees_calculated_fee', function( $fee ) {
    if ( isset( $fee['amount'] ) ) {
        $rounded = ceil($fee['amount'] / 5) * 5;
        $fee['amount'] = $rounded;
    }
    return $fee;
});
```

## Gyakorlati példák

- **Utánvét (COD) felár**: állíts be +990 Ft fix díjat csak akkor, ha a kosárérték 10 000 Ft alatt van. 10 000 Ft felett ne legyen felár.
- **Kártyás fizetés százalékos díj**: adj hozzá +2,9%‑ot a teljes kosárértékhez, maximum 3000 Ft plafonnal.
- **„Include % in total amount”**: ha szeretnéd, hogy 10 000 Ft nettót kapj kártyás tranzakció után, és a szolgáltató 2,9%‑ot von le, a bővítmény ehhez igazítja a bruttó felárat, így a levonást követően is megmarad a célösszeg.
- **Termékszintű kiegészítés**: egy nagy értékű, törékeny terméknél tegyél +500 Ft‑ot csak utánvétnél, de kapcsold ki a díjat, ha a termék ára 50 000 Ft fölé megy (variációknál hasznos).

## Telepítés és első lépések

1. Telepítsd a bővítményt a saját WooCommerce fiókodból letöltött ZIP feltöltésével, majd aktiváld.
2. Menj a WooCommerce > Settings > **Additional Fees** részhez:
   - Válaszd ki a fizetési módot, nevezd el a díjat (amit a vásárló lát), állítsd be a **díjtípust** (fix, %, include %), a **díj értékét**, az **adóosztályt**, valamint a **min./max.** feltételeket és az e‑mail **kizárásokat**.
3. Termékszintű díjakhoz a termék szerkesztésében nyisd meg a **Product Data > Additional Fees** fület, és add meg a szükséges szabályokat.

## Előnyök és értékajánlat

- **Kiszámítható profit**: a tranzakciós költségek előre beépülnek az árba.
- **Rugalmasság**: kosár- és termékszintű szabályok, feltételes alkalmazás, plafonok.
- **Kevesebb manuális hiba**: automatikus számítás a pénztárnál, szerkeszthető rendelésben.
- **Adó-kompatibilitás**: díjak adózása külön kezelhető.
- **Nemzetközi működés**: többnyelvű feliratok, Blocks támogatás.

## Kinek ajánlott?

- Olyan kereskedőknek, akiknél a **fizetési kapuk költsége** jelentős (kártya, PayPal, utánvét).
- **B2B** és magas kosárértékű szegmenseknek, ahol fontos a nettó célbevétel.
- Azoknak, akik **termékszintű sajátosságokat** (variációk, kategóriák) is figyelembe vennének a díjszabásban.
- Üzleteknek, amelyek **Blocks pénztárat** és/vagy **többnyelvű** felületet használnak.

## Korlátozások és tippek

- **Nincs kedvezmény**: negatív összeg nem adható meg. Ha fizetési mód szerinti kedvezményre is szükséged van, külön erre készült kiegészítőt válassz.
- **Adózás**: automatizált adókhoz a WooCommerce Tax használata javasolt; a Jetpack típusú automatikus adózás támogatása korlátozott.
- **Jogi megfelelés**: egyes joghatóságokban a fizetési mód szerinti felárak szabályozottak vagy tiltottak. Mindig ellenőrizd a helyi előírásokat.
- **Best practice**:
  - Teszteld a beállításokat **staging** környezetben, különösen az „Include %” kalkulációkat és a kerekítést.
  - Fordítsd le a díj **megnevezését**, és ellenőrizd a **Blocks Checkout** nézetben is.
  - Használd a fejlesztői **szűrőt** kerekítésre vagy speciális szabályokra, ha szükséges.

Ezzel a bővítménnyel pontosan szabályozhatod, mikor és mennyi felár kerüljön a rendeléshez a választott fizetési mód alapján, így stabilabb és előre tervezhetőbb lesz a bevételed.