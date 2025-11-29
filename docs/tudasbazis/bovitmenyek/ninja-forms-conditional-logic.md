---
title: "Ninja Forms - Conditional Logic"
description: "Prémium kiegészítő a Ninja Forms-hoz, amellyel feltételek alapján dinamikusan jeleníthetsz meg mezőket, futtathatsz műveleteket és személyre szabhatod az űrlapélményt."
sidebar_label: "Ninja Forms - Conditional Logic"
---

## Mi ez és milyen problémát old meg?

A Conditional Logic a Ninja Forms űrlapkészítő prémium kiegészítője. Segítségével szabályokat állíthatsz be, amelyek a felhasználó válaszai alapján megjelenítenek vagy elrejtenek mezőket, módosítanak listaopciókat, számításokat, illetve csak bizonyos esetekben futtatnak űrlapműveleteket (például e‑maileket vagy átirányítást). Így az űrlap rövidebbnek, relevánsabbnak érződik, a beküldések pontosabbak lesznek, és kevesebb utómunka hárul rád.

A lényeg: kód nélkül testre szabott, rugalmas űrlapfolyamatot hozhatsz létre, amely a kitöltőre reagál.

## Fő funkciók, érthetően

- **Mezők megjelenítése/elrejtése**  
  Bármely mezőt láthatóvá vagy láthatatlanná tehetsz a válaszok alapján. Például ha valaki „Egyéb” opciót választ, megjelenítesz egy szövegmezőt, ahol részletezhet.

- **Mezőértékek és számítások dinamikus módosítása**  
  Feltételekhez kötheted a számított mezőket, árakat, kedvezményeket vagy pontszámokat. Például kuponkód esetén automatikus árengedményt számíthatsz.

- **Listaopciók szintű logika**  
  Legördülők, rádiógombok és jelölőnégyzetek egyes opcióit külön-külön elrejtheted vagy megjelenítheted, hogy a kitöltő csak releváns választ lásson.

- **Feltételes e‑mail és workflow**  
  Értesítések és más űrlapműveletek (pl. átirányítás, feliratkoztatás) csak adott válaszok esetén fussanak. Így a beküldések automatikusan a megfelelő címzetthez kerülnek.

- **Sikerüzenetek és átirányítások**  
  Más üzenetet vagy másik céloldalt jeleníthetsz meg különböző válaszoknál (például szolgáltatási kategória szerint).

- **Feliratkozás listákra**  
  Válaszok alapján külön marketinglistákba irányíthatod a kitöltőt.

- **Dátum alapú feltételek**  
  Dátumok között hasonlíthatsz: „előtte”, „előtte vagy azon a napon”, „pontosan”, „azon a napon vagy utána”, „utána”. Idő szerinti összehasonlítás jelenleg nem támogatott.

- **Kötelező mezők feltételesen**  
  Csak akkor tedd kötelezővé a mezőt, amikor tényleg szükséges (például vállalati adatok csak céges érdeklődőknél).

- **Összehasonlító operátorok**  
  Egyenlő, nem egyenlő, nagyobb/kisebb típusú feltételek, valamint több feltétel kombinálása AND/OR logikával.

- **Integrációk**  
  Tökéletesen együttműködik más Ninja Forms kiegészítőkkel (például többlépéses űrlapok, haladó dátumválasztó, fizetések, e‑mail értesítések).

## Hogyan működik? (Gyors beállítás)

1. Nyisd meg az űrlapot az építőben.
2. Válaszd ki a szabályozandó mezőt vagy űrlapműveletet.
3. Az **Advanced > Conditional Logic** panelen kapcsold be a feltételeket.
4. Állítsd be:
   - a kiváltó mezőt (melyik válaszra figyeljen),
   - az összehasonlítást (például „egyenlő”, „nagyobb mint”),
   - a célt (mező megjelenítése/elrejtése, opciók módosítása, művelet futtatása).
5. Szükség esetén adj hozzá több szabályt, AND/OR logikával.
6. Előnézetben teszteld a viselkedést különböző válaszokkal.

Példa pszeudó-szabályokra:

```
Ha [Típus] = "Céges" → Mutasd [Adószám]
Ha [Kupon] = "SAVE10" → [Végösszeg] = [Végösszeg] * 0.9
Ha [Téma] tartalmazza "Ajánlat" → Futtasd [Értékesítés e-mail értesítés]
```

## Gyakorlati példák

- **Rövidebb, személyre szabott űrlapok**  
  Csak a releváns kérdések jelennek meg. Ha „Magánszemély” a válasz, elrejted a cégadatokat; „Céges” esetén megjeleníted és kötelezővé teszed.

- **Osztály szerinti útvonalazás**  
  „Téma” választás alapján más-más e-mail értesítés fusson: értékesítés, ügyfélszolgálat vagy marketing.

- **Dinamikus árképzés**  
  Kuponkód vagy mennyiség alapján kedvezmény. Például 10+ darabnál mennyiségi kedvezmény.

- **Többlépéses elágaztatás**  
  Komplett lépéseket hagysz ki, ha nincs relevancia (például haladó beállítások csak szakmai érdeklődőknek).

- **„Gated” beküldés**  
  A „Beküldés” gomb csak akkor jelenjen meg, ha a felhasználó elfogadta a feltételeket és megadta a szükséges adatokat.

- **Időzített megjelenítés**  
  Jelentkezési űrlap csak egy időszakban aktív: ha a dátum a határidő után van, mutass „Lezárult” üzenetet és rejtsd el a beküldést.

## Előnyök és értékajánlat

- **Nagyobb befejezési arány**: a kitöltő csak azt látja, ami rá vonatkozik.  
- **Kevesebb manuális munka**: automatikus értesítések, átirányítások, listafelhozások.  
- **Jobb adatminőség**: feltételes kötelezőség, irreleváns mezők elrejtése.  
- **Kód nélküli megoldás**: mindent az űrlapépítőben állíthatsz.  
- **Skálázhatóság**: összetett üzleti logikák is felépíthetők karbantartható szabályokkal.

## Kinek ajánlott?

- **Marketing és értékesítés**: lead‑űrlapok, kuponok, szegmentált listák, célzott értesítések.  
- **Ügyfélszolgálat**: kategória szerinti jegyirányítás, releváns mezők megjelenítése.  
- **HR és oktatás**: jelentkezési űrlapok, válaszok alapján eltérő kérdéscsoportok.  
- **E‑kereskedelem és szolgáltatások**: ajánlatkérés, dinamikus kalkulációk, fizetés előtti ellenőrzések.  
- **Rendezvényszervezés**: dátumhoz kötött regisztráció, opciók a résztvevő típusától függően.

## Korlátok és megjegyzések

- **Dátum/Idő**: a feltételek dátumra vonatkozó összehasonlítást támogatnak; idő szerinti összehasonlítás nem elérhető.  
- **Szabályok összetettsége**: nagyobb űrlapoknál tervezz előre, nevezd el egyértelműen a mezőket, és tesztelj alaposan.  
- **Minőség és karbantartás**: a kiegészítő aktívan fejlesztett; a frissítések rendszerint a feltételértékelés pontosítására és a biztonság erősítésére is fókuszálnak.

## Összefoglalás

A Conditional Logic a Ninja Forms egyik legerősebb eleme: rugalmas, feltételekhez kötött viselkedéssel személyre szabott űrlapélményt ad. Mezőket, opciókat, számításokat és teljes műveleteket vezérelhetsz a felhasználó válaszai alapján. Ezzel rövidítheted az űrlapokat, növelheted a konverziót, javíthatod az adatminőséget és automatizálhatod a folyamatokat — mindezt kódolás nélkül.