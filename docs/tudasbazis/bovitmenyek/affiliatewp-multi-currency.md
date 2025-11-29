---
title: "AffiliateWP - Multi-Currency"
description: "Az AffiliateWP hivatalos kiegészítője, amely automatikusan kezeli a több pénznemben történő vásárlásokból származó jutalékok konverzióját a program alapvalutájára."
sidebar_label: "AffiliateWP - Multi-Currency"
---

## Mi ez és milyen problémát old meg?

Az AffiliateWP – Multi‑Currency egy hivatalos kiegészítő, amely több pénznemben történő értékesítésnél automatikusan és következetesen számolja a partnerjutalékokat. Érzékeli a rendelés pénznemét, kiszámolja a jutalékot a vásárlás devizájában, majd az egészet átváltja a partnerprogram általad választott alapvalutájára. Így minden jutalék és riport egységes pénznemben jelenik meg, elkerülve a kézi átszámításokat, hibákat és könyvelési káoszt.

## Hogyan működik röviden?

- A vevő a választható pénznemében fizet (pl. currency switcherrel).
- A bővítmény észleli a rendelés devizáját.
- A jutalék először a rendelés pénznemében számolódik ki.
- Az aktuális árfolyam alapján az összeg automatikusan konvertálódik a program alapvalutájára.
- A Referrals/Reports felületeken minden érték az alapvalutában látszik.

Példa: az alapvalutád USD, a vevő 100 €‑ért vásárol, a jutalékod 10%. A bővítmény kiszámolja a 10 € jutalékot, majd az épp érvényes árfolyamon USD-re váltja, és így könyveli a partnernek.

## Fő funkciók részletesen

- **Automatikus pénznem‑felderítés**  
  A rendelés során használt devizát a rendszer magától felismeri. Ez biztosítja, hogy a jutalék a vásárlás kontextusában, korrektül számolódjon (például helyi adók és árak mellett).

- **Valós idejű vagy kézi árfolyamkezelés**  
  Választhatsz automatikus, napi frissítésű árfolyamot (ExchangeRate‑API kulccsal), vagy rögzítheted az árfolyamokat manuálisan. Így teljes kontrollod van: dinamikus piaci árfolyamokat használhatsz, vagy fix, auditálható belső kurzusokat.

- **Több pénznem kezelése**  
  Szabadon megadhatod, mely devizákat szeretnéd konvertálni. Bármikor hozzáadhatsz/eltávolíthatsz pénznemeket a listából — hasznos nemzetközi terjeszkedésnél.

- **Integráció valuta‑váltó bővítményekkel**  
  A háttérben együttműködik a népszerű WooCommerce‑es currency switcherekkel. A vevő azt látja és fizeti, amit kiválasztott, te pedig egységes valutában kapsz jutalékadatokat.

- **Következetes riporting**  
  A Referrals és Reports nézetek mindig az AffiliateWP‑ben beállított **Affiliate Program Currency** szerint jelennek meg. Ez leegyszerűsíti a kifizetések tervezését és a könyvelést.

## Előfeltételek és beállítás

- **Szükséges**: aktív AffiliateWP (Plus vagy Pro licenc), valamint WooCommerce vagy Easy Digital Downloads.
- **Automatikus árfolyamhoz**: ExchangeRate‑API kulcs. Megjegyzés: BTC és KIP devizák automatikus módban nem támogatottak; ezekhez manuális árfolyamot adj meg.

Beállítási lépések:
1. WordPress admin → AffiliateWP → Settings.
2. Állítsd be a program alapvalutáját (Settings → Advanced → Currency).
3. Lépj a Commissions fülre, és engedélyezd a Multi‑Currency funkciót.
4. Válaszd ki az árfolyam frissítési módot: automatikus (API kulccsal) vagy manuális.
5. Vedd fel a kezelt pénznemeket és — ha manuális módot használsz — add meg az árfolyamokat.
6. Mentsd a beállításokat, majd végezz egy teszt‑rendelést több pénznemben.

Gyors ellenőrzőlista:
```
[ ] Alapvaluta beállítva
[ ] Multi-Currency engedélyezve
[ ] Árfolyam mód kiválasztva (API / manuális)
[ ] Devizalisták és árfolyamok rögzítve
[ ] Teszt-rendelés és jutalékellenőrzés a Reports nézetben
```

## Gyakorlati példák és tipikus használat

- **Nemzetközi WooCommerce áruház**  
  Regionális árakat mutatsz és EUR/GBP/USD fizetést fogadsz. A partnereid jutaléka mégis egységesen USD‑ben jelenik meg és kerül kifizetésre — a bővítmény automatikusan konvertál.

- **Digitális termékek és előfizetések (EDD/Woo)**  
  Globális közönség, eltérő fizetési devizák. A Multi‑Currency gondoskodik róla, hogy a 10% jutalék minden esetben a programvalutára konvertálódjon, így az időszaki jelentések és a kifizetési exportok konzisztensen kezelhetők.

- **Ügynökségi környezet**  
  Több ügyfél, több piac, több deviza — egységes elszámolásra és skálázható adminisztrációra van szükség. A manuális árfolyam mód különösen hasznos, ha belső, fix kurzust írsz elő.

## Előnyök és értékajánlat

- **Kevesebb hiba, kevesebb kézi munka**: eltűnnek az utólagos átszámítások és a kerekítési problémák.  
- **Átlátható riportok**: minden összeg ugyanabban a pénznemben, ami megkönnyíti a kifizetéseket és a könyvelést.  
- **Rugalmasság árfolyamban**: automatikus, napi frissítésű piaci árfolyam vagy teljesen kézi kontroll.  
- **Zökkenőmentes integráció**: együttműködik a tipikus currency switcherekkel, nincs szükség külön fejlesztésre.  
- **Skálázható működés**: bármennyi devizát hozzáadhatsz, így a bővítmény követi a terjeszkedésed.

## Kinek ajánlott?

- **Nemzetközi WooCommerce/EDD webáruházaknak**, amelyek több pénznemet fogadnak el, de egységes programvalutában akarnak számolni.  
- **Digitális termékeket és előfizetéseket értékesítőknek**, ahol a vásárlások devizája változó, a partnerek pedig globálisak.  
- **Ügynökségeknek és menedzselt webáruházaknak**, akik standardizált, auditálható jutalék‑elszámolást szeretnének több piacon.  

## Összegzés

A Multi‑Currency pontosan azt oldja meg, ami többvalutás checkout mellett a legnehezebb: a partnerjutalékok igazságos, naprakész és egységes pénznemre konvertált kezelését. Beüzemelve automatikusan dolgozik a háttérben, csökkenti a hibákat, leegyszerűsíti a riportolást és a könyvelést, és gond nélkül illeszkedik a meglévő valuta‑váltó megoldásaidhoz.