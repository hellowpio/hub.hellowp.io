---
title: "JetEngine Post Expiration Period Module"
description: "Ingyenes JetEngine kiegészítő, amellyel lejárati időt adhatsz a űrlappal beküldött bejegyzésekhez, és lejáratkor automatikusan Vázlatra állíthatod vagy a Lomtárba helyezheted őket."
sidebar_label: "JetEngine Post Expiration Period Module"
---

## Mi ez és milyen problémát old meg?

A JetEngine Post Expiration Period egy ingyenes, külső modul, amely lejárati logikát ad a JetEngine vagy JetFormBuilder űrlapjaival létrehozott bejegyzésekhez. A célja egyszerű: ha valaki a frontenden küld be időérzékeny tartalmat (pl. hirdetés, akció, esemény), a megadott napok után a poszt automatikusan eltűnik a nyilvános felületről, mert Vázlatra áll vagy a Lomtárba kerül. Nem kell kézzel takarítani az elavult posztokat, a webhelyed friss és rendezett marad.

## Hogyan működik röviden?

- Űrlapot hozol létre bejegyzés beküldéshez vagy frissítéshez.
- Az űrlap Insert/Update Post műveletében bekapcsolod a lejáratot, megadod napokban az időtartamot, és kiválasztod a lejárat utáni akciót.
- Beküldéskor a modul eltárolja a lejárati adatot a poszton.
- A határidő elérésekor a bővítmény automatikusan módosítja a poszt állapotát (Vázlat) vagy áthelyezi a Lomtárba.

## Fő funkciók, részletesen

- **Lejárat aktiválása űrlapokon**
  - Az Insert/Update Post műveletnél az **Enable expiration period** kapcsolóval engedélyezed. Ettől kezdve minden ezzel az űrlappal beküldött poszt kap lejárati beállítást.

- **Időtartam napokban**
  - Az **Expiration period** mezőben határozod meg, hány nap után „járjon le” a poszt. Például 30 napos apróhirdetéshez 30-at adsz meg.

- **Automatikus művelet lejáratkor**
  - Az **Expiration action** értéke lehet:
    - **Draft (Vázlat):** a poszt láthatatlanná válik a nyilvános oldalon, de szerkeszthető marad.
    - **Trash (Lomtár):** a poszt a Lomtárba kerül, és onnan kezelheted (visszaállítás, végleges törlés).

- **Admin áttekintés oszlopban**
  - A CPT Admin Columns felületén létrehozhatsz egy „Custom Callback” oszlopot, amely a lejárati időt mutatja. Így egy pillantással átlátod, mi mikor fog lejárni.

- **Ingyenes és natív integráció**
  - A JetEngine „External Modules” közt kapcsolhatod be, vagy külön bővítményként telepítheted. Zökkenőmentesen működik JetEngine és JetFormBuilder űrlapokkal, szerkesztheted Elementorral vagy a Block Editorral.

## Telepítés és beállítás

1. **Modul bekapcsolása**
   - JetEngine > External Modules: kapcsold be a „Post expiration period” modult. Alternatívaként telepítheted külön bővítményként, majd aktiváld.

2. **Űrlap létrehozása**
   - Készíts posztbeküldő űrlapot JetFormBuilderrel vagy JetEngine (legacy) Formmal.

3. **Insert/Update Post művelet beállítása**
   - Kapcsold be az **Enable expiration period** opciót.
   - Állítsd be az **Expiration period** napok számát.
   - Válaszd ki az **Expiration action** értékét: **Draft** vagy **Trash**.

4. **Elhelyezés és tesztelés**
   - Helyezd el az űrlapot (Elementor widget vagy Gutenberg blokk).
   - Küldj be tesztposztot, és ellenőrizd, hogy lejárat után a poszt állapota a várt módon változik.

### Opcionális: Admin oszlop a lejárati időhöz

A CPT Admin Columns-nál adj hozzá egy „Custom Callback” oszlopot:

```
Callback: jet_engine_custom_cb_date
Set field: _jet_pep_period
```

Állítsd be a kívánt dátum/idő formátumot, így könnyen átlátod a lejáratokat.

## Gyakorlati példák

- **Apróhirdetések:** 30 nap után a hirdetés automatikusan Vázlatra áll, a hirdető újraaktiválhatja vagy frissítheti.
- **Álláshirdetések:** 45 napos időkeret után Lomtárba kerülnek, csökkentve az elavult pozíciók megjelenését.
- **Események:** A rendezvény után a bejegyzés inaktív lesz, így nem kavarja a jövőbeli listákat.
- **Akciók/kuponok:** Lejárat napján automatikusan eltűnnek a nyilvános felületről, nincs manuális takarítás.

## Előnyök és értékajánlat

- **Időmegtakarítás:** Nincs kézi ellenőrzés és archiválás.
- **Tartalmi higiénia:** A nyilvános felület mindig naprakész.
- **Kockázatcsökkentés:** Kevesebb esély elavult vagy téves információk megjelenésére.
- **Egyszerű üzemeltetés:** Néhány kattintás az űrlap beállításainál, nincs egyedi kódolás.

## Kinek ajánlott?

- **Apró- és álláshirdetési oldalak** üzemeltetőinek, ahol a tartalom természeténél fogva időérzékeny.
- **Közösségi beküldésű portáloknak**, ahol a felhasználók adják a posztokat és fontos a tartalom életciklus-kezelése.
- **Esemény- és akciógyűjtő oldalaknak**, ahol a lejárt események/ajánlatok nem maradhatnak kint.
- **Ügynökségeknek és fejlesztőknek**, akik skálázható, karbantartást csökkentő megoldást keresnek ügyfeleik űrlapos tartalomkezeléséhez.

## Rendszerkövetelmények és korlátok

- **Függőségek:** JetEngine szükséges; a logika JetEngine vagy JetFormBuilder űrlapok Insert/Update Post műveletére épül.
- **Szerkesztők:** Elementor (Free) és WordPress Block Editor egyaránt támogatott az űrlapokhoz.
- **Hatókör:** A modul azokra a posztokra vonatkozik, amelyeket az űrlapban lejáratra állítasz. Nem globális „lejártató” minden meglévő posztra.
- **Akciók köre:** Lejáratkor Vázlat vagy Lomtár. Végleges törlés nem része az alapfunkciónak.

## Tippek a gördülékeny használathoz

- Állíts be ésszerű, üzleti igényhez igazított napértéket (pl. hirdetések: 30 nap; állások: 45–60 nap).
- Használd az Admin oszlopot a közelgő lejáratok áttekintésére.
- Teszteld le egy próbaposzttal, hogy a szervezeti workflow-hoz illeszkedik-e a kiválasztott lejárati akció.