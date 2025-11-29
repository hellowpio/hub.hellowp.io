---
title: "WooCommerce Composite Products"
description: "Hivatalos WooCommerce kiterjesztés összetett, komponensekből felépülő, raktárkezelt, konfigurálható termékekhez – precíz árazással, készlet- és szállításlogikával."
sidebar_label: "WooCommerce Composite Products"
---

## Mi ez és milyen problémát old meg?

A WooCommerce Composite Products egy olyan bővítmény, amellyel több komponensből álló, teljesen konfigurálható termékeket hozhatsz létre. Gondolj „építsd meg a saját PC‑det”, gördeszka‑konfigurátorra vagy kamera‑szettekre: a vevő egyetlen, vezetett folyamatban választja ki a komponenseket, te pedig közben megtartod az egyes tételek készlet-, ár- és szállítás‑kontrollját. Ezzel elkerülöd a szétszórt termékoldalakat, a hibás kombinációkat és a pontatlan készletelszámolást.

## Hogyan működik? Fő funkciók, érthetően

### Komponens‑alapú felépítés
- Egy kompozit termék több **Component** részből áll (pl. „Váz”, „Objektív”, „Memória”).
- Minden komponenshez **opciókat** adhatsz: konkrét termékeket, variálható termékeket vagy akár komplett bundle‑öket.
- A komponensek **alapértelmezett** választással indulhatnak, szűrőkkel és rendezéssel könnyítve a keresést.

### Árazás és katalógusár
- Választhatsz **alapárat** a teljes kompozitra, vagy komponensenként **Priced Individually** módot, ahol az egyes tételek ára külön számít.
- Komponensenként adhatsz **% kedvezményt** (pl. „objektív 10% a vázzal együtt”).
- A katalógusár megjelenítéséhez több stratégia van (pl. **alapértelmezésekből számolt**, **intervallum**, vagy **elrejtett**). Nagyon sok opció esetén célszerű alapértelmezésekkel dolgozni.

### Feltételes logika (Scenarios)
- **Scenarios** segítségével elrejthetsz komponenseket vagy opciókat más választásoktól függően (pl. csak a kompatibilis objektívek látszanak a kiválasztott vázhoz).
- Képes dinamikusan módosítani a képeket és a felületet, így a vevő mindig releváns opciókat lát.

### Elrendezés és UI
- Négy fő **layout**: Stacked, Progressive, Stepped, Componentized. Ezekkel a teljesítmény és az élmény illeszthető a termékedhez.
- Választható **opcióstílusok** (legördülő, rádiógomb, bélyegképek), külön **Configuration Summary** blokkal.
- A vevő a kosárból is **visszaszerkesztheti** a kompozitot, így gyorsabb a hibajavítás.

### Készlet és adózás
- Minden kiválasztott termék **saját készletéből** fogy, ahogy egyéni értékesítésnél is.
- Ha bármely komponens nincs készleten, a kompozit **nem tehető** kosárba – nincs „félig eladható” szett.
- Az adózás, SKU‑szint és jelentések komponensenként követhetők.

### Szállítás és csomagolás
- Beállítható **Assembled** (egy csomag) vagy **Unassembled** (külön csomagok) logika; a komponensek akár **Shipped Individually** módban is mehetnek.
- Testreszabható, hogy a kompozit **súlya/dimenziója** a komponensek adataiból öröklődjön, vagy azokat figyelmen kívül hagyja.
- Részben összeszerelt forgatókönyvek is kezelhetők.

### Analitika
- Külön riport mutatja, hogy mennyi kompozit fogyott, a komponensek hogyan teljesítettek, és mekkora bevételt hoztak.

### Ökoszisztéma és kompatibilitás
- Jól működik kiegészítőkkel, mint a **Product Bundles**, **Product Add‑Ons**, **Subscriptions**, **Memberships**, **Points and Rewards**, **Name Your Price**, **Min/Max Quantities**, számlázási és logisztikai integrációk.
- Támogatott a **blokkalapú kosár és pénztár**; egyes harmadik féltől származó kiegészítők eltérően viselkedhetnek blokkos checkoutnál.

## Konkrét, gyakorlati példák

- PC‑építő: komponensek (CPU, alaplap, memória, tárhely, ház, táp). Scenarios kizárja az inkompatibilis alaplap‑CPU párosokat; az ár komponensenként számolódik; szállítás „Assembled”, súly a komponensekből öröklődik.
- Kamera‑szett: váz, objektív, táska, kártya. A bajonett alapján csak kompatibilis objektívek jelennek meg. A táska kedvezményt kap, ha komplett szettet választ a vevő.
- Heti menü: főétel, köret, ital komponensek. Előfizetéssel kombinálva a vevő hetente állítja össze; a készlet minden tételnél pontosan fogy.

## Előnyök és értékajánlat

- **Kevesebb lemorzsolódás**: egyoldalas, vezetett konfiguráció, mindig releváns opciókkal.
- **Kevesebb hiba és visszáru**: kompatibilitás‑kényszerítés Scenarios‑szal.
- **Pontos készlet és bevételkimutatás**: SKU‑szintű elszámolás, dedikált analitika.
- **Rugalmas árazás és promók**: komponensenkénti ár + kedvezmény, transzparens összegzés.
- **Professzionális szállítás**: összeállított vagy külön csomagok, valós súly/dimenzió.

## Kinek ajánlott?

- Elektronikai, sporteszköz, fotós és B2B kereskedőknek, ahol a termékek **komponensekből épülnek** és fontos a készlet‑pontosság.
- Előfizetéses, menüs vagy „válassz több elemből” jellegű szolgáltatóknak.
- Ha csak egyszerű felárakat/kérdőívet szeretnél, inkább **Add‑Ons** jellegű megoldás való. Ha a csomag fix és nem konfigurálható, a **Product Bundles** egyszerűbb lehet.

## Bevezetési lépések (gyors útmutató)

1. Hozz létre új terméket, és válaszd a **Composite** típust.
2. Add hozzá a **komponenseket**, állíts be opciókat (termékek vagy kategóriák alapján).
3. Válassz **árazási módot** (alapár és/vagy Priced Individually + kedvezmények).
4. Dönts a **layoutról** és **opcióstílusokról**; állíts be alapértelmezéseket.
5. Készíts **Scenarios** szabályokat a kompatibilitásra és megjelenítésre.
6. Állítsd be a **szállítást** (Assembled/Unassembled, súly/dimenzió, Shipped Individually).
7. Teszteld a **katalógusár** megjelenítést, a **kosárból szerkesztést** és az **analitikát**.

## Megfontolások és korlátok

- Variálható termékeknél lehetnek speciális korlátozások; mindig tesztelj összetett variációkkal.
- Többnyelvűséghez a WooCommerce‑hez illeszkedő nyelvi bővítményt használj.
- Blokkalapú pénztárnál egyes integrációk másképp működhetnek.
- Nagyon sok opció esetén a katalógusárnál használd az alapértelmezés‑alapú vagy rejtett megjelenítést a teljesítmény kedvéért.
- Előfordulhat, hogy bizonyos beállítások csak licencelt környezetben érhetők el; érdemes élesítés előtt ellenőrizni és szükség esetén egyeztetni a támogatással.

## Fejlesztőknek, röviden

- A terméktípus a product_type taxonómiában **composite** néven szerepel; a PHP oldalon a **WC_Product_Composite** osztály kezeli.
- A frontend egy **egyoldalas JavaScript alkalmazás**, amely a komponensek betöltését, validációt, árösszegzést és a böngésző‑történetet kezeli.
- Rendelkezésre áll **REST API** és bőséges **action/filter** készlet a mély integrációkhoz és testreszabáshoz.

Az eredmény: egy professzionális, skálázható konfigurátor, amellyel úgy adhatsz el összetett szetteket, hogy közben minden tétel árát, készletét és szállítását precízen kontrollálod.