---
title: "Fluent Forms PDF Generator"
description: "Ingyenes, hivatalos Fluent Forms kiegészítő, amellyel a beküldött űrlapadatokból automatikus, testreszabott PDF-eket generálhatsz, letölthetsz és e‑mailhez csatolhatsz."
sidebar_label: "Fluent Forms PDF Generator"
---

## Mi ez és milyen problémát old meg?

A **Fluent Forms PDF Generator** egy ingyenes, hivatalos kiegészítő a Fluent Forms űrlapkezelőhöz. Segítségével a beküldött űrlapadatokból automatikusan **PDF-dokumentumot** készíthetsz, amit letölthetsz az adminból, megjeleníthetsz a beküldés után a frontend oldalon, és automatikusan **csatolhatsz értesítő e‑mailekhez**. Így kiváltod a kézi PDF-szerkesztést, egységes formátumot adsz a dokumentumaidnak, és lerövidíted a kézbesítés idejét.

## Fő funkciók, érthetően

- **Automatikus PDF generálás**: Minden űrlaphoz létrehozhatsz egy vagy több „PDF Feed”-et. A feed szabja meg, mi kerüljön a PDF-be és hogyan nézzen ki. A generálás a szerveren történik, megbízható PDF‑motorral.
- **Sablonok (General, Invoice)**: Kezdd egy kész **általános** vagy **számla jellegű** elrendezéssel. Az „Invoice” nem könyvelőprogram, de űrlapalapú számlaszerű bizonylatokhoz elég.
- **Tartalom testreszabása**: Szerkeszthető **fejléc**, **törzs**, **lábléc**, beépített HTML editorral (kódnézet is van). Használhatsz **dinamikus mezőhelyettesítőt** (shortcode), például az összes adat beillesztéséhez:
  ```
  {all_data}
  ```
- **Megjelenés finomhangolása**: Papírméret és tájolás, **tipográfia** (betűk, méretek, színek), **vízjel** (szöveg vagy kép), **LTR/RTL** irány támogatás, **jelszóval védett PDF**.
- **Letöltés a frontend oldalon**: Beállíthatod, hogy a beküldés után a felhasználó egy gombbal letölthesse a saját PDF-jét. A feltételes logikákhoz igazíthatod (pl. csak sikeres fizetésnél).
- **E‑mail csatolás**: A PDF automatikusan **csatolható** az admin és/vagy az ügyfél értesítő e‑mailjéhez.
- **Fizetés utáni bizonylat**: Online fizetés sikerénél azonnal generált **„invoice”** PDF, ami küldhető e‑mailben vagy letölthető a visszaigazoló üzenetből.
- **Betűkészletek kezelése**: Első aktiváláskor telepítened kell az alap fontokat. Feltölthetsz **saját fontokat** (például nem latin írásokhoz), ami többnyelvű/RTL oldalaknál kulcsfontosságú.

## Hogyan működik? (rövid áttekintés)

A bővítmény űrlaponként **PDF Feed** logikát használ. Egy feedben:
1. Beállítod a tartalmat (fejléc/törzs/lábléc és a **shortcode-ok**).
2. Megadod a megjelenést (papír, tipográfia, vízjel, jelszó).
3. Eldöntöd, hogy engedélyezed-e a **frontend letöltést**, és milyen feltételekkel.

A generálás a szerveren történik; a kész fájl:
- letölthető az admin **Entries** nézetéből,
- csatolható űrlapértesítésekhez,
- elérhető a beküldés utáni felhasználói folyamatban.

## Telepítés és első lépések

1. **Telepítés és aktiválás**: Telepítsd a Fluent Forms PDF Generator bővítményt, majd aktiváld. Első használatkor telepítsd a szükséges **fontokat**.
2. **Globális PDF beállítások**: A Fluent Forms beállításai között találsz egy **PDF Settings** részt. Itt adhatod meg az alap tipográfiát, színeket, vízjelet stb. Ezek űrlapszinten felülírhatók.
3. **PDF Feed készítése űrlaponként**: Nyisd meg az űrlap szerkesztőjét, majd a **Settings & Integrations > PDF Feeds** alatt hozz létre egy új feedet. Válassz sablont (**General** vagy **Invoice**), állítsd be a tartalmat és a megjelenést, majd kapcsold be a letöltést, ha szükséges.
4. **Letöltés és e‑mail**:
   - Admin: az **Entries** megnyitásakor kattints a **Download PDF** gombra.
   - E‑mail: az űrlap **Notifications** részén add hozzá a PDF csatolmányt.

Példa a PDF törzs egyszerű tartalmára:
```
<h2>Beküldés összefoglaló</h2>
{all_data}
<p>Köszönjük a beküldést!</p>
```

## Gyakorlati példák

- **Rendelés‑visszaigazolás**: A kosár‑ vagy megrendelő űrlap beküldése után azonnal készül egy PDF, ami tartalmazza a tételeket, árakat és a vevő adatait. A PDF megy az ügyfél e‑mailjére, és a „Köszönjük” oldalon is letölthető.
- **Számla jellegű bizonylat**: Online fizetés után generálj **Invoice** sablonnal számlaszerű PDF‑et. Az űrlapodban számold ki a tételeket/adókat, a feed pedig egységes, márkázott dokumentummá alakítja.
- **Jegy/igazolás eseményre**: Regisztrációkor állíts elő PDF belépőt QR‑kóddal/kóddal (HTML‑ben beilleszthető), amit a résztvevő e‑mailben megkap.
- **Belső riportok**: Az ügyfélszolgálat vagy értékesítés űrlapjaihoz egységes, nyomtatható összefoglalók az archiváláshoz.

## Előnyök és értékajánlat

- **Időmegtakarítás**: Nincs több manuális másolás és formázás – a PDF automatikusan készül.
- **Következetes márka**: Logó, színek, betűk és vízjelek minden dokumentumon azonosak.
- **Zökkenőmentes kézbesítés**: Automatikus e‑mail csatolás és azonnali letöltés a felhasználónak.
- **Többnyelvűség/RTL**: Saját fontokkal és iránytámogatással kulturálisan is pontos dokumentumot adsz.
- **Adatvédelem**: Jelszóval védett PDF és szükség esetén belépéshez kötött letöltés.

## Kinek ajánlott?

- **Webshopok és szolgáltatók**: rendelés‑visszaigazolás, fizetési bizonylat, garancialap.
- **Képzésszervezők, rendezvények**: jegy, részvételi igazolás, programfüzet.
- **Ügyfélszolgálat/HR**: űrlapos igénylések, jelentések, visszaigazolások.
- **Ügynökségek és fejlesztők**: skálázható, márkázott PDF‑folyamatok ügyfeleknek.
- **Nemzetközi projektek**: többnyelvű és RTL igényekhez egyedi fontokkal.

## Kompatibilitás, követelmények és licenc

- A bővítmény a **Fluent Forms** kiegészítője, annak telepítése és aktiválása szükséges.
- WordPress és PHP környezeten fut, a jelenlegi, támogatott főverziókhoz igazodva.
- **Ingyenes és nyílt forráskódú** kiegészítő.

## Megjegyzések és korlátok

- Az **Invoice** sablon űrlapadatokból készít számlaszerű PDF‑et; a számítások és logika az űrlapon belül állítható be. Nem helyettesít teljes körű számlázószoftvert.
- Első használatkor **fonttelepítés** szükséges; egyedi font feltöltés javasolt nem latin/RTL nyelvekhez.
- A frontend letöltés és az e‑mail csatolás feltételei a Fluent Forms **feltételes logikáival** szabhatók meg – teszteld élesítés előtt.

## Gyors ellenőrzőlista

- Telepítetted és aktiváltad a bővítményt?
- Felraktad a fontokat és beállítottad a globális PDF‑stílusokat?
- Létrehoztad az űrlaphoz a **PDF Feed**‑et (sablon, tartalom, megjelenés)?
- Bekapcsoltad a frontend letöltést (ha kell), és hozzáadtad a PDF‑et az **e‑mail értesítések** csatolmányaihoz?
- Tesztelted a generálást adminból és felhasználói oldalról is?

Ezekkel a lépésekkel percek alatt automatizált, egységes és professzionális PDF‑folyamatot kapsz minden Fluent Forms űrlapodhoz.