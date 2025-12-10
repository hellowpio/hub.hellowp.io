---
title: "WooCommerce E-Mail Attachments (by Inoplugs)"
description: "WooCommerce bővítmény, amellyel tetszőleges fájlokat csatolhatsz a bolt által küldött e‑mailekhez, nyelvfüggő mellékletekkel, CC/BCC és médiatárral integrált kezelés mellett."
sidebar_label: "WooCommerce E-Mail Attachments (by Inoplugs)"
---

## Mi ez és milyen problémát old meg?

A WooCommerce E‑Mail Attachments egy fizetős kiegészítő, amellyel **bármely WooCommerce e‑mailhez** automatikusan **több fájlcsatolmányt** adhatsz. A bővítmény a WooCommerce **e‑mail API‑jára** épül, így a core levelek mellett képes együttműködni más kiegészítők – például előfizetés- vagy foglaláskezelők – által regisztrált értesítésekkel is. Megszünteti a kézi csatolgatást: a jogi dokumentumok, útmutatók, visszárulapok, garanciajegyek mindig a megfelelő e‑mailekkel mennek ki, következetesen és automatizáltan.

## Fő funkciók, érthetően

- **Tetszőleges számú csatolmány**: PDF, kép, doc, zip – nincs fix korlát. Minden e‑mail típusnál külön beállíthatod, mely fájlok menjenek vele. A tényleges küldési korlátokat a tárhelyed levelezőszervere határozza meg.
- **E‑mail típusonkénti beállítás**: A WooCommerce által ismert összes e‑mailnek külön lapja van. Minden levélnél megadhatod a csatolmányokat, azok sorrendjét (drag & drop), és a plusz címzetteket.
- **CC és BCC**: E‑mail típusonként adható **másolat** vagy **rejtett másolat** címzett. Így a pénzügy, ügyfélszolgálat vagy logisztika automatikusan értesülhet a releváns eseményekről.
- **Értesítő fej- és lábléc**: A levélben opcionálisan megjeleníthető egy rövid **figyelmeztetés**, hogy csatolmány érkezett. Beállíthatod, hogy mindig látszódjon, vagy csak csatolmány esetén.
- **WPML támogatás**: Többnyelvű boltban **nyelvhez kötött csatolmányokat** és **nyelvfüggő értesítő szövegeket** állíthatsz be. Ugyanannak a levélnek más fájl mehet különböző nyelveken.
- **Médiatárral integrált fájlkezelés**: A feltöltés a **WordPress Media Uploaderrel** történik; a fájlok külön mappába kerülnek, mégis megjelennek a médiatárban és máshol is felhasználhatók.
- **Kompatibilitás a WooCommerce e‑mail API‑val**: Ha egy kiegészítő szabványosan regisztrál leveleket, azok is testreszabhatók, mintha core e‑mailek lennének.

## Hogyan működik? Telepítés és beállítás

1. Töltsd fel a megvásárolt ZIP‑et a Bővítmények menüben, majd aktiváld.
2. Nyisd meg a WooCommerce beállításait, ott az E‑mail csatolmányok lapot.
3. Állítsd be az általános opciókat, majd egyesével konfiguráld az e‑maileket.

Példa munkafolyamat:

```
WooCommerce → Beállítások → E‑mail csatolmányok
  - Általános:
      • Feltöltési mappa
      • Értesítő fej- és lábléc szöveg (nyelvenként)
      • Beállítások megőrzése eltávolításkor
  - E‑mailenként:
      • Csatolmányok kiválasztása/feltöltése (Media Uploader)
      • Sorrendezés (drag & drop)
      • CC / BCC címzettek
      • Nyelv hozzárendelése (WPML)
```

Fontos tudnivalók a fájlokról:
- A csatolmányok a WordPress feltöltési könyvtárad egy kijelölt alkönyvtárába kerülnek, és látszanak a médiatárban.
- A feltöltési mappa megváltoztatása **nem** mozgatja át automatikusan a korábban feltöltött fájlokat.
- A bővítmény a fájlokat általában **nem törli automatikusan**. Törléshez használd a médiatárat, hogy elkerüld a törött hivatkozásokat.
- Nagy csatolmányok helyett mérlegeld a letöltési linkeket a sikeres kézbesítés érdekében.

## Gyakorlati példák

- **Jogi megfelelés**: A rendelés visszaigazolásához automatikusan csatolod az ÁSZF‑et, elállási nyilatkozatot és adatkezelési tájékoztatót. Többnyelvű boltban nyelvhez kötött változatok mennek ki.
- **Terméktámogatás**: A teljesített rendelés e‑mailhez mellékeled a használati útmutatót és a garanciajegyet. Licencelt szoftvernél csomagolhatod a licencfeltételeket.
- **Visszáru folyamat**: A rendelés állapota “visszaküldés” esetén automatikusan kapja a visszárulapot és útmutatót.
- **Belső működés**: A “Sikertelen rendelés” és “Új rendelés” levelek BCC‑ben mennek a pénzügyre és a fraud‑ellenőrzésre.

## Előnyök és értékajánlat

- **Időmegtakarítás**: Nincs több kézi csatolgatás; egyszer beállítod, utána automatikus.
- **Következetesség és megfelelés**: Minden érintett levélhez ugyanaz a hivatalos dokumentum kerül, hibalehetőség nélkül.
- **Professzionális kommunikáció**: Az értesítő fej‑/lábléc egyértelművé teszi a csatolmányok jelenlétét.
- **Rugalmas, skálázható**: Bármennyi fájlt használhatsz, nyelvekre bontva, e‑mail típusonként eltérően.
- **Egységes médiakezelés**: A médiatáron keresztül ugyanazokat a fájlokat máshol is felhasználhatod.

## Kinek ajánlott?

- **Webshopok jogi megfelelési igénnyel**: Kötelező dokumentumok automatikus kiküldése.
- **Műszaki vagy dokumentáció‑igényes termékek forgalmazói**: Útmutatók, driverek, garanciafeltételek kezelése.
- **Többnyelvű boltok**: Nyelvfüggő csatolmányok és üzenetek, WPML integrációval.
- **Operatív csapatok**: Pénzügy, ügyfélszolgálat, logisztika CC/BCC‑vel mindig képben van.

## Üzemeltetési tippek és kompatibilitás

- A bővítmény a WooCommerce **e‑mail API** által ismert összes levélhez kínál beállítást, így tipikusan együttműködik a népszerű kiegészítők e‑mailjeivel is, ha azok szabványosan regisztráltak.
- E‑mail méretlimit: a tárhely‑/MTA‑szabályok befolyásolják. Nagy vagy több csatolmány esetén inkább linket küldj.
- Adatkezelés: fájlmozgatás mappaváltáskor manuális; törlést a médiatárban végezd, különösen éles környezetben.
- Nagyobb frissítések után futtathatsz beépített migrációt; érdemes **staging** környezetben ellenőrizni a beállításokat és a csatolmányok működését.

## Gyors hibaelhárítás

- **Nem érkezik csatolmány**: Ellenőrizd, hogy az adott e‑mail típushoz valóban hozzárendelted‑e a fájlt, és a fájl elérhető‑e a médiatárban.
- **Nem látszik az e‑mail típus a listában**: Valószínűleg a kiegészítő nem a WooCommerce e‑mail API‑val regisztrálja a levelét; ekkor nem testreszabható.
- **Nagy fájlok lepattannak**: Csökkentsd a méretet, használd a tömörítést, vagy válts csatolmányról letöltési linkre.
- **WPML keveredés**: Állíts be nyelvet csatolmányonként, és add meg a nyelvfüggő értesítő szöveget is.
- **Törött hivatkozás**: Ha fájlt törölsz a szerverről, frissítsd az e‑mail csatolmánylistát, vagy töltsd fel újra a megfelelő fájlt.

## Megvásárlás, támogatás

A bővítmény fizetős, előfizetéses modellben érhető el, frissítésekkel és hivatalos támogatással, pénzvisszafizetési garanciával. Fejlesztője tapasztalt WooCommerce partner. Támogatás és dokumentáció a hivatalos csatornákon érhető el.

Ne keverd össze a korábban forgalmazott, hasonló nevű, már nyugdíjazott kiegészítővel; ez az InoPlugs megoldása, modern WooCommerce e‑mail munkafolyamatokra tervezve.