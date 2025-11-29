---
title: "WooCommerce Price Per Unit PRO"
description: "WooCommerce-kiegészítő az egységárak (ár/kg, ár/100 g, ár/darab) automatikus számításához és megjelenítéséhez."
sidebar_label: "WooCommerce Price Per Unit PRO"
---

## Mi ez és milyen problémát old meg?

A WooCommerce Price Per Unit PRO egy bővítmény, amely automatikusan kiszámolja és megjeleníti a termékek **egységárát** a megadott ár és tömeg (vagy egyedi egységek) alapján. Így a vásárló azonnal látja, mennyibe kerül egy termék egységre vetítve (például **ár/kg**, **ár/100 g**, **ár/liter**, **ár/darab**), ami egyszerűbb összehasonlítást és átláthatóbb döntést ad. Különösen hasznos, ha jogszabály szerint kötelező az egységár feltüntetése.

## Hogyan működik – fő funkciók érthetően

- **Automatikus egységár-számítás**  
  A bővítmény a termék alapárából és tömegéből (vagy általad megadott egységszámból) **kiszámolja a per-egység árat**, és ezt a termék ára alatt jeleníti meg. Ha módosítod az árat vagy a tömeget, az egységár automatikusan frissül – nincs manuális újraszámolás.

- **Rugalmas mértékegység-kezelés**  
  A bolt alap súlyegységével dolgozik (pl. kg, g, lb, oz), de eltérő egységre is tud **konvertálni**. Például a bolt kg-ban számol, a frontenden mégis **ár/100 g** jelenik meg. Egyedi egységeket is megadhatsz (pl. darab, doboz, liter).

- **Szorzó szerinti megjelenítés**  
  Nemcsak „egységre”, hanem tetszőleges szorzóra is számol: **ár/100 g**, **ár/1 l**, vagy akár **ár/1 t**. Így pontosan azt a formát kapod, amit a kategóriád megkíván.

- **Nettó vs. bruttó tömeg kezelése**  
  Megadhatsz külön **nettó tömeget** az egységár-számításhoz, miközben a **bruttó tömeg** továbbra is a szállítási költséghez használható. Ez ideális csomagolt élelmiszereknél.

- **Változatos termékek támogatása**  
  Variációnként eltérő ár és tömeg esetén a bővítmény **variációnként** számol egységárat. Beállíthatod, hogy tartományt mutasson (pl. x–y Ft / 100 g), vagy a kiválasztott variáció **konkrét egységárát** hangsúlyozza.

- **Szöveg és formázás testreszabása**  
  Állítható **előtag/utótag** (pl. „/ kg”, „per piece”), saját **egységnév**, és a hozzá tartozó egységszám (pl. 4 db/csomag). Az egységinformációt a termék **További információk** szekciójában is megjelenítheted.

- **Kosár és minikosár megjelenítés**  
  Az egységár a **Kosár** oldalon is feltüntethető. A minikosárban a megjelenés témától függ, de a bővítmény támogatja ennek integrációját.

## Gyakorlati példák

- **Ár/100 g élelmiszereknél**  
  Tegyük fel, egy 250 g-os termék ára 1 990 Ft. Beállítod az egységet grammra és a szorzót 100-ra. A bolt ezt fogja mutatni:
  ```
  796 Ft / 100 g
  ```

- **Egységár nettó tömegre**  
  A szállításhoz megadod a bruttó tömeget (pl. 520 g), az egységárhoz pedig a nettó tömeget (pl. 500 g). A vevő a tényleges, nettó tartalom alapján lát egységárat.

- **Csomag/darab kezelés**  
  Egy 4 darabos csomag 3 600 Ft-ért. Egyedi egységnév: „darab”, egységszám: 4. A megjelenítés:
  ```
  900 Ft / darab
  ```

- **Változó termék tartomány**  
  Ha egy termék variációi 80–120 g között mozognak és eltérő árúak, a bolt mutathat:
  ```
  450–620 Ft / 100 g
  ```
  Választás után a kiválasztott variáció pontos egységára jelenik meg.

## Előnyök és értékajánlat

- **Időmegtakarítás**: nincs kézi kalkuláció, nincs elfelejtett frissítés ár- vagy tömegváltozás után.  
- **Pontosság**: automatikus, konzisztens számítások – csökken a hibázás esélye.  
- **Jogi megfelelés támogatása**: segít az egységár feltüntetésére vonatkozó követelmények teljesítésében.  
- **Jobb vásárlói élmény**: könnyebb összehasonlítás, átláthatóbb árképzés, magasabb konverzió.  
- **Rugalmasság**: többféle egység, szorzó, nettó/bruttó, csomag/darab – ahogy az üzleted igényli.

## Kinek ajánlott?

- **Élelmiszer- és italwebshopok**: mindenhol, ahol alap az ár/100 g, ár/liter vagy ár/darab.  
- **Csomagolt áruk és alapanyagok**: nettó/bruttó tömeg szerinti pontos kommunikáció.  
- **Háztartási és FMCG termékek**: doboz, tekercs, lapszám vagy bármilyen egyedi egység szerinti ár.  
- **EU-piacon működő boltok**: ahol az egységár kötelező feltüntetése elvárás.

## Telepítés és alapbeállítás

1. **Telepítés és aktiválás**  
   Töltsd fel és aktiváld a bővítményt a WordPress adminon keresztül.

2. **Bolt szintű beállítások**  
   - Állítsd be a bolt **súlyegységét** (pl. kg vagy g).  
   - Győződj meg róla, hogy a termékeknél megvan az **alapár** és a **tömeg**.

3. **Termék szintű PPU PRO beállítások**  
   - Válassz **megjelenített egységet** (pl. g, kg, l, darab).  
   - Adj meg **szorzót** (pl. 100 g).  
   - Szükség esetén állíts be **nettó tömeget** az egységárhoz.  
   - Használj **egyedi egységnevet** és **egységszámot** (pl. 6 db/csomag).  
   - Testreszabhatod az **elő-/utótagokat** (pl. „/ 100 g”, „/ darab”).

4. **Változó termékek**  
   - Add meg a tömeget variációszinten, ha eltérő.  
   - Engedélyezd az egységár **tartomány** vagy a kiválasztott variáció **konkrét** kijelzését.

## Megjegyzések és kompatibilitás

- A minikosárban az egységár megjelenítése **témától függ**; szükség lehet sablon- vagy CSS-finiselésre.  
- Egyedi egységneveknél a **többes szám** kezelése korlátozott lehet; érdemes az utótagot kézzel finomhangolni.  
- Kompatibilis a WooCommerce modern funkcióival (például fejlett rendeléskezeléssel), és működik népszerű B2B megoldásokkal is.  
- Előfizetéses bővítmény, hivatalos támogatással és pénzvisszafizetési garanciával.

---

Szeretnél lépésről lépésre, képernyőképekkel illusztrált útmutatót minta termékkel (ár/100 g, csomag/darab, nettó/bruttó)? Szívesen készítek külön útmutatót hozzá.